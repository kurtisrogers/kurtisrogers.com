/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Character Count",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`character-count\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-info"></textarea>
  <div id="more-detail-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};

export const WithHint: Story = {
  name: "with hint",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="with-hint">
    Can you provide more detail?
  </label>
  <div id="with-hint-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-hint" name="with-hint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>
  <div id="with-hint-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};

export const WithHintAndError: Story = {
  name: "with hint and error",
  render: () => `<div class="govuk-form-group govuk-form-group--error govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="with-error">
    Can you provide more detail?
  </label>
  <div id="with-error-hint" class="govuk-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </div>
  <p id="with-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please provide more detail
  </p>
  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count" id="with-error" name="with-error" rows="5" aria-describedby="with-error-info with-error-hint with-error-error"></textarea>
  <div id="with-error-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};

export const WithDefaultValue: Story = {
  name: "with default value",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="100">
  <label class="govuk-label" for="with-default-value">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-default-value" name="default-value" rows="5" aria-describedby="with-default-value-info">221B Baker Street
London
NW1 6XE
</textarea>
  <div id="with-default-value-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 100 characters
  </div>
</div>`,
};

export const WithDefaultValueExceedingLimit: Story = {
  name: "with default value exceeding limit",
  render: () => `<div class="govuk-form-group govuk-form-group--error govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="exceeding-characters">
    Full address
  </label>
  <p id="exceeding-characters-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please do not exceed the maximum allowed limit
  </p>
  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count" id="exceeding-characters" name="exceeding" rows="5" aria-describedby="exceeding-characters-info exceeding-characters-error">221B Baker Street
London
NW1 6XE
</textarea>
  <div id="exceeding-characters-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};

export const WithCustomRows: Story = {
  name: "with custom rows",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <label class="govuk-label" for="custom-rows">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="custom-rows" name="custom" rows="8" aria-describedby="custom-rows-info"></textarea>
  <div id="custom-rows-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="textarea-with-page-heading">
      Full address
    </label>
  </h1>
  <textarea class="govuk-textarea govuk-js-character-count" id="textarea-with-page-heading" name="address" rows="5" aria-describedby="textarea-with-page-heading-info"></textarea>
  <div id="textarea-with-page-heading-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};

export const WithWordCount: Story = {
  name: "with word count",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxwords="10">
  <label class="govuk-label" for="word-count">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="word-count" name="word-count" rows="5" aria-describedby="word-count-info"></textarea>
  <div id="word-count-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 words
  </div>
</div>`,
};

export const WithThreshold: Story = {
  name: "with threshold",
  render: () => `<div class="govuk-form-group govuk-character-count" data-module="govuk-character-count" data-maxlength="10" data-threshold="75">
  <label class="govuk-label" for="with-threshold">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count" id="with-threshold" name="with-threshold" rows="5" aria-describedby="with-threshold-info"></textarea>
  <div id="with-threshold-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 10 characters
  </div>
</div>`,
};
