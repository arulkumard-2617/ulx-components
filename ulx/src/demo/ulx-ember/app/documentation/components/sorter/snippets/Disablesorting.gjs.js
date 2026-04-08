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
  handleEnd(listName, event) {
    if (event.from !== event.to) {
      return;
    }
    const { oldIndex, newIndex } = event;
    if (oldIndex === newIndex) {
      return;
    }
    const next = [...this.getItemsForList(listName)];
    const [moved] = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, moved);
    this.setItemsForList(listName, next);
  }

  @action
  handleAdd(listName, event) {
    const sourceList = event.from?.dataset?.list;
    if (!sourceList) {
      return;
    }
    const sourceItems = this.getItemsForList(sourceList);
    const targetItems = [...this.getItemsForList(listName)];
    const movedItem = sourceItems[event.oldIndex];
    if (movedItem == null) {
      return;
    }
    targetItems.splice(event.newIndex, 0, movedItem);
    this.setItemsForList(listName, targetItems);
  }

  @action
  handleRemove(listName, event) {
    if (event.pullMode === 'clone') {
      return;
    }
    const next = [...this.getItemsForList(listName)];
    next.splice(event.oldIndex, 1);
    this.setItemsForList(listName, next);
  }

  <template>
    <div class="grid grid-cols-2 gap-4">
      <UlxSorter
        @items={{this.leftItems}}
        @listKey="left"
        @options={{hash
          group=(hash name="shared" pull="clone" put=false)
          animation=150
          sort=false
          onEnd=(fn this.handleEnd "left")
          onAdd=(fn this.handleAdd "left")
          onRemove=(fn this.handleRemove "left")
        }}
        as |item|
      >
        <span class="text-14 fg-text">{{item}}</span>
      </UlxSorter>

      <UlxSorter
        @items={{this.rightItems}}
        @listKey="right"
        @options={{hash
          group="shared"
          animation=150
          onEnd=(fn this.handleEnd "right")
          onAdd=(fn this.handleAdd "right")
          onRemove=(fn this.handleRemove "right")
        }}
        as |item|
      >
        <span class="text-14 fg-text">{{item}}</span>
      </UlxSorter>
    </div>
  </template>
}

`;
