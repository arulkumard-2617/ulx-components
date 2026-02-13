import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { Addon } from '@embroider/addon-dev/rollup';

const addon = new Addon({
	srcDir: 'src',
	destDir: 'dist'
});

export default {
	output: addon.output(),

	plugins: [
		addon.publicEntrypoints([
			'index.js',
			'components/index.js',
			'components/elements/**/*.js',
			'components/elements/**/*.gjs',
			'components/collections/**/*.js',
			'components/collections/**/*.gjs',
			'components/modules/**/*.js',
			'components/modules/**/*.gjs',
			'helpers/**/*.js',
			'modifiers/**/*.js',
			'services/**/*.js',
			'utils/**/*.js'
		]),

		addon.appReexports([
			'components/elements/**/*.js',
			'components/elements/**/*.gjs',
			'components/collections/**/*.js',
			'components/collections/**/*.gjs',
			'components/modules/**/*.js',
			'components/modules/**/*.gjs',
			'helpers/**/*.js',
			'modifiers/**/*.js',
			'services/**/*.js'
		]),

		addon.dependencies(),

		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.gjs', '.ts', '.gts']
		}),

		addon.hbs(),

		addon.gjs(),

		addon.keepAssets(['**/*.css']),

		addon.clean(),

		copy({
			targets: [
				{ src: '../README.md', dest: '.' },
				{ src: '../LICENSE.md', dest: '.' }
			]
		})
	]
};
