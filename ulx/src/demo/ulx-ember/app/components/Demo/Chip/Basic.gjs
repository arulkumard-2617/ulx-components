import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxChip } from 'ulx-components';
import { t } from 'ulx-components';

export default class BasicChipDemo extends Component {
  @tracked chips = [
    { id: 1, label: t('lbl.chip.action'), size: 'm-size', removable: false },
    { id: 2, label: t('lbl.chip.comedy'), size: 'm-size', removable: false },
    { id: 3, label: t('lbl.chip.mystery'), size: 'm-size', removable: false },
    { id: 4, label: t('lbl.chip.thriller'), size: 'm-size', removable: true },
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
          @size={{chip.size}}
        />
      {{/each}}
    </div>
  </template>
}
