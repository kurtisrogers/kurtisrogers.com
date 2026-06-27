/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Date Input",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`date-input\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const DayAndMonth: Story = {
  name: "day and month",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="bday-hint">
    <legend class="govuk-fieldset__legend">
      What is your birthday?
    </legend>
    <div id="bday-hint" class="govuk-hint">
      For example, 5 12
    </div>
    <div class="govuk-date-input" id="bday">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="bday-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="bday-day" name="bday-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="bday-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="bday-month" name="bday-month" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const MonthAndYear: Story = {
  name: "month and year",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      When did you move to this property?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const WithErrorsOnly: Story = {
  name: "with errors only",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <p id="dob-errors-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const WithErrorsAndHint: Story = {
  name: "with errors and hint",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-errors-hint dob-errors-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-errors-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-errors-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-errors">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-day" name="day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-errors-month" name="month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-errors-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-errors-year" name="year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const WithErrorOnDayInput: Story = {
  name: "with error on day input",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-day-error-hint dob-day-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-day-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-day-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-day-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-day-error-day" name="dob-day-error-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day-error-month" name="dob-day-error-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-day-error-year" name="dob-day-error-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const WithErrorOnMonthInput: Story = {
  name: "with error on month input",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-month-error-hint dob-month-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-month-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-month-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-month-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month-error-day" name="dob-month-error-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-month-error-month" name="dob-month-error-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-month-error-year" name="dob-month-error-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const WithErrorOnYearInput: Story = {
  name: "with error on year input",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-year-error-hint dob-year-error-error">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-year-error-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-year-error-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Error message goes here
    </p>
    <div class="govuk-date-input" id="dob-year-error">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-day" name="dob-year-error-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-year-error-month" name="dob-year-error-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year-error-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error" id="dob-year-error-year" name="dob-year-error-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};

export const WithItems: Story = {
  name: "with items",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend">
      What is your date of birth?
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>`,
};
