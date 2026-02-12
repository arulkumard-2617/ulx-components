import Component from '@glimmer/component';
import { UlxSplitButton, t } from 'ulx-components';

export default class DemoSplitButtonDisabled extends Component {
  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => {},
      },
      { label: 'Delete', icon: 'bs-icons1 close-icon-01', command: () => {} },
    ];
  }

  <template>
    <div class="pda4">
      <UlxSplitButton
        @label={{t "lbl.save"}}
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @size="s-size"
        @model={{this.items}}
        @disabled={{true}}
      />
    </div>
  </template>
}
