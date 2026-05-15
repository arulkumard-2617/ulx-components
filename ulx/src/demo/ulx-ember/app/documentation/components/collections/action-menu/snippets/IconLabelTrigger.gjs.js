export default `
/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxActionMenu } from 'ulx-components';
import { actionMenuDemoItems } from './items';

export default class DemoActionMenuIconLabelTrigger extends Component {
  get items() {
    return actionMenuDemoItems;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item?.label);
  }

  <template>
    <UlxActionMenu
      @label="Actions"
      @icon="bs-icons1 session-settings-icon"
      @items={{this.items}}
      @variant="secondary"
      @outlined={{true}}
      @onItemSelect={{this.handleItemSelect}}
    />
  </template>
}

`;
