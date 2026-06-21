import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms", "Pages"],
      },
    },
  },
  decorators: [
    (story) => {
      const wrapper = document.createElement("div");
      wrapper.className = "storybook-canvas";
      wrapper.innerHTML = story();
      return wrapper;
    },
  ],
};

export default preview;
