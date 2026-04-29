/**
 * Writes src/locales/en-us.js containing only keys referenced from src/ (addon allowlist).
 * Run from repo root: node scripts/build-addon-en-us.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function loadEnUs() {
	const text = fs.readFileSync(path.join(ROOT, 'src/locales/en-us.js'), 'utf8');
	const body = text.replace(/^[\s\S]*?const enUs = /, '').replace(/;\s*\n?\s*export default enUs;\s*$/m, '');
	return (0, eval)('(' + body + ')');
}

function buildAllowlist() {
	const keys = new Set();
	function add(s, fp) {
		if (fp.includes(`${path.sep}locales${path.sep}`)) return;
		if (fp.endsWith(`${path.sep}i18n.js`)) return;
		const pats = [
			/\bt\s*\(\s*["']([a-zA-Z0-9_.]+)["']/g,
			/\{\{\s*t\s+["']([a-zA-Z0-9_.]+)["']/g,
			/\(\s*t\s+["']([a-zA-Z0-9_.]+)["']/g,
		];
		for (const re of pats) {
			let m;
			while ((m = re.exec(s))) keys.add(m[1]);
		}
	}
	function walk(d) {
		fs.readdirSync(d, { withFileTypes: true }).forEach((ent) => {
			const p = path.join(d, ent.name);
			if (ent.isDirectory()) walk(p);
			else if (/\.(gjs|js|hbs)$/.test(ent.name)) add(fs.readFileSync(p, 'utf8'), p);
		});
	}
	walk(path.join(ROOT, 'src'));
	[
		'lbl.editor.line.height',
		'lbl.editor.letter.spacing',
		'lbl.editor.toolbar.picker.header',
		'lbl.editor.toolbar.picker.size',
		'lbl.editor.toolbar.picker.font',
		'lbl.editor.toolbar.picker.font.family',
		'lbl.editor.toolbar.picker.align',
		'lbl.editor.toolbar.picker.color',
		'lbl.editor.toolbar.picker.background',
		'lbl.editor.toolbar.picker.text.transform',
		'lbl.editor.toolbar.picker.line.height',
		'lbl.editor.toolbar.picker.letter.spacing',
		'lbl.editor.toolbar.hr',
		'lbl.sorter',
		'aria.datepicker.previousMonth',
		'aria.datepicker.nextMonth',
		'aria.paginator.firstPage',
		'aria.paginator.prevPage',
		'aria.paginator.nextPage',
		'aria.paginator.lastPage',
	].forEach((k) => keys.add(k));
	keys.delete('unknown');
	keys.delete('key');
	return keys;
}

function escapeKey(k) {
	return `'${k.replace(/'/g, "\\'")}'`;
}

function escapeValue(v) {
	if (typeof v !== 'string') return JSON.stringify(v);
	return "'" + v.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

function main() {
	const full = loadEnUs();
	const allow = buildAllowlist();

	const addon = {};
	let missing = [];
	for (const k of allow) {
		if (full[k] !== undefined) addon[k] = full[k];
		else missing.push(k);
	}
	const defaults = {
		'lbl.sorter': 'Sorter',
	};
	for (const k of missing) {
		if (defaults[k] !== undefined) {
			addon[k] = defaults[k];
		} else {
			console.error('Allowlist key not in en-us and no default:', k);
			process.exit(1);
		}
	}

	const orderedKeys = Object.keys(addon).sort((a, b) => {
		const sec = (k) => {
			if (k.startsWith('aria.')) return 4;
			if (k.startsWith('msg.')) return 3;
			if (k.startsWith('lbl.') || k.startsWith('label.')) return 1;
			return 2;
		};
		const sa = sec(a),
			sb = sec(b);
		if (sa !== sb) return sa - sb;
		return a.localeCompare(b);
	});

	let out =
		"/**\n" +
		" * English (US) translations — flat key-value map for **packaged addon** (`src/`).\n" +
		" *\n" +
		" * Key convention (by word count of the value):\n" +
		" *   lbl.*  — 1–2 word values (labels, short text)\n" +
		" *   msg.*  — 3+ word values (messages, sentences)\n" +
		" *\n" +
		" * Interpolation: {param} syntax.\n" +
		" */\n";
	out += 'const enUs = {\n';
	for (const k of orderedKeys) {
		const val = addon[k];
		out += `\t${escapeKey(k)}: ${escapeValue(val)},\n`;
	}
	out += '};\n\nexport default enUs;\n';

	fs.writeFileSync(path.join(ROOT, 'src/locales/en-us.js'), out, 'utf8');
	console.log('Wrote addon-only en-us with', orderedKeys.length, 'keys.');
}

main();
