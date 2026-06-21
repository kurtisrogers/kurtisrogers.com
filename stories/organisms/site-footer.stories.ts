import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";
import { siteConfig } from "../../.storybook/fixtures.ts";

const meta: Meta = {
  title: "Organisms/SiteFooter",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("organisms/site-footer/index.njk", {
      site: siteConfig,
    }),
};
