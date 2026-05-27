export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider } from 'ulx-components';

export default class SizeSliderDemo extends Component {
  @tracked value = 50;

  get sizes() {
    return [
      { label: 'xs-size', size: 'w-300 xs-size' },
      { label: 's-size', size: 'w-300 s-size' },
      { label: 'm-size', size: 'w-300 m-size' },
      { label: 'l-size', size: 'w-300 l-size' },
      { label: 'xl-size', size: 'w-300 xl-size' },
    ];
  }

  @action
  handleChange(nextValue) {
    this.value = Number(nextValue);
  }

  <template>
    <div class="ulx-flex-col gap-8">
      {{#each this.sizes key="size" as |item|}}
        <div class="flex flex-col gap-2">
          <span class="text-12 fg-secondary">{{item.label}}</span>
          <UlxSlider
            @value={{this.value}}
            @onChange={{this.handleChange}}
            @size={{item.size}}
          />
        </div>
      {{/each}}
    </div>
  </template>
}

`;
