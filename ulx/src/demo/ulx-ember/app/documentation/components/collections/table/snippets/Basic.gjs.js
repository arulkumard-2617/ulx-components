export default `
/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import {
  UlxTable,
  UlxAvatar,
  UlxButton,
  UlxSplitButton,
  UlxActionMenu,
  UlxProgressBar
} from 'ulx-components';

const SPEAKERS = [
  {
    id: 1,
    name: 'Aaron Victor',
    email: 'aarokia.vimal@zohocorp.com',
    initials: 'AV',
    avatarVariant: 'teal',
    invitedDaysAgo: 17,
    profileCompletion: 42,
    status: 'INVITED'
  },
  {
    id: 2,
    name: 'Abinesh A',
    email: 'abinesh.a@zohocorp.com',
    initials: 'AB',
    avatarVariant: 'orange',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED'
  },
  {
    id: 3,
    name: 'Akila K',
    email: 'akila.k@zohocorp.com',
    initials: 'AK',
    avatarVariant: 'green',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED'
  },
  {
    id: 4,
    name: 'Arun BT',
    email: 'arun.bt@zohocorp.com',
    initials: 'AR',
    avatarVariant: 'red',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED'
  },
  {
    id: 5,
    name: 'Ashwin Kumar V',
    email: 'ashwin.kumar@zohocorp.com',
    initials: 'AK',
    avatarVariant: 'orange',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED'
  },
  {
    id: 6,
    name: 'Bhuvanesh D',
    email: 'bhuvanesh.d@zohocorp.com',
    initials: 'BH',
    avatarVariant: 'purple',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED'
  },
  {
    id: 7,
    name: 'Chandra Sekhar',
    email: 'chandra.sekhar@zohocorp.com',
    initials: 'CS',
    avatarVariant: 'blue',
    invitedDaysAgo: 12,
    profileCompletion: 55,
    status: 'INVITED'
  },
  {
    id: 8,
    name: 'Deepika R',
    email: 'deepika.r@zohocorp.com',
    initials: 'DR',
    avatarVariant: 'pink',
    invitedDaysAgo: 10,
    profileCompletion: 70,
    status: 'INVITED'
  },
  {
    id: 9,
    name: 'Ezhil Arasan',
    email: 'ezhil.arasan@zohocorp.com',
    initials: 'EA',
    avatarVariant: 'teal',
    invitedDaysAgo: 9,
    profileCompletion: 30,
    status: 'INVITED'
  },
  {
    id: 10,
    name: 'Fathima Nisha',
    email: 'fathima.nisha@zohocorp.com',
    initials: 'FN',
    avatarVariant: 'green',
    invitedDaysAgo: 8,
    profileCompletion: 85,
    status: 'INVITED'
  },
  {
    id: 11,
    name: 'Gowtham S',
    email: 'gowtham.s@zohocorp.com',
    initials: 'GS',
    avatarVariant: 'red',
    invitedDaysAgo: 7,
    profileCompletion: 60,
    status: 'INVITED'
  },
  {
    id: 12,
    name: 'Harini M',
    email: 'harini.m@zohocorp.com',
    initials: 'HM',
    avatarVariant: 'orange',
    invitedDaysAgo: 6,
    profileCompletion: 20,
    status: 'INVITED'
  },
  {
    id: 13,
    name: 'Imran Khan',
    email: 'imran.khan@zohocorp.com',
    initials: 'IK',
    avatarVariant: 'purple',
    invitedDaysAgo: 5,
    profileCompletion: 45,
    status: 'INVITED'
  },
  {
    id: 14,
    name: 'Janani P',
    email: 'janani.p@zohocorp.com',
    initials: 'JP',
    avatarVariant: 'blue',
    invitedDaysAgo: 4,
    profileCompletion: 90,
    status: 'INVITED'
  },
  {
    id: 15,
    name: 'Karthik R',
    email: 'karthik.r@zohocorp.com',
    initials: 'KR',
    avatarVariant: 'teal',
    invitedDaysAgo: 3,
    profileCompletion: 15,
    status: 'INVITED'
  },
  {
    id: 16,
    name: 'Lavanya S',
    email: 'lavanya.s@zohocorp.com',
    initials: 'LS',
    avatarVariant: 'pink',
    invitedDaysAgo: 3,
    profileCompletion: 75,
    status: 'INVITED'
  },
  {
    id: 17,
    name: 'Manikandan T',
    email: 'manikandan.t@zohocorp.com',
    initials: 'MT',
    avatarVariant: 'green',
    invitedDaysAgo: 2,
    profileCompletion: 50,
    status: 'INVITED'
  },
  {
    id: 18,
    name: 'Nithya Devi',
    email: 'nithya.devi@zohocorp.com',
    initials: 'ND',
    avatarVariant: 'red',
    invitedDaysAgo: 2,
    profileCompletion: 35,
    status: 'INVITED'
  },
  {
    id: 19,
    name: 'Pradeep Kumar',
    email: 'pradeep.kumar@zohocorp.com',
    initials: 'PK',
    avatarVariant: 'orange',
    invitedDaysAgo: 1,
    profileCompletion: 65,
    status: 'INVITED'
  },
  {
    id: 20,
    name: 'Ragavi B',
    email: 'ragavi.b@zohocorp.com',
    initials: 'RB',
    avatarVariant: 'purple',
    invitedDaysAgo: 1,
    profileCompletion: 10,
    status: 'INVITED'
  }
];

const NameEmailCell = <template>
  <div class="flex items-center gap-3">
    <UlxAvatar
      @type="text"
      @label={{@row.initials}}
      @shape="circle"
      @size="s-size"
      @variant={{@row.avatarVariant}}
      aria-hidden="true"
    />
    <div class="flex flex-col">
      <span class="text-14 bold-font">{{@row.name}}</span>
      <span class="text-13 fg-secondary">{{@row.email}}</span>
    </div>
  </div>
</template>;

const StatusCell = <template>
  <div class="flex flex-col items-start">
    <span class="text-13">
      Invited -
      {{@row.invitedDaysAgo}}
      days ago
    </span>
    <UlxButton
      @variant="primary"
      @size="compact"
      @text={{true}}
      @label="Reinvite"
    />
  </div>
</template>;

const ProfileStatusCell = <template>
  <div class="flex flex-col gap-1 min-w-200">
    <div class="flex gap-2 justify-between">
      <span class="text-13 fg-secondary">Profile</span>
      <span class="text-13">{{@row.profileCompletion}}%</span>
    </div>
    <div class="flex items-center gap-3">
      <UlxProgressBar
        @value={{@row.profileCompletion}}
        @size="h-8"
        @showValue={{false}}
      />
    </div>
  </div>
</template>;

const columns = [
  {
    field: 'name',
    header: 'Name & Email',
    sortable: true,
    body: NameEmailCell
  },
  { field: 'status', header: 'Status', sortable: false, body: StatusCell },
  {
    field: 'profileCompletion',
    header: 'Profile Status',
    sortable: false,
    body: ProfileStatusCell
  }
];

const addSpeakerMenuItems = [
  { label: 'Import from CSV' },
  { label: 'Add manually' }
];

const rowActionItems = [
  { label: 'View', icon: 'view-icon' },
  { label: 'Featured', icon: 'ls-star-filled-icon' },
  { label: 'Delete', icon: 'delete-icon', linkClass: 'fg-red' },
  { label: 'View Sent Emails', icon: 'email-icon-01' }
];

const filterGroups = [
  {
    key: 'status',
    heading: 'Status',
    options: [{ value: 'INVITED', label: 'Invited' }]
  }
];

const sortOptions = [{ key: 'name', lbl: 'Name' }];

export default class DemoTableBasic extends Component {
  speakers = SPEAKERS;
  columns = columns;
  addSpeakerMenuItems = addSpeakerMenuItems;
  filterGroups = filterGroups;
  rowActionItems = rowActionItems;
  sortOptions = sortOptions;
  rowsPerPageOptions = [5, 10, 20];

  @tracked sortBy = 'name:asc';

  @action
  handleSortByChange(value) {
    this.sortBy = value;
  }

  @action
  handleRowAction(row, item) {
    console.log('Row action:', row?.name, item?.label);
  }

  <template>
    <UlxTable
      @value={{this.speakers}}
      @columns={{this.columns}}
      @dataKey="id"
      @size="m-size"
      @showGlobalFilter={{true}}
      @globalFilterPlaceholder="Search Speaker"
      @filterGroups={{this.filterGroups}}
      @showManageColumns={{true}}
      @moduleName="speakers-basic"
      @sortOptions={{this.sortOptions}}
      @sortBy={{this.sortBy}}
      @onSortByChange={{this.handleSortByChange}}
      @paginator={{true}}
      @rows={{10}}
      @rowsPerPageOptions={{this.rowsPerPageOptions}}
      @paginatorPosition="bottom"
    >
      <:postRightMenu>
        <div class="flex items-center gap-2">
          <UlxButton @variant="secondary" @size="m-size" @label="Export" />
          <UlxSplitButton
            @label="Add Speaker"
            @variant="primary"
            @size="m-size"
            @items={{this.addSpeakerMenuItems}}
          />
        </div>
      </:postRightMenu>

      <:optionCell as |row|>
        <div class="flex items-center justify-end">
          <UlxActionMenu
            @icon="bs-icons1 session-settings-icon"
            @triggerAriaLabel="Actions for {{row.name}}"
            @items={{this.rowActionItems}}
            @variant="basic"
            @outlined={{true}}
            @text={{true}}
            @size="s-size"
            @align="end"
            @onItemSelect={{fn this.handleRowAction row}}
          />
        </div>
      </:optionCell>
    </UlxTable>
  </template>
}

`;
