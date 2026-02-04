export default `
import Component from '@glimmer/component';
import { UlxBadge } from 'ulx-components';

export default class SizeDemoComponent extends Component {
  get sizes() {
    return [
      { label: '1', size: 'xs-size' },
      { label: '2', size: 's-size' },
      { label: '3', size: 'm-size' },
      { label: '4', size: 'l-size' },
      { label: '5', size: 'xl-size' },
    ];
  }

  get dotSizes() {
    return [
      { label: '5', size: 'xl-size' },
      { label: '4', size: 'l-size' },
      { label: '3', size: 'm-size' },
      { label: '2', size: 's-size' },
      { label: '1', size: 'xs-size' },
    ];
  }

  <template>
    <div class="fxb wrap gp4 fvc mgb12">
      {{#each this.sizes key="size" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size={{item.size}}
          @variant="primary"
          @type="circle"
        />
      {{/each}}
    </div>
    <div class="fxb wrap gp4 fvc">
      {{#each this.dotSizes key="size" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size={{item.size}}
          @variant="primary"
          @type="dot"
          @ariaLabel="Notify"
        />
      {{/each}}
    </div>
  </template>
}

`;
