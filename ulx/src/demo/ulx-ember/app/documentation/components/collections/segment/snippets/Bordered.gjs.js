export default `
import Component from '@glimmer/component';
import { UlxSegment, t } from 'ulx-components';

export default class BorderedDemoComponent extends Component {
  get borderedExamples() {
    return [
      { side: 'top', color: 'red', label: t('lbl.red') },
      { side: 'top', color: 'blue', label: t('lbl.blue') },
      { side: 'top', color: 'green', label: t('lbl.green') },
      { side: 'top', color: 'primary', label: t('lbl.primary') },
      { side: 'bottom', color: 'orange', label: t('lbl.orange') },
      { side: 'bottom', color: 'purple', label: t('lbl.purple') },
      { side: 'bottom', color: 'grey', label: t('lbl.grey') },
      { side: 'left', color: 'blue', label: t('lbl.blue') },
      { side: 'left', color: 'green', label: t('lbl.green') },
      { side: 'right', color: 'red', label: t('lbl.red') },
      { side: 'right', color: 'primary', label: t('lbl.primary') },
    ];
  }

  <template>
    <div class="bordered-demo">
      <h3 class="mgb1">{{t "msg.colored.border.segments"}}</h3>
      <p class="mgb5">Segments with colored borders on specific sides (3px
        width)</p>
      <div class="fxb fcol gp5">
        {{#each this.borderedExamples as |example|}}
          <UlxSegment
            @borderSide={{example.side}}
            @borderColor={{example.color}}
          >
            <p>{{example.label}} border on {{example.side}} side</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}

`;
