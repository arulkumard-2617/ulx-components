export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { UlxDropdown, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class DemoDropdownOverlayOptions extends Component {
  @tracked selectedLocalCity = null;
  @tracked selectedBodyCity = null;
  @tracked selectedBoundaryCity = null;
  @tracked scrollHostElement = null;

  get cities() {
    return CITIES;
  }

  scrollHostRef = modifier((element) => {
    this.scrollHostElement = element;

    return () => {
      if (this.scrollHostElement === element) {
        this.scrollHostElement = null;
      }
    };
  });

  @action
  setSelectedLocalCity(value) {
    this.selectedLocalCity = value;
  }

  @action
  setSelectedBodyCity(value) {
    this.selectedBodyCity = value;
  }

  @action
  setSelectedBoundaryCity(value) {
    this.selectedBoundaryCity = value;
  }

  <template>
    <div class="ulx-form m-size flex flex-col gap-8 mb-14">
      <div class="ulx-grid gap-8">
        <UlxField
          @label="Context: self"
          @fieldId="dropdown-context-self"
          @fieldClass="col-4"
          as |field|
        >
          <UlxDropdown
            @field={{field}}
            @options={{this.cities}}
            @value={{this.selectedLocalCity}}
            @onChange={{this.setSelectedLocalCity}}
            @context="self"
            @placeholder="Select a city"
          />
        </UlxField>

        <UlxField
          @label="Context: body"
          @fieldId="dropdown-context-body"
          @fieldClass="col-4"
          as |field|
        >
          <UlxDropdown
            @field={{field}}
            @options={{this.cities}}
            @value={{this.selectedBodyCity}}
            @onChange={{this.setSelectedBodyCity}}
            @context="body"
            @boundary="window"
            @scrollContext="window"
            @placeholder="Select a city"
          />
        </UlxField>
      </div>

      <div class="flex flex-col gap-2">
        <div class="text-13 fg-secondary">
          {{"Open the dropdown below, then scroll this container to see <code>@scrollContext</code> keep the panel aligned while it stays open."}}
        </div>

        <div
          class="h-170 overflow-auto border rounded p-4"
          {{this.scrollHostRef}}
        >
          <div class="flex flex-col gap-8">
            <div class="h-170"></div>

            <UlxField
              @label="Boundary and scrollContext"
              @fieldId="dropdown-context-scroll"
              @fieldClass="w-full"
              as |field|
            >
              <UlxDropdown
                @field={{field}}
                @options={{this.cities}}
                @value={{this.selectedBoundaryCity}}
                @onChange={{this.setSelectedBoundaryCity}}
                @context={{this.scrollHostElement}}
                @boundary={{this.scrollHostElement}}
                @scrollContext={{this.scrollHostElement}}
                @filter={{true}}
                @placeholder="Search cities"
              />
            </UlxField>

            <div class="h-170"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
}

`;
