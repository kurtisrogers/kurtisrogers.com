/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Cookie Banner",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`cookie-banner\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner">
  <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">
          Cookies on this government service
        </h2>
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">We use analytics cookies to help understand how users use our service.</p>
        </div>
      </div>
    </div>

    <div class="govuk-button-group">
      <button type="submit" value="accept" name="cookies" class="govuk-button" data-module="govuk-button">
        Accept analytics cookies
      </button>
      <button type="submit" value="reject" name="cookies" class="govuk-button" data-module="govuk-button">
        Reject analytics cookies
      </button>
      <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
    </div>

  </div>
</div>`,
};

export const AcceptedConfirmationBanner: Story = {
  name: "accepted confirmation banner",
  render: () => `<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner">
  <div class="govuk-cookie-banner__message govuk-width-container" role="alert">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">Your cookie preferences have been saved. You have accepted cookies.</p>
        </div>
      </div>
    </div>

    <div class="govuk-button-group">
      <button type="button" class="govuk-button" data-module="govuk-button">
        Hide cookie message
      </button>
    </div>

  </div>
</div>`,
};

export const RejectedConfirmationBanner: Story = {
  name: "rejected confirmation banner",
  render: () => `<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner">
  <div class="govuk-cookie-banner__message govuk-width-container" role="alert">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">Your cookie preferences have been saved. You have rejected cookies.</p>
        </div>
      </div>
    </div>

    <div class="govuk-button-group">
      <button type="button" class="govuk-button" data-module="govuk-button">
        Hide cookie message
      </button>
    </div>

  </div>
</div>`,
};

export const WithHtml: Story = {
  name: "with html",
  render: () => `<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookie banner">
  <div class="govuk-cookie-banner__message govuk-width-container">

    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">
          Cookies on <span>my service</span>
        </h2>
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">We use cookies in <span>our service</span>.</p>
          <p class="govuk-body">We’d like to use analytics cookies so we can understand how you use the Design System and make improvements.</p>
        </div>
      </div>
    </div>

    <div class="govuk-button-group">
      <button type="submit" value="accept" name="cookies" class="govuk-button" data-module="govuk-button">
        Accept analytics cookies
      </button>
      <button type="submit" value="reject" name="cookies" class="govuk-button" data-module="govuk-button">
        Reject analytics cookies
      </button>
      <a class="govuk-link" href="/cookie-preferences">View cookie preferences</a>
    </div>

  </div>
</div>`,
};
