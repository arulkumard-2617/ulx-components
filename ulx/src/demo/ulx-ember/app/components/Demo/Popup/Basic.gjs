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
  openPopup(event) {
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
      this.openPopup(event);
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
        aria-expanded={{if this.isPopupVisible "true" "false"}}
        {{on "click" this.openPopup}}
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
      >
        <:default>
          <div class="pd2">
            <p class="mgb2">
              Choose an item from the list below.
            </p>
            <ul>
              {{#each this.items as |item|}}
                <li class="fxb fcol gp5">
                  <UlxButton
                    @label={{item.label}}
                    @variant={{if (this.isActive item) "primary" "secondary"}}
                    @size="s-size"
                    @customClass="mgb3"
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
