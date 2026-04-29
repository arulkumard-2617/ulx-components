export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTimePicker } from 'ulx-components';

export default class Basic24TimeDemo extends Component {
  @tracked value = null;

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-252">
      <UlxTimePicker
        @hourFormat="24"
        @value={{this.value}}
        @onChange={{this.onChange}}
      />
    </div>
  </template>
}

`;
