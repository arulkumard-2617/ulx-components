export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputBasic extends Component {
  @tracked chips = ['New York', 'Rome', 'London'];

  @action
  updateChips(updated) {
    this.chips = updated;
  }

  <template>
    <UlxForm @size="m-size">
      <UlxFieldSet
        @legend="Favourite Cities"
        @description="Type a city name and press Enter to add it as a chip."
        @customClass="ulx-grid gap-6"
      >
        <UlxField
          @label="Cities"
          @helpText="Press Enter or , to add a chip."
          @fieldId="chip-input-basic"
          @fieldClass="col-12"
          as |field|
        >
          <UlxChipInput
            @field={{field}}
            @chips={{this.chips}}
            @onChipsChange={{this.updateChips}}
            @size="l-size"
            @placeholder="Add city…"
          />
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}

`;
