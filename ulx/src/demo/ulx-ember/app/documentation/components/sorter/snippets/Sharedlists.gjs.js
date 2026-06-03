export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn, hash } from '@ember/helper';
import { UlxSorter } from 'ulx-components';

export default class SharedlistsSorterDemo extends Component {
  @tracked leftItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
  @tracked rightItems = [
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5',
    'category 6',
  ];

  @action
  handleAdd(targetListId, event) {
    const sourceListId = event.from?.dataset?.id ?? event.from?.id;
    const sourceItems =
      this[sourceListId === 'left-sorter' ? 'leftItems' : 'rightItems'];
    const movedItem = sourceItems[event.oldIndex];
    if (movedItem == null) {
      return;
    }

    const targetItems = [
      ...(targetListId === 'left-sorter' ? this.leftItems : this.rightItems),
    ];
    targetItems.splice(event.newIndex, 0, movedItem);

    if (targetListId === 'left-sorter') {
      this.leftItems = targetItems;
    } else {
      this.rightItems = targetItems;
    }

    const movedElement = event.item;
    if (movedElement?.parentNode === event.to) {
      event.to.removeChild(movedElement);
    }
  }

  @action
  handleRemove(sourceListId, event) {
    const items = [
      ...(sourceListId === 'left-sorter' ? this.leftItems : this.rightItems),
    ];
    items.splice(event.oldIndex, 1);
    if (sourceListId === 'left-sorter') {
      this.leftItems = items;
    } else {
      this.rightItems = items;
    }
  }

  <template>
    <div id="shared-lists" class="ulx-grid cols-2 gap-4">
      <UlxSorter
        @items={{this.leftItems}}
        @rootId="left-sorter"
        @options={{hash
          group="shared"
          animation=150
          onAdd=(fn this.handleAdd "left-sorter")
          onRemove=(fn this.handleRemove "left-sorter")
        }}
        as |item|
      >
        <span class="text-14 fg-text">{{item}}</span>
      </UlxSorter>

      <UlxSorter
        @items={{this.rightItems}}
        @rootId="right-sorter"
        @options={{hash
          group="shared"
          animation=150
          onAdd=(fn this.handleAdd "right-sorter")
          onRemove=(fn this.handleRemove "right-sorter")
        }}
        as |item|
      >
        <span class="text-14 fg-text">{{item}}</span>
      </UlxSorter>
    </div>
  </template>
}

`;
