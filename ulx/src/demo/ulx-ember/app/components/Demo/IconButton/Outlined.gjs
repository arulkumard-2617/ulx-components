import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonOutlined extends Component {
  <template>
    <div class="flex flex-col items-start gap-4">
      <div class="flex gap-3 align-items-center flex-wrap">
        <UlxIconButton
          @label="Primary"
          @iconLeft="ls-tick-icon"
          @outlined={{true}}
        />
        <UlxIconButton
          @label="Secondary"
          @iconLeft="ls-tick-icon"
          @outlined={{true}}
          @variant="secondary"
        />
        <UlxIconButton
          @label="Success"
          @iconLeft="ls-tick-icon"
          @outlined={{true}}
          @variant="success"
        />
        <UlxIconButton
          @label="Info"
          @iconLeft="ls-tick-icon"
          @outlined={{true}}
          @variant="info"
        />
        <UlxIconButton
          @label="Warning"
          @iconLeft="ls-tick-icon"
          @outlined={{true}}
          @variant="warning"
        />
      </div>
      <div class="bg-primary p-4 rounded">
        <UlxIconButton
          @label="White"
          @iconLeft="ls-tick-icon"
          @outlined={{true}}
          @variant="white"
        />
      </div>
    </div>
  </template>
}
