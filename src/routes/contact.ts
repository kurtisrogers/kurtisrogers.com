import type { Request, Response } from "express";
import { loadPageContent } from "../services/content.js";
import { getFeatureFlags } from "../services/features.js";
import { isMailConfigured, sendContactEmail } from "../services/mail.js";
import { siteConfig } from "../config/site.js";
import { contactSchema, formatZodErrors } from "../validation/contact.js";

function isHtmxRequest(req: Request): boolean {
  return req.get("HX-Request") === "true";
}

function renderFlash(
  res: Response,
  type: "success" | "error",
  message: string,
  status = 200,
): void {
  res.status(status).render("organisms/flash-message/index.njk", {
    type,
    message,
  });
}

function renderContactWithFlash(
  res: Response,
  type: "success" | "error",
  message: string,
  status: number,
): void {
  const page = loadPageContent("contact");
  res.status(status).render("pages/contact.njk", {
    site: siteConfig,
    features: getFeatureFlags(),
    page,
    currentPath: "/contact",
    theme: "light",
    flash: { type, message },
  });
}

export async function handleContactPost(
  req: Request,
  res: Response,
): Promise<void> {
  const page = loadPageContent("contact");
  const form = page.form as {
    successMessage: string;
    errorMessage: string;
  };

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const message = formatZodErrors(parsed.error);
    if (isHtmxRequest(req)) {
      renderFlash(res, "error", message, 422);
      return;
    }
    renderContactWithFlash(res, "error", message, 422);
    return;
  }

  if (!isMailConfigured()) {
    const message =
      process.env.NODE_ENV === "production"
        ? form.errorMessage
        : "Contact form is not configured. Set SMTP environment variables.";
    if (isHtmxRequest(req)) {
      renderFlash(res, "error", message, 503);
      return;
    }
    renderContactWithFlash(res, "error", message, 503);
    return;
  }

  try {
    await sendContactEmail(parsed.data);
    if (isHtmxRequest(req)) {
      renderFlash(res, "success", form.successMessage);
      return;
    }
    renderContactWithFlash(res, "success", form.successMessage, 200);
  } catch {
    if (isHtmxRequest(req)) {
      renderFlash(res, "error", form.errorMessage, 500);
      return;
    }
    renderContactWithFlash(res, "error", form.errorMessage, 500);
  }
}
