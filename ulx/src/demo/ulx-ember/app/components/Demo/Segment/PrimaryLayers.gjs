import Component from '@glimmer/component';
import { UlxSegment, UlxIcon, UlxTag, UlxBadge } from 'ulx-components';

export default class PrimaryLayersDemoComponent extends Component {
  get layers() {
    return [
      {
        customClass: 'color-primary-layer1',
        sampleText: 'Primary layer 1 surface'
      },
      {
        customClass: 'color-primary-layer2',
        sampleText: 'Primary layer 2 surface'
      },
      {
        customClass: 'color-primary-layer3',
        sampleText: 'Primary layer 3 surface'
      },
      {
        customClass: 'color-primary-layer4',
        sampleText: 'Primary layer 4 surface'
      }
    ];
  }

  <template>
    <div class="primary-layers-demo">
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
