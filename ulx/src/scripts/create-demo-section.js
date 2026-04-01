#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Script to create demo sections for utility components in ulx-foundation
 * Usage: npm run create demo-section --component=Password
 * Example: npm run create demo-section --component=Password
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
// Filter out 'demo-section' if present (when called from wrapper)
const filteredArgs = args.filter((arg) => arg !== 'demo-section');

// Parse --component flag
const componentFlag = filteredArgs.find((arg) => arg.startsWith('--component='));
if (!componentFlag) {
	console.error('Error: --component flag is required');
	console.error('Usage: npm run create demo-section --component=ComponentName');
	process.exit(1);
}

const componentName = componentFlag.split('=')[1];
if (!componentName) {
	console.error('Error: Component name is required');
	process.exit(1);
}

// Paths
const foundationPath = path.join(__dirname, '../demo/ulx-foundation/src');
const utilitiesPath = path.join(foundationPath, 'Foundation/Utilities');
const utilitiesIndexPath = path.join(utilitiesPath, 'index.jsx');

// Helper to convert to PascalCase
function toPascalCase(str) {
	return str
		.split(/[-_]/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join('');
}

// Helper to convert to kebab-case
function toKebabCase(str) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Helper to convert to camelCase
function camelCase(str) {
	const pascal = toPascalCase(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

const pascalName = toPascalCase(componentName);
const kebabName = toKebabCase(componentName);
const camelName = camelCase(componentName);

// Determine component export name - use PascalCase + Utilities suffix
const componentExportName = `${pascalName}Utilities`;

// Check if component already exists
const componentFilePath = path.join(utilitiesPath, `${componentExportName}.jsx`);
if (fs.existsSync(componentFilePath)) {
	console.error(`Error: Component ${componentExportName}.jsx already exists`);
	process.exit(1);
}

// Create component file
const componentContent = `import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const ${camelName}Utilities = [
  { className: '.example-class', property: 'Description of the utility class.' },
  // Add more utility classes here
];

export default function ${componentExportName}() {
  return (
    <FoundationSection
      id="utilities-${kebabName}"
    >
      <ClassPropertyTable 
        rows={${camelName}Utilities} 
        columnLabels={['Utility', 'Description']} 
      />
    </FoundationSection>
  );
}
`;

fs.writeFileSync(componentFilePath, componentContent);
console.log(`✓ Created component: ${componentFilePath}`);

// Update index.jsx
let indexContent = fs.readFileSync(utilitiesIndexPath, 'utf8');

// Add import - find the last import statement
const importPattern = /(import\s+[\w\s,{}]+\s+from\s+['"]\.\/[\w]+['"];)/g;
const imports = [...indexContent.matchAll(importPattern)];
const lastImport = imports[imports.length - 1];
if (lastImport) {
	const newImport = `import ${componentExportName} from './${componentExportName}';`;
	if (!indexContent.includes(newImport)) {
		const insertPosition = lastImport.index + lastImport[0].length;
		indexContent =
			indexContent.slice(0, insertPosition) + '\n' + newImport + indexContent.slice(insertPosition);
	}
}

// Add to named exports - find the export block
const exportPattern = /(export\s*\{[\s\S]*?)(\};)/;
if (exportPattern.test(indexContent)) {
	const exportMatch = indexContent.match(exportPattern);
	if (exportMatch && !exportMatch[0].includes(componentExportName)) {
		// Find the last export before the closing brace
		const exports = exportMatch[1]
			.trim()
			.split(',')
			.map((e) => e.trim())
			.filter(Boolean)
			.filter((e) => e !== '{' && e !== '}');

		// Remove the opening brace from first item if present
		const cleanExports = exports.map((e) => e.replace(/^\{\s*/, '').replace(/\s*\}\s*$/, ''));
		cleanExports.push(componentExportName);

		// Reconstruct exports - maintain formatting
		const exportList = cleanExports.join(', ');
		const newExports = `export {\n  ${exportList}\n}`;
		indexContent = indexContent.replace(exportPattern, newExports);
	}
}

// Add to default export function - find the component JSX section
// Look for the pattern before </div> closing tag in the default export
const defaultExportPattern =
	/(export default function Utilities\(\) \{[\s\S]*?)(\s+<\/div>\s+\)\s+\})/;
if (defaultExportPattern.test(indexContent)) {
	// Find where to insert - before the closing </div> or before <NavLinks />
	const navLinksPattern = /(\s+<NavLinks \/>)/;
	if (navLinksPattern.test(indexContent)) {
		// Insert before NavLinks
		const componentJSX = `      <${componentExportName} />\n`;
		if (!indexContent.includes(`<${componentExportName}`)) {
			indexContent = indexContent.replace(navLinksPattern, `${componentJSX}$1`);
		}
	} else {
		// Insert before closing </div>
		const componentJSX = `      <${componentExportName} />\n`;
		if (!indexContent.includes(`<${componentExportName}`)) {
			indexContent = indexContent.replace(/(\s+<\/div>\s+\)\s+\})/, `${componentJSX}$1`);
		}
	}
}

fs.writeFileSync(utilitiesIndexPath, indexContent);
console.log(`✓ Updated ${utilitiesIndexPath}`);

// Also need to create corresponding Ember route and template
const emberDemoPath = path.join(__dirname, '../demo/ulx-ember');
const emberRoutesPath = path.join(emberDemoPath, 'app/routes/utilities');
const emberTemplatesPath = path.join(emberDemoPath, 'app/templates/utilities');
const emberRouterPath = path.join(emberDemoPath, 'app/router.js');

// Create directories if they don't exist
[emberRoutesPath, emberTemplatesPath].forEach((dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
});

// Create Ember route file
const emberRouteContent = `import Route from '@ember/routing/route';
import { ${componentExportName} } from '@uls/foundation';

export default class Utilities${pascalName}Route extends Route {
  model() {
    return {
      useReactComponents: true,
      React${componentExportName}: ${componentExportName},
      reactProps: {}
    };
  }
}
`;

const emberRouteFilePath = path.join(emberRoutesPath, `${kebabName}.js`);
if (fs.existsSync(emberRouteFilePath)) {
	console.log(`⚠ Ember route file already exists: ${emberRouteFilePath}`);
} else {
	fs.writeFileSync(emberRouteFilePath, emberRouteContent);
	console.log(`✓ Created Ember route: ${emberRouteFilePath}`);
}

// Create Ember template file
const emberTemplateContent = `{{page-title "${pascalName} Utilities - ULS Ember Documentation"}}

<Common::DocMain::FoundationLayout 
  @title="${pascalName} Utilities" 
  @description="${pascalName} utility classes for controlling element properties."
>
  <div class="ulx-foundation-page">
    {{#if @model.useReactComponents}}
      <UlsReactBridge
        @component={{@model.React${componentExportName}}}
        @props={{@model.reactProps}}
      />
    {{else}}
      <Common::DocMain::FoundationSection 
        @id="utilities-${kebabName}"
        @title="${pascalName} Utilities"
        @subtitle="${pascalName} utility classes for controlling element properties."
      >
        <p class="fg-text-secondary">React ${componentExportName} component could not be loaded.</p>
      </Common::DocMain::FoundationSection>
    {{/if}}
  </div>
</Common::DocMain::FoundationLayout>
`;

const emberTemplateFilePath = path.join(emberTemplatesPath, `${kebabName}.hbs`);
if (fs.existsSync(emberTemplateFilePath)) {
	console.log(`⚠ Ember template file already exists: ${emberTemplateFilePath}`);
} else {
	fs.writeFileSync(emberTemplateFilePath, emberTemplateContent);
	console.log(`✓ Created Ember template: ${emberTemplateFilePath}`);
}

// Update Ember router.js
let emberRouterContent = fs.readFileSync(emberRouterPath, 'utf8');
const emberRouteLine = `    this.route('${kebabName}', { path: '/${kebabName}' });\n`;

// Check if utilities route exists
const utilitiesRoutePattern =
	/(this\.route\('utilities', \{ path: '\/utilities' \}, function \(\) \{[\s\S]*?)(\}\);)/;
if (utilitiesRoutePattern.test(emberRouterContent)) {
	// Check if route already exists
	if (emberRouterContent.includes(`this.route('${kebabName}'`)) {
		console.log(`⚠ Route '${kebabName}' already exists in Ember router.js`);
	} else {
		// Add route before the closing });
		emberRouterContent = emberRouterContent.replace(
			utilitiesRoutePattern,
			`$1${emberRouteLine}  $2`
		);
		fs.writeFileSync(emberRouterPath, emberRouterContent);
		console.log(`✓ Updated Ember router.js`);
	}
} else {
	console.log(`⚠ Could not find utilities route in Ember router.js. Please add manually.`);
}

console.log(`\n✅ Demo section for ${pascalName} created successfully!`);
console.log(`\nNext steps:`);
console.log(`1. Update ${componentExportName}.jsx with actual utility classes and examples`);
console.log(`2. The component is already added to the Utilities index`);
console.log(`3. Ember route and template have been created`);
