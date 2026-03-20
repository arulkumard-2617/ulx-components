import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxToolbar,
  UlxButton,
  UlxDropdown,
  UlxIcon,
  UlxIconInput,
  UlxInput,
  UlxSelectButton,
  t,
} from 'ulx-components';

export default class ToolbarCustomDemo extends Component {
  @tracked search = '';
  @tracked sortBy = 'dateCreated';
  @tracked sortOrder = 'desc';
  @tracked imageType = 'all';
  @tracked viewMode = 'grid';

  get sortByOptions() {
    return [
      { label: 'Date Created', value: 'dateCreated' },
      { label: 'Name', value: 'name' },
      { label: 'Last Updated', value: 'updatedAt' },
    ];
  }

  get sortOrderOptions() {
    return [
      { label: 'Ascending', value: 'asc' },
      { label: 'Descending', value: 'desc' },
    ];
  }

  get imageTypeOptions() {
    return [
      { label: 'All Image Types', value: 'all' },
      { label: 'PNG', value: 'png' },
      { label: 'JPG', value: 'jpg' },
      { label: 'SVG', value: 'svg' },
    ];
  }

  @action
  onSearchInput(event) {
    this.search = event?.target?.value ?? '';
  }

  @action
  onSortByChange(value) {
    this.sortBy = value;
  }

  @action
  onSortOrderChange(value) {
    this.sortOrder = value;
  }

  @action
  onImageTypeChange(value) {
    this.imageType = value;
  }

  get viewModeOptions() {
    return [
      {
        value: 'list',
        icon: 'list-view-icon',
        label: t('demo.toolbar.view.list'),
      },
      {
        value: 'grid',
        icon: 'grid-view-icon',
        label: t('demo.toolbar.view.grid'),
      },
    ];
  }

  @action
  onViewModeChange(value) {
    this.viewMode = value;
  }

  @action
  onUpload() {
    // demo-only: hook up to real upload flow in app
    console.log('Upload clicked');
  }

  @action
  onInfo() {
    console.log('Info clicked');
  }

  <template>
    <div class="pda4">
      <UlxToolbar>
        <:start>
          <div class="flex items-center gap-2">
            <div class="w-100p md-max-w-320">
              <UlxIconInput
                @iconName="search-icon"
                @iconType="font"
                @iconPosition="left"
                @iconSize="s18"
                @iconClass="bs-icons1"
                @size="m-size"
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
            <UlxDropdown
              @key="toolbar-custom-sort-by"
              @value={{this.sortBy}}
              @options={{this.sortByOptions}}
              @optionLabel="label"
              @optionValue="value"
              @placeholder={{t "demo.toolbar.sortBy"}}
              @onChange={{this.onSortByChange}}
              @size="s-size"
              aria-label={{t "demo.toolbar.sortBy"}}
            />
          </div>
        </:start>

        <:end>
          <div class="flex items-center gap-2">

            <div class="flex items-center gap-1">
              <UlxButton
                @variant="link"
                @label="Upload"
                @icon="upload-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                @onClick={{this.onUpload}}
              />
              <UlxIcon
                @iconName="info-icon"
                @type="font"
                @componentClass="bs-icons1"
                @size="s18"
                aria-hidden="true"
              />
            </div>

            <UlxButton
              @variant="basic"
              @icon="hamburger-icon"
              @iconComponentClass="bs-icons1"
              @iconSize="s18"
              @onClick={{this.onInfo}}
              aria-label="Info"
            />

            <UlxSelectButton
              @options={{this.viewModeOptions}}
              @value={{this.viewMode}}
              @onChange={{this.onViewModeChange}}
              @optionLabel="label"
              @optionValue="value"
              @variant="secondary"
              @size="m-size"
              @ariaLabel={{t "demo.toolbar.view.layout"}}
            >
              <:item as |option|>
                <UlxIcon
                  @iconName={{option.icon}}
                  @type="font"
                  @componentClass="bs-icons1"
                  aria-hidden="true"
                  @size="s18"
                />
              </:item>
            </UlxSelectButton>
          </div>
        </:end>
      </UlxToolbar>
    </div>
  </template>
}
