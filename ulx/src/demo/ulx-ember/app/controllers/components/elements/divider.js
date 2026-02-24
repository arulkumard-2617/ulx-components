import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ComponentsElementsDividerController extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: 'FEATURES' },
    { id: 'params', label: 'PARAMS' },
    { id: 'architecture', label: 'ARCHITECTURE' },
  ];

  get isFeaturesTab() {
    return this.activeTab === 'features';
  }

  get isParamsTab() {
    return this.activeTab === 'params';
  }

  get isArchitectureTab() {
    return this.activeTab === 'architecture';
  }

  @action
  onTabChange(tabId) {
    this.activeTab = tabId;
  }
}
