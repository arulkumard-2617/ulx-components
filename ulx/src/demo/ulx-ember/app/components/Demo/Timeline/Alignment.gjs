import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class AlignmentTimelineDemo extends Component {
  get events() {
    return [
      { status: 'Ordered' },
      { status: 'Processing' },
      { status: 'Shipped' },
      { status: 'Delivered' },
    ];
  }

  <template>
    <div class="">
      <div class="flex justify-between w-full wrap gap-6">
        <div>
          <UlxTimeline @items={{this.events}}>
            <:content as |item|>
              {{item.status}}
            </:content>
          </UlxTimeline>
        </div>

        <div>
          <UlxTimeline @items={{this.events}} @align="right">
            <:content as |item|>
              {{item.status}}
            </:content>
          </UlxTimeline>
        </div>

        <div class="w-300">
          <UlxTimeline @items={{this.events}} @align="alternate">
            <:content as |item|>
              {{item.status}}
            </:content>
          </UlxTimeline>
        </div>
      </div>
    </div>
  </template>
}
