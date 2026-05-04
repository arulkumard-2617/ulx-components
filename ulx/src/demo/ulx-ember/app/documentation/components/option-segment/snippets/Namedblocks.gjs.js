export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment, UlxIcon } from 'ulx-components';

export default class NamedblocksDemoComponent extends Component {
  @tracked activeValue = 'enhance';

  get items() {
    return [
      {
        value: 'enhance',
        icon: 'enhance-icon',
        title: 'Enhance messaging',
        description: 'Automatically optimize content for engagement.',
        selected: this.activeValue === 'enhance',
        itemClass: 'relative'
      },
      {
        value: 'view-delivery',
        icon: 'view-delivery-report',
        title: 'View delivery reports',
        description: 'Track message delivery and open status in real time.',
        selected: this.activeValue === 'view-delivery',
        itemClass: 'relative'
      },
      {
        value: 'bulk-code',
        icon: 'bulk-code-icon',
        title: 'Bulk code actions',
        description: 'Apply configuration changes across multiple workflows.',
        selected: this.activeValue === 'bulk-code',
        itemClass: 'relative'
      }
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
      @ariaLabel="Named blocks option group"
      @customClass="ulx-grid col-3"
    >
      <:title as |item|>
        <span>{{item.title}}</span>
        <UlxIcon
          @type="font"
          @componentClass="bs-icons1"
          @customClass="absolute right-10 top-6 primary s20"
          @iconName={{item.icon}}
          aria-hidden="true"
        />
      </:title>

      <:description as |item|>
        {{item.description}}
      </:description>
    </UlxOptionSegment>
  </template>
}

`;
