import path from 'path';
import { fileURLToPath } from 'url';
import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { Addon } from '@embroider/addon-dev/rollup';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');

const addon = new Addon({
	srcDir: 'src',
	destDir: 'dist'
});

export default {
	output: addon.output(),

	plugins: [
		{
			name: 'build-logger',

			buildStart() {
				console.log('[ulx-components rollup]  Build started');
			},

			generateBundle(_, bundle) {
				console.log('[ulx-components rollup] Generated files:');

				for (const file of Object.keys(bundle)) {
					console.log(` - ${file}`);
				}
			},

			buildEnd(error) {
				if (error) {
					console.error('[ulx-components rollup] Build failed:', error);
				} else {
					console.log('[ulx-components rollup] Build completed');
				}
			}
		},
		addon.publicEntrypoints([
			'index.js',
			'instance-initializers/**/*.js',
			'components/**/*.js',
			'components/**/*.gjs',
			'helpers/**/*.js',
			'modifiers/**/*.js',
			'services/**/*.js',
			'utils/**/*.js'
		]),

		addon.appReexports([
			'instance-initializers/**/*.js',
			'components/**/*.js',
			'components/**/*.gjs',
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
				{ src: path.join(repoRoot, 'README.md'), dest: path.join(repoRoot, 'dist') },
				{ src: path.join(repoRoot, 'LICENSE.md'), dest: path.join(repoRoot, 'dist') }
			]
		})
	]
};
