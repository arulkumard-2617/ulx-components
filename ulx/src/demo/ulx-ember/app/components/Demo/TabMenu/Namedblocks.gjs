import Component from '@glimmer/component';
import { UlxTabmenu, UlxTag, UlxBadge, UlxAvatar, t } from 'ulx-components';

export default class NamedblocksDemoComponent extends Component {
  get items() {
    return [
      {
        label: "Overview",
        avatarLabel: "Overview",
        imageUrl:
          'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      },
      {
        label: "Activity",
        tagLabel: "New",
        tagVariant: 'primary',
      },
      {
        label: "Team",
        avatarLabel: "Team",
        badgeValue: 5,
        badgeVariant: 'success',
      },
      {
        label: "Settings",
        avatarLabel: "Settings",
        badgeValue: null,
        badgeVariant: 'secondary',
      },
    ];
  }

  <template>
    <UlxTabmenu
      @items={{this.items}}
      @tabId="namedblocks-tabmenu"
      @ariaLabel="Profile tab navigation"
    >
      <:item as |item|>
        <div class="flex items-center gap-2">
          {{#if item.imageUrl}}
            <UlxAvatar
              @type="image"
              @image={{item.imageUrl}}
              @imageAlt={{item.avatarLabel}}
              @size="s-size"
              @shape="circle"
            />
          {{/if}}

          <span class="tabmenu-label">{{item.label}}</span>

          {{#if item.tagLabel}}
            <UlxTag
              @value={{item.tagLabel}}
              @variant={{item.tagVariant}}
              @size="xs-size"
            />
          {{/if}}

          {{#if item.badgeValue}}
            <UlxBadge
              @value={{item.badgeValue}}
              @variant={{item.badgeVariant}}
              @size="xs-size"
              @type="circle"
            />
          {{/if}}
        </div>
      </:item>
    </UlxTabmenu>
  </template>
}
