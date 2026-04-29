export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class EnablefunctionDatepickerDemo extends Component {
  @tracked value = null;

  enable = [
    (d) => {
      return d.getMonth() % 2 === 0 && d.getDate() < 15;
    }
  ];

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-252">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @enable={{this.enable}}
      />
    </div>
  </template>
}

`;
