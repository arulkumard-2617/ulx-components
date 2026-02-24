export default `
import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class BasicTimelineDemo extends Component {
  get events() {
    return [
      { status: 'Ordered' },
      { status: 'Processing' },
      { status: 'Shipped' },
      { status: 'Delivered' },
    ];
  }

  <template>
    <div class="pda4">
      <div class="w-full md-w-256px">
        <UlxTimeline @model={{this.events}}>
          <:content as |item|>
            {{item.status}}
          </:content>
        </UlxTimeline>
      </div>
    </div>
  </template>
}

`;
