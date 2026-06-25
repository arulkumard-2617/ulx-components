export default `
import Component from '@glimmer/component';
import { UlxSegment } from 'ulx-components';

export default class VariantsDemoComponent extends Component {
  get coloredVariants() {
    return [{ variant: 'grey', label: 'Grey' }];
  }

  <template>
    <div class="variants-demo">
      <h3 class="mb-4">Colored Segments (Standard Variants)</h3>
      <div class="flex flex-col gap-5">
        {{#each this.coloredVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}} segment with light background and black text</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}

`;
