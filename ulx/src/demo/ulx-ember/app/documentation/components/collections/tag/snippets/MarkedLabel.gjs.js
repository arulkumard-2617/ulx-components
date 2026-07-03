export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class MarkedLabelTagDemo extends Component {
  get variants() {
    return [
      { label: 'lt-green', variant: 'marked-label lt-green' },
      { label: 'lt-gold', variant: 'marked-label lt-gold' },
      { label: 'lt-red', variant: 'marked-label lt-red' },
      { label: 'lt-purple', variant: 'marked-label lt-purple' },
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variants key="variant" as |item|}}
        <UlxTag @value={{item.label}} @size="xs-size" @variant={{item.variant}} />
      {{/each}}
    </div>
  </template>
}

`;
