/* eslint-disable no-console */
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { readFileSync, writeFileSync, mkdirSync, existsSync, watch } from 'fs';
import { createRequire } from 'module';
import less from 'less';

// Load ULS config to get correct paths (using createRequire for ES modules)
let ulsConfig = {};
try {
	const configPath = resolve(__dirname, 'uls.config.cjs');
	if (existsSync(configPath)) {
		const require = createRequire(import.meta.url);
		ulsConfig = require(configPath);
	}
} catch (err) {
	console.warn('Could not load uls.config.cjs, using defaults');
}

// Resolve paths from config or use defaults (embedded at generation time)
// These defaults ensure correct paths even if config loading fails
const stylesPath = ulsConfig.stylesPath || 'src/styles/uls';
const passthroughPath = ulsConfig.passthroughPath || 'src/scripts/passthrough.js';

// Resolve app bundle name
// Priority: ULS_APP env var -> uls.config.cjs defaultApp -> 'default'
const appName =
	(process.env.ULS_APP || ulsConfig.defaultApp || 'default').toString().trim() || 'default';

// Get prefix from config (supports per-app prefixes)
// Priority: prefixes[appName] -> prefix -> 'ulx-'
const componentPrefix = ulsConfig.prefixes?.[appName] || ulsConfig.prefix || 'ulx-';
// CSS variable prefix defaults to component prefix, but can be overridden
// Priority: cssVarPrefixes[appName] -> cssVarPrefix -> componentPrefix -> 'ulx-'
const cssVarPrefix =
	ulsConfig.cssVarPrefixes?.[appName] || ulsConfig.cssVarPrefix || componentPrefix || 'ulx-';

// Global file watchers (persist across rebuilds in watch mode)
let globalLessFileWatchers = [];
let globalRebuildTimeout = null;

// Find UI package and ULS paths (auto-detected)
const uiPackagePath = resolve(__dirname, 'node_modules/uls_v2');
const ulsPackagePath = resolve(uiPackagePath, 'node_modules/ulx-v2');

// Custom LESS build plugin (regular + minified)
// Supports Tailwind-like auto-rebuild when content files change
function lessBuildPlugin(options = {}) {
	const { entry, outDir, outFile, outMinFile } = options;

	// Extract CSS compilation logic for reuse in watch mode
	const compileCSS = async (pluginContext) => {
		if (!existsSync(entry)) {
			pluginContext.error(`Entry file not found: ${entry}`);
			return;
		}

		if (!existsSync(outDir)) {
			mkdirSync(outDir, { recursive: true });
		}

		const src = readFileSync(entry, 'utf8');
		const entryDir = resolve(entry, '..');
		const nodeModulesPath = resolve(__dirname, 'node_modules');
		const stylesRoot = resolve(process.cwd(), stylesPath);
		const appRoot = resolve(stylesRoot, appName);
		const appOverridesPath = resolve(appRoot, 'overrides');
		const ulsStylesPath = resolve(ulsPackagePath, 'src/styles');
		const ulsOverridesPath = resolve(ulsStylesPath, 'ulx-overrides/less/ulx-primereact');

		const cssResult = await less.render(src, {
			filename: entry,
			paths: [
				entryDir,
				appRoot,
				appOverridesPath, // App overrides directory for relative imports
				stylesRoot,
				ulsStylesPath, // ULS base styles
				ulsOverridesPath, // ULS's own overrides directory for relative imports
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
			pluginContext.error('LESS compilation failed: No CSS output');
			return;
		}

		let css = cssResult.css;

		writeFileSync(outFile, css, 'utf8');
		console.log(`✅ LESS compiled → ${outFile}`);

		// Minified CSS
		const minResult = await less.render(src, {
			filename: entry,
			paths: [
				entryDir,
				appRoot,
				appOverridesPath, // App overrides directory for relative imports
				stylesRoot,
				ulsStylesPath, // ULS base styles
				ulsOverridesPath, // ULS's own overrides directory for relative imports
				nodeModulesPath,
				resolve(process.cwd(), 'node_modules'),
				resolve(uiPackagePath, 'node_modules')
			],
			modifyVars: {
				'ulx-prefix': componentPrefix, // Inject component prefix from config (LESS will treat as string)
				'ulx-css-var-prefix': cssVarPrefix // Inject CSS variable prefix from config
			},
			compress: true
		});

		if (!minResult || !minResult.css) {
			pluginContext.error('LESS minification failed: No CSS output');
			return;
		}

		let minCss = minResult.css;

		writeFileSync(outMinFile, minCss, 'utf8');
		console.log(`✅ LESS minified → ${outMinFile}`);
	};

	return {
		name: 'less-build',
		async buildStart() {
			try {
				if (!entry) {
					this.error('Entry file is required');
					return;
				}

				// Add entry file to watch list
				if (entry && existsSync(entry)) {
					this.addWatchFile(entry);
				}

				// Watch LESS files in ULS package and override directories
				try {
					const { glob } = await import('glob');

					// Watch ULS core LESS files
					const ulsStylesPath = resolve(ulsPackagePath, 'src/styles');
					if (existsSync(ulsStylesPath)) {
						try {
							const ulsLessFiles = glob.sync(`${ulsStylesPath}/**/*.less`, {
								ignore: ['node_modules/**', 'dist/**'],
								absolute: true
							});
							ulsLessFiles.forEach((file) => {
								if (existsSync(file)) {
									this.addWatchFile(file);
								}
							});
							console.log(`👀 Watching ${ulsLessFiles.length} ULS LESS files`);
						} catch (err) {
							// Continue if glob fails
						}
					}

					// Watch user override LESS files (from stylesPath config)
					const userStylesPath = resolve(process.cwd(), stylesPath);
					if (existsSync(userStylesPath)) {
						try {
							const userLessFiles = glob.sync(`${userStylesPath}/**/*.less`, {
								ignore: ['node_modules/**', 'dist/**'],
								absolute: true
							});
							userLessFiles.forEach((file) => {
								if (existsSync(file)) {
									this.addWatchFile(file);

									// Set up direct file watcher as backup (for watch mode)
									// This ensures CSS rebuilds even if watchChange hook isn't called
									try {
										const pluginContext = this;
										// Only add if not already watching this file
										const alreadyWatching = globalLessFileWatchers.some((w) => w.path === file);
										if (!alreadyWatching) {
											const watcher = watch(file, { persistent: true }, (eventType) => {
												if (eventType === 'change') {
													console.log(`📝 LESS file changed: ${file}`);
													console.log(`🔄 Rebuilding CSS...`);

													// Debounce rebuilds
													if (globalRebuildTimeout) {
														clearTimeout(globalRebuildTimeout);
													}

													globalRebuildTimeout = setTimeout(async () => {
														try {
															await compileCSS(pluginContext);
															console.log(`✨ CSS updated automatically!`);
														} catch (err) {
															console.error(`❌ Failed to rebuild CSS:`, err.message);
														}
													}, 200); // 200ms debounce
												}
											});

											globalLessFileWatchers.push({ watcher, path: file });
										}
									} catch (err) {
										// File watching might fail, continue
									}
								}
							});
							if (userLessFiles.length > 0) {
								console.log(`👀 Watching ${userLessFiles.length} user override LESS files`);
							}
						} catch (err) {
							// Continue if glob fails
						}
					}

					// Watch override files in ulx-overrides directory (common pattern)
					const overridesPath = resolve(process.cwd(), 'ulx-overrides');
					if (existsSync(overridesPath)) {
						try {
							const overrideLessFiles = glob.sync(`${overridesPath}/**/*.less`, {
								ignore: ['node_modules/**', 'dist/**'],
								absolute: true
							});
							overrideLessFiles.forEach((file) => {
								if (existsSync(file)) {
									this.addWatchFile(file);
								}
							});
							if (overrideLessFiles.length > 0) {
								console.log(`👀 Watching ${overrideLessFiles.length} override LESS files`);
							}
						} catch (err) {
							// Continue if glob fails
						}
					}

					// Watch override files in ULS package's override directory
					const ulsOverridesPath = resolve(ulsPackagePath, 'src/styles/ulx-overrides');
					if (existsSync(ulsOverridesPath)) {
						try {
							const ulsOverrideLessFiles = glob.sync(`${ulsOverridesPath}/**/*.less`, {
								ignore: ['node_modules/**', 'dist/**'],
								absolute: true
							});
							ulsOverrideLessFiles.forEach((file) => {
								if (existsSync(file)) {
									this.addWatchFile(file);
								}
							});
							if (ulsOverrideLessFiles.length > 0) {
								console.log(`👀 Watching ${ulsOverrideLessFiles.length} ULS override LESS files`);
							}
						} catch (err) {
							// Continue if glob fails
						}
					}
				} catch (err) {
					// glob might not be available, continue without watching LESS files
				}

				// Compile CSS during build
				// Note: buildStart hook is only called by Rollup during 'vite build', not during 'npx uls init'
				// So this won't create dist folder during init, only during actual builds
				await compileCSS(this);
			} catch (error) {
				const errorMessage = error?.message || error?.toString() || 'Unknown error';
				const errorStack = error?.stack || '';
				this.error(
					`LESS compilation failed: ${errorMessage}${errorStack ? '\n' + errorStack : ''}`
				);
				throw error;
			}
		},
		// Auto-rebuild when LESS files change (Rollup watch mode)
		watchChange(id) {
			const isLessFile = id.endsWith('.less');

			if (isLessFile) {
				console.log(`📝 LESS file changed: ${id}`);
				console.log(`🔄 Rebuilding CSS...`);

				// Use setTimeout to debounce and avoid multiple rebuilds
				if (this._rebuildTimeout) {
					clearTimeout(this._rebuildTimeout);
				}

				this._rebuildTimeout = setTimeout(async () => {
					try {
						await compileCSS(this);
						console.log(`✨ CSS updated automatically!`);
					} catch (err) {
						console.error(`❌ Failed to rebuild CSS:`, err.message);
					}
				}, 100); // 100ms debounce
			}
		},
		closeWatcher() {
			// Clean up timeout when watcher closes
			if (this._rebuildTimeout) {
				clearTimeout(this._rebuildTimeout);
			}
			if (globalRebuildTimeout) {
				clearTimeout(globalRebuildTimeout);
			}

			// Close all file watchers
			globalLessFileWatchers.forEach(({ watcher }) => {
				try {
					watcher.close();
				} catch (err) {
					// Ignore errors when closing watchers
				}
			});
			globalLessFileWatchers = [];
		}
	};
}

export default defineConfig(({ mode }) => {
	const config = {
		plugins: [],
		build: {
			emptyOutDir: false // Keep both CSS and JS outputs
		}
	};

	// Resolve entry files - use user's local ulx-master.less if it exists, otherwise fallback to ULS package
	const userLessMaster = resolve(process.cwd(), stylesPath, appName, 'ulx-master.less');
	const lessEntry =
		mode === 'less-only'
			? existsSync(userLessMaster)
				? userLessMaster
				: resolve(ulsPackagePath, 'src/styles/uls.less')
			: existsSync(userLessMaster)
				? userLessMaster
				: resolve(ulsPackagePath, 'src/styles/ulx-master.less');
	const passthroughEntry = resolve(__dirname, passthroughPath);

	// Per-app CSS output names
	const cssOutFile = resolve(__dirname, `dist/css/ulx-${appName}.css`);
	const cssOutMinFile = resolve(__dirname, `dist/css/ulx-${appName}.min.css`);

	// LESS-only modes
	if (mode === 'less' || mode === 'less-only') {
		// Validate entry file exists
		if (!existsSync(lessEntry)) {
			console.error(`❌ Error: LESS entry file not found: ${lessEntry}`);
			console.error(`   Expected path: ${lessEntry}`);
			console.error(`   Styles path from config: ${stylesPath}`);
			console.error(`   Current directory: ${__dirname}`);
			throw new Error(`LESS entry file not found: ${lessEntry}`);
		}

		config.plugins.push(
			lessBuildPlugin({
				entry: lessEntry,
				outDir: resolve(__dirname, 'dist/css'),
				outFile: cssOutFile,
				outMinFile: cssOutMinFile
			})
		);
		// Disable JS build in LESS-only mode
		config.build.lib = false;
		// Provide a dummy input to satisfy Rollup (plugins handle actual compilation)
		// Create a minimal dummy file if passthrough doesn't exist (only during build, not during init)
		const dummyInput = resolve(__dirname, passthroughPath);
		// Note: Don't create dummy file during init - only create during actual build
		// The build process will handle creating necessary files
		config.build.rollupOptions = {
			input: dummyInput,
			output: {
				format: 'es',
				// Suppress JS output - we only want CSS from the plugin
				entryFileNames: () => '.vite-temp/empty.js'
			}
		};
		return config;
	}

	// JS-only mode
	if (mode === 'js') {
		config.build = {
			lib: {
				entry: passthroughEntry,
				name: 'ULSPassthrough',
				fileName: () => `passthrough.js`,
				formats: ['es']
			},
			outDir: resolve(__dirname, 'dist/js'),
			minify: true,
			emptyOutDir: false,
			rollupOptions: {
				output: {
					format: 'es',
					entryFileNames: 'passthrough.js'
				}
			}
		};
		return config;
	}

	// Default: build both LESS and JS (JS is optional)
	// Validate entry file exists
	if (!existsSync(lessEntry)) {
		console.error(`❌ Error: LESS entry file not found: ${lessEntry}`);
		console.error(`   Expected path: ${lessEntry}`);
		console.error(`   Styles path from config: ${stylesPath}`);
		console.error(`   Current directory: ${__dirname}`);
		throw new Error(`LESS entry file not found: ${lessEntry}`);
	}

	// Add LESS build plugin
	config.plugins.push(
		lessBuildPlugin({
			entry: lessEntry,
			outDir: resolve(__dirname, 'dist/css'),
			outFile: cssOutFile,
			outMinFile: cssOutMinFile
		})
	);

	// Build JS only if passthrough file exists
	if (existsSync(passthroughEntry)) {
		config.build.lib = {
			entry: passthroughEntry,
			name: 'ULSPassthrough',
			fileName: () => `passthrough.js`,
			formats: ['es']
		};
		config.build.outDir = resolve(__dirname, 'dist/js');
		config.build.minify = true;
		config.build.rollupOptions = {
			output: {
				format: 'es',
				entryFileNames: 'passthrough.js'
			}
		};
	} else {
		// Passthrough doesn't exist - skip JS build, create dummy input for Rollup
		console.warn(`⚠️  Passthrough file not found: ${passthroughEntry}`);
		console.warn(`   Skipping JS build. Only CSS will be generated.`);
		console.warn(`   Tip: Run 'npm run ulx-passthrough' to create the passthrough file`);

		// Create a minimal dummy file for Rollup (only during build, not during init)
		const dummyInput = resolve(__dirname, passthroughPath);
		// Note: Don't create dummy file during init - only create during actual build
		// The build process will handle creating necessary files

		config.build.lib = false;
		config.build.rollupOptions = {
			input: dummyInput,
			output: {
				format: 'es',
				// Suppress JS output - we only want CSS from the plugin
				entryFileNames: () => '.vite-temp/empty.js'
			}
		};
	}

	return config;
});
