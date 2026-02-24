export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRaisedText extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButton @label="Primary" @text={{true}} @raised={{true}} />
      <UlxButton
        @label="Secondary"
        @text={{true}}
        @raised={{true}}
        @variant="secondary"
      />
      <UlxButton
        @label="Success"
        @text={{true}}
        @raised={{true}}
        @variant="success"
      />
      <UlxButton
        @label="Info"
        @text={{true}}
        @raised={{true}}
        @variant="info"
      />
      <UlxButton
        @label="Warning"
        @text={{true}}
        @raised={{true}}
        @variant="warning"
      />
      <UlxButton
        @label="Help"
        @text={{true}}
        @raised={{true}}
        @variant="help-button"
      />
      <UlxButton
        @label="Danger"
        @text={{true}}
        @raised={{true}}
        @variant="danger"
      />
    </div>
  </template>
}

`;
