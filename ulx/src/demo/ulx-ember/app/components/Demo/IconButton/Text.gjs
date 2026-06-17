import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonText extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxIconButton
        @label="Basic"
        @iconLeft="ls-tick-icon"
        @size="compact"
        @variant="basic on-hover"
        @text={{true}}
      />
      <UlxIconButton
        @label="Primary"
        @iconLeft="ls-tick-icon"
        @size="compact on-hover"
        @text={{true}}
      />
      <UlxIconButton
        @label="Secondary"
        @iconLeft="ls-tick-icon"
        @text={{true}}
        @size="compact"
        @variant="secondary on-hover"
      />
      <UlxIconButton
        @label="Success"
        @iconLeft="ls-tick-icon"
        @text={{true}}
        @variant="success on-hover"
        @size="compact"
      />
      <UlxIconButton
        @label="Danger"
        @iconLeft="ls-tick-icon"
        @text={{true}}
        @variant="danger on-hover"
        @size="compact"
      />
    </div>
  </template>
}
