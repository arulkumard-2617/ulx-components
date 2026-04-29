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

  @action
  handleDone() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
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
        @onDone={{this.handleDone}}
        @submittingLabel="Saving…"
      >
        <p>This is the default body content. You can pass any content in the
          <code>&lt;:body&gt;</code>
          block. Confirm returns a promise: the Done button shows loading until
          it resolves, then the pane closes.</p>
      </UlxSlidePane>
    </div>
  </template>
}
