import Component from '@glimmer/component';
import { UlxButton } from 'uls-components';

export default class DemoButtonRaisedText extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton @label="Primary" @text={{true}} @raised={{true}} />
      <UlxButton
        @label="Secondary"
        @text={{true}}
        @raised={{true}}
        @severity="secondary"
      />
      <UlxButton
        @label="Success"
        @text={{true}}
        @raised={{true}}
        @severity="success"
      />
      <UlxButton
        @label="Info"
        @text={{true}}
        @raised={{true}}
        @severity="info"
      />
      <UlxButton
        @label="Warning"
        @text={{true}}
        @raised={{true}}
        @severity="warning"
      />
      <UlxButton
        @label="Help"
        @text={{true}}
        @raised={{true}}
        @severity="help"
      />
      <UlxButton
        @label="Danger"
        @text={{true}}
        @raised={{true}}
        @severity="danger"
      />
    </div>
  </template>
}
