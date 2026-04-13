export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSorter, UlxIcon } from 'ulx-components';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    iconName: 'home-icon-01',
    isActive: true,
    showHandle: true,
    locked: true,
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
    locked: true,
  },
];

export default class GridSorterDemo extends Component {
  @tracked items = NAV_ITEMS.map((row) => ({ ...row }));

  get sortableOptions() {
    return {
      animation: 150,
      onEnd: this.handleEnd,
      onMove: this.handleMove,
      filter: '.is-locked',
    };
  }

  /**
   * Home stays first: block inserting another item before Home.
   * Profile stays last: final order is normalized in \`handleEnd\`.
   */
  @action
  handleMove(evt) {
    const related = evt.related;
    if (related?.dataset?.itemId === 'home' && evt.willInsertAfter === false) {
      return false;
    }
    return true;
  }

  @action
  itemRowClass(item) {
    return item.locked ? 'relative is-locked' : 'relative';
  }

  @action
  handleEnd(event) {
    const { oldIndex, newIndex } = event;
    if (oldIndex === newIndex) {
      return;
    }
    let next = [...this.items];
    const [moved] = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, moved);
    const homeIdx = next.findIndex((i) => i.id === 'home');
    if (homeIdx > 0) {
      const [home] = next.splice(homeIdx, 1);
      next.unshift(home);
    }
    const profileIdx = next.findIndex((i) => i.id === 'profile');
    if (profileIdx >= 0 && profileIdx !== next.length - 1) {
      const [profile] = next.splice(profileIdx, 1);
      next.push(profile);
    }
    this.items = next;
  }

  <template>
    <UlxSorter
      @items={{this.items}}
      @layout="grid"
      @columnsClass="col-5 gap-3"
      @itemKey="id"
      @itemClass={{this.itemRowClass}}
      @options={{this.sortableOptions}}
      as |item|
    >
      {{#if item.showHandle}}
        <span
          class="absolute top-2 right-2 flex items-center justify-center rounded-full bg-layer3 w-12 h-12"
          aria-hidden="true"
        >
          {{#if item.locked}}
            <UlxIcon
              @iconName="lock-filled-icon"
              @componentClass="bs-icons1"
              @type="font"
              @size="s18"
              @customClass="fg-secondary"
              aria-hidden="true"
            />
          {{else}}
            <UlxIcon
              @iconName="dragdrop-icon1"
              @componentClass="bs-icons1"
              @type="font"
              @size="s18"
              @customClass="fg-secondary"
              aria-hidden="true"
            />
          {{/if}}
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
