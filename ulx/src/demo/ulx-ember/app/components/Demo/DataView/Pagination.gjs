import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import {
  UlxDataView,
  UlxPaginator,
  UlxButton,
  UlxRating,
  UlxTag,
  UlxIcon,
  t,
} from 'ulx-components';
import { array } from '@ember/helper';
import {
  getProductsData,
  getProductImageUrl,
} from 'ulx-ember/data/product-service';

const STATUS_VARIANT = {
  INSTOCK: 'success',
  LOWSTOCK: 'warning',
  OUTOFSTOCK: 'danger',
};

export default class DemoDataViewPagination extends Component {
  @tracked first = 0;
  @tracked rows = 6;

  get products() {
    return getProductsData();
  }

  get totalRecords() {
    return this.products.length;
  }

  get itemsForPage() {
    const { first, rows } = this;
    const end = Math.min(first + rows, this.totalRecords);
    return this.products.slice(first, end);
  }

  getProductImageUrl = getProductImageUrl;

  getStatusVariant(status) {
    return STATUS_VARIANT[status] ?? 'secondary';
  }

  @action
  onPage(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  @action
  addToCart(_product) {
    void _product;
  }

  <template>
    <UlxDataView>
      <:content>
        {{#each this.itemsForPage as |product|}}
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
                    aria-label={{"Add to cart"}}
                    {{on "click" (fn this.addToCart product)}}
                  />
                </div>
              </div>
            </div>
          </div>
        {{/each}}
      </:content>
      <:footer>
        <div class="mt-4">
          <UlxPaginator
            @totalRecords={{this.totalRecords}}
            @rows={{this.rows}}
            @first={{this.first}}
            @onPageChange={{this.onPage}}
            @rowsPerPageOptions={{array 6 12 24}}
          />
        </div>
      </:footer>
    </UlxDataView>
  </template>
}
