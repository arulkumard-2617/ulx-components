export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputMax extends Component {
  @tracked chips = ['New York', 'Rome', 'London'];

  @action
  updateChips(updated) {
    this.chips = updated;
  }

  <template>
    <UlxForm @size="m-size" @customClass="ulx-grid gap-6 mb-14">
      <UlxFieldSet
        @legend="Favourite Cities"
        @description="A maximum of 3 chips is allowed. The input is hidden once the limit is reached."
        @customClass="ulx-grid gap-6"
      >
        <UlxField
          @label="Cities"
          @helpText="You can add up to 3 cities."
          @fieldId="chip-input-max"
          @fieldClass="col-12"
        >
          <:default>
            <UlxChipInput
              @chips={{this.chips}}
              @onChipsChange={{this.updateChips}}
              @max={{3}}
              @placeholder="Max 3 chips…"
              aria-label="Cities max 3"
            />
          </:default>
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}
`;
