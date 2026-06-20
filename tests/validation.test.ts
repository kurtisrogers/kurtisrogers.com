import { describe, it, expect } from "vitest";
import { contactSchema } from "../src/validation/contact.js";

describe("contactSchema", () => {
  it("accepts valid input", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello, I would like to get in touch about a project.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short message", () => {
    const result = contactSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      message: "Hi",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Jane",
      email: "not-an-email",
      message: "This is a valid length message.",
    });
    expect(result.success).toBe(false);
  });
});
