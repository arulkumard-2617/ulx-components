export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxModal,
  UlxButton,
  UlxSlidePane,
  UlxPopup,
  UlxTieredmenu,
  UlxDropdown,
  UlxField,
  tooltip,
  UlxIcon,
  UlxToast,
  UlxMultiSelect
} from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class StackedModalDemo extends Component {
  @tracked showSlidePane = false;
  @tracked showModal = false;
  @tracked showPopup = false;
  @tracked showMenu = false;
  @tracked messages = [];
  @tracked selectedCity = null;
  @tracked selectedCities = [];
  @tracked popupTriggerElement = null;
  @tracked menuTriggerElement = null;
  popupRef = null;

  @action
  openSlidePane() {
    this.showSlidePane = true;
  }

  @action
  closeSlidePane() {
    this.showSlidePane = false;
  }

  @action
  openModal() {
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
    this.showPopup = false;
    this.showMenu = false;
    this.popupTriggerElement = null;
    this.menuTriggerElement = null;
  }

  @action
  setPopupRef(ref) {
    this.popupRef = ref;
  }

  @action
  togglePopup(event) {
    if (this.showPopup) {
      this.popupRef?.hide(event);
      return;
    }
    this.popupTriggerElement = event?.currentTarget ?? this.popupTriggerElement;
    this.showPopup = true;
  }

  @action
  handlePopupHide() {
    this.showPopup = false;
  }

  @action
  openMenu(event) {
    this.menuTriggerElement = event?.currentTarget ?? this.menuTriggerElement;
    this.showMenu = true;
  }

  @action
  handleMenuHide() {
    this.showMenu = false;
  }

  @action
  showToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`stacked-\${Date.now()}\`,
        variant: 'info',
        summary: 'Stacked overlay demo',
        detail: 'Press ESC — this toast closes before the modal.',
        closable: true
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  @action
  handleMenuSelect(item) {
    if (item?.label) this.showMenu = false;
  }

  @action
  setSelectedCity(value) {
    this.selectedCity = value;
  }

  @action
  setSelectedCities(value) {
    this.selectedCities = value;
  }

  get menuItems() {
    return [
      {
        label: 'File',
        icon: 'bs-icons1 pdf-stroke-icon',
        items: [
          {
            label: 'New',
            icon: 'bs-icons1 add-icon-01',
            items: [
              { label: 'Project', icon: 'bs-icons1 library-icon' },
              { label: 'File', icon: 'bs-icons1 pdf-stroke-icon' },
              { separator: true },
              { label: 'From Template', icon: 'bs-icons1 copy-icon' },
            ],
          },
          { label: 'Open', icon: 'bs-icons1 library-icon' },
          { separator: true },
          {
            label: 'Export',
            icon: 'bs-icons1 upload-icon',
            items: [
              { label: 'PDF', icon: 'bs-icons1 pdf-filled-icon' },
              { label: 'Excel', icon: 'bs-icons1 pdf-stroke-icon' },
              { label: 'CSV', icon: 'bs-icons1 pdf-stroke-icon' },
            ],
          },
          { separator: true },
          { label: 'Exit', icon: 'bs-icons1 close-icon-01' },
        ],
      },
      {
        label: 'Edit',
        icon: 'bs-icons1 edit-icon',
        items: [
          { label: 'Undo', icon: 'bs-icons1 undo-icon' },
          { label: 'Redo', icon: 'bs-icons1 update-icon' },
          { separator: true },
          {
            label: 'Find',
            icon: 'bs-icons1 search-icon',
            items: [
              { label: 'Find...', icon: 'bs-icons1 search-icon' },
              { label: 'Find and Replace', icon: 'bs-icons1 user-sync-icon' },
              { label: 'Find in Files', icon: 'bs-icons1 library-icon' },
            ],
          },
        ],
      },
      {
        label: 'View',
        icon: 'bs-icons1 view-icon',
        items: [
          { label: 'Zoom In', icon: 'bs-icons1 zoom-in-stroke-icon' },
          { label: 'Zoom Out', icon: 'bs-icons1 zoom-out-stroke-icon' },
        ],
      },
      { separator: true },
      { label: 'Help', icon: 'bs-icons1 question-icon' },
    ];
  }

  get cities() {
    return CITIES;
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxButton
        @label="Open stacked overlay demo"
        @variant="primary"
        {{on "click" this.openSlidePane}}
      />
    </div>

    <UlxSlidePane
      @visible={{this.showSlidePane}}
      @title="Stacked overlays"
      @onHide={{this.closeSlidePane}}
      @hideFooter={{true}}
    >
      <:body>
        <div class="flex flex-col gap-4">
          <p class="text-13 fg-secondary">
            ESC closes the topmost overlay first. Toasts close before modal or slide pane. Open a toast, then press ESC to see toast close first.
          </p>
          <UlxButton
            @label="Open modal"
            @variant="primary"
            {{on "click" this.openModal}}
          />
        </div>
      </:body>
    </UlxSlidePane>

    <UlxModal
      @visible={{this.showModal}}
      @title="Stacked overlays"
      @onHide={{this.closeModal}}
      @cancelButtonLabel="Close"
      @doneButtonLabel="Close"
      @onDone={{this.closeModal}}
      @onCancel={{this.closeModal}}
      @hideDoneButton={{false}}
      @hideCancelButton={{false}}
    >
      <:body>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-3">
            <UlxButton
              @label="Show toast"
              @variant="secondary"
              @outlined={{true}}
              {{on "click" this.showToast}}
            />
            <UlxButton
              @label="Open popup"
              @variant="secondary"
              @outlined={{true}}
              aria-haspopup="dialog"
              aria-expanded={{this.showPopup}}
              {{on "click" this.togglePopup}}
            />
            <UlxButton
              @label="Open menu"
              @variant="secondary"
              @outlined={{true}}
              aria-haspopup="menu"
              aria-expanded={{this.showMenu}}
              {{on "click" this.openMenu}}
            />
            <div class="ulx-form m-size">
              <UlxField @label="Label Text" @key="stacked-dropdown">
                <:default as |field|>
                  <UlxDropdown
                    @key={{field.key}}
                    @ariaDescribedBy={{field.describedBy}}
                    @ariaErrorMessage={{field.errorId}}
                    @options={{this.cities}}
                    @value={{this.selectedCity}}
                    @onChange={{this.setSelectedCity}}
                    @placeholder="Select a city"
                  />
                </:default>
              </UlxField>
            </div>
            <div class="flex gap-3 align-items-center flex-wrap">
              <UlxIcon
                {{tooltip "Icon Tooltip" position="top"}}
                @componentClass="bs-icons1"
                @type="font"
                @iconName="info-icon-01"
              />
              <UlxButton
                {{tooltip "Tooltip on the right" position="right"}}
                @label="Right"
              />
              <UlxButton {{tooltip "Tooltip on the top" position="top"}} @label="Top" />
              <UlxButton
                {{tooltip "Tooltip on the bottom" position="bottom"}}
                @label="Bottom"
              />
              <UlxButton
                {{tooltip "Tooltip on the left" position="left"}}
                @label="Left"
              />
            </div>
            <div class="ulx-form m-size">
              <UlxField @label="Basic" @fieldId="stacked-multiselect">
                <:default as |field|>
                  <UlxMultiSelect
                    @key={{field.key}}
                    @ariaDescribedBy={{field.describedBy}}
                    @ariaErrorMessage={{field.errorId}}
                    @options={{this.cities}}
                    @value={{this.selectedCities}}
                    @onChange={{this.setSelectedCities}}
                    @showClear={{true}}
                    @placeholder="Select cities"
                  />
                </:default>
              </UlxField>
            </div>
          </div>
        </div>
      </:body>
    </UlxModal>

    <UlxPopup
      @visible={{this.showPopup}}
      @target={{this.popupTriggerElement}}
      @position="position-bottom"
      @size="m-size"
      @dismissable={{true}}
      @closeOnEscape={{true}}
      @ariaLabel="Popup"
      @onHide={{this.handlePopupHide}}
      @registerRef={{this.setPopupRef}}
    >
      <:body>
        <p class="p-4 mb-0">This popup is stacked above the modal. Press ESC to close this first.</p>
      </:body>
    </UlxPopup>

    <UlxTieredmenu
      @model={{this.menuItems}}
      @popup={{true}}
      @visible={{this.showMenu}}
      @target={{this.menuTriggerElement}}
      @onHide={{this.handleMenuHide}}
      @onItemSelect={{this.handleMenuSelect}}
    />

    <UlxToast
      @messages={{this.messages}}
      @onClose={{this.removeMessage}}
      @position="top-center"
    />
  </template>
}

`;
