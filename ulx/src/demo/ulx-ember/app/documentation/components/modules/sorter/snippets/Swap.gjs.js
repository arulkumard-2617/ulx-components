export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

const ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

export default class SwapSorterDemo extends Component {
  @tracked items = [...ITEMS];

  @action
  handleEnd(event) {
    const { oldIndex, newIndex } = event;
    if (oldIndex === newIndex) {
      return;
    }
    const swappedItems = [...this.items];
    const sourceItem = swappedItems[oldIndex];
    swappedItems[oldIndex] = swappedItems[newIndex];
    swappedItems[newIndex] = sourceItem;
    this.items = swappedItems;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @options={{hash
        swap=true
        swapClass="is-selected"
        animation=150
        onEnd=this.handleEnd
      }}
      as |item|
    >
      <span class="text-14 fg-text">{{item}}</span>
    </UlxSorter>
  </template>
}

`;
