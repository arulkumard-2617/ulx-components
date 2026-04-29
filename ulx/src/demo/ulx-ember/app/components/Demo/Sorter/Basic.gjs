import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { hash } from '@ember/helper';
import {
  UlxSorter,
  UlxSorterItem,
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
      @customClass="w-full"
      @options={{hash
        handle=".sorter-handle"
        animation=150
        onEnd=this.handleEnd
      }}
      as |item|
    >
      <UlxSorterItem>
        <:handle>
          <UlxIcon
            @iconName="dragdrop-icon1"
            @iconComponentClass="bs-icons1"
            @type="font"
            @size="s18"
            aria-hidden="true"
          />
        </:handle>
        <:default>
          <div class="flex items-center gap-4">
            <span class="text-14 fg-text">{{item.id}}</span>
            <span class="text-14 fg-text">{{item.value}}</span>
          </div>
        </:default>
        <:actions>
          <UlxButton
            @icon="edit-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @label="Update"
            aria-label={{"Update"}}
          />
          <UlxIconButton
            @iconLeft="delete-icon-01"
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            aria-label={{"Delete"}}
          />
        </:actions>
      </UlxSorterItem>
    </UlxSorter>
  </template>
}
