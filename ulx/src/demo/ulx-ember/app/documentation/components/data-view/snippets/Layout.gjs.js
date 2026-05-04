export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { eq } from 'ember-truth-helpers';
import {
  UlxDataView,
  UlxSelectButton,
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

export default class DemoDataViewLayout extends Component {
  @tracked layout = 'list';

  get products() {
    return getProductsData().slice(0, 6);
  }

  get itemColClass() {
    return this.layout === 'list' ? 'col-12' : 'col-6 sm:col-6 lg:col-4';
  }

  get layoutOptions() {
    return [
      { label: 'List', value: 'list' },
      { label: 'Grid', value: 'grid' },
    ];
  }

  getProductImageUrl = getProductImageUrl;

  getStatusVariant(status) {
    return STATUS_VARIANT[status] ?? 'secondary';
  }

  @action
  onLayoutChange(value) {
    this.layout = value ?? 'list';
  }

  @action
  addToCart(_product) {
    void _product;
  }

  <template>
    <UlxDataView @layout={{this.layout}}>
      <:header>
        <div class="flex justify-end w-full">
          <UlxSelectButton
            @options={{this.layoutOptions}}
            @value={{this.layout}}
            @onChange={{this.onLayoutChange}}
            @ariaLabel="Toggle layout"
          />
        </div>
      </:header>
      <:content>
        <div class={{if (eq this.layout "grid") "ulx-grid p-5 gap-5"}}>
          {{#each this.products as |product index|}}
            <div class={{this.itemColClass}}>
              {{#if (eq this.layout "list")}}
                <div
                  class={{if
                    (eq index 0)
                    "flex p-5 items-center gap-4"
                    "flex items-center gap-4 border-t p-5 layer1"
                  }}
                >
                  <img
                    src={{this.getProductImageUrl product.image}}
                    alt=""
                    class="w-96 h-96 rounded shadow-lg object-cover"
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
                            @ariaLabel="Tag icon"
                            @type="font"
                          />
                          <span class="semibold-font">
                            {{product.category}}
                          </span>
                        </span>
                        <UlxTag
                          @value={{product.inventoryStatus}}
                          @variant={{this.getStatusVariant
                            product.inventoryStatus
                          }}
                          @size="s-size"
                        />
                      </div>
                    </div>

                    <div class="flex flex-col items-center gap-3 justify-start">
                      <span class="text-24 semibold-font">
                        \${{product.price}}
                      </span>
                      <UlxIconButton
                        @iconLeft="order-icon"
                        @iconComponentClass="bs-icons1"
                        @iconSize="s18"
                        @variant="primary"
                        @disabled={{eq product.inventoryStatus "OUTOFSTOCK"}}
                        aria-label="Add to cart"
                        {{on "click" (fn this.addToCart product)}}
                      />
                    </div>
                  </div>
                </div>
              {{else}}
                <div class="flex flex-col p-10 border gap-5 rounded">
                  <div class="flex items-center gap-2 justify-between">
                    <div class="flex items-center gap-2">
                      <UlxIcon
                        @iconName="brands-icon"
                        @componentClass="bs-icons1"
                        @size="s12"
                        @ariaLabel="Tag icon"
                        @type="font"
                      />
                      <span class="semibold-font">
                        {{product.category}}
                      </span>
                    </div>
                    <UlxTag
                      @value={{product.inventoryStatus}}
                      @variant={{this.getStatusVariant product.inventoryStatus}}
                      @size="s-size"
                    />
                  </div>

                  <div class="flex flex-col items-center gap-2 py5">
                    <img
                      src={{this.getProductImageUrl product.image}}
                      alt=""
                      class="w-96 h-96 rounded shadow-lg object-cover"
                      aria-hidden="true"
                    />
                    <div class="text-20 bold-font">{{product.name}}</div>
                    <UlxRating
                      @value={{product.rating}}
                      @readOnly={{true}}
                      @cancel={{false}}
                    />
                  </div>

                  <div class="flex items-center gap-2 justify-between">
                    <span class="text-24 semibold-font">
                      \${{product.price}}
                    </span>
                    <UlxIconButton
                      @iconLeft="order-icon"
                      @iconComponentClass="bs-icons1"
                      @iconSize="s18"
                      @variant="primary"
                      @disabled={{eq product.inventoryStatus "OUTOFSTOCK"}}
                      aria-label="Add to cart"
                      {{on "click" (fn this.addToCart product)}}
                    />
                  </div>
                </div>
              {{/if}}
            </div>
          {{/each}}
        </div>
      </:content>
    </UlxDataView>
  </template>
}

`;
