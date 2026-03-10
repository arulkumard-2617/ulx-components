import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton } from 'ulx-components';

export default class SizesSlidepaneDemo extends Component {
  @tracked showSmall = false;
  @tracked showMedium = false;
  @tracked showLarge = false;

  @action
  openSmall() {
    this.showSmall = true;
  }

  @action
  closeSmall() {
    this.showSmall = false;
  }

  @action
  openMedium() {
    this.showMedium = true;
  }

  @action
  closeMedium() {
    this.showMedium = false;
  }

  @action
  openLarge() {
    this.showLarge = true;
  }

  @action
  closeLarge() {
    this.showLarge = false;
  }

  <template>
    <div class="flex items-center gap-4 flex-wrap">
      <UlxButton
        @label="Open Small"
        @variant="primary"
        {{on "click" this.openSmall}}
      />
      <UlxButton
        @label="Open Medium"
        @variant="primary"
        {{on "click" this.openMedium}}
      />
      <UlxButton
        @label="Open Large"
        @variant="primary"
        {{on "click" this.openLarge}}
      />
    </div>

    <UlxSlidePane
      @visible={{this.showSmall}}
      @title="Small Slide Pane"
      @position="right"
      @size="s-size"
      @onHide={{this.closeSmall}}
      @onCancel={{this.closeSmall}}
      @onDone={{this.closeSmall}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Done"
    >
      <:body>
        <p>This is a small slide pane using <code>s-size</code>.</p>
      </:body>
    </UlxSlidePane>

    <UlxSlidePane
      @visible={{this.showMedium}}
      @title="Medium Slide Pane"
      @position="right"
      @size="m-size"
      @onHide={{this.closeMedium}}
      @onCancel={{this.closeMedium}}
      @onDone={{this.closeMedium}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Done"
    >
      <:body>
        <p>This is a medium slide pane using <code>m-size</code>.</p>
      </:body>
    </UlxSlidePane>

    <UlxSlidePane
      @visible={{this.showLarge}}
      @title="Large Slide Pane"
      @position="right"
      @size="l-size"
      @onHide={{this.closeLarge}}
      @onCancel={{this.closeLarge}}
      @onDone={{this.closeLarge}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Done"
    >
      <:body>
        <p>This is a large slide pane using <code>l-size</code>.</p>
      </:body>
    </UlxSlidePane>
  </template>
}
