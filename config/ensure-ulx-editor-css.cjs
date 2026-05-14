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

if (!existsSync(ulxPkg)) {
	console.error('❌ Missing ulx/package.json. Refusing to use prebuilt ulx-editor CSS fallback.');
	process.exit(1);
}

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const opts = { cwd: root, stdio: 'inherit', shell: true };
const checkOpts = { cwd: root, stdio: 'ignore', shell: true };

const hasUlxDeps = () => {
	const lessOk = spawnSync(npmCmd, ['ls', '--prefix', 'ulx', 'less', '--depth=0'], checkOpts);
	const ulsOk = spawnSync(npmCmd, ['ls', 'uls_v2', '--depth=0'], {
		cwd: root,
		stdio: 'ignore',
		shell: true
	});
	return lessOk.status === 0 && ulsOk.status === 0;
};

if (alwaysInstall || !hasUlxDeps()) {
	const r = spawnSync(
		npmCmd,
		['install', '--prefix', 'ulx', '--include=dev', '--include=peer', '--include=optional'],
		opts
	);
	if (r.status !== 0) {
		process.exit(r.status ?? 1);
	}
} else {
	console.log('[ensure-ulx-editor-css] Reusing existing ulx dependencies for dev build.');
}

const r = spawnSync(npmCmd, ['run', 'ulxEditor', '--prefix', 'ulx'], opts);
process.exit(r.status ?? 0);
