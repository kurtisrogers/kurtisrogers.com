import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";
import { siteConfig } from "../../.storybook/fixtures.ts";

const meta: Meta = {
  title: "Molecules/SocialLinks",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("molecules/social-links/index.njk", {
      links: siteConfig.social,
    }),
};
