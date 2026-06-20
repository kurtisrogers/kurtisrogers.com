import express from "express";
import { join } from "node:path";
import nunjucks from "nunjucks";
import { handleContactPost } from "./routes/contact.js";
import { contactRateLimiter } from "./middleware/rate-limit.js";
import {
  renderAbout,
  renderContact,
  renderHome,
  renderNotFound,
} from "./routes/pages.js";

export function createApp() {
  const app = express();
  const viewsPath = join(process.cwd(), "views");

  const env = nunjucks.configure(viewsPath, {
    autoescape: true,
    express: app,
    noCache: process.env.NODE_ENV !== "production",
  });

  env.addFilter("date", (value: string, format: string) => {
    const date = value === "now" ? new Date() : new Date(value);
    if (format === "Y") {
      return String(date.getFullYear());
    }
    return date.toISOString();
  });

  env.addFilter("markdown", (value: string) => {
    if (!value) return "";
    return value
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n\n/g, "</p><p>")
      .replace(/\n/g, "<br>");
  });

  app.set("view engine", "njk");
  app.disable("x-powered-by");

  app.use(express.static(join(process.cwd(), "public")));
  app.use(express.urlencoded({ extended: false }));

  app.get("/", renderHome);
  app.get("/about", renderAbout);
  app.get("/contact", renderContact);
  app.post("/contact", contactRateLimiter, handleContactPost);
  app.use((_req, res) => {
    renderNotFound(_req, res);
  });

  return app;
}
