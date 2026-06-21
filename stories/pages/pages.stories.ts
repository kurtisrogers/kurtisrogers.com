import type { Meta, StoryObj } from "@storybook/html";
import { pageContext } from "../../.storybook/fixtures.ts";
import { renderTemplate } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Pages",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Home: Story = {
  render: () => renderTemplate("pages/home.njk", pageContext("home", "/")),
};

export const About: Story = {
  render: () => renderTemplate("pages/about.njk", pageContext("about", "/about")),
};

export const Contact: Story = {
  render: () =>
    renderTemplate("pages/contact.njk", pageContext("contact", "/contact")),
};

export const NotFound: Story = {
  render: () =>
    renderTemplate("pages/404.njk", pageContext("not-found", "/missing")),
};
