import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTextarea, UlxField } from 'ulx-components';

export default class DemoTextareaResizeY extends Component {
  @tracked description = '';

  @action
  updateDescription(value) {
    this.description = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Description"
        @helpText="Use @resizeY to grow height vertically as content exceeds the minimum."
        @fieldId="textarea-resize-y"
        @fieldClass="col-12"
        as |field|
      >
        <UlxTextarea
          @field={{field}}
          @value={{this.description}}
          @onInput={{this.updateDescription}}
          @resizeY={{true}}
          @size="m-size"
          placeholder="Type multiple lines to see the textarea grow…"
          aria-label="Description"
        />
      </UlxField>
    </div>
  </template>
}
