const fs = require('fs');
const vm = require('vm');

function escapeString(str) {
	return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function toJs(value, indentLevel = 0) {
	const indent = '  '.repeat(indentLevel);
	const nextIndent = '  '.repeat(indentLevel + 1);

	if (value === null) return 'null';
	if (value === undefined) return 'undefined';
	if (typeof value === 'string') return `'${escapeString(value)}'`;
	if (typeof value === 'number' || typeof value === 'boolean') return String(value);

	if (Array.isArray(value)) {
		if (value.length === 0) return '[]';
		return `[\n${value.map((v) => `${nextIndent}${toJs(v, indentLevel + 1)}`).join(',\n')}\n${indent}]`;
	}

	if (typeof value === 'object') {
		const entries = Object.entries(value);
		if (entries.length === 0) return '{}';
		return `{\n${entries
			.map(([k, v]) => `${nextIndent}${k}: ${toJs(v, indentLevel + 1)}`)
			.join(',\n')}\n${indent}}`;
	}

	// Fallback (shouldn't happen for DocNavItems)
	return 'null';
}

function readDocNavItems(docsIndexPath) {
	const content = fs.readFileSync(docsIndexPath, 'utf8');
	const marker = 'export const DocNavItems';
	const markerIndex = content.indexOf(marker);
	if (markerIndex === -1) {
		throw new Error(`Could not find '${marker}' in ${docsIndexPath}`);
	}

	const header = content.slice(0, markerIndex);
	const match = content.match(/export const DocNavItems\s*=\s*(\[[\s\S]*\]);\s*$/m);
	if (!match) {
		throw new Error(`Could not parse DocNavItems array in ${docsIndexPath}`);
	}

	const arrayLiteral = match[1];
	const sandbox = { module: { exports: null } };
	vm.runInNewContext(`module.exports = ${arrayLiteral};`, sandbox, { filename: docsIndexPath });
	if (!Array.isArray(sandbox.module.exports)) {
		throw new Error(`DocNavItems did not evaluate to an array in ${docsIndexPath}`);
	}

	return { header, items: sandbox.module.exports };
}

function writeDocNavItems(docsIndexPath, header, items) {
	const body = `export const DocNavItems = ${toJs(items, 0)};\n`;
	fs.writeFileSync(docsIndexPath, `${header}${body}`);
}

function upsertDocNavComponent({
	items,
	menuTitle,
	icon = 'pi pi-list',
	subCategory,
	displayName,
	to,
	route
}) {
	let section = items.find((it) => it && it.menuTitle === menuTitle);
	if (!section) {
		section = { menuTitle, icon, children: [] };
		items.push(section);
	}

	if (!Array.isArray(section.children)) {
		section.children = [];
	}

	const groupName = subCategory || 'General';
	let group = section.children.find((c) => c && c.category === groupName);
	if (!group) {
		group = { category: groupName, items: [] };
		section.children.push(group);
	}
	if (!Array.isArray(group.items)) {
		group.items = [];
	}

	const exists = group.items.some((it) => it && (it.route === route || it.to === to));
	if (!exists) {
		group.items.push({ menuItem: displayName, to, route });
	}
}

function findNavEntryForComponent(items, componentKebab) {
	// Look under any section that has `children: [{ category, items: [...] }]`
	for (const section of items) {
		if (!section || !Array.isArray(section.children)) continue;
		for (const child of section.children) {
			if (!child || !Array.isArray(child.items)) continue;
			for (const it of child.items) {
				if (!it) continue;
				if (typeof it.route === 'string' && it.route.endsWith(`.${componentKebab}`)) return it;
				if (typeof it.to === 'string' && it.to.endsWith(`/${componentKebab}`)) return it;
			}
		}
	}
	return null;
}

module.exports = {
	readDocNavItems,
	writeDocNavItems,
	upsertDocNavComponent,
	findNavEntryForComponent
};
