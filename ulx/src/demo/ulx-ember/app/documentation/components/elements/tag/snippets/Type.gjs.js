export default `
import Component from '@glimmer/component';
import { UlxTag, t } from 'ulx-components';

export default class TypeDemoComponent extends Component {
  get types() {
    return [
      { label: t('lbl.filled.default'), type: undefined },
      { label: t('lbl.outline'), type: 'outline' },
      { label: t('lbl.pill'), type: 'pill' },
    ];
  }

  <template>
    <div class="fxb wrap gp4">
      {{#each this.types key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="m-size"
          @variant="primary"
          @type={{item.type}}
        />
      {{/each}}
    </div>
  </template>
}

`;
