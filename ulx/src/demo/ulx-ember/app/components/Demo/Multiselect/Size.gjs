import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, t } from 'ulx-components';

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
      <UlxMultiSelect
        id="multiselect-xs"
        @options={{this.items}}
        @value={{this.selectedXs}}
        @onChange={{this.setSelectedXs}}
        @selectAll={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label="xs-size"
        @size="xs-size"
        @fieldClass="col-6"
      />

      <UlxMultiSelect
        id="multiselect-s"
        @options={{this.items}}
        @value={{this.selectedS}}
        @onChange={{this.setSelectedS}}
        @selectAll={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label="s-size (default)"
        @size="s-size"
        @fieldClass="col-6"
      />

      <UlxMultiSelect
        id="multiselect-m"
        @options={{this.items}}
        @value={{this.selectedM}}
        @onChange={{this.setSelectedM}}
        @selectAll={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label="m-size"
        @size="m-size"
        @fieldClass="col-6"
      />

      <UlxMultiSelect
        id="multiselect-l"
        @options={{this.items}}
        @value={{this.selectedL}}
        @onChange={{this.setSelectedL}}
        @selectAll={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label="l-size"
        @size="l-size"
        @fieldClass="col-6"
      />

      <UlxMultiSelect
        id="multiselect-xl"
        @options={{this.items}}
        @value={{this.selectedXl}}
        @onChange={{this.setSelectedXl}}
        @selectAll={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label="xl-size"
        @size="xl-size"
        @fieldClass="col-6"
      />
    </div>
  </template>
}

