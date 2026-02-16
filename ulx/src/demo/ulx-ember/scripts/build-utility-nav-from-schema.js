/**
 * Builds the Utilities left-nav from ULS_V2.0 utill.schema.json.
 * Writes app/data/utility-nav-from-schema.js so the docs sidebar stays in sync.
 *
 * When ULS_V2.0 schema is updated (e.g. after npm update ULS_V2.0):
 *   npm run sync-uls-schema
 * Or: node scripts/build-utility-nav-from-schema.js
 *
 * If the schema adds new categories, add a label in CATEGORY_LABELS below.
 */

const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const ULX_EMBER_ROOT = path.resolve(SCRIPT_DIR, '..');

const SCHEMA_CANDIDATES = [
  path.resolve(
    ULX_EMBER_ROOT,
    'node_modules/ULS_V2.0/src/styles/uls-styles/schema/utill.schema.json',
  ),
  path.resolve(
    ULX_EMBER_ROOT,
    '../../node_modules/ULS_V2.0/src/styles/uls-styles/schema/utill.schema.json',
  ),
  path.resolve(
    ULX_EMBER_ROOT,
    '../../../node_modules/ULS_V2.0/src/styles/uls-styles/schema/utill.schema.json',
  ),
];

function resolveSchemaPath() {
  for (const p of SCHEMA_CANDIDATES) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const SCHEMA_PATH = resolveSchemaPath();
const OUT_PATH = path.resolve(
  ULX_EMBER_ROOT,
  'app/data/utility-nav-from-schema.js',
);

/** Human-readable labels for schema category keys. Add new categories here when ULS_V2.0 adds them. */
const CATEGORY_LABELS = {
  LAYOUT: 'Layout',
  SPACING: 'Spacing',
  SIZING: 'Sizing',
  BACKGROUNDS: 'Backgrounds',
  BORDERS: 'Borders',
  EFFECTS: 'Effects',
  TABLES: 'Tables',
  TRANSITIONS_AND_ANIMATION: 'Transitions & Animation',
  TRANSFORMS: 'Transforms',
};

/** Utilities from grid.less (not in utill.schema.json). Inserted into LAYOUT after "display". */
const EXTRA_LAYOUT_SLUGS = ['flex', 'grid'];

function slugToMenuItem(slug) {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

function itemFromSlug(slug) {
  return {
    menuItem: slugToMenuItem(slug),
    to: `/utilities/${slug}`,
    route: 'utilities.utility',
    slug,
  };
}

function buildNavFromSchema(schema) {
  const categories = schema.categories || {};
  const nav = [];

  for (const [key, properties] of Object.entries(categories)) {
    if (!Array.isArray(properties) || properties.length === 0) continue;
    const categoryLabel = CATEGORY_LABELS[key] || key.replace(/_/g, ' ');
    let items = properties.map((slug) => itemFromSlug(slug));

    if (key === 'LAYOUT' && EXTRA_LAYOUT_SLUGS.length > 0) {
      const displayIndex = items.findIndex((i) => i.slug === 'display');
      const insertAt = displayIndex >= 0 ? displayIndex + 1 : items.length;
      const extraItems = EXTRA_LAYOUT_SLUGS.map((slug) => itemFromSlug(slug));
      items = [
        ...items.slice(0, insertAt),
        ...extraItems,
        ...items.slice(insertAt),
      ];
    }

    nav.push({ category: categoryLabel, items });
  }

  return nav;
}

function main() {
  if (!SCHEMA_PATH || !fs.existsSync(SCHEMA_PATH)) {
    console.error(
      'ULS_V2.0 schema not found. Tried:\n  ' +
        SCHEMA_CANDIDATES.join('\n  ') +
        '\nInstall or update ULS_V2.0 (e.g. npm install), then run: npm run sync-uls-schema',
    );
    process.exit(1);
  }

  const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
  const nav = buildNavFromSchema(schema);

  const out = `// Auto-generated from ULS_V2.0 utill.schema.json by scripts/build-utility-nav-from-schema.js.
// Do not edit by hand. To sync after ULS_V2.0 schema updates: npm run sync-uls-schema

export default ${JSON.stringify(nav, null, 2)};
`;

  fs.writeFileSync(OUT_PATH, out, 'utf8');
  console.log('Synced nav from', SCHEMA_PATH);
  console.log('Wrote', OUT_PATH);
}

main();
