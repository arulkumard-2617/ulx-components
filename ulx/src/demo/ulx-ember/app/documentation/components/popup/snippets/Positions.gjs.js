export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxPopup, UlxButton, t } from 'ulx-components';

const POSITIONS = [
  'position-bottom',
  'position-bottom-left',
  'position-bottom-right',
  'position-bottom-center',
  'position-top',
  'position-top-left',
  'position-top-right',
  'position-top-center',
  'position-left',
  'position-right',
];

export default class PositionsPopupDemo extends Component {
  @tracked isPopupVisible = false;
  @tracked triggerElement = null;
  @tracked activePosition = 'position-bottom';
  popupRef = null;

  get positions() {
    return POSITIONS;
  }

  @action
  setPopupRef(ref) {
    this.popupRef = ref;
  }

  @action
  openPopup(position, event) {
    const target = event?.currentTarget ?? this.triggerElement;
    if (this.isPopupVisible && target === this.triggerElement) {
      this.popupRef?.hide(event);
      return;
    }
    this.triggerElement = target;
    this.activePosition = position;
    this.isPopupVisible = true;
  }

  @action
  togglePopup(event) {
    if (this.isPopupVisible) {
      this.popupRef?.hide(event);
      return;
    }
    this.triggerElement = event?.currentTarget ?? this.triggerElement;
    this.activePosition = 'position-bottom';
    this.isPopupVisible = true;
  }

  @action
  handlePopupHide() {
    this.isPopupVisible = false;
  }

  @action
  handleTriggerKeyDown(position, event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openPopup(position, event);
    }
  }

  <template>
    <div class="flex flex-col gap-6">
      <p class="mb-0">{{"Click a button to open the popup at that position. This demo keeps the popup in the body context so each placement is easy to compare."}}</p>
      <div class="gap-8 flex flex-wrap">
        {{#each this.positions as |position|}}
          <UlxButton
            @label={{position}}
            @variant="secondary"
            @size="s-size"
            aria-haspopup="dialog"
            aria-expanded="{{this.isPopupVisible}}"
            {{on "click" (fn this.openPopup position)}}
            {{on "keydown" (fn this.handleTriggerKeyDown position)}}
          />
        {{/each}}
      </div>

      <UlxPopup
        @visible={{this.isPopupVisible}}
        @target={{this.triggerElement}}
        @context="body"
        @boundary="window"
        @scrollContext="window"
        @position={{this.activePosition}}
        @size="m-size"
        @variant="elevated"
        @dismissable={{true}}
        @closeOnEscape={{true}}
        @ariaLabel="Position"
        @title="Position"
        @onHide={{this.handlePopupHide}}
        @registerRef={{this.setPopupRef}}
        @hideFooter={{true}}
      >
        <:default>
          <div class="flex flex-col gap-2">
            <p class="mb-0">
              <span class="bold-font">{{"Selected:"}}</span>
              {{this.activePosition}}
            </p>
          </div>
        </:default>
      </UlxPopup>
    </div>
  </template>
}

`;
