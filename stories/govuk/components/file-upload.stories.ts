/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/File Upload",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \`file-upload\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: "default",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>`,
};

export const WithHintText: Story = {
  name: "with hint text",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-2">
    Upload your photo
  </label>
  <div id="file-upload-2-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>
  <input class="govuk-file-upload" id="file-upload-2" name="file-upload-2" type="file" aria-describedby="file-upload-2-hint">
</div>`,
};

export const WithErrorMessageAndHint: Story = {
  name: "with error message and hint",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-3">
    Upload a file
  </label>
  <div id="file-upload-3-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>
  <p id="file-upload-3-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-3" name="file-upload-3" type="file" aria-describedby="file-upload-3-hint file-upload-3-error">
</div>`,
};

export const WithLabelAsPageHeading: Story = {
  name: "with label as page heading",
  render: () => `<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="file-upload-1">
      Upload a file
    </label>
  </h1>
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>`,
};

export const Enhanced: Story = {
  name: "enhanced",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
  </div>
</div>`,
};

export const EnhancedWithErrorMessageAndHint: Story = {
  name: "enhanced, with error message and hint",
  render: () => `<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-3">
    Upload a file
  </label>
  <div id="file-upload-3-hint" class="govuk-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </div>
  <p id="file-upload-3-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </p>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-3" name="file-upload-3" type="file" aria-describedby="file-upload-3-hint file-upload-3-error">
  </div>
</div>`,
};

export const EnhancedMultipleFiles: Story = {
  name: "enhanced, multiple files",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-3">
    Upload files
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload"
  >
  <input class="govuk-file-upload" id="file-upload-3" name="file-upload-3" type="file" multiple>
  </div>
</div>`,
};

export const EnhancedCustomWrapperClassesAndAttributes: Story = {
  name: "enhanced, custom wrapper classes and attributes",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-3">
    Upload files
  </label>
  <div
    class="govuk-file-upload-wrapper app-file-upload--custom-class"
    data-module="govuk-file-upload" data-custom-attribute="custom-value" data-custom-attribute-2="custom-value-2"
  >
  <input class="govuk-file-upload" id="file-upload-3" name="file-upload-3" type="file">
  </div>
</div>`,
};

export const Translated: Story = {
  name: "translated",
  render: () => `<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Llwythwch ffeil i fyny
  </label>
  <div
    class="govuk-file-upload-wrapper"
    data-module="govuk-file-upload" data-i18n.choose-files-button="Dewiswch ffeil" data-i18n.no-file-chosen="Dim ffeil wedi&#39;i dewis" data-i18n.multiple-files-chosen.other="%{count} ffeil wedi&#39;u dewis" data-i18n.multiple-files-chosen.one="%{count} ffeil wedi&#39;i dewis" data-i18n.drop-instruction="neu ollwng ffeil" data-i18n.entered-drop-zone="Wedi mynd i mewn i&#39;r parth gollwng" data-i18n.left-drop-zone="Parth gollwng i&#39;r chwith"
  >
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file" multiple>
  </div>
</div>`,
};
