import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';

export default class HandleSorterDemo extends Component {
  @tracked items = [
    { id: 1, name: 'Drag by handle' },
    { id: 2, name: 'Second item' },
    { id: 3, name: 'Third item' },
  ];

  @action
  reorderItems(newItems) {
    this.items = newItems;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @groupName="handle-sorter"
      @onChange={{this.reorderItems}}
      @customClass="ulx-drag"
      @itemClass="drag-item"
      @handle=".handle"
      as |item|
    >
      <span class="handle" aria-hidden="true">⋮⋮</span>
      {{item.name}}
    </UlxSorter>
  </template>
}
