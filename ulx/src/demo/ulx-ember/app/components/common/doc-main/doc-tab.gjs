import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

export default class DocTabComponent extends Component {
  get isActive() {
    return (tabId) => {
      return this.args.activeTab === tabId;
    };
  }

  @action
  handleTabClick(tabId, event) {
    event.preventDefault();
    if (this.args.onChange) {
      this.args.onChange(tabId);
    }
  }

  <template>
    <div class="ulsp-tabpanel">
      <ul class="ulsp-tabpanel-header fxb fvc gp0 mgb6" role="tablist">
        {{#each @tabs as |tab|}}
          <li class="ulsp-tabpanel-header-item" role="presentation">
            <a
              href="#"
              role="tab"
              aria-selected={{this.isActive tab.id}}
              class="pd4 fg-text-secondary text-decoration-none  font-size16 {{if (this.isActive tab.id) 'active' ''}}"
              {{on "click" (fn this.handleTabClick tab.id)}}
            >
              {{tab.label}}
            </a>
          </li>
        {{/each}}
      </ul>
      <div class="ulsp-tabpanel-content">
        {{yield @activeTab}}
      </div>
    </div>
  </template>
}

