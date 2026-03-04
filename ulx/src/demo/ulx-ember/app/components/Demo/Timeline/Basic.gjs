import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class BasicTimelineDemo extends Component {
  get events() {
    return [
      {
        label: 'Submission Start Date',
        value: 'Feb 23, 2026 - 12:00 AM',
        state: 'completed',
      },
      {
        label: 'Submission End Date',
        value: 'Mar 04, 2026 - 12:00 AM',
        state: 'active',
      },
      {
        label: 'Review Start Date',
        value: 'Mar 14, 2026 - 12:00 AM',
        state: 'upcoming',
      },
      {
        label: 'Review End Date',
        value: 'Mar 24, 2026 - 12:00 AM',
        state: 'upcoming',
      },
      {
        label: 'Decision Deadline',
        value: 'Apr 03, 2026 - 12:00 AM',
        state: 'upcoming',
      },
    ];
  }

  <template>
    <div class="">
      <div class="primary ulx-segment border-default w-300">
        <UlxTimeline @model={{this.events}} @customClass="state-tracker">
          <:content as |item|>
            <div class="flex flex-col gap-1">
              <div class="text-sm fg-text-secondary">{{item.label}}</div>
              <div class="h6 medium-font">{{item.value}}</div>
            </div>
          </:content>
        </UlxTimeline>
      </div>
    </div>
  </template>
}
