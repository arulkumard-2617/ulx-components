import Component from '@glimmer/component';
import { UlxBadge } from 'ulx-components';

export default class VariantsDemoComponent extends Component {
  get variants() {
    return [
      { label: '2', variant: 'primary' },
      { label: '12', variant: 'secondary' },
      { label: '32', variant: 'success' },
      { label: '455', variant: 'info' },
      { label: '32', variant: 'warning' },
      { label: '54', variant: 'danger' },
      { label: '65', variant: 'contrast' },
      { label: '56', variant: 'light-grey' },
    ];
  }

  <template>
    <div class="flex wrap gap-4">
      {{#each this.variants key="variant" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size="s-size"
          @variant={{item.variant}}
          @type="circle"
        />
      {{/each}}
    </div>
  </template>
}
