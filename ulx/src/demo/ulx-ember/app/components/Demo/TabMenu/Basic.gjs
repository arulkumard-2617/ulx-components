import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTabmenu, t } from 'ulx-components';

export default class BasicTabMenuDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: "Dashboard" },
      { label: "Transactions" },
      { label: "Products" },
      { label: "Messages" },
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
      @tabId="basic-tabmenu"
      @ariaLabel="Tab menu navigation"
    />
  </template>
}
