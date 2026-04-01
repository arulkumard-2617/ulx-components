export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

const ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Filtered', 'Item 4', 'Item 5'];

export default class FilterSorterDemo extends Component {
  @tracked items = [...ITEMS];

  @action
  handleEnd(event) {
    const { oldIndex, newIndex } = event;
    if (oldIndex === newIndex) {
      return;
    }
    const next = [...this.items];
    const [moved] = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, moved);
    this.items = next;
  }

  @action
  rowClassForFilter(item) {
    return item === 'Filtered' ? 'is-filtered' : '';
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @itemClass={{this.rowClassForFilter}}
      @filter=".is-filtered"
      @options={{hash animation=150 onEnd=this.handleEnd}}
      as |item|
    >
      <span class="text-14 fg-text">{{item}}</span>
    </UlxSorter>
  </template>
}

`;
