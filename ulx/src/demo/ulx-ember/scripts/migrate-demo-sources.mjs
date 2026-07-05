#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Migrate documentation imports.js files from generated snippet modules
 * to build-generated demo-sources modules (from original demo .gjs files).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { demoImportPathToSourceModule } = require('../lib/demo-source-path.js');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, '../app');

const IMPORTS_GLOBS = [
  path.join(APP_ROOT, 'documentation'),
  path.join(APP_ROOT, 'template-docs')
];

function walkImportsFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkImportsFiles(full, results);
    } else if (entry.name === 'imports.js') {
      results.push(full);
    }
  }
  return results;
}

function escapeForTemplateLiteral(content) {
  return content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function readImportSnippetContent(importsDir, snippetName = 'Import') {
  const candidates = [
    path.join(importsDir, 'snippets', `${snippetName}.gjs.js`),
    path.join(importsDir, 'snippets', `${snippetName}.gjs`)
  ];

  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const raw = fs.readFileSync(file, 'utf8');
    const match = raw.match(/export default\s*`([\s\S]*)`;\s*$/);
    if (match) {
      return match[1];
    }
  }

  return null;
}

function parseDemoExports(content) {
  const demos = new Map();
  const re =
    /export\s+\{\s*default\s+as\s+(\w+)\s*\}\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = re.exec(content)) !== null) {
    const [, exportName, importPath] = match;
    if (!exportName.endsWith('Demo')) continue;
    const baseName = path.basename(importPath);
    demos.set(baseName, { exportName, importPath });
  }
  return demos;
}

function sourceModuleForDemo(demoImportPath) {
  return demoImportPathToSourceModule(demoImportPath);
}

function migrateImportsFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;
  const importsDir = path.dirname(filePath);
  const demos = parseDemoExports(content);

  content = content.replace(
    /export\s+\{\s*default\s+as\s+(\w+Source)\s*\}\s+from\s+['"]([^'"]+)\.gjs\?raw['"];?/g,
    (full, sourceName, demoImportPath) => {
      const sourceModule = sourceModuleForDemo(demoImportPath);
      if (!sourceModule) {
        console.warn(
          `  ⚠ could not map ?raw source for ${sourceName} in ${filePath}`
        );
        return full;
      }
      return `export { default as ${sourceName} } from '${sourceModule}';`;
    }
  );

  content = content.replace(
    /export\s+\{\s*default\s+as\s+(\w+Source)\s*\}\s+from\s+['"]\.\/snippets\/([^'"]+)\.gjs['"];?/g,
    (full, sourceName, snippetBase) => {
      if (snippetBase === 'Import') {
        return full;
      }

      const demo = demos.get(snippetBase);
      if (!demo) {
        const snippetContent = readImportSnippetContent(importsDir, snippetBase);
        if (snippetContent !== null) {
          const escaped = escapeForTemplateLiteral(snippetContent);
          console.warn(
            `  ↪ inlined ${sourceName} from snippet (no demo) in ${path.relative(APP_ROOT, filePath)}`
          );
          return `export const ${sourceName} = \`${escaped}\`;`;
        }

        console.warn(
          `  ⚠ no demo match for ${sourceName} (${snippetBase}) in ${filePath}`
        );
        return full;
      }

      const sourceModule = sourceModuleForDemo(demo.importPath);
      if (!sourceModule) {
        console.warn(
          `  ⚠ could not map demo source for ${sourceName} in ${filePath}`
        );
        return full;
      }

      return `export { default as ${sourceName} } from '${sourceModule}';`;
    }
  );

  if (content.includes("from './snippets/Import.gjs'")) {
    const importContent = readImportSnippetContent(importsDir, 'Import');
    if (importContent !== null) {
      const escaped = escapeForTemplateLiteral(importContent);
      content = content.replace(
        /export\s+\{\s*default\s+as\s+ImportSource\s*\}\s+from\s+['"]\.\/snippets\/Import\.gjs['"];?/,
        `export const ImportSource = \`${escaped}\`;`
      );
    } else {
      console.warn(`  ⚠ Import snippet not found for ${filePath}`);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function main() {
  const files = IMPORTS_GLOBS.flatMap((dir) => walkImportsFiles(dir));
  let changed = 0;

  for (const file of files) {
    if (migrateImportsFile(file)) {
      changed += 1;
      console.log(`✓ migrated ${path.relative(APP_ROOT, file)}`);
    }
  }

  console.log(`\nDone. Updated ${changed} of ${files.length} imports.js files.`);
}

main();
