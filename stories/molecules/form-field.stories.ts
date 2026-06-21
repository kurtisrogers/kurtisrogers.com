import type { Meta, StoryObj } from "@storybook/html";
import { renderComponent } from "../../.storybook/nunjucks.ts";

const meta: Meta = {
  title: "Molecules/FormField",
};

export default meta;

type Story = StoryObj;

export const Text: Story = {
  render: () =>
    renderComponent("molecules/form-field/index.njk", {
      id: "name",
      name: "name",
      label: "Name",
      required: true,
    }),
};

export const Email: Story = {
  render: () =>
    renderComponent("molecules/form-field/index.njk", {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    }),
};

export const Textarea: Story = {
  render: () =>
    renderComponent("molecules/form-field/index.njk", {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea",
      rows: 6,
      required: true,
    }),
};
