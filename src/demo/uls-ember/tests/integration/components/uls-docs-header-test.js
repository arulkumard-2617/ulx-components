import { module, test } from 'qunit';
import { setupRenderingTest } from 'uls-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | uls-docs-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UlsDocsHeader />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UlsDocsHeader>
        template block text
      </UlsDocsHeader>
    `);

    assert.dom().hasText('template block text');
  });
});
