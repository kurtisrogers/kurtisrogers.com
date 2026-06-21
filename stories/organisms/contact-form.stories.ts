import type { Meta, StoryObj } from "@storybook/html";
import { contactPage } from "../../.storybook/fixtures.ts";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Organisms/ContactForm",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    renderComponent("organisms/contact-form/index.njk", {
      page: contactPage,
    }),
};

export const WithSuccessFlash: Story = {
  render: () =>
    renderComponent("organisms/contact-form/index.njk", {
      page: contactPage,
      flash: {
        type: "success",
        message: "Thank you — your message has been sent.",
      },
    }),
};

export const WithErrorFlash: Story = {
  render: () =>
    renderComponent("organisms/contact-form/index.njk", {
      page: contactPage,
      flash: {
        type: "error",
        message: "Something went wrong. Please try again later.",
      },
    }),
};
