import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter } from 'ulx-components';
import { hash } from '@ember/helper';

export default class HandleSorterDemo extends Component {
  @tracked items = [
    { id: 1, name: 'Drag by handle' },
    { id: 2, name: 'Second item' },
    { id: 3, name: 'Third item' },
  ];

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
      @options={{hash handle=".handle" animation=150}}
      @onEnd={{this.handleSort}}
      @customClass="ulx-drag"
      @itemClass="drag-item"
      as |item|
    >
      <span class="handle" aria-hidden="true">⋮⋮</span>
      {{item.name}}
    </UlxSorter>
  </template>
}
