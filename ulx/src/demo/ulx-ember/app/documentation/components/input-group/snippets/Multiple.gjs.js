export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxInput, UlxField, UlxInputGroup, UlxIcon, UlxDropdown, UlxButton, t } from 'ulx-components';

const COUNTRIES = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'GB' },
];

export default class DemoInputGroupMultiple extends Component {
  @tracked selectedCountry = 'IN';

  get countries() {
    return COUNTRIES;
  }

  @action
  setSelectedCountry(value) {
    this.selectedCountry = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">

      {{! PRICE INPUT }}
      <UlxField @fieldClass="col-12" as |field|>
        <UlxInputGroup
          @startAddonClass="text-addon"
          @endAddonClass="text-addon"
        >

          <:start>
            $
          </:start>

          <:input>
            <UlxInput
              @field={{field}}
              placeholder={{"Price"}}
              aria-label={{"Price"}}
            />
          </:input>

          <:end>
            .00
          </:end>

        </UlxInputGroup>
      </UlxField>

      {{! SEARCH INPUT }}
      <UlxField @fieldClass="col-12" as |field|>
        <UlxInputGroup @startAddonClass="icon-addon">

          <:start>
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName="ls-tick-icon"
              @size="s18"
              @ariaLabel="search icon"
            />
          </:start>

          <:input>
            <UlxInput
              @field={{field}}
              placeholder={{t "lbl.search"}}
              aria-label={{t "lbl.search"}}
            />
          </:input>

        </UlxInputGroup>
      </UlxField>

      {{! DROPDOWN LEFT, BUTTON RIGHT }}
      <UlxField @fieldClass="col-12" as |field|>
        <UlxInputGroup
          @startAddonClass="dropdown-addon"
          @endAddonClass="button-addon"
        >

          <:start>
            <UlxDropdown
              @options={{this.countries}}
              @value={{this.selectedCountry}}
              @onChange={{this.setSelectedCountry}}
              @size="m-size"
              aria-label="Country code"
            />
          </:start>

          <:input>
            <UlxInput
              @field={{field}}
              placeholder="Enter phone number"
              aria-label="Phone number"
            />
          </:input>

          <:end>
            <UlxButton
              @label="Verify"
              @variant="primary"
              @size="m-size"
            />
          </:end>

        </UlxInputGroup>
      </UlxField>

    </div>
  </template>
}

`;
