import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class LayeredTagDemo extends Component {
  get layerGroups() {
    return [
      {
        label: 'Black',
        items: [
          { label: 'black-layer1', class: 'color-black-layer1' },
          { label: 'black-layer2', class: 'color-black-layer2' },
          { label: 'black-layer3', class: 'color-black-layer3' },
          { label: 'black-layer4', class: 'color-black-layer4' },
        ],
      },
      {
        label: 'Blue',
        items: [
          { label: 'blue-layer1', class: 'color-blue-layer1' },
          { label: 'blue-layer2', class: 'color-blue-layer2' },
          { label: 'blue-layer3', class: 'color-blue-layer3' },
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
