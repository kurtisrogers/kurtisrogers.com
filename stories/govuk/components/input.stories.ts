/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Input",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`input\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="test-name">
    National Insurance number
  </label>
  <input class="govuk-input" id="test-name" name="test-name" type="text">
</div>`,
};

export const WithHintText: Story = {
  name: "with hint text",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-hint-text">
    National insurance number
  </label>
  <div id="input-with-hint-text-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input" id="input-with-hint-text" name="test-name-2" type="text" aria-describedby="input-with-hint-text-hint">
</div>`,
};

export const WithErrorMessage: Story = {
  name: "with error message",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="input-with-error-message">
    National Insurance number
  </label>
  <p id="input-with-error-message-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input class="govuk-input govuk-input--error" id="input-with-error-message" name="test-name-3" type="text" aria-describedby="input-with-error-message-error">
</div>`,
};

export const WithErrorAndHint: Story = {
  name: "with error and hint",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="with-error-hint">
    National insurance number
  </label>
  <div id="with-error-hint-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <p id="with-error-hint-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input class="govuk-input govuk-input--error" id="with-error-hint" name="with-error-hint" type="text" aria-describedby="with-error-hint-hint with-error-hint-error">
</div>`,
};

export const WithWidth2Class: Story = {
  name: "with width-2 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-2">
    National insurance number
  </label>
  <div id="input-width-2-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-2" id="input-width-2" name="test-width-2" type="text" aria-describedby="input-width-2-hint">
</div>`,
};

export const WithWidth3Class: Story = {
  name: "with width-3 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-3">
    National insurance number
  </label>
  <div id="input-width-3-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-3" id="input-width-3" name="test-width-3" type="text" aria-describedby="input-width-3-hint">
</div>`,
};

export const WithWidth4Class: Story = {
  name: "with width-4 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-4">
    National insurance number
  </label>
  <div id="input-width-4-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-4" id="input-width-4" name="test-width-4" type="text" aria-describedby="input-width-4-hint">
</div>`,
};

export const WithWidth5Class: Story = {
  name: "with width-5 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-5">
    National insurance number
  </label>
  <div id="input-width-5-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-5" id="input-width-5" name="test-width-5" type="text" aria-describedby="input-width-5-hint">
</div>`,
};

export const WithWidth10Class: Story = {
  name: "with width-10 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-10">
    National insurance number
  </label>
  <div id="input-width-10-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-10" id="input-width-10" name="test-width-10" type="text" aria-describedby="input-width-10-hint">
</div>`,
};

export const WithWidth20Class: Story = {
  name: "with width-20 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-20">
    National insurance number
  </label>
  <div id="input-width-20-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-20" id="input-width-20" name="test-width-20" type="text" aria-describedby="input-width-20-hint">
</div>`,
};

export const WithWidth30Class: Story = {
  name: "with width-30 class",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-width-30">
    National insurance number
  </label>
  <div id="input-width-30-hint" class="govuk-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </div>
  <input class="govuk-input govuk-input--width-30" id="input-width-30" name="test-width-30" type="text" aria-describedby="input-width-30-hint">
</div>`,
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  render: () => `<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="input-with-page-heading">
      National Insurance number
    </label>
  </h1>
  <input class="govuk-input" id="input-with-page-heading" name="test-name" type="text">
</div>`,
};

export const WithPrefix: Story = {
  name: "with prefix",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-prefix">
    Amount, in pounds
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input" id="input-with-prefix" name="amount" type="text">
  </div>
</div>`,
};

export const WithSuffix: Story = {
  name: "with suffix",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-suffix">
    Weight, in kilograms
  </label>
  <div class="govuk-input__wrapper">
    <input class="govuk-input" id="input-with-suffix" name="weight" type="text">
    <div class="govuk-input__suffix" aria-hidden="true">kg</div>
  </div>
</div>`,
};

export const WithPrefixAndSuffix: Story = {
  name: "with prefix and suffix",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-prefix-suffix">
    Cost per item, in pounds
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input" id="input-with-prefix-suffix" name="cost" type="text">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>`,
};

export const WithPrefixAndSuffixAndError: Story = {
  name: "with prefix and suffix and error",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="input-with-prefix-suffix">
    Cost per item, in pounds
  </label>
  <p id="input-with-prefix-suffix-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input govuk-input--error" id="input-with-prefix-suffix" name="cost" type="text" aria-describedby="input-with-prefix-suffix-error">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>`,
};

export const WithPrefixAndSuffixAndWidthModifier: Story = {
  name: "with prefix and suffix and width modifier",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-prefix-suffix">
    Cost per item, in pounds
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input govuk-input--width-5" id="input-with-prefix-suffix" name="cost" type="text">
    <div class="govuk-input__suffix" aria-hidden="true">per item</div>
  </div>
</div>`,
};

export const WithExtraLetterSpacing: Story = {
  name: "with extra letter spacing",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="input-with-extra-letter-spacing">
    National insurance number
  </label>
  <input class="govuk-input govuk-input--width-30 govuk-input--extra-letter-spacing" id="input-with-extra-letter-spacing" name="input-with-extra-letter-spacing" type="text" value="QQ 12 34 56 C">
</div>`,
};
