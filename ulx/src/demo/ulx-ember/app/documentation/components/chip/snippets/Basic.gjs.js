export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxChip } from 'ulx-components';
import { t } from 'ulx-components';

export default class BasicChipDemo extends Component {
  @tracked chips = [
    { id: 1, label: "Action", removable: false },
    { id: 2, label: "Comedy", removable: false },
    { id: 3, label: "Mystery", removable: false },
    { id: 4, label: "Thriller", removable: true },
  ];

  get semanticChips() {
    return [
      { label: 'primary', class: 'primary' },
      { label: 'secondary', class: 'secondary' },
      { label: 'success', class: 'success' },
      { label: 'info', class: 'info' },
      { label: 'warning', class: 'warning' },
      { label: 'danger', class: 'danger' },
    ];
  }

  @action
  handleRemove(event, value) {
    this.chips = this.chips.filter((chip) => chip.label !== value);
  }

  <template>
    <div class="flex flex-column gap-4">
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

      <div class="flex flex-wrap gap-4">
        {{#each this.semanticChips key="class" as |chip|}}
          <UlxChip
            @label={{chip.label}}
            @size="s-size"
            @customClass={{chip.class}}
          />
        {{/each}}
      </div>
    </div>
  </template>
}

`;
