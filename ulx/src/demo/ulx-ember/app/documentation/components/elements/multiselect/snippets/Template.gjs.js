export default `
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

export default class DemoMultiselectTemplate extends Component {
  @tracked selected = [];

  get items() {
    return CITIES;
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.dropdown.template"}}
        @fieldId="multiselect-template"
        @fieldClass="col-4"
      >
        <:control as |field|>
          <UlxMultiSelect
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @options={{this.items}}
            @value={{this.selected}}
            @onChange={{this.setSelected}}
            @selectAll={{true}}
            @placeholder={{t "msg.multiselect.placeholder.city"}}
          >
            <:value as |ctx|>
              {{#if ctx.selectedOptions.length}}
                <span>{{ctx.selectedLabels}}</span>
              {{else}}
                <span>{{ctx.placeholder}}</span>
              {{/if}}
            </:value>
            <:item as |ctx|>
              <span>{{ctx.label}}</span>
            </:item>
          </UlxMultiSelect>
        </:control>
      </UlxField>
    </div>
  </template>
}

`;
