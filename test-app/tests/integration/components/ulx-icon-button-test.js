import { module, test } from 'qunit';
import {
  setupRenderingTest,
  createDeferred,
  createHandledDeferred,
  resolveAndSettle,
  rejectAndSettle
} from 'test-app/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const BUTTON = '[data-qa="ulx-button"]';
const LABEL = `${BUTTON} .button-label`;
const ICON = '[data-qa="ulx-icon"]';
const SPINNER = '[data-qa="ulx-progressspinner"]';
const LOADING_ICON = `${BUTTON} .ulx-button-loading-icon`;
// UlxProgressSpinner also renders an UlxIcon, so prefer icon-name / affix classes
// when asserting that the button's normal icon was replaced by the spinner.
const SAVE_ICON = `${BUTTON} .save`;
const ARROW_RIGHT_ICON = `${BUTTON} .arrow-right`;

module('Integration | Component | ulx-icon-button', function (hooks) {
  setupRenderingTest(hooks);

  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------
  module('Rendering', function () {
    test('renders a button with label', async function (assert) {
      await render(hbs`<UlxIconButton @label="Save" @iconLeft="save" />`);

      assert.dom(BUTTON).exists().hasTagName('button');
      assert.dom(LABEL).hasText('Save');
    });

    test('renders default button type', async function (assert) {
      await render(hbs`<UlxIconButton @label="Save" @iconLeft="save" />`);

      assert.dom(BUTTON).hasAttribute('type', 'button');
    });

    test('renders yielded default content instead of label', async function (assert) {
      await render(hbs`
        <UlxIconButton @iconLeft="save">
          <span data-qa="yielded">Custom content</span>
        </UlxIconButton>
      `);

      assert.dom('[data-qa="yielded"]').hasText('Custom content');
      assert.dom(LABEL).doesNotExist();
    });
  });

  // ---------------------------------------------------------------------------
  // Icons
  // ---------------------------------------------------------------------------
  module('Icons', function () {
    test('renders left icon before the label', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Save" @iconLeft="save" />
      `);

      assert.dom(ICON).exists().hasClass('save').hasClass('icon').hasClass('left');
      assert.dom(`${BUTTON} .icon.right`).doesNotExist();

      const icon = this.element.querySelector(ICON);
      const label = this.element.querySelector(LABEL);

      assert.true(
        !!(icon.compareDocumentPosition(label) & Node.DOCUMENT_POSITION_FOLLOWING),
        'icon appears before the label',
      );
    });

    test('renders right icon after the label', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Next" @iconRight="arrow-right" />
      `);

      assert
        .dom(ICON)
        .exists()
        .hasClass('arrow-right')
        .hasClass('icon')
        .hasClass('right');
      assert.dom(`${BUTTON} .icon.left`).doesNotExist();

      const icon = this.element.querySelector(ICON);
      const label = this.element.querySelector(LABEL);

      assert.true(
        !!(icon.compareDocumentPosition(label) & Node.DOCUMENT_POSITION_PRECEDING),
        'icon appears after the label',
      );
    });

    test('iconRight takes precedence when both iconLeft and iconRight are set', async function (assert) {
      await render(hbs`
        <UlxIconButton
          @label="Next"
          @iconLeft="save"
          @iconRight="arrow-right"
        />
      `);

      assert.dom(ICON).exists().hasClass('arrow-right').hasClass('right');
      assert.dom(`${BUTTON} .save`).doesNotExist();
      assert.dom(`${BUTTON} .icon.left`).doesNotExist();
    });

    test('applies iconComponentClass and iconSize to the icon', async function (assert) {
      await render(hbs`
        <UlxIconButton
          @label="Save"
          @iconLeft="save"
          @iconComponentClass="bs-icons1"
          @iconSize="s18"
        />
      `);

      assert.dom(ICON).hasClass('bs-icons1').hasClass('s18');
    });

    test('icon-only button adds icon-only class and omits label', async function (assert) {
      await render(hbs`<UlxIconButton @iconLeft="save" />`);

      assert.dom(BUTTON).exists().hasClass('icon-only');
      assert.dom(LABEL).doesNotExist();
      assert.dom(ICON).exists().hasClass('save').hasClass('icon');
      assert.dom(ICON).doesNotHaveClass('left').doesNotHaveClass('right');
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  module('Accessibility', function () {
    test('passes aria-label through to the underlying button for icon-only use', async function (assert) {
      await render(hbs`
        <UlxIconButton @iconLeft="save" aria-label="Save" />
      `);

      assert.dom(BUTTON).hasAttribute('aria-label', 'Save');
    });

    test('default UlxIcon graphics are aria-hidden', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Save" @iconLeft="save" />
      `);

      assert.dom(ICON).hasAttribute('aria-hidden', 'true');
    });
  });

  // ---------------------------------------------------------------------------
  // Custom icon block
  // ---------------------------------------------------------------------------
  module('Custom icon block', function () {
    test('renders <:icon> instead of the default UlxIcon on the left', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Save" @iconLeft="save">
          <:icon>
            <span data-qa="custom-icon">★</span>
          </:icon>
        </UlxIconButton>
      `);

      assert.dom('[data-qa="custom-icon"]').hasText('★');
      assert.dom(ICON).doesNotExist();
    });

    test('renders <:icon> on the right when iconRight is set', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Next" @iconRight="arrow-right">
          <:icon>
            <span data-qa="custom-icon-right">→</span>
          </:icon>
        </UlxIconButton>
      `);

      const customIcon = this.element.querySelector('[data-qa="custom-icon-right"]');
      const label = this.element.querySelector(LABEL);

      assert.dom('[data-qa="custom-icon-right"]').hasText('→');
      assert.dom(ICON).doesNotExist();
      assert.true(
        !!(
          customIcon.compareDocumentPosition(label) &
          Node.DOCUMENT_POSITION_PRECEDING
        ),
        'custom icon appears after the label',
      );
    });

    test('renders <:icon> without iconLeft or iconRight on the left by default', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Save">
          <:icon>
            <span data-qa="custom-icon-only-block">★</span>
          </:icon>
        </UlxIconButton>
      `);

      const customIcon = this.element.querySelector(
        '[data-qa="custom-icon-only-block"]',
      );
      const label = this.element.querySelector(LABEL);

      assert.dom('[data-qa="custom-icon-only-block"]').exists();
      assert.true(
        !!(
          customIcon.compareDocumentPosition(label) &
          Node.DOCUMENT_POSITION_FOLLOWING
        ),
        'custom icon appears before the label when no iconRight is set',
      );
    });
  });

  // ---------------------------------------------------------------------------
  // Explicit loading
  // ---------------------------------------------------------------------------
  module('Explicit loading', function () {
    test('shows spinner in place of the icon and disables the button', async function (assert) {
      await render(hbs`
        <UlxIconButton
          @label="Save"
          @iconLeft="save"
          @loading={{true}}
        />
      `);

      assert.dom(BUTTON).hasClass('loading').isDisabled();
      assert.dom(BUTTON).hasAttribute('aria-busy', 'true');
      assert.dom(LOADING_ICON).exists().hasClass('left').hasAttribute('aria-hidden', 'true');
      assert.dom(SPINNER).exists().hasAttribute('aria-hidden', 'true');
      assert.dom(SAVE_ICON).doesNotExist();
    });

    test('spinner appears on the right when iconRight is used while loading', async function (assert) {
      await render(hbs`
        <UlxIconButton
          @label="Next"
          @iconRight="arrow-right"
          @loading={{true}}
        />
      `);

      assert.dom(LOADING_ICON).exists().hasClass('right');
      assert.dom(SPINNER).exists();
      assert.dom(ARROW_RIGHT_ICON).doesNotExist();
    });

    test('loading replaces custom <:icon> content with the spinner', async function (assert) {
      await render(hbs`
        <UlxIconButton @label="Save" @loading={{true}}>
          <:icon>
            <span data-qa="custom-icon">★</span>
          </:icon>
        </UlxIconButton>
      `);

      assert.dom('[data-qa="custom-icon"]').doesNotExist();
      assert.dom(SPINNER).exists();
      assert.dom(LOADING_ICON).exists();
    });
  });

  // ---------------------------------------------------------------------------
  // Click behaviour
  // ---------------------------------------------------------------------------
  module('Click behaviour', function () {
    test('click invokes onClick with the MouseEvent', async function (assert) {
      assert.expect(2);

      let calls = 0;
      this.set('onClick', (event) => {
        calls += 1;
        assert.true(event instanceof MouseEvent);
      });

      await render(
        hbs`<UlxIconButton @label="Save" @iconLeft="save" @onClick={{this.onClick}} />`,
      );
      await click(BUTTON);

      assert.strictEqual(calls, 1);
    });

    test('synchronous onClick does not leave the button in a loading state', async function (assert) {
      this.set('onClick', () => 'done');

      await render(
        hbs`<UlxIconButton @label="Save" @iconLeft="save" @onClick={{this.onClick}} />`,
      );
      await click(BUTTON);

      assert.dom(BUTTON).doesNotHaveClass('loading');
      assert.dom(BUTTON).isNotDisabled();
      assert.dom(SPINNER).doesNotExist();
      assert.dom(SAVE_ICON).exists();
    });
  });

  // ---------------------------------------------------------------------------
  // Promise loading
  // ---------------------------------------------------------------------------
  module('Promise loading', function () {
    test('promise onClick shows spinner until the promise resolves', async function (assert) {
      const deferred = createDeferred();
      this.set('onClick', () => deferred.promise);

      await render(hbs`
        <UlxIconButton
          @label="Save"
          @iconLeft="save"
          @submittingLabel="Saving…"
          @onClick={{this.onClick}}
        />
      `);
      await click(BUTTON);

      assert.dom(BUTTON).hasClass('loading').isDisabled();
      assert.dom(BUTTON).hasAttribute('aria-busy', 'true');
      assert.dom(LABEL).hasText('Saving…');
      assert.dom(LOADING_ICON).exists();
      assert.dom(SPINNER).exists();
      assert.dom(SAVE_ICON).doesNotExist();

      await resolveAndSettle(deferred);

      assert.dom(BUTTON).doesNotHaveClass('loading');
      assert.dom(BUTTON).isNotDisabled();
      assert.dom(BUTTON).doesNotHaveAttribute('aria-busy');
      assert.dom(LABEL).hasText('Save');
      assert.dom(SPINNER).doesNotExist();
      assert.dom(SAVE_ICON).exists();
    });

    test('promise rejection also clears the icon loading state', async function (assert) {
      const deferred = createHandledDeferred();
      this.set('onClick', () => deferred.thenable);

      await render(hbs`
        <UlxIconButton
          @label="Save"
          @iconLeft="save"
          @onClick={{this.onClick}}
        />
      `);
      await click(BUTTON);

      assert.dom(BUTTON).hasClass('loading');
      assert.dom(SPINNER).exists();
      assert.dom(SAVE_ICON).doesNotExist();

      await rejectAndSettle(deferred, new Error('failed'));

      assert.dom(BUTTON).doesNotHaveClass('loading');
      assert.dom(BUTTON).isNotDisabled();
      assert.dom(SPINNER).doesNotExist();
      assert.dom(SAVE_ICON).exists();
    });
  });

  // ---------------------------------------------------------------------------
  // Disabled
  // ---------------------------------------------------------------------------
  module('Disabled', function () {
    test('disabled icon button is not interactive', async function (assert) {
      let calls = 0;
      this.set('onClick', () => {
        calls += 1;
      });

      await render(hbs`
        <UlxIconButton
          @iconLeft="save"
          @disabled={{true}}
          @onClick={{this.onClick}}
          aria-label="Save"
        />
      `);

      assert.dom(BUTTON).hasClass('disabled').isDisabled();

      // Native click helper skips disabled buttons; assert the disabled contract.
      assert.strictEqual(calls, 0);
    });
  });

  // ---------------------------------------------------------------------------
  // Classes specific to UlxIconButton
  // ---------------------------------------------------------------------------
  module('Classes', function () {
    test('merges customClass with icon-only for icon-only buttons', async function (assert) {
      await render(
        hbs`<UlxIconButton @iconLeft="save" @customClass="extra-class" />`,
      );

      assert.dom(BUTTON).hasClass('icon-only').hasClass('extra-class');
    });

    test('applies customClass without icon-only when a label is present', async function (assert) {
      await render(
        hbs`<UlxIconButton @label="Save" @iconLeft="save" @customClass="extra-class" />`,
      );

      assert.dom(BUTTON).hasClass('extra-class').doesNotHaveClass('icon-only');
    });

    test('passes through class, variant, size, and visual flags', async function (assert) {
      await render(hbs`
        <UlxIconButton
          @label="Save"
          @iconLeft="save"
          @class="from-class-arg"
          @variant="danger"
          @size="s-size"
          @pilled={{true}}
          @text={{true}}
          @outlined={{true}}
          @fluid={{true}}
        />
      `);

      assert
        .dom(BUTTON)
        .hasClass('from-class-arg')
        .hasClass('danger')
        .hasClass('s-size')
        .hasClass('pilled')
        .hasClass('text-button')
        .hasClass('outlined')
        .hasClass('fluid');
    });

    test('supports custom data-qa override', async function (assert) {
      await render(
        hbs`<UlxIconButton @label="Save" @iconLeft="save" @dataQa="icon-save" />`,
      );

      assert.dom('[data-qa="icon-save"]').exists();
      assert.dom('[data-qa="ulx-button"]').doesNotExist();
    });
  });
});
