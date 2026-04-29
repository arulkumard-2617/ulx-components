export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxToolbar,
  UlxButton,
  UlxSplitButton,
  UlxIconInput,
  UlxInput,
  t,
} from 'ulx-components';
import { array, hash } from '@ember/helper';

export default class DemoToolbarBasic extends Component {
  @tracked search = '';

  @action
  onSearchInput(event) {
    this.search = event.target.value;
  }

  <template>
    <div class="pda4">
      <UlxToolbar>
        <:start>
          <UlxButton
            @variant="primary"
            @icon="add-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @customClass="me-5"
            aria-label={{"New"}}
          />
          <UlxButton
            @variant="primary"
            @icon="print-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @customClass="me-5"
            aria-label="Duplicate"
          />
          <UlxButton
            @variant="primary"
            @icon="delete-icon-01"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @customClass="me-5"
            aria-label={{"Delete"}}
          />
        </:start>

        <:center>
          <div class="w-full max-w-xs">
            <UlxIconInput
              @iconLeft="search-icon"
              @iconType="font"
              @iconSize="s18"
              @iconClass="bs-icons1"
            >
              <UlxInput
                @value={{this.search}}
                @onInput={{this.onSearchInput}}
                @placeholder={{t "lbl.search"}}
                aria-label={{t "lbl.search"}}
                class="w-full"
              />
            </UlxIconInput>
          </div>
        </:center>

        <:end>
          <div class="flex items-center gap-2">
            <UlxSplitButton
              @label={{t "lbl.save"}}
              @items={{array
                (hash label="Update" icon="refresh-clockwise-icon-01")
                (hash label="Delete" icon="delete-icon-01")
              }}
              @size="s-size"
            />
          </div>
        </:end>
      </UlxToolbar>
    </div>
  </template>
}

`;
