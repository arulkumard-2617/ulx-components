export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxField, UlxStepInput } from 'ulx-components';

export default class DemoStepInputWithField extends Component {
  @tracked guests = 1;

  min = 1;
  max = 10;

  get guestRules() {
    return {
      min: { value: this.min },
      max: { value: this.max }
    };
  }

  @action
  updateGuests(value) {
    this.guests = value;
  }

  <template>
    <UlxField
      @label="Guests"
      @helpText="Use the arrows or type a number between 1 and 10."
      @fieldId="step-input-guests"
      @fieldClass="w-200"
      as |field|
    >
      <UlxStepInput
        @field={{field}}
        @value={{this.guests}}
        @rules={{this.guestRules}}
        @onChange={{this.updateGuests}}
        aria-label="Number of guests"
      />
    </UlxField>
  </template>
}

`;
