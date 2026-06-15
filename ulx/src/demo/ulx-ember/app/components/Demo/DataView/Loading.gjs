import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq } from 'ember-truth-helpers';
import { UlxDataView, UlxSelectButton, UlxSkeleton } from 'ulx-components';
import { getProductsData } from 'ulx-ember/data/product-service';

export default class DemoDataViewLoading extends Component {
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

  @action
  onLayoutChange(value) {
    this.layout = value ?? 'list';
  }

  <template>
    <UlxDataView @layout={{this.layout}} aria-busy={{true}}>
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
          {{#each this.products as |_product index|}}
            <div class={{this.itemColClass}}>
              {{#if (eq this.layout "list")}}
                <div
                  class={{if
                    (eq index 0)
                    "flex p-5 items-center gap-4"
                    "flex items-center gap-4 border-t p-5 layer1"
                  }}
                  aria-hidden="true"
                >
                  <UlxSkeleton
                    @size="6rem"
                    @borderRadius="0.5rem"
                    @customClass="shadow-lg"
                  />

                  <div class="flex items-center gap-4 justify-between w-full">
                    <div class="flex gap-3 flex-col w-full">
                      <UlxSkeleton
                        @height="1rem"
                        @width="50%"
                        @borderRadius="9999px"
                      />
                      <UlxSkeleton
                        @height="1rem"
                        @width="30%"
                        @borderRadius="9999px"
                      />
                      <UlxSkeleton
                        @height="1rem"
                        @width="40%"
                        @borderRadius="9999px"
                      />
                    </div>

                    <div class="flex flex-col items-center gap-3 justify-start">
                      <UlxSkeleton
                        @height="1.5rem"
                        @width="4rem"
                        @borderRadius="9999px"
                      />
                      <UlxSkeleton @size="2rem" @borderRadius="0.25rem" />
                    </div>
                  </div>
                </div>
              {{else}}
                <div
                  class="flex flex-col p-10 border gap-5 rounded"
                  aria-hidden="true"
                >
                  <div class="flex items-center gap-2 justify-between">
                    <UlxSkeleton
                      @height="1rem"
                      @width="40%"
                      @borderRadius="9999px"
                    />
                    <UlxSkeleton
                      @height="1.25rem"
                      @width="30%"
                      @borderRadius="9999px"
                    />
                  </div>

                  <div class="flex flex-col items-center gap-2">
                    <UlxSkeleton
                      @size="6rem"
                      @borderRadius="0.5rem"
                      @customClass="shadow-lg"
                    />
                    <UlxSkeleton
                      @height="1rem"
                      @width="60%"
                      @borderRadius="9999px"
                    />
                    <UlxSkeleton
                      @height="1rem"
                      @width="40%"
                      @borderRadius="9999px"
                    />
                  </div>

                  <div class="flex items-center gap-2 justify-between">
                    <UlxSkeleton
                      @height="1.5rem"
                      @width="4rem"
                      @borderRadius="9999px"
                    />
                    <UlxSkeleton @size="2rem" @borderRadius="0.25rem" />
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



