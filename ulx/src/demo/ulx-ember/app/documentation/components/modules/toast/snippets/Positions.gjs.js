export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

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
  get messages() {
    return [
      { id: '1', type: 'info', summary: t('lbl.position'), detail: t('msg.bottom.right.default') },
    ];
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        {{#each POSITIONS as |pos|}}
          <UlxButton
            @label={{pos}}
            @variant="secondary"
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
