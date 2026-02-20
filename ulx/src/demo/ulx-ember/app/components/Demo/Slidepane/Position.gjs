import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton } from 'ulx-components';
import { concat, fn } from "@ember/helper";

const POSITIONS = [
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' }
];

export default class PositionDemoComponent extends Component {
  @tracked paneOpen = false;
  @tracked currentPosition = 'right';

  get positionOptions() {
    return POSITIONS;
  }

  @action
  openPane(position) {
    this.currentPosition = position;
    this.paneOpen = true;
  }

  @action
  closePane() {
    this.paneOpen = false;
  }

  <template>
    <div class="fxb fvc gp4 fw-wrap">
      {{#each this.positionOptions as |opt|}}
        <UlxButton
          @label={{concat "Open from " opt.label}}
          @variant="primary"
          {{on "click" (fn this.openPane opt.value)}}
        />
      {{/each}}
    </div>

    <UlxSlidePane
      @visible={{this.paneOpen}}
      @position={{this.currentPosition}}
      @title={{concat "Slide Pane (" this.currentPosition ")"}}
      @onHide={{this.closePane}}
    >
        <p>This pane is opened from the <strong>{{this.currentPosition}}</strong> side. Use the position argument to dock the slide pane to left, right, top, or bottom.</p>
    </UlxSlidePane>
  </template>
}
