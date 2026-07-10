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
        label: "Tab Menu",
        route: 'components.tab-menu',
      },
      {
        label: "Color context",
        route: 'getting-started.color-context',
      },
      {
        label: "Utilities",
        route: 'utilities.index',
      },
    ];
  }

  get currentActiveIndex() {
    const currentRoute = this.router.currentRouteName;
    if (!currentRoute) return 0;

    const index = this.items.findIndex((item) => {
      if (item.route === currentRoute) return true;
      if (
        item.route === 'utilities.index' &&
        (currentRoute === 'utilities.index' ||
          currentRoute?.startsWith('utilities.utility'))
      )
        return true;
      return false;
    });
    return index >= 0 ? index : 0;
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
    // LinkTo handles navigation automatically,
    // activeIndex is synced with current route via currentActiveIndex getter
  }

  <template>
    <div class="flex items-center justify-between mb-4">
      <p id="router-tabmenu-description" class="fg-text-secondary">
        {{"This demo shows TabMenu with LinkTo routing. Click tabs to navigate between routes. The active tab is automatically synced with the current route."}}
      </p>
    </div>
    <UlxTabmenu
      @items={{this.items}}
      @activeIndex={{this.currentActiveIndex}}
      @onTabChange={{this.handleTabChange}}
      @tabId="router-tabmenu"
      @ariaLabelledBy="router-tabmenu-description"
    />
  </template>
}
