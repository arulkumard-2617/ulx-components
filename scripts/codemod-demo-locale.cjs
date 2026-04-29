/**
 * Replaces non-addon `t('key')` usages in ulx-ember with literals (run before trimming en-us).
 *   node scripts/codemod-demo-locale.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DEMO = path.join(ROOT, 'ulx/src/demo/ulx-ember');

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

function interpolate(tpl, kv) {
	let o = tpl;
	if (!kv) return o;
	for (const [k, v] of Object.entries(kv)) o = o.split(`{${k}}`).join(String(v));
	return o;
}

function parseArgs(argStr) {
	const p = {};
	if (!argStr?.trim()) return p;
	const re = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^}\s]+\([^)]*\))|(\S+))/g;
	let m;
	while ((m = re.exec(argStr))) {
		const name = m[1];
		const v = m[2] ?? m[3] ?? m[4] ?? m[5];
		if (name && v !== undefined) p[name] = v;
	}
	return p;
}

function processFile(src, enUs, allow) {
	let hits = 0;
	let out = src;

	out = out.replace(
		/@([\w-]+)=\{\{\s*t\s+"([^"]+)"(\s[^}]*)?\}\}/g,
		(full, attr, key, argStr) => {
			if (allow.has(key)) return full;
			const tpl = enUs[key];
			if (tpl === undefined) return full;
			const resolved = interpolate(tpl, parseArgs(argStr || ''));
			hits++;
			if (resolved.includes('"'))
				return `@${attr}='${resolved.replace(/'/g, "\\'")}'`;
			return `@${attr}="${resolved.replace(/"/g, '&quot;')}"`;
		}
	);

	out = out.replace(/\{\{\s*t\s+"([^"]+)"(\s[^}]*)?\}\}/g, (full, key, argStr) => {
		if (allow.has(key)) return full;
		const tpl = enUs[key];
		if (tpl === undefined) return full;
		const resolved = interpolate(tpl, parseArgs(argStr || ''));
		hits++;
		const esc = resolved.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
		return `{{"${esc}"}}`;
	});

	out = out.replace(/\(\s*t\s+"([^"]+)"(\s[^)]*?)\)/g, (full, key, argStr) => {
		if (allow.has(key)) return full;
		const tpl = enUs[key];
		if (tpl === undefined) return full;
		const resolved = interpolate(tpl, parseArgs(argStr || ''));
		hits++;
		return `(${JSON.stringify(resolved)})`;
	});

	out = out.replace(/\(\s*t\s+'([^']+)'([^)]*?)\)/g, (full, key, argStr) => {
		if (allow.has(key)) return full;
		const tpl = enUs[key];
		if (tpl === undefined) return full;
		const resolved = interpolate(tpl, parseArgs(argStr || ''));
		hits++;
		return `(${JSON.stringify(resolved)})`;
	});

	out = out.replace(/\bt\s*\(\s*"([^"]+)"\s*\)/g, (full, key) => {
		if (allow.has(key)) return full;
		const tpl = enUs[key];
		if (tpl === undefined) return full;
		hits++;
		return JSON.stringify(tpl);
	});

	out = out.replace(/\bt\s*\(\s*'([^']+)'\s*\)/g, (full, key) => {
		if (allow.has(key)) return full;
		const tpl = enUs[key];
		if (tpl === undefined) return full;
		hits++;
		return JSON.stringify(tpl);
	});

	return { out, hits };
}

function walk(d, fn) {
	fs.readdirSync(d, { withFileTypes: true }).forEach((ent) => {
		const p = path.join(d, ent.name);
		if (ent.isDirectory()) walk(p, fn);
		else if (/\.(gjs|hbs|js)$/.test(ent.name)) fn(p);
	});
}

function main() {
	const enUs = loadEnUs();
	const allow = buildAllowlist();
	console.log('addon keys', allow.size, 'enUs entries', Object.keys(enUs).length);

	let files = 0;
	let totalHits = 0;
	walk(DEMO, (file) => {
		const before = fs.readFileSync(file, 'utf8');
		const { out, hits } = processFile(before, enUs, allow);
		if (out !== before) {
			fs.writeFileSync(file, out, 'utf8');
			files++;
			totalHits += hits;
		}
	});
	console.log('files updated', files, 'substitutions', totalHits);
}

main();
