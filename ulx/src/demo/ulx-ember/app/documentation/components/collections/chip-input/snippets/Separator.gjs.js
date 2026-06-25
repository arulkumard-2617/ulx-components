export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { array } from '@ember/helper';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputSeparator extends Component {
  @tracked chipsComma = ['New York', 'Rome'];
  @tracked chipsBoth = ['London'];

  @action updateComma(v) {
    this.chipsComma = v;
  }
  @action updateBoth(v) {
    this.chipsBoth = v;
  }

  <template>
    <UlxForm @size="m-size">
      <UlxFieldSet
        @legend="Separator Variants"
        @description="Control which key(s) commit the typed value as a chip."
        @customClass="ulx-grid gap-6"
      >
        <UlxField
          @label="Comma separator"
          @helpText="Type a city and press , to add it."
          @fieldId="chip-sep-comma"
          @fieldClass="col-12"
          as |field|
        >
          <UlxChipInput
            @field={{field}}
            @chips={{this.chipsComma}}
            @onChipsChange={{this.updateComma}}
            @separator=","
            @placeholder="Add city, press ,"
          />
        </UlxField>

        <UlxField
          @label="Enter and comma separator"
          @helpText="Type a city and press Enter or , to add it."
          @fieldId="chip-sep-both"
          @fieldClass="col-12"
          as |field|
        >
          <UlxChipInput
            @field={{field}}
            @chips={{this.chipsBoth}}
            @onChipsChange={{this.updateBoth}}
            @separator={{array "Enter" ","}}
            @placeholder="Add city, press Enter or ,"
          />
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}

`;
