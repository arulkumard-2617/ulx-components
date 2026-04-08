/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

// Wrap everything in async IIFE
(async () => {
	const chokidar = (await import('chokidar')).default;

	const ROOT = process.cwd();
	const ONCE = process.argv.includes('--once');

	const SRC_ROOT = path.join(ROOT, 'src/demo/ulx-ember/app/components/Demo');

	const DOCS_ROOT = path.join(ROOT, 'src/demo/ulx-ember/app/documentation/components');

	function parseDemoPath(srcFile) {
		const relative = path.relative(SRC_ROOT, srcFile);
		const { dir, name } = path.parse(relative);
		const [componentName] = dir.split(path.sep);
		const kebabName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
		return { kebabName, name };
	}

	function getDestinationPath(srcFile) {
		const { kebabName, name } = parseDemoPath(srcFile);

		let category = null;
		const categories = ['collections', 'elements', 'modules']; // Add more categories as needed

		for (const cat of categories) {
			const possiblePath = path.join(DOCS_ROOT, cat, kebabName);
			if (fs.existsSync(possiblePath)) {
				category = cat;
				break;
			}
		}

		if (!category) {
			category = 'collections';
		}

		return path.join(DOCS_ROOT, category, kebabName, 'snippets', `${name}.gjs.js`);
	}

	/**
	 * Some doc routes import snippets from `components/<kebab>/snippets/` instead of
	 * `components/collections/<kebab>/snippets/`. Mirror the same content when that folder exists.
	 */
	function getAlternateDestinationPath(srcFile) {
		const { kebabName, name } = parseDemoPath(srcFile);
		const altDir = path.join(DOCS_ROOT, kebabName, 'snippets');
		if (!fs.existsSync(altDir)) {
			return null;
		}

		return path.join(altDir, `${name}.gjs.js`);
	}

	/**
	 * Escape content so it can be embedded inside a JS template literal (backticks)
	 * without breaking the outer literal. Escapes: ` -> \`, ${ -> \${
	 */
	function escapeForTemplateLiteral(content) {
		return content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
	}

	function syncFile(srcFile, isInitial = false) {
		if (!srcFile.endsWith('.gjs')) return;

		const destFile = getDestinationPath(srcFile);
		fs.mkdirSync(path.dirname(destFile), { recursive: true });

		const content = fs.readFileSync(srcFile, 'utf8');
		const escaped = escapeForTemplateLiteral(content);
		const wrapped = `export default \`\n${escaped}\n\`;\n`;

		fs.writeFileSync(destFile, wrapped, 'utf8');

		const altDest = getAlternateDestinationPath(srcFile);
		if (altDest && path.resolve(altDest) !== path.resolve(destFile)) {
			fs.mkdirSync(path.dirname(altDest), { recursive: true });
			fs.writeFileSync(altDest, wrapped, 'utf8');
		}

		if (isInitial) return;
		console.log(`✓ synced ${path.relative(ROOT, srcFile)}`);
	}

	function removeFile(srcFile) {
		if (!srcFile.endsWith('.gjs')) return;

		const destFile = getDestinationPath(srcFile);
		if (fs.existsSync(destFile)) {
			fs.unlinkSync(destFile);
			console.log(`✗ removed ${path.relative(ROOT, destFile)}`);
		}

		const altDest = getAlternateDestinationPath(srcFile);
		if (altDest && fs.existsSync(altDest)) {
			fs.unlinkSync(altDest);
			console.log(`✗ removed ${path.relative(ROOT, altDest)}`);
		}
	}

	const gjsFiles = [];
	function collectGjs(dir) {
		if (!fs.existsSync(dir)) return;
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		for (const e of entries) {
			const full = path.join(dir, e.name);
			if (e.isDirectory()) collectGjs(full);
			else if (e.name.endsWith('.gjs')) gjsFiles.push(full);
		}
	}
	collectGjs(SRC_ROOT);

	for (const f of gjsFiles) syncFile(f, true);
	console.log('✓ synced all files to documentation');

	if (ONCE) {
		process.exit(0);
	}

	console.log('👀 Watching demo .gjs files...');

	chokidar
		.watch(SRC_ROOT, {
			ignoreInitial: true,
			awaitWriteFinish: true
		})
		.on('add', (p) => syncFile(p, false))
		.on('change', (p) => syncFile(p, false))
		.on('unlink', removeFile);
})();
