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
        icon: 'bs-icons1 read-icon s20',
        items: [
          {
            key: 'divider',
            label: 'Divider',
            icon: 'bs-icons1 divider-icon s20',
            command: () =>
              this.router.transitionTo('components.elements.divider'),
          },
          {
            key: 'accordion',
            label: 'Accordion',
            icon: 'bs-icons1 list-view-icon s20',
            command: () =>
              this.router.transitionTo('components.collections.accordion'),
          },
        ],
      },
    ];
  }

  <template>
    <div class="w-full md-max-w-640">
      <UlxPanelmenu @items={{this.items}} />
    </div>
  </template>
}

`;
