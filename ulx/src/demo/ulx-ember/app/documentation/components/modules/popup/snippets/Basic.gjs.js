export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxPopup, UlxButton } from 'ulx-components';

export default class BasicPopupDemo extends Component {
  @tracked activeItem = null;
  @tracked isPopupVisible = false;
  @tracked triggerElement = null;
  popupRef = null;

  @action
  setPopupRef(ref) {
    // UlxPopup calls this with the component instance on mount and null on teardown.
    this.popupRef = ref;
  }

  get items() {
    return [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: 'item3' },
    ];
  }

  @action
  handleItemClick(item) {
    this.activeItem = item;
    this.isPopupVisible = false;
  }

  @action
  togglePopup(event) {
    if (this.isPopupVisible) {
      // Close via popup’s internal animation, then @onHide will sync state
      this.popupRef?.hide(event);
      return;
    }

    // Opening: capture target and set visible
    this.triggerElement = event?.currentTarget ?? this.triggerElement;
    this.isPopupVisible = true;
  }

  @action
  handlePopupHide() {
    this.isPopupVisible = false;
  }

  @action
  handleTriggerKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.togglePopup(event);
    }
  }

  @action
  isActive(item) {
    return this.activeItem?.value === item.value;
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label="Show popup"
        @variant="primary"
        aria-haspopup="dialog"
        aria-expanded="{{this.isPopupVisible}}"
        {{on "click" this.togglePopup}}
        {{on "keydown" this.handleTriggerKeyDown}}
      />

      <UlxPopup
        @visible={{this.isPopupVisible}}
        @target={{this.triggerElement}}
        @position="position-bottom"
        @size="m-size"
        @variant="elevated"
        @dismissable={{true}}
        @closable={{true}}
        @closeOnEscape={{true}}
        @ariaLabel="Select an item"
        @onHide={{this.handlePopupHide}}
        @registerRef={{this.setPopupRef}}
      >
        <:default>
          <div class="p-2">
            <p class="mb-2">
              Choose an item from the list below.
            </p>
            <ul>
              {{#each this.items as |item|}}
                <li class="flex flex-col gap-5">
                  <UlxButton
                    @label={{item.label}}
                    @variant={{if (this.isActive item) "primary" "secondary"}}
                    @size="s-size"
                    @customClass="mb-3"
                    aria-pressed={{if (this.isActive item) "true" "false"}}
                    {{on "click" (fn this.handleItemClick item)}}
                  />
                </li>
              {{/each}}
            </ul>
          </div>
        </:default>
      </UlxPopup>
    </div>
  </template>
}

`;
