export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxAccordion, UlxButton } from 'ulx-components';

export default class ControlledAccordionDemo extends Component {
  @tracked activeIndex = null;

  get tabs() {
    return [
      { header: 'Header I', content: '...' },
      { header: 'Header II', content: '...' },
      { header: 'Header III', content: '...' }
    ];
  }

  @action
  setActiveIndex(index) {
    this.activeIndex = index;
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  @action
  isTabActive(index) {
    const a = this.activeIndex;
    if (Array.isArray(a)) return a.includes(index);
    return a === index;
  }

  <template>
    <div class="pda4">
      <div class="fxb fvc fje gp2 mgb4">
        <UlxButton @label="1" @variant={{if (this.isTabActive 0) "primary" "secondary"}} @size="s-size" @rounded={{true}} {{on "click" (fn this.setActiveIndex 0)}} />
        <UlxButton @label="2" @variant={{if (this.isTabActive 1) "primary" "secondary"}} @size="s-size" @rounded={{true}} {{on "click" (fn this.setActiveIndex 1)}} />
        <UlxButton @label="3" @variant={{if (this.isTabActive 2) "primary" "secondary"}} @size="s-size" @rounded={{true}} {{on "click" (fn this.setActiveIndex 2)}} />
      </div>
      <UlxAccordion @model={{this.tabs}} @activeIndex={{this.activeIndex}} @onTabChange={{this.handleTabChange}} @multiple={{true}}>
        <:content as |item|>
          <p class="m-0">{{item.content}}</p>
        </:content>
      </UlxAccordion>
    </div>
  </template>
}
`;
