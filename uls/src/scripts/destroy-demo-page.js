#!/usr/bin/env node

/**
 * Script to remove a demo page for a component
 * Usage: npm run destroy demo-page ComponentName --category collections
 * Example: npm run destroy demo-page TabMenu --category collections
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
// Filter out 'destroy-demo-page' and 'destroy' if present (when called from wrapper)
const filteredArgs = args.filter(arg => arg !== 'destroy-demo-page' && arg !== 'destroy');

// If called from wrapper, first arg might be 'demo-page', otherwise it's the component name
const commandIndex = filteredArgs.findIndex(arg => arg === 'demo-page');
const componentName = commandIndex !== -1 ? filteredArgs[commandIndex + 1] : filteredArgs[0];

if (!componentName) {
  console.error('Error: Component name is required');
  console.error('Usage: npm run destroy demo-page ComponentName category');
  console.error('   OR: npm run destroy demo-page ComponentName --category collections');
  process.exit(1);
}

// Parse flags - support both --flag format and positional arguments
const categoryIndex = filteredArgs.indexOf('--category');
let category;

if (categoryIndex !== -1) {
  // Flag format: --category value
  category = filteredArgs[categoryIndex + 1] || 'collections';
} else {
  // Positional format: destroy demo-page ComponentName category
  const nameIndex = commandIndex !== -1 ? commandIndex + 1 : 0;
  category = filteredArgs[nameIndex + 1] || 'collections';
}

// Helper to convert to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

// Helper to convert to PascalCase
function toPascalCase(str) {
  const camel = str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

// Paths
const demoEmberPath = path.join(__dirname, '../demo/uls-ember');
const routesPath = path.join(demoEmberPath, 'app/routes/components', category);
const templatesPath = path.join(demoEmberPath, 'app/templates/components', category);
const controllersPath = path.join(demoEmberPath, 'app/controllers/components', category);
const documentationPath = path.join(demoEmberPath, 'app/documentation/components', category);
const demoComponentsPath = path.join(demoEmberPath, 'app/components/Demo');
const routerPath = path.join(demoEmberPath, 'app/router.js');
const docsIndexPath = path.join(demoEmberPath, 'app/constants/docs/index.js');

const kebabName = toKebabCase(componentName);
const pascalName = toPascalCase(componentName);
const categoryPascal = toPascalCase(category);

// Find the actual component folder name (might be kebab-case or different)
let componentDocPath = null;
let actualKebabName = kebabName;

if (fs.existsSync(documentationPath)) {
  const components = fs.readdirSync(documentationPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  // Try to find component in multiple formats
  let foundComponent = null;
  if (components.includes(kebabName)) {
    foundComponent = kebabName;
  } else if (components.includes(componentName.toLowerCase())) {
    foundComponent = componentName.toLowerCase();
  } else {
    // Try to find by matching case-insensitive
    foundComponent = components.find(c => c.toLowerCase() === kebabName.toLowerCase());
  }
  
  if (foundComponent) {
    componentDocPath = path.join(documentationPath, foundComponent);
    actualKebabName = foundComponent;
  }
}

if (!componentDocPath || !fs.existsSync(componentDocPath)) {
  console.error(`Error: Component '${componentName}' not found in category '${category}'`);
  console.error(`Searched in: ${documentationPath}`);
  if (fs.existsSync(documentationPath)) {
    const components = fs.readdirSync(documentationPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    console.error(`Available components: ${components.join(', ')}`);
  }
  process.exit(1);
}

console.log(`✓ Found component '${componentName}' in category '${category}'`);

// 1. Delete route file
const routeFilePath = path.join(routesPath, `${actualKebabName}.js`);
if (fs.existsSync(routeFilePath)) {
  fs.unlinkSync(routeFilePath);
  console.log(`✓ Deleted route: ${routeFilePath}`);
} else {
  console.log(`⚠ Route file not found: ${routeFilePath}`);
}

// 2. Delete controller file
const controllerFilePath = path.join(controllersPath, `${actualKebabName}.js`);
if (fs.existsSync(controllerFilePath)) {
  fs.unlinkSync(controllerFilePath);
  console.log(`✓ Deleted controller: ${controllerFilePath}`);
} else {
  console.log(`⚠ Controller file not found: ${controllerFilePath}`);
}

// 3. Delete template file
const templateFilePath = path.join(templatesPath, `${actualKebabName}.hbs`);
if (fs.existsSync(templateFilePath)) {
  fs.unlinkSync(templateFilePath);
  console.log(`✓ Deleted template: ${templateFilePath}`);
} else {
  console.log(`⚠ Template file not found: ${templateFilePath}`);
}

// 4. Delete documentation files and directory
if (fs.existsSync(componentDocPath)) {
  // Delete snippets directory if it exists
  const snippetsPath = path.join(componentDocPath, 'snippets');
  if (fs.existsSync(snippetsPath)) {
    // Delete all files in the snippets directory
    const snippetFiles = fs.readdirSync(snippetsPath);
    snippetFiles.forEach(file => {
      const filePath = path.join(snippetsPath, file);
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
        console.log(`✓ Deleted snippet file: ${filePath}`);
      }
    });
    
    // Delete the snippets directory
    fs.rmdirSync(snippetsPath);
    console.log(`✓ Deleted snippets directory: ${snippetsPath}`);
  }
  
  // Delete all remaining files in the documentation directory
  const files = fs.readdirSync(componentDocPath);
  files.forEach(file => {
    const filePath = path.join(componentDocPath, file);
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted documentation file: ${filePath}`);
    }
  });
  
  // Delete the directory
  fs.rmdirSync(componentDocPath);
  console.log(`✓ Deleted documentation directory: ${componentDocPath}`);
}

// 5. Delete demo component directory
const componentDemoPath = path.join(demoComponentsPath, pascalName);
if (fs.existsSync(componentDemoPath)) {
  // Delete all files in the demo directory
  const files = fs.readdirSync(componentDemoPath);
  files.forEach(file => {
    const filePath = path.join(componentDemoPath, file);
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted demo file: ${filePath}`);
    }
  });
  
  // Delete the directory
  fs.rmdirSync(componentDemoPath);
  console.log(`✓ Deleted demo directory: ${componentDemoPath}`);
} else {
  console.log(`⚠ Demo directory not found: ${componentDemoPath}`);
}

// 6. Update router.js - remove route (handle both simple and nested routes)
let routerContent = fs.readFileSync(routerPath, 'utf8');

// First try to match a simple route: this.route('name', { path: '/name' });
const simpleRoutePattern = new RegExp(`\\s*this\\.route\\('${actualKebabName}',\\s*\\{[^}]*\\}\\);?\\s*\\n?`, 'g');

// Also try to match nested routes with function: this.route('name', { path: '/name' }, function () { ... });
const nestedRoutePattern = new RegExp(
  `\\s*this\\.route\\('${actualKebabName}',\\s*\\{[^}]*\\},?\\s*function\\s*\\(\\)\\s*\\{[^}]*\\}\\);?\\s*\\n?`,
  'g'
);

let routeFound = false;

if (nestedRoutePattern.test(routerContent)) {
  routerContent = routerContent.replace(nestedRoutePattern, '');
  routeFound = true;
} else if (simpleRoutePattern.test(routerContent)) {
  routerContent = routerContent.replace(simpleRoutePattern, '');
  routeFound = true;
}

if (routeFound) {
  fs.writeFileSync(routerPath, routerContent);
  console.log(`✓ Updated router.js`);
} else {
  console.log(`⚠ Route '${actualKebabName}' not found in router.js`);
}

// 7. Update docs/index.js - remove navigation entry
let docsContent = fs.readFileSync(docsIndexPath, 'utf8');

// Find the route pattern to match
const routePattern = `components.${category}.${actualKebabName}`;

// Find the menu item by its route using brace matching (more precise)
const routePatternEscaped = routePattern.replace(/\./g, '\\.');
const routeMatch = docsContent.match(new RegExp(`route:\\s*['"]${routePatternEscaped}['"]`));

if (routeMatch) {
  const routeIndex = routeMatch.index;
  
  // Find the opening brace of the menu item object (go backwards from route)
  let startIndex = -1;
  let braceDepth = 0;
  
  for (let i = routeIndex; i >= 0; i--) {
    const char = docsContent[i];
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
  
  // Find the closing brace of the menu item object (go forwards from route)
  let endIndex = -1;
  braceDepth = 0;
  
  for (let i = startIndex; i < docsContent.length; i++) {
    const char = docsContent[i];
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
    // Extract the parts before and after the menu item
    let beforeItem = docsContent.substring(0, startIndex);
    let afterItem = docsContent.substring(endIndex);
    
    // Remove trailing comma and whitespace before the item
    beforeItem = beforeItem.replace(/,\s*$/, '');
    
    // Remove leading comma and whitespace after the item (but preserve newlines for formatting)
    afterItem = afterItem.replace(/^\s*,?\s*/, '');
    
    docsContent = beforeItem + afterItem;
    
    // Clean up empty category wrappers (if all items removed from a category)
    // Match: { category: '...', items: [] }
    const emptyCategoryPattern = new RegExp(
      `\\{\\s*category:\\s*['"][^'"]*['"],\\s*items:\\s*\\[\\s*\\]\\s*\\},?\\s*`,
      'g'
    );
    docsContent = docsContent.replace(emptyCategoryPattern, '');
    
    // Clean up empty children arrays (if all items removed from a menu section)
    docsContent = docsContent.replace(/children:\s*\[\s*\]/g, 'children: []');
    
    // Clean up trailing commas before closing brackets
    docsContent = docsContent.replace(/,(\s*\])/g, '$1');
    docsContent = docsContent.replace(/,(\s*\})/g, '$1');
    
    // Clean up multiple consecutive commas
    docsContent = docsContent.replace(/,\s*,/g, ',');
    
    // Clean up multiple blank lines
    docsContent = docsContent.replace(/\n{3,}/g, '\n\n');
    
    fs.writeFileSync(docsIndexPath, docsContent);
    console.log(`✓ Updated docs/index.js`);
  } else {
    console.log(`⚠ Could not find menu item boundaries for '${componentName}' in docs/index.js`);
  }
} else {
  console.log(`⚠ Navigation item for '${componentName}' not found in docs/index.js`);
}

console.log(`\n✅ Demo page for '${componentName}' removed successfully!`);

