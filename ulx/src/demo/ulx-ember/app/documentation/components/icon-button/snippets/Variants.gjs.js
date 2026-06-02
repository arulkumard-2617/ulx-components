export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonVariants extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxIconButton
        @label="Basic"
        @iconLeft="ls-tick-icon"
        @variant="basic"
      />
      <UlxIconButton
        @label="Primary"
        @iconLeft="ls-tick-icon"
        @variant="primary"
      />
      <UlxIconButton
        @label="Secondary"
        @iconLeft="ls-tick-icon"
        @variant="secondary"
      />
      <UlxIconButton
        @label="Success"
        @iconLeft="ls-tick-icon"
        @variant="success"
      />
      <UlxIconButton
        @label="Info"
        @iconLeft="ls-tick-icon"
        @variant="info"
      />
      <UlxIconButton
        @label="Warning"
        @iconLeft="ls-tick-icon"
        @variant="warning"
      />
      <UlxIconButton
        @label="Help"
        @iconLeft="ls-tick-icon"
        @variant="help-button"
      />
      <UlxIconButton
        @label="Danger"
        @iconLeft="ls-tick-icon"
        @variant="danger"
      />
    </div>
  </template>
}

`;
