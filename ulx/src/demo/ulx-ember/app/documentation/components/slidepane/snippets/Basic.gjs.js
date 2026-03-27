export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton } from 'ulx-components';

export default class BasicSlidepaneDemo extends Component {
  @tracked isVisible = false;

  @action
  openPane() {
    this.isVisible = true;
  }

  @action
  closePane() {
    this.isVisible = false;
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxButton
        @label="Open Slide Pane"
        @variant="primary"
        {{on "click" this.openPane}}
      />

      <UlxSlidePane
        @visible={{this.isVisible}}
        @title="Basic Slide Pane"
        @position="right"
        @onHide={{this.closePane}}
      >
        <p>This is the default body content. You can pass any content in the
          <code>&lt;:body&gt;</code>
          block.</p>
      </UlxSlidePane>
    </div>
  </template>
}

`;
