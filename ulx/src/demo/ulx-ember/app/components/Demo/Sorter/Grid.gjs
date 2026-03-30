import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

const ITEMS = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

export default class GridSorterDemo extends Component {
  @tracked items = [...ITEMS];

  @action
  handleSort(event) {
    const { oldIndex, newIndex } = event;
    const reorderedItems = [...this.items];
    const [movedItem] = reorderedItems.splice(oldIndex, 1);
    reorderedItems.splice(newIndex, 0, movedItem);
    this.items = reorderedItems;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @onSort={{this.handleSort}}
      @options={{hash animation=150 ghostClass="blue-background-class"}}
      as |item|
    >
      <div class="pd2 text-center border-radius-sm border">{{item}}</div>
    </UlxSorter>
  </template>
}
