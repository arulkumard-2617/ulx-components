import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter, UlxSorterItem } from 'ulx-components';
import { hash } from '@ember/helper';

export default class HandleSorterDemo extends Component {
  @tracked items = [
    { id: 1, name: 'Drag by handle' },
    { id: 2, name: 'Second item' },
    { id: 3, name: 'Third item' },
  ];

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

  <template>
    <UlxSorter
      @items={{this.items}}
      @options={{hash
        handle=".sorter-handle"
        animation=150
        onEnd=this.handleEnd
      }}
      as |item|
    >
      <UlxSorterItem>
        <:handle>
          <span class="text-13 fg-tertiary" aria-hidden="true">⋮⋮</span>
        </:handle>
        <:default>
          <span class="text-14 fg-text">{{item.name}}</span>
        </:default>
      </UlxSorterItem>
    </UlxSorter>
  </template>
}
