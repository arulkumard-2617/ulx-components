import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlsTieredmenu } from 'uls-components';

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
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Document',
                icon: 'pi pi-file',
                shortcut: '⌘+N',
                template: this.itemRenderer,
              },
              {
                label: 'Image',
                icon: 'pi pi-image',
                shortcut: '⌘+I',
                template: this.itemRenderer,
              },
              {
                label: 'Video',
                icon: 'pi pi-video',
                shortcut: '⌘+L',
                template: this.itemRenderer,
              },
            ],
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open',
            shortcut: '⌘+O',
            template: this.itemRenderer,
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            shortcut: '⌘+P',
            template: this.itemRenderer,
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
          {
            label: 'Copy',
            icon: 'pi pi-copy',
            shortcut: '⌘+C',
            template: this.itemRenderer,
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            shortcut: '⌘+D',
            template: this.itemRenderer,
          },
        ],
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S',
        template: this.itemRenderer,
      },
      {
        separator: true,
      },
      {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
          {
            label: 'Slack',
            icon: 'pi pi-slack',
            badge: 2,
            template: this.itemRenderer,
          },
          {
            label: 'Whatsapp',
            icon: 'pi pi-whatsapp',
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
      <UlsTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}
