import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ComponentsModulesTieredmenuController extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: 'FEATURES' },
    { id: 'theming', label: 'THEMING' },
    { id: 'passthrough', label: 'PASS THROUGH' },
  ];

  get isFeaturesTab() {
    return this.activeTab === 'features';
  }

  get isThemingTab() {
    return this.activeTab === 'theming';
  }

  get isPassthroughTab() {
    return this.activeTab === 'passthrough';
  }

  @action
  onTabChange(tabId) {
    this.activeTab = tabId;
  }
}
