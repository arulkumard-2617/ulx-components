/* eslint-disable no-console */
// Builds static AI manifests from documentation/components/<slug>/usages.js
// Run: node scripts/generate-component-usages.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.join(__dirname, '..');
const componentsDocDir = path.join(appRoot, 'app/documentation/components');
const publicAiDir = path.join(appRoot, 'public/ai');
const componentsOutDir = path.join(publicAiDir, 'components');
const generatedRegistryPath = path.join(
  appRoot,
  'app/documentation/generated/component-usages-registry.js'
);

function loadUsagesFromJs(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const objectLiteral = raw
    .replace(/^\/\/.*\n/gm, '')
    .replace(/export default\s*/, '')
    .trim()
    .replace(/;\s*$/, '');

  // eslint-disable-next-line no-new-func
  return new Function(`return (${objectLiteral});`)();
}

function loadMetaFromFile(metaPath) {
  if (!fs.existsSync(metaPath)) {
    return null;
  }

  const raw = fs.readFileSync(metaPath, 'utf8');
  const pick = (pattern) => raw.match(pattern)?.[1] ?? null;

  return {
    header: pick(/header:\s*['"]([^'"]+)['"]/),
    subHeader: pick(/subHeader:\s*['"]([^'"]+)['"]/s) ?? pick(/subHeader:\s*\n\s*['"]([^'"]+)['"]/),
    routeBase: pick(/routeBase:\s*['"]([^'"]+)['"]/),
    importMsg: pick(/importMsg:\s*["']([^"']+)["']/),
  };
}

function stripUsagesForExport(usages) {
  const { routeKey, keyParamNames, summary, ...guidance } = usages;
  return { routeKey, keyParamNames, summary, guidance };
}

async function main() {
  const entries = fs
    .readdirSync(componentsDocDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const manifest = {
    generatedAt: new Date().toISOString(),
    site: 'ULX Ember component documentation',
    readOrder: [
      'Expand Usage guidance under the title for when/how rules.',
      'Expand API arguments for the full generated API table.',
      'Use Import and Basic sections for copy-paste examples.',
      'Use /ai/components/{slug}.json keyParamNames for a short argument list when scraping.',
    ],
    components: [],
  };

  const registry = {};

  fs.mkdirSync(componentsOutDir, { recursive: true });

  for (const dir of entries) {
    const slug = dir.name;
    const usagesPath = path.join(componentsDocDir, slug, 'usages.js');
    if (!fs.existsSync(usagesPath)) {
      continue;
    }

    const usages = loadUsagesFromJs(usagesPath);
    const metaPath = path.join(componentsDocDir, slug, 'meta.js');
    const meta = loadMetaFromFile(metaPath);

    const routeKey = usages.routeKey ?? slug;
    const docUrl = meta?.routeBase ?? `/components/${slug}`;
    const payload = {
      slug,
      routeKey,
      component: usages.component,
      docUrl,
      header: meta?.header ?? slug,
      summary: usages.summary ?? meta?.subHeader ?? '',
      subHeader: meta?.subHeader ?? usages.summary ?? '',
      importMsg: meta?.importMsg ?? null,
      usages: stripUsagesForExport(usages).guidance,
      keyParamNames: usages.keyParamNames ?? [],
    };

    registry[routeKey] = payload;

    manifest.components.push({
      slug,
      routeKey,
      component: usages.component,
      docUrl,
      summary: usages.summary ?? meta?.subHeader ?? usages.responsibility,
      aiJsonUrl: `/ai/components/${slug}.json`,
    });

    fs.writeFileSync(
      path.join(componentsOutDir, `${slug}.json`),
      `${JSON.stringify(payload, null, 2)}\n`
    );
  }

  manifest.components.sort((a, b) => a.component.localeCompare(b.component));

  fs.writeFileSync(
    path.join(publicAiDir, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`
  );

  const registrySource = `// AUTO-GENERATED FILE. DO NOT EDIT.
// Run \`npm run generate:component-usages\` from ulx-ember to refresh.

const componentUsagesRegistry = ${JSON.stringify(registry, null, 2)};

export default componentUsagesRegistry;
`;

  fs.mkdirSync(path.dirname(generatedRegistryPath), { recursive: true });
  fs.writeFileSync(generatedRegistryPath, registrySource);

  const llmsPath = path.join(appRoot, 'public/llms.txt');
  const llmsLines = [
    '# ULX Ember Component Library',
    '> Ember 6.8 components on ULS_V2. Read each component Usages section before implementing.',
    '',
    '## Setup',
    '- /getting-started/overview',
    '- /getting-started/color-context',
    '',
    '## Machine-readable catalog',
    '- /ai/manifest.json',
    '',
    '## Overlay family (read Usages before choosing)',
    '- /components/popup — Anchored contextual overlay',
    '- /components/modal — Blocking dialog',
    '- /components/slidepane — Edge drawer panel',
    '- /components/tooltip — Non-interactive hint',
    '',
    '## Button family',
    '- /components/button — Labeled primary actions',
    '- /components/icon-button — Icon-only or icon+label actions',
    '',
    '## Components with usages (static JSON at /ai/components/{slug}.json)',
    ...manifest.components.map(
      (c) => `- ${c.docUrl} — ${c.component}: ${c.summary}`
    ),
    '',
  ];

  fs.writeFileSync(llmsPath, `${llmsLines.join('\n')}\n`);

  console.log(
    `Generated ${manifest.components.length} component usage entries → public/ai/ and component-usages-registry.js`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
