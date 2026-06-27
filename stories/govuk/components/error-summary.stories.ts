/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Error Summary",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`error-summary\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            <a href="#example-error-1">The date your passport was issued must be in the past</a>
          </li>
          <li>
            <a href="#example-error-2">Enter a postcode, like AA1 1AA</a>
          </li>
        </ul>
    </div>
  </div>
</div>`,
};

export const WithoutLinks: Story = {
  name: "without links",
  render: () => `<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            Invalid username or password
          </li>
        </ul>
    </div>
  </div>
</div>`,
};

export const MixedWithAndWithoutLinks: Story = {
  name: "mixed with and without links",
  render: () => `<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            Invalid username or password
          </li>
          <li>
            <a href="#example-error-1">Agree to the terms of service to log in</a>
          </li>
        </ul>
    </div>
  </div>
</div>`,
};

export const WithDescriptionOnly: Story = {
  name: "with description only",
  render: () => `<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <p>
        The file couldn&#39;t be loaded. Try again later.
      </p>
    </div>
  </div>
</div>`,
};

export const WithEverything: Story = {
  name: "with everything",
  render: () => `<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <p>
        Please fix the errors below.
      </p>
        <ul class="govuk-list govuk-error-summary__list">
          <li>
            Invalid username or password
          </li>
          <li>
            <a href="#example-error-1">Agree to the terms of service to log in</a>
          </li>
        </ul>
    </div>
  </div>
</div>`,
};
