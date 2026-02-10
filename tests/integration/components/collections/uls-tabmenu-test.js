import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | collections/ulx-tabmenu', function (hooks) {
	setupRenderingTest(hooks);
module('Integration | Component | collections/ulx-tabmenu', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });
	test('it renders', async function (assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<Collections::UlsTabmenu />`);

		assert.dom().hasText('');
		assert.dom().hasText('');

		// Template block usage:
		await render(hbs`
      <Collections::UlsTabmenu>
        template block text
      </Collections::UlxTabmenu>
    `);

		assert.dom().hasText('template block text');
	});
		assert.dom().hasText('template block text');
	});
});
