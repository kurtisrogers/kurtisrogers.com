/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Notification Banner",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`notification-banner\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-notification-banner__heading">
      This publication was withdrawn on 7 March 2014.
    </p>
  </div>
</div>`,
};

export const WithTextAsHtml: Story = {
  name: "with text as html",
  render: () => `<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <h3 class="govuk-notification-banner__heading">
      This publication was withdrawn on 7 March 2014
    </h3>
    <p class="govuk-body">
      The following 4 files are available
    </p>
    <ul class="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
      <li><a href="#" class="govuk-notification-banner__link">government-strategy.pdf</a></li>
      <li><a href="#" class="govuk-notification-banner__link">government-strategy-v2.pdf</a></li>
      <li><a href="#" class="govuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>
      <li><a href="#" class="govuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>
    </ul>
  </div>
</div>`,
};

export const WithTypeAsSuccess: Story = {
  name: "with type as success",
  render: () => `<div class="govuk-notification-banner govuk-notification-banner--success" role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Success
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-notification-banner__heading">
      Email sent to example@email.com
    </p>
  </div>
</div>`,
};

export const WithLongHeading: Story = {
  name: "with long heading",
  render: () => `<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-notification-banner__heading">
      This publication was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters.
    </p>
  </div>
</div>`,
};

export const WithLotsOfContent: Story = {
  name: "with lots of content",
  render: () => `<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <h3 class="govuk-notification-banner__heading">
      Check if you need to apply the reverse charge to this application
    </h3>
    <p class="govuk-body">
      You will have to apply the <a href="#" class="govuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:
    </p>
    <ul class="govuk-list govuk-list--bullet govuk-list--spaced">
      <li>constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services</li>
      <li>constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours</li>
    </ul>
  </div>
</div>`,
};
