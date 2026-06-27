import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { listGovukComponents } from "../src/govuk/components.js";

const storiesDir = path.join(process.cwd(), "stories/govuk/components");

function titleCase(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toExportName(value: string): string {
  const parts = value.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") || "Example";
}

function escapeForTemplateLiteral(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

rmSync(storiesDir, { recursive: true, force: true });
mkdirSync(storiesDir, { recursive: true });

for (const component of listGovukComponents()) {
  const fixturesPath = path.join(
    process.cwd(),
    `node_modules/govuk-frontend/dist/govuk/components/${component}/fixtures.json`,
  );
  const { fixtures } = JSON.parse(readFileSync(fixturesPath, "utf8")) as {
    fixtures: { name: string; hidden?: boolean; html?: string }[];
  };

  const visible = fixtures.filter((fixture) => !fixture.hidden && fixture.html);

  const storyExports = visible
    .map((fixture) => {
      const exportName = toExportName(fixture.name);
      const html = escapeForTemplateLiteral(fixture.html ?? "");
      return `export const ${exportName}: Story = {
  name: ${JSON.stringify(fixture.name)},
  render: () => \`${html}\`,
};`;
    })
    .join("\n\n");

  const contents = `/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/${titleCase(component)}",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Official \\\`${component}\\\` examples from govuk-frontend fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

${storyExports}
`;

  writeFileSync(path.join(storiesDir, `${component}.stories.ts`), contents, "utf8");
}

const componentNames = listGovukComponents();
const overviewList = componentNames
  .map(
    (component) =>
      `        <li><span class="govuk-body">${titleCase(component)}</span></li>`,
  )
  .join("\n");

const overviewContents = `/* auto-generated — run npm run generate:stories */
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "GOV.UK Design System/Overview",
  parameters: {
    docs: {
      description: {
        component:
          "All GOV.UK Frontend components rendered from official package fixtures.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const ComponentIndex: Story = {
  render: () => \`<h1 class="govuk-heading-xl">GOV.UK Frontend components</h1>
    <p class="govuk-body-l">${componentNames.length} components from <code>govuk-frontend</code>, each with official fixture variants.</p>
    <ul class="govuk-list govuk-list--bullet">
${overviewList}
    </ul>\`,
};
`;

writeFileSync(
  path.join(process.cwd(), "stories/govuk/overview.stories.ts"),
  overviewContents,
  "utf8",
);

console.log(`Generated ${readdirSync(storiesDir).length} GOV.UK story files in ${storiesDir}.`);
