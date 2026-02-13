export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonRaisedText extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton @label={{t "lbl.primary"}} @text={{true}} @raised={{true}} />
      <UlxButton
        @label={{t "lbl.secondary"}}
        @text={{true}}
        @raised={{true}}
        @variant="secondary"
      />
      <UlxButton
        @label={{t "lbl.success"}}
        @text={{true}}
        @raised={{true}}
        @variant="success"
      />
      <UlxButton
        @label={{t "lbl.info"}}
        @text={{true}}
        @raised={{true}}
        @variant="info"
      />
      <UlxButton
        @label={{t "lbl.warning"}}
        @text={{true}}
        @raised={{true}}
        @variant="warning"
      />
      <UlxButton
        @label={{t "lbl.help"}}
        @text={{true}}
        @raised={{true}}
        @variant="help"
      />
      <UlxButton
        @label={{t "lbl.danger"}}
        @text={{true}}
        @raised={{true}}
        @variant="danger"
      />
    </div>
  </template>
}

`;
