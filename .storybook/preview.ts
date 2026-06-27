import type { Preview } from "@storybook/html";
import { initAll } from "govuk-frontend/govuk-frontend.min.js";
import "govuk-frontend/govuk-frontend.min.css";

document.documentElement.classList.add("govuk-template");
document.body.classList.add(
  "govuk-template__body",
  "js-enabled",
  "govuk-frontend-supported",
);

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
    a11y: { test: "todo" },
    options: {
      storySort: {
        order: ["GOV.UK Design System", ["Overview", "*"]],
      },
    },
  },
  decorators: [
    (story) => {
      const frame = document.createElement("div");
      frame.className =
        "govuk-width-container govuk-!-padding-top-6 govuk-!-padding-bottom-6";
      frame.innerHTML = story();

      queueMicrotask(() => {
        initAll({ scope: frame });
      });

      return frame;
    },
  ],
};

export default preview;
