import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTabmenu, t } from 'ulx-components';

export default class CardTabsTabMenuDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      {
        label: "Dashboard",
        icon: 'bullet-list-icon',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's20',
      },
      {
        label: "Transactions",
        icon: 'list-view-icon',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's20',
      },
      {
        label: "Products",
        icon: 'waitlist-icon',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's20',
      },
      {
        label: "Messages",
        icon: 'waitlist-icon',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's20',
        disabled: true,
      },
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  <template>
    <UlxTabmenu
      @items={{this.items}}
      @activeIndex={{this.activeIndex}}
      @onTabChange={{this.handleTabChange}}
      @variant="card-tabs"
      @tabId="card-tabs-tabmenu"
      @ariaLabel="Tab menu navigation"
    />
  </template>
}
