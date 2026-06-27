/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Breadcrumbs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`breadcrumbs\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section">Sub-section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section/sub-section/sub-sub-section">Sub Sub-section</a>
    </li>
  </ol>
</nav>`,
};

export const WithOneLevel: Story = {
  name: "with one level",
  render: () => `<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
  </ol>
</nav>`,
};

export const WithoutTheHomeSection: Story = {
  name: "without the home section",
  render: () => `<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/service-manual">Service Manual</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/service-manual/agile-delivery">Agile Delivery</a>
    </li>
  </ol>
</nav>`,
};

export const WithLastBreadcrumbAsCurrentPage: Story = {
  name: "with last breadcrumb as current page",
  render: () => `<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/browse/abroad">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Travel abroad</li>
  </ol>
</nav>`,
};

export const WithCollapseOnMobile: Story = {
  name: "with collapse on mobile",
  render: () => `<nav class="govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/education">Education, training and skills</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/education/special-educational-needs-and-disability-send-and-high-needs">Special educational needs and disability (SEND) and high needs</a>
    </li>
  </ol>
</nav>`,
};

export const Inverse: Story = {
  name: "inverse",
  render: () => `<nav class="govuk-breadcrumbs govuk-breadcrumbs--inverse" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/browse/abroad">Passports, travel and living abroad</a>
    </li>
    <li class="govuk-breadcrumbs__list-item" aria-current="page">Travel abroad</li>
  </ol>
</nav>`,
};
