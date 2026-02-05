export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTieredmenu } from 'ulx-components';

// Custom item renderer using tieredmenu-item-link for proper styling
const ItemRenderer = <template>
  <button
    type="button"
    class="tieredmenu-item-link"
    role="menuitem"
    {{on "click" @onClick}}
  >
    {{#if @item.icon}}
      <span
        class="tieredmenu-item-icon {{@item.icon}}"
        aria-hidden="true"
      ></span>
    {{/if}}
    <span class="tieredmenu-item-label">{{@item.label}}</span>
    {{#if @item.badge}}
      <span class="uls-badge info mgl-auto">{{@item.badge}}</span>
    {{/if}}
    {{#if @item.shortcut}}
      <span
        class="mgl-auto bd pdh2 pdv1 font-size12 bg-layer1 rds2 fg-text-secondary"
      >{{@item.shortcut}}</span>
    {{/if}}
  </button>
</template>;

export default class TemplateTieredmenuDemo extends Component {
  itemRenderer = ItemRenderer;

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
              {
                label: 'Document',
                icon: 'bs-icons1 pdf-stroke-icon',
                shortcut: '⌘+N',
                template: this.itemRenderer,
              },
              {
                label: 'Image',
                icon: 'bs-icons1 image-stroke-icon',
                shortcut: '⌘+I',
                template: this.itemRenderer,
              },
              {
                label: 'Video',
                icon: 'bs-icons1 video-stroke-icon',
                shortcut: '⌘+L',
                template: this.itemRenderer,
              },
            ],
          },
          {
            label: 'Open',
            icon: 'bs-icons1 library-icon',
            shortcut: '⌘+O',
            template: this.itemRenderer,
          },
          {
            label: 'Print',
            icon: 'bs-icons1 print-icon',
            shortcut: '⌘+P',
            template: this.itemRenderer,
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'bs-icons1 edit-icon',
        items: [
          {
            label: 'Copy',
            icon: 'bs-icons1 copy-icon',
            shortcut: '⌘+C',
            template: this.itemRenderer,
          },
          {
            label: 'Delete',
            icon: 'bs-icons1 close-icon-01',
            shortcut: '⌘+D',
            template: this.itemRenderer,
          },
        ],
      },
      {
        label: 'Search',
        icon: 'bs-icons1 search-icon',
        shortcut: '⌘+S',
        template: this.itemRenderer,
      },
      {
        separator: true,
      },
      {
        label: 'Share',
        icon: 'bs-icons1 share-icon',
        items: [
          {
            label: 'Slack',
            icon: 'bs-icons1 chat-icon',
            badge: 2,
            template: this.itemRenderer,
          },
          {
            label: 'Whatsapp',
            icon: 'bs-icons1 whatsapp-icon',
            badge: 3,
            template: this.itemRenderer,
          },
        ],
      },
    ];
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
