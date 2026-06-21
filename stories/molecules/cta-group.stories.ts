import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Molecules/CtaGroup",
};

export default meta;

type Story = StoryObj;

export const WithButton: Story = {
  render: () =>
    renderComponent("molecules/cta-group/index.njk", {
      heading: "Say hello",
      body: "<p>Have a technical question or want to connect? Feel free to reach out.</p>",
      buttonHref: "/contact",
      buttonText: "Get in touch",
    }),
};

export const TextOnly: Story = {
  render: () =>
    renderComponent("molecules/cta-group/index.njk", {
      heading: "How I work",
      body: "<p>I care about accessibility, clear communication, and maintainable code.</p>",
    }),
};
