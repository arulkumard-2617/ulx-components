import Component from '@glimmer/component';
import { UlxSegment, UlxIcon, UlxAvatar } from 'ulx-components';

export default class BorderStartDemoComponent extends Component {
  get borderStartSurfaces() {
    return [
      {
        customClass: 'primary-border-start',
        sampleText: 'Primary inline-start accent only'
      },
      {
        customClass: 'color-primary-layer1 primary-border-start',
        sampleText: 'Primary layer 1 with inline-start accent'
      },
      {
        customClass: 'green-border-start',
        sampleText: 'Green inline-start accent only'
      },
      {
        customClass: 'color-green-layer1 green-border-start',
        sampleText: 'Green layer 1 with inline-start accent'
      }
    ];
  }

  <template>
    <div class="border-start-demo">
      <div class="ulx-grid col-4 gap-3">
        {{#each this.borderStartSurfaces as |item|}}
          <UlxSegment @customClass={{item.customClass}}>
            <p class="mb-0">{{item.sampleText}}</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}
