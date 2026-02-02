export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

const POSITIONS = [
  'top-left',
  'top-center',
  'top-right',
  'center',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export default class PositionsToastDemo extends Component {
  /** Messages per position: { 'top-left': [...], 'top-right': [...], ... } */
  @tracked messagesByPosition = {};

  /** Array of { position, messages } for template; use getter so @messages is tracked. */
  get positionEntries() {
    const byPos = this.messagesByPosition;
    return POSITIONS.map((pos) => ({
      position: pos,
      messages: byPos[pos] ?? [],
    }));
  }

  @action
  showToast(pos) {
    const messages = this.messagesByPosition[pos] ?? [];
    const newMessage = {
      id: \`msg-\${Date.now()}-\${pos}\`,
      severity: 'info',
      summary: 'Position',
      detail: \`Toast at \${pos}.\`,
    };
    this.messagesByPosition = {
      ...this.messagesByPosition,
      [pos]: [...messages, newMessage],
    };
  }

  @action
  removeMessage(position, message) {
    const messages = (this.messagesByPosition[position] ?? []).filter(
      (m) => m.id !== message.id,
    );
    this.messagesByPosition = {
      ...this.messagesByPosition,
      [position]: messages,
    };
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        {{#each POSITIONS as |pos|}}
          <UlxButton
            @label={{pos}}
            @severity="secondary"
            {{on "click" (fn this.showToast pos)}}
          />
        {{/each}}
      </div>
      {{#each this.positionEntries key="position" as |entry|}}
        <UlxToast
          @messages={{entry.messages}}
          @position={{entry.position}}
          @onClose={{fn this.removeMessage entry.position}}
        />
      {{/each}}
    </div>
  </template>
}

`;
