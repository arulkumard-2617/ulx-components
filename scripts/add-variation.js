#!/usr/bin/env node

/**
 * Script to add a new variation/demo to an existing component
 * Usage: npm run add-variation --component=TabMenu --variation=Controlled
 * Example: npm run add-variation --component=TabMenu --variation=Controlled
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
// Filter out 'add-variation' if present (when called from wrapper)
const filteredArgs = args.filter(arg => arg !== 'add-variation');

// Parse flags - handle both --flag=value and --flag value formats
let componentFlag = filteredArgs.find(arg => arg.startsWith('--component='));
let variationFlag = filteredArgs.find(arg => arg.startsWith('--variation='));

// Also check for --flag value format
if (!componentFlag) {
  const componentIndex = filteredArgs.indexOf('--component');
  if (componentIndex !== -1 && filteredArgs[componentIndex + 1]) {
    componentFlag = `--component=${filteredArgs[componentIndex + 1]}`;
  }
}

if (!variationFlag) {
  const variationIndex = filteredArgs.indexOf('--variation');
  if (variationIndex !== -1 && filteredArgs[variationIndex + 1]) {
    variationFlag = `--variation=${filteredArgs[variationIndex + 1]}`;
  }
}

if (!componentFlag) {
  console.error('Error: --component flag is required');
  console.error('Usage: npm run add-variation --component=ComponentName --variation=VariationName');
  process.exit(1);
}

if (!variationFlag) {
  console.error('Error: --variation flag is required');
  console.error('Usage: npm run add-variation --component=ComponentName --variation=VariationName');
  process.exit(1);
}

const componentName = componentFlag.split('=')[1];
const variationName = variationFlag.split('=')[1];

if (!componentName || !variationName) {
  console.error('Error: Component name and variation name are required');
  process.exit(1);
}

// Paths
const demoEmberPath = path.join(__dirname, '../demo/uls-ember');
const documentationPath = path.join(demoEmberPath, 'app/documentation/components');
const demoComponentsPath = path.join(demoEmberPath, 'app/components/Demo');

// Helper to convert to PascalCase
function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Helper to convert to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

// Helper to convert to camelCase
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

// Find the component's documentation folder first to get the correct component name format
let componentDocPath = null;
let category = null;
let actualComponentPascal = null;

// Search through all categories
const categories = fs.readdirSync(documentationPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Try multiple formats: kebab-case with hyphens, kebab-case without hyphens, and lowercase
const componentKebab = toKebabCase(componentName);
const componentKebabNoHyphen = componentKebab.replace(/-/g, '');
const componentLower = componentName.toLowerCase();

for (const cat of categories) {
  const categoryPath = path.join(documentationPath, cat);
  const components = fs.readdirSync(categoryPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  // Try to find component in multiple formats
  let foundComponent = null;
  if (components.includes(componentKebab)) {
    foundComponent = componentKebab;
  } else if (components.includes(componentKebabNoHyphen)) {
    foundComponent = componentKebabNoHyphen;
  } else if (components.includes(componentLower)) {
    foundComponent = componentLower;
  }
  
  if (foundComponent) {
    componentDocPath = path.join(categoryPath, foundComponent);
    category = cat;
    
    // Find the actual component PascalCase name by checking existing demo imports
    const importsFilePath = path.join(componentDocPath, 'imports.js');
    if (fs.existsSync(importsFilePath)) {
      const importsContent = fs.readFileSync(importsFilePath, 'utf8');
      // Extract component name from existing demo import path
      const demoImportMatch = importsContent.match(/components\/Demo\/(\w+)\//);
      if (demoImportMatch) {
        actualComponentPascal = demoImportMatch[1];
      }
    }
    break;
  }
}

if (!componentDocPath || !fs.existsSync(componentDocPath)) {
  console.error(`Error: Component '${componentName}' not found in documentation folder`);
  console.error(`Searched in: ${documentationPath}`);
  console.error(`Available categories: ${categories.join(', ')}`);
  process.exit(1);
}

// Use actual component PascalCase if found, otherwise use toPascalCase
const componentPascal = actualComponentPascal || toPascalCase(componentName);
const variationPascal = toPascalCase(variationName);
const variationKebab = toKebabCase(variationName);
const variationCamel = toCamelCase(variationName);

console.log(`✓ Found component '${componentName}' in category '${category}'`);

// Paths for the component
const importsFilePath = path.join(componentDocPath, 'imports.js');
const featuresFilePath = path.join(componentDocPath, 'features.js');
const demoComponentPath = path.join(demoComponentsPath, componentPascal, `${variationPascal}.gjs`);

// Check if variation already exists
if (fs.existsSync(demoComponentPath)) {
  console.error(`Error: Variation '${variationPascal}' already exists for component '${componentName}'`);
  process.exit(1);
}

// Create demo component directory if it doesn't exist
const demoComponentDir = path.join(demoComponentsPath, componentPascal);
if (!fs.existsSync(demoComponentDir)) {
  fs.mkdirSync(demoComponentDir, { recursive: true });
}

// Get the actual component import name and tag name from existing imports.js
let actualComponentImportName = `Uls${componentPascal}`;
let actualComponentTagName = `Uls${componentPascal}`;
let actualComponentPath = `uls-${toKebabCase(componentName)}`;

if (fs.existsSync(importsFilePath)) {
  const importsContent = fs.readFileSync(importsFilePath, 'utf8');
  // Extract component name from ImportSource
  const importSourceMatch = importsContent.match(/import\s+(\w+)\s+from\s+['"]uls-components\/components\/[\w\/]+\/([\w-]+)['"]/);
  if (importSourceMatch) {
    actualComponentImportName = importSourceMatch[1];
    actualComponentPath = importSourceMatch[2];
    // Default tag name to import name (Ember components use import name in templates)
    actualComponentTagName = actualComponentImportName;
  }
  
  // Try to extract component tag name from existing sources
  // First try sources with props (like @items)
  let sourceMatch = importsContent.match(/<(\w+)\s+@items/);
  if (!sourceMatch) {
    // If not found, try any source with opening tag (like <ComponentName /> or <ComponentName>)
    sourceMatch = importsContent.match(/<(\w+)(?:\s+[^>]*)?\s*\/?>/);
  }
  if (sourceMatch) {
    actualComponentTagName = sourceMatch[1];
  }
}

// 1. Create demo component file
const demoComponentContent = `import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ${actualComponentImportName} from 'uls-components/components/${category}/${actualComponentPath}';

export default class ${variationPascal}DemoComponent extends Component {
  @tracked activeItem = null;

  constructor() {
    super(...arguments);
    // Initialize with first item active
    if (this.items && this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }

  get items() {
    return [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: 'item3' }
    ];
  }

  @action
  handleItemClick(item) {
    this.activeItem = item;
  }

  <template>
    <${actualComponentTagName} 
      @items={{this.items}}
      @activeItem={{this.activeItem}}
      @onItemClick={{this.handleItemClick}}
    />
  </template>
}
`;

fs.writeFileSync(demoComponentPath, demoComponentContent);
console.log(`✓ Created demo component: ${demoComponentPath}`);

// 2. Update imports.js
let importsContent = fs.readFileSync(importsFilePath, 'utf8');

// Add demo component export
const demoExportPattern = /(export\s*\{\s*default\s+as\s+\w+Demo\s*\}\s*from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\/components\/Demo\/[\w\/]+['"];)/g;
const demoExports = [...importsContent.matchAll(demoExportPattern)];
const lastDemoExport = demoExports[demoExports.length - 1];

if (lastDemoExport) {
  const newDemoExport = `export { default as ${variationPascal}Demo } from '../../../../components/Demo/${componentPascal}/${variationPascal}';`;
  if (!importsContent.includes(newDemoExport)) {
    const insertPosition = lastDemoExport.index + lastDemoExport[0].length;
    importsContent = importsContent.slice(0, insertPosition) + '\n' + newDemoExport + importsContent.slice(insertPosition);
  }
} else {
  // If no demo exports found, add after the comment
  const commentPattern = /(\/\/ Demo Components)/;
  if (commentPattern.test(importsContent)) {
    const newDemoExport = `export { default as ${variationPascal}Demo } from '../../../../components/Demo/${componentPascal}/${variationPascal}';`;
    importsContent = importsContent.replace(commentPattern, `$1\n${newDemoExport}`);
  }
}

// Add source code export
// Find the last Source export
const sourcePattern = /(export\s+const\s+\w+Source\s*=\s*`[^`]+`;)/g;
const sources = [...importsContent.matchAll(sourcePattern)];
const lastSource = sources[sources.length - 1];

if (lastSource) {
  // Extract the component tag name from existing source to match the pattern
  const lastSourceContent = lastSource[0];
  const componentTagMatch = lastSourceContent.match(/<(\w+)\s/);
  const componentTagName = componentTagMatch ? componentTagMatch[1] : actualComponentTagName;
  
  const newSource = `export const ${variationPascal}Source = \`<${componentTagName} 
  @items={{this.items}}
  @activeItem={{this.activeItem}}
  @onItemClick={{this.handleItemClick}}
/>\`;`;
  
  if (!importsContent.includes(`${variationPascal}Source`)) {
    const insertPosition = lastSource.index + lastSource[0].length;
    importsContent = importsContent.slice(0, insertPosition) + '\n' + newSource + importsContent.slice(insertPosition);
  }
}

fs.writeFileSync(importsFilePath, importsContent);
console.log(`✓ Updated imports.js`);

// 3. Update features.js
let featuresContent = fs.readFileSync(featuresFilePath, 'utf8');

// Add to imports in features.js
// Handle both formats: // Sources on same line or new line
const featuresImportPattern = /(import\s*\{[\s\S]*?\/\/\s*Demos[\s\S]*?)(\n?\s*\/\/\s*Sources)/;
if (featuresImportPattern.test(featuresContent)) {
  const match = featuresContent.match(featuresImportPattern);
  if (match && !match[0].includes(`${variationPascal}Demo`)) {
    // Find the last demo import and add after it with proper comma
    const demosInMatch = match[1].match(/(\w+Demo,?\s*)/g);
    if (demosInMatch && demosInMatch.length > 0) {
      const lastDemo = demosInMatch[demosInMatch.length - 1];
      const lastDemoName = lastDemo.trim().replace(',', '').trim();
      // Check if last demo has a comma
      const hasComma = lastDemo.includes(',');
      // Replace the last demo, ensuring it has a comma, then add new one
      if (hasComma) {
        featuresContent = featuresContent.replace(
          new RegExp(`(${lastDemoName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},?\\s*)`),
          `$1\n  ${variationPascal}Demo,`
        );
      } else {
        // Add comma to last demo and add new one
        featuresContent = featuresContent.replace(
          new RegExp(`(${lastDemoName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(\\s*)`),
          `$1,\n  ${variationPascal}Demo$2`
        );
      }
    } else {
      featuresContent = featuresContent.replace(
        featuresImportPattern,
        `$1\n  ${variationPascal}Demo,\n$2`
      );
    }
  }
}

// Add source to imports
// Handle multiple formats: } from on same line or new line, and // Sources on same line or new line
// Also handle cases like "BasicSource}" where closing brace is on same line
let featuresSourcePattern = /(\/\/\s*Sources[\s\S]*?)(\n?\s*\} from)/;
if (!featuresSourcePattern.test(featuresContent)) {
  // Try pattern without newline requirement for closing brace
  featuresSourcePattern = /(\/\/\s*Sources[\s\S]*?)(\} from)/;
}

if (featuresSourcePattern.test(featuresContent)) {
  const match = featuresContent.match(featuresSourcePattern);
  if (match && !match[0].includes(`${variationPascal}Source`)) {
    // Find the last source import and add after it with proper comma
    // Match sources with optional comma and optional closing brace (like "BasicSource" or "BasicSource," or "BasicSource}")
    const sourcesInMatch = match[1].match(/(\w+Source)(,?\s*)(\}?)/g);
    if (sourcesInMatch && sourcesInMatch.length > 0) {
      const lastSource = sourcesInMatch[sourcesInMatch.length - 1];
      // Extract just the source name (without comma or brace)
      const lastSourceNameMatch = lastSource.match(/(\w+Source)/);
      const lastSourceName = lastSourceNameMatch ? lastSourceNameMatch[1] : lastSource.replace(/[,\s}].*$/, '');
      
      // Check if last source has a comma
      const hasComma = lastSource.includes(',');
      // Check if closing brace is on same line (like "BasicSource}")
      const hasBraceOnSameLine = lastSource.includes('}') || match[2].trim().startsWith('}');
      
      // Replace the last source, ensuring it has a comma, then add new one
      if (hasComma) {
        featuresContent = featuresContent.replace(
          new RegExp(`(${lastSourceName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},?\\s*)`),
          `$1\n  ${variationPascal}Source,`
        );
      } else if (hasBraceOnSameLine) {
        // Closing brace is on same line, add comma and new source before the brace
        // Match "BasicSource}" or "BasicSource }"
        featuresContent = featuresContent.replace(
          new RegExp(`(${lastSourceName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(\\s*\\})`),
          `$1,\n  ${variationPascal}Source$2`
        );
      } else {
        // Add comma to last source and add new one
        featuresContent = featuresContent.replace(
          new RegExp(`(${lastSourceName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(\\s*)`),
          `$1,\n  ${variationPascal}Source$2`
        );
      }
    } else {
      // No sources found yet, add after // Sources comment
      featuresContent = featuresContent.replace(
        featuresSourcePattern,
        `$1\n  ${variationPascal}Source,\n$2`
      );
    }
  }
}

// Add new feature item to the array
const featureItemPattern = /(\]\s*;)/;
if (featureItemPattern.test(featuresContent)) {
  const newFeatureItem = `  {
    id: "${variationKebab}",
    sectionNav: "${variationPascal}",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>${variationPascal}</code> demo shows ${variationCamel} usage of the ${componentPascal} component."
      }
    },
    demo: {
      component: ${variationPascal}Demo,
      props: {
        source: ${variationPascal}Source,
        snippetName: "${variationKebab}",
        language: "handlebars"
      }
    }
  }`;
  
  // Insert before the closing bracket (make sure there's a comma before)
  featuresContent = featuresContent.replace(
    featureItemPattern,
    `,\n${newFeatureItem}\n$1`
  );
}

fs.writeFileSync(featuresFilePath, featuresContent);
console.log(`✓ Updated features.js`);

console.log(`\n✅ Variation '${variationPascal}' added to '${componentName}' component successfully!`);
console.log(`\nNext steps:`);
console.log(`1. Update ${variationPascal}.gjs with actual demo implementation`);
console.log(`2. Update ${variationPascal}Source in imports.js with correct component usage code`);
console.log(`3. Update the section description in features.js if needed`);

