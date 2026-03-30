import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

const ITEMS = [
  { id: '1.1', label: 'category 1.1' },
  { id: '1.2', label: 'category 1.2' },
];

export default class NestedSorterDemo extends Component {
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
      @idKey="id"
      @onSort={{this.handleSort}}
      @options={{hash
        group="nested"
        animation=150
        fallbackOnBody=true
        swapThreshold=0.65
      }}
      as |item|
    >
      <div>
        {{item.label}}
        <UlxSorter
          @items={{this.items}}
          @idKey="id"
          @options={{hash
            group="nested"
            animation=150
            fallbackOnBody=true
            swapThreshold=0.65
          }}
          @onSort={{this.handleSort}}
          as |child|
        >
          {{child.label}}
        </UlxSorter>
      </div>
    </UlxSorter>
  </template>
}
