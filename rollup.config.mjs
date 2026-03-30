import path from 'path';
import { fileURLToPath } from 'url';
import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { Addon } from '@embroider/addon-dev/rollup';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  output: addon.output(),

  plugins: [
    addon.publicEntrypoints([
      'index.js',
      'instance-initializers/**/*.js',
			'components/**/*.js',
      'components/**/*.gjs',
      'helpers/**/*.js',
      'modifiers/**/*.js',
      'services/**/*.js',
      'utils/**/*.js',
    ]),

    addon.appReexports([
      'instance-initializers/**/*.js',
			'components/**/*.js',
      'components/**/*.gjs',
      'helpers/**/*.js',
      'modifiers/**/*.js',
      'services/**/*.js',
    ]),

    addon.dependencies(),

    // Resolve ember-sortable so it gets bundled (addon.dependencies doesn't externalize devDeps)
    {
      name: 'resolve-ember-sortable',
      resolveId(source) {
        if (source === 'ember-sortable/modifiers/sortable-group') {
          return path.resolve(
            __dirname,
            'node_modules/ember-sortable/dist/modifiers/sortable-group.js'
          );
        }
        if (source === 'ember-sortable/modifiers/sortable-item') {
          return path.resolve(
            __dirname,
            'node_modules/ember-sortable/dist/modifiers/sortable-item.js'
          );
        }
        if (source === 'ember-sortable/modifiers/sortable-handle') {
          return path.resolve(
            __dirname,
            'node_modules/ember-sortable/dist/modifiers/sortable-handle.js'
          );
        }
        return null;
      }
    },

    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.gjs', '.ts', '.gts'],
    }),

    addon.hbs(),

    addon.gjs(),

    addon.keepAssets(['**/*.css']),

    addon.clean(),

    copy({
      targets: [
        { src: '../README.md', dest: '.' },
        { src: '../LICENSE.md', dest: '.' },
      ],
    }),
  ],
};
