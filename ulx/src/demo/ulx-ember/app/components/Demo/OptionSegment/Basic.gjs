import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment } from 'ulx-components';

export default class BasicOptionSegmentDemo extends Component {
  // Track the selected value directly to avoid mutating
  // tracked state during the same computation.
  @tracked activeValue = 'item1';

  get items() {
    return [
      {
        label: 'Item 1',
        title: 'Item 1',
        value: 'item1',
        selected: this.activeValue === 'item1',
      },
      {
        label: 'Item 2',
        title: 'Item 2',
        value: 'item2',
        selected: this.activeValue === 'item2',
      },
      {
        label: 'Item 3',
        title: 'Item 3',
        value: 'item3',
        selected: this.activeValue === 'item3',
      },
    ];
  }

  @action
  handleItemClick(_selected, value) {
    this.activeValue = value;
  }

  <template>
    <UlxOptionSegment
      @type="basic"
      @items={{this.items}}
      @onSelect={{this.handleItemClick}}
    />
  </template>
}
