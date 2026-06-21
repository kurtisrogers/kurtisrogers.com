import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Atoms/Badge",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("atoms/badge/index.njk", {
      label: "Bristol, UK",
    }),
};
