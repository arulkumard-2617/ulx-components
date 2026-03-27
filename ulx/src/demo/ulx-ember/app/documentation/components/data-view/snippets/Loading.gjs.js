export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { eq, not } from 'ember-truth-helpers';
import { UlxDataView, UlxButton, UlxSkeleton, t } from 'ulx-components';
import { getProductsData } from 'ulx-ember/data/product-service';

export default class DemoDataViewLoading extends Component {
  @tracked layout = 'grid';

  get products() {
    return getProductsData().slice(0, 6);
  }

  get itemColClass() {
    return this.layout === 'list'
      ? 'col-12'
      : 'col-4 col-sm-6 col-lg-12 col-xl-4';
  }

  @action
  setList() {
    this.layout = 'list';
  }

  @action
  setGrid() {
    this.layout = 'grid';
  }

  <template>
    <UlxDataView @layout={{this.layout}} aria-busy={{true}}>
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
        {{#each this.products as |_product index|}}
          <div class={{this.itemColClass}}>
            {{#if (eq this.layout "list")}}
              <div
                class="flex flex-col items-center gap-4 p-10 layer1
                  {{if (not (eq index 0)) 'border-t'}}"
                aria-hidden="true"
              >
                <UlxSkeleton
                  @size="4rem"
                  @borderRadius="0.5rem"
                  @customClass="shadow-lg"
                />

                <div
                  class="flex flex-col items-center gap-4 justify-between w-full"
                >
                  <div class="flex gap-3 flex-col">
                    <UlxSkeleton
                      @height="1rem"
                      @width="60%"
                      @borderRadius="9999px"
                      @customClass="h-20 w-240 "
                    />
                    <UlxSkeleton
                      @height="1rem"
                      @width="40%"
                      @borderRadius="9999px"
                      @customClass="h-20 w-240"
                    />
                  </div>
                </div>
              </div>
            {{else}}
              <div
                class="flex flex-col p-6 border gap-4 rounded layer1"
                aria-hidden="true"
              >
                <UlxSkeleton
                  @height="1rem"
                  @width="100%"
                  @borderRadius="9999px"
                />

                <div class="flex justify-center">
                  <UlxSkeleton @size="4rem" @borderRadius="0.5rem" />
                </div>

                <div class="flex flex-col gap-2">
                  <UlxSkeleton
                    @height="1rem"
                    @width="100%"
                    @borderRadius="9999px"
                  />
                  <UlxSkeleton
                    @height="1rem"
                    @width="100%"
                    @borderRadius="9999px"
                  />
                  <UlxSkeleton
                    @height="1rem"
                    @width="100%"
                    @borderRadius="9999px"
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

`;
