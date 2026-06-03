import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonPilled extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxIconButton
        @label="Primary"
        @iconLeft="ls-tick-icon"
        @pilled={{true}}
      />
      <UlxIconButton
        @label="Secondary"
        @iconLeft="ls-tick-icon"
        @pilled={{true}}
        @variant="secondary"
      />
      <UlxIconButton
        @label="Success"
        @iconLeft="ls-tick-icon"
        @pilled={{true}}
        @variant="success"
      />
      <UlxIconButton
        @label="Info"
        @iconLeft="ls-tick-icon"
        @pilled={{true}}
        @variant="info"
      />
      <UlxIconButton
        @label="Warning"
        @iconLeft="ls-tick-icon"
        @pilled={{true}}
        @variant="warning"
      />
      <UlxIconButton
        @label="Danger"
        @iconLeft="ls-tick-icon"
        @pilled={{true}}
        @variant="danger"
      />
    </div>
  </template>
}
