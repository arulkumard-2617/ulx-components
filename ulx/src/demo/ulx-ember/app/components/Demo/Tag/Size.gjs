import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class SizeDemoComponent extends Component {
  get sizes() {
    return [
      { label: 'Extra Small', size: 'xs-size' },
      { label: 'Small', size: 's-size' },
      { label: 'Medium', size: 'm-size' },
      { label: 'Large', size: 'l-size' },
      { label: 'Extra Large', size: 'xl-size' },
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
