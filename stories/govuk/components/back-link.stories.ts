/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Back Link",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`back-link\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<a href="#" class="govuk-back-link">Back</a>`,
};

export const Inverse: Story = {
  name: "inverse",
  render: () => `<a href="#" class="govuk-back-link govuk-back-link--inverse">Back</a>`,
};
