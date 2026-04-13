#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const WATCH_MODE = process.argv.includes('--watch');
const WORKSPACE_ROOT = path.join(__dirname, '../../..');
const COMPONENTS_ROOT = path.join(WORKSPACE_ROOT, 'src/components');
const OUTPUT_FILE = path.join(
	__dirname,
	'../demo/ulx-ember/app/documentation/generated/component-api.js'
);

const EXTRA_ALIASES = {
	'ulx-data-view': ['data-view'],
	'ulx-message': ['messages'],
	'ulx-multi-select': ['multiselect'],
	'ulx-panelmenu': ['panel-menu'],
	'ulx-progress-bar': ['progressbar'],
	'ulx-progressspinner': ['progress-spinner'],
	'ulx-slide-pane': ['slidepane'],
	'ulx-tabmenu': ['tab-menu']
};

function toKebabCase(value) {
	return value
		.replace(/^Ulx/, '')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.toLowerCase();
}

function getComponentFiles(targetDirectory) {
	const files = [];
	const entries = fs.readdirSync(targetDirectory, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(targetDirectory, entry.name);

		if (entry.isDirectory()) {
			files.push(...getComponentFiles(fullPath));
			continue;
		}

		if (entry.name === 'index.gjs') {
			files.push(fullPath);
		}
	}

	return files.sort();
}

function getDocBlock(source) {
	const match = source.match(/\/\*\*([\s\S]*?)\*\/\s*export default class/m);
	return match?.[1] ?? '';
}

function parseBracketParam(rawValue) {
	const [name, ...defaultParts] = rawValue.split('=');
	const defaultValue = defaultParts.join('=').trim();

	return {
		name: name.trim(),
		defaultValue: defaultValue || null,
		required: false
	};
}

function readBalancedValue(input, openingCharacter, closingCharacter) {
	let depth = 0;
	let value = '';

	for (let index = 0; index < input.length; index += 1) {
		const character = input[index];
		value += character;

		if (character === openingCharacter) {
			depth += 1;
		} else if (character === closingCharacter) {
			depth -= 1;

			if (depth === 0) {
				return {
					value,
					rest: input.slice(index + 1)
				};
			}
		}
	}

	return {
		value,
		rest: ''
	};
}

function inferScope(name) {
	if (!name.includes('.')) {
		return 'component';
	}

	const [prefix] = name.split('.');
	const scopeMap = {
		col: 'column',
		field: 'field',
		group: 'group',
		item: 'item',
		row: 'row'
	};

	return scopeMap[prefix] ?? prefix;
}

function normalizeWhitespace(value) {
	return value.replace(/\s+/g, ' ').trim();
}

function parseDocComment(docBlock) {
	const lines = docBlock.split('\n');
	const params = [];
	let className = null;
	let currentParam = null;
	let currentSection = null;

	for (const line of lines) {
		const withoutStar = line.replace(/^\s*\*\s?/, '');
		const trimmedLine = withoutStar.trim();

		if (!trimmedLine) {
			currentParam = null;
			continue;
		}

		if (/^[\u2500\u2501\-─]{2,}\s*(.+?)\s*[\u2500\u2501\-─]{2,}$/u.test(trimmedLine)) {
			currentSection = trimmedLine
				.replace(/^[\u2500\u2501\-─\s]+/u, '')
				.replace(/[\u2500\u2501\-─\s]+$/u, '')
				.trim();
			currentParam = null;
			continue;
		}

		if (trimmedLine.startsWith('@class ')) {
			className = trimmedLine.replace('@class ', '').trim();
			currentParam = null;
			continue;
		}

		if (trimmedLine.startsWith('@param ')) {
			const paramBody = trimmedLine.replace(/^@param\s+/, '');
			if (!paramBody.startsWith('{')) {
				currentParam = null;
				continue;
			}

			const parsedType = readBalancedValue(paramBody, '{', '}');
			const type = parsedType.value.slice(1, -1).trim();
			const remainder = parsedType.rest.trimStart();

			if (!remainder) {
				currentParam = null;
				continue;
			}

			let parsedParam;
			let description = '';

			if (remainder.startsWith('[')) {
				const parsedOptionalName = readBalancedValue(remainder, '[', ']');
				parsedParam = parseBracketParam(parsedOptionalName.value.slice(1, -1));
				description = parsedOptionalName.rest.trimStart();
			} else {
				const [requiredName, ...descriptionParts] = remainder.split(/\s+/);
				parsedParam = {
					name: requiredName.trim(),
					defaultValue: null,
					required: true
				};
				description = descriptionParts.join(' ');
			}

			description = description.replace(/^-+\s*/, '').trim();

			currentParam = {
				name: parsedParam.name,
				type,
				required: parsedParam.required,
				defaultValue: parsedParam.defaultValue,
				hasDefaultValue: parsedParam.defaultValue !== null,
				description: description.trim(),
				section: currentSection,
				scope: inferScope(parsedParam.name)
			};

			params.push(currentParam);
			continue;
		}

		if (currentParam && /^\s{2,}\S/.test(withoutStar)) {
			currentParam.description = normalizeWhitespace(`${currentParam.description} ${trimmedLine}`);
			continue;
		}

		currentParam = null;
	}

	return {
		className,
		params: params.map((param) => ({
			...param,
			description: param.description || ''
		}))
	};
}

function getAliases(componentDirectoryName, className) {
	const aliases = new Set();
	const strippedName = componentDirectoryName.replace(/^ulx-/, '');
	const classAlias = className ? toKebabCase(className) : strippedName;

	aliases.add(componentDirectoryName);
	aliases.add(strippedName);
	aliases.add(classAlias);

	for (const value of [componentDirectoryName, strippedName, classAlias]) {
		aliases.add(value.replace(/-/g, ''));
	}

	for (const alias of EXTRA_ALIASES[componentDirectoryName] ?? []) {
		aliases.add(alias);
	}

	if (componentDirectoryName === 'ulx-image') {
		aliases.add('ulx-image');
	}

	return [...aliases].filter(Boolean).sort();
}

function buildRegistry() {
	const registry = {};
	const componentFiles = getComponentFiles(COMPONENTS_ROOT);

	for (const filePath of componentFiles) {
		const source = fs.readFileSync(filePath, 'utf8');
		const docBlock = getDocBlock(source);
		if (!docBlock) {
			continue;
		}

		const { className, params } = parseDocComment(docBlock);
		if (!params.length) {
			continue;
		}

		const componentDirectoryName = path.basename(path.dirname(filePath));
		const sourcePath = path.relative(WORKSPACE_ROOT, filePath).replace(/\\/g, '/');
		const payload = {
			componentName: className ?? componentDirectoryName,
			componentDirectory: componentDirectoryName,
			sourcePath,
			params
		};

		for (const alias of getAliases(componentDirectoryName, className)) {
			registry[alias] = payload;
		}
	}

	return Object.fromEntries(
		Object.entries(registry).sort(([left], [right]) => left.localeCompare(right))
	);
}

function writeRegistry() {
	const registry = buildRegistry();
	const serialized = JSON.stringify(registry, null, 2);
	const fileContents = `// AUTO-GENERATED FILE. DO NOT EDIT.
// Run \`npm run generate:component-api\` from \`ulx/\` to refresh.

const componentApiRegistry = ${serialized};

export default componentApiRegistry;
`;

	fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
	fs.writeFileSync(OUTPUT_FILE, fileContents, 'utf8');
	console.log(`✓ generated ${path.relative(WORKSPACE_ROOT, OUTPUT_FILE)}`);
}

async function main() {
	writeRegistry();

	if (!WATCH_MODE) {
		return;
	}

	const chokidar = (await import('chokidar')).default;
	console.log('Watching component API docblocks...');

	chokidar
		.watch(COMPONENTS_ROOT, {
			ignoreInitial: true,
			awaitWriteFinish: true
		})
		.on('add', (filePath) => filePath.endsWith('index.gjs') && writeRegistry())
		.on('change', (filePath) => filePath.endsWith('index.gjs') && writeRegistry())
		.on('unlink', (filePath) => filePath.endsWith('index.gjs') && writeRegistry());
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
