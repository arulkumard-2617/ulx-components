export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSelectButton } from 'ulx-components';

export default class DemoSelectButtonCarousel extends Component {
  @tracked value = 1;

  get options() {
    return Array.from({ length: 12 }, (_, index) => ({
      label: \`Day - \${index + 1}\`,
      value: index + 1,
      highlighted: true
    }));
  }

  @action
  onChange(newValue) {
    this.value = newValue;
  }

  <template>
    <div class="ulx-grid">
      <UlxSelectButton
        @carousel={{true}}
        @visibleCount={{4}}
        @stretch={{true}}
        @options={{this.options}}
        @value={{this.value}}
        @onChange={{this.onChange}}
        @ariaLabel="Select day"
        class="col-6"
      />
    </div>
  </template>
}

`;
