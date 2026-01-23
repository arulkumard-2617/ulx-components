export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import UlsTabmenu from 'uls-components/components/collections/uls-tabmenu';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

export default class ControlledDemoComponent extends Component {
  @tracked activeItem = '1';

  items = [
      { label: 'Item 1', id: '1' },
      { label: 'Item 2', id: '2' },
      { label: 'Item 3', id: '3' }
  ];

  @action
  handleTabChange(items) {
    this.activeItem = items?.item?.id ?? items;
  }

  @action
  isActive(id) {
    return this.activeItem === id;
  }
  @action
  setActiveItem(id) {
    this.activeItem = id;
  }

  <template>
    <div class="fxb fhe gp2 mgb8">
      {{#each this.items as |item|}}
        <button
          class="w32 h32 pd0 uls-button primary rounded s-size
            {{if (this.isActive item.id) "" "outlined"}}"
          {{on "click" (fn this.setActiveItem item.id)}}
          aria-pressed={{this.isActive item.id}}
        >
          {{item.id}}
        </button>
      {{/each}}
    </div>
    <UlsTabmenu 
      @model={{this.items}}
      @activeItem={{this.activeItem}}
      @onTabChange={{this.handleTabChange}}
    />
  </template>
}

`;
