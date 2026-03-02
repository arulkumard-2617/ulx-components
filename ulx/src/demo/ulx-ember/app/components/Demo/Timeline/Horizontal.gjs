import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class HorizontalTimelineDemo extends Component {
  get years() {
    return ['2020', '2021', '2022', '2023'];
  }

  <template>
    <div class="">
      <div class="flex flex-col gap-6">
        <div>
          <UlxTimeline @model={{this.years}} @layout="horizontal" @align="top">
            <:content as |item|>
              {{item}}
            </:content>
          </UlxTimeline>
        </div>

        <div>
          <UlxTimeline
            @model={{this.years}}
            @layout="horizontal"
            @align="bottom"
          >
            <:content as |item|>
              {{item}}
            </:content>
          </UlxTimeline>
        </div>

        <div>
          <UlxTimeline
            @model={{this.years}}
            @layout="horizontal"
            @align="alternate"
          >
            <:opposite>
              <span aria-hidden="true">&nbsp;</span>
            </:opposite>
            <:content as |item|>
              {{item}}
            </:content>
          </UlxTimeline>
        </div>
      </div>
    </div>
  </template>
}
