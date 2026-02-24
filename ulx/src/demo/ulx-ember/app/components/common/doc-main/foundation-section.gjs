import Component from '@glimmer/component';

export default class FoundationSectionComponent extends Component {
  <template>
    <section id={{@id}} class="ulx-foundation-section mb-10">
      <h3 class="bold-font mgt0 mb-2">{{@title}}</h3>
      <header class="mb-2">
        {{#if @subtitle}}
          <p
            class="ulx-foundation-section__subtitle mb-5 font-regular fg-text-secondary me-0"
          >
            {{@subtitle}}
          </p>
        {{/if}}
      </header>
      <div class="ulx-foundation-section__content w-full">
        {{yield}}
      </div>
    </section>
  </template>
}
