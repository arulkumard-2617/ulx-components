export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonIcons extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton
        @icon="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
        aria-label={{t "lbl.submit"}}
      />
      <UlxButton
        @label={{t "lbl.submit"}}
        @icon="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
      <UlxButton
        @label={{t "lbl.submit"}}
        @icon="ls-tick-icon"
        @iconPos="right"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
    </div>
  </template>
}

`;
