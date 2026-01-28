#!/usr/bin/env node

/**
 * Script to create demo pages for components
 * Usage: npm run create demo-page "PageName[ComponentName]" --category collections --submodule menu
 * Example: npm run create demo-page "TestPage[TestComponent]" --category collections --submodule menu
 * Note: Quote PageName[ComponentName] so the shell does not expand brackets.
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);

// If called from wrapper, first arg might be 'demo-page', otherwise it's the page name
const commandIndex = args.findIndex((arg) => arg === 'demo-page');
const pageName = commandIndex !== -1 ? args[commandIndex + 1] : args[0];
if (!pageName) {
	console.error('Error: Page name is required');
	console.error('Usage: npm run create demo-page PageName category submodule');
	console.error('   OR: npm run create demo-page PageName --category collections --submodule menu');
	process.exit(1);
}

// Extract component name from PageName[TabMenu] format
const componentMatch = pageName.match(/\[(.+?)\]/);
const componentName = componentMatch ? componentMatch[1] : pageName;
const displayName = componentMatch ? pageName.replace(/\[.+?\]/, '').trim() : pageName;

// Parse flags - support both --flag format and positional arguments
const categoryIndex = args.indexOf('--category');
const submoduleIndex = args.indexOf('--submodule');

let category, submodule;

if (categoryIndex !== -1) {
	// Flag format: --category value
	category = args[categoryIndex + 1] || 'collections';
	submodule = submoduleIndex !== -1 ? args[submoduleIndex + 1] : null;
} else {
	// Positional format: demo-page PageName category submodule
	// Args after pageName are positional
	const pageIndex = commandIndex !== -1 ? commandIndex + 1 : 0;
	category = args[pageIndex + 1] || 'collections';
	submodule = args[pageIndex + 2] || null;
}

// Paths
const demoEmberPath = path.join(__dirname, '../demo/ulx-ember');
const routesPath = path.join(demoEmberPath, 'app/routes/components', category);
const templatesPath = path.join(demoEmberPath, 'app/templates/components', category);
const controllersPath = path.join(demoEmberPath, 'app/controllers/components', category);
const documentationPath = path.join(demoEmberPath, 'app/documentation/components', category);
const demoComponentsPath = path.join(demoEmberPath, 'app/components/Demo');
const routerPath = path.join(demoEmberPath, 'app/router.js');
const docsIndexPath = path.join(demoEmberPath, 'app/constants/docs/index.js');

// Helper to convert to kebab-case
function toKebabCase(str) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Helper to convert to camelCase
function toCamelCase(str) {
	return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

// Helper to convert to PascalCase
function toPascalCase(str) {
	const camel = toCamelCase(str);
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}

const kebabName = toKebabCase(componentName);
const pascalName = toPascalCase(componentName);
const categoryPascal = toPascalCase(category);

// Create directories if they don't exist
[routesPath, templatesPath, controllersPath, documentationPath, demoComponentsPath].forEach(
	(dir) => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
	}
);

const componentDocPath = path.join(documentationPath, kebabName);
const componentDemoPath = path.join(demoComponentsPath, pascalName);
const snippetsPath = path.join(componentDocPath, 'snippets');

if (!fs.existsSync(componentDocPath)) {
	fs.mkdirSync(componentDocPath, { recursive: true });
}

if (!fs.existsSync(componentDemoPath)) {
	fs.mkdirSync(componentDemoPath, { recursive: true });
}

if (!fs.existsSync(snippetsPath)) {
	fs.mkdirSync(snippetsPath, { recursive: true });
}

// 1. Create route file
const routeContent = `import Route from '@ember/routing/route';
import { ${pascalName}FeatureItems } from '../../../documentation/components/${category}/${kebabName}/features';
import meta from '../../../documentation/components/${category}/${kebabName}/meta';

export default class Components${categoryPascal}${pascalName}Route extends Route {
  model() {
    return {
      features: ${pascalName}FeatureItems,
      meta: meta
    };
  }
}
`;

const routeFilePath = path.join(routesPath, `${kebabName}.js`);
if (fs.existsSync(routeFilePath)) {
	console.log(`⚠ Route file already exists: ${routeFilePath}`);
} else {
	fs.writeFileSync(routeFilePath, routeContent);
	console.log(`✓ Created route: ${routeFilePath}`);
}

// 2. Create controller file
const controllerContent = `import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Components${categoryPascal}${pascalName}Controller extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: 'FEATURES' },
    { id: 'theming', label: 'THEMING' },
    { id: 'passthrough', label: 'PASS THROUGH' }
  ];

  get isFeaturesTab() {
    return this.activeTab === 'features';
  }

  get isThemingTab() {
    return this.activeTab === 'theming';
  }

  get isPassthroughTab() {
    return this.activeTab === 'passthrough';
  }

  @action
  onTabChange(tabId) {
    this.activeTab = tabId;
  }
}
`;

const controllerFilePath = path.join(controllersPath, `${kebabName}.js`);
if (fs.existsSync(controllerFilePath)) {
	console.log(`⚠ Controller file already exists: ${controllerFilePath}`);
} else {
	fs.writeFileSync(controllerFilePath, controllerContent);
	console.log(`✓ Created controller: ${controllerFilePath}`);
}

// 3. Create template file
const templateContent = `{{page-title "${displayName} - ULS Ember Documentation"}}

<Common::DocMain::ComponentLayout
  @title={{@model.meta.header}}
  @description={{@model.meta.subHeader}}
  @tabs={{this.tabs}}
  @activeTab={{this.activeTab}}
  @onTabChange={{this.onTabChange}}
>
  {{#if this.isFeaturesTab}}
    <Common::DocMain::DocPanel @features={{@model.features}} />
  {{else if this.isThemingTab}}
    <div class="doc-section">
      <Common::DocMain::FoundationSection
        @id="components-${category}-${kebabName}-theming"
        @title="Theming"
        @subtitle="Theming documentation for ${displayName} component."
      >
        <p class="fg-text-secondary">Theming content goes here.</p>
      </Common::DocMain::FoundationSection>
    </div>
  {{else if this.isPassthroughTab}}
    <div class="doc-section">
      <Common::DocMain::FoundationSection
        @id="components-${category}-${kebabName}-passthrough"
        @title="Pass Through"
        @subtitle="Pass Through props documentation for ${displayName} component."
      >
        <p class="fg-text-secondary">Pass Through content goes here.</p>
      </Common::DocMain::FoundationSection>
    </div>
  {{/if}}
</Common::DocMain::ComponentLayout>
`;

const templateFilePath = path.join(templatesPath, `${kebabName}.hbs`);
if (fs.existsSync(templateFilePath)) {
	console.log(`⚠ Template file already exists: ${templateFilePath}`);
} else {
	fs.writeFileSync(templateFilePath, templateContent);
	console.log(`✓ Created template: ${templateFilePath}`);
}

// 4. Create documentation files
// 4a. Create meta.js
const metaContent = `// ==========================================================================
// ${pascalName.toUpperCase()} COMPONENT METADATA
// ==========================================================================
// Single source of truth for ${pascalName} component documentation

export default {
  // Navigation metadata
  category: '${categoryPascal}',
  ${submodule ? `subCategory: '${toPascalCase(submodule)}',` : ''}
  menuItem: '${displayName}',
  routeBase: '/components/${category}/${kebabName}',
  icon: 'pi pi-compass',

  // Page metadata
  header: '${displayName}',
  subHeader: '${displayName} is a component for user interaction.',

  // Tab configuration
  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features'
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }
  ],

  // Import message for the component
  importMsg: "import { ${pascalName} } from 'uls-components'",

  // Accessibility information
  accessibility: {
    description: "${pascalName} component description for accessibility.",
    example: "<${pascalName} />"
  }
};
`;

const metaFilePath = path.join(componentDocPath, 'meta.js');
if (fs.existsSync(metaFilePath)) {
	console.log(`⚠ Meta file already exists: ${metaFilePath}`);
} else {
	fs.writeFileSync(metaFilePath, metaContent);
	console.log(`✓ Created meta: ${metaFilePath}`);
}

// 4b. Create imports.js
const importsContent = `// ==========================================================================
// ${pascalName} Demo Components Barrel Export
// ==========================================================================
// Centralized exports for all ${pascalName} demo components

// Demo Components
export { default as BasicDemo } from '../../../../components/Demo/${pascalName}/Basic';

// Import source (for import section)
export { default as ImportSource } from './snippets/Import.gjs';

// ${pascalName} Demo Sources Barrel Export
// ==========================================================================
// Centralized exports for all ${pascalName} demo source files
export { default as BasicSource } from './snippets/Basic.gjs';
`;

const importsFilePath = path.join(componentDocPath, 'imports.js');
if (fs.existsSync(importsFilePath)) {
	console.log(`⚠ Imports file already exists: ${importsFilePath}`);
} else {
	fs.writeFileSync(importsFilePath, importsContent);
	console.log(`✓ Created imports: ${importsFilePath}`);
}

// 4d. Create snippet files
// Create Import.gjs.js snippet
const importSnippetContent = `export default \`
import { ${pascalName} } from 'uls-components';

\`;
`;

const importSnippetPath = path.join(snippetsPath, 'Import.gjs.js');
if (fs.existsSync(importSnippetPath)) {
	console.log(`⚠ Import snippet file already exists: ${importSnippetPath}`);
} else {
	fs.writeFileSync(importSnippetPath, importSnippetContent);
	console.log(`✓ Created Import snippet: ${importSnippetPath}`);
}

// 4c. Create features.js
const featuresContent = `// ==========================================================================
// ${pascalName} Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  // Sources
  ImportSource,
  BasicSource
} from './imports';

export const ${pascalName}FeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>${pascalName}</code> component."
      }
    },
    demo: {
      component: null, // Import section doesn't need demo
      props: {
        source: ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  },
  {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the ${pascalName} component."
      }
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }
];

export default function ${pascalName}Features() {
  return ${pascalName}FeatureItems;
}
`;

const featuresFilePath = path.join(componentDocPath, 'features.js');
if (fs.existsSync(featuresFilePath)) {
	console.log(`⚠ Features file already exists: ${featuresFilePath}`);
} else {
	fs.writeFileSync(featuresFilePath, featuresContent);
	console.log(`✓ Created features: ${featuresFilePath}`);
}

// 5. Create Basic demo component
const basicDemoContent = `import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Basic${pascalName}Demo extends Component {
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
}
`;

const basicDemoFilePath = path.join(componentDemoPath, 'Basic.gjs');
if (fs.existsSync(basicDemoFilePath)) {
	console.log(`⚠ Basic demo file already exists: ${basicDemoFilePath}`);
} else {
	fs.writeFileSync(basicDemoFilePath, basicDemoContent);
	console.log(`✓ Created Basic demo: ${basicDemoFilePath}`);
}

// Create Basic.gjs.js snippet file
const basicSnippetContent = `export default \`
${basicDemoContent}\`;
`;

const basicSnippetPath = path.join(snippetsPath, 'Basic.gjs.js');
if (fs.existsSync(basicSnippetPath)) {
	console.log(`⚠ Basic snippet file already exists: ${basicSnippetPath}`);
} else {
	fs.writeFileSync(basicSnippetPath, basicSnippetContent);
	console.log(`✓ Created Basic snippet: ${basicSnippetPath}`);
}

// 6. Update router.js
let routerContent = fs.readFileSync(routerPath, 'utf8');
const routeLine = `      this.route('${kebabName}', { path: '/${kebabName}' });\n`;

// Check if route already exists
if (routerContent.includes(`this.route('${kebabName}'`)) {
	console.log(`⚠ Route '${kebabName}' already exists in router.js`);
} else {
	// Check if components route exists
	const componentsRoutePattern =
		/(this\.route\('components', \{ path: '\/components' \}, function \(\) \{[\s\S]*?)(\}\);)/;
	if (componentsRoutePattern.test(routerContent)) {
		// Check if category route exists within components
		// Find the category route opening
		const categoryRouteStart = new RegExp(
			`this\\.route\\('${category}', \\{ path: '/${category}' \\}, function \\(\\) \\{`
		);
		const categoryMatch = routerContent.match(categoryRouteStart);

		if (categoryMatch) {
			// Category route exists, find its closing brace by counting braces
			const startIndex = categoryMatch.index + categoryMatch[0].length;
			let braceCount = 1;
			let endIndex = startIndex;

			for (let i = startIndex; i < routerContent.length; i++) {
				if (routerContent[i] === '{') {
					braceCount++;
				} else if (routerContent[i] === '}') {
					braceCount--;
					if (braceCount === 0) {
						endIndex = i;
						break;
					}
				}
			}

			// Insert the new route before the closing brace, after any existing routes
			const beforeClosing = routerContent.substring(0, endIndex);
			const afterClosing = routerContent.substring(endIndex);

			// Add the new route with proper indentation (routeLine already has correct indentation)
			routerContent = beforeClosing + routeLine + afterClosing;
			fs.writeFileSync(routerPath, routerContent);
			console.log(`✓ Updated router.js`);
		} else {
			// Category route doesn't exist, add it with component route
			const categoryRouteBlock = `    this.route('${category}', { path: '/${category}' }, function () {\n${routeLine}    });\n`;
			routerContent = routerContent.replace(componentsRoutePattern, `$1${categoryRouteBlock}  $2`);
			fs.writeFileSync(routerPath, routerContent);
			console.log(`✓ Updated router.js (added ${category} route)`);
		}
	} else {
		console.log(`⚠ Could not find components route in router.js. Please add manually.`);
	}
}

// 7. Update docs/index.js
let docsContent = fs.readFileSync(docsIndexPath, 'utf8');

// Find the category in the navigation - match the specific menuTitle and its entire children array
// Third group allows optional comma after ] so we match "],\n  }" (e.g. children: [],)
const categoryPattern = new RegExp(
	`(\\{\\s*menuTitle: '${categoryPascal}',\\s*icon: [^,]+,\\s*children: \\[)([\\s\\S]*?)(\\]\\s*,?\\s*\\})`,
	'm'
);
const menuItem = submodule
	? `      {
        category: '${toPascalCase(submodule)}',
        items: [
          {
            menuItem: '${displayName}',
            to: '/components/${category}/${kebabName}',
            route: 'components.${category}.${kebabName}'
          }
        ]
      }`
	: `      {
        menuItem: '${displayName}',
        to: '/components/${category}/${kebabName}',
        route: 'components.${category}.${kebabName}'
      }`;

if (categoryPattern.test(docsContent)) {
	// Category exists, add item
	if (submodule) {
		// Check if submodule category exists within this specific category
		const categoryMatch = docsContent.match(categoryPattern);
		if (categoryMatch) {
			const categoryChildren = categoryMatch[2]; // The children array content
			const submodulePattern = new RegExp(
				`(category: '${toPascalCase(submodule)}',[\\s\\S]*?items: \\[[\\s\\S]*?)(\\]\\s*\\})`,
				'm'
			);

			if (submodulePattern.test(categoryChildren)) {
				// Add to existing submodule
				docsContent = docsContent.replace(categoryPattern, (fullMatch, p1, children, p3) => {
					const updatedChildren = children.replace(submodulePattern, (match, p1, p2) => {
						if (match.includes(`menuItem: '${displayName}'`)) {
							return match; // Already exists
						}

						// Find the last closing brace in p1 (the last item in the array)
						const lastBraceIndex = p1.lastIndexOf('}');
						if (lastBraceIndex !== -1) {
							const beforeLastBrace = p1.substring(0, lastBraceIndex);
							const afterLastBrace = p1.substring(lastBraceIndex + 1);

							// Check if there's a comma after the last brace
							const afterBraceTrimmed = afterLastBrace.trim();
							const hasComma =
								afterBraceTrimmed.startsWith(',') || afterLastBrace.match(/^\s*[,]/) !== null;
							const nextCharIsBracket = afterBraceTrimmed.startsWith(']');

							const newItem = `          {
            menuItem: '${displayName}',
            to: '/components/${category}/${kebabName}',
            route: 'components.${category}.${kebabName}'
          }`;

							if (hasComma) {
								return `${beforeLastBrace}}${afterLastBrace}\n${newItem},\n        ${p2}`;
							} else if (nextCharIsBracket) {
								return `${beforeLastBrace}},\n${newItem}\n        ${p2}`;
							} else {
								return `${beforeLastBrace}},\n${newItem},\n        ${p2}`;
							}
						}

						// Fallback if no brace found
						const newItem = `          {
            menuItem: '${displayName}',
            to: '/components/${category}/${kebabName}',
            route: 'components.${category}.${kebabName}'
          }`;
						return `${p1.trimEnd()},\n${newItem},\n        ${p2}`;
					});
					return `${p1}${updatedChildren}${p3}`;
				});
			} else {
				// Add new submodule to this category
				docsContent = docsContent.replace(categoryPattern, (fullMatch, p1, children, p3) => {
					const insert = children.trim() ? `\n${menuItem},` : `\n${menuItem}`;
					return `${p1}${children}${insert}\n      ${p3}`;
				});
			}
		}
	} else {
		// Add directly to category (no submodule)
		if (docsContent.includes(`menuItem: '${displayName}'`)) {
			console.log(`⚠ Navigation item for '${displayName}' already exists in docs/index.js`);
		} else {
			docsContent = docsContent.replace(categoryPattern, (fullMatch, p1, children, p3) => {
				const insert = children.trim() ? `\n${menuItem},` : `\n${menuItem}`;
				return `${p1}${children}${insert}\n      ${p3}`;
			});
		}
	}
	fs.writeFileSync(docsIndexPath, docsContent);
	console.log(`✓ Updated docs/index.js`);
} else {
	// Category doesn't exist, add it
	const lastNavItemPattern = /(export const DocNavItems = \[[\s\S]*?)(\];)/;
	const newCategory = `  {
    menuTitle: '${categoryPascal}',
    icon: 'pi pi-list',
    children: [
${menuItem}
    ]
  },\n`;

	if (lastNavItemPattern.test(docsContent)) {
		docsContent = docsContent.replace(lastNavItemPattern, `$1${newCategory}  $2`);
		fs.writeFileSync(docsIndexPath, docsContent);
		console.log(`✓ Updated docs/index.js (added ${categoryPascal} category)`);
	} else {
		console.log(`⚠ Could not update docs/index.js. Please add manually.`);
	}
}

console.log(`\n✅ Demo page for ${displayName} created successfully!`);
console.log(`\nNext steps:`);
console.log(`1. Update the Basic demo component in app/components/Demo/${pascalName}/Basic.gjs`);
console.log(
	`2. Add more demo components and features in app/documentation/components/${category}/${kebabName}/`
);
console.log(`3. Update the meta.js file with correct import path and component details`);
