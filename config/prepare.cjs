#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const opts = { cwd: root, stdio: 'inherit', shell: true };
const captureOpts = { cwd: root, encoding: 'utf8', shell: true };

const run = (args) => spawnSync(npmCmd, args, opts);
const runCapture = (args) => spawnSync(npmCmd, args, captureOpts);
const missingRollupPkg = (output) => {
	const match = output.match(/Cannot find module '(@rollup\/rollup-[^']+)'/);
	return match ? match[1] : null;
};

const css = run(['run', 'ulxEditor']);
if (css.status !== 0) {
	process.exit(css.status ?? 1);
}

const firstBuild = runCapture(['run', 'build:js']);
if (firstBuild.status === 0) {
	process.stdout.write(firstBuild.stdout ?? '');
	process.stderr.write(firstBuild.stderr ?? '');
	process.exit(0);
}

const output = `${firstBuild.stdout ?? ''}\n${firstBuild.stderr ?? ''}`;
const pkg = missingRollupPkg(output);

if (!pkg) {
	process.stdout.write(firstBuild.stdout ?? '');
	process.stderr.write(firstBuild.stderr ?? '');
	process.exit(firstBuild.status ?? 1);
}

console.warn(`[prepare] Installing missing Rollup native package: ${pkg}`);
const install = run(['install', '--no-save', pkg]);
if (install.status !== 0) {
	process.exit(install.status ?? 1);
}

const retryBuild = run(['run', 'build:js']);
process.exit(retryBuild.status ?? 1);
