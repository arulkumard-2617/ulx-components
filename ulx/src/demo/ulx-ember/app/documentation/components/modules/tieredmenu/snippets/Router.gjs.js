export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { UlxTieredmenu, t } from 'ulx-components';

export default class RouterDemoComponent extends Component {
  @service router;

  get items() {
    const routes = [
      {
        label: 'TieredMenu docs',
        route: 'components.modules.tieredmenu',
      },
      {
        label: 'Toast docs',
        route: 'components.modules.toast',
      },
      {
        label: 'Tab Menu docs',
        route: 'components.collections.tab-menu',
      },
    ];

    return routes.map((item) => ({
      ...item,
      // Use command to integrate with Ember Router
      command: ({ item: selected }) => {
        if (selected.route) {
          this.router.transitionTo(selected.route);
        }
      },
    }));
  }

  @action
  handleItemSelect(/* item */) {
    // Selection is handled by command via router.transitionTo;
    // keep this hook for additional side effects if needed.
  }

  <template>
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
