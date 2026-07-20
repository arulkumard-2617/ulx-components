import Component from '@glimmer/component';
import { UlxSegment, UlxTag } from 'ulx-components';

export default class BorderedDemoComponent extends Component {
  get borderedSurfaces() {
    return [
      {
        customClass: 'color-primary-layer1 bordered',
        sampleText: 'Primary layer 1 with border and default text'
      },
      {
        customClass: 'color-primary-layer1 bordered fg-primary',
        sampleText: 'Primary layer 1 with border and primary text'
      },
      {
        customClass: 'color-green-layer1 bordered',
        sampleText: 'Green layer 1 with border and default text'
      },
      {
        customClass: 'color-green-layer1 bordered fg-green',
        sampleText: 'Green layer 1 with border and green text'
      }
    ];
  }

  <template>
    <div class="bordered-demo">
      <div class="ulx-grid col-4 gap-3">
        {{#each this.borderedSurfaces as |item|}}
          <UlxSegment @customClass={{item.customClass}}>
            <p class="mb-0">{{item.sampleText}}</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}
