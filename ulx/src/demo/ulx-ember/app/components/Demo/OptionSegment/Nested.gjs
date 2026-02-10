import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment, UlxCheckbox } from 'ulx-components';

export default class NestedDemoComponent extends Component {
  @tracked activeValue = 'hide-when';

  @tracked conditions = [
    {
      key: 'not-started',
      label: "Ticket sales haven't begun",
      checked: true,
    },
    {
      key: 'sold-out',
      label: 'Ticket sales are sold out or marked as sold out',
      checked: false,
    },
    {
      key: 'ended',
      label: 'Ticket sales have ended',
      checked: false,
    },
    {
      key: 'closed',
      label: 'Ticket class status is closed',
      checked: false,
    },
  ];

  get items() {
    return [
      {
        value: 'always-visible',
        title: 'Always Visible',
        hasNested: false,
        selected: this.activeValue === 'always-visible',
      },
      {
        value: 'always-hidden',
        title: 'Always Hidden',
        description:
          'Hidden ticket classes will be displayed in the event website when access codes are used',
        hasNested: false,
        selected: this.activeValue === 'always-hidden',
      },
      {
        value: 'hide-when',
        title: 'Hide When',
        description: 'You must choose at least one option',
        hasNested: true,
        selected: this.activeValue === 'hide-when',
      },
    ];
  }

  @action
  handleSegmentSelect(_selected, value) {
    this.activeValue = value;
  }

  @action
  handleConditionChange(item, checked) {
    this.conditions = this.conditions.map((condition) =>
      condition === item ? { ...condition, checked } : condition,
    );
  }

  <template>
    <UlxOptionSegment
      @type="radio"
      @items={{this.items}}
      @onSelect={{this.handleSegmentSelect}}
      @ariaLabel="Hide when option with nested conditions"
    >
      <:nested as |item|>
        {{#if item.hasNested}}
          {{#if item.selected}}
            <UlxCheckbox
              @items={{this.conditions}}
              @onItemChange={{this.handleConditionChange}}
            />
          {{/if}}
        {{/if}}
      </:nested>
    </UlxOptionSegment>
  </template>
}
