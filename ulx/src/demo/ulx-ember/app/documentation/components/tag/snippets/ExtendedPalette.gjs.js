export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class ExtendedPaletteTagDemo extends Component {
  get variants() {
    return [
      { label: 'tag-red', class: 'tag-red' },
      { label: 'tag-green', class: 'tag-green' },
      { label: 'tag-orange', class: 'tag-orange' },
      { label: 'tag-blue', class: 'tag-blue' },
      { label: 'tag-purple', class: 'tag-purple' },
      { label: 'tag-gold', class: 'tag-gold' },
      { label: 'tag-grey', class: 'tag-grey' },
      { label: 'tag-yellow', class: 'tag-yellow' },
      { label: 'tag-violet', class: 'tag-violet' },
      { label: 'tag-pink', class: 'tag-pink' },
      { label: 'tag-brown', class: 'tag-brown' },
      { label: 'tag-teal', class: 'tag-teal' },
      { label: 'tag-darkturquoise', class: 'tag-darkturquoise' },
      { label: 'tag-olive', class: 'tag-olive' },
      { label: 'tag-nightblue', class: 'tag-nightblue' },
      { label: 'tag-magenta', class: 'tag-magenta' },
      { label: 'tag-blue1', class: 'tag-blue1' },
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
