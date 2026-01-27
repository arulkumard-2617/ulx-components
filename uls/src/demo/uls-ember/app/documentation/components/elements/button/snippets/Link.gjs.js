export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlsButton } from 'uls-components';

export default class LinkDemoComponent extends Component {
  @tracked activeItem = null;

  constructor() {
    super(...arguments);
    // Initialize with first item active
    if (this.items && this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }

  get items() {
    return [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: 'item3' }
    ];
  }

  @action
  handleItemClick(item) {
    this.activeItem = item;
  }

  <template>
    <UlsButton 
      @items={{this.items}}
      @activeItem={{this.activeItem}}
      @onItemClick={{this.handleItemClick}}
    />
  </template>
}
`;
