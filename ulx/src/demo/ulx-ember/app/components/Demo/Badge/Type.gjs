import Component from '@glimmer/component';
import { UlxBadge } from 'ulx-components';

export default class TypeDemoComponent extends Component {
  get types() {
    return [
      { label: '1' },
      { label: '2', type: 'circle' },
      { label: '', type: 'dot' },
    ];
  }

  <template>
    <div class="flex wrap items-center gap-4">
      {{#each this.types key="type" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size="s-size"
          @variant="primary"
          @type={{item.type}}
        />
      {{/each}}
    </div>
  </template>
}
