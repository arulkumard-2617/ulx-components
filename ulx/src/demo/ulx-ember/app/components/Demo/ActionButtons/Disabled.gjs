import Component from '@glimmer/component';
import { UlxActionButtons } from 'ulx-components';
import { buildSplitActionButtons } from './actions';

export default class DemoActionButtonsDisabled extends Component {
  get actionButtons() {
    return buildSplitActionButtons({
      onPrimary: () => {},
      onUpdate: () => {},
      onDelete: () => {}
    });
  }

  <template>
    <div class="">
      <UlxActionButtons
        @actionButtons={{this.actionButtons}}
        @disabled={{true}}
      />
    </div>
  </template>
}
