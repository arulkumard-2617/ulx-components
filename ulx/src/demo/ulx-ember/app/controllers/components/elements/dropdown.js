import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { t } from 'ulx-components';

export default class ComponentsElementsDropdownController extends Controller {
  @tracked activeTab = 'features';

  tabs = [
    { id: 'features', label: t('lbl.doc.features') },
    { id: 'theming', label: t('lbl.doc.theming') },
    { id: 'builder', label: t('lbl.doc.builder') },
    { id: 'passthrough', label: t('lbl.doc.pass.through') },
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

  get isPassthroughTab() {
    return this.activeTab === 'passthrough';
  }

  @action
  onTabChange(tabId) {
    this.activeTab = tabId;
  }
}
