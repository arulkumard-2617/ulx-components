import Component from '@glimmer/component';
import { UlxTabmenu, UlxTag, UlxBadge, UlxAvatar, t } from 'ulx-components';

export default class NamedblocksDemoComponent extends Component {
  get items() {
    return [
      {
        label: t('lbl.overview'),
        avatarLabel: t('lbl.overview'),
        imageUrl:
          'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      },
      {
        label: t('lbl.activity'),
        tagLabel: t('lbl.new'),
        tagVariant: 'primary',
      },
      {
        label: t('lbl.team'),
        avatarLabel: t('lbl.team'),
        badgeValue: 5,
        badgeVariant: 'success',
      },
      {
        label: t('lbl.settings'),
        avatarLabel: t('lbl.settings'),
        badgeValue: null,
        badgeVariant: 'secondary',
      },
    ];
  }

  <template>
    <UlxTabmenu
      @items={{this.items}}
      @tabId="namedblocks-tabmenu"
      @ariaLabel={{t "lbl.tabmenu.profileNavigation"}}
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
