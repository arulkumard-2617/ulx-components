import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPaginator } from 'ulx-components';

export default class LayoutPaginatorDemo extends Component {
  @tracked first = 0;
  rows = 10;
  totalRecords = 50;
  layoutTemplate = 'PrevPageLink CurrentPageReport NextPageLink';

  @action
  onPageChange(event) {
    this.first = event.first;
  }

  <template>
    <div class="fxb fvc gp4">
      <UlxPaginator
        @totalRecords={{this.totalRecords}}
        @rows={{this.rows}}
        @first={{this.first}}
        @template={{this.layoutTemplate}}
        @onPageChange={{this.onPageChange}}
      />
    </div>
  </template>
}
