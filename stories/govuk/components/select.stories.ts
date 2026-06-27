/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Select",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`select\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select" id="select-1" name="select-1">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>`,
};

export const WithHintTextAndErrorMessage: Story = {
  name: "with hint text and error message",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="select-2">
    Label text goes here
  </label>
  <div id="select-2-hint" class="govuk-hint">
    Hint text goes here
  </div>
  <p id="select-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <select class="govuk-select govuk-select--error" id="select-2" name="select-2" aria-describedby="select-2-hint select-2-error">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2">GOV.UK frontend option 2</option>
    <option value="3">GOV.UK frontend option 3</option>
  </select>
</div>`,
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  render: () => `<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="select-3">
      Label text goes here
    </label>
  </h1>
  <select class="govuk-select" id="select-3" name="select-3">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>`,
};

export const WithFullWidthOverride: Story = {
  name: "with full width override",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select govuk-!-width-full" id="select-1" name="select-1">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>`,
};
