#!/usr/bin/env node
'use strict';

/**
 * When installing from git, `ulx/` exists but `ulx/node_modules` is not installed
 * by the root `npm install`, so `ulxEditor` would fail (e.g. Cannot find module 'less').
 * We require `ulx/` to be present and rebuild `dev-releases/css/ulx-editor.min.css`
 * so stale prebuilt CSS is never used silently.
 */

const { existsSync } = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ulxPkg = path.join(root, 'ulx', 'package.json');
const alwaysInstall = process.argv.includes('--always-install');

console.log('[ulx-components ensure-ulx-editor-css] Starting...');
console.log('[ulx-components ensure-ulx-editor-css] Root:', root);
console.log('[ulx-components ensure-ulx-editor-css] alwaysInstall:', alwaysInstall);

if (!existsSync(ulxPkg)) {
	console.error('❌ Missing ulx/package.json. Refusing to use prebuilt ulx-editor CSS fallback.');
	process.exit(1);
}

console.log('[ulx-components ensure-ulx-editor-css] Found ulx/package.json');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const opts = {
	cwd: root,
	stdio: 'inherit',
	shell: true
};

const checkOpts = {
	cwd: root,
	stdio: 'ignore',
	shell: true
};

const hasUlxDeps = () => {
	console.log('[ulx-components ensure-ulx-editor-css] Checking ULX dependencies...');

	const lessOk = spawnSync(npmCmd, ['ls', '--prefix', 'ulx', 'less', '--depth=0'], checkOpts);

	console.log('[ulx-components ensure-ulx-editor-css] less installed:', lessOk.status === 0);

	const ulsOk = spawnSync(npmCmd, ['ls', 'uls_v2', '--depth=0'], {
		cwd: root,
		stdio: 'ignore',
		shell: true
	});

	console.log('[ulx-components ensure-ulx-editor-css] uls_v2 installed:', ulsOk.status === 0);

	const ok = lessOk.status === 0 && ulsOk.status === 0;

	console.log('[ulx-components ensure-ulx-editor-css] Dependency check result:', ok);

	return ok;
};

if (alwaysInstall || !hasUlxDeps()) {
	console.log('[ulx-components ensure-ulx-editor-css] Installing ULX dependencies...');

	const r = spawnSync(
		npmCmd,
		['install', '--prefix', 'ulx', '--include=dev', '--include=peer', '--include=optional'],
		opts
	);

	if (r.status !== 0) {
		console.error('[ulx-components ensure-ulx-editor-css] Failed installing ULX dependencies.');

		process.exit(r.status ?? 1);
	}

	console.log('[ulx-components ensure-ulx-editor-css] ULX dependencies installed successfully.');
} else {
	console.log('[ulx-components ensure-ulx-editor-css] Reusing existing ulx dependencies for dev build.');
}

console.log('[ulx-components ensure-ulx-editor-css] Running ulxEditor build...');

const r = spawnSync(npmCmd, ['run', 'ulxEditor', '--prefix', 'ulx'], opts);

if (r.status !== 0) {
	console.error('[ulx-components ensure-ulx-editor-css] ulxEditor build failed.');
} else {
	console.log('[ulx-components ensure-ulx-editor-css] ulxEditor build completed.');
}

process.exit(r.status ?? 0);
