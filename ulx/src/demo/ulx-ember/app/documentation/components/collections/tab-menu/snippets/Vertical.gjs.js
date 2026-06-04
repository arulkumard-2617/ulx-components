export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTabmenu } from 'ulx-components';

export default class VerticalTabMenuDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: 'General' },
      { label: 'Profile' },
      { label: 'Security' },
      { label: 'Notifications', disabled: true },
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  <template>
    <div class="w-250">
      <UlxTabmenu
        @items={{this.items}}
        @activeIndex={{this.activeIndex}}
        @onTabChange={{this.handleTabChange}}
        @variant="vertical"
        @tabId="vertical-tabmenu"
        @ariaLabel="Settings section navigation"
      />
    </div>
  </template>
}

`;
