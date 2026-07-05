#!/usr/bin/env node
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, '../app');

function walk(dir, results = [], matcher = () => true) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, results, matcher);
    } else if (matcher(full)) {
      results.push(full);
    }
  }
  return results;
}

function cleanRoute(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = content.replace(
    /^import\s+\w+\s+from\s+['"][^'"]*builder-schema['"];?\n/gm,
    ''
  );

  content = content.replace(/,?\s*builderSchema:\s*\w+,?\n/g, '\n');
  content = content.replace(/,?\s*builderSchema,?\n/g, '\n');

  content = content.replace(/,\n(\s*)\};/g, '\n$1};');
  content = content.replace(/,\s*\};/g, '\n  };');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function cleanTemplate(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = content.replace(
    /\{\{else if this\.isBuilderTab\}\}[\s\S]*?<\/DocShared::DocMain::ComponentBuilder>\s*/g,
    ''
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function cleanMeta(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = content.replace(
    /\s*\{\s*name:\s*['"]Builder['"],\s*route:\s*['"]\/builder['"],\s*id:\s*['"]builder['"],?\s*\},?\n/g,
    '\n'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function main() {
  const routes = walk(path.join(APP_ROOT, 'routes'), [], (f) => f.endsWith('.js'));
  const templates = walk(path.join(APP_ROOT, 'templates/components'), [], (f) =>
    f.endsWith('.hbs')
  );
  const metas = walk(path.join(APP_ROOT, 'documentation'), [], (f) => f.endsWith('meta.js'));

  let routeCount = 0;
  let templateCount = 0;
  let metaCount = 0;

  for (const file of routes) {
    if (cleanRoute(file)) {
      routeCount += 1;
      console.log(`✓ route ${path.relative(APP_ROOT, file)}`);
    }
  }

  for (const file of templates) {
    if (cleanTemplate(file)) {
      templateCount += 1;
      console.log(`✓ template ${path.relative(APP_ROOT, file)}`);
    }
  }

  for (const file of metas) {
    if (cleanMeta(file)) {
      metaCount += 1;
      console.log(`✓ meta ${path.relative(APP_ROOT, file)}`);
    }
  }

  console.log(
    `\nDone. Updated ${routeCount} routes, ${templateCount} templates, ${metaCount} meta files.`
  );
}

main();
