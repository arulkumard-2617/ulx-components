export default `
import Component from '@glimmer/component';
import { UlxAccordion } from 'ulx-components';

const LOREM_1 = 'Lorem ipsum dolor sit amet...';
const LOREM_2 = 'Sed ut perspiciatis unde omnis...';
const LOREM_3 = 'At vero eos et accusamus...';

export default class BasicAccordionDemo extends Component {
  get tabs() {
    return [
      { header: 'Header I', content: LOREM_1 },
      { header: 'Header II', content: LOREM_2 },
      { header: 'Header III', content: LOREM_3 }
    ];
  }

  <template>
    <div class="pda4">
      <UlxAccordion @model={{this.tabs}} @activeIndex={{0}}>
        <:content as |item|>
          <p class="m-0">{{item.content}}</p>
        </:content>
      </UlxAccordion>
    </div>
  </template>
}
`;
