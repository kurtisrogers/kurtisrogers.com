import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Atoms/Link",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("atoms/link/index.njk", {
      href: "/about",
      label: "About",
    }),
};

export const External: Story = {
  render: () =>
    renderComponent("atoms/link/index.njk", {
      href: "https://www.linkedin.com/in/kurtisrogers",
      label: "LinkedIn profile",
      external: true,
    }),
};
