/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxActionMenu } from 'ulx-components';
import { actionMenuDemoItems } from './items';

export default class DemoActionMenuLabelTrigger extends Component {
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
      @items={{this.items}}
      @variant="primary"
      @onItemSelect={{this.handleItemSelect}}
    />
  </template>
}
