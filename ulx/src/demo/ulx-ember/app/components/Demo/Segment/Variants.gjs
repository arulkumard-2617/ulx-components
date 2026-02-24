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
      { variant: 'red-invert', label: 'Red' },
      { variant: 'orange-invert', label: 'Orange' },
      { variant: 'yellow-invert', label: 'Yellow' },
      { variant: 'green-invert', label: 'Green' },
      { variant: 'blue-invert', label: 'Blue' },
      { variant: 'purple-invert', label: 'Purple' },
      { variant: 'pink-invert', label: 'Pink' },
      { variant: 'brown-invert', label: 'Brown' },
      { variant: 'grey-invert', label: 'Grey' },
      { variant: 'black-invert', label: 'Black' },
    ];
  }

  <template>
    <div class="variants-demo">
      <h3 class="mb-4">Colored Segments (Light Background - Black Text)</h3>
      <div class="flex flex-col gap-5 mb-12">
        {{#each this.coloredVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}} segment with light background and black text</p>
          </UlxSegment>
        {{/each}}
      </div>

      <h3 class="mb-4">Inverted Colored Segments (Dark Background - White Text)</h3>
      <div class="flex flex-col gap-5">
        {{#each this.invertedVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}}
              inverted segment with dark background and white text</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}
