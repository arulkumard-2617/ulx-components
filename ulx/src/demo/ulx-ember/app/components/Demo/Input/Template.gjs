import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxForm, UlxInput, UlxField, UlxCheckbox } from 'ulx-components';

export default class DemoInputTemplate extends Component {
  @tracked isFeatured = false;

  @action
  handleFeaturedChange(checked) {
    this.isFeatured = checked;
  }

  <template>
    <UlxForm @size="m-size" @customClass="ulx-grid gap-6 mb-14">
      {{! First Name }}
      <UlxField @label="First Name" @fieldId="firstName" @fieldClass="col-6">
        <:default as |field|>
          <UlxInput
            @field={{field}}
            placeholder="Aaron"
            aria-label="First Name"
          />
        </:default>

        <:assistive>
          <UlxCheckbox
            @itemLabel="Feature this speaker"
            @checked={{this.isFeatured}}
            @onCheckedChange={{this.handleFeaturedChange}}
          />
        </:assistive>
      </UlxField>

      {{! Last Name }}
      <UlxField @label="Last Name" @fieldId="lastName" @fieldClass="col-6" as |field|>
        <UlxInput
          @field={{field}}
          placeholder="Victor"
          aria-label="Last Name"
        />
      </UlxField>
    </UlxForm>
  </template>
}
