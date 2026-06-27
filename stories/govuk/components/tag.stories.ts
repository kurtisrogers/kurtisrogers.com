/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Tag",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`tag\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<strong class="govuk-tag">
  Alpha
</strong>`,
};

export const Grey: Story = {
  name: "grey",
  render: () => `<strong class="govuk-tag govuk-tag--grey">
  Grey
</strong>`,
};

export const Turquoise: Story = {
  name: "turquoise",
  render: () => `<strong class="govuk-tag govuk-tag--teal">
  Teal
</strong>`,
};

export const Green: Story = {
  name: "green",
  render: () => `<strong class="govuk-tag govuk-tag--green">
  Green
</strong>`,
};

export const Purple: Story = {
  name: "purple",
  render: () => `<strong class="govuk-tag govuk-tag--purple">
  Purple
</strong>`,
};

export const Pink: Story = {
  name: "pink",
  render: () => `<strong class="govuk-tag govuk-tag--magenta">
  Magenta
</strong>`,
};

export const Red: Story = {
  name: "red",
  render: () => `<strong class="govuk-tag govuk-tag--red">
  Red
</strong>`,
};

export const Orange: Story = {
  name: "orange",
  render: () => `<strong class="govuk-tag govuk-tag--orange">
  Orange
</strong>`,
};

export const Yellow: Story = {
  name: "yellow",
  render: () => `<strong class="govuk-tag govuk-tag--yellow">
  Yellow
</strong>`,
};
