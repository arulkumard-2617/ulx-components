import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import DocTab from './doc-tab';
import DocComponentPageHeader from './doc-component-page-header';
import WorkInProgressNotice from './work-in-progress-notice';
import componentApiRegistry from '../../../documentation/generated/component-api';
import componentUsagesRegistry from '../../../documentation/generated/component-usages-registry';

export default class ComponentLayoutComponent extends Component {
  @service router;

  get isArchitectureTab() {
    return this.args.activeTab === 'architecture';
  }

  get usageDoc() {
    return componentUsagesRegistry[this.docRouteKey] ?? null;
  }

  get hasUsageGuidance() {
    return !!this.usageDoc?.usages;
  }

  get guidanceSubtitle() {
    return this.usageDoc?.usages?.guidanceSubtitle ?? null;
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

  get visibleTabs() {
    return (this.args.tabs ?? []).filter(
      (tab) => tab.id !== 'architecture' && tab.id !== 'params'
    );
  }

  get useDocTabs() {
    return this.visibleTabs.length > 1;
  }

  get hasTabContent() {
    return this.visibleTabs.length > 0;
  }

  get pageSummary() {
    const { description } = this.args;
    if (description) {
      return description;
    }

    return this.usageDoc?.summary ?? this.usageDoc?.subHeader ?? null;
  }

  get pageAiHint() {
    if (!this.hasUsageGuidance) {
      return null;
    }

    return 'Read usage guidance below, when and how to use this component.';
  }

  get pageApiHint() {
    if (!this.hasParamsRows) {
      return null;
    }

    return 'Expand API arguments below for the full public API.';
  }

  <template>
    <div class="min-w-0">
      {{#if this.useDocTabs}}
        <DocTab
          @tabs={{this.visibleTabs}}
          @activeTab={{@activeTab}}
          @onChange={{@onTabChange}}
        >
          <:pageHeader>
            <DocComponentPageHeader
              @title={{@title}}
              @pageSummary={{this.pageSummary}}
              @pageAiHint={{this.pageAiHint}}
              @pageApiHint={{this.pageApiHint}}
              @usages={{if this.hasUsageGuidance this.usageDoc.usages}}
              @guidanceSubtitle={{this.guidanceSubtitle}}
              @routeKey={{this.docRouteKey}}
              @showApiParams={{this.hasParamsRows}}
            />
          </:pageHeader>

          <:default>
            {{#if this.isArchitectureTab}}
              <WorkInProgressNotice />
            {{else}}
              {{yield @activeTab}}
            {{/if}}
          </:default>
        </DocTab>
      {{else}}
        <DocComponentPageHeader
          @title={{@title}}
          @pageSummary={{this.pageSummary}}
          @pageAiHint={{this.pageAiHint}}
          @pageApiHint={{this.pageApiHint}}
          @usages={{if this.hasUsageGuidance this.usageDoc.usages}}
          @guidanceSubtitle={{this.usageDoc.usages.guidanceSubtitle}}
          @routeKey={{this.docRouteKey}}
          @showApiParams={{this.hasParamsRows}}
          @customClass="px-10"
        />
        <div class="doc-tab__content pt-8 pb-12 px-10">
          {{#if this.hasTabContent}}
            {{#if this.isArchitectureTab}}
              <WorkInProgressNotice />
            {{else}}
              {{yield @activeTab}}
            {{/if}}
          {{else}}
            {{yield}}
          {{/if}}
        </div>
      {{/if}}
    </div>
  </template>
}
