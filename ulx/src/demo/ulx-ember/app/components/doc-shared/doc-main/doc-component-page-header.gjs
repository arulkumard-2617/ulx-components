import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import DocGuidancePanel from './doc-guidance-panel';
import DocApiParamsPanel from './doc-api-params-panel';

export default class DocComponentPageHeaderComponent extends Component {
  get hasAccordions() {
    return !!this.args.usages || !!this.args.showApiParams;
  }
  <template>
    {{#if @title}}
      <header class="doc-component-page__header pt-6 {{@customClass}}">
        <h1 class="mgt0 mb-2 bold-font">{{@title}}</h1>
        {{#if (or @pageSummary @pageAiHint @pageApiHint)}}
          <div class="doc-component-page__intro">
            {{#if @pageSummary}}
              <p
                class="fg-text-secondary mgt0 mb-0 text-14"
              >{{@pageSummary}}</p>
            {{/if}}
            {{#if @pageAiHint}}
              <p class="fg-text-secondary mgt0 mb-0 text-14">{{@pageAiHint}}</p>
            {{/if}}
            {{#if @pageApiHint}}
              <p
                class="fg-text-secondary mgt0 mb-0 text-14"
              >{{@pageApiHint}}</p>
            {{/if}}
          </div>
        {{/if}}
        {{#if this.hasAccordions}}
          <div class="doc-component-accordions">
            {{#if @usages}}
              <DocGuidancePanel
                @usages={{@usages}}
                @routeKey={{@routeKey}}
                @subtitle={{@guidanceSubtitle}}
              />
            {{/if}}
            {{#if @showApiParams}}
              <DocApiParamsPanel @routeKey={{@routeKey}} />
            {{/if}}
          </div>
        {{/if}}
      </header>
    {{/if}}
  </template>
}
