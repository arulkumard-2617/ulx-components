import Component from '@glimmer/component';
import { UlxButton, UlxIconButton } from 'ulx-components';

export default class DemoButtonIcons extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton
        @icon="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
        aria-label="Submit"
      />
      <UlxIconButton
        @label="Submit"
        @icon="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
      <UlxIconButton
        @label="Submit"
        @icon="ls-tick-icon"
        @iconPos="right"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
    </div>
  </template>
}
