const fs = require('fs');
const path = require('path');

// Wrap everything in async IIFE
(async () => {
	const chokidar = (await import('chokidar')).default;

	const ROOT = process.cwd();

	const SRC_ROOT = path.join(ROOT, 'src/demo/ulx-ember/app/components/Demo');

	const DOCS_ROOT = path.join(ROOT, 'src/demo/ulx-ember/app/documentation/components');

	function getDestinationPath(srcFile) {
		const relative = path.relative(SRC_ROOT, srcFile);
		const { dir, name } = path.parse(relative);
		const [componentName] = dir.split(path.sep);

		// Convert component name to kebab-case
		const kebabName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

		// Find the category folder that contains this component
		let category = null;
		const categories = ['collections', 'elements', 'modules']; // Add more categories as needed

		for (const cat of categories) {
			const possiblePath = path.join(DOCS_ROOT, cat, kebabName);
			if (fs.existsSync(possiblePath)) {
				category = cat;
				break;
			}
		}

		// Default to collections if not found
		if (!category) {
			category = 'collections';
		}

		return path.join(DOCS_ROOT, category, kebabName, 'snippets', `${name}.gjs.js`);
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
	}

	console.log('👀 Watching demo .gjs files...');

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

	chokidar
		.watch(SRC_ROOT, {
			ignoreInitial: true,
			awaitWriteFinish: true
		})
		.on('add', (p) => syncFile(p, false))
		.on('change', (p) => syncFile(p, false))
		.on('unlink', removeFile);
})();
