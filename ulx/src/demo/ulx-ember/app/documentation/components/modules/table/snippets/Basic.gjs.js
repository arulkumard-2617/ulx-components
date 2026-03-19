export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxTable,
  UlxAvatar,
  UlxButton,
  UlxSplitButton,
  UlxProgressBar,
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
    status: 'INVITED',
  },
  {
    id: 2,
    name: 'Abinesh A',
    email: 'abinesh.a@zohocorp.com',
    initials: 'AB',
    avatarVariant: 'orange',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED',
  },
  {
    id: 3,
    name: 'Akila.K',
    email: 'akila.k@zohocorp.com',
    initials: 'AK',
    avatarVariant: 'green',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED',
  },
  {
    id: 4,
    name: 'Arun.Bt',
    email: 'arun.bt@zohocorp.com',
    initials: 'AR',
    avatarVariant: 'red',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED',
  },
  {
    id: 5,
    name: 'Ashwin Kumar V',
    email: 'ashwin.kumar@zohocorp.com',
    initials: 'AK',
    avatarVariant: 'orange',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED',
  },
  {
    id: 6,
    name: 'Bhuvanesh D',
    email: 'bhuvanesh.d@zohocorp.com',
    initials: 'BH',
    avatarVariant: 'purple',
    invitedDaysAgo: 17,
    profileCompletion: 8,
    status: 'INVITED',
  },
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
    body: NameEmailCell,
  },
  { field: 'status', header: 'Status', sortable: false, body: StatusCell },
  {
    field: 'profileCompletion',
    header: 'Profile Status',
    sortable: false,
    body: ProfileStatusCell,
  },
];

const addSpeakerMenuItems = [
  { label: 'Import from CSV' },
  { label: 'Add manually' },
];

const rowActionItems = [
  { label: 'View', icon: 'view-icon' },
  { label: 'Featured', icon: 'ls-star-filled-icon' },
  { label: 'Delete', icon: 'delete-icon', linkClass: 'fg-red' },
  { label: 'View Sent Emails', icon: 'email-icon-01' },
];

const filterGroups = [
  {
    key: 'status',
    heading: 'Status',
    options: [{ value: 'INVITED', label: 'Invited' }],
  },
];

const sortOptions = [{ key: 'name', lbl: 'Name' }];

export default class DemoTableBasic extends Component {
  speakers = SPEAKERS;
  columns = columns;
  addSpeakerMenuItems = addSpeakerMenuItems;
  filterGroups = filterGroups;
  rowActionItems = rowActionItems;
  sortOptions = sortOptions;

  @tracked sortBy = 'name:asc';

  @action
  handleSortByChange(value) {
    this.sortBy = value;
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
    >
      <:postRightMenu>
        <div class="flex items-center gap-2">
          <UlxButton @variant="secondary" @size="m-size" @label="Export" />
          <UlxSplitButton
            @label="Add Speaker"
            @variant="primary"
            @size="m-size"
            @model={{this.addSpeakerMenuItems}}
          />
        </div>
      </:postRightMenu>

      <:optionCell as |row|>
        <div class="flex items-center justify-end">
          <UlxSplitButton
            @label="Edit"
            @variant="basic"
            @outlined={{true}}
            @size="s-size"
            @model={{this.rowActionItems}}
            aria-label="Actions for {{row.name}}"
          />
        </div>
      </:optionCell>
    </UlxTable>
  </template>
}

`;
