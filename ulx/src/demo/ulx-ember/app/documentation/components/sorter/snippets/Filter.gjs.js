export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { fn, hash } from '@ember/helper';

const ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Filtered', 'Item 4', 'Item 5'];

export default class FilterSorterDemo extends Component {
  @tracked items = [...ITEMS];

  @action
  handleSort(event) {
    const { oldIndex, newIndex } = event;
    const reorderedItems = [...this.items];
    const [movedItem] = reorderedItems.splice(oldIndex, 1);
    reorderedItems.splice(newIndex, 0, movedItem);
    this.items = reorderedItems;
  }

  @action
  isFiltered(item) {
    return item === 'Filtered';
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @options={{hash filter=".filtered" onSort=(fn this.handleSort)}}
      @filter=".filtered"
      as |item|
    >
      <div class="{{if (this.isFiltered item) 'filtered'}}">{{item}}</div>
    </UlxSorter>
  </template>
}

`;
