export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxToolbar,
  UlxButton,
  UlxDropdown,
  UlxIconInput,
  UlxInput,
} from 'ulx-components';

export default class DemoToolbarBasic extends Component {
  @tracked search = '';
  @tracked day = 'all';
  @tracked track = 'all';

  get dayOptions() {
    return [
      { label: 'All Days', value: 'all' },
      { label: 'Day 1', value: 'day1' },
      { label: 'Day 2', value: 'day2' },
      { label: 'Day 3', value: 'day3' },
    ];
  }

  get trackOptions() {
    return [
      { label: 'All Tracks', value: 'all' },
      { label: 'Track A', value: 'trackA' },
      { label: 'Track B', value: 'trackB' },
      { label: 'Track C', value: 'trackC' },
    ];
  }

  @action
  onSearchInput(value) {
    this.search = value ?? '';
  }

  @action
  onDayChange(value) {
    this.day = value;
  }

  @action
  onTrackChange(value) {
    this.track = value;
  }

  <template>
    <div class="pda4">
      <UlxToolbar>
        <:start>
          <div class="w-100p md-max-w-320">
            <UlxIconInput
              @iconLeft="search-icon"
              @iconType="font"
              @iconSize="s18"
              @iconClass="bs-icons1"
              @size="m-size"
            >
              <UlxInput
                @value={{this.search}}
                @onInput={{this.onSearchInput}}
                @placeholder="Search"
                aria-label="Search"
                class="w-full"
              />
            </UlxIconInput>
          </div>
          <UlxDropdown
            @key="toolbar-basic-day"
            @value={{this.day}}
            @options={{this.dayOptions}}
            @optionLabel="label"
            @optionValue="value"
            @onChange={{this.onDayChange}}
            @size="m-size"
            aria-label={{"All Days"}}
          />
          <UlxDropdown
            @key="toolbar-basic-track"
            @value={{this.track}}
            @options={{this.trackOptions}}
            @optionLabel="label"
            @optionValue="value"
            @onChange={{this.onTrackChange}}
            @size="m-size"
            aria-label={{"All Tracks"}}
          />
        </:start>

        <:end>
          <UlxButton @label="Add Session" @variant="primary" @size="m-size" />
        </:end>
      </UlxToolbar>
    </div>
  </template>
}

`;
