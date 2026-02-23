export default `
import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class OppositeTimelineDemo extends Component {
  get events() {
    return [
      { status: 'Ordered', date: '15/10/2020 10:30' },
      { status: 'Processing', date: '15/10/2020 14:00' },
      { status: 'Shipped', date: '15/10/2020 16:15' },
      { status: 'Delivered', date: '16/10/2020 10:00' }
    ];
  }

  <template>
    <div class="pda4">
      <div class="w-100p md-w-256px">
        <UlxTimeline @model={{this.events}}>
          <:opposite as |item|>
            {{item.status}}
          </:opposite>

          <:content as |item|>
            <small class="fg-text-tertiary">{{item.date}}</small>
          </:content>
        </UlxTimeline>
      </div>
    </div>
  </template>
}
`;

