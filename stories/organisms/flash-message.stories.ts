import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Organisms/FlashMessage",
};

export default meta;

type Story = StoryObj;

export const Success: Story = {
  render: () =>
    renderComponent("organisms/flash-message/index.njk", {
      type: "success",
      message: "Thank you — your message has been sent.",
    }),
};

export const Error: Story = {
  render: () =>
    renderComponent("organisms/flash-message/index.njk", {
      type: "error",
      message: "Please enter a valid email address.",
    }),
};
