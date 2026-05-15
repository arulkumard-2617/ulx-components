/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxActionMenu } from 'ulx-components';
import { actionMenuDemoItems } from './items';

export default class DemoActionMenuOverview extends Component {
  get items() {
    return actionMenuDemoItems;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item?.label);
  }

  <template>
    <div class="flex gap-8 flex-wrap items-center">
      <UlxActionMenu
        @label="Actions"
        @items={{this.items}}
        @variant="primary"
        @onItemSelect={{this.handleItemSelect}}
      />

      <UlxActionMenu
        @label="Actions"
        @icon="bs-icons1 session-settings-icon"
        @items={{this.items}}
        @variant="secondary"
        @outlined={{true}}
        @onItemSelect={{this.handleItemSelect}}
      />

      <UlxActionMenu
        @icon="bs-icons1 session-settings-icon"
        @triggerAriaLabel="Open actions menu"
        @items={{this.items}}
        @variant="secondary"
        @text={{true}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}
