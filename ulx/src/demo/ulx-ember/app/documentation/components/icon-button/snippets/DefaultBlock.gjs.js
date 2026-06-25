export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonDefaultBlock extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxIconButton @iconLeft="ls-tick-icon">
        <:default>
          Save changes
        </:default>
      </UlxIconButton>

      <UlxIconButton @iconRight="right-arrow-icon" @variant="secondary">
        <:default>
          <span class="flex gap-4 align-items-center">
            <span>Continue</span>
            <span class="text-11 fg-secondary">(Step 2)</span>
          </span>
        </:default>
      </UlxIconButton>
    </div>
  </template>
}

`;
