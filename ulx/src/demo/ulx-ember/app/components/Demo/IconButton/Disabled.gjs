import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonDisabled extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxIconButton
        @label="Submit"
        @iconLeft="ls-tick-icon"
        @disabled={{true}}
      />
      <UlxIconButton
        @iconLeft="ls-tick-icon"
        @disabled={{true}}
        aria-label="Submit"
      />
    </div>
  </template>
}
