export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPopup, UlxButton, t } from 'ulx-components';

/**
 * Two patterns: open from click / keyboard only, or from pointer hover only (both use
 * \`<:trigger>\` + \`@interactionMode\` + \`@onShow\`).
 */
export default class HoverClickPopupDemo extends Component {
  @tracked isClickPopupVisible = false;
  @tracked isHoverPopupVisible = false;
  clickPopupRef = null;
  hoverPopupRef = null;

  @action
  setClickPopupRef(ref) {
    this.clickPopupRef = ref;
  }

  @action
  setHoverPopupRef(ref) {
    this.hoverPopupRef = ref;
  }

  @action
  handleClickPopupShow() {
    this.isClickPopupVisible = true;
  }

  @action
  handleHoverPopupShow() {
    this.isHoverPopupVisible = true;
  }

  @action
  closeClickPopup() {
    this.clickPopupRef?.hide();
  }

  @action
  closeHoverPopup() {
    this.hoverPopupRef?.hide();
  }

  @action
  handleClickPopupHide() {
    this.isClickPopupVisible = false;
  }

  @action
  handleHoverPopupHide() {
    this.isHoverPopupVisible = false;
  }

  <template>
    <div class="ulx-form m-size flex flex-col gap-10 mb-14">
      <p class="text-13 fg-secondary mb-0">
        Each popup uses \`@interactionMode\` with the trigger named block. Parent
        still owns \`@visible\` and must flip it to true inside \`@onShow\`. Close
        uses outside dismiss, Escape, or footer actions.
      </p>

      <div class="flex flex-col gap-4">
        <div class="text-13 bold-font">Click to open</div>
        <p class="text-13 fg-secondary mb-0">
          \`interactionMode="click"\` toggles open/closed on trigger click or
          Enter / Space when the trigger is focused. Hover does not open this
          example.
        </p>
        <UlxPopup
          @visible={{this.isClickPopupVisible}}
          @interactionMode="click"
          @size="m-size"
          @variant="elevated"
          @dismissable={{true}}
          @closeOnEscape={{true}}
          @ariaLabel="Click to open popup"
          @title="Click to open"
          @onShow={{this.handleClickPopupShow}}
          @onHide={{this.handleClickPopupHide}}
          @registerRef={{this.setClickPopupRef}}
          @cancelButtonLabel={{t "lbl.cancel"}}
          @doneButtonLabel={{t "lbl.save"}}
          @onCancel={{this.closeClickPopup}}
          @onDone={{this.closeClickPopup}}
          @position="position-right"
        >
          <:trigger>
            <UlxButton
              @label="Open with click"
              @variant="secondary"
              aria-haspopup="dialog"
              aria-expanded={{this.isClickPopupVisible}}
            />
          </:trigger>
          <:body>
            <p class="mb-0">Opened via click or keyboard on the trigger only.</p>
          </:body>
        </UlxPopup>
      </div>

      <div class="flex flex-col gap-4">
        <div class="text-13 bold-font">Hover to open</div>
        <p class="text-13 fg-secondary mb-0">
          interactionMode=&quot;hover&quot; opens on pointer hover and closes
          after mouseleave from the trigger (moving into the popup cancels
          briefly so content stays reachable). Trigger click does not toggle
          this popup; you can still dismiss with outside click, Escape, or Done
          / Cancel.
        </p>
        <UlxPopup
          @visible={{this.isHoverPopupVisible}}
          @interactionMode="hover"
          @position="position-right"
          @size="m-size"
          @variant="elevated"
          @dismissable={{true}}
          @closeOnEscape={{true}}
          @ariaLabel="Hover to open popup"
          @title="Hover to open"
          @onShow={{this.handleHoverPopupShow}}
          @onHide={{this.handleHoverPopupHide}}
          @registerRef={{this.setHoverPopupRef}}
          @cancelButtonLabel={{t "lbl.cancel"}}
          @doneButtonLabel={{t "lbl.save"}}
          @onCancel={{this.closeHoverPopup}}
          @onDone={{this.closeHoverPopup}}
        >
          <:trigger>
            <UlxButton
              @label="Hover to open"
              @variant="primary"
              aria-haspopup="dialog"
              aria-expanded={{this.isHoverPopupVisible}}
            />
          </:trigger>
          <:body>
            <p class="mb-0">
              Opens via pointer hover; leaves the trigger to schedule close
              unless the pointer enters the popup within the short bridge delay.
            </p>
          </:body>
        </UlxPopup>
      </div>
    </div>
  </template>
}

`;
