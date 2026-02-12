import Component from '@glimmer/component';
import { UlxSegment, t } from 'ulx-components';

export default class BorderedDemoComponent extends Component {
  get borderedExamples() {
    return [
      { side: 'top', color: 'red', label: 'Red' },
      { side: 'top', color: 'blue', label: 'Blue' },
      { side: 'top', color: 'green', label: 'Green' },
      { side: 'top', color: 'primary', label: 'Primary' },
      { side: 'bottom', color: 'orange', label: 'Orange' },
      { side: 'bottom', color: 'purple', label: 'Purple' },
      { side: 'bottom', color: 'grey', label: 'Grey' },
      { side: 'left', color: 'blue', label: 'Blue' },
      { side: 'left', color: 'green', label: 'Green' },
      { side: 'right', color: 'red', label: 'Red' },
      { side: 'right', color: 'primary', label: 'Primary' },
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
