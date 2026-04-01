export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class TypeDemoComponent extends Component {
  get types() {
    return [
      { label: 'Filled (default)', type: undefined },
      { label: 'Outline', type: 'outline' },
      { label: 'Pill', type: 'pill' },
    ];
  }

  <template>
    <div class="flex wrap gap-4">
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
