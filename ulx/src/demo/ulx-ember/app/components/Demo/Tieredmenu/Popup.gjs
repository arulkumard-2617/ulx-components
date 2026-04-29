/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxTieredmenu, UlxButton } from 'ulx-components';

export default class PopupTieredmenuDemo extends Component {
  // align="start" menu state
  @tracked isStartMenuVisible = false;
  @tracked startButtonElement = null;
  startMenuRef = null;

  // align="end" menu state
  @tracked isEndMenuVisible = false;
  @tracked endButtonElement = null;
  endMenuRef = null;

  get items() {
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
              { label: 'From Template', icon: 'bs-icons1 copy-icon' },
            ],
          },
          { label: 'Open', icon: 'bs-icons1 library-icon' },
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
        ],
      },
      {
        label: 'Help',
        icon: 'bs-icons1 question-icon',
        command: () => console.log('Help clicked'),
      },
    ];
  }

  // --- align="start" handlers ---
  @action
  setStartMenuRef(componentInstance) {
    this.startMenuRef = componentInstance;
  }

  @action
  toggleStartMenu(event) {
    event?.stopPropagation();
    if (this.isStartMenuVisible) {
      this.startMenuRef?.hide(event);
    } else {
      this.isStartMenuVisible = true;
      this.startMenuRef?.show?.(event);
    }
  }

  setStartButtonRef = modifier((element) => {
    this.startButtonElement = element;
    return () => {};
  });

  @action
  hideStartMenu() {
    this.isStartMenuVisible = false;
  }

  // --- align="end" handlers ---
  @action
  setEndMenuRef(componentInstance) {
    this.endMenuRef = componentInstance;
  }

  @action
  toggleEndMenu(event) {
    event?.stopPropagation();
    if (this.isEndMenuVisible) {
      this.endMenuRef?.hide(event);
    } else {
      this.isEndMenuVisible = true;
      this.endMenuRef?.show?.(event);
    }
  }

  setEndButtonRef = modifier((element) => {
    this.endButtonElement = element;
    return () => {};
  });

  @action
  hideEndMenu() {
    this.isEndMenuVisible = false;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="flex gap-10 flex-wrap">
      <div>
        <UlxButton
          @label="Align Start"
          @variant="primary"
          {{on "click" this.toggleStartMenu}}
          {{this.setStartButtonRef}}
          aria-haspopup="menu"
          aria-expanded={{this.isStartMenuVisible}}
          aria-controls="tieredmenu-popup-start"
        />
        <UlxTieredmenu
          id="tieredmenu-popup-start"
          @items={{this.items}}
          @popup={{true}}
          @visible={{this.isStartMenuVisible}}
          @align="start"
          @target={{this.startButtonElement}}
          @onHide={{this.hideStartMenu}}
          @registerRef={{this.setStartMenuRef}}
          @onItemSelect={{this.handleItemSelect}}
        />
      </div>

      <div>
        <UlxButton
          @label="Align End"
          @variant="primary"
          {{on "click" this.toggleEndMenu}}
          {{this.setEndButtonRef}}
          aria-haspopup="menu"
          aria-expanded={{this.isEndMenuVisible}}
          aria-controls="tieredmenu-popup-end"
        />
        <UlxTieredmenu
          id="tieredmenu-popup-end"
          @items={{this.items}}
          @popup={{true}}
          @visible={{this.isEndMenuVisible}}
          @align="end"
          @target={{this.endButtonElement}}
          @onHide={{this.hideEndMenu}}
          @registerRef={{this.setEndMenuRef}}
          @onItemSelect={{this.handleItemSelect}}
        />
      </div>
    </div>
  </template>
}
