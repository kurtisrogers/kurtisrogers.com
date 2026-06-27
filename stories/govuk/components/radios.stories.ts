/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Radios",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`radios\` examples from govuk-frontend fixtures.",
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
    Have you changed your name?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-default" name="example-default" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example-default">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-default-2" name="example-default" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="example-default-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithHint: Story = {
  name: "with hint",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="example-with-hint-hint">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <div id="example-with-hint-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-with-hint" name="example-with-hint" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example-with-hint">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-with-hint-2" name="example-with-hint" type="radio" value="no">
      <label class="govuk-label govuk-radios__label" for="example-with-hint-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const Inline: Story = {
  name: "inline",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="example-hint">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <div id="example-hint" class="govuk-hint">
    This includes changing your last name or spelling your name differently.
  </div>
  <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
      <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithLegendAsPageHeading: Story = {
  name: "with legend as page heading",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="housing-act-hint">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      Which part of the Housing Act was your licence issued under?
    </h1>
  </legend>
  <div id="housing-act-hint" class="govuk-hint">
    Select one of the options below.
  </div>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="housing-act" name="housing-act" type="radio" value="part-2">
      <label class="govuk-label govuk-radios__label" for="housing-act">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="housing-act-2" name="housing-act" type="radio" value="part-3">
      <label class="govuk-label govuk-radios__label" for="housing-act-2">
        <span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithADivider: Story = {
  name: "with a divider",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to sign in?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-divider" name="example" type="radio" value="government-gateway">
      <label class="govuk-label govuk-radios__label" for="example-divider">
        Use Government Gateway
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-divider-2" name="example" type="radio" value="govuk-verify">
      <label class="govuk-label govuk-radios__label" for="example-divider-2">
        Use GOV.UK Verify
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-divider-4" name="example" type="radio" value="create-account">
      <label class="govuk-label govuk-radios__label" for="example-divider-4">
        Create an account
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
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      How do you want to sign in?
    </h1>
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="gateway" name="gov" type="radio" value="gateway" aria-describedby="gateway-item-hint">
      <label class="govuk-label govuk-radios__label" for="gateway">
        Sign in with Government Gateway
      </label>
      <div id="gateway-item-hint" class="govuk-hint govuk-radios__hint">
        You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.
      </div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="verify" name="gov" type="radio" value="verify" aria-describedby="verify-item-hint">
      <label class="govuk-label govuk-radios__label" for="verify">
        Sign in with GOV.UK Verify
      </label>
      <div id="verify-item-hint" class="govuk-hint govuk-radios__hint">
        You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.
      </div>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithoutFieldset: Story = {
  name: "without fieldset",
  render: () => `<div class="govuk-form-group">
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="colours" name="colours" type="radio" value="red">
      <label class="govuk-label govuk-radios__label" for="colours">
        Red
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="colours-2" name="colours" type="radio" value="green">
      <label class="govuk-label govuk-radios__label" for="colours-2">
        Green
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="colours-3" name="colours" type="radio" value="blue">
      <label class="govuk-label govuk-radios__label" for="colours-3">
        Blue
      </label>
    </div>
  </div>
</div>`,
};

export const WithFieldsetAndErrorMessage: Story = {
  name: "with fieldset and error message",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="example-error">
  <legend class="govuk-fieldset__legend">
    Have you changed your name?
  </legend>
  <p id="example-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Please select an option
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example" name="example" type="radio" value="yes">
      <label class="govuk-label govuk-radios__label" for="example">
        Yes
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-2" name="example" type="radio" value="no" checked>
      <label class="govuk-label govuk-radios__label" for="example-2">
        No
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithVeryLongOptionText: Story = {
  name: "with very long option text",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="waste-hint waste-error">
  <legend class="govuk-fieldset__legend">
    Maecenas faucibus mollis interdum?
  </legend>
  <div id="waste-hint" class="govuk-hint">
    Nullam id dolor id nibh ultricies vehicula ut id elit.
  </div>
  <p id="waste-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="waste" name="waste" type="radio" value="nullam">
      <label class="govuk-label govuk-radios__label" for="waste">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="waste-2" name="waste" type="radio" value="aenean">
      <label class="govuk-label govuk-radios__label" for="waste-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="waste-3" name="waste" type="radio" value="fusce">
      <label class="govuk-label govuk-radios__label" for="waste-3">
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
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted" name="how-contacted" type="radio" value="email" data-aria-controls="conditional-how-contacted">
      <label class="govuk-label govuk-radios__label" for="how-contacted">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted" type="radio" value="phone" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-3" name="how-contacted" type="radio" value="text" data-aria-controls="conditional-how-contacted-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithConditionalItemChecked: Story = {
  name: "with conditional item checked",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked" name="how-contacted-checked" type="radio" value="email" checked data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-2" name="how-contacted-checked" type="radio" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-3" name="how-contacted-checked" type="radio" value="text" data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-3">
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
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="context-email">Email address</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone" checked data-aria-controls="conditional-how-contacted-2-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-how-contacted-2-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>
<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text" data-aria-controls="conditional-how-contacted-2-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>`,
};

export const Small: Story = {
  name: "small",
  render: () => `<div class="govuk-form-group govuk-radios--small">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
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
    Venenatis Condimentum
  </legend>
  <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="foo" name="foo" type="radio" value="nullam">
      <label class="govuk-label govuk-radios__label" for="foo">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="foo-2" name="foo" type="radio" value="aenean">
      <label class="govuk-label govuk-radios__label" for="foo-2">
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="foo-3" name="foo" type="radio" value="fusce">
      <label class="govuk-label govuk-radios__label" for="foo-3">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithError: Story = {
  name: "small with error",
  render: () => `<div class="govuk-form-group govuk-form-group--error govuk-radios--small">
  <fieldset class="govuk-fieldset" aria-describedby="how-contacted-2-error">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <p id="how-contacted-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a thing
  </p>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithHint: Story = {
  name: "small with hint",
  render: () => `<div class="govuk-form-group govuk-radios--small">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" aria-describedby="how-contacted-2-item-hint">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
      <div id="how-contacted-2-item-hint" class="govuk-hint govuk-radios__hint">
        Hint for email address
      </div>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithConditionalReveal: Story = {
  name: "small with conditional reveal",
  render: () => `<div class="govuk-form-group govuk-radios--small">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2" name="how-contacted-2" type="radio" value="email" data-aria-controls="conditional-how-contacted-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-2">
      <label class="govuk-label" for="context-email">Foo</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-2" name="how-contacted-2" type="radio" value="phone">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-2-3" name="how-contacted-2" type="radio" value="text">
      <label class="govuk-label govuk-radios__label" for="how-contacted-2-3">
        Text message
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallInline: Story = {
  name: "small inline",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    Sort by
  </legend>
  <div class="govuk-radios govuk-radios--small govuk-radios--inline" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sort" name="example" type="radio" value="relevance">
      <label class="govuk-label govuk-radios__label" for="sort">
        relevance
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sort-2" name="example" type="radio" value="title">
      <label class="govuk-label govuk-radios__label" for="sort-2">
        A to Z
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="sort-3" name="example" type="radio" value="created">
      <label class="govuk-label govuk-radios__label" for="sort-3">
        creation date
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const SmallWithADivider: Story = {
  name: "small with a divider",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to sign in?
  </legend>
  <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-small-divider" name="example" type="radio" value="government-gateway">
      <label class="govuk-label govuk-radios__label" for="example-small-divider">
        Use Government Gateway
      </label>
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-small-divider-2" name="example" type="radio" value="govuk-verify">
      <label class="govuk-label govuk-radios__label" for="example-small-divider-2">
        Use GOV.UK Verify
      </label>
    </div>
    <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="example-small-divider-4" name="example" type="radio" value="create-account">
      <label class="govuk-label govuk-radios__label" for="example-small-divider-4">
        Create an account
      </label>
    </div>
  </div>
</fieldset>
</div>`,
};

export const WithConditionalItemsAndPreCheckedValue: Story = {
  name: "with conditional items and pre-checked value",
  render: () => `<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend">
    How do you want to be contacted?
  </legend>
  <div class="govuk-radios" data-module="govuk-radios">
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked" name="how-contacted-checked" type="radio" value="email" data-aria-controls="conditional-how-contacted-checked">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked">
        Email
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked">
      <label class="govuk-label" for="context-email">Email</label>
<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-2" name="how-contacted-checked" type="radio" value="phone" data-aria-controls="conditional-how-contacted-checked-2">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-2">
        Phone
      </label>
    </div>
    <div class="govuk-radios__conditional govuk-radios__conditional--hidden" id="conditional-how-contacted-checked-2">
      <label class="govuk-label" for="contact-phone">Phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">
    </div>
    <div class="govuk-radios__item">
      <input class="govuk-radios__input" id="how-contacted-checked-3" name="how-contacted-checked" type="radio" value="text" checked data-aria-controls="conditional-how-contacted-checked-3">
      <label class="govuk-label govuk-radios__label" for="how-contacted-checked-3">
        Text message
      </label>
    </div>
    <div class="govuk-radios__conditional" id="conditional-how-contacted-checked-3">
      <label class="govuk-label" for="contact-text-message">Mobile phone number</label>
<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">
    </div>
  </div>
</fieldset>
</div>`,
};
