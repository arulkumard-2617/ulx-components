import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import {
  UlxDataView,
  UlxDropdown,
  UlxField,
  UlxButton,
  UlxRating,
  UlxTag,
  UlxIcon,
  t,
} from 'ulx-components';
import {
  getProductsData,
  getProductImageUrl,
} from 'ulx-ember/data/product-service';

const STATUS_VARIANT = {
  INSTOCK: 'success',
  LOWSTOCK: 'warning',
  OUTOFSTOCK: 'danger',
};

const SORT_OPTIONS = [
  { labelKey: 'lbl.doc.dataview.sort.priceLowToHigh', value: 'price:asc' },
  { labelKey: 'lbl.doc.dataview.sort.priceHighToLow', value: 'price:desc' },
  { labelKey: 'lbl.doc.dataview.sort.nameAZ', value: 'name:asc' },
  { labelKey: 'lbl.doc.dataview.sort.nameZA', value: 'name:desc' },
];

export default class DemoDataViewSorting extends Component {
  @tracked sortConfig = 'price:asc';

  get sortOptions() {
    return SORT_OPTIONS.map((option) => ({
      label: t(option.labelKey),
      value: option.value,
    }));
  }

  get sortField() {
    const [field] = this.sortConfig.split(':');
    return field || 'price';
  }

  get sortOrder() {
    const [, direction] = this.sortConfig.split(':');
    return direction === 'desc' ? -1 : 1;
  }

  get products() {
    const data = getProductsData();
    if (!this.sortField) return data;
    return [...data].sort((a, b) => {
      const va = a[this.sortField];
      const vb = b[this.sortField];
      if (va == null && vb == null) return 0;
      if (va == null) return -1;
      if (vb == null) return 1;
      const cmp =
        typeof va === 'string'
          ? String(va).localeCompare(String(vb), undefined, { numeric: true })
          : va < vb
            ? -1
            : va > vb
              ? 1
              : 0;
      return cmp * this.sortOrder;
    });
  }

  getProductImageUrl = getProductImageUrl;

  getStatusVariant(status) {
    return STATUS_VARIANT[status] ?? 'secondary';
  }

  @action
  addToCart(_product) {
    void _product;
  }

  @action
  onSortChange(value) {
    this.sortConfig = value ?? 'price:asc';
  }

  <template>
    <UlxDataView>
      <:header>
        <div class="ulx-form m-size ulx-grid gap-12 mb-14">
          <UlxField
            @label={{t "lbl.doc.dataview.sort.label"}}
            @key="dataview-sorting"
            @fieldClass="col-4"
          >
            <:default as |field|>
              <UlxDropdown
                @key={{field.key}}
                @ariaDescribedBy={{field.describedBy}}
                @ariaErrorMessage={{field.errorId}}
                @options={{this.sortOptions}}
                @value={{this.sortConfig}}
                @onChange={{this.onSortChange}}
                @placeholder={{t "lbl.doc.dataview.sort.placeholder"}}
              />
            </:default>
          </UlxField>
        </div>
      </:header>
      <:content>
        {{#each this.products as |product|}}
          <div class="col-12">
            <div class="flex p-10 items-center gap-4">
              <img
                src={{this.getProductImageUrl product.image}}
                alt=""
                class="w-96 h-96 rounded shadow-lg object-cover"
                aria-hidden="true"
              />

              <div class="flex items-center gap-4 justify-between w-full">
                <div class="flex gap-3 flex-col">
                  <div class="font-size20 bold-font">{{product.name}}</div>
                  <UlxRating
                    @value={{product.rating}}
                    @readOnly={{true}}
                    @cancel={{false}}
                  />
                  <div class="flex items-center gap-3">
                    <span class="flex items-center gap-2">
                      <UlxIcon
                        @iconName="brands-icon"
                        @componentClass="bs-icons1"
                        @size="s12"
                        @ariaLabel="tag icon"
                        @type="font"
                      />
                      <span class="font-semibold">Accessories</span>
                    </span>
                    <UlxTag
                      @value={{product.inventoryStatus}}
                      @variant={{this.getStatusVariant product.inventoryStatus}}
                      @size="s-size"
                    />
                  </div>
                </div>

                <div class="flex flex-col items-center gap-3 justify-start">
                  <span class="font-size24 font-semibold">
                    ${{product.price}}
                  </span>
                  <UlxButton
                    @iconComponentClass="bs-icons1"
                    @iconSize="s18"
                    @icon="order-icon"
                    @variant="primary"
                    aria-label={{t "lbl.doc.dataview.addToCart"}}
                    {{on "click" (fn this.addToCart product)}}
                  />
                </div>
              </div>
            </div>
          </div>
        {{/each}}
      </:content>
    </UlxDataView>
  </template>
}
