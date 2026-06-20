import { describe, it, expect, beforeEach, afterEach } from "vitest";
import request from "supertest";
import { createApp } from "../src/app.js";
import { clearFeatureFlagCache } from "../src/services/features.js";

const app = createApp();

describe("page routes", () => {
  it("GET / returns 200 with home content", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Kurtis Rogers");
    expect(res.text).toContain("<h1");
    expect(res.text).toContain("Skip to main content");
  });

  it("GET /about returns 200", async () => {
    const res = await request(app).get("/about");
    expect(res.status).toBe(200);
    expect(res.text).toContain("About Me");
  });

  it("GET /contact returns 200 with form", async () => {
    const res = await request(app).get("/contact");
    expect(res.status).toBe(200);
    expect(res.text).toContain('action="/contact"');
    expect(res.text).toContain('name="email"');
  });

  it("GET /unknown returns 404", async () => {
    const res = await request(app).get("/does-not-exist");
    expect(res.status).toBe(404);
    expect(res.text).toContain("Page not found");
  });
});

describe("contact form", () => {
  it("POST /contact with invalid data returns 422", async () => {
    const res = await request(app)
      .post("/contact")
      .type("form")
      .send({ name: "", email: "bad", message: "short" });
    expect(res.status).toBe(422);
    expect(res.text).toContain("flash--error");
  });

  it("POST /contact HTMX returns flash fragment", async () => {
    const res = await request(app)
      .post("/contact")
      .set("HX-Request", "true")
      .type("form")
      .send({
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message for the contact form.",
      });
    expect([503, 200]).toContain(res.status);
    expect(res.text).toContain("flash");
  });
});

describe("feature flags", () => {
  beforeEach(() => {
    clearFeatureFlagCache();
  });

  afterEach(() => {
    delete process.env.FEATURE_HIRING_CTA;
    clearFeatureFlagCache();
  });

  it("env override disables hiring CTA", async () => {
    process.env.FEATURE_HIRING_CTA = "false";
    clearFeatureFlagCache();
    const res = await request(app).get("/");
    expect(res.text).not.toContain("Open to opportunities");
  });
});
