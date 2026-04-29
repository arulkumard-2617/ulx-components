import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDatePicker } from 'ulx-components';

export default class CustomparseformatDatepickerDemo extends Component {
  @tracked value = null;

  flatpickrOptions = {
    altInput: true,
    parseDate: (datestr) => {
      const parts = datestr.split('-').map(Number);
      return new Date(parts[2], parts[1] - 1, parts[0]);
    },
    formatDate: (date) => {
      const d = String(date.getDate()).padStart(2, '0');
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const y = date.getFullYear();
      return d + '-' + m + '-' + y;
    }
  };

  @action
  onChange(dates) {
    this.value = dates?.[0] ?? null;
  }

  <template>
    <div class="w-252">
      <UlxDatePicker
        @value={{this.value}}
        @onChange={{this.onChange}}
        @dateFormat="d-m-Y"
        @altFormat="d-m-Y"
        @allowInput={{true}}
        @flatpickrOptions={{this.flatpickrOptions}}
      />
    </div>
  </template>
}
