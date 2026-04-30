import { module, test } from 'qunit';
import { setupRenderingTest } from 'ulx-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import i18n from 'ulx-components/utils/i18n';

module('Integration | i18n delegation', function (hooks) {
  setupRenderingTest(hooks);

  let originalT;

  hooks.beforeEach(function () {
    originalT = i18n.t;
  });

  hooks.afterEach(function () {
    i18n.t = originalT;
  });

  test('UlxChip resolves labels through i18n.t()', async function (assert) {
    const calledKeys = [];
    i18n.t = (key) => {
      calledKeys.push(key);
      return key === 'label.remove' ? 'Host Remove' : key;
    };

    await render(hbs`<UlxChip @label="Docs" @removable={{true}} />`);

    assert.dom('[data-qa="ulx-chip-remove"]').hasAttribute('aria-label', 'Host Remove');
    assert.true(calledKeys.includes('label.remove'));
  });

  test('template {{t}} resolves with host override', async function (assert) {
    i18n.t = (key) => (key === 'label.save' ? 'Host Save' : key);

    await render(hbs`<span data-test-translation>{{t "label.save"}}</span>`);

    assert.dom('[data-test-translation]').hasText('Host Save');
  });
});
