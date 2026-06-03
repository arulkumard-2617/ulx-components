export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonText extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton
        @label="Basic"
        @iconLeft="ls-tick-icon"
        @variant="basic"
        @text={{true}}
      />
      <UlxIconButton
        @label="Primary"
        @iconLeft="ls-tick-icon"
        @text={{true}}
      />
      <UlxIconButton
        @label="Secondary"
        @iconLeft="ls-tick-icon"
        @variant="secondary"
        @text={{true}}
      />
      <UlxIconButton
        @label="Success"
        @iconLeft="ls-tick-icon"
        @variant="success"
        @text={{true}}
      />
      <UlxIconButton
        @label="Info"
        @iconLeft="ls-tick-icon"
        @variant="info"
        @text={{true}}
      />
      <UlxIconButton
        @label="Warning"
        @iconLeft="ls-tick-icon"
        @variant="warning"
        @text={{true}}
      />
      <UlxIconButton
        @label="Danger"
        @iconLeft="ls-tick-icon"
        @variant="danger"
        @text={{true}}
      />
    </div>
  </template>
}

`;
