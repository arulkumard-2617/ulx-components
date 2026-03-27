export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment } from 'ulx-components';

export default class CheckboxgroupDemoComponent extends Component {
  @tracked selectedValues = ['item1'];

  get items() {
    return [
      {
        label: 'Item 1',
        title: 'Item 1',
        description: 'First checkbox option description',
        value: 'item1',
        selected: this.selectedValues.includes('item1'),
      },
      {
        label: 'Item 2',
        title: 'Item 2',
        description: 'Second checkbox option description',
        value: 'item2',
        selected: this.selectedValues.includes('item2'),
      },
      {
        label: 'Item 3',
        title: 'Item 3',
        description: 'Third checkbox option description',
        value: 'item3',
        selected: this.selectedValues.includes('item3'),
      },
    ];
  }

  @action
  handleItemSelect(selected, value) {
    if (selected) {
      // Ensure the value is present
      if (!this.selectedValues.includes(value)) {
        this.selectedValues = [...this.selectedValues, value];
      }
    } else {
      // Remove the value when unchecked
      this.selectedValues = this.selectedValues.filter(
        (currentValue) => currentValue !== value,
      );
    }
  }

  <template>
    <UlxOptionSegment
      @type="checkbox"
      @items={{this.items}}
      @onSelect={{this.handleItemSelect}}
      @ariaLabel="Checkbox option group"
    />
  </template>
}

`;
