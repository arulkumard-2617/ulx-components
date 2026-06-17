export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonText extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton
        @label="Basic"
        @size="compact"
        @variant="basic on-hover"
        @text={{true}}
      />
      <UlxButton @label="Primary" @size="compact on-hover" @text={{true}} />
      <UlxButton
        @label="Secondary"
        @text={{true}}
        @size="compact"
        @variant="secondary on-hover"
      />
      <UlxButton
        @label="Success"
        @text={{true}}
        @variant="success on-hover"
        @size="compact"
      />
      <UlxButton
        @label="Danger"
        @text={{true}}
        @variant="danger on-hover"
        @size="compact"
      />
    </div>
  </template>
}

`;
