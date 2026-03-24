export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTextarea, UlxField, UlxCheckbox } from 'ulx-components';

export default class DemoTextareaTemplate extends Component {
  @tracked isFeatured = false;

  @action
  handleFeaturedChange(checked) {
    this.isFeatured = checked;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-6 mb-14">

      <UlxField @label="First Name" @fieldId="textarea-firstName" @fieldClass="col-6">
        <:default as |field|>
          <UlxTextarea
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

      <UlxField @label="Last Name" @fieldId="textarea-lastName" @fieldClass="col-6" as |field|>
        <UlxTextarea
          @field={{field}}
          placeholder="Victor"
          aria-label="Last Name"
        />
      </UlxField>

    </div>
  </template>
}

`;
