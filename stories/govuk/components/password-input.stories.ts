/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Password Input",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`password-input\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password">
    Password
  </label>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>`,
};

export const WithHintText: Story = {
  name: "with hint text",
  render: () => `<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password-input-with-hint-text">
    Password
  </label>
  <div id="password-input-with-hint-text-hint" class="govuk-hint">
    It probably has some letters, numbers and maybe even some symbols in it.
  </div>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password-input-with-hint-text" name="test-name-2" type="password" spellcheck="false" aria-describedby="password-input-with-hint-text-hint" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password-input-with-hint-text" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>`,
};

export const WithErrorMessage: Story = {
  name: "with error message",
  render: () => `<div class="govuk-form-group govuk-form-group--error govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password-input-with-error-message">
    Password
  </label>
  <div id="password-input-with-error-message-hint" class="govuk-hint">
    It probably has some letters, numbers and maybe even some symbols in it.
  </div>
  <p id="password-input-with-error-message-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input govuk-input--error" id="password-input-with-error-message" name="test-name-3" type="password" spellcheck="false" aria-describedby="password-input-with-error-message-hint password-input-with-error-message-error" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password-input-with-error-message" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>`,
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  render: () => `<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="password-input-with-page-heading">
      Password
    </label>
  </h1>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password-input-with-page-heading" name="test-name" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password-input-with-page-heading" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>`,
};

export const WithInputWidthClass: Story = {
  name: "with input width class",
  render: () => `<div class="govuk-form-group govuk-password-input" data-module="govuk-password-input">
  <label class="govuk-label" for="password-input-width">
    Password
  </label>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input govuk-input--width-10" id="password-input-width" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password-input-width" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>`,
};
