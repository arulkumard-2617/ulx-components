import Component from '@glimmer/component';
import { UlxButton, UlxIconButton } from 'ulx-components';

export default class DemoButtonIcons extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton
        @iconLeft="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
        aria-label="Submit"
      />
      <UlxIconButton
        @label="Submit"
        @iconLeft="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
        @loading={{true}}
      />
      <UlxIconButton
        @label="Submit"
        @iconRight="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
    </div>
  </template>
}
