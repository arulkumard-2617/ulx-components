export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { fn, hash } from '@ember/helper';

const LEFT_ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
const RIGHT_ITEMS = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
];

export default class DisablesortingSorterDemo extends Component {
  @tracked leftItems = [...LEFT_ITEMS];
  @tracked rightItems = [...RIGHT_ITEMS];

  @action
  getItemsForList(listName) {
    return listName === 'left' ? this.leftItems : this.rightItems;
  }

  @action
  setItemsForList(listName, items) {
    listName === 'left' ? (this.leftItems = items) : (this.rightItems = items);
  }

  @action
  handleSort(listName, event) {
    if (event.from !== event.to) {
      return;
    }

    const { oldIndex, newIndex } = event;
    const reorderedItems = [...this.getItemsForList(listName)];
    const [movedItem] = reorderedItems.splice(oldIndex, 1);
    reorderedItems.splice(newIndex, 0, movedItem);
    this.setItemsForList(listName, reorderedItems);
  }

  @action
  handleAdd(listName, event) {
    const sourceList = event.from?.dataset?.list;
    if (!sourceList) {
      return;
    }

    const sourceItems = this.getItemsForList(sourceList);
    const targetItems = [...this.getItemsForList(listName)];
    const clonedItem = sourceItems[event.oldIndex];
    clonedItem != null && targetItems.splice(event.newIndex, 0, clonedItem);
    this.setItemsForList(listName, targetItems);
  }

  @action
  handleRemove(listName, event) {
    if (event.pullMode === 'clone') {
      return;
    }

    const sourceItems = [...this.getItemsForList(listName)];
    sourceItems.splice(event.oldIndex, 1);
    this.setItemsForList(listName, sourceItems);
  }

  <template>
    <div class="grid grid-cols-2 gap-4">
      <UlxSorter
        @items={{this.leftItems}}
        @options={{hash
          group=(hash name="shared" pull="clone" put=false)
          animation=150
          sort=false
          onSort=(fn this.handleSort "left")
          onAdd=(fn this.handleAdd "left")
          onRemove=(fn this.handleRemove "left")
        }}
        data-list="left"
        as |item|
      >
        {{item}}
      </UlxSorter>

      <UlxSorter
        @items={{this.rightItems}}
        @options={{hash group="shared" animation=150}}
        data-list="right"
        as |item|
      >
        {{item}}
      </UlxSorter>
    </div>
  </template>
}

`;
