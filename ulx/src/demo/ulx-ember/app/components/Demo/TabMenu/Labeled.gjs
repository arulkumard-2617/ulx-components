import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTabmenu } from 'ulx-components';

export default class LabeledTabMenuDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: 'Request Details' },
      { label: 'Notes' },
      { label: 'Activities' },
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
      @variant="labeled"
      @tabId="labeled-tabmenu"
      @ariaLabel="Request section navigation"
    />
  </template>
}
