import { module, test } from 'qunit';
import {
  setupRenderingTest,
  dispatchClick,
  createDeferred,
  createHandledDeferred,
  resolveAndSettle,
  rejectAndSettle,
} from 'test-app/tests/helpers';
import {
  render,
  clearRender,
  click,
  triggerKeyEvent,
  settled,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { modifier } from 'ember-modifier';

const BUTTON = '[data-qa="ulx-button"]';
const LABEL = `${BUTTON} .button-label`;
const INK = `${BUTTON} .ulx-button-ink`;
const LOADING_ICON = `${BUTTON} .ulx-button-loading-icon`;
const SPINNER = '[data-qa="ulx-progressspinner"]';
const RIPPLE_DURATION_MS = 200;

module('Integration | Component | ulx-button', function (hooks) {
  setupRenderingTest(hooks);

  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------
  module('Rendering', function () {
    test('renders a button by default', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);

      assert.dom(BUTTON).exists().hasTagName('button');
    });

    test('renders an anchor when href is supplied', async function (assert) {
      await render(hbs`<UlxButton @label="Docs" @href="#docs" />`);

      assert.dom(BUTTON).exists().hasTagName('a');
    });

    test('renders label', async function (assert) {
      await render(hbs`<UlxButton @label="Save changes" />`);

      assert.dom(LABEL).hasText('Save changes');
    });

    test('renders yielded content', async function (assert) {
      await render(hbs`
        <UlxButton>
          <span data-qa="yielded">Custom content</span>
        </UlxButton>
      `);

      assert.dom('[data-qa="yielded"]').hasText('Custom content');
      assert.dom(LABEL).doesNotExist();
    });

    test('renders default button type', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);

      assert.dom(BUTTON).hasAttribute('type', 'button');
    });

    test('renders custom button type', async function (assert) {
      await render(hbs`<UlxButton @label="Go" @type="submit" />`);

      assert.dom(BUTTON).hasAttribute('type', 'submit');
    });
  });

  // ---------------------------------------------------------------------------
  // CSS Classes
  // ---------------------------------------------------------------------------
  module('CSS Classes', function () {
    test('applies primary variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @variant="primary" />`);

      assert.dom(BUTTON).hasClass('ulx-button').hasClass('primary');
    });

    test('applies secondary variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @variant="secondary" />`);

      assert.dom(BUTTON).hasClass('secondary');
    });

    test('applies success variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @variant="success" />`);

      assert.dom(BUTTON).hasClass('success');
    });

    test('applies info variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @variant="info" />`);

      assert.dom(BUTTON).hasClass('info');
    });

    test('applies warning variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @variant="warning" />`);

      assert.dom(BUTTON).hasClass('warning');
    });

    test('help alias resolves to help-button class', async function (assert) {
      await render(hbs`<UlxButton @label="Help" @variant="help" />`);

      assert.dom(BUTTON).hasClass('help-button');
    });

    test('applies danger variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Delete" @variant="danger" />`);

      assert.dom(BUTTON).hasClass('danger');
    });

    test('applies white variant class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @variant="white" />`);

      assert.dom(BUTTON).hasClass('white');
    });

    test('applies text class', async function (assert) {
      await render(hbs`<UlxButton @label="Text" @text={{true}} />`);

      assert.dom(BUTTON).hasClass('text-button');
    });

    test('applies outlined class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @outlined={{true}} />`);

      assert.dom(BUTTON).hasClass('outlined');
    });

    test('applies pilled class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @pilled={{true}} />`);

      assert.dom(BUTTON).hasClass('pilled');
    });

    test('applies fluid class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @fluid={{true}} />`);

      assert.dom(BUTTON).hasClass('fluid');
    });

    test('applies loading class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @loading={{true}} />`);

      assert.dom(BUTTON).hasClass('loading');
    });

    test('applies disabled class', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @disabled={{true}} />`);

      assert.dom(BUTTON).hasClass('disabled');
    });

    test('applies customClass', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @customClass="extra-class" />`);

      assert.dom(BUTTON).hasClass('extra-class');
    });

    test('applies size classes', async function (assert) {
      await render(hbs`<UlxButton @label="Default size" />`);
      assert.dom(BUTTON).hasClass('m-size');

      await render(hbs`<UlxButton @label="Small" @size="s-size" />`);
      assert.dom(BUTTON).hasClass('s-size');

      await render(hbs`<UlxButton @label="Large" @size="l-size" />`);
      assert.dom(BUTTON).hasClass('l-size');
    });

    test('text link also gets link class when href is set', async function (assert) {
      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @text={{true}} />`,
      );

      assert.dom(BUTTON).hasClass('text-button').hasClass('link');
    });
  });

  // ---------------------------------------------------------------------------
  // Attributes
  // ---------------------------------------------------------------------------
  module('Attributes', function () {
    test('data-qa defaults to ulx-button', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);

      assert.dom('[data-qa="ulx-button"]').exists();
    });

    test('custom data-qa overrides default', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @dataQa="custom-btn" />`);

      assert.dom('[data-qa="custom-btn"]').exists();
      assert.dom('[data-qa="ulx-button"]').doesNotExist();
    });

    test('disabled attribute is set on button', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @disabled={{true}} />`);

      assert.dom(BUTTON).isDisabled();
    });

    test('aria-disabled is set on disabled link', async function (assert) {
      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @disabled={{true}} />`,
      );

      assert.dom(BUTTON).hasAttribute('aria-disabled', 'true');
    });

    test('aria-busy is set while loading', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @loading={{true}} />`);

      assert.dom(BUTTON).hasAttribute('aria-busy', 'true');
    });

    test('tabindex is -1 for disabled links', async function (assert) {
      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @disabled={{true}} />`,
      );

      assert.dom(BUTTON).hasAttribute('tabindex', '-1');
    });

    test('href is applied to the anchor', async function (assert) {
      await render(hbs`<UlxButton @label="Docs" @href="#docs" />`);

      assert.dom(BUTTON).hasAttribute('href', '#docs');
    });

    test('type attribute is applied to the button', async function (assert) {
      await render(hbs`<UlxButton @label="Clear" @type="reset" />`);

      assert.dom(BUTTON).hasAttribute('type', 'reset');
    });
  });

  // ---------------------------------------------------------------------------
  // Click Behaviour
  // ---------------------------------------------------------------------------
  module('Click Behaviour', function () {
    test('click invokes onClick', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(hbs`<UlxButton @label="Save" @onClick={{this.onClick}} />`);
      await click(BUTTON);

      assert.strictEqual(calls, 1);
    });

    test('disabled button does not invoke onClick', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(
        hbs`<UlxButton @label="Save" @disabled={{true}} @onClick={{this.onClick}} />`,
      );

      dispatchClick(this.element.querySelector(BUTTON));

      assert.strictEqual(calls, 0);
    });

    test('loading button does not invoke onClick', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(
        hbs`<UlxButton @label="Save" @loading={{true}} @onClick={{this.onClick}} />`,
      );

      dispatchClick(this.element.querySelector(BUTTON));

      assert.strictEqual(calls, 0);
    });

    test('link with href but no callback allows navigation', async function (assert) {
      await render(hbs`<UlxButton @label="Docs" @href="#docs" />`);

      const event = dispatchClick(this.element.querySelector(BUTTON));

      assert.false(event.defaultPrevented);
    });

    test('link with callback prevents default', async function (assert) {
      this.set('onClick', () => {});

      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @onClick={{this.onClick}} />`,
      );

      const event = dispatchClick(this.element.querySelector(BUTTON));

      assert.true(event.defaultPrevented);
    });

    test('disabled link prevents default', async function (assert) {
      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @disabled={{true}} />`,
      );

      const event = dispatchClick(this.element.querySelector(BUTTON));

      assert.true(event.defaultPrevented);
    });

    test('onClick undefined does not throw', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);

      await click(BUTTON);

      assert.dom(BUTTON).exists();
    });

    test('onClick returns non-promise does not enter loading', async function (assert) {
      this.set('onClick', () => 'done');

      await render(hbs`<UlxButton @label="Save" @onClick={{this.onClick}} />`);
      await click(BUTTON);

      assert.dom(BUTTON).doesNotHaveClass('loading');
      assert.dom(BUTTON).isNotDisabled();
    });

    test('onClick receives MouseEvent', async function (assert) {
      assert.expect(1);

      this.set('onClick', (event) => {
        assert.true(event instanceof MouseEvent);
      });

      await render(hbs`<UlxButton @label="Save" @onClick={{this.onClick}} />`);
      await click(BUTTON);
    });
  });

  // ---------------------------------------------------------------------------
  // Promise Loading
  // ---------------------------------------------------------------------------
  module('Promise Loading', function () {
    test('promise sets loading state with spinner and disabled button', async function (assert) {
      const deferred = createDeferred();
      this.set('onClick', () => deferred.promise);

      await render(
        hbs`<UlxButton @label="Save" @submittingLabel="Saving…" @onClick={{this.onClick}} />`,
      );
      await click(BUTTON);

      assert.dom(BUTTON).hasClass('loading');
      assert.dom(BUTTON).isDisabled();
      assert.dom(LOADING_ICON).exists();
      assert.dom(SPINNER).exists();
      assert.dom(LABEL).hasText('Saving…');

      await resolveAndSettle(deferred);
    });

    test('label restored and loading class removed after promise resolves', async function (assert) {
      const deferred = createDeferred();
      this.set('onClick', () => deferred.promise);

      await render(
        hbs`<UlxButton @label="Save" @submittingLabel="Saving…" @onClick={{this.onClick}} />`,
      );
      await click(BUTTON);

      assert.dom(LABEL).hasText('Saving…');

      await resolveAndSettle(deferred);

      assert.dom(LABEL).hasText('Save');
      assert.dom(BUTTON).doesNotHaveClass('loading');
      assert.dom(BUTTON).isNotDisabled();
      assert.dom(BUTTON).doesNotHaveAttribute('aria-busy');
      assert.dom(LOADING_ICON).doesNotExist();
    });

    test('promise rejection also clears loading', async function (assert) {
      const deferred = createHandledDeferred();
      this.set('onClick', () => deferred.thenable);

      await render(hbs`<UlxButton @label="Save" @onClick={{this.onClick}} />`);
      await click(BUTTON);

      assert.dom(BUTTON).hasClass('loading');

      await rejectAndSettle(deferred, new Error('failed'));

      assert.dom(BUTTON).doesNotHaveClass('loading');
      assert.dom(BUTTON).isNotDisabled();
    });
  });

  // ---------------------------------------------------------------------------
  // Ripple
  // ---------------------------------------------------------------------------
  module('Ripple', function (hooks) {
    hooks.beforeEach(function () {
      this._originalSetTimeout = window.setTimeout;
      this._originalClearTimeout = window.clearTimeout;
      this._rippleCallback = null;
      this._rippleTimerId = 91001;
      this._rippleCleared = false;

      window.setTimeout = (fn, delay, ...args) => {
        if (delay === RIPPLE_DURATION_MS) {
          this._rippleCallback = fn;
          this._rippleCleared = false;
          return this._rippleTimerId;
        }

        return this._originalSetTimeout.call(window, fn, delay, ...args);
      };

      window.clearTimeout = (id) => {
        if (id === this._rippleTimerId) {
          this._rippleCallback = null;
          this._rippleCleared = true;
          return;
        }

        return this._originalClearTimeout.call(window, id);
      };
    });

    hooks.afterEach(function () {
      window.setTimeout = this._originalSetTimeout;
      window.clearTimeout = this._originalClearTimeout;
    });

    test('ripple activates on click', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);
      await click(BUTTON);

      assert.dom(INK).hasClass('ulx-button-ink-active');
    });

    test('ripple styles are calculated', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);
      await click(BUTTON);

      const style = this.element.querySelector(INK).getAttribute('style') || '';

      assert.true(style.includes(`height:${80}px`), 'sets ripple height');
      assert.true(style.includes(`width:${80}px`), 'sets ripple width');
      assert.true(/top:-?\d+(\.\d+)?px/.test(style), 'sets ripple top');
      assert.true(/left:-?\d+(\.\d+)?px/.test(style), 'sets ripple left');
    });

    test('ripple deactivates after timeout', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);
      await click(BUTTON);

      assert.dom(INK).hasClass('ulx-button-ink-active');

      this._rippleCallback?.();
      await settled();

      assert.dom(INK).doesNotHaveClass('ulx-button-ink-active');
    });

    test('disabled button does not create ripple', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @disabled={{true}} />`);

      dispatchClick(this.element.querySelector(BUTTON));
      await settled();

      assert.dom(INK).doesNotHaveClass('ulx-button-ink-active');
      assert.strictEqual(
        this.element.querySelector(INK).getAttribute('style') || '',
        '',
      );
    });
  });

  // ---------------------------------------------------------------------------
  // Keyboard Accessibility (anchor only)
  // ---------------------------------------------------------------------------
  module('Keyboard Accessibility', function () {
    test('Enter activates click', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @onClick={{this.onClick}} />`,
      );
      await triggerKeyEvent(BUTTON, 'keydown', 'Enter');

      assert.strictEqual(calls, 1);
    });

    test('Space activates click', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @onClick={{this.onClick}} />`,
      );
      await triggerKeyEvent(BUTTON, 'keydown', ' ');

      assert.strictEqual(calls, 1);
    });

    test('other keys are ignored', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @onClick={{this.onClick}} />`,
      );
      await triggerKeyEvent(BUTTON, 'keydown', 'Escape');
      await triggerKeyEvent(BUTTON, 'keydown', 'Tab');

      assert.strictEqual(calls, 0);
    });

    test('disabled link ignores keyboard', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(hbs`
        <UlxButton
          @label="Docs"
          @href="#docs"
          @disabled={{true}}
          @onClick={{this.onClick}}
        />
      `);
      await triggerKeyEvent(BUTTON, 'keydown', 'Enter');
      await triggerKeyEvent(BUTTON, 'keydown', ' ');

      assert.strictEqual(calls, 0);
    });
  });

  // ---------------------------------------------------------------------------
  // Yielded Blocks
  // ---------------------------------------------------------------------------
  module('Yielded Blocks', function () {
    test('prefix block renders', async function (assert) {
      await render(hbs`
        <UlxButton @label="Save">
          <:prefix>
            <span data-qa="prefix-slot">Pre</span>
          </:prefix>
        </UlxButton>
      `);

      assert.dom('[data-qa="prefix-slot"]').hasText('Pre');
    });

    test('suffix block renders', async function (assert) {
      await render(hbs`
        <UlxButton @label="Save">
          <:suffix>
            <span data-qa="suffix-slot">Post</span>
          </:suffix>
        </UlxButton>
      `);

      assert.dom('[data-qa="suffix-slot"]').hasText('Post');
    });

    test('default block overrides label', async function (assert) {
      await render(hbs`
        <UlxButton @label="Save">
          <:default>
            <span data-qa="default-slot">Main</span>
          </:default>
        </UlxButton>
      `);

      assert.dom('[data-qa="default-slot"]').hasText('Main');
      assert.dom(LABEL).doesNotExist();
    });

    test('loading spinner is not rendered when prefix block exists', async function (assert) {
      await render(hbs`
        <UlxButton @label="Save" @loading={{true}}>
          <:prefix>
            <span data-qa="custom-prefix">P</span>
          </:prefix>
        </UlxButton>
      `);

      assert.dom('[data-qa="custom-prefix"]').hasText('P');
      assert.dom(LOADING_ICON).doesNotExist();
      assert.dom(SPINNER).doesNotExist();
    });

    test('normal yield still works', async function (assert) {
      await render(hbs`
        <UlxButton>
          <:default>Continue</:default>
        </UlxButton>
      `);

      assert.dom(BUTTON).includesText('Continue');
      assert.dom(LABEL).doesNotExist();
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  module('Accessibility', function () {
    test('button uses native disabled attribute', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @disabled={{true}} />`);

      assert.dom(BUTTON).hasTagName('button').isDisabled();
    });

    test('link uses aria-disabled', async function (assert) {
      await render(
        hbs`<UlxButton @label="Docs" @href="#docs" @disabled={{true}} />`,
      );

      assert.dom(BUTTON).hasTagName('a').hasAttribute('aria-disabled', 'true');
    });

    test('aria-busy during loading', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @loading={{true}} />`);

      assert.dom(BUTTON).hasAttribute('aria-busy', 'true');
    });

    test('loading spinner is aria-hidden', async function (assert) {
      await render(hbs`<UlxButton @label="Save" @loading={{true}} />`);

      assert.dom(LOADING_ICON).hasAttribute('aria-hidden', 'true');
      assert.dom(SPINNER).hasAttribute('aria-hidden', 'true');
    });

    test('ripple span is aria-hidden', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);

      assert
        .dom(INK)
        .exists()
        .hasAttribute('aria-hidden', 'true')
        .hasAttribute('role', 'presentation');
    });
  });

  // ---------------------------------------------------------------------------
  // Element Reference
  // ---------------------------------------------------------------------------
  module('Element Reference', function () {
    test('elementRef modifier is invoked', async function (assert) {
      let captured = null;
      this.set(
        'captureRef',
        modifier((element) => {
          captured = element;
        }),
      );

      await render(
        hbs`<UlxButton @label="Save" @elementRef={{this.captureRef}} />`,
      );

      assert.strictEqual(captured, this.element.querySelector(BUTTON));
    });

    test('dropdownTargetRef fallback works', async function (assert) {
      let captured = null;
      this.set(
        'captureRef',
        modifier((element) => {
          captured = element;
        }),
      );

      await render(
        hbs`<UlxButton @label="Save" @dropdownTargetRef={{this.captureRef}} />`,
      );

      assert.strictEqual(captured, this.element.querySelector(BUTTON));
    });
  });

  // ---------------------------------------------------------------------------
  // Cleanup
  // ---------------------------------------------------------------------------
  module('Cleanup', function (hooks) {
    hooks.beforeEach(function () {
      this._originalSetTimeout = window.setTimeout;
      this._originalClearTimeout = window.clearTimeout;
      this._rippleCallback = null;
      this._rippleTimerId = 92002;
      this._rippleCleared = false;

      window.setTimeout = (fn, delay, ...args) => {
        if (delay === RIPPLE_DURATION_MS) {
          this._rippleCallback = fn;
          this._rippleCleared = false;
          return this._rippleTimerId;
        }

        return this._originalSetTimeout.call(window, fn, delay, ...args);
      };

      window.clearTimeout = (id) => {
        if (id === this._rippleTimerId) {
          this._rippleCallback = null;
          this._rippleCleared = true;
          return;
        }

        return this._originalClearTimeout.call(window, id);
      };
    });

    hooks.afterEach(function () {
      window.setTimeout = this._originalSetTimeout;
      window.clearTimeout = this._originalClearTimeout;
    });

    test('pending ripple timeout is cleared when component is destroyed', async function (assert) {
      await render(hbs`<UlxButton @label="Save" />`);
      await click(BUTTON);

      assert.strictEqual(typeof this._rippleCallback, 'function');
      assert.false(this._rippleCleared);

      await clearRender();

      assert.true(this._rippleCleared);
      assert.strictEqual(this._rippleCallback, null);
    });
  });
});
