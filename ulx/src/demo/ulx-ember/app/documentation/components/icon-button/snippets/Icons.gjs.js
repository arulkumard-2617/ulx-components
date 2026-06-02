export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonIcons extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton
        @iconLeft="ls-tick-icon"
        aria-label="Submit"
      />
      <UlxIconButton
        @label="Submit"
        @iconLeft="ls-tick-icon"
        @loading={{true}}
      />
      <UlxIconButton
        @label="Next"
        @iconRight="right-arrow-icon"
      />
    </div>
  </template>
}

`;
