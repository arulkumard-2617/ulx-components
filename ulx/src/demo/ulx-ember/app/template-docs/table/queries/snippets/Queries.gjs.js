export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxBadge, UlxTable, UlxTag } from 'ulx-components';

const YET_TO_RESPOND_TRACK_STYLE =
  '--lt-track-bg-color: #FFECAD; --track-bg-color: #D48806';

const RESPONDED_TRACK_STYLE =
  '--lt-track-bg-color: #BBF7D0; --track-bg-color: #15803D';

const QUERIES = [
  {
    id: 'query-1',
    firstName: 'Dexter Morgan',
    email: 'dexter@zylker.com',
    message:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    raisedDay: 'Wed',
    raisedDate: 'Feb 22, 2024',
    status: 'Yet to respond',
    statusVariant: 'lt-track-label',
    statusStyle: YET_TO_RESPOND_TRACK_STYLE
  },
  {
    id: 'query-2',
    firstName: 'Debra Morgan',
    email: 'debra.morgan@zylker.com',
    message:
      'Exercitation veniam consequat sunt nostrud amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    raisedDay: 'Tue',
    raisedDate: 'Feb 21, 2024',
    status: 'Responded',
    statusVariant: 'lt-track-label',
    statusStyle: RESPONDED_TRACK_STYLE
  },
  {
    id: 'query-3',
    firstName: 'Angel Batista',
    email: 'angel.batista@zylker.com',
    message:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    raisedDay: 'Mon',
    raisedDate: 'Feb 20, 2024',
    status: 'Yet to respond',
    statusVariant: 'lt-track-label',
    statusStyle: YET_TO_RESPOND_TRACK_STYLE
  },
  {
    id: 'query-4',
    firstName: 'Maria LaGuerta',
    email: 'maria.laguerta@zylker.com',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    raisedDay: 'Sun',
    raisedDate: 'Feb 19, 2024',
    status: 'Responded',
    statusVariant: 'lt-track-label',
    statusStyle: RESPONDED_TRACK_STYLE
  },
  {
    id: 'query-5',
    firstName: 'James Doakes',
    email: 'james.doakes@zylker.com',
    message:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    raisedDay: 'Sat',
    raisedDate: 'Feb 18, 2024',
    status: 'Yet to respond',
    statusVariant: 'lt-track-label',
    statusStyle: YET_TO_RESPOND_TRACK_STYLE
  }
];

const FirstNameCell = <template>
  <span class="bold-font">{{@row.firstName}}</span>
</template>;

const EmailCell = <template>
  <span class="bold-font">{{@row.email}}</span>
</template>;

const MessageCell = <template>
  <span>{{@row.message}}</span>
</template>;

const RaisedOnCell = <template>
  <div class="flex items-center gap-2">
    <span>{{@row.raisedDay}}</span>
    <UlxBadge @type="dot" @size="xxs-size" @variant="light-grey" />
    <span>{{@row.raisedDate}}</span>
  </div>
</template>;

const StatusCell = <template>
  <UlxTag
    @value={{@row.status}}
    @variant={{@row.statusVariant}}
    @type="pill"
    @size="xs-size"
    @customClass={{@row.statusCustomClass}}
    style={{@row.statusStyle}}
  />
</template>;

const columns = [
  { selectionMode: 'multiple', style: 'min-width: 48px' },
  {
    field: 'firstName',
    header: 'First name',
    sortable: true,
    body: FirstNameCell,
    style: 'min-width: 160px'
  },
  {
    field: 'email',
    header: 'Email',
    sortable: true,
    body: EmailCell,
    style: 'min-width: 200px'
  },
  {
    field: 'message',
    header: 'Message',
    sortable: false,
    body: MessageCell,
    style: 'min-width: 320px'
  },
  {
    field: 'raisedDate',
    header: 'Raised on',
    sortable: true,
    body: RaisedOnCell,
    style: 'min-width: 180px'
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    body: StatusCell,
    style: 'min-width: 160px'
  }
];

export default class QueriesTableTemplate extends Component {
  queries = QUERIES;
  columns = columns;

  @tracked selection = [];

  @action
  onSelectionChange(selection) {
    this.selection = selection;
  }

  <template>
    <UlxTable
      @value={{this.queries}}
      @columns={{this.columns}}
      @dataKey="id"
      @selectionMode="checkbox"
      @selection={{this.selection}}
      @onSelectionChange={{this.onSelectionChange}}
      @sortMode="single"
      @scrollable={{true}}
    />
  </template>
}

`;
