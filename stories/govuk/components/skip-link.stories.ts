/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Skip Link",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`skip-link\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<a href="#test-target-element" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>`,
};

export const WithFocus: Story = {
  name: "with focus",
  render: () => `<a href="#test-target-element" class="govuk-skip-link :focus" data-module="govuk-skip-link">Skip to main content</a>`,
};
