import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getFeatureFlags, clearFeatureFlagCache } from "../src/services/features.js";

describe("getFeatureFlags", () => {
  beforeEach(() => {
    clearFeatureFlagCache();
  });

  afterEach(() => {
    delete process.env.FEATURE_HIRING_CTA;
    delete process.env.FEATURE_HOME_INTRODUCTION;
    clearFeatureFlagCache();
  });

  it("loads defaults from config file", () => {
    const flags = getFeatureFlags();
    expect(flags.hiringCta).toBe(true);
    expect(flags.homeIntroduction).toBe(true);
  });

  it("respects env override", () => {
    process.env.FEATURE_HIRING_CTA = "false";
    clearFeatureFlagCache();
    const flags = getFeatureFlags();
    expect(flags.hiringCta).toBe(false);
  });
});
