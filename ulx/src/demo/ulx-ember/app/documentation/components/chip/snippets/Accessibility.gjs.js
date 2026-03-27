export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxChip } from 'ulx-components';
import { t } from 'ulx-components';

export default class AccessibilityChipDemo extends Component {
  @action
  handleRemove() {
    // Parent could remove chip from list; here we just demonstrate the removable chip
  }

  <template>
    <UlxChip
      @label={{t "msg.chip.removable.label"}}
      @removable={{true}}
      @onRemove={{this.handleRemove}}
    />
  </template>
}

`;
