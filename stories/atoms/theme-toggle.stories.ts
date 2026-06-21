import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent, withAlpine } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Atoms/ThemeToggle",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    withAlpine(renderComponent("atoms/theme-toggle/index.njk")),
};
