import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class DemoMultiselectSize extends Component {
  @tracked selectedXs = [];
  @tracked selectedS = [];
  @tracked selectedM = [];
  @tracked selectedL = [];
  @tracked selectedXl = [];

  get items() {
    return CITIES;
  }

  @action
  setSelectedXs(value) {
    this.selectedXs = value;
  }

  @action
  setSelectedS(value) {
    this.selectedS = value;
  }

  @action
  setSelectedM(value) {
    this.selectedM = value;
  }

  @action
  setSelectedL(value) {
    this.selectedL = value;
  }

  @action
  setSelectedXl(value) {
    this.selectedXl = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-12 mb-14">
      <UlxField @label="xs-size" @fieldId="multiselect-xs" @fieldClass="col-6" as |field|>
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedXs}}
          @onChange={{this.setSelectedXs}}
          @selectAll={{true}}
          @placeholder={{t "msg.multiselect.placeholder.city"}}
          @size="xs-size"
        />
      </UlxField>

      <UlxField
        @label="s-size (default)"
        @fieldId="multiselect-s"
        @fieldClass="col-6"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedS}}
          @onChange={{this.setSelectedS}}
          @selectAll={{true}}
          @placeholder={{t "msg.multiselect.placeholder.city"}}
          @size="s-size"
        />
      </UlxField>

      <UlxField @label="m-size" @fieldId="multiselect-m" @fieldClass="col-6" as |field|>
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedM}}
          @onChange={{this.setSelectedM}}
          @selectAll={{true}}
          @placeholder={{t "msg.multiselect.placeholder.city"}}
          @size="m-size"
        />
      </UlxField>

      <UlxField @label="l-size" @fieldId="multiselect-l" @fieldClass="col-6" as |field|>
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedL}}
          @onChange={{this.setSelectedL}}
          @selectAll={{true}}
          @placeholder={{t "msg.multiselect.placeholder.city"}}
          @size="l-size"
        />
      </UlxField>

      <UlxField @label="xl-size" @fieldId="multiselect-xl" @fieldClass="col-6" as |field|>
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedXl}}
          @onChange={{this.setSelectedXl}}
          @selectAll={{true}}
          @placeholder={{t "msg.multiselect.placeholder.city"}}
          @size="xl-size"
        />
      </UlxField>
    </div>
  </template>
}
