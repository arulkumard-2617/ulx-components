export default `
import Component from '@glimmer/component';
import { UlxAccordion } from 'ulx-components';

export default class MultipleAccordionDemo extends Component {
  get tabs() {
    return [
      { header: 'Header I', content: '...' },
      { header: 'Header II', content: '...' },
      { header: 'Header III', content: '...' }
    ];
  }

  get initialOpen() {
    return [0];
  }

  <template>
    <div class="pda4">
      <UlxAccordion @model={{this.tabs}} @activeIndex={{this.initialOpen}} @multiple={{true}}>
        <:content as |item|>
          <p class="m-0">{{item.content}}</p>
        </:content>
      </UlxAccordion>
    </div>
  </template>
}
`;
