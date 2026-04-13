import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DocTab from './doc-tab';
import ComponentParamsTable from './component-params-table';
import WorkInProgressNotice from './work-in-progress-notice';
import componentApiRegistry from '../../../documentation/generated/component-api';

export default class ComponentLayoutComponent extends Component {
  @service router;

  get isParamsTab() {
    return this.args.activeTab === 'params';
  }

  get isArchitectureTab() {
    return this.args.activeTab === 'architecture';
  }

  get docRouteKey() {
    const routeName = this.router.currentRouteName ?? '';
    return routeName.split('.').at(-1) ?? '';
  }

  get paramsDocumentation() {
    return componentApiRegistry[this.docRouteKey] ?? null;
  }

  get paramsRows() {
    return this.paramsDocumentation?.params ?? [];
  }

  get hasParamsRows() {
    return this.paramsRows.length > 0;
  }

  <template>
    <div class="doc-component-page">
      {{#if @tabs}}
        <DocTab
          @tabs={{@tabs}}
          @activeTab={{@activeTab}}
          @onChange={{@onTabChange}}
        >
          <div class="doc-component-page__header mb-8">
            <h1 class="mgt0 mb-2 bold-font">{{@title}}</h1>
            {{#if @description}}
              <p class="fg-text-secondary mgt0">{{@description}}</p>
            {{/if}}
          </div>
          <div class="doc-component-page__content">
            {{#if this.isArchitectureTab}}
              <WorkInProgressNotice />
            {{else if this.isParamsTab}}
              {{#if this.hasParamsRows}}
                <ComponentParamsTable @rows={{this.paramsRows}} />
              {{else}}
                <WorkInProgressNotice />
              {{/if}}
            {{else}}
              {{yield @activeTab}}
            {{/if}}
          </div>
        </DocTab>
      {{else}}
        <div class="doc-component-page__header mb-8">
          <h1 class="mgt0 mb-2 bold-font">{{@title}}</h1>
          {{#if @description}}
            <p class="fg-text-secondary mgt0">{{@description}}</p>
          {{/if}}
        </div>
        <div class="doc-component-page__content">
          {{yield}}
        </div>
      {{/if}}
    </div>
  </template>
}
