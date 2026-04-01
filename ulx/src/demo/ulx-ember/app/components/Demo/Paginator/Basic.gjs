import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPaginator } from 'ulx-components';

export default class BasicPaginatorDemo extends Component {
  @tracked first = 0;
  @tracked rows = 10;
  totalRecords = 120;
  rowsPerPageOptions = [10, 20, 30, 40];

  @action
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxPaginator
        @totalRecords={{this.totalRecords}}
        @rows={{this.rows}}
        @first={{this.first}}
        @rowsPerPageOptions={{this.rowsPerPageOptions}}
        @onPageChange={{this.onPageChange}}
      />
    </div>
  </template>
}
