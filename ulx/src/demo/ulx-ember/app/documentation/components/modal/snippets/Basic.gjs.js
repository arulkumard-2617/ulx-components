export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxModal,
  UlxButton,
  tooltip,
  UlxIcon,
  UlxDropdown,
  UlxField
} from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
];

export default class BasicModalDemo extends Component {
  @tracked isVisible = false;
  @tracked selectedCity = null;

  get cities() {
    return CITIES;
  }

  @action
  openModal() {
    this.isVisible = true;
  }

  @action
  closeModal() {
    this.isVisible = false;
  }

  @action
  setSelectedCity(value) {
    this.selectedCity = value;
  }

  @action
  handleDone() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxButton
        @label="Open Modal"
        @variant="primary"
        {{on "click" this.openModal}}
      />

      <UlxModal
        @visible={{this.isVisible}}
        @title="Basic Modal"
        @onHide={{this.closeModal}}
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Confirm"
        @onDone={{this.handleDone}}
        @onCancel={{this.closeModal}}
        @submittingLabel="Saving…"
      >
        <p>This is the default body content. You can pass any content as the
          default block. Confirm returns a promise: the Done button shows
          loading until it resolves, then the modal closes.</p>

        <UlxIcon
          {{tooltip "Icon Tooltip" position="top"}}
          @componentClass="bs-icons1"
          @type="font"
          @iconName="info-icon-01"
        />
        <div class="ulx-form m-size mb-8">
          <UlxField
            @label="City"
            @fieldId="modal-basic-city"
            @fieldClass="col-12"
            as |field|
          >
            <UlxDropdown
              @field={{field}}
              @options={{this.cities}}
              @value={{this.selectedCity}}
              @onChange={{this.setSelectedCity}}
              @filter={{true}}
              @filterPlaceholder="Search cities"
              @placeholder="Select a city"
              @context="body"
              @position="top"
            />
          </UlxField>
        </div>
      </UlxModal>
    </div>
  </template>
}

`;
