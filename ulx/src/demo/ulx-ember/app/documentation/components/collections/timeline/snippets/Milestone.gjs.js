export default `
import Component from '@glimmer/component';
import { UlxTimeline } from 'ulx-components';

export default class MilestoneTimelineDemo extends Component {
  get events() {
    return [
      {
        label: 'Submission Start Date',
        value: 'Feb 23, 2026 - 12:00 AM',
        state: 'active',
      },
      {
        label: 'Submission End Date',
        value: 'Mar 04, 2026 - 12:00 AM',
        state: 'upcoming',
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
    <UlxTimeline @items={{this.events}} @customClass="milestone-tracker">
      <:content as |item|>
        <div class="flex flex-col gap-1">
          <div class="text-sm fg-text-secondary">{{item.label}}</div>
          <div class="medium-font">{{item.value}}</div>
        </div>
      </:content>
    </UlxTimeline>
  </template>
}

`;
