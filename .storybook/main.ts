import type { StorybookConfig } from "@storybook/html-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|js)"],
  staticDirs: [
    {
      from: "../node_modules/govuk-frontend/dist/govuk",
      to: "/assets/govuk",
    },
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  async viteFinal(config) {
    config.base = process.env.STORYBOOK_BASE_PATH ?? "/";
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias["govuk-frontend"] = path.resolve(
      "node_modules/govuk-frontend/dist/govuk",
    );
    return config;
  },
};

export default config;
