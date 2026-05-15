export default `
/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxActionMenu } from 'ulx-components';
import { actionMenuDemoItems } from './items';

export default class DemoActionMenuIconOnlyTrigger extends Component {
  get items() {
    return actionMenuDemoItems;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item?.label);
  }

  <template>
    <UlxActionMenu
      @icon="bs-icons1 session-settings-icon"
      @triggerAriaLabel="Open actions menu"
      @items={{this.items}}
      @variant="secondary"
      @text={{true}}
      @onItemSelect={{this.handleItemSelect}}
    />
  </template>
}

`;
