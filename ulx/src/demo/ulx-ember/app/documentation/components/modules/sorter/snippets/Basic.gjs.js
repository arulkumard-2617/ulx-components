export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter, UlxSorterItem } from 'ulx-components';

export default class BasicSorterDemo extends Component {
  @tracked items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
  ];

  @action
  reorderItems(newItems) {
    this.items = newItems;
  }

  <template>
    <UlxSorter @onChange={{this.reorderItems}} @customClass="ulx-drag">
      {{#each this.items as |item|}}
        <UlxSorterItem
          @model={{item}}
          @customClass="drag-item flex items-center gap-2"
          @showDragIcon={{true}}
          @useDragIconAsHandle={{true}}
        >
          {{item.name}}
        </UlxSorterItem>
      {{/each}}
    </UlxSorter>
  </template>
}

`;
