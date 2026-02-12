export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTieredmenu, t } from 'ulx-components';

export default class CommandDemoComponent extends Component {
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
      { label: t('lbl.item.1'), value: 'item1' },
      { label: t('lbl.item.2'), value: 'item2' },
      { label: t('lbl.item.3'), value: 'item3' }
    ];
  }

  @action
  handleItemClick(item) {
    this.activeItem = item;
  }

  <template>
    <UlxTieredmenu
      @items={{this.items}}
      @activeItem={{this.activeItem}}
      @onItemClick={{this.handleItemClick}}
    />
  </template>
}
`;
