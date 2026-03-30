#!/usr/bin/env node
/* eslint-disable no-console */

const { resolve, dirname } = require('path');
const { readFileSync, writeFileSync, mkdirSync, existsSync, watch } = require('fs');
const less = require('less');

// Configuration
// Script lives at ulx/src/scripts/less/
// ulxRoot → ulx package root
// addonRoot → ulx-components root (one level above ulx)
const ulxRoot = resolve(__dirname, '../../..');
const addonRoot = resolve(ulxRoot, '..');
const stylesPath = 'src/styles/ulx';
const entryFile = resolve(ulxRoot, stylesPath, 'ulx-editor.less');
// Write CSS to ulx-components/dev-releases/css
const outDir = resolve(addonRoot, 'dev-releases/css');
const outFile = resolve(outDir, 'ulx-editor.css');
const outMinFile = resolve(outDir, 'ulx-editor.min.css');

// Command line arguments
const isWatchMode = process.argv.includes('--watch') || process.argv.includes('-w');

// Load ULX config if available
// Script lives at ulx/src/scripts/less/ → need ../../../ to reach ulx/uls.config.cjs
let ulxConfig = {};
try {
	const configPathFromScript = resolve(__dirname, '../../../uls.config.cjs');
	const configPathFromCwd = resolve(process.cwd(), 'uls.config.cjs');
	const configPath = existsSync(configPathFromScript)
		? configPathFromScript
		: existsSync(configPathFromCwd)
			? configPathFromCwd
			: null;
	if (configPath) {
		ulxConfig = require(configPath);
	}
} catch (err) {
	console.warn('Could not load uls.config.cjs, using defaults');
}

// Resolve prefix from config (for LESS variable injection)
// Supports per-app: ULS_APP env → prefixes[appName] → prefix → 'ulx-'
const appName = (process.env.ULS_APP || ulxConfig.defaultApp || 'editor').toString().trim();
const componentPrefix = ulxConfig.prefixes?.[appName] || ulxConfig.prefix || 'ulx-';
const cssVarPrefix =
	ulxConfig.cssVarPrefixes?.[appName] || ulxConfig.cssVarPrefix || ulxConfig.prefix || 'ulx-';

// Paths for LESS compilation (similar to vite config)
const nodeModulesPath = resolve(ulxRoot, 'node_modules');
const stylesRoot = resolve(ulxRoot, stylesPath);
const entryDir = dirname(entryFile);
const ulsPackagePath = resolve(__dirname, '../../ULS_V2.0/node_modules/ulx-v2');
const ulsStylesPath = resolve(ulsPackagePath, 'src/styles');
const ulsOverridesPath = resolve(ulsStylesPath, 'ulx-overrides/less/ulx-primereact');
const uiPackagePath = resolve(__dirname, '../../ULS_V2.0');

async function compileCSS() {
	try {
		if (!existsSync(entryFile)) {
			console.error(`❌ Entry file not found: ${entryFile}`);
			process.exit(1);
		}

		if (!existsSync(outDir)) {
			mkdirSync(outDir, { recursive: true });
		}

		const src = readFileSync(entryFile, 'utf8');

		console.log(`🔄 Compiling ${entryFile}... (prefix: ${componentPrefix})`);

		// Compile regular CSS
		const cssResult = await less.render(src, {
			filename: entryFile,
			paths: [
				entryDir,
				stylesRoot,
				ulsStylesPath,
				ulsOverridesPath,
				nodeModulesPath,
				resolve(process.cwd(), 'node_modules'),
				resolve(uiPackagePath, 'node_modules')
			],
			modifyVars: {
				'ulx-prefix': componentPrefix, // Inject component prefix from config (LESS will treat as string)
				'ulx-css-var-prefix': cssVarPrefix // Inject CSS variable prefix from config
			}
		});

		if (!cssResult || !cssResult.css) {
			throw new Error('LESS compilation failed: No CSS output');
		}

		writeFileSync(outFile, cssResult.css, 'utf8');
		console.log(`✅ LESS compiled → ${outFile}`);

		// Compile minified CSS
		const minResult = await less.render(src, {
			filename: entryFile,
			paths: [
				entryDir,
				stylesRoot,
				ulsStylesPath,
				ulsOverridesPath,
				nodeModulesPath,
				resolve(process.cwd(), 'node_modules'),
				resolve(uiPackagePath, 'node_modules')
			],
			compress: true,
			modifyVars: {
				'ulx-prefix': componentPrefix, // Inject component prefix from config (LESS will treat as string)
				'ulx-css-var-prefix': cssVarPrefix // Inject CSS variable prefix from config
			}
		});

		if (!minResult || !minResult.css) {
			throw new Error('LESS minification failed: No CSS output');
		}

		writeFileSync(outMinFile, minResult.css, 'utf8');
		console.log(`✅ LESS minified → ${outMinFile}`);

		return true;
	} catch (error) {
		console.error(`❌ LESS compilation failed:`, error.message);
		if (!isWatchMode) {
			process.exit(1);
		}
		return false;
	}
}

async function watchFiles() {
	console.log(`👀 Watching for changes... (Ctrl+C to stop)`);

	// Watch the main entry file
	if (existsSync(entryFile)) {
		watch(entryFile, { persistent: true }, async (eventType) => {
			if (eventType === 'change') {
				console.log(`📝 File changed: ${entryFile}`);
				await compileCSS();
				console.log(`✨ CSS updated automatically!`);
			}
		});
	}

	// Watch LESS files in styles directory
	const { glob } = require('glob');
	try {
		const lessFiles = await glob(`${stylesRoot}/**/*.less`, {
			ignore: ['node_modules/**', 'dist/**'],
			absolute: true
		});

		lessFiles.forEach((file) => {
			if (existsSync(file)) {
				watch(file, { persistent: true }, async (eventType) => {
					if (eventType === 'change') {
						console.log(`📝 File changed: ${file}`);
						await compileCSS();
						console.log(`✨ CSS updated automatically!`);
					}
				});
			}
		});

		if (lessFiles.length > 0) {
			console.log(`👀 Watching ${lessFiles.length} LESS files in ${stylesRoot}`);
		}
	} catch (err) {
		console.warn('Could not set up file watchers for LESS files');
	}

	// Watch ULS package LESS files
	try {
		if (existsSync(ulsStylesPath)) {
			const ulsLessFiles = await glob(`${ulsStylesPath}/**/*.less`, {
				ignore: ['node_modules/**', 'dist/**'],
				absolute: true
			});

			ulsLessFiles.forEach((file) => {
				if (existsSync(file)) {
					watch(file, { persistent: true }, async (eventType) => {
						if (eventType === 'change') {
							console.log(`📝 ULS file changed: ${file}`);
							await compileCSS();
							console.log(`✨ CSS updated automatically!`);
						}
					});
				}
			});

			if (ulsLessFiles.length > 0) {
				console.log(`👀 Watching ${ulsLessFiles.length} LESS files in ULS package`);
			}
		}
	} catch (err) {
		console.warn('Could not set up file watchers for ULS LESS files');
	}
}

async function main() {
	if (isWatchMode) {
		console.log(`🚀 Starting ULX Editor watch mode`);
		await compileCSS();
		await watchFiles();

		// Keep the process running
		process.on('SIGINT', () => {
			console.log('\n👋 Stopping watch mode');
			process.exit(0);
		});
	} else {
		console.log(`🚀 Building ULX Editor CSS`);
		await compileCSS();
		console.log(`🎉 Build complete!`);
	}
}

main().catch((err) => {
	console.error('Fatal error:', err);
	process.exit(1);
});
