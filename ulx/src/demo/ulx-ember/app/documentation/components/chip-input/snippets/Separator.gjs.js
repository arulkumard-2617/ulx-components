export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { array } from '@ember/helper';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputSeparator extends Component {
  @tracked chipsComma = ['New York', 'Rome'];
  @tracked chipsBoth = ['London'];

  @action updateComma(v) { this.chipsComma = v; }
  @action updateBoth(v) { this.chipsBoth = v; }

  <template>
    <UlxForm @size="m-size" @customClass="ulx-grid gap-6 mb-14">
      <UlxFieldSet
        @legend="Separator Variants"
        @customClass="ulx-grid gap-6"
      >
        {{! Single separator: comma }}
        <UlxField
          @label="Comma separator"
          @helpText="Type a city and press , to add it."
          @fieldId="chip-sep-comma"
          @fieldClass="col-12"
        >
          <:default>
            <UlxChipInput
              @chips={{this.chipsComma}}
              @onChipsChange={{this.updateComma}}
              @separator=","
              @placeholder="Add city, press ,"
              aria-label="Cities comma separator"
            />
          </:default>
        </UlxField>

        {{! Multiple separators: Enter + comma }}
        <UlxField
          @label="Enter and comma separator"
          @helpText="Type a city and press Enter or , to add it."
          @fieldId="chip-sep-both"
          @fieldClass="col-12"
        >
          <:default>
            <UlxChipInput
              @chips={{this.chipsBoth}}
              @onChipsChange={{this.updateBoth}}
              @separator={{array "Enter" ","}}
              @placeholder="Add city, press Enter or ,"
              aria-label="Cities enter and comma separator"
            />
          </:default>
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}
`;
