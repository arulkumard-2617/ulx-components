export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxTieredmenu, UlxButton } from 'ulx-components';

export default class PopupTieredmenuDemo extends Component {
  @tracked isMenuVisible = false;
  @tracked buttonElement = null;

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

  setButtonRef = modifier((element) => {
    this.buttonElement = element;
    return () => {
      // Cleanup if needed
    };
  });

  @action
  toggleMenu(event) {
    event.stopPropagation();
    this.isMenuVisible = !this.isMenuVisible;
  }

  @action
  hideMenu() {
    this.isMenuVisible = false;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label="Show Menu"
        @variant="primary"
        {{on "click" this.toggleMenu}}
        {{this.setButtonRef}}
        aria-haspopup="menu"
        aria-expanded={{this.isMenuVisible}}
        aria-controls="tieredmenu-popup"
      />

      <UlxTieredmenu
        id="tieredmenu-popup"
        @model={{this.items}}
        @popup={{true}}
        @visible={{this.isMenuVisible}}
        @target={{this.buttonElement}}
        @onHide={{this.hideMenu}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
