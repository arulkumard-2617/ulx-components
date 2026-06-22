export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxMultiSelect
} from 'ulx-components';

const COUNTRIES = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'GB' }
];

const VALUE_UNITS = [
  { label: 'Percent', value: 'percent' },
  { label: 'Currency', value: 'currency' }
];

const CURRENCIES = [
  { label: 'USD', value: 'USD' },
  { label: 'EUR', value: 'EUR' },
  { label: 'GBP', value: 'GBP' }
];

export default class DemoInputGroupInputMultiDropdown extends Component {
  @tracked startCountries = ['IN'];
  @tracked endUnits = ['percent'];
  @tracked startCurrencies = ['USD'];
  @tracked endUnitsBoth = ['percent'];

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
  setStartCountries(value) {
    this.startCountries = value;
  }

  @action
  setEndUnits(value) {
    this.endUnits = value;
  }

  @action
  setStartCurrencies(value) {
    this.startCurrencies = value;
  }

  @action
  setEndUnitsBoth(value) {
    this.endUnitsBoth = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">

      {{! MULTI-SELECT ON START }}
      <UlxField @fieldClass="col-12" as |field|>
        <UlxInputGroup @startAddonClass="dropdown-addon">

          <:start>
            <UlxMultiSelect
              @options={{this.countries}}
              @value={{this.startCountries}}
              @onChange={{this.setStartCountries}}
              @size="m-size"
              @display="comma"
              aria-label="Country codes"
              @customClass="w-152"
              @placeholder="Countries"
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

      {{! MULTI-SELECT ON END }}
      <UlxField @fieldClass="col-12" as |field|>
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
            <UlxMultiSelect
              @options={{this.valueUnits}}
              @value={{this.endUnits}}
              @onChange={{this.setEndUnits}}
              @size="m-size compact"
              @display="comma"
              aria-label="Value units"
              @placeholder="Units"
            />
          </:end>

        </UlxInputGroup>
      </UlxField>

      {{! MULTI-SELECT ON START AND END }}
      <UlxField @fieldClass="col-12" as |field|>
        <UlxInputGroup
          @startAddonClass="dropdown-addon"
          @endAddonClass="dropdown-addon"
        >

          <:start>
            <UlxMultiSelect
              @options={{this.currencies}}
              @value={{this.startCurrencies}}
              @onChange={{this.setStartCurrencies}}
              @size="m-size compact"
              @display="comma"
              aria-label="Currencies"
              @customClass="w-108"
              @placeholder="Currency"
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
            <UlxMultiSelect
              @options={{this.valueUnits}}
              @value={{this.endUnitsBoth}}
              @onChange={{this.setEndUnitsBoth}}
              @size="m-size compact"
              @display="comma"
              aria-label="Amount units"
              @placeholder="Units"
            />
          </:end>

        </UlxInputGroup>
      </UlxField>

    </div>
  </template>
}

`;
