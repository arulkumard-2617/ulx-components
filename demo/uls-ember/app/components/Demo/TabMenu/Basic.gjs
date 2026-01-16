import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import UlsTabmenu from 'uls-components/components/collections/uls-tabmenu';

export default class BasicDemoComponent extends Component {
  @tracked activeItem = 'dashboard';

  items = [
    { label: 'Dashboard', icon: 'pi pi-home', id: 'dashboard' },
    { label: 'Transactions', icon: 'pi pi-chart-line', id: 'transactions' },
    { label: 'Products', icon: 'pi pi-list', id: 'products' },
    { label: 'Messages', icon: 'pi pi-inbox', id: 'messages' }
  ];

  @action
  handleTabChange(event) {
    // Extract item ID from the event
    const itemId = event.item.id || event.item.label;
    this.activeItem = itemId;
  }

  <template>
    {{! BEGIN-SNIPPET tabmenu-basic.gjs }}
    <UlsTabmenu 
      @model={{this.items}}
      @activeItem={{this.activeItem}}
      @onTabChange={{this.handleTabChange}}
    />
    {{! END-SNIPPET }}
  </template>
}

