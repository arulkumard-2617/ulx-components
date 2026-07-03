export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxChip } from 'ulx-components';

export default class SelectableChipDemo extends Component {
  @tracked topics = [
    { id: 1, label: 'turnpassionintowork', selected: true },
    { id: 2, label: 'arts', selected: true },
    { id: 3, label: 'Creative', selected: false },
    { id: 4, label: 'AI in Business', selected: true },
    { id: 5, label: 'followyourpassion', selected: false },
    { id: 6, label: 'Marketing', selected: true },
  ];

  @action
  toggleTopic(topic) {
    this.topics = this.topics.map((item) =>
      item.id === topic.id ? { ...item, selected: !item.selected } : item
    );
  }

  <template>
    <div class="ulx-chips">
      {{#each this.topics key="id" as |topic|}}
        <UlxChip
          @label={{topic.label}}
          @size="s-size"
          @selected={{topic.selected}}
          @selectable={{true}}
          {{on "click" (fn this.toggleTopic topic)}}
        />
      {{/each}}
    </div>
  </template>
}

`;
