import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputInvalid extends Component {
  @tracked chips = ['New York'];

  @action
  updateChips(updated) {
    this.chips = updated;
  }

  <template>
    <UlxForm @size="m-size">
      <UlxFieldSet
        @legend="Favourite Cities"
        @description="The chip input is in an invalid state."
        @customClass="ulx-grid gap-6"
      >
        <UlxField
          @label="Cities"
          @fieldId="chip-input-invalid"
          @fieldClass="col-12"
          @error="Please add at least two cities."
          as |field|
        >
          <UlxChipInput
            @field={{field}}
            @chips={{this.chips}}
            @onChipsChange={{this.updateChips}}
            @placeholder="Add city…"
          />
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}
