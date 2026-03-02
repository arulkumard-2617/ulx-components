import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToolbar, UlxButton, UlxButtonGroup, UlxDropdown, UlxIconInput, t } from 'ulx-components';

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

  @action
  setViewMode(mode) {
    this.viewMode = mode;
  }

  @action
  setListView() {
    this.viewMode = 'list';
  }

  @action
  setGridView() {
    this.viewMode = 'grid';
  }

  get isListView() {
    return this.viewMode === 'list';
  }

  get isGridView() {
    return this.viewMode === 'grid';
  }

  @action
  onUpload() {
    // demo-only: hook up to real upload flow in app
    // eslint-disable-next-line no-console
    console.log('Upload clicked');
  }

  @action
  onInfo() {
    // eslint-disable-next-line no-console
    console.log('Info clicked');
  }

  <template>
    <div class="pda4">
      <UlxToolbar>
        <:start>
          <div class="flex items-center gap-2">
            <div class="w-100p md-max-w-320">
              <UlxIconInput
                @value={{this.search}}
                @placeholder={{t "lbl.search"}}
                @iconName="search-icon"
                @iconType="font"
                @iconSize="s18"
                @iconClass="bs-icons1"
                @onInput={{this.onSearchInput}}
                aria-label={{t "lbl.search"}}
                @size="m-size"
              />
            </div>
            <UlxDropdown
              @value={{this.sortBy}}
              @options={{this.sortByOptions}}
              @onChange={{this.onSortByChange}}
              @size="s-size"
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
              <i class="bs-icons1 info-icon s18"></i>
            </div>
            

            <UlxButton
              @variant="basic"
              @icon="hamburger-icon"
              @iconComponentClass="bs-icons1"
              @iconSize="s18"
              @onClick={{this.onInfo}}
              aria-label="Info"
            />

            <UlxButtonGroup @size="m-size">
              <UlxButton
                @variant={{if this.isListView "primary" "secondary"}}
                @icon="list-view-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                @onClick={{this.setListView}}
                aria-label="List view"
              />
              <UlxButton
                @variant={{if this.isGridView "primary" "secondary"}}
                @icon="grid-view-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                @onClick={{this.setGridView}}
                aria-label="Grid view"
                @customClass="active"
              />
            </UlxButtonGroup>
          </div>
        </:end>
      </UlxToolbar>
    </div>
  </template>
}
