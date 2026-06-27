/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Error Message",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`error-message\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message about full name goes here
</p>`,
};

export const Translated: Story = {
  name: "translated",
  render: () => `<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma
</p>`,
};
