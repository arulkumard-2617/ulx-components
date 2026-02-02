export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlsTieredmenu, UlxButton } from 'uls-components';

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
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              { label: 'Project', icon: 'pi pi-folder' },
              { label: 'File', icon: 'pi pi-file' },
              { label: 'From Template', icon: 'pi pi-copy' },
            ],
          },
          { label: 'Open', icon: 'pi pi-folder-open' },
          { separator: true },
          { label: 'Exit', icon: 'pi pi-times' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Undo', icon: 'pi pi-undo' },
          { label: 'Redo', icon: 'pi pi-refresh' },
        ],
      },
      {
        label: 'Help',
        icon: 'pi pi-question-circle',
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
      class="pda4 pos-rel"
      {{this.closeOnClickOutside this.isMenuVisible onClose=this.hideMenu}}
    >
      <UlxButton
        @label="Show"
        @severity="primary"
        {{on "click" this.toggleMenu}}
        aria-haspopup="menu"
        aria-expanded={{this.isMenuVisible}}
      />

      <div class="pos-abs t-100 l-0 z-1000 mgt4">
        <UlsTieredmenu
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
