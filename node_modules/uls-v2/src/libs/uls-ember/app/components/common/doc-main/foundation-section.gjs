import Component from '@glimmer/component';

export default class FoundationSectionComponent extends Component {
  <template>
    <section id={{@id}} class="uls-foundation-section mgb20">
      <h3 class="font-bold mgt0 mgb3">{{@title}}</h3>
      <header class="mgb4">
        {{#if @subtitle}}
          <p class="uls-foundation-section__subtitle mgb10 font-regular fg-text-secondary mgr0">
            {{@subtitle}}
          </p>
        {{/if}}
      </header>
      <div class="uls-foundation-section__content w-100p">
        {{yield}}
      </div>
    </section>
  </template>
}

