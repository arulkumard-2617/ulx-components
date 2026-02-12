export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxTieredmenu, UlxButton, t } from 'ulx-components';

export default class PopupTieredmenuDemo extends Component {
  @tracked isMenuVisible = false;
  @tracked buttonElement = null;
  menuRef = null;

  get items() {
    return [
      {
        label: t('lbl.file'),
        icon: 'bs-icons1 pdf-stroke-icon',
        items: [
          {
            label: t('lbl.new'),
            icon: 'bs-icons1 add-icon-01',
            items: [
              { label: t('lbl.project'), icon: 'bs-icons1 library-icon' },
              { label: t('lbl.file'), icon: 'bs-icons1 pdf-stroke-icon' },
              { label: t('lbl.from.template'), icon: 'bs-icons1 copy-icon' },
            ],
          },
          { label: t('lbl.open'), icon: 'bs-icons1 library-icon' },
          { separator: true },
          { label: t('lbl.exit'), icon: 'bs-icons1 close-icon-01' },
        ],
      },
      {
        label: t('lbl.edit'),
        icon: 'bs-icons1 edit-icon',
        items: [
          { label: t('lbl.undo'), icon: 'bs-icons1 undo-icon' },
          { label: t('lbl.redo'), icon: 'bs-icons1 update-icon' },
        ],
      },
      {
        label: t('lbl.help'),
        icon: 'bs-icons1 question-icon',
        command: () => console.log('Help clicked'),
      },
    ];
  }

  @action
  setMenuRef(componentInstance) {
    this.menuRef = componentInstance;
  }

  @action
  toggleMenu(event) {
    event?.stopPropagation();
    if (this.isMenuVisible) {
      // Close: call handleHide first (via hide()), then visible is set in onHide
      this.menuRef?.hide(event);
    } else {
      this.isMenuVisible = true;
    }
  }

  setButtonRef = modifier((element) => {
    this.buttonElement = element;
    return () => {};
  });

  @action
  hideMenu() {
    console.log('closed');
    // Called by tiered menu when exit animation finishes → set visible false then
    this.isMenuVisible = false;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label={{t "lbl.show"}}
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
        @registerRef={{this.setMenuRef}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
