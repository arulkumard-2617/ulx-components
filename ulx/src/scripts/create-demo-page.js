#!/usr/bin/env node

/**
 * Script to create demo pages for components
 * Usage: npm run create demo-page "PageName[ComponentName]" --category collections --submodule menu
 * Example: npm run create demo-page "TestPage[TestComponent]" --category collections --submodule menu
 * Note: Quote PageName[ComponentName] so the shell does not expand brackets.
 */

const fs = require('fs');
const path = require('path');
const { readDocNavItems, writeDocNavItems, upsertDocNavComponent } = require('./utils/docs-nav');

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
import builderSchema from '../../../documentation/components/${category}/${kebabName}/builder-schema';

export default class Components${categoryPascal}${pascalName}Route extends Route {
  model() {
    return {
      features: ${pascalName}FeatureItems,
      meta: meta,
      builderSchema: builderSchema
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
    { id: 'builder', label: 'BUILDER' },
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

  get isBuilderTab() {
    return this.activeTab === 'builder';
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
  {{else if this.isBuilderTab}}
    <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
      <:preview>
        <div class="pd6 fg-text-secondary font-size12">
          Preview not configured yet. Update
          <code>app/documentation/components/${category}/${kebabName}/builder-schema.js</code>
          and this template to render the component with the generated props.
        </div>
      </:preview>
    </Common::DocMain::ComponentBuilder>
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
      name: 'Builder',
      route: '/builder',
      id: 'builder'
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

// 4b. Create builder-schema.js (default builder setup)
const builderSchemaContent = `// ==========================================================================
// ${pascalName.toUpperCase()} BUILDER SCHEMA
// ==========================================================================
// Default builder schema for ${displayName}.
// Customize props, stateToProps, and stateToSnippet based on the component API.

export default {
  componentName: '${pascalName}',
  importLine: "import { ${pascalName} } from 'uls-components';",
  props: [],
  stateToProps: () => ({}),
  stateToSnippet: () => '<${pascalName} />',
};
`;

const builderSchemaPath = path.join(componentDocPath, 'builder-schema.js');
if (fs.existsSync(builderSchemaPath)) {
	console.log(`⚠ Builder schema already exists: ${builderSchemaPath}`);
} else {
	fs.writeFileSync(builderSchemaPath, builderSchemaContent);
	console.log(`✓ Created builder schema: ${builderSchemaPath}`);
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

function findMatchingBraceIndex(str, openBraceIndex) {
	let braceCount = 0;
	for (let i = openBraceIndex; i < str.length; i++) {
		if (str[i] === '{') braceCount++;
		else if (str[i] === '}') {
			braceCount--;
			if (braceCount === 0) return i;
		}
	}
	return -1;
}

function usesExplicitPathOptions(routerSource) {
	return /this\.route\(\s*'components'\s*,\s*\{\s*path\s*:/.test(routerSource);
}

function ensureChildRouteInCategory(componentsBody, categoryName, childName, explicitPaths) {
	const routeLine = explicitPaths
		? `      this.route('${childName}', { path: '/${childName}' });`
		: `      this.route('${childName}');`;

	// Case 1: category route exists but is empty: function () {}
	// Supports both:
	// - this.route('x', { path: '/x' }, function () {});
	// - this.route('x', function () {});
	const emptyCategoryRegex = new RegExp(
		`(\\s{4}this\\.route\\('${categoryName}'(?:\\s*,\\s*\\{\\s*path\\s*:\\s*'\\/${categoryName}'\\s*\\})?\\s*,\\s*function\\s*\\(\\)\\s*\\{)\\s*\\}\\s*\\);`
	);
	if (emptyCategoryRegex.test(componentsBody)) {
		// Convert single-line empty function to multiline and insert route.
		return componentsBody.replace(emptyCategoryRegex, `$1\n${routeLine}\n    });`);
	}

	// Case 2: category route exists with a function body; insert before its closing brace.
	const categoryStartIndex = componentsBody.indexOf(`this.route('${categoryName}'`);
	if (categoryStartIndex !== -1) {
		const fnIndex = componentsBody.indexOf('function', categoryStartIndex);
		if (fnIndex === -1) return componentsBody;
		const openBraceIndex = componentsBody.indexOf('{', fnIndex);
		if (openBraceIndex === -1) return componentsBody;
		const closeBraceIndex = findMatchingBraceIndex(componentsBody, openBraceIndex);
		if (closeBraceIndex !== -1) {
			const before = componentsBody.slice(0, closeBraceIndex).trimEnd();
			const after = componentsBody.slice(closeBraceIndex);
			// Ensure we don't double-add if route exists in this category
			const categoryBlock = componentsBody.slice(categoryStartIndex, closeBraceIndex + 1);
			if (categoryBlock.includes(`this.route('${childName}'`)) return componentsBody;
			return `${before}\n${routeLine}\n${after}`;
		}
	}

	// Case 3: category route does not exist under components; add a new category block.
	// Insert before the closing brace of the components function body.
	const categoryRouteLine = explicitPaths
		? `    this.route('${categoryName}', { path: '/${categoryName}' }, function () {`
		: `    this.route('${categoryName}', function () {`;
	const insert = `\n${categoryRouteLine}\n${routeLine}\n    });\n`;
	return `${componentsBody.trimEnd()}${insert}`;
}

// Ensure `components.${category}.${kebabName}` is declared under Router.map
const explicitPaths = usesExplicitPathOptions(routerContent);
const componentsIndex = routerContent.indexOf(`this.route('components'`);
if (componentsIndex === -1) {
	console.log(`⚠ Could not find components route in router.js. Please add manually.`);
} else {
	const fnIndex = routerContent.indexOf('function', componentsIndex);
	if (fnIndex === -1) {
		console.log(
			`⚠ Could not find components route function block in router.js. Please add manually.`
		);
	} else {
		const componentsOpenBraceIndex = routerContent.indexOf('{', fnIndex);
		if (componentsOpenBraceIndex === -1) {
			console.log(`⚠ Could not parse components route braces in router.js. Please add manually.`);
		} else {
			const componentsCloseBraceIndex = findMatchingBraceIndex(
				routerContent,
				componentsOpenBraceIndex
			);
			if (componentsCloseBraceIndex === -1) {
				console.log(
					`⚠ Could not safely parse components route block in router.js. Please add manually.`
				);
			} else {
				const bodyStart = componentsOpenBraceIndex + 1;
				const bodyEnd = componentsCloseBraceIndex;
				const componentsBody = routerContent.slice(bodyStart, bodyEnd);
				const updatedBody = ensureChildRouteInCategory(
					componentsBody,
					category,
					kebabName,
					explicitPaths
				);
				if (updatedBody !== componentsBody) {
					routerContent =
						routerContent.slice(0, bodyStart) + updatedBody + routerContent.slice(bodyEnd);
					fs.writeFileSync(routerPath, routerContent);
					console.log(`✓ Updated router.js`);
				} else {
					console.log(`⚠ Route '${kebabName}' already exists under '${category}' in router.js`);
				}
			}
		}
	}
}

// 7. Update docs/index.js
try {
	const { header, items } = readDocNavItems(docsIndexPath);
	upsertDocNavComponent({
		items,
		menuTitle: categoryPascal,
		subCategory: submodule ? toPascalCase(submodule) : 'General',
		displayName,
		to: `/components/${category}/${kebabName}`,
		route: `components.${category}.${kebabName}`
	});
	writeDocNavItems(docsIndexPath, header, items);
	console.log(`✓ Updated docs/index.js`);
} catch (e) {
	console.log(`⚠ Could not update docs/index.js automatically: ${e.message}`);
	console.log(`   Please add the navigation item manually if needed.`);
}

console.log(`\n✅ Demo page for ${displayName} created successfully!`);
console.log(`\nNext steps:`);
console.log(`1. Update the Basic demo component in app/components/Demo/${pascalName}/Basic.gjs`);
console.log(
	`2. Add more demo components and features in app/documentation/components/${category}/${kebabName}/`
);
console.log(`3. Update the meta.js file with correct import path and component details`);
