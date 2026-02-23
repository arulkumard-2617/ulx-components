export default `
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { UlxPanelmenu } from 'ulx-components';

export default class DemoPanelmenuRouter extends Component {
  @service router;

  get items() {
    return [
      {
        key: 'docs',
        label: 'Docs',
        icon: 'bs-icons1 book-icon',
        items: [
          {
            key: 'divider',
            label: 'Divider',
            icon: 'bs-icons1 minus-icon',
            command: () => this.router.transitionTo('components.elements.divider')
          }
        ]
      }
    ];
  }

  <template>
    <div class="w-100p md-max-w-640">
      <UlxPanelmenu @model={{this.items}} />
    </div>
  </template>
}
`;

