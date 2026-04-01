export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter, UlxIcon } from 'ulx-components';
import { hash } from '@ember/helper';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    iconName: 'home-icon-01',
    isActive: true,
    showHandle: true,
  },
  {
    id: 'scan',
    label: 'Scan',
    iconName: 'user-info-icon',
    isActive: false,
    showHandle: false,
  },
  {
    id: 'agenda',
    label: 'Agenda',
    iconName: 'agenda-icon',
    isActive: false,
    showHandle: false,
  },
  {
    id: 'networking',
    label: 'Networking',
    iconName: 'merge-booth',
    isActive: false,
    showHandle: false,
  },
  {
    id: 'profile',
    label: 'Profile',
    iconName: 'user-sync-icon',
    isActive: false,
    showHandle: true,
  },
];

export default class GridSorterDemo extends Component {
  @tracked items = NAV_ITEMS.map((row) => ({ ...row }));

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
      @layout="grid"
      @columnsClass="col-5 gap-3"
      @itemKey="id"
      @itemClass="relative"
      style="width: 600px"
      @options={{hash animation=150 onEnd=this.handleEnd}}
      as |item|
    >
      {{#if item.showHandle}}
        <span
          class="absolute top-2 right-2 flex items-center justify-center rounded-full bg-layer3 w-12 h-12"
          aria-hidden="true"
        >
          <UlxIcon
            @iconName="dragdrop-icon1"
            @componentClass="bs-icons1"
            @type="font"
            @size="s18"
            @customClass="fg-secondary"
            aria-hidden="true"
          />
        </span>
      {{/if}}
      <div
        class="flex flex-col items-center justify-center w-full text-center cursor-pointer transition-all duration-200 gap-1"
      >
        <UlxIcon
          @iconName={{item.iconName}}
          @componentClass="bs-icons1"
          @type="font"
          @size="s28"
          aria-hidden="true"
        />
        <span class="text-14">{{item.label}}</span>
      </div>
    </UlxSorter>
  </template>
}

`;
