import Component from '@glimmer/component';

export default class FoundationLayoutComponent extends Component {
  <template>
    <div class="doc-foundation-page pd10">
      <header class="doc-foundation-page__header mgb8">
        <h3 class="mgt0 mgb2 bold-font">{{@title}}</h3>
        {{#if @description}}
          <p class="fg-text-secondary mgt0">{{@description}}</p>
        {{/if}}
      </header>
      <div class="doc-foundation-page__content">
        {{yield}}
      </div>
    </div>
  </template>
}
