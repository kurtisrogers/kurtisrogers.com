/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`button\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>`,
};

export const DefaultHoverState: Story = {
  name: "default hover state",
  render: () => `<button type="submit" class="govuk-button :hover" data-module="govuk-button">
  Save and continue
</button>`,
};

export const DefaultActiveState: Story = {
  name: "default active state",
  render: () => `<button type="submit" class="govuk-button :active" data-module="govuk-button">
  Save and continue
</button>`,
};

export const DefaultFocusState: Story = {
  name: "default focus state",
  render: () => `<button type="submit" class="govuk-button :focus" data-module="govuk-button">
  Save and continue
</button>`,
};

export const Disabled: Story = {
  name: "disabled",
  render: () => `<button type="submit" disabled aria-disabled="true" class="govuk-button" data-module="govuk-button">
  Disabled button
</button>`,
};

export const Link: Story = {
  name: "link",
  render: () => `<a href="/" role="button" draggable="false" class="govuk-button" data-module="govuk-button">
  Link button
</a>`,
};

export const Start: Story = {
  name: "start",
  render: () => `<button type="submit" class="govuk-button govuk-button--start" data-module="govuk-button">
  Start now button
  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
  </svg>
</button>`,
};

export const Secondary: Story = {
  name: "secondary",
  render: () => `<button type="submit" name="secondary" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Secondary button
</button>`,
};

export const SecondaryHoverState: Story = {
  name: "secondary hover state",
  render: () => `<button type="submit" name="secondary" class="govuk-button govuk-button--secondary :hover" data-module="govuk-button">
  Secondary button
</button>`,
};

export const SecondaryActiveState: Story = {
  name: "secondary active state",
  render: () => `<button type="submit" name="secondary" class="govuk-button govuk-button--secondary :active" data-module="govuk-button">
  Secondary button
</button>`,
};

export const SecondaryFocusState: Story = {
  name: "secondary focus state",
  render: () => `<button type="submit" name="secondary" class="govuk-button govuk-button--secondary :focus" data-module="govuk-button">
  Secondary button
</button>`,
};

export const SecondaryDisabled: Story = {
  name: "secondary disabled",
  render: () => `<button type="submit" name="secondary" disabled aria-disabled="true" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Secondary button disabled
</button>`,
};

export const Warning: Story = {
  name: "warning",
  render: () => `<button type="submit" name="Warning" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Warning button
</button>`,
};

export const WarningHoverState: Story = {
  name: "warning hover state",
  render: () => `<button type="submit" name="Warning" class="govuk-button govuk-button--warning :hover" data-module="govuk-button">
  Warning button
</button>`,
};

export const WarningActiveState: Story = {
  name: "warning active state",
  render: () => `<button type="submit" name="Warning" class="govuk-button govuk-button--warning :active" data-module="govuk-button">
  Warning button
</button>`,
};

export const WarningFocusState: Story = {
  name: "warning focus state",
  render: () => `<button type="submit" name="Warning" class="govuk-button govuk-button--warning :focus" data-module="govuk-button">
  Warning button
</button>`,
};

export const WarningDisabled: Story = {
  name: "warning disabled",
  render: () => `<button type="submit" name="warning" disabled aria-disabled="true" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Warning button disabled
</button>`,
};

export const Inverse: Story = {
  name: "inverse",
  render: () => `<button type="submit" name="Inverse" class="govuk-button govuk-button--inverse" data-module="govuk-button">
  Inverse button
</button>`,
};

export const InverseHoverState: Story = {
  name: "inverse hover state",
  render: () => `<button type="submit" name="Inverse" class="govuk-button govuk-button--inverse :hover" data-module="govuk-button">
  Inverse button
</button>`,
};

export const InverseActiveState: Story = {
  name: "inverse active state",
  render: () => `<button type="submit" name="Inverse" class="govuk-button govuk-button--inverse :active" data-module="govuk-button">
  Inverse button
</button>`,
};

export const InverseFocusState: Story = {
  name: "inverse focus state",
  render: () => `<button type="submit" name="Inverse" class="govuk-button govuk-button--inverse :focus" data-module="govuk-button">
  Inverse button
</button>`,
};

export const InverseDisabled: Story = {
  name: "inverse disabled",
  render: () => `<button type="submit" name="Inverse" disabled aria-disabled="true" class="govuk-button govuk-button--inverse" data-module="govuk-button">
  Inverse button
</button>`,
};
