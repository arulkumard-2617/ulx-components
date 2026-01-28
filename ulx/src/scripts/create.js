#!/usr/bin/env node

/**
 * Wrapper script for create commands
 * Usage:
 *   npm run create demo-page "PageName[ComponentName]" --category collections --submodule menu
 *   npm run add-variation -- --component=ComponentName --variation=VariationName
 *   npm run destroy-variation -- --component=ComponentName --variation=VariationName
 *   npm run destroy demo-page ComponentName --category collections
 * Note: Quote "PageName[ComponentName]" in step 1 to avoid shell glob expansion.
 */

const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

if (command === 'demo-page') {
	// Route to create-demo-page.js
	const scriptPath = path.join(__dirname, 'create-demo-page.js');
	const child = spawn('node', [scriptPath, ...args], {
		stdio: 'inherit',
		shell: true
	});
	child.on('exit', (code) => {
		process.exit(code || 0);
	});
} else if (command === 'add-variation') {
	// Route to add-variation.js
	const scriptPath = path.join(__dirname, 'add-variation.js');
	const child = spawn('node', [scriptPath, ...args], {
		stdio: 'inherit',
		shell: true
	});
	child.on('exit', (code) => {
		process.exit(code || 0);
	});
} else if (command === 'destroy-variation') {
	// Route to destroy-variation.js
	const scriptPath = path.join(__dirname, 'destroy-variation.js');
	const child = spawn('node', [scriptPath, ...args], {
		stdio: 'inherit',
		shell: true
	});
	child.on('exit', (code) => {
		process.exit(code || 0);
	});
} else if (command === 'destroy' && args[1] === 'demo-page') {
	// Route to destroy-demo-page.js
	const scriptPath = path.join(__dirname, 'destroy-demo-page.js');
	const child = spawn('node', [scriptPath, ...args], {
		stdio: 'inherit',
		shell: true
	});
	child.on('exit', (code) => {
		process.exit(code || 0);
	});
} else {
	// Fall back to original create script
	const originalScript = path.join(
		__dirname,
		'../node_modules/uls-v2/src/scripts/create-uls-app.js'
	);
	const child = spawn('node', [originalScript, ...args], {
		stdio: 'inherit',
		shell: true
	});
	child.on('exit', (code) => {
		process.exit(code || 0);
	});
}
