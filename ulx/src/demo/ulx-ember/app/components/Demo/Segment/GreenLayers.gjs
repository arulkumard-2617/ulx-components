import Component from '@glimmer/component';
import { UlxSegment } from 'ulx-components';

export default class GreenLayersDemoComponent extends Component {
  get layers() {
    return [
      {
        customClass: 'color-green-layer1',
        sampleText: 'Green layer 1 surface'
      },
      {
        customClass: 'color-green-layer2',
        sampleText: 'Green layer 2 surface'
      },
      {
        customClass: 'color-green-layer3',
        sampleText: 'Green layer 3 surface'
      }
    ];
  }

  <template>
    <div class="green-layers-demo">
      <div class="ulx-grid col-4 gap-3">
        {{#each this.layers as |item|}}
          <UlxSegment @customClass={{item.customClass}}>
            <p class="mb-0">{{item.sampleText}}</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}
