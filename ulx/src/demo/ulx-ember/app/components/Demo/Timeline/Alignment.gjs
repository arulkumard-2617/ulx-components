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
      <div class="flex wrap gap-6">
        <div class="w-full md-w-256px">
          <UlxTimeline @model={{this.events}}>
            <:content as |item|>
              {{item.status}}
            </:content>
          </UlxTimeline>
        </div>

        <div class="w-full md-w-256px">
          <UlxTimeline @model={{this.events}} @align="right">
            <:content as |item|>
              {{item.status}}
            </:content>
          </UlxTimeline>
        </div>

        <div class="w-full md-w-256px">
          <UlxTimeline @model={{this.events}} @align="alternate">
            <:content as |item|>
              {{item.status}}
            </:content>
          </UlxTimeline>
        </div>
      </div>
    </div>
  </template>
}
