import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonBasic extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton
        @label="Save"
        @iconLeft="ls-tick-icon"
        @variant="primary"
      />
      <UlxIconButton
        @label="Cancel"
        @iconLeft="close-icon-01"
        @variant="secondary"
      />
      <UlxIconButton
        @label="Delete"
        @iconLeft="delete-icon"
        @variant="danger"
      />
    </div>
  </template>
}
