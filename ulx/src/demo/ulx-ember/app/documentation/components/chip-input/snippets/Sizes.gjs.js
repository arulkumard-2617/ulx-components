export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxForm, UlxFieldSet, UlxField, UlxChipInput } from 'ulx-components';

export default class DemoChipInputSizes extends Component {
  @tracked chipsM = ['New York', 'Rome'];

  @action updateM(v) { this.chipsM = v; }

  <template>
    <UlxForm @size="m-size" @customClass="ulx-grid gap-6 mb-14">
      <UlxFieldSet @legend="Size Variants" @customClass="ulx-grid gap-6">
        <UlxField @label="xs-size" @fieldId="chip-xs" @fieldClass="col-12">
          <:default>
            <UlxChipInput @size="xs-size" @placeholder="xs-size…" aria-label="xs-size chips" />
          </:default>
        </UlxField>
        <UlxField @label="s-size" @fieldId="chip-s" @fieldClass="col-12">
          <:default>
            <UlxChipInput @size="s-size" @placeholder="s-size…" aria-label="s-size chips" />
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
            <UlxChipInput @size="l-size" @placeholder="l-size…" aria-label="l-size chips" />
          </:default>
        </UlxField>
        <UlxField @label="xl-size" @fieldId="chip-xl" @fieldClass="col-12">
          <:default>
            <UlxChipInput @size="xl-size" @placeholder="xl-size…" aria-label="xl-size chips" />
          </:default>
        </UlxField>
      </UlxFieldSet>
    </UlxForm>
  </template>
}
`;
