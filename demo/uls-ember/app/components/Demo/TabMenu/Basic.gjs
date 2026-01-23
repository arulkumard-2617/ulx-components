import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import UlsTabmenu from 'uls-components/components/collections/uls-tabmenu';
import UlsInput, { UlsTextArea } from 'uls-components/components/elements/uls-input';
import { hash } from '@ember/helper';


export default class BasicDemoComponent extends Component {
  @tracked activeItem = 'dashboard';

  items = [
    { label: 'Dashboard',  id: 'dashboard' },
    { label: 'Transactions', id: 'transactions' },
    { label: 'Products',  id: 'products' },
    { label: 'Messages',  id: 'messages' }
  ];

  @action
  handleTabChange(event) {
    // Extract item ID from the event
    const itemId = event.item.id || event.item.label;
    this.activeItem = itemId;
  }

  <template>
    <div>
      <UlsTabmenu 
        @model={{this.items}}
        @activeItem={{this.activeItem}}
        @onTabChange={{this.handleTabChange}}
      />
    </div>
  </template>
}

