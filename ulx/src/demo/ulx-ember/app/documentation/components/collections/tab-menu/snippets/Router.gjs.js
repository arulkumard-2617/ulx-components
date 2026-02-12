export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { UlxTabmenu, t } from 'ulx-components';

export default class RouterDemoComponent extends Component {
  @service router;
  @tracked activeIndex = 0;

  get items() {
    return [
      {
        label: t('lbl.tab.menu'),
        route: 'components.collections.tab-menu',
      },
      {
        label: t('lbl.walkthrough'),
        route: 'walkthrough',
      },
      {
        label: t('lbl.typography'),
        route: 'foundation.typography',
      },
      {
        label: t('lbl.colors'),
        route: 'foundation.colors',
      },
    ];
  }

  get currentActiveIndex() {
    const currentRoute = this.router.currentRouteName;
    if (!currentRoute) return 0;

    const index = this.items.findIndex((item) => item.route === currentRoute);
    return index >= 0 ? index : 0;
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
    // LinkTo handles navigation automatically,
    // activeIndex is synced with current route via currentActiveIndex getter
  }

  <template>
    <div class="fxb fvc fsb mgb4">
      <p class="fg-text-secondary">
        This demo shows TabMenu with LinkTo routing. Click tabs to navigate
        between routes. The active tab is automatically synced with the current
        route.
      </p>
    </div>
    <UlxTabmenu
      @model={{this.items}}
      @activeIndex={{this.currentActiveIndex}}
      @onTabChange={{this.handleTabChange}}
    />
  </template>
}

`;
