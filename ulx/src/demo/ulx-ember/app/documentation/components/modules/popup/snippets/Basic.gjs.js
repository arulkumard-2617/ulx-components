export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxPopup, UlxButton, UlxIcon } from 'ulx-components';

export default class BasicPopupDemo extends Component {
  @tracked isPopupVisible = false;
  @tracked triggerElement = null;
  popupRef = null;

  @action
  setPopupRef(ref) {
    this.popupRef = ref;
  }

  @action
  togglePopup(event) {
    if (this.isPopupVisible) {
      this.popupRef?.hide(event);
      return;
    }

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

  <template>
    <div class="">
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
        @size="xl-size"
        @variant="elevated"
        @dismissable={{true}}
        @closeOnEscape={{true}}
        @ariaLabel="Select an item"
        @onHide={{this.handlePopupHide}}
        @registerRef={{this.setPopupRef}}
        @bodyClassName="p-0"
      >
        <:head>
          <div class="flex items-center gap-2">
            <UlxIcon
              @type="font"
              @size="m-size"
              @iconName="generate-icon"
              @customClass="primary-layer bg-primaryLayer1 rounded"
              aria-hidden="true"
            />
            <div class="flex flex-col">
              <span class="h5">Generate from Scratch</span>
            </div>
          </div>
        </:head>

        <:body>
          <div class="p-4">
            <p class="mb-5">Hey there, warm greetings!</p>
            <p class="mb-6">
              We invite you to the Zylker Summit 2027. We expect yourpresence to
              make this event a grand success.
            </p>
          </div>
          <p class="mb-0 px-5 py-2 bg-primaryLayer1 text-11">
            AI responses may not always be accurate. Please verify important
            information.
            <UlxButton
              @label="More Info"
              @variant="link"
              @size="compact"
              @customClass="text-12 bold-font ms-1"
            />
          </p>
        </:body>

        <:footer>
          <div class="flex justify-between items-center w-full">
            <span class="fg-muted">560/10000</span>
            <div class="flex gap-2">
              <UlxButton
                @icon="update-icon"
                @label="Regenerate"
                @variant="link"
                @size="s-size"
              />
              <UlxButton
                @icon="copy-icon"
                @label="Copy"
                @variant="link"
                @size="s-size"
              />

              <UlxButton
                @label="Insert"
                @icon="ls-arrow-icon"
                @iconPos="right"
                @variant="primary"
                @size="s-size"
                {{on "click" this.togglePopup}}
              />
            </div>
          </div>
        </:footer>
      </UlxPopup>
    </div>
  </template>
}

`;
