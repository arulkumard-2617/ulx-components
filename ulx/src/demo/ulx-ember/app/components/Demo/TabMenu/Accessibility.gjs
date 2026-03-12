import Component from '@glimmer/component';
import { UlxTabmenu, t } from 'ulx-components';

export default class AccessibilityTabMenuDemo extends Component {
  get items() {
    return [
      { label: t('lbl.dashboard') },
      { label: t('lbl.transactions') },
      { label: t('lbl.products') },
      { label: t('lbl.messages'), disabled: true },
    ];
  }

  <template>
    <div class="pda4">
      <UlxTabmenu
        @model={{this.items}}
        @tabId="accessibility-tabmenu"
        @ariaLabel={{t "lbl.tabmenu.navigation"}}
      />
    </div>
  </template>
}

