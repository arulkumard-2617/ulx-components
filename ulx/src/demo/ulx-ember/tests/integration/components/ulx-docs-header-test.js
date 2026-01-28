import { module, test } from 'qunit';
import { setupRenderingTest } from 'ulx-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ulx-docs-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UlxDocsHeader />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UlxDocsHeader>
        template block text
      </UlxDocsHeader>
    `);

    assert.dom().hasText('template block text');
  });
});
