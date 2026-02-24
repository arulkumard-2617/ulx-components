import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { t } from 'ulx-components';

export default class ComponentsCollectionsMultiselectController extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: t('lbl.doc.features') },
    { id: 'params', label: t('lbl.doc.params') },
    { id: 'architecture', label: t('lbl.doc.architecture') },
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
