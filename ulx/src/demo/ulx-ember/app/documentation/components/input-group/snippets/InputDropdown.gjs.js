export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxInput, UlxField, UlxInputGroup, UlxDropdown } from 'ulx-components';

const COUNTRIES = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'GB' }
];

const VALUE_UNITS = [
  { label: '%', value: 'percent' },
  { label: '$', value: 'currency' }
];

const CURRENCIES = [
  { label: 'USD', value: 'USD' },
  { label: 'EUR', value: 'EUR' },
  { label: 'GBP', value: 'GBP' }
];

export default class DemoInputGroupInputDropdown extends Component {
  @tracked startCountry = 'IN';
  @tracked endUnit = 'percent';
  @tracked startCurrency = 'USD';
  @tracked endUnitBoth = 'percent';

  get countries() {
    return COUNTRIES;
  }

  get valueUnits() {
    return VALUE_UNITS;
  }

  get currencies() {
    return CURRENCIES;
  }

  @action
  setStartCountry(value) {
    this.startCountry = value;
  }

  @action
  setEndUnit(value) {
    this.endUnit = value;
  }

  @action
  setStartCurrency(value) {
    this.startCurrency = value;
  }

  @action
  setEndUnitBoth(value) {
    this.endUnitBoth = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">

      {{! DROPDOWN ON START }}
      <UlxField @fieldClass="col-12" as |field|>
        <UlxInputGroup @startAddonClass="dropdown-addon">

          <:start>
            <UlxDropdown
              @options={{this.countries}}
              @value={{this.startCountry}}
              @onChange={{this.setStartCountry}}
              @size="m-size"
              aria-label="Country code"
              @customClass="w-152"
            />
          </:start>

          <:input>
            <UlxInput
              @field={{field}}
              placeholder="Enter phone number"
              aria-label="Phone number"
            />
          </:input>

        </UlxInputGroup>
      </UlxField>

      {{! DROPDOWN ON END }}
      <UlxField @fieldClass="col-2" as |field|>
        <UlxInputGroup @endAddonClass="dropdown-addon">

          <:input>
            <UlxInput
              @field={{field}}
              @type="number"
              @value="10"
              aria-label="Value"
            />
          </:input>

          <:end>
            <UlxDropdown
              @options={{this.valueUnits}}
              @value={{this.endUnit}}
              @onChange={{this.setEndUnit}}
              @size="m-size compact"
              aria-label="Value unit"
            />
          </:end>

        </UlxInputGroup>
      </UlxField>

      {{! DROPDOWN ON START AND END }}
      <UlxField @fieldClass="col-4" as |field|>
        <UlxInputGroup
          @startAddonClass="dropdown-addon"
          @endAddonClass="dropdown-addon"
        >

          <:start>
            <UlxDropdown
              @options={{this.currencies}}
              @value={{this.startCurrency}}
              @onChange={{this.setStartCurrency}}
              @size="m-size compact"
              aria-label="Currency"
              @customClass="w-108"
            />
          </:start>

          <:input>
            <UlxInput
              @field={{field}}
              @type="number"
              @value="100"
              aria-label="Amount"
            />
          </:input>

          <:end>
            <UlxDropdown
              @options={{this.valueUnits}}
              @value={{this.endUnitBoth}}
              @onChange={{this.setEndUnitBoth}}
              @size="m-size compact"
              aria-label="Amount unit"
            />
          </:end>

        </UlxInputGroup>
      </UlxField>

    </div>
  </template>
}

`;
