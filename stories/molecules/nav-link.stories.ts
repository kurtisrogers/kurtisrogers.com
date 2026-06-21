import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Molecules/NavLink",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("molecules/nav-link/index.njk", {
      href: "/about",
      label: "About",
      currentPath: "/",
    }),
};

export const Active: Story = {
  render: () =>
    renderComponent("molecules/nav-link/index.njk", {
      href: "/about",
      label: "About",
      currentPath: "/about",
    }),
};
