import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment } from 'ulx-components';

export default class RadiogroupDemoComponent extends Component {
  @tracked activeValue = 'item1';

  get items() {
    return [
      {
        label: 'Item 1',
        title: 'Item 1',
        description: 'First radio option description',
        value: 'item1',
        selected: this.activeValue === 'item1',
      },
      {
        label: 'Item 2',
        title: 'Item 2',
        description: 'Second radio option description',
        value: 'item2',
        selected: this.activeValue === 'item2',
      },
      {
        label: 'Item 3',
        title: 'Item 3',
        description: 'Third radio option description',
        value: 'item3',
        selected: this.activeValue === 'item3',
      },
    ];
  }

  @action
  handleItemSelect(_selected, value) {
    this.activeValue = value;
  }

  <template>
    <UlxOptionSegment
      @type="radio"
      @items={{this.items}}
      @onSelect={{this.handleItemSelect}}
      @ariaLabel="Radio option group"
    />
  </template>
}
