import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTabmenu, t } from 'ulx-components';

export default class BasicTabMenuDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: t('lbl.dashboard') },
      { label: t('lbl.transactions') },
      { label: t('lbl.products') },
      { label: t('lbl.messages') },
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  <template>
    <UlxTabmenu
      @items={{this.items}}
      @activeIndex={{this.activeIndex}}
      @onTabChange={{this.handleTabChange}}
      @tabId="basic-tabmenu"
      @ariaLabel={{t "lbl.tabmenu.navigation"}}
    />
  </template>
}
