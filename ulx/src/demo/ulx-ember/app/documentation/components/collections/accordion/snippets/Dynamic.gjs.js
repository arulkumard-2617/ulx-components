export default `
import Component from '@glimmer/component';
import { UlxAccordion } from 'ulx-components';

export default class DynamicAccordionDemo extends Component {
  get tabs() {
    return [
      { header: 'Title I', content: 'Content 1' },
      { header: 'Title II', content: 'Content 2' },
      { header: 'Title III', content: 'Content 3' },
    ];
  }

  <template>
    <div class="">
      <UlxAccordion @items={{this.tabs}}>
        <:content as |item|>
          <p class="m-0">{{item.content}}</p>
        </:content>
      </UlxAccordion>
    </div>
  </template>
}

`;
