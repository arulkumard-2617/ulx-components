export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxInput, UlxCheckbox, t } from 'ulx-components';

export default class DemoInputTemplate extends Component {
  @tracked isFeatured = false;

  @action
  handleFeaturedChange(checked) {
    this.isFeatured = checked;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-6 mb-14">
      <UlxInput
        @label="First Name"
        @fieldClass="col-6"
        placeholder="Aaron"
        aria-label="First Name"
      >
        <:footer>
          <UlxCheckbox
            @itemLabel="Feature this speaker"
            @checked={{this.isFeatured}}
            @onCheckedChange={{this.handleFeaturedChange}}
          />
        </:footer>
      </UlxInput>

      <UlxInput
        @label="Last Name"
        @fieldClass="col-6"
        placeholder="Victor"
        aria-label="Last Name"
      />

    </div>
  </template>
}

`;
