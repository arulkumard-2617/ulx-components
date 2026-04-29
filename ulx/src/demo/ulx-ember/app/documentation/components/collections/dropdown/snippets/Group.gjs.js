export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, UlxField, t } from 'ulx-components';

const DEFAULT_GROUPED_CITIES = [
  {
    label: 'USA',
    code: 'us',
    imageUrl:
      'https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png',
    items: [
      { label: 'New York', value: 'NY' },
      { label: 'Chicago', value: 'CHI' },
      { label: 'Los Angeles', value: 'LA' },
    ],
  },
  {
    label: 'France',
    code: 'fr',
    imageUrl:
      'https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png',
    items: [
      { label: 'Paris', value: 'PRS' },
      { label: 'Lyon', value: 'LYN' },
      { label: 'Marseille', value: 'MRS' },
    ],
  },
  {
    label: 'Germany',
    code: 'de',
    icon: 'location-icon01-1',
    items: [
      { label: 'Berlin', value: 'BER' },
      { label: 'Munich', value: 'MUC' },
    ],
  },
];

export default class DemoDropdownGroup extends Component {
  @tracked selectedGroupCity = null;
  @tracked groupedCities = DEFAULT_GROUPED_CITIES;

  get options() {
    return this.args.groups ?? this.groupedCities;
  }

  @action
  setSelectedGroupCity(value) {
    this.selectedGroupCity = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Group"
        @fieldId="dropdown-group"
        @fieldClass="col-4"
        as |field|
      >
        <UlxDropdown
          @field={{field}}
          @options={{this.options}}
          @optionGroupLabel="label"
          @optionGroupChildren="items"
          @value={{this.selectedGroupCity}}
          @onChange={{this.setSelectedGroupCity}}
          @placeholder="Select a city"
        />
      </UlxField>
    </div>
  </template>
}

`;
