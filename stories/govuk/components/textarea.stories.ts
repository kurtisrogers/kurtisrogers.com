/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Textarea",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`textarea\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
</div>`,
};

export const WithHint: Story = {
  name: "with hint",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <div id="more-detail-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <textarea class="govuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>`,
};

export const WithErrorMessage: Story = {
  name: "with error message",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="no-ni-reason">
    Why can’t you provide a National Insurance number?
  </label>
  <p id="no-ni-reason-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> You must provide an explanation
  </p>
  <textarea class="govuk-textarea govuk-textarea--error" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>`,
};

export const WithDefaultValue: Story = {
  name: "with default value",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea" id="full-address" name="address" rows="5">221B Baker Street
London
NW1 6XE
</textarea>
</div>`,
};

export const WithCustomRows: Story = {
  name: "with custom rows",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea" id="full-address" name="address" rows="8"></textarea>
</div>`,
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  render: () => `<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="textarea-with-page-heading">
      Full address
    </label>
  </h1>
  <textarea class="govuk-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>`,
};
