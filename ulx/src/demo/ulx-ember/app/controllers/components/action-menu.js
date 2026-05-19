import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ComponentsElementsActionMenuController extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: 'FEATURES' },
    { id: 'params', label: 'PARAMS' },
    { id: 'architecture', label: 'ARCHITECTURE' },
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

  get isBuilderTab() {
    return this.activeTab === 'builder';
  }

  @action
  onTabChange(tabId) {
    this.activeTab = tabId;
  }
}
