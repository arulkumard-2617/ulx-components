import Component from '@glimmer/component';
import DocTab from './doc-tab';
import WorkInProgressNotice from './work-in-progress-notice';

export default class ComponentLayoutComponent extends Component {
  get showDocsWorkInProgress() {
    const { activeTab } = this.args;
    return activeTab === 'params' || activeTab === 'architecture';
  }

  <template>
    <div class="doc-component-page">
      {{#if @tabs}}
        <DocTab
          @tabs={{@tabs}}
          @activeTab={{@activeTab}}
          @onChange={{@onTabChange}}
        >
          <header class="doc-component-page__header mb-8">
            <h1 class="mgt0 mb-2 bold-font">{{@title}}</h1>
            {{#if @description}}
              <p class="fg-text-secondary mgt0">{{@description}}</p>
            {{/if}}
          </header>
          <div class="doc-component-page__content">
            {{#if this.showDocsWorkInProgress}}
              <WorkInProgressNotice />
            {{else}}
              {{yield @activeTab}}
            {{/if}}
          </div>
        </DocTab>
      {{else}}
        <header class="doc-component-page__header mb-8">
          <h1 class="mgt0 mb-2 bold-font">{{@title}}</h1>
          {{#if @description}}
            <p class="fg-text-secondary mgt0">{{@description}}</p>
          {{/if}}
        </header>
        <div class="doc-component-page__content">
          {{yield}}
        </div>
      {{/if}}
    </div>
  </template>
}
