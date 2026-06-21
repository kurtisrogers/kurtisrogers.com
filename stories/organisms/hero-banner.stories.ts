import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Organisms/HeroBanner",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Home: Story = {
  render: () =>
    renderComponent("organisms/hero-banner/index.njk", {
      heading: "Kurtis Rogers",
      subheading: "Full-Stack Software Engineer",
      tagline:
        "I build accessible, maintainable web applications — from government and enterprise platforms to polished product UIs.",
    }),
};

export const About: Story = {
  render: () =>
    renderComponent("organisms/hero-banner/index.njk", {
      heading: "About Me",
      subheading: "Full-stack engineer · Bristol, UK · 10+ years in web development",
    }),
};
