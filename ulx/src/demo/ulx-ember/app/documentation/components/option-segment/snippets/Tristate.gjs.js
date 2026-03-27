export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment, UlxCheckbox } from 'ulx-components';

/**
 * Demo for \`UlxOptionSegment\` with a tri-state control in the header
 * and nested checkbox conditions, matching the “Hide When” design.
 */
export default class TristateDemoComponent extends Component {
  @tracked valueAlwaysVisible = false;
  @tracked valueAlwaysHidden = false;
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

  get hideWhenValue() {
    const total = this.conditions.length;
    const checkedCount = this.conditions.filter((c) => c.checked).length;

    if (checkedCount === 0) return false;
    if (checkedCount === total) return true;
    return null;
  }

  get items() {
    return [
      {
        value: 'always-visible',
        title: 'Always Visible',
        description: 'Ticket class is always visible.',
        hasNested: false,
        selected: this.valueAlwaysVisible === true,
        tristateValue: this.valueAlwaysVisible,
        onTristateChange: this.handleAlwaysVisibleChange,
      },
      {
        value: 'always-hidden',
        title: 'Always Hidden',
        description:
          'Hidden ticket classes will be displayed when access codes are used.',
        hasNested: false,
        selected: this.valueAlwaysHidden === true,
        tristateValue: this.valueAlwaysHidden,
        onTristateChange: this.handleAlwaysHiddenChange,
      },
      {
        value: 'hide-when',
        title: 'Hide When',
        description: 'You must choose at least one option',
        hasNested: true,
        // Segment is considered selected whenever any condition is checked
        selected: this.hideWhenValue !== false,
        tristateValue: this.hideWhenValue,
        onTristateChange: this.handleHideWhenTristateChange,
      },
    ];
  }

  @action
  handleAlwaysVisibleChange(nextValue) {
    this.valueAlwaysVisible = nextValue;
  }

  @action
  handleAlwaysHiddenChange(nextValue) {
    this.valueAlwaysHidden = nextValue;
  }

  @action
  handleHideWhenTristateChange(nextValue) {
    // Header tri-state controls nested checkboxes:
    // - true  => select all
    // - false => clear all
    // - null  => select first only (example of partial selection)
    if (nextValue === true) {
      this.conditions = this.conditions.map((condition) => ({
        ...condition,
        checked: true,
      }));
    } else if (nextValue === false) {
      this.conditions = this.conditions.map((condition) => ({
        ...condition,
        checked: false,
      }));
    } else {
      this.conditions = this.conditions.map((condition, index) => ({
        ...condition,
        checked: index === 0,
      }));
    }
  }

  @action
  handleConditionChange(item, checked) {
    this.conditions = this.conditions.map((condition) =>
      condition === item ? { ...condition, checked } : condition,
    );
  }

  @action
  handleSegmentSelect(_selected, value) {
    // Clicking the segment should keep the checkbox and segment selection in sync.
    // Since this is a checkbox-style group, allow multiple selected segments.
    if (value === 'always-visible') {
      this.valueAlwaysVisible = !this.valueAlwaysVisible;
    } else if (value === 'always-hidden') {
      this.valueAlwaysHidden = !this.valueAlwaysHidden;
    } else if (value === 'hide-when') {
      // For nested case, ensure at least the first condition is selected
      const anyChecked = this.conditions.some((c) => c.checked);

      if (!anyChecked) {
        this.conditions = this.conditions.map((condition, index) => ({
          ...condition,
          checked: index === 0,
        }));
      }
    }
  }

  <template>
    <UlxOptionSegment
      @type="tristate"
      @items={{this.items}}
      @onSelect={{this.handleSegmentSelect}}
      @ariaLabel="Hide when option with tri-state header and nested conditions"
    >
      <:nested as |item|>
        {{#if item.hasNested}}
          <UlxCheckbox
            @items={{this.conditions}}
            @onItemChange={{this.handleConditionChange}}
          />
        {{/if}}
      </:nested>
    </UlxOptionSegment>
  </template>
}

`;
