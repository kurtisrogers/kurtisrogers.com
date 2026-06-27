/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Label",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`label\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<label class="govuk-label">
  National Insurance number
</label>`,
};

export const WithBoldText: Story = {
  name: "with bold text",
  render: () => `<label class="govuk-label govuk-label--s">
  National Insurance number
</label>`,
};

export const StyledAsXlText: Story = {
  name: "styled as xl text",
  render: () => `<label class="govuk-label govuk-label--xl">
  National Insurance number
</label>`,
};

export const StyledAsLargeText: Story = {
  name: "styled as large text",
  render: () => `<label class="govuk-label govuk-label--l">
  National Insurance number
</label>`,
};

export const StyledAsMediumText: Story = {
  name: "styled as medium text",
  render: () => `<label class="govuk-label govuk-label--m">
  National Insurance number
</label>`,
};

export const StyledAsSmallText: Story = {
  name: "styled as small text",
  render: () => `<label class="govuk-label govuk-label--s">
  National Insurance number
</label>`,
};

export const AsPageHeadingXl: Story = {
  name: "as page heading xl",
  render: () => `<h1 class="govuk-label-wrapper">
  <label class="govuk-label govuk-label--xl">
    National Insurance number
  </label>
</h1>`,
};

export const AsPageHeadingL: Story = {
  name: "as page heading l",
  render: () => `<h1 class="govuk-label-wrapper">
  <label class="govuk-label govuk-label--l">
    National Insurance number
  </label>
</h1>`,
};

export const AsPageHeadingM: Story = {
  name: "as page heading m",
  render: () => `<h1 class="govuk-label-wrapper">
  <label class="govuk-label govuk-label--m">
    National Insurance number
  </label>
</h1>`,
};

export const AsPageHeadingS: Story = {
  name: "as page heading s",
  render: () => `<h1 class="govuk-label-wrapper">
  <label class="govuk-label govuk-label--s">
    National Insurance number
  </label>
</h1>`,
};

export const AsPageHeadingWithoutClass: Story = {
  name: "as page heading without class",
  render: () => `<h1 class="govuk-label-wrapper">
  <label class="govuk-label">
    National Insurance number
  </label>
</h1>`,
};
