/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Inset Text",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`inset-text\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-inset-text">
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
</div>`,
};

export const WithHtml: Story = {
  name: "with html",
  render: () => `<div class="govuk-inset-text">
  <p class="govuk-body">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>
  <div class="govuk-warning-text">
    <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
    <strong class="govuk-warning-text__text">
      <span class="govuk-warning-text__assistive">Warning</span>
      You can be fined up to £5,000 if you don’t register.
    </strong>
  </div>
  <p class="govuk-body">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>
</div>`,
};
