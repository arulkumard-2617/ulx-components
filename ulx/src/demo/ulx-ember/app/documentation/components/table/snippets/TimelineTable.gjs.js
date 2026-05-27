export default `
import Component from '@glimmer/component';
import { UlxTable, UlxTag, UlxAvatar } from 'ulx-components';

const ACTIVITY_ROWS = [
  {
    id: '1',
    state: 'completed',
    statusLabel: 'Request Added',
    statusVariant: 'warning',
    name: 'Jose Remilton',
    email: 'joseremilton@gmail.com',
    initials: 'JR',
    avatarVariant: 'teal',
    date: '17 July, 2025',
    time: '04:30 PM'
  },
  {
    id: '2',
    state: 'completed',
    statusLabel: 'Approved',
    statusVariant: 'success',
    name: 'Emiliajohnson',
    email: 'emiliajohnson@gmail.com',
    initials: 'EJ',
    avatarVariant: 'green',
    date: '17 July, 2025',
    time: '04:30 PM'
  },
  {
    id: '3',
    state: 'upcoming',
    statusLabel: 'Published',
    statusVariant: 'info',
    name: 'Alex Morgan',
    email: 'alex.morgan@gmail.com',
    initials: 'AM',
    avatarVariant: 'blue',
    date: '18 July, 2025',
    time: '10:00 AM'
  }
];

class TimelineStepCell extends Component {
  <template>
    <div class="timeline-table-step" data-state={{@row.state}}>
      <div class="timeline-table-separator">
        <div class="timeline-table-marker" aria-hidden="true"></div>
      </div>
      <div class="timeline-table-step-content">
        <UlxTag
          @value={{@row.statusLabel}}
          @variant={{@row.statusVariant}}
          @size="s-size"
          @invert={{true}}
        />
      </div>
    </div>
  </template>
}

const ManagedByCell = <template>
  <div class="flex items-center gap-3">
    <UlxAvatar
      @type="text"
      @label={{@row.initials}}
      @shape="circle"
      @size="s-size"
      @variant={{@row.avatarVariant}}
      aria-hidden="true"
    />
    <div class="flex flex-col gap-1">
      <span class="semibold-font">{{@row.name}}</span>
      <span class="text-13 fg-text-secondary">{{@row.email}}</span>
    </div>
  </div>
</template>;

const DateTimeCell = <template>
  <div class="flex flex-col gap-1">
    <span class="semibold-font">{{@row.date}}</span>
    <span class="text-13 fg-text-secondary">{{@row.time}}</span>
  </div>
</template>;

const columns = [
  {
    field: 'statusLabel',
    header: 'Timeline',
    className: 'timeline-table-cell',
    style: 'min-width: 240px',
    body: TimelineStepCell
  },
  {
    field: 'name',
    header: 'Managed By',
    style: 'min-width: 280px',
    body: ManagedByCell
  },
  {
    field: 'date',
    header: 'Date & Time',
    style: 'min-width: 160px',
    body: DateTimeCell
  }
];

export default class DemoTableTimelineTable extends Component {
  activityRows = ACTIVITY_ROWS;
  columns = columns;

  <template>
    <div class="flex flex-col gap-2">
      <p class="text-13 fg-text-secondary">
        Activity log with a vertical step spine in the first column. Use
        <code>@customClass="timeline-table"</code>, mark the timeline column with
        <code>className: 'timeline-table-cell'</code>, and render
        <code>timeline-table-step</code> markup with
        <code>data-state</code>
        (completed, upcoming) and status chips. The spine is drawn with
        <code>timeline-table-separator::before</code>; row dividers apply to
        non-timeline columns only.
      </p>
      <UlxTable
        @value={{this.activityRows}}
        @columns={{this.columns}}
        @dataKey="id"
        @customClass="timeline-table"
      />
    </div>
  </template>
}

`;
