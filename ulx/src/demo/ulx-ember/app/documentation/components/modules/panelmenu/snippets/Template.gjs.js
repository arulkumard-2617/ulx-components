export default `
import Component from '@glimmer/component';
import { UlxBadge, UlxPanelmenu, UlxIcon } from 'ulx-components';

class TemplateItem extends Component {
  get iconMeta() {
    const icon = this.args.item?.icon;
    if (!icon || typeof icon !== "string") return { base: null, name: null, size: null };
    const parts = icon.trim().split(/\\s+/);
    if (parts.length === 0) return { base: null, name: null, size: null };

    const sizeToken = parts[parts.length - 1];
    const hasSize =
      /^s\\d+$/.test(sizeToken) ||
      /^m\\d+$/.test(sizeToken) ||
      /^l\\d+$/.test(sizeToken) ||
      /-size$/.test(sizeToken);

    const base = parts.length > 1 ? parts[0] : null;
    const nameIndex = hasSize ? parts.length - 2 : parts.length - 1;
    const name = nameIndex >= 0 ? parts[nameIndex] : null;
    const size = hasSize ? sizeToken : null;

    return { base, name, size };
  }

  get iconName() {
    return this.iconMeta?.name ?? null;
  }

  get iconClass() {
    return this.iconMeta?.base ?? null;
  }

  get iconSize() {
    return this.iconMeta?.size ?? "s16";
  }

  get hasRightMeta() {
    return Boolean(this.args.item?.badge || this.args.item?.shortcut);
  }

  <template>
    <span class="fxb fvc gp2 w-100p">
      {{#if @hasChildren}}
        <span class="panelmenu-submenu-icon" aria-hidden="true">
          <UlxIcon
            @type="font"
            @iconName={{if @active "down-arrow-icon" "right-arrow-icon"}}
            @componentClass="bs-icons1"
            @size="s16"
          />
        </span>
      {{/if}}

      {{#if this.iconName}}
        <span class="panelmenu-item-icon" aria-hidden="true">
          <UlxIcon
            @type="font"
            @iconName={{this.iconName}}
            @componentClass={{this.iconClass}}
            @size={{this.iconSize}}
          />
        </span>
      {{/if}}

      <span class="panelmenu-item-text">{{@item.label}}</span>

      {{#if this.hasRightMeta}}
        <span class="ifxb fvc gp2 mgl-auto">
          {{#if @item.badge}}
            <UlxBadge @value={{@item.badge}} @type="circle" @variant="primary" @size="s-size" />
          {{/if}}
          {{#if @item.shortcut}}
            <span class="ifxb fvc bg-layer2 bd border-light rds2 pdy1 pdx2 font-size12 fg-text-tertiary">
              {{@item.shortcut}}
            </span>
          {{/if}}
        </span>
      {{/if}}
    </span>
  </template>
}

export default class DemoPanelmenuTemplate extends Component {
  get items() {
    return [
      {
        key: 'mail',
        label: 'Mail',
        icon: 'bs-icons1 email-icon s20',
        badge: 5,
        template: TemplateItem,
        items: [
          { key: 'compose', label: 'Compose', icon: 'bs-icons1 mail-edit-icon s20', shortcut: '⌘+N', template: TemplateItem },
          { key: 'inbox', label: 'Inbox', icon: 'bs-icons1 email-icon-01 s20', badge: 5, template: TemplateItem },
          { key: 'sent', label: 'Sent', icon: 'bs-icons1 send-icon s20', shortcut: '⌘+S', template: TemplateItem },
          { key: 'trash', label: 'Trash', icon: 'bs-icons1 trash-icon s20', shortcut: '⌘+T', template: TemplateItem }
        ]
      },
      {
        key: 'reports',
        label: 'Reports',
        icon: 'bs-icons1 chart-bar-icon s20',
        shortcut: '⌘+R',
        template: TemplateItem,
        items: [
          { key: 'sales', label: 'Sales', icon: 'bs-icons1 chart-line-icon s20', badge: 3, template: TemplateItem },
          { key: 'products', label: 'Products', icon: 'bs-icons1 list-icon s20', badge: 6, template: TemplateItem }
        ]
      },
      {
        key: 'profile',
        label: 'Profile',
        icon: 'bs-icons1 team-member-icon s20',
        shortcut: '⌘+W',
        template: TemplateItem,
        items: [
          { key: 'settings', label: 'Settings', icon: 'bs-icons1 settings-icon-01 s20', shortcut: '⌘+O', template: TemplateItem },
          { key: 'privacy', label: 'Privacy', icon: 'bs-icons1 shield-icon s20', shortcut: '⌘+P', template: TemplateItem }
        ]
      }
    ];
  }

  <template>
    <div class="w-100p md-max-w-640">
      <UlxPanelmenu @model={{this.items}} />
    </div>
  </template>
}
`;

