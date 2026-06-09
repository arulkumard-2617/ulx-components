export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputDisabled extends Component {
  @tracked chips = ['New York', 'Rome', 'London'];

  <template>
    <UlxForm @size="m-size">
      <UlxFieldSet
        @legend="Favourite Cities"
        @description="The chip input is disabled — chips cannot be added or removed."
        @customClass="ulx-grid gap-6"
      >
        <UlxField
          @label="Cities"
          @fieldId="chip-input-disabled"
          @fieldClass="col-12"
          as |field|
        >
          <UlxChipInput
            @field={{field}}
            @chips={{this.chips}}
            @disabled={{true}}
            @placeholder="Add city…"
          />
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}

`;
