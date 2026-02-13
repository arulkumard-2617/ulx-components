export default `
import Component from '@glimmer/component';
import { UlxTag, t } from 'ulx-components';

export default class SizeDemoComponent extends Component {
  get sizes() {
    return [
      { label: t('lbl.extra.small'), size: 'xs-size' },
      { label: t('lbl.small'), size: 's-size' },
      { label: t('lbl.medium'), size: 'm-size' },
      { label: t('lbl.large'), size: 'l-size' },
      { label: t('lbl.extra.large'), size: 'xl-size' },
    ];
  }

  <template>
    <div class="fxb wrap gp4 fvc">
      {{#each this.sizes key="size" as |item|}}
        <UlxTag @value={{item.label}} @size={{item.size}} @variant="primary" />
      {{/each}}
    </div>
  </template>
}

`;
