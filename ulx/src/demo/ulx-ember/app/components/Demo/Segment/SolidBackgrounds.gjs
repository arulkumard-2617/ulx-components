import Component from '@glimmer/component';
import { UlxSegment } from 'ulx-components';

export default class SolidBackgroundsDemoComponent extends Component {
  get surfaces() {
    return [
      {
        customClass: 'color-primary',
        sampleText: 'Solid primary background with white text'
      },
      {
        customClass: 'color-green',
        sampleText: 'Solid green background with white text'
      }
    ];
  }

  <template>
    <div class="solid-backgrounds-demo">
      <div class="ulx-grid col-4 gap-3">
        {{#each this.surfaces as |item|}}
          <UlxSegment @customClass={{item.customClass}}>
            <p class="mb-0">{{item.sampleText}}</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}
