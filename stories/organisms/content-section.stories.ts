import type { Meta, StoryObj } from "@storybook/html";
import { introductionSection } from "../../.storybook/fixtures.ts";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Organisms/ContentSection",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Introduction: Story = {
  render: () =>
    renderComponent("organisms/content-section/index.njk", {
      id: "introduction",
      heading: introductionSection.heading,
      body: introductionSection.body,
    }),
};
