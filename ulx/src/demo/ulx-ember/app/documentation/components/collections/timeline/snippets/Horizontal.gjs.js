export default `
import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class HorizontalTimelineDemo extends Component {
  get years() {
    return ['2020', '2021', '2022', '2023'];
  }
  get events() {
    return [
      { label: '2020', state: 'completed' },
      { label: '2021', state: 'active' },
      { label: '2022', state: 'upcoming' },
      { label: '2023', state: 'upcoming' },
    ];
  }

  <template>
    <div class="">
      <div class="flex flex-col gap-15">
        <div>
          <UlxTimeline @model={{this.events}} @layout="horizontal" @align="top" @customClass="state-tracker">
            <:content as |item|>
              <span class="medium-font">
                {{item.label}}
              </span>
            </:content>
          </UlxTimeline>
        </div>

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

`;
