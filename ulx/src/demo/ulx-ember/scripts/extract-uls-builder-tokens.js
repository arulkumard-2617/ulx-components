#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Extracts @ulx-builder token lines from a .less file and writes a JS module.
 *
 * Format in .less:  // @ulx-builder <label> : <class1>, <class2>, ...
 * Output: app/tokens/icon-tokens.js exporting { "<label>": ["class1", "class2", ...], ... }
 *
 * Usage:
 *   node scripts/extract-ulx-builder-tokens.js [path-to-icon.less]
 *   If no path is given, uses ulx-v2 from node_modules (ulx-ember or parent ulx).
 */

const fs = require('fs');
const path = require('path');

const RE = /^\s*\/\/\s*@ulx-builder\s+(.+?)\s*:\s*(.+)$/;

function extractTokens(lessPath) {
  const content = fs.readFileSync(lessPath, 'utf8');
  const tokens = {};
  for (const line of content.split('\n')) {
    const m = line.match(RE);
    if (m) {
      const label = m[1].trim();
      const values = m[2]
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      tokens[label] = values;
    }
  }
  return tokens;
}

function findIconLessPath() {
  const cliPath = process.argv[2];
  if (cliPath && fs.existsSync(cliPath)) return path.resolve(cliPath);

  const fromScript = path.join(
    __dirname,
    '../../../../node_modules/ulx-v2/src/styles/ulx-styles/less/elements/icon.less',
  );
  if (fs.existsSync(fromScript)) return fromScript;

  const fromUlxEmber = path.join(
    __dirname,
    '../node_modules/ulx-v2/src/styles/ulx-styles/less/elements/icon.less',
  );
  if (fs.existsSync(fromUlxEmber)) return fromUlxEmber;

  return null;
}

function main() {
  const lessPath = findIconLessPath();
  if (!lessPath) {
    console.error(
      'extract-ulx-builder-tokens: icon.less not found. Pass path as first arg, e.g.:\n' +
        '  node scripts/extract-ulx-builder-tokens.js /path/to/ulx-v2/.../elements/icon.less',
    );
    process.exit(1);
  }

  const tokens = extractTokens(lessPath);
  const outDir = path.join(__dirname, '../app/tokens');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'icon-tokens.js');

  const lines = [
    '// Auto-generated from @ulx-builder comments in ulx-v2 .../less/elements/icon.less',
    '// Run: node scripts/extract-ulx-builder-tokens.js [path-to-icon.less]',
    '',
    'export default ' + JSON.stringify(tokens, null, 2) + ';',
    '',
  ];
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log(
    'Wrote',
    outPath,
    'with keys:',
    Object.keys(tokens).join(', ') || '(none)',
  );
}

main();
