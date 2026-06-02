import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonSizes extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton
        @label="Small"
        @iconLeft="ls-tick-icon"
        @size="s-size"
      />
      <UlxIconButton
        @label="Normal"
        @iconLeft="ls-tick-icon"
      />
      <UlxIconButton
        @label="Large"
        @iconLeft="ls-tick-icon"
        @size="l-size"
      />
      <UlxIconButton
        @label="Extra Large"
        @iconLeft="ls-tick-icon"
        @size="xl-size"
      />
    </div>
  </template>
}
