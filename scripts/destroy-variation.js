#!/usr/bin/env node

/**
 * Script to remove a variation/demo from an existing component
 * Usage: npm run destroy-variation --component=TabMenu --variation=Controlled
 * Example: npm run destroy-variation --component=TabMenu --variation=Controlled
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
// Filter out 'destroy-variation' if present (when called from wrapper)
const filteredArgs = args.filter(arg => arg !== 'destroy-variation');

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
  console.error('Usage: npm run destroy-variation --component=ComponentName --variation=VariationName');
  process.exit(1);
}

if (!variationFlag) {
  console.error('Error: --variation flag is required');
  console.error('Usage: npm run destroy-variation --component=ComponentName --variation=VariationName');
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

// Find the component's documentation folder
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

console.log(`✓ Found component '${componentName}' in category '${category}'`);

// Paths for the component
const importsFilePath = path.join(componentDocPath, 'imports.js');
const featuresFilePath = path.join(componentDocPath, 'features.js');
const demoComponentPath = path.join(demoComponentsPath, componentPascal, `${variationPascal}.gjs`);
const snippetsPath = path.join(componentDocPath, 'snippets');
const snippetFilePath = path.join(snippetsPath, `${variationPascal}.gjs.js`);

// Check if variation exists
if (!fs.existsSync(demoComponentPath)) {
  console.error(`Error: Variation '${variationPascal}' does not exist for component '${componentName}'`);
  process.exit(1);
}

// 1. Delete demo component file
if (fs.existsSync(demoComponentPath)) {
  fs.unlinkSync(demoComponentPath);
  console.log(`✓ Deleted demo component: ${demoComponentPath}`);
}

// 1b. Delete snippet file
if (fs.existsSync(snippetFilePath)) {
  fs.unlinkSync(snippetFilePath);
  console.log(`✓ Deleted snippet file: ${snippetFilePath}`);
} else {
  console.log(`⚠ Snippet file not found: ${snippetFilePath}`);
}

// 2. Update imports.js - remove demo export and source
let importsContent = fs.readFileSync(importsFilePath, 'utf8');

// Remove demo export
const demoExportPattern = new RegExp(`export\\s*\\{\\s*default\\s+as\\s+${variationPascal}Demo\\s*\\}\\s*from\\s+['"][^'"]+['"];?\\s*\\n?`, 'g');
importsContent = importsContent.replace(demoExportPattern, '');

// Remove source export - handle both snippet imports and hardcoded strings
// Pattern 1: Snippet import: export { default as VariationSource } from './snippets/Variation.gjs';
const snippetImportPattern = new RegExp(`export\\s*\\{\\s*default\\s+as\\s+${variationPascal}Source\\s*\\}\\s*from\\s+['"][^'"]+['"];?\\s*\\n?`, 'g');
importsContent = importsContent.replace(snippetImportPattern, '');

// Pattern 2: Hardcoded string: export const VariationSource = `...`;
const hardcodedSourcePattern = new RegExp(`export\\s+const\\s+${variationPascal}Source\\s*=\\s*\`[^\`]+\`;?\\s*\\n?`, 'g');
importsContent = importsContent.replace(hardcodedSourcePattern, '');

// Clean up extra blank lines
importsContent = importsContent.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(importsFilePath, importsContent);
console.log(`✓ Updated imports.js`);

// 3. Update features.js - remove from imports and remove feature item
let featuresContent = fs.readFileSync(featuresFilePath, 'utf8');

// Remove from imports - demo (handle with or without comma)
const demoImportPattern = new RegExp(`\\s*${variationPascal}Demo,?\\s*\\n?`, 'g');
featuresContent = featuresContent.replace(demoImportPattern, '');

// Remove from imports - source (handle with or without comma)
const sourceImportPattern = new RegExp(`\\s*${variationPascal}Source,?\\s*\\n?`, 'g');
featuresContent = featuresContent.replace(sourceImportPattern, '');

// Clean up: remove trailing commas before closing brace in imports
featuresContent = featuresContent.replace(/,\s*(\s*\})/g, '$1');
// Clean up: fix any double commas in imports
featuresContent = featuresContent.replace(/,\s*,/g, ',');

// Remove feature item from array - use a more precise approach
// Find the feature item by matching from the opening brace to closing brace
// We need to handle nested braces properly
const featureItemIdPattern = new RegExp(`id:\\s*["']${variationKebab}["']`);
const idMatch = featuresContent.match(featureItemIdPattern);

if (idMatch) {
  const idIndex = featuresContent.indexOf(idMatch[0]);
  
  // Find the opening brace of the object containing this id (go backwards from id)
  let startIndex = -1;
  let braceDepth = 0;
  
  // First, find where this object starts by going backwards
  for (let i = idIndex; i >= 0; i--) {
    const char = featuresContent[i];
    if (char === '}') {
      braceDepth++;
    } else if (char === '{') {
      if (braceDepth === 0) {
        startIndex = i;
        break;
      }
      braceDepth--;
    }
  }
  
  // Find the closing brace of this object (go forwards from id)
  let endIndex = -1;
  braceDepth = 0;
  
  for (let i = startIndex; i < featuresContent.length; i++) {
    const char = featuresContent[i];
    if (char === '{') {
      braceDepth++;
    } else if (char === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
  
  if (startIndex !== -1 && endIndex !== -1) {
    // Extract the parts before and after the feature item
    let beforeItem = featuresContent.substring(0, startIndex);
    let afterItem = featuresContent.substring(endIndex);
    
    // Remove trailing comma and whitespace before the item
    beforeItem = beforeItem.replace(/,\s*$/, '');
    
    // Remove leading comma and whitespace after the item (but preserve newlines for formatting)
    afterItem = afterItem.replace(/^\s*,?\s*/, '');
    
    featuresContent = beforeItem + afterItem;
  }
}

// Clean up: remove trailing commas before closing bracket
featuresContent = featuresContent.replace(/,\s*(\s*\])/g, '$1');
// Clean up: remove multiple blank lines
featuresContent = featuresContent.replace(/\n{3,}/g, '\n\n');
// Clean up: fix any double commas
featuresContent = featuresContent.replace(/,\s*,/g, ',');

fs.writeFileSync(featuresFilePath, featuresContent);
console.log(`✓ Updated features.js`);

console.log(`\n✅ Variation '${variationPascal}' removed from '${componentName}' component successfully!`);

