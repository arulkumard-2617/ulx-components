export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

const ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

export default class MultidragSorterDemo extends Component {
  @tracked items = [...ITEMS];

  @action
  handleSort(event) {
    const { oldIndicies = [], newIndicies = [], oldIndex, newIndex } = event;
    const reorderedItems = [...this.items];

    if (oldIndicies.length > 0 && newIndicies.length > 0) {
      const sourceIndexes = oldIndicies
        .map(({ index }) => index)
        .sort((left, right) => left - right);
      const movedItems = sourceIndexes.map((index) => reorderedItems[index]);
      sourceIndexes
        .slice()
        .reverse()
        .forEach((index) => {
          reorderedItems.splice(index, 1);
        });

      let insertionIndex = Math.min(...newIndicies.map(({ index }) => index));
      sourceIndexes.forEach((index) => {
        index < insertionIndex && (insertionIndex -= 1);
      });

      reorderedItems.splice(insertionIndex, 0, ...movedItems);
      this.items = reorderedItems;
      return;
    }

    const [movedItem] = reorderedItems.splice(oldIndex, 1);
    reorderedItems.splice(newIndex, 0, movedItem);
    this.items = reorderedItems;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @onSort={{this.handleSort}}
      @options={{hash
        multiDrag=true
        selectedClass="selected"
        fallbackTolerance=3
      }}
      as |item|
    >
      {{item}}
    </UlxSorter>
  </template>
}

`;
