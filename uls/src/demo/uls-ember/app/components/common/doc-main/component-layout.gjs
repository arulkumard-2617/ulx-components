import Component from '@glimmer/component';
import DocTab from './doc-tab';

export default class ComponentLayoutComponent extends Component {
  <template>
    <div class="doc-component-page">
      {{#if @tabs}}
        <DocTab
          @tabs={{@tabs}}
          @activeTab={{@activeTab}}
          @onChange={{@onTabChange}}
        >
          <header class="doc-component-page__header mgb8">
            <h1 class="mgt0 mgb2 bold-font">{{@title}}</h1>
            {{#if @description}}
              <p class="fg-text-secondary mgt0">{{@description}}</p>
            {{/if}}
          </header>
          <div class="doc-component-page__content">
            {{yield @activeTab}}
          </div>
        </DocTab>
      {{else}}
        <header class="doc-component-page__header mgb8">
          <h1 class="mgt0 mgb2 bold-font">{{@title}}</h1>
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

