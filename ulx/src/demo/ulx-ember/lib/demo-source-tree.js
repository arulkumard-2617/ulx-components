'use strict';

const fs = require('fs');
const path = require('path');
const Plugin = require('broccoli-plugin');

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function escapeForTemplateLiteral(content) {
  return content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function collectGjsFiles(dir, results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectGjsFiles(fullPath, results);
    } else if (entry.name.endsWith('.gjs')) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * Broccoli plugin that emits AMD-friendly JS modules containing the raw text
 * of demo .gjs files. Demo .gjs files remain the single source of truth.
 */
module.exports = class DemoSourceTree extends Plugin {
  constructor(options) {
    super([], {
      name: 'demo-source-tree',
      persistentFilter: true
    });

    this.demoRoot = options.demoRoot;
    this.templateRoot = options.templateRoot;
  }

  build() {
    const outputRoot = path.join(this.outputPath, 'demo-sources');
    this.resetOutput(outputRoot);

    this.emitCategory(outputRoot, 'demo', this.demoRoot);
    this.emitCategory(outputRoot, 'template', this.templateRoot);
  }

  resetOutput(outputRoot) {
    if (fs.existsSync(outputRoot)) {
      fs.rmSync(outputRoot, { recursive: true, force: true });
    }
    fs.mkdirSync(outputRoot, { recursive: true });
  }

  emitCategory(outputRoot, category, sourceRoot) {
    const files = collectGjsFiles(sourceRoot);

    for (const srcFile of files) {
      const relative = path.relative(sourceRoot, srcFile);
      const parts = relative.split(path.sep);
      const fileName = path.parse(parts.pop()).name;
      const dirParts = parts.map(toKebabCase);
      const destDir = path.join(
        outputRoot,
        category,
        ...dirParts
      );
      const destFile = path.join(destDir, `${toKebabCase(fileName)}.js`);

      fs.mkdirSync(destDir, { recursive: true });

      const content = fs.readFileSync(srcFile, 'utf8');
      const escaped = escapeForTemplateLiteral(content);
      const moduleSource = `export default \`${escaped}\`;\n`;

      fs.writeFileSync(destFile, moduleSource, 'utf8');
    }
  }
};
