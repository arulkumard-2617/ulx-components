export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class ExtendedPaletteTagDemo extends Component {
  get variants() {
    return [
      { label: 'red', class: 'red' },
      { label: 'green', class: 'green' },
      { label: 'orange', class: 'orange' },
      { label: 'blue', class: 'blue' },
      { label: 'purple', class: 'purple' },
      { label: 'gold', class: 'gold' },
      { label: 'grey', class: 'grey' },
      { label: 'yellow', class: 'yellow' },
      { label: 'violet', class: 'violet' },
      { label: 'pink', class: 'pink' },
      { label: 'brown', class: 'brown' },
      { label: 'teal', class: 'teal' },
      { label: 'darkturquoise', class: 'darkturquoise' },
      { label: 'olive', class: 'olive' },
      { label: 'nightblue', class: 'nightblue' },
      { label: 'magenta', class: 'magenta' },
      { label: 'blue1', class: 'blue1' }
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variants key="class" as |item|}}
        <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
      {{/each}}
    </div>
  </template>
}

`;
