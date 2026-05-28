export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class LayeredTagDemo extends Component {
  get layerGroups() {
    return [
      {
        label: 'Neutral',
        items: [
          { label: 'layer1', class: 'layer1' },
          { label: 'layer2', class: 'layer2' },
          { label: 'layer3', class: 'layer3' },
          { label: 'layer4', class: 'layer4' },
          { label: 'layer5', class: 'layer5' },
          { label: 'layer6', class: 'layer6' },
        ],
      },
      {
        label: 'Blue',
        items: [
          { label: 'blue-layer1', class: 'blue-layer1' },
          { label: 'blue-layer2', class: 'blue-layer2' },
          { label: 'blue-layer3', class: 'blue-layer3' },
        ],
      },
    ];
  }

  <template>
    <div class="flex flex-col gap-4">
      {{#each this.layerGroups key="label" as |group|}}
        <section class="flex flex-col gap-2">
          <div class="text-13 fw-600 fg-secondary">{{group.label}}</div>
          <div class="flex flex-wrap gap-4">
            {{#each group.items key="class" as |item|}}
              <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
            {{/each}}
          </div>
        </section>
      {{/each}}
    </div>
  </template>
}

`;
