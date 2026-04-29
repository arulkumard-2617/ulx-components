export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxTabmenu, UlxButton, t } from 'ulx-components';

export default class ControlledTabMenuDemo extends Component {
  @tracked activeIndex = 1;

  get items() {
    return [
      {
        label: "Dashboard",
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
      {
        label: "Transactions",
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
      {
        label: "Products",
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
      {
        label: "Messages",
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  get buttons() {
    return [
      { index: 0, label: '1' },
      { index: 1, label: '2' },
      { index: 2, label: '3' },
      { index: 3, label: '4' },
    ];
  }

  @action
  setActiveIndex(index) {
    this.activeIndex = index;
  }

  isActiveButton = (index) => {
    return index === this.activeIndex;
  };

  <template>
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <span class="fg-text-secondary">{{"Activate:"}}:</span>
        {{#each this.buttons as |btn|}}
          <UlxButton
            @label={{btn.label}}
            @variant={{if (this.isActiveButton btn.index) "primary" "basic"}}
            @size="s-size"
            aria-label={{"Activate tab btn.label"}}
            aria-pressed={{this.isActiveButton btn.index}}
            {{on "click" (fn this.setActiveIndex btn.index)}}
          />
        {{/each}}
      </div>
    </div>
    <UlxTabmenu
      @items={{this.items}}
      @activeIndex={{this.activeIndex}}
      @onTabChange={{this.handleTabChange}}
      @tabId="controlled-tabmenu"
      @ariaLabel="Tab menu navigation"
    />
  </template>
}

`;
