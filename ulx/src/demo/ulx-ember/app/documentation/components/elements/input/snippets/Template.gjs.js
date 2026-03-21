export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxInput, UlxField, UlxCheckbox, t } from 'ulx-components';

export default class DemoInputTemplate extends Component {
  @tracked isFeatured = false;

  @action
  handleFeaturedChange(checked) {
    this.isFeatured = checked;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-6 mb-14">

      {{! First Name }}
      <UlxField @label="First Name" @key="firstName" @fieldClass="col-6">
        <:control as |field|>
          <UlxInput
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            placeholder="Aaron"
            aria-label="First Name"
          />
        </:control>

        <:assistive>
          <UlxCheckbox
            @itemLabel="Feature this speaker"
            @checked={{this.isFeatured}}
            @onCheckedChange={{this.handleFeaturedChange}}
          />
        </:assistive>
      </UlxField>

      {{! Last Name }}
      <UlxField @label="Last Name" @key="lastName" @fieldClass="col-6">
        <:control as |field|>
          <UlxInput
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            placeholder="Victor"
            aria-label="Last Name"
          />
        </:control>
      </UlxField>

    </div>
  </template>
}

`;
