import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxEmptyState, UlxDropdown, t } from 'ulx-components';

const EMPTY_STATE_FILTER_OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export default class EmptyStateWithDropdownDemo extends Component {
  @tracked selectedFilter = null;

  get filterOptions() {
    return EMPTY_STATE_FILTER_OPTIONS;
  }

  @action
  setSelectedFilter(value) {
    this.selectedFilter = value;
  }

  <template>
    <UlxEmptyState
      @headerText="msg.empty.state.title"
      @subHeaderText="msg.empty.state.subtitle"
    >
      <UlxDropdown
        @options={{this.filterOptions}}
        @value={{this.selectedFilter}}
        @placeholder="Show"
        @onChange={{this.setSelectedFilter}}
      />
    </UlxEmptyState>
  </template>
}


