import Component from '@glimmer/component';
import { UlxTimeline, UlxButton, UlxIcon } from 'ulx-components';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!';

export default class TemplateTimelineDemo extends Component {
  get events() {
    return [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'box-icon' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'gear-icon' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'truck-icon' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'check-icon' },
    ];
  }

  <template>
    <div class="">
      <UlxTimeline @model={{this.events}} @align="alternate">
        <:opposite as |item|>
          <small class="fg-text-tertiary">{{item.date}}</small>
        </:opposite>

        <:marker as |item|>
          <span class="ifxb center-all">
            <UlxIcon @type="font" @iconName={{item.icon}} />
          </span>
        </:marker>

        <:content as |item|>
          <div class="card">
            <div class="bold-font mb-2">{{item.status}}</div>
            <p class="m-0 mb-4">{{LOREM}}</p>
            <UlxButton @label="Read more" @variant="primary" />
          </div>
        </:content>
      </UlxTimeline>
    </div>
  </template>
}
