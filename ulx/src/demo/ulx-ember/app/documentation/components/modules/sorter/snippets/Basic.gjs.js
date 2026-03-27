export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxSorter,
  UlxButton,
  t,
  UlxIcon,
  UlxIconButton,
} from 'ulx-components';

export default class BasicSorterDemo extends Component {
  @tracked items = [
    { id: 1, value: 50 },
    { id: 2, value: 60 },
    { id: 3, value: 70 },
    { id: 4, value: 80 },
    { id: 5, value: 90 },
  ];

  @action
  reorderItems(newItems) {
    this.items = newItems;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @groupName="basic-sorter"
      @onChange={{this.reorderItems}}
      @customClass="w-full flex flex-col gap-y-2"
      @itemClass="w-full"
      @useDragIconAsHandle={{true}}
      as |item|
    >
      <div
        class="w-full flex items-center justify-between bg-default border rounded-md py-2 px-4"
      >
        <div class="flex items-center gap-x-4">
          <UlxIcon
            @iconName="dragdrop-icon1"
            @iconComponentClass="bs-icons1"
            @type="font"
            @size="s18"
            @customClass="move"
          />
          <span class="text-14 fg-text">{{item.id}}</span>
          <span class="text-14 fg-text">{{item.value}}</span>
        </div>

        <div class="flex items-center gap-x-2">
          <UlxButton
            @icon="edit-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @label={{t "lbl.update"}}
            aria-label={{t "lbl.update"}}
          />
          <UlxIconButton
            @iconLeft="delete-icon-01"
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            aria-label={{t "lbl.delete"}}
          />
        </div>
      </div>
    </UlxSorter>
  </template>
}

`;
