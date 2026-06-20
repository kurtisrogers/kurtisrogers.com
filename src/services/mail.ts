import nodemailer from "nodemailer";
import type { ContactFormData } from "../types/index.js";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!host || !port || !user || !pass || !to || !from) {
    return null;
  }

  return {
    transport: nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    }),
    to,
    from,
  };
}

export function isMailConfigured(): boolean {
  return getSmtpConfig() !== null;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const config = getSmtpConfig();
  if (!config) {
    throw new Error("SMTP is not configured");
  }

  await config.transport.sendMail({
    from: config.from,
    to: config.to,
    replyTo: data.email,
    subject: `Contact form: ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
    `,
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
