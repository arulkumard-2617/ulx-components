import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxTabmenu, t } from 'ulx-components';

export default class ControlledTabMenuDemo extends Component {
  @tracked activeIndex = 1;

  get items() {
    return [
      {
        label: t('lbl.dashboard'),
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
      {
        label: t('lbl.transactions'),
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
      {
        label: t('lbl.products'),
        icon: 'home-icon-01',
        iconType: 'font',
        iconComponentClass: 'bs-icons1',
        iconSize: 's18',
      },
      {
        label: t('lbl.messages'),
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
    <div class="fxb fvc fsb mgb4">
      <div class="fxb fvc gp2">
        <span class="fg-text-secondary">{{t "lbl.activate"}}:</span>
        {{#each this.buttons as |btn|}}
          <button
            type="button"
            class="w32 h32 bd rds-circle fxb fvc fhc
              {{if
                (this.isActiveButton btn.index)
                'bg-primary fg-white'
                'bd-primary fg-primary bg-transparent'
              }}"
            {{on "click" (fn this.setActiveIndex btn.index)}}
            aria-label={{t "msg.activate.tab" label=btn.label}}
          >
            {{btn.label}}
          </button>
        {{/each}}
      </div>
    </div>
    <UlxTabmenu
      @model={{this.items}}
      @activeIndex={{this.activeIndex}}
      @onTabChange={{this.handleTabChange}}
    />
  </template>
}
