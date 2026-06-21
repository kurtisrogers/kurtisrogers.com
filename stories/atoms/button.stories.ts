import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Atoms/Button",
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () =>
    renderComponent("atoms/button/index.njk", {
      href: "/contact",
      label: "Get in touch",
      variant: "primary",
    }),
};

export const Default: Story = {
  render: () =>
    renderComponent("atoms/button/index.njk", {
      href: "/about",
      label: "About me",
    }),
};

export const External: Story = {
  render: () =>
    renderComponent("atoms/button/index.njk", {
      href: "https://github.com/Kurtmcmurt",
      label: "GitHub",
      external: true,
    }),
};
