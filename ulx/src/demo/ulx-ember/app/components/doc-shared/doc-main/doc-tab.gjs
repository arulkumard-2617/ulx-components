import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTabmenu } from 'ulx-components';

export default class DocTabComponent extends Component {
  get activeIndex() {
    const { tabs, activeTab } = this.args;
    if (!tabs || !activeTab) return 0;
    const idx = tabs.findIndex((tab) => tab.id === activeTab);
    return idx >= 0 ? idx : 0;
  }

  @action
  handleTabChange(event) {
    const tab = this.args.tabs?.[event.index];
    if (tab && this.args.onChange) {
      this.args.onChange(tab.id);
    }
  }

  <template>
    <div class="doc-tab">
      <UlxTabmenu
        @items={{@tabs}}
        @activeIndex={{this.activeIndex}}
        @onTabChange={{this.handleTabChange}}
        @tabId="doc-tabmenu"
        @customClass="position-sticky l-size top-32 left-0 z-10 px-10 border-b bg-default"
      />
      {{#if (has-block "pageHeader")}}
        <div class="doc-tab__page-header px-10 pt-8">
          {{yield to="pageHeader"}}
        </div>
      {{/if}}
      <div class="doc-tab__content pt-8 pb-12 px-10">
        {{yield}}
      </div>
    </div>
  </template>
}
