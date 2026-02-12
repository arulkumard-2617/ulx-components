export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxTieredmenu, UlxButton, t } from 'ulx-components';

export default class PopupTieredmenuDemo extends Component {
  @tracked isMenuVisible = false;

  /** Close menu when click is outside the wrapper (PrimeReact-style). */
  closeOnClickOutside = modifier((element, [when], { onClose }) => {
    let listener = null;
    if (when && typeof onClose === 'function') {
      const handler = (e) => {
        if (!element.contains(e.target)) {
          onClose();
        }
      };
      const add = () => {
        listener = handler;
        document.addEventListener('click', listener, true);
      };
      setTimeout(add, 0);
    }
    return () => {
      if (listener) {
        document.removeEventListener('click', listener, true);
      }
    };
  });

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
    <div
      class="pda4 relative"
      {{this.closeOnClickOutside this.isMenuVisible onClose=this.hideMenu}}
    >
      <UlxButton
        @label={{t "lbl.show"}}
        @variant="primary"
        {{on "click" this.toggleMenu}}
        aria-haspopup="menu"
        aria-expanded={{this.isMenuVisible}}
      />

      <div class="absolute tpfull lt0 z-1000 mgt2">
        <UlxTieredmenu
          @model={{this.items}}
          @popup={{true}}
          @visible={{this.isMenuVisible}}
          @onHide={{this.hideMenu}}
          @onItemSelect={{this.handleItemSelect}}
        />
      </div>
    </div>
  </template>
}

`;
