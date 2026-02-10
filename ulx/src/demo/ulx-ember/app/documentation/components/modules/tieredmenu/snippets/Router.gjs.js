export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
<<<<<<<< HEAD:ulx/src/demo/ulx-ember/app/documentation/components/modules/dialog/snippets/Headless.gjs.js
import { UlxModal } from 'uls-components';

export default class HeadlessDemoComponent extends Component {
========
import { UlxTieredmenu } from 'ulx-components';

export default class RouterDemoComponent extends Component {
>>>>>>>> 60b32ecd086cac382ff87b4a9a97aeafa04e7679:ulx/src/demo/ulx-ember/app/documentation/components/modules/tieredmenu/snippets/Router.gjs.js
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
<<<<<<<< HEAD:ulx/src/demo/ulx-ember/app/documentation/components/modules/dialog/snippets/Headless.gjs.js
    <UlxModal
========
    <UlxTieredmenu
>>>>>>>> 60b32ecd086cac382ff87b4a9a97aeafa04e7679:ulx/src/demo/ulx-ember/app/documentation/components/modules/tieredmenu/snippets/Router.gjs.js
      @items={{this.items}}
      @activeItem={{this.activeItem}}
      @onItemClick={{this.handleItemClick}}
    />
  </template>
}
`;
