import type { Preview } from "@storybook/html";

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
        const init = (
          window as Window & {
            GOVUKFrontend?: { initAll: (options?: { scope?: Element }) => void };
          }
        ).GOVUKFrontend?.initAll;
        init?.({ scope: frame });
      });

      return frame;
    },
  ],
};

export default preview;
