/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Accordion",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`accordion\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-accordion" data-module="govuk-accordion" id="default-example">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="default-example-heading-1">
          Section A
        </span>
      </h2>
    </div>
    <div id="default-example-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">
        We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
      </p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="default-example-heading-2">
          Section B
        </span>
      </h2>
    </div>
    <div id="default-example-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>`,
};

export const WithAdditionalDescriptions: Story = {
  name: "with additional descriptions",
  render: () => `<div class="govuk-accordion" data-module="govuk-accordion" id="with-descriptions">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-descriptions-heading-1">
          Test
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-1">
        Additional description
      </div>
    </div>
    <div id="with-descriptions-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">
        We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot provide your nationality, you’ll have to send copies of identity documents through the post.
      </p>
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-descriptions-heading-2">
          Test 2
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-descriptions-summary-2">
        <span class="govuk-!-font-weight-regular">Additional description (wrapped in span)</span>
      </div>
    </div>
    <div id="with-descriptions-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>`,
};

export const WithLongContentAndDescription: Story = {
  name: "with long content and description",
  render: () => `<div class="govuk-accordion" data-module="govuk-accordion" id="with-long-content-and-description">
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-long-content-and-description-heading-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis tortor porttitor.
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-long-content-and-description-summary-1">
        Etiam diam dui, tempus ut pharetra in, aliquet non dui. Nunc pulvinar maximus tortor, ac finibus augue congue vitae. Donec sed cursus lorem.
      </div>
    </div>
    <div id="with-long-content-and-description-content-1" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="with-long-content-and-description-heading-2">
          Praesent faucibus leo feugiat libero pharetra lacinia. Aliquam aliquet ante vitae mollis vestibulum.
        </span>
      </h2>
      <div class="govuk-accordion__section-summary govuk-body" id="with-long-content-and-description-summary-2">
        <span class="govuk-!-font-weight-regular">Maecenas nec <abbr>est</abbr> sapien. Etiam varius luctus mauris non porttitor. </span>
      </div>
    </div>
    <div id="with-long-content-and-description-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>`,
};

export const WithAllSectionsAlreadyOpen: Story = {
  name: "with all sections already open",
  render: () => `<div class="govuk-accordion" data-module="govuk-accordion" id="all-sections-open-example">
  <div class="govuk-accordion__section govuk-accordion__section--expanded">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="all-sections-open-example-heading-1">
          Section A
        </span>
      </h2>
    </div>
    <div id="all-sections-open-example-content-1" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section govuk-accordion__section--expanded">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="all-sections-open-example-heading-2">
          Section B
        </span>
      </h2>
    </div>
    <div id="all-sections-open-example-content-2" class="govuk-accordion__section-content">
      <ul class="govuk-list govuk-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>`,
};
