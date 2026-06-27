/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Fieldset",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`fieldset\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    What is your address?
  </legend>
</fieldset>`,
};

export const StyledAsXlText: Story = {
  name: "styled as xl text",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
    What is your address?
  </legend>
</fieldset>`,
};

export const StyledAsLargeText: Story = {
  name: "styled as large text",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    What is your address?
  </legend>
</fieldset>`,
};

export const StyledAsMediumText: Story = {
  name: "styled as medium text",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    What is your address?
  </legend>
</fieldset>`,
};

export const StyledAsSmallText: Story = {
  name: "styled as small text",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    What is your address?
  </legend>
</fieldset>`,
};

export const AsPageHeadingXl: Story = {
  name: "as page heading xl",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>`,
};

export const AsPageHeadingL: Story = {
  name: "as page heading l",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>`,
};

export const AsPageHeadingM: Story = {
  name: "as page heading m",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>`,
};

export const AsPageHeadingS: Story = {
  name: "as page heading s",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>`,
};

export const AsPageHeadingWithoutClass: Story = {
  name: "as page heading without class",
  render: () => `<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>`,
};
