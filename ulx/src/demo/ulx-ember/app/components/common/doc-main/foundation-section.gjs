import Component from '@glimmer/component';

export default class FoundationSectionComponent extends Component {
  <template>
    <section id={{@id}} class="ulx-foundation-section mgb10">
      <h3 class="bold-font mgt0 mgb2">{{@title}}</h3>
      <header class="mgb2">
        {{#if @subtitle}}
          <p
            class="ulx-foundation-section__subtitle mgb5 font-regular fg-text-secondary mgr0"
          >
            {{@subtitle}}
          </p>
        {{/if}}
      </header>
      <div class="ulx-foundation-section__content w-100p">
        {{yield}}
      </div>
    </section>
  </template>
}
