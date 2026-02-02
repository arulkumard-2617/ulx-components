import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ComponentsElementsProgressbarController extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: 'FEATURES' },
    { id: 'theming', label: 'THEMING' },
    { id: 'builder', label: 'BUILDER' },
  ];

  get isFeaturesTab() {
    return this.activeTab === 'features';
  }

  get isThemingTab() {
    return this.activeTab === 'theming';
  }

  get isBuilderTab() {
    return this.activeTab === 'builder';
  }

  @action
  onTabChange(tabId) {
    this.activeTab = tabId;
  }
}
