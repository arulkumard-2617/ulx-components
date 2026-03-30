import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

const ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

export default class SwapSorterDemo extends Component {
  @tracked items = [...ITEMS];

  @action
  handleSort(event) {
    const { oldIndex, newIndex } = event;
    const swappedItems = [...this.items];
    const sourceItem = swappedItems[oldIndex];
    swappedItems[oldIndex] = swappedItems[newIndex];
    swappedItems[newIndex] = sourceItem;
    this.items = swappedItems;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @onSort={{this.handleSort}}
      @options={{hash swap=true swapClass="highlight"}}
      as |item|
    >
      {{item}}
    </UlxSorter>
  </template>
}
