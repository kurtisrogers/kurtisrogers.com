import type { Meta, StoryObj } from "@storybook/html";
import { hiringCtaSection } from "../../.storybook/fixtures.ts";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Organisms/HiringCta",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("organisms/hiring-cta/index.njk", {
      sections: { hiringCta: hiringCtaSection },
    }),
};
