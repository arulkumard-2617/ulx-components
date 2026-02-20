export default `
import Component from '@glimmer/component';
import { UlxAccordion, UlxAvatar, UlxBadge } from 'ulx-components';

export default class TemplateAccordionDemo extends Component {
  get tabs() {
    return [
      { header: 'Amy Elsner', content: '...', badge: '3', image: '...' },
      { header: 'Onyama Limba', content: '...', badge: '4', image: '...' },
      { header: 'Ioni Bowcher', content: '...', badge: '2', image: '...' }
    ];
  }

  <template>
    <div class="pda4">
      <UlxAccordion @model={{this.tabs}} @activeIndex={{0}}>
        <:content as |item|>
          <div class="fxb fvc gp2 fhc">
            <UlxAvatar @image={{item.image}} />
            <span class="bold-font white-space-nowrap">{{item.header}}</span>
            <UlxBadge @value={{item.badge}} class="ml-auto" />
          </div>
          <p class="m-0 mgt2">{{item.content}}</p>
        </:content>
      </UlxAccordion>
    </div>
  </template>
}
`;
