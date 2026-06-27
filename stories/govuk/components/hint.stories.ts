/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Hint",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`hint\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-hint">
  It&#39;s on your National Insurance card, benefit letter, payslip or P60.
For example, &#39;QQ 12 34 56 C&#39;.

</div>`,
};

export const WithHtml: Story = {
  name: "with html",
  render: () => `<div class="govuk-hint">
  It's on your National Insurance card, benefit letter, payslip or <a class="govuk-link" href="#">P60</a>.
  For example, 'QQ 12 34 56 C'.
</div>`,
};
