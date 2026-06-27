/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Generic Header",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`generic-header\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-generic-header">
  <div class="govuk-generic-header__container govuk-width-container">
    <div class="govuk-generic-header__logo">
      <a href="/" class="govuk-generic-header__homepage-link">
        My cool service
      </a>
    </div>
  </div>
</div>`,
};

export const WithImageLogo: Story = {
  name: "with image logo",
  render: () => `<div class="govuk-generic-header">
  <div class="govuk-generic-header__container govuk-width-container">
    <div class="govuk-generic-header__logo">
      <a href="/" class="govuk-generic-header__homepage-link">
        <svg width="28" height="30" viewBox="0 0 28 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<title>HM Pizza Finder service</title>
<circle cx="13.5549" cy="4.21349" r="4.21349"/>
<circle cx="13.5549" cy="25.7865" r="4.21349"/>
<circle cx="22.8963" cy="9.6068" r="4.21349"/>
<circle cx="4.2135" cy="20.3932" r="4.21349"/>
<circle cx="22.8963" cy="20.3932" r="4.21349"/>
<circle cx="4.21351" cy="9.60674" r="4.21349"/>
</svg>

      </a>
    </div>
  </div>
</div>`,
};

export const WithTextAndImageLogo: Story = {
  name: "with text and image logo",
  render: () => `<div class="govuk-generic-header">
  <div class="govuk-generic-header__container govuk-width-container">
    <div class="govuk-generic-header__logo">
      <a href="/" class="govuk-generic-header__homepage-link">
        <svg width="28" height="30" viewBox="0 0 28 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<title>HM Pizza Finder service</title>
<circle cx="13.5549" cy="4.21349" r="4.21349"/>
<circle cx="13.5549" cy="25.7865" r="4.21349"/>
<circle cx="22.8963" cy="9.6068" r="4.21349"/>
<circle cx="4.2135" cy="20.3932" r="4.21349"/>
<circle cx="22.8963" cy="20.3932" r="4.21349"/>
<circle cx="4.21351" cy="9.60674" r="4.21349"/>
</svg> | HM Pizza Finder service

      </a>
    </div>
  </div>
</div>`,
};

export const FullWidth: Story = {
  name: "full width",
  render: () => `<div class="govuk-generic-header">
  <div class="govuk-generic-header__container govuk-generic-header__container--full-width">
    <div class="govuk-generic-header__logo">
      <a href="/" class="govuk-generic-header__homepage-link">
        <svg width="28" height="30" viewBox="0 0 28 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<title>HM Pizza Finder service</title>
<circle cx="13.5549" cy="4.21349" r="4.21349"/>
<circle cx="13.5549" cy="25.7865" r="4.21349"/>
<circle cx="22.8963" cy="9.6068" r="4.21349"/>
<circle cx="4.2135" cy="20.3932" r="4.21349"/>
<circle cx="22.8963" cy="20.3932" r="4.21349"/>
<circle cx="4.21351" cy="9.60674" r="4.21349"/>
</svg> | HM Pizza Finder service

      </a>
    </div>
  </div>
</div>`,
};
