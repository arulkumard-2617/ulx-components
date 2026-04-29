import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPaginator, UlxIconButton, UlxDivider } from 'ulx-components';

export default class TemplatePaginatorDemo extends Component {
  @tracked first1 = 0;
  @tracked rows1 = 10;
  @tracked first2 = 0;
  @tracked rows2 = 10;

  totalRecords = 120;
  rowsPerPageOptions1 = [10, 20, 30, 40];
  rowsPerPageOptions2 = [5, 10, 20, 120];

  template1 =
    'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport';
  template2 = 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink';

  @action
  onPageChange1(event) {
    this.first1 = event.first;
    this.rows1 = event.rows;
  }

  @action
  onPageChange2(event) {
    this.first2 = event.first;
    this.rows2 = event.rows;
  }

  <template>
    <div class="flex items-center gap-4 flex-col">
      <div class="flex items-center gap-4 flex-col">
        <UlxPaginator
          @totalRecords={{this.totalRecords}}
          @rows={{this.rows1}}
          @first={{this.first1}}
          @template={{this.template1}}
          @rowsPerPageOptions={{this.rowsPerPageOptions1}}
          @onPageChange={{this.onPageChange1}}
        >
          <:left>
            <UlxIconButton
              @iconLeft="left-arrow-icon"
              @iconComponentClass="bs-icons1"
              @iconSize="s18"
              @variant="secondary"
              @outlined={{true}}
              aria-label="Favorite"
            />
          </:left>
          <:prevPageLink as |opt|>
            <UlxIconButton
              @label="Previous"
              @iconLeft={{opt.icon}}
              @variant="basic"
              @disabled={{opt.disabled}}
              @onClick={{opt.onClick}}
              aria-label={{opt.ariaLabel}}
            />
          </:prevPageLink>
          <:nextPageLink as |opt|>
            <UlxIconButton
              @label="Next"
              @iconRight={{opt.icon}}
              @variant="basic"
              @disabled={{opt.disabled}}
              @onClick={{opt.onClick}}
              aria-label={{opt.ariaLabel}}
            />
          </:nextPageLink>
          <:right>
            <UlxIconButton
              @iconLeft="search-icon"
              @iconComponentClass="bs-icons1"
              @iconSize="s18"
              @variant="primary"
              aria-label="Search"
            />
          </:right>
        </UlxPaginator>
      </div>

      <UlxDivider />

      <div class="flex items-center gap-4 fxd-flex-col gap-4">
        <UlxPaginator
          @totalRecords={{this.totalRecords}}
          @rows={{this.rows2}}
          @first={{this.first2}}
          @template={{this.template2}}
          @rowsPerPageOptions={{this.rowsPerPageOptions2}}
          @onPageChange={{this.onPageChange2}}
        >
          <:currentPageReport as |opt|>
            <span
              class="paginator-current-report fg-text-secondary"
              style="width: 120px; text-align: center;"
            >
              {{opt.first}}
              -
              {{opt.last}}
              of
              {{opt.totalRecords}}
            </span>
          </:currentPageReport>
        </UlxPaginator>
      </div>
    </div>
  </template>
}
