/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Details",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`details\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>`,
};

export const Expanded: Story = {
  name: "expanded",
  render: () => `<details id="help-with-nationality" class="govuk-details" open>
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.
  </div>
</details>`,
};

export const WithHtml: Story = {
  name: "with html",
  render: () => `<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Where to find your National Insurance Number
    </span>
  </summary>
  <div class="govuk-details__text">
    Your National Insurance number can be found on
<ul>
  <li>your National Insurance card</li>
  <li>your payslip</li>
  <li>P60</li>
  <li>benefits information</li>
  <li>tax return</li>
</ul>

  </div>
</details>`,
};
