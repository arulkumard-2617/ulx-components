#!/usr/bin/env node
/* eslint-disable no-console */

const { resolve, dirname } = require('path');
const { readFileSync, writeFileSync, mkdirSync, existsSync, watch } = require('fs');

// Configuration
// Script lives at config/
// addonRoot → ulx-components root
// ulxRoot → ulx package root
const addonRoot = resolve(__dirname, '..');
const ulxRoot = resolve(addonRoot, 'ulx');
const stylesRoot = resolve(addonRoot, 'styles');
// Write CSS to ulx-components/dev-releases/css
const outDir = resolve(addonRoot, 'dev-releases/css');
const styleBundles = [
	{
		name: 'ULX Editor',
		entryFile: resolve(stylesRoot, 'ulx-editor.less'),
		outMinFile: resolve(outDir, 'ulx-editor.min.css')
	},
	{
		name: 'ULX Community',
		entryFile: resolve(stylesRoot, 'ulx-community.less'),
		outMinFile: resolve(outDir, 'ulx-community.min.css')
	}
];

// Command line arguments
const isWatchMode = process.argv.includes('--watch') || process.argv.includes('-w');

const loadPackage = (pkgName) => {
	try {
		return require(pkgName);
	} catch (err) {
		const pkgFromUlx = resolve(ulxRoot, 'node_modules', pkgName);
		return require(pkgFromUlx);
	}
};

const less = loadPackage('less');

// Load ULX config if available
let ulxConfig = {};
try {
	const configPathFromScript = resolve(ulxRoot, 'uls.config.cjs');
	const configPathFromCwd = resolve(process.cwd(), 'uls.config.cjs');
	const configPathFromCwdUlx = resolve(process.cwd(), 'ulx', 'uls.config.cjs');
	const configPath = existsSync(configPathFromScript)
		? configPathFromScript
		: existsSync(configPathFromCwd)
			? configPathFromCwd
			: existsSync(configPathFromCwdUlx)
				? configPathFromCwdUlx
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
const nodeModulesPath = resolve(addonRoot, 'node_modules');
const uiPackagePath = resolve(addonRoot, 'node_modules/uls_v2');
const ulsPackagePath = resolve(uiPackagePath, 'node_modules/ulx-v2');
const ulsStylesPath = resolve(ulsPackagePath, 'src/styles');
const ulsOverridesPath = resolve(ulsStylesPath, 'ulx-overrides/less/ulx-primereact');

async function compileCSS(bundle) {
	try {
		if (!existsSync(bundle.entryFile)) {
			console.error(`Entry file not found: ${bundle.entryFile}`);
			process.exit(1);
		}

		if (!existsSync(outDir)) {
			mkdirSync(outDir, { recursive: true });
		}

		const entryDir = dirname(bundle.entryFile);
		const src = readFileSync(bundle.entryFile, 'utf8');

		console.log(`Compiling ${bundle.entryFile}... (prefix: ${componentPrefix})`);

		const minResult = await less.render(src, {
			filename: bundle.entryFile,
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

		writeFileSync(bundle.outMinFile, minResult.css, 'utf8');
		console.log(`LESS minified -> ${bundle.outMinFile}`);

		return true;
	} catch (error) {
		console.error(`LESS compilation failed:`, error.message);
		if (!isWatchMode) {
			process.exit(1);
		}
		return false;
	}
}

async function compileAllCSS() {
	const results = [];

	for (const bundle of styleBundles) {
		results.push(await compileCSS(bundle));
	}

	return results.every(Boolean);
}

async function watchFiles() {
	console.log(`Watching for changes... (Ctrl+C to stop)`);

	// Watch the main entry files
	styleBundles.forEach((bundle) => {
		if (existsSync(bundle.entryFile)) {
			watch(bundle.entryFile, { persistent: true }, async (eventType) => {
				if (eventType === 'change') {
					console.log(`File changed: ${bundle.entryFile}`);
					await compileAllCSS();
					console.log(`CSS updated automatically`);
				}
			});
		}
	});

	// Watch LESS files in styles directory
	const { glob } = loadPackage('glob');
	try {
		const lessFiles = await glob(`${stylesRoot}/**/*.less`, {
			ignore: ['node_modules/**', 'dist/**'],
			absolute: true
		});

		lessFiles.forEach((file) => {
			if (existsSync(file)) {
				watch(file, { persistent: true }, async (eventType) => {
					if (eventType === 'change') {
						console.log(`File changed: ${file}`);
						await compileAllCSS();
						console.log(`CSS updated automatically`);
					}
				});
			}
		});

		if (lessFiles.length > 0) {
			console.log(`Watching ${lessFiles.length} LESS files in ${stylesRoot}`);
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
							console.log(`ULS file changed: ${file}`);
							await compileAllCSS();
							console.log(`CSS updated automatically`);
						}
					});
				}
			});

			if (ulsLessFiles.length > 0) {
				console.log(`Watching ${ulsLessFiles.length} LESS files in ULS package`);
			}
		}
	} catch (err) {
		console.warn('Could not set up file watchers for ULS LESS files');
	}
}

async function main() {
	if (isWatchMode) {
		console.log(`Starting ULX CSS watch mode`);
		await compileAllCSS();
		await watchFiles();

		// Keep the process running
		process.on('SIGINT', () => {
			console.log('\nStopping watch mode');
			process.exit(0);
		});
	} else {
		console.log(`Building ULX CSS`);
		await compileAllCSS();
		console.log(`Build complete`);
	}
}

main().catch((err) => {
	console.error('Fatal error:', err);
	process.exit(1);
});
