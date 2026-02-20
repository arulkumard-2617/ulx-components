import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton } from 'ulx-components';

export default class FullscreenSlidepaneDemo extends Component {
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
    this.closePane();
  }

  <template>
    <div class="fxb fvc gp4">
      <UlxButton
        @label="Open Slide Pane"
        @variant="primary"
        {{on "click" this.openPane}}
      />

      <UlxSlidePane
        @visible={{this.isVisible}}
        @title="Fullscreen Slide Pane"
        @position="right"
        @width="500px"
        @onHide={{this.closePane}}
        @onDone={{this.handleDone}}
        @onCancel={{this.closePane}}
        @autoCloseOnCancel={{true}}
        @maximizable={{true}}
      >
        <:body>
          <p>This pane uses the default footer and has a maximize button in the header. Click it to expand to full width, then Restore to return.</p>
        </:body>
      </UlxSlidePane>
    </div>
  </template>
}
