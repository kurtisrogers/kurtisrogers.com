/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Table",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`table\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<table class="govuk-table">
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">January</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">February</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">March</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>`,
};

export const WithHead: Story = {
  name: "with head",
  render: () => `<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">January</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">February</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">March</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>`,
};

export const WithHeadAndCaption: Story = {
  name: "with head and caption",
  render: () => `<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Caption 1: Months and rates</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header govuk-table__header--numeric">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">January</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£85</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£95</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">February</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£75</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£55</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">March</th>
      <td class="govuk-table__cell govuk-table__cell--numeric">£165</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">£125</td>
    </tr>
  </tbody>
</table>`,
};
