export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { concat } from '@ember/helper';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

const SIZES = [
  { label: 'xs-size', size: 'xs-size' },
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' }
];

export default class DemoChipInputSizes extends Component {
  sizes = SIZES;

  @tracked chipsXs = ['New York'];
  @tracked chipsS = ['New York', 'Rome'];
  @tracked chipsM = ['New York', 'Rome'];
  @tracked chipsL = ['New York', 'Rome'];
  @tracked chipsXl = ['New York', 'Rome'];

  @action updateXs(v) {
    this.chipsXs = v;
  }
  @action updateS(v) {
    this.chipsS = v;
  }
  @action updateM(v) {
    this.chipsM = v;
  }
  @action updateL(v) {
    this.chipsL = v;
  }
  @action updateXl(v) {
    this.chipsXl = v;
  }

  <template>
    <UlxForm @size="m-size">
      <UlxFieldSet
        @legend="Size Variants"
        @description="ChipInput matches UlxInput height across all size variants."
        @customClass="ulx-grid gap-6"
      >
        <UlxField @label="xs-size" @fieldId="chip-xs" @fieldClass="col-12">
          <:default>
            <UlxChipInput
              @chips={{this.chipsXs}}
              @onChipsChange={{this.updateXs}}
              @size="xs-size"
              @placeholder="xs-size…"
              aria-label="xs-size chips"
            />
          </:default>
        </UlxField>

        <UlxField @label="s-size" @fieldId="chip-s" @fieldClass="col-12">
          <:default>
            <UlxChipInput
              @chips={{this.chipsS}}
              @onChipsChange={{this.updateS}}
              @size="s-size"
              @placeholder="s-size…"
              aria-label="s-size chips"
            />
          </:default>
        </UlxField>

        <UlxField @label="m-size" @fieldId="chip-m" @fieldClass="col-12">
          <:default>
            <UlxChipInput
              @chips={{this.chipsM}}
              @onChipsChange={{this.updateM}}
              @size="m-size"
              @placeholder="m-size…"
              aria-label="m-size chips"
            />
          </:default>
        </UlxField>

        <UlxField @label="l-size" @fieldId="chip-l" @fieldClass="col-12">
          <:default>
            <UlxChipInput
              @chips={{this.chipsL}}
              @onChipsChange={{this.updateL}}
              @size="l-size"
              @placeholder="l-size…"
              aria-label="l-size chips"
            />
          </:default>
        </UlxField>

        <UlxField @label="xl-size" @fieldId="chip-xl" @fieldClass="col-12">
          <:default>
            <UlxChipInput
              @chips={{this.chipsXl}}
              @onChipsChange={{this.updateXl}}
              @size="xl-size"
              @placeholder="xl-size…"
              aria-label="xl-size chips"
            />
          </:default>
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}

`;
