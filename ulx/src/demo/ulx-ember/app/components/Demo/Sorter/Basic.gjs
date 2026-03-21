import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxSorter,
  UlxSorterItem,
  UlxButton,
  t,
  UlxIcon,
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
      @groupName="basic-sorter"
      @onChange={{this.reorderItems}}
      @customClass="w-full flex flex-col gap-y-2"
      as |groupName|
    >
      {{#each this.items as |item|}}
        <UlxSorterItem
          @groupName={{groupName}}
          @useDragIconAsHandle={{true}}
          @model={{item}}
          @customClass="w-full"
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
                @variant="text"
                @icon="edit-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                aria-label={{t "lbl.update"}}
              />
              <UlxButton
                @variant="text"
                @icon="delete-icon-01"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                aria-label={{t "lbl.delete"}}
              />
            </div>
          </div>
        </UlxSorterItem>
      {{/each}}
    </UlxSorter>
  </template>
}
