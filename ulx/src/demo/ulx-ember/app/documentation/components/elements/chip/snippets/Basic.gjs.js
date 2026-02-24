export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxChip } from 'ulx-components';
import { t } from 'ulx-components';

export default class BasicChipDemo extends Component {
  @tracked chips = [
    { id: 1, label: t('lbl.chip.action'), removable: false },
    { id: 2, label: t('lbl.chip.comedy'), removable: false },
    { id: 3, label: t('lbl.chip.mystery'), removable: false },
    { id: 4, label: t('lbl.chip.thriller'), removable: true },
  ];

  @action
  handleRemove(event, value) {
    this.chips = this.chips.filter((chip) => chip.label !== value);
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.chips key="id" as |chip|}}
        <UlxChip
          @label={{chip.label}}
          @removable={{chip.removable}}
          @onRemove={{this.handleRemove}}
        />
      {{/each}}
    </div>
  </template>
}

`;
