/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Task List",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`task-list\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
</ul>`,
};

export const ForcedHoverState: Story = {
  name: "forced hover state",
  render: () => `<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link :hover">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
</ul>`,
};

export const WithHintTextAndAdditionalStates: Story = {
  name: "with hint text and additional states",
  render: () => `<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--teal">
        Not started
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-hint task-list-3-status">
        Business plan
      </a>
      <div id="task-list-3-hint" class="govuk-task-list__hint">
        Ensure the plan covers objectives, strategies, sales, marketing and financial forecasts.
      </div>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--magenta">
        Review
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-4-status">
        Documentation
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-4-status">
      <strong class="govuk-tag govuk-tag--blue">
        In progress
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-5-status">
        Charitable status
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-5-status">
      <strong class="govuk-tag govuk-tag--red">
        Error
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item">
    <div class="govuk-task-list__name-and-hint">
      <div>
        Payment
      </div>
      <div id="task-list-6-hint" class="govuk-task-list__hint">
        It will cost between £15 and £75
      </div>
    </div>
    <div class="govuk-task-list__status govuk-task-list__status--cannot-start-yet" id="task-list-6-status">
      Cannot start yet
    </div>
  </li>
</ul>`,
};

export const WithAllPossibleColours: Story = {
  name: "with all possible colours",
  render: () => `<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Task A
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Text colour
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Task B
      </a>
    </div>
    <div class="govuk-task-list__status govuk-task-list__status--cannot-start-yet" id="task-list-2-status">
      Secondary text colour
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Task C
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--grey">
        Grey
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-4-status">
        Task D
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-4-status">
      <strong class="govuk-tag govuk-tag--blue">
        Blue
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-5-status">
        Task E
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-5-status">
      <strong class="govuk-tag govuk-tag--teal">
        Teal
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-6-status">
        Task F
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-6-status">
      <strong class="govuk-tag govuk-tag--green">
        Green
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-7-status">
        Task G
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-7-status">
      <strong class="govuk-tag govuk-tag--purple">
        Purple
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-8-status">
        Task H
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-8-status">
      <strong class="govuk-tag govuk-tag--magenta">
        Magenta
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-9-status">
        Task I
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-9-status">
      <strong class="govuk-tag govuk-tag--red">
        Red
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-10-status">
        Task J
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-10-status">
      <strong class="govuk-tag govuk-tag--orange">
        Orange
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-11-status">
        Task K
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-11-status">
      <strong class="govuk-tag govuk-tag--yellow">
        Yellow
      </strong>
    </div>
  </li>
</ul>`,
};

export const WithVeryLongSingleWordTags: Story = {
  name: "with very long single word tags",
  render: () => `<ul class="govuk-task-list">
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-1-status">
        Company Directors
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-1-status">
      Completed
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-2-status">
        Registered company details
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-2-status">
      <strong class="govuk-tag govuk-tag--blue">
        Incomplete
      </strong>
    </div>
  </li>
  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        A very very very long Business plan
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      <strong class="govuk-tag govuk-tag--blue">
        Thisisaverylongwaytosaythatsomethingisincomplete
      </strong>
    </div>
  </li>
</ul>`,
};

export const WithEmptyValues: Story = {
  name: "with empty values",
  render: () => `<ul class="govuk-task-list">


  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-3-status">
        Task A
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-3-status">
      Completed
    </div>
  </li>


  <li class="govuk-task-list__item govuk-task-list__item--with-link">
    <div class="govuk-task-list__name-and-hint">
      <a class="govuk-link govuk-task-list__link" href="#" aria-describedby="task-list-6-status">
        Task B
      </a>
    </div>
    <div class="govuk-task-list__status" id="task-list-6-status">
      Completed
    </div>
  </li>
</ul>`,
};
