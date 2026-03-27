export default `
import Component from '@glimmer/component';
import { UlxSegment } from 'ulx-components';

export default class VariantsDemoComponent extends Component {
  get coloredVariants() {
    return [
      { variant: 'red', label: 'Red' },
      { variant: 'orange', label: 'Orange' },
      { variant: 'yellow', label: 'Yellow' },
      { variant: 'green', label: 'Green' },
      { variant: 'blue', label: 'Blue' },
      { variant: 'purple', label: 'Purple' },
      { variant: 'pink', label: 'Pink' },
      { variant: 'brown', label: 'Brown' },
      { variant: 'grey', label: 'Grey' },
      { variant: 'black', label: 'Black' },
    ];
  }

  get invertedVariants() {
    return [
      { variant: 'light-red', label: 'Red' },
      { variant: 'light-orange', label: 'Orange' },
      { variant: 'light-yellow', label: 'Yellow' },
      { variant: 'light-green', label: 'Green' },
      { variant: 'light-blue', label: 'Blue' },
      { variant: 'light-purple', label: 'Purple' },
      { variant: 'light-pink', label: 'Pink' },
      { variant: 'light-brown', label: 'Brown' },
      { variant: 'light-grey', label: 'Grey' },
      { variant: 'light-black', label: 'Black' },
    ];
  }

  <template>
    <div class="variants-demo">
      <h3 class="mb-4">Colored Segments (Standard Variants)</h3>
      <div class="flex flex-col gap-5 mb-12">
        {{#each this.coloredVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}} segment with light background and black text</p>
          </UlxSegment>
        {{/each}}
      </div>

      <h3 class="mb-4">Colored Segments (Light Variants)</h3>
      <div class="flex flex-col gap-5">
        {{#each this.invertedVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}} segment with light background variant</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}

`;
