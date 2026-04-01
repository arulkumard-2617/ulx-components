'use strict';

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		requireConfigFile: false,
		babelOptions: {
			plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]]
		}
	},
	plugins: ['ember'],
	extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],
	env: {
		browser: true
	},
	rules: {
		curly: ['error', 'multi-line']
	},
	overrides: [
		{
			files: ['**/scripts/**/*.js'],
			env: { node: true, browser: false },
			parserOptions: { sourceType: 'script' }
		},
		{
			files: ['**/*.gjs', '**/*.gts'],
			parser: 'ember-eslint-parser',
			processor: 'ember/<template>',
			globals: {
				__GLIMMER_TEMPLATE: 'readonly'
			}
		}
	]
};
