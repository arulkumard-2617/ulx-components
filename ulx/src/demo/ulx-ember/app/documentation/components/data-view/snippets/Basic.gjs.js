export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import {
  UlxDataView,
  UlxIconButton,
  UlxRating,
  UlxTag,
  UlxIcon,
  t
} from 'ulx-components';
import {
  getProductsData,
  getProductImageUrl
} from 'ulx-ember/data/product-service';

const STATUS_VARIANT = {
  INSTOCK: 'success',
  LOWSTOCK: 'warning',
  OUTOFSTOCK: 'danger'
};

export default class DemoDataViewBasic extends Component {
  get products() {
    return getProductsData().slice(0, 5);
  }

  getProductImageUrl = getProductImageUrl;

  getStatusVariant(status) {
    return STATUS_VARIANT[status] ?? 'secondary';
  }

  @action
  addToCart(_product) {
    // Demo: no-op; could integrate toast or cart service. Param kept for (fn this.addToCart product).
    void _product;
  }

  <template>
    <UlxDataView>
      <:content>
        {{#each this.products as |product|}}
          <div class="col-12">
            <div class="flex p-10 items-center gap-4">
              <img
                src={{this.getProductImageUrl product.image}}
                alt=""
                class="w-96 h-96 rounded shadow-md object-cover"
                aria-hidden="true"
              />

              <div class="flex items-center gap-4 justify-between w-full">
                <div class="flex gap-3 flex-col">
                  <div class="text-20 bold-font">{{product.name}}</div>
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
                      <span class="semibold-font">Accessories</span>
                    </span>
                    <UlxTag
                      @value={{product.inventoryStatus}}
                      @variant={{this.getStatusVariant product.inventoryStatus}}
                      @size="s-size"
                    />
                  </div>
                </div>

                <div class="flex flex-col items-center gap-3 justify-start">
                  <span class="text-24 semibold-font">
                    \${{product.price}}
                  </span>
                  <UlxIconButton
                    @label={{t "lbl.doc.dataview.addToCart"}}
                    @iconLeft="order-icon"
                    @iconComponentClass="bs-icons1"
                    @iconSize="s18"
                    @variant="primary"
                    @onClick={{fn this.addToCart product}}
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

`;
