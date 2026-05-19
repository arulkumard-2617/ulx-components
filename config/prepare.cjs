#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const opts = {
	cwd: root,
	stdio: 'inherit',
	shell: true
};

const captureOpts = {
	cwd: root,
	encoding: 'utf8',
	shell: true
};

console.log('[prepare] =====================================');
console.log('[prepare] Starting prepare script');
console.log('[prepare] Root:', root);
console.log('[prepare] npm command:', npmCmd);
console.log('[prepare] =====================================');

const run = (args) => {
	console.log('[prepare] Running:', `${npmCmd} ${args.join(' ')}`);

	const result = spawnSync(npmCmd, args, opts);

	console.log('[prepare] Exit status:', result.status);

	return result;
};

const runCapture = (args) => {
	console.log('[prepare] Running (capture):', `${npmCmd} ${args.join(' ')}`);

	const result = spawnSync(npmCmd, args, captureOpts);

	console.log('[prepare] Captured exit status:', result.status);

	return result;
};

const missingRollupPkg = (output) => {
	const match = output.match(/Cannot find module '(@rollup\/rollup-[^']+)'/);

	return match ? match[1] : null;
};

console.log('[ulx-components prepare] Running ensure-ulx-editor-css');

const css = run(['run', 'ensure:ulx-editor-css', '--', '--always-install']);

if (css.status !== 0) {
	console.error('[ulx-components prepare] ensure-ulx-editor-css failed');

	process.exit(css.status ?? 1);
}

console.log('[ulx-components prepare] ensure-ulx-editor-css completed successfully');

console.log('[ulx-components prepare] Running build:js');

const firstBuild = runCapture(['run', 'build:js']);

if (firstBuild.status === 0) {
	console.log('[ulx-components prepare] build:js completed successfully');

	process.stdout.write(firstBuild.stdout ?? '');
	process.stderr.write(firstBuild.stderr ?? '');

	process.exit(0);
}

console.warn('[ulx-components prepare] build:js failed, analyzing output...');

const output = `${firstBuild.stdout ?? ''}\n${firstBuild.stderr ?? ''}`;

const pkg = missingRollupPkg(output);

if (!pkg) {
	console.error('[prepare] No missing Rollup native package detected');

	process.stdout.write(firstBuild.stdout ?? '');
	process.stderr.write(firstBuild.stderr ?? '');

	process.exit(firstBuild.status ?? 1);
}

console.warn(`[ulx-components prepare] Missing Rollup native package detected: ${pkg}`);

console.warn(`[ulx-components prepare] Installing missing Rollup native package: ${pkg}`);

const install = run(['install', '--no-save', pkg]);

if (install.status !== 0) {
	console.error('[ulx-components prepare] Failed installing Rollup native package');

	process.exit(install.status ?? 1);
}

console.log('[ulx-components prepare] Rollup native package installed successfully');

console.log('[ulx-components prepare] Retrying build:js');

const retryBuild = run(['run', 'build:js']);

if (retryBuild.status !== 0) {
	console.error('[ulx-components prepare] Retry build failed');
} else {
	console.log('[ulx-components prepare] Retry build succeeded');
}

console.log('[ulx-components prepare] Finished');

process.exit(retryBuild.status ?? 1);
