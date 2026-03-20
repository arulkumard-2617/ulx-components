export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter, UlxSorterItem } from 'ulx-components';
import SortableHandle from 'ember-sortable/modifiers/sortable-handle';

export default class HandleSorterDemo extends Component {
  @tracked items = [
    { id: 1, name: 'Drag by handle' },
    { id: 2, name: 'Second item' },
    { id: 3, name: 'Third item' },
  ];

  @action
  reorderItems(newItems) {
    this.items = newItems;
  }

  <template>
    <UlxSorter
      @groupName="handle-sorter"
      @onChange={{this.reorderItems}}
      @customClass="ulx-drag"
    as |groupName|>
      {{#each this.items as |item|}}
        <UlxSorterItem
          @groupName={{groupName}}
          @model={{item}}
          @handle=".handle"
          @customClass="drag-item"
        >
          <span class="handle" {{SortableHandle}} aria-hidden="true">⋮⋮</span>
          {{item.name}}
        </UlxSorterItem>
      {{/each}}
    </UlxSorter>
  </template>
}

`;
