export default `
import Component from '@glimmer/component';
import { UlxAccordion } from 'ulx-components';

export default class DisabledAccordionDemo extends Component {
  get tabs() {
    return [
      { header: 'Header I', content: '...' },
      { header: 'Header II', content: '...' },
      { header: 'Header III', content: '...' },
      { header: 'Header IV', disabled: true }
    ];
  }

  <template>
    <div class="pda4">
      <UlxAccordion @model={{this.tabs}} @activeIndex={{0}}>
        <:content as |item|>
          {{#if item.content}}
            <p class="m-0">{{item.content}}</p>
          {{/if}}
        </:content>
      </UlxAccordion>
    </div>
  </template>
}
`;
