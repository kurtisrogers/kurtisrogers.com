import type { StorybookConfig } from "@storybook/html-vite";
import path from "node:path";

function govukAssetPaths(basePath: string) {
  const normalised = basePath.endsWith("/") ? basePath : `${basePath}/`;
  return `${normalised}assets/`.replace(/\/{2,}/g, "/");
}

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|js)"],
  staticDirs: [
    {
      from: "../node_modules/govuk-frontend/dist/govuk/assets",
      to: "/assets",
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
    const base = process.env.STORYBOOK_BASE_PATH ?? "/";
    const assetsBase = govukAssetPaths(base);

    config.base = base;
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias["govuk-frontend"] = path.resolve(
      "node_modules/govuk-frontend/dist/govuk",
    );

    config.plugins ??= [];
    config.plugins.push({
      name: "govuk-frontend-asset-paths",
      transform(code, id) {
        if (!id.includes("govuk-frontend.min.css")) {
          return null;
        }

        return {
          code: code.replace(/url\(\/assets\//g, `url(${assetsBase}`),
          map: null,
        };
      },
    });

    return config;
  },
};

export default config;
