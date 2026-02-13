export default `
import Component from '@glimmer/component';
import { UlxTabmenu, UlxTag, UlxBadge, UlxAvatar, t } from 'ulx-components';

export default class NamedblocksDemoComponent extends Component {
  get items() {
    return [
      {
        label: t('lbl.overview'),
        avatarLabel: 'OV',
        imageUrl:
          'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
      },
      {
        label: t('lbl.activity'),
        tagLabel: 'NEW',
        tagVariant: 'primary',
      },
      {
        label: t('lbl.team'),
        avatarLabel: 'TM',
        badgeValue: 5,
        badgeVariant: 'success',
      },
      {
        label: t('lbl.settings'),
        avatarLabel: 'ST',
        badgeValue: null,
        badgeVariant: 'secondary',
      },
    ];
  }

  <template>
    <UlxTabmenu @model={{this.items}}>
      <:item as |item|>
        <div class="fxb fvc gp2">
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

`;
