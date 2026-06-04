export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const ATTENDEES = [
  { id: 1, name: 'Alex Rivera', email: 'alex@example.com', eventsAttended: 12 },
  { id: 2, name: 'Jordan Lee', email: 'jordan@example.com', eventsAttended: 6 },
  { id: 3, name: 'Sam Patel', email: 'sam@example.com', eventsAttended: 9 },
  { id: 4, name: 'Taylor Kim', email: 'taylor@example.com', eventsAttended: 4 },
  { id: 5, name: 'Morgan Chen', email: 'morgan@example.com', eventsAttended: 15 },
  { id: 6, name: 'Casey Brooks', email: 'casey@example.com', eventsAttended: 7 },
  { id: 7, name: 'Riley Nguyen', email: 'riley@example.com', eventsAttended: 11 },
  { id: 8, name: 'Jamie Ortiz', email: 'jamie@example.com', eventsAttended: 3 },
];

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'email', header: 'Email' },
  { field: 'eventsAttended', header: 'Events attended', sortable: true },
];

const filterGroups = [
  {
    key: 'attendees',
    heading: 'Attendees',
    groupedRadioItems: {
      currentSelected: 'last5',
      items: [
        {
          heading: 'All Attendees',
          values: [{ key: 'all', label: 'All Attendees' }],
        },
        {
          heading: 'Attendees From',
          values: [
            { key: 'last3', label: 'Last 3 events' },
            { key: 'last5', label: 'Last 5 events' },
            { key: 'last10', label: 'Last 10 events' },
          ],
        },
        {
          heading: 'Attendees who attended',
          values: [
            { key: '5plus', label: '5+ events' },
            { key: '10plus', label: '10+ events' },
            { key: '15plus', label: '15+ events' },
          ],
        },
      ],
    },
  },
];

export default class DemoTableFilterPaneGroupedRadio extends Component {
  attendees = ATTENDEES;
  columns = columns;
  filterGroups = filterGroups;

  <template>
    <UlxTable
      @value={{this.attendees}}
      @columns={{this.columns}}
      @dataKey="id"
      @filterGroups={{this.filterGroups}}
      @paginator={{true}}
      @rows={{5}}
      @showGridlines={{true}}
    />
  </template>
}

`;
