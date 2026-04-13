#!/usr/bin/env node
'use strict';

/**
 * When installing from git, `ulx/` exists but `ulx/node_modules` is not installed
 * by the root `npm install`, so `ulxEditor` would fail (e.g. Cannot find module 'less').
 * Published tarballs omit `ulx/` (see package.json `files`); then we skip this step
 * and rely on pre-built `dev-releases/css/ulx-editor.min.css`.
 */

const { existsSync } = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ulxPkg = path.join(root, 'ulx', 'package.json');

if (!existsSync(ulxPkg)) {
	process.exit(0);
}

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const opts = { cwd: root, stdio: 'inherit', shell: true };

let r = spawnSync(npmCmd, ['install', '--prefix', 'ulx'], opts);
if (r.status !== 0) {
	process.exit(r.status ?? 1);
}

r = spawnSync(npmCmd, ['run', 'ulxEditor', '--prefix', 'ulx'], opts);
process.exit(r.status ?? 0);
