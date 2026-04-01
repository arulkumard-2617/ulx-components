import Component from '@glimmer/component';
import { UlxBadge, UlxIcon } from 'ulx-components';

export default class DemoPanelmenuTemplateItem extends Component {
  get iconMeta() {
    const icon = this.args.item?.icon;
    if (!icon || typeof icon !== 'string')
      return { base: null, name: null, size: null };
    const parts = icon.trim().split(/\s+/);
    if (parts.length === 0) return { base: null, name: null, size: null };

    const sizeToken = parts[parts.length - 1];
    const hasSize =
      /^s\d+$/.test(sizeToken) ||
      /^m\d+$/.test(sizeToken) ||
      /^l\d+$/.test(sizeToken) ||
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
    return this.iconMeta?.size ?? 's20';
  }

  get hasRightMeta() {
    return Boolean(this.args.item?.badge || this.args.item?.shortcut);
  }

  <template>
    <span class="flex items-center gap-2 w-full">
      {{#if @hasChildren}}
        <span class="panelmenu-submenu-icon" aria-hidden="true">
          <UlxIcon
            @type="font"
            @iconName={{if @active "down-arrow-icon" "right-arrow-icon"}}
            @componentClass="bs-icons1"
            @size="s20"
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
        <span class="flex items-center gap-2 ms-auto">
          {{#if @item.badge}}
            <UlxBadge
              @value={{@item.badge}}
              @type="circle"
              @variant="primary"
              @size="s-size"
            />
          {{/if}}
          {{#if @item.shortcut}}
            <span
              class="flex items-center bg-layer2 border border-sight rounded py-1 px-2 text-12 fg-text-tertiary"
            >
              {{@item.shortcut}}
            </span>
          {{/if}}
        </span>
      {{/if}}
    </span>
  </template>
}
