import Component from '@glimmer/component';
import { UlxTabmenu, t } from 'ulx-components';

export default class AccessibilityTabMenuDemo extends Component {
  get items() {
    return [
      { label: "Dashboard" },
      { label: "Transactions" },
      { label: "Products" },
      { label: "Messages", disabled: true },
    ];
  }

  <template>
    <div class="pda4">
      <UlxTabmenu
        @items={{this.items}}
        @tabId="accessibility-tabmenu"
        @ariaLabel="Tab menu navigation"
      />
    </div>
  </template>
}

