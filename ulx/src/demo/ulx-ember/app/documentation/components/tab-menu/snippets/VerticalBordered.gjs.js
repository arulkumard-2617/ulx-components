export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTabmenu } from 'ulx-components';

export default class VerticalBorderedTabMenuDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: 'Summary' },
      { label: 'Recordings' },
      { label: 'Polls' },
      { label: 'Materials' },
      { label: 'Handouts' },
      { label: 'Participants' },
      { label: 'Questions' },
      { label: 'Feedback' },
      { label: 'Chat' }
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  <template>
    <div class="w-252">
      <UlxTabmenu
        @items={{this.items}}
        @activeIndex={{this.activeIndex}}
        @onTabChange={{this.handleTabChange}}
        @variant="vertical"
        @customClass="bordered"
        @tabId="vertical-bordered-tabmenu"
        @ariaLabel="Session section navigation"
      />
    </div>
  </template>
}

`;
