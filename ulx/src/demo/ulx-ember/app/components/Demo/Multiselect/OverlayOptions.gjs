import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class DemoMultiselectOverlayOptions extends Component {
  @tracked selectedLocal = [];
  @tracked selectedBody = [];
  @tracked selectedBoundary = [];
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
  setSelectedLocal(value) {
    this.selectedLocal = value;
  }

  @action
  setSelectedBody(value) {
    this.selectedBody = value;
  }

  @action
  setSelectedBoundary(value) {
    this.selectedBoundary = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.dropdown.context.self"}}
        @fieldId="multiselect-context-self"
        @fieldClass="col-4"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.cities}}
          @value={{this.selectedLocal}}
          @onChange={{this.setSelectedLocal}}
          @context="self"
          @placeholder={{t "msg.dropdown.placeholder.city"}}
        />
      </UlxField>

      <UlxField
        @label={{t "lbl.dropdown.context.body"}}
        @fieldId="multiselect-context-body"
        @fieldClass="col-4"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.cities}}
          @value={{this.selectedBody}}
          @onChange={{this.setSelectedBody}}
          @context="body"
          @boundary="window"
          @scrollContext="window"
          @placeholder={{t "msg.dropdown.placeholder.city"}}
        />
      </UlxField>

      <div class="flex flex-col gap-2 col-12">
        <div class="text-13 fg-secondary">
          {{t "msg.dropdown.overlay.scroll.help"}}
        </div>

        <div
          class="h-300 overflow-auto border rounded p-4"
          {{this.scrollHostRef}}
        >
          <div class="flex flex-col gap-8">
            <div class="h-170"></div>
            <div class="ulx-form m-size ulx-grid gap-8 mb-14">
              <UlxField
                @label={{t "lbl.dropdown.boundary.scroll"}}
                @fieldId="multiselect-context-scroll"
                @fieldClass="col-12"
                as |field|
              >
                <UlxMultiSelect
                  @field={{field}}
                  @options={{this.cities}}
                  @value={{this.selectedBoundary}}
                  @onChange={{this.setSelectedBoundary}}
                  @context={{this.scrollHostElement}}
                  @boundary={{this.scrollHostElement}}
                  @scrollContext={{this.scrollHostElement}}
                  @filter={{true}}
                  @placeholder={{t "msg.dropdown.search.cities"}}
                />
              </UlxField>
            </div>

            <div class="h-300"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
}
