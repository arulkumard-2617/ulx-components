import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn, array } from '@ember/helper';
import eq from 'ember-truth-helpers/helpers/eq';
import {
  UlxTable,
  UlxButton,
  UlxAvatar,
  UlxChip,
  UlxSplitButton,
  UlxSlidePane,
  t
} from 'ulx-components';

const MEMBERS = [
  {
    id: 1,
    name: 'Priya B',
    emailId: 'priya@test.com',
    role: 'not Admin',
    status: 'JOINED',
    invitedOn: 'Mar 01, 2026',
    tags: ['VIP', 'Mentor']
  },
  {
    id: 2,
    name: 'Aaru',
    emailId: 'aaru@zohocorp.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Feb 28, 2026',
    tags: ['Beta']
  },
  {
    id: 3,
    name: 'Sam Wilson',
    emailId: 'sam@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 04, 2026',
    tags: ['Remote', 'Contractor']
  },
  {
    id: 4,
    name: 'Jordan Lee',
    emailId: 'jordan@example.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Mar 02, 2026',
    tags: ['VIP']
  },
  {
    id: 5,
    name: 'Casey Rowe',
    emailId: 'casey@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 04, 2026',
    tags: ['Contractor']
  },
  {
    id: 6,
    name: 'Morgan Blake',
    emailId: 'morgan@example.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Mar 05, 2026',
    tags: ['Beta', 'Remote']
  },
  {
    id: 7,
    name: 'Alex Kim',
    emailId: 'alex@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 06, 2026',
    tags: ['Mentor']
  },
  {
    id: 8,
    name: 'Dana Cruz',
    emailId: 'dana@example.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Mar 07, 2026',
    tags: ['VIP', 'Beta']
  },
  {
    id: 9,
    name: 'Riley Patel',
    emailId: 'riley@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 08, 2026',
    tags: ['Remote']
  },
  {
    id: 10,
    name: 'Taylor Nguyen',
    emailId: 'taylor@example.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Mar 09, 2026',
    tags: ['Contractor', 'Mentor']
  },
  {
    id: 11,
    name: 'Quinn Foster',
    emailId: 'quinn@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 10, 2026',
    tags: ['Beta', 'Contractor']
  },
  {
    id: 12,
    name: 'Skyler Adams',
    emailId: 'skyler@example.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Mar 11, 2026',
    tags: ['VIP', 'Remote']
  }
];

function initials(name) {
  if (!name || typeof name !== 'string') return '?';
  return name
    .trim()
    .split(/\s+/)
    .map((s) => s[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const NameEmailCell = <template>
  <div class="flex items-center gap-2">
    <UlxAvatar
      @type="text"
      @label={{initials @row.name}}
      @shape="circle"
      @size="s-size"
      @variant="orange"
      aria-hidden="true"
    />
    <div class="flex flex-col">
      <span class="semibold-font">{{@row.name}}</span>
      <span class="text-13 fg-text-secondary">{{@row.emailId}}</span>
    </div>
  </div>
</template>;

const StatusCell = <template>
  {{#if (eq @row.status "JOINED")}}
    <span class="fg-text-secondary">{{"Joined"}}</span>
  {{else}}
    <span class="fg-text-secondary">{{"Invited"}}
      {{@row.invitedOn}}</span>
  {{/if}}
</template>;

const TagsCell = <template>
  <div class="flex flex-wrap gap-1">
    {{#each @row.tags as |tag|}}
      <UlxChip @label={{tag}} @size="s-size" />
    {{/each}}
  </div>
</template>;

const DEPARTMENTS = ['Product', 'Operations', 'Finance', 'Sales', 'Support'];
const REGIONS = ['India', 'US', 'EMEA', 'APAC', 'LATAM'];
const TEAMS = ['Core', 'Growth', 'Platform', 'Enablement', 'Security'];
const ACCESS_LEVELS = [
  'Standard',
  'Elevated',
  'Restricted',
  'Auditor',
  'Owner'
];
const LAST_ACTIVE = [
  'Today',
  'Yesterday',
  '2 days ago',
  'This week',
  'Last week'
];

function valueById(values, row) {
  return values[(row.id - 1) % values.length];
}

const DepartmentCell = <template>{{valueById DEPARTMENTS @row}}</template>;
const RegionCell = <template>{{valueById REGIONS @row}}</template>;
const TeamCell = <template>{{valueById TEAMS @row}}</template>;
const AccessLevelCell = <template>{{valueById ACCESS_LEVELS @row}}</template>;
const LastActiveCell = <template>{{valueById LAST_ACTIVE @row}}</template>;

const columns = [
  {
    field: 'name',
    header: 'Name & Email',
    sortable: true,
    manageable: false,
    body: NameEmailCell
  },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'tags', header: 'Tags', body: TagsCell },
  { field: 'department', header: 'Department', body: DepartmentCell },
  { field: 'region', header: 'Region', body: RegionCell },
  { field: 'team', header: 'Team', body: TeamCell },
  { field: 'accessLevel', header: 'Access Level', body: AccessLevelCell },
  { field: 'lastActive', header: 'Last Active', body: LastActiveCell },
  { field: 'status', header: 'Status', body: StatusCell }
];

const sortOptions = [
  { key: 'name', lbl: 'Name' },
  { key: 'role', lbl: 'Role' }
];

const filterGroups = [
  {
    key: 'status',
    heading: 'Status',
    options: [
      { value: 'INVITED', label: 'Invited' },
      { value: 'JOINED', label: 'Joined' }
    ]
  },
  {
    key: 'role',
    heading: 'Role',
    options: [
      { value: 'Portal Admin', label: 'Portal Admin' },
      { value: 'not Admin', label: 'Not Admin' }
    ]
  },
  {
    key: 'tags',
    heading: 'Tags',
    options: [
      { value: 'VIP', label: 'VIP' },
      { value: 'Beta', label: 'Beta' },
      { value: 'Remote', label: 'Remote' },
      { value: 'Contractor', label: 'Contractor' },
      { value: 'Mentor', label: 'Mentor' }
    ]
  }
];

export default class DemoTableBsTableView extends Component {
  members = MEMBERS;
  columns = columns;
  sortOptions = sortOptions;
  filterGroups = filterGroups;

  @tracked sortBy = '';
  @tracked invitePaneOpen = false;

  @action
  getRowActionModel(member) {
    return [
      {
        label: 'Edit Role',
        icon: 'bs-icons1 session-settings-icon',
        command: () =>
          this.onRowActionSelect(member, {
            value: 'edit-role',
            label: 'Edit Role'
          })
      },
      {
        label: 'Resend Invitation',
        icon: 'bs-icons1 comment-icon',
        command: () =>
          this.onRowActionSelect(member, {
            value: 'resend',
            label: 'Resend Invitation'
          })
      }
    ];
  }

  @action
  handleSortByChange(value) {
    this.sortBy = value;
  }

  @action
  invitePortalMembers() {
    this.invitePaneOpen = true;
  }

  @action
  closeInvitePane() {
    this.invitePaneOpen = false;
  }

  @action
  sendInvite() {
    this.invitePaneOpen = false;
  }

  @action
  deleteMember(member) {
    window.alert?.(`Delete ${member.name} (demo).`);
  }

  @action
  onRowActionSelect(member, option) {
    if (option?.value === 'edit-role') {
      window.alert?.(`Edit role for ${member.name} (demo).`);
    } else if (option?.value === 'resend') {
      window.alert?.(`Resend invitation to ${member.name} (demo).`);
    }
  }

  <template>
    <UlxTable
      @value={{this.members}}
      @columns={{this.columns}}
      @dataKey="id"
      @moduleName="portal-members"
      @showGlobalFilter={{true}}
      @globalFilterPlaceholder={{t "lbl.search"}}
      @sortOptions={{this.sortOptions}}
      @sortBy={{this.sortBy}}
      @onSortByChange={{this.handleSortByChange}}
      @filterGroups={{this.filterGroups}}
      @showManageColumns={{true}}
      @scrollable={{true}}
      @scrollHeight="400px"
      @paginator={{true}}
      @rowsPerPageOptions={{array 10 25 50 100}}
    >
      <:postRightMenu>
        <UlxButton
          @variant="primary"
          @icon="add-bounded-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s14"
          @label="Invite Portal Members"
          {{on "click" this.invitePortalMembers}}
        />
      </:postRightMenu>
      <:optionCell as |member|>
        <div class="flex justify-end">
          <UlxSplitButton
            @label="View previllages"
            @variant="basic"
            @outlined={{true}}
            @items={{this.getRowActionModel member}}
            @onClick={{fn this.deleteMember member}}
            aria-label="Actions for {{member.name}}"
          />
        </div>
      </:optionCell>
    </UlxTable>

    <UlxSlidePane
      @visible={{this.invitePaneOpen}}
      @title="Invite Portal Members"
      @position="right"
      @size="m-size"
      @doneButtonLabel="Send Invite"
      @cancelButtonLabel="Cancel"
      @onHide={{this.closeInvitePane}}
      @onDone={{this.sendInvite}}
      @onCancel={{this.closeInvitePane}}
    >
      <:body>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <span class="semibold-font">Email Address</span>
            <span class="text-13 fg-text-secondary">Enter the email address of
              the person you want to invite.</span>
            <input
              type="email"
              class="ulx-inputtext"
              placeholder="e.g. member@example.com"
              aria-label="Email address"
            />
          </div>
          <div class="flex flex-col gap-1">
            <span class="semibold-font">Role</span>
            <span class="text-13 fg-text-secondary">Select the role for the new
              member.</span>
            <select class="ulx-dropdown" aria-label="Role">
              <option value="">Select a role</option>
              <option value="portal-admin">Portal Admin</option>
              <option value="member">Member</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <span class="semibold-font">Personal Message (optional)</span>
            <textarea
              class="ulx-inputtextarea"
              rows="4"
              placeholder="Add a personal note to the invitation email..."
              aria-label="Personal message"
            ></textarea>
          </div>
        </div>
      </:body>
    </UlxSlidePane>
  </template>
}
