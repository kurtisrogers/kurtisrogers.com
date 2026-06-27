/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Checkboxes",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`checkboxes\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithHint: Story = {
  name: "with hint",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-hint">
  <legend class="govuk-fieldset__legend">
    What is your nationality?
  </legend>
  <div id="nationality-hint" class="govuk-hint">
    Select all that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        British
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Irish
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Citizen of another country
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithPreCheckedValues: Story = {
  name: "with pre-checked values",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" checked data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" checked data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithDividerAndNone: Story = {
  name: "with divider and None",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none" name="with-divider-and-none" type="checkbox" value="animal">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-2" name="with-divider-and-none" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-3" name="with-divider-and-none" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-3">
        Farm or agricultural waste
      </label>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-5" name="with-divider-and-none" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-5">
        None of these
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithDividerNoneAndConditionalItems: Story = {
  name: "with divider, None and conditional items",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Do you have any access needs?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items" name="with-divider-and-none-and-conditional-items" type="checkbox" value="accessible-toilets">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items">
        Accessible toilets available
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-2" name="with-divider-and-none-and-conditional-items" type="checkbox" value="braille">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-2">
        Braille translation service available
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-3" name="with-divider-and-none-and-conditional-items" type="checkbox" value="disabled-car-parking">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-3">
        Disabled car parking available
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-4" name="with-divider-and-none-and-conditional-items" type="checkbox" value="another-access-need" data-aria-controls="conditional-with-divider-and-none-and-conditional-items-4">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-4">
        Another access need
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-with-divider-and-none-and-conditional-items-4">
      <label class="govuk-label" for="other-access-needs">Other access needs</label>
<textarea class="govuk-textarea govuk-!-width-one-third" name="other-access-needs" id="other-access-needs"></textarea>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="with-divider-and-none-and-conditional-items-6" name="with-divider-and-none-and-conditional-items" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="with-divider-and-none-and-conditional-items-6">
        None of these
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithHintsOnItems: Story = {
  name: "with hints on items",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to sign in?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" aria-describedby="government-gateway-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="government-gateway">
        Sign in with Government Gateway
      </label>
      <div id="government-gateway-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have a user ID if you&#39;ve registered for Self Assessment or filed a tax return online before.
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="govuk-verify" name="verify" type="checkbox" value="gov-verify" aria-describedby="govuk-verify-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="govuk-verify">
        Sign in with GOV.UK Verify
      </label>
      <div id="govuk-verify-item-hint" class="govuk-hint govuk-checkboxes__hint">
        You&#39;ll have an account if you&#39;ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithLegendAsAPageHeading: Story = {
  name: "with legend as a page heading",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which types of waste do you transport regularly?
    </h1>
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Select all that apply
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithErrorMessage: Story = {
  name: "with error message",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="waste-error">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="animal" aria-describedby="waste-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Waste from animal carcasses
      </label>
      <div id="waste-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="mines" aria-describedby="waste-2-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Waste from mines or quarries
      </label>
      <div id="waste-2-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="farm" aria-describedby="waste-3-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Farm or agricultural waste
      </label>
      <div id="waste-3-item-hint" class="govuk-hint govuk-checkboxes__hint">
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </div>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithVeryLongOptionText: Story = {
  name: "with very long option text",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
  <legend class="govuk-fieldset__legend">
    Maecenas faucibus mollis interdum?
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
  </div>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste" name="waste" type="checkbox" value="nullam">
      <label class="govuk-label govuk-checkboxes__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-2" name="waste" type="checkbox" value="aenean">
      <label class="govuk-label govuk-checkboxes__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="waste-3" name="waste" type="checkbox" value="fusce">
      <label class="govuk-label govuk-checkboxes__label" for="waste-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithConditionalItems: Story = {
  name: "with conditional items",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted" name="with-conditional-items" type="checkbox" value="email" data-aria-controls="conditional-how-contacted">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-2" name="with-conditional-items" type="checkbox" value="phone" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-3" name="with-conditional-items" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-3">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithOptionalFormGroupClassesShowingGroupError: Story = {
  name: "with optional form-group classes showing group error",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked" name="how-contacted-checked" type="checkbox" value="email" data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-2" name="how-contacted-checked" type="checkbox" value="phone" checked data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-checkboxes__conditional" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-checked-3" name="how-contacted-checked" type="checkbox" value="text" data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted-checked-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>`,
};

export const Small: Story = {
  name: "small",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithLongText: Story = {
  name: "small with long text",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="nullam">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="aenean">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="fusce">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithError: Story = {
  name: "small with error",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-error">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <p id="nationality-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a thing
  </p>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithHint: Story = {
  name: "small with hint",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Filter by
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="a" aria-describedby="nationality-item-hint">
      <label class="govuk-label govuk-checkboxes__label" for="nationality">
        a thing
      </label>
      <div id="nationality-item-hint" class="govuk-hint govuk-checkboxes__hint">
        hint for a thing
      </div>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-2">
        another thing
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="c">
      <label class="govuk-label govuk-checkboxes__label" for="nationality-3">
        this thing
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithConditionalReveal: Story = {
  name: "small with conditional reveal",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted" name="how-contacted" type="checkbox" value="a" data-aria-controls="conditional-how-contacted">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted">
        a thing
      </label>
    </div>
    <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-how-contacted">
      <label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="how-contacted-2" name="how-contacted" type="checkbox" value="b">
      <label class="govuk-label govuk-checkboxes__label" for="how-contacted-2">
        another thing
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithDividerAndNone: Story = {
  name: "small with divider and None",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Which types of waste do you transport regularly?
  </legend>
  <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none" name="small-with-divider-and-none" type="checkbox" value="animal">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none">
        Waste from animal carcasses
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none-2" name="small-with-divider-and-none" type="checkbox" value="mines">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none-2">
        Waste from mines or quarries
      </label>
    </div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none-3" name="small-with-divider-and-none" type="checkbox" value="farm">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none-3">
        Farm or agricultural waste
      </label>
    </div>
    <div class="govuk-checkboxes__divider">or</div>
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" id="small-with-divider-and-none-5" name="small-with-divider-and-none" type="checkbox" value="none" data-behaviour="exclusive">
      <label class="govuk-label govuk-checkboxes__label" for="small-with-divider-and-none-5">
        None of these
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};
