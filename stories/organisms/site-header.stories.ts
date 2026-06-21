import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent, withAlpine } from "../../.storybook/nunjucks.ts";
import { siteConfig } from "../../.storybook/fixtures.ts";

const meta: Meta = {
  title: "Organisms/SiteHeader",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    withAlpine(
      renderComponent("organisms/site-header/index.njk", {
        site: siteConfig,
        currentPath: "/",
      }),
    ),
};

export const ContactActive: Story = {
  render: () =>
    withAlpine(
      renderComponent("organisms/site-header/index.njk", {
        site: siteConfig,
        currentPath: "/contact",
      }),
    ),
};
