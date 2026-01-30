export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxModal } from 'uls-components';

export default class PositionDemoComponent extends Component {
  @tracked isVisible = false;
  @tracked currentPosition = 'center';

  get positionOptions() {
    return [
      { label: 'Left', value: 'left', arrow: '→' },
      { label: 'Right', value: 'right', arrow: '←' },
      { label: 'TopLeft', value: 'top-left', arrow: '↖' },
      { label: 'Top', value: 'top', arrow: '↓' },
      { label: 'TopRight', value: 'top-right', arrow: '↗' },
      { label: 'BottomLeft', value: 'bottom-left', arrow: '↙' },
      { label: 'Bottom', value: 'bottom', arrow: '↑' },
      { label: 'BottomRight', value: 'bottom-right', arrow: '↘' },
    ];
  }

  @action
  openModal(position) {
    this.currentPosition = position;
    this.isVisible = true;
  }

  @action
  closeModal() {
    this.isVisible = false;
  }

  <template>
    <div class="fxb fw-wrap gp3">
      {{#each this.positionOptions as |option|}}
        <button
          type="button"
          class="uls-button uls-button-primary"
          {{on "click" (fn this.openModal option.value)}}
        >
          {{option.label}}
          <span aria-hidden="true">{{option.arrow}}</span>
        </button>
      {{/each}}
    </div>

    <UlxModal
      @visible={{this.isVisible}}
      @position={{this.currentPosition}}
      @title="Position: {{this.currentPosition}}"
      @onHide={{this.closeModal}}
      @showDefaultFooter={{true}}
      @cancelButtonLabel="Close"
      @onCancel={{this.closeModal}}
    >
      <p>This modal is positioned at <strong>{{this.currentPosition}}</strong>.</p>
    </UlxModal>
  </template>
}

`;
