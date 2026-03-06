import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class VariationsDemoComponent extends Component {
  get variations() {
    return [
      { label: 'primary', class: 'primary' },
      { label: 'secondary', class: 'secondary' },
      { label: 'success', class: 'success' },
      { label: 'info', class: 'info' },
      { label: 'warning', class: 'warning' },
      { label: 'danger', class: 'danger' },
      { label: 'contrast', class: 'contrast' },
      { label: 'white', class: 'white' },
      { label: 'black', class: 'black' },
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variations key="class" as |item|}}
        <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
      {{/each}}
    </div>
  </template>
}
