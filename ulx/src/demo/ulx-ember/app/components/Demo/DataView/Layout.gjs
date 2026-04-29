import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { eq } from 'ember-truth-helpers';
import {
  UlxDataView,
  UlxButton,
  UlxIconButton,
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

export default class DemoDataViewLayout extends Component {
  @tracked layout = 'list';

  get products() {
    return getProductsData().slice(0, 6);
  }

  get itemColClass() {
    return this.layout === 'list' ? 'col-12' : 'col-12 sm:col-6 lg:col-4';
  }

  getProductImageUrl = getProductImageUrl;

  getStatusVariant(status) {
    return STATUS_VARIANT[status] ?? 'secondary';
  }

  @action
  setList() {
    this.layout = 'list';
  }

  @action
  setGrid() {
    this.layout = 'grid';
  }

  @action
  addToCart(_product) {
    void _product;
  }

  <template>
    <UlxDataView @layout={{this.layout}}>
      <:header>
        <div class="flex justify-end w-full">
          <UlxButton
            @variant={{if (eq this.layout "list") "primary" "secondary"}}
            @label={{t "lbl.doc.dataview.layout.list"}}
            {{on "click" this.setList}}
          />
          <UlxButton
            @variant={{if (eq this.layout "grid") "primary" "secondary"}}
            @label={{t "lbl.doc.dataview.layout.grid"}}
            {{on "click" this.setGrid}}
          />
        </div>
      </:header>
      <:content>
        {{#each this.products as |product index|}}
          <div class={{this.itemColClass}}>
            {{#if (eq this.layout "list")}}
              <div
                class={{if
                  (eq index 0)
                  "flex p-10 items-center gap-4"
                  "flex items-center gap-4 border-t p-5 layer1"
                }}
              >
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
                          @ariaLabel={{t "lbl.doc.dataview.tagIcon"}}
                          @type="font"
                        />
                        <span class="font-semibold">
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
                      ${{product.price}}
                    </span>
                    <UlxIconButton
                      @label={{t "lbl.doc.dataview.addToCart"}}
                      @iconLeft="order-icon"
                      @iconComponentClass="bs-icons1"
                      @iconSize="s18"
                      @variant="primary"
                      @disabled={{eq product.inventoryStatus "OUTOFSTOCK"}}
                      @onClick={{fn this.addToCart product}}
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
                      @ariaLabel={{t "lbl.doc.dataview.tagIcon"}}
                      @type="font"
                    />
                    <span class="font-semibold">
                      {{product.category}}
                    </span>
                  </div>
                  <UlxTag
                    @value={{product.inventoryStatus}}
                    @variant={{this.getStatusVariant product.inventoryStatus}}
                    @size="s-size"
                  />
                </div>

                <div class="flex flex-col items-center gap-2 py-5">
                  <img
                    src={{this.getProductImageUrl product.image}}
                    alt=""
                    class="w-96 h-96 rounded shadow-md object-cover"
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
                    ${{product.price}}
                  </span>
                  <UlxIconButton
                    @label={{t "lbl.doc.dataview.addToCart"}}
                    @iconLeft="order-icon"
                    @iconComponentClass="bs-icons1"
                    @iconSize="s18"
                    @variant="primary"
                    @disabled={{eq product.inventoryStatus "OUTOFSTOCK"}}
                    @onClick={{fn this.addToCart product}}
                  />
                </div>
              </div>
            {{/if}}
          </div>
        {{/each}}
      </:content>
    </UlxDataView>
  </template>
}
