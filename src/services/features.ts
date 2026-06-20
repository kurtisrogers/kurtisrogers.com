import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { FeatureFlags } from "../types/index.js";

const FEATURE_ENV_MAP: Record<keyof FeatureFlags, string> = {
  hiringCta: "FEATURE_HIRING_CTA",
  homeIntroduction: "FEATURE_HOME_INTRODUCTION",
  homeHonourableDeveloper: "FEATURE_HOME_HONOURABLE_DEVELOPER",
  aboutTechnology: "FEATURE_ABOUT_TECHNOLOGY",
  aboutCareer: "FEATURE_ABOUT_CAREER",
};

const CONFIG_PATH = join(process.cwd(), "config", "features.json");
const TTL_MS = 60_000;

let cachedFlags: FeatureFlags | null = null;
let cacheExpiry = 0;

function parseEnvOverride(key: string): boolean | undefined {
  const value = process.env[key];
  if (value === undefined) return undefined;
  return value.toLowerCase() === "true";
}

function loadFromFile(): FeatureFlags {
  const raw = readFileSync(CONFIG_PATH, "utf-8");
  return JSON.parse(raw) as FeatureFlags;
}

export function getFeatureFlags(): FeatureFlags {
  const now = Date.now();
  if (cachedFlags && now < cacheExpiry) {
    return cachedFlags;
  }

  const fileFlags = loadFromFile();
  const flags = { ...fileFlags };

  for (const [flag, envKey] of Object.entries(FEATURE_ENV_MAP) as [
    keyof FeatureFlags,
    string,
  ][]) {
    const override = parseEnvOverride(envKey);
    if (override !== undefined) {
      flags[flag] = override;
    }
  }

  cachedFlags = flags;
  cacheExpiry = now + TTL_MS;
  return flags;
}

export function clearFeatureFlagCache(): void {
  cachedFlags = null;
  cacheExpiry = 0;
}
