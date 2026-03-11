import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import eq from 'ember-truth-helpers/helpers/eq';
import {
  UlxTable,
  UlxButton,
  UlxAvatar,
  UlxSplitButton,
  t,
} from 'ulx-components';

const MEMBERS = [
  {
    id: 1,
    name: 'Priya B',
    emailId: 'priya@test.com',
    role: 'not Admin',
    status: 'JOINED',
    invitedOn: 'Mar 01, 2026',
  },
  {
    id: 2,
    name: 'Aaru',
    emailId: 'aaru@zohocorp.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Feb 28, 2026',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    emailId: 'sam@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 04, 2026',
  },
  {
    id: 4,
    name: 'Jordan Lee',
    emailId: 'jordan@example.com',
    role: 'Portal Admin',
    status: 'JOINED',
    invitedOn: 'Mar 02, 2026',
  },
  {
    id: 5,
    name: 'Casey Rowe',
    emailId: 'casey@example.com',
    role: 'not Admin',
    status: 'INVITED',
    invitedOn: 'Mar 04, 2026',
  },
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
      <span class="font-semibold">{{@row.name}}</span>
      <span class="text-13 fg-text-secondary">{{@row.emailId}}</span>
    </div>
  </div>
</template>;

const StatusCell = <template>
  {{#if (eq @row.status "JOINED")}}
    <span class="fg-text-secondary">{{t "lbl.joined"}}</span>
  {{else}}
    <span class="fg-text-secondary">{{t "lbl.invited"}}
      {{@row.invitedOn}}</span>
  {{/if}}
</template>;

const columns = [
  {
    field: 'name',
    header: 'Name & Email',
    sortable: true,
    manageable: false,
    body: NameEmailCell,
  },
  { field: 'role', header: 'Role' },
  { field: 'status', header: 'Status', body: StatusCell },
];

const filterGroups = [
  {
    key: 'status',
    heading: 'Status',
    options: [
      { value: 'INVITED', label: 'Invited' },
      { value: 'JOINED', label: 'Joined' },
    ],
  },
  {
    key: 'role',
    heading: 'Role',
    options: [
      { value: 'Portal Admin', label: 'Portal Admin' },
      { value: 'not Admin', label: 'Not Admin' },
    ],
  },
];

export default class DemoTableBsTableView extends Component {
  members = MEMBERS;
  columns = columns;
  filterGroups = filterGroups;

  @action
  getRowActionModel(member) {
    return [
      {
        label: 'Edit Role',
        icon: 'bs-icons1 session-settings-icon',
        command: () =>
          this.onRowActionSelect(member, {
            value: 'edit-role',
            label: 'Edit Role',
          }),
      },
      {
        label: 'Resend Invitation',
        icon: 'bs-icons1 comment-icon',
        command: () =>
          this.onRowActionSelect(member, {
            value: 'resend',
            label: 'Resend Invitation',
          }),
      },
    ];
  }

  @action
  invitePortalMembers() {
    window.alert?.('Invite Portal Members clicked (demo).');
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
    <p class="text-sm fg-text-secondary mb-2">
      Portal-members style table: global search, toolbar sort dropdown, filter
      slide pane (Status / Role), manage columns (some columns use
      <code>manageable: false</code>), and primary action in
      <code>&lt;:postRightMenu&gt;</code>.
    </p>
    <UlxTable
      @value={{this.members}}
      @columns={{this.columns}}
      @dataKey="id"
      @moduleName="portal-members"
      @showGlobalFilter={{true}}
      @globalFilterPlaceholder={{t "lbl.search"}}
      @filterGroups={{this.filterGroups}}
      @showManageColumns={{true}}
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
        <UlxSplitButton
          @label="Delete"
          @variant="basic"
          @outlined={{true}}
          @model={{this.getRowActionModel member}}
          @onClick={{fn this.deleteMember member}}
          aria-label="Actions for {{member.name}}"
        />
      </:optionCell>
    </UlxTable>
  </template>
}
