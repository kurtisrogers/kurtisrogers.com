import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Atoms/Icon",
};

export default meta;

type Story = StoryObj;

export const GitHub: Story = {
  render: () => renderComponent("atoms/icon/index.njk", { name: "github" }),
};

export const LinkedIn: Story = {
  render: () => renderComponent("atoms/icon/index.njk", { name: "linkedin" }),
};

export const Sun: Story = {
  render: () => renderComponent("atoms/icon/index.njk", { name: "sun" }),
};

export const Moon: Story = {
  render: () => renderComponent("atoms/icon/index.njk", { name: "moon" }),
};
