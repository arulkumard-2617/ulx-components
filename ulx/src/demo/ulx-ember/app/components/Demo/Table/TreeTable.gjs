import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import eq from 'ember-truth-helpers/helpers/eq';
import and from 'ember-truth-helpers/helpers/and';
import {
  UlxTable,
  UlxTag,
  UlxChip,
  UlxIconButton,
  UlxActionMenu
} from 'ulx-components';

const ATTENDEES = [
  {
    id: 'a1',
    name: 'John Wick',
    email: 'johnwick@zylker.com',
    sessions: [
      {
        id: 's1',
        title: 'The Business of Creativity',
        datetime: 'Jan 04, 2025 - 10:00 AM (IST)',
        track: 'Track 1',
        amount: 20,
        status: 'Paid'
      },
      {
        id: 's2',
        title: 'Design Systems at Scale',
        datetime: 'Jan 04, 2025 - 02:00 PM (IST)',
        track: 'Track 2',
        amount: 20,
        status: 'Paid'
      }
    ]
  },
  {
    id: 'a2',
    name: 'Jerome Bell',
    email: 'jerome@zylker.com',
    sessions: [
      {
        id: 's3',
        title: 'Opening Keynote',
        datetime: 'Jan 05, 2025 - 09:00 AM (IST)',
        track: 'Track 1',
        amount: 30,
        status: 'Paid'
      }
    ]
  }
];

const COMPANION_ROWS = [
  {
    id: 'p1',
    groupId: 'g1',
    rowRole: 'parent',
    name: 'John Wick',
    email: 'johnwick@zylker.com',
    ticketClass: 'General admission',
    amount: 200,
    status: 'Paid'
  },
  {
    id: 'c1',
    groupId: 'g1',
    rowRole: 'child',
    isLastChild: true,
    name: 'Robert Fox',
    email: 'robertfox@zylker.com',
    ticketClass: 'General admission',
    companionLabel: 'Companion Ticket',
    amount: 200,
    status: 'Paid'
  },
  {
    id: 'p2',
    groupId: 'g2',
    rowRole: 'parent',
    name: 'Jerome Bell',
    email: 'jerome@zylker.com',
    ticketClass: 'VIP',
    amount: 350,
    status: 'Paid'
  },
  {
    id: 'c2',
    groupId: 'g2',
    rowRole: 'child',
    isLastChild: true,
    name: 'Jane Cooper',
    email: 'janecooper@zylker.com',
    ticketClass: 'VIP',
    companionLabel: 'Companion Ticket',
    amount: 350,
    status: 'Paid'
  }
];

let treeTableDemoRef = null;

class SessionAttendeeCell extends Component {
  get isParent() {
    return this.args.row.rowRole === 'parent';
  }

  get isChild() {
    return this.args.row.rowRole === 'child';
  }

  get isExpanded() {
    return treeTableDemoRef?.isAttendeeExpanded(this.args.row);
  }

  @action
  toggleExpand() {
    treeTableDemoRef?.toggleAttendee(this.args.row);
  }

  <template>
    <div class="datatable-tree-cell-content">
      {{#if this.isParent}}
        <span class="datatable-tree-gutter">
          <UlxIconButton
            @text={{true}}
            @iconLeft={{if
              this.isExpanded
              "up-arrow-bounded-icon"
              "down-arrow-bounded-icon"
            }}
            @iconSize="s20"
            @customClass="datatable-tree-expand"
            @onClick={{this.toggleExpand}}
            aria-expanded={{this.isExpanded}}
            aria-label={{if
              this.isExpanded
              "Collapse sessions"
              "Expand sessions"
            }}
          />
        </span>
        <div class="datatable-tree-main flex flex-col gap-1">
          <span class="semibold-font">{{@row.name}}</span>
          <span class="text-13 fg-text-secondary">{{@row.email}}</span>
        </div>
      {{else if this.isChild}}
        <span class="datatable-tree-gutter">
          <span
            class="datatable-tree-connector {{if @row.isLastChild 'is-last'}}"
          >
            <span class="datatable-tree-line" aria-hidden="true"></span>
            <span class="datatable-tree-elbow" aria-hidden="true"></span>
          </span>
        </span>
        <div class="datatable-tree-main flex flex-col gap-1">
          <span class="semibold-font">{{@row.title}}</span>
          <span class="text-13 fg-text-secondary">{{@row.datetime}}</span>
          <div>
            <UlxTag
              @value={{@row.track}}
              @variant="primary"
              @size="s-size"
              @invert={{true}}
            />
          </div>
        </div>
      {{/if}}
    </div>
  </template>
}

class CompanionAttendeeCell extends Component {
  get isChild() {
    return this.args.row.rowRole === 'child';
  }

  <template>
    <div class="datatable-tree-cell-content">
      {{#if this.isChild}}
        <span class="datatable-tree-gutter">
          <span
            class="datatable-tree-connector {{if @row.isLastChild 'is-last'}}"
          >
            <span class="datatable-tree-line" aria-hidden="true"></span>
            <span class="datatable-tree-elbow" aria-hidden="true"></span>
          </span>
        </span>
      {{/if}}
      <div class="datatable-tree-main flex flex-col gap-1 ps-4">
        <span class="semibold-font">{{@row.name}}</span>
        <span class="text-13 fg-text-secondary">{{@row.email}}</span>
      </div>
    </div>
  </template>
}

class SessionCountCell extends Component {
  <template>
    {{#if (eq @row.rowRole "parent")}}
      {{@row.sessionCount}}
    {{/if}}
  </template>
}

class TicketClassCell extends Component {
  <template>
    <div class="flex flex-col gap-1">
      <span>{{@row.ticketClass}}</span>
      {{#if @row.companionLabel}}
        <UlxChip @label={{@row.companionLabel}} @size="s-size" />
      {{/if}}
    </div>
  </template>
}

class AmountCell extends Component {
  get formattedAmount() {
    const { row } = this.args;
    if (row.rowRole === 'parent' && row.sessionCount != null) {
      return '';
    }
    if (row.rowRole === 'parent') {
      return row.amount != null ? `$${row.amount.toFixed(2)}` : '';
    }
    return row.amount != null ? `$${row.amount.toFixed(2)}` : '';
  }

  <template>
    {{#if this.formattedAmount}}
      <span class="semibold-font">{{this.formattedAmount}}</span>
    {{/if}}
  </template>
}

class StatusCell extends Component {
  <template>
    {{#if (and @row.status (eq @row.rowRole "child"))}}
      <UlxTag @value={{@row.status}} @variant="success" @size="s-size" />
    {{else if (and @row.status (eq @row.rowRole "parent") @row.ticketClass)}}
      <UlxTag @value={{@row.status}} @variant="success" @size="s-size" />
    {{/if}}
  </template>
}

const sessionColumns = [
  {
    field: 'name',
    header: 'Attendee',
    className: 'tree-table-cell',
    style: 'min-width: 320px',
    body: SessionAttendeeCell
  },
  {
    field: 'sessionCount',
    header: 'Sessions',
    style: 'min-width: 120px',
    body: SessionCountCell
  },
  {
    field: 'amount',
    header: 'Amount',
    style: 'min-width: 120px',
    body: AmountCell
  },
  {
    field: 'status',
    header: 'Status',
    style: 'min-width: 120px',
    body: StatusCell
  }
];

const companionColumns = [
  {
    field: 'name',
    header: 'Attendee',
    className: 'tree-table-cell',
    style: 'min-width: 320px',
    body: CompanionAttendeeCell
  },
  {
    field: 'ticketClass',
    header: 'Ticket Class',
    style: 'min-width: 220px',
    body: TicketClassCell
  },
  {
    field: 'amount',
    header: 'Amount',
    style: 'min-width: 120px',
    body: AmountCell
  },
  {
    field: 'status',
    header: 'Status',
    style: 'min-width: 120px',
    body: StatusCell
  }
];

const rowActionItems = [
  { label: 'View', value: 'view' },
  { label: 'Edit', value: 'edit' },
  { label: 'Remove', value: 'remove' }
];

export default class DemoTableTreeTable extends Component {
  attendees = ATTENDEES;
  companionRows = COMPANION_ROWS;
  sessionColumns = sessionColumns;
  companionColumns = companionColumns;
  rowActionItems = rowActionItems;

  @tracked expandedRows = { a1: true };

  constructor() {
    super(...arguments);
    treeTableDemoRef = this;
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (treeTableDemoRef === this) {
      treeTableDemoRef = null;
    }
  }

  get sessionDisplayRows() {
    const rows = [];

    for (const attendee of this.attendees) {
      rows.push({
        id: attendee.id,
        groupId: attendee.id,
        rowRole: 'parent',
        name: attendee.name,
        email: attendee.email,
        sessionCount: attendee.sessions.length
      });

      if (this.expandedRows[attendee.id]) {
        attendee.sessions.forEach((session, index, sessions) => {
          rows.push({
            ...session,
            groupId: attendee.id,
            rowRole: 'child',
            isLastChild: index === sessions.length - 1
          });
        });
      }
    }

    return rows;
  }

  isAttendeeExpanded(row) {
    return Boolean(this.expandedRows[row.id]);
  }

  @action
  toggleAttendee(row) {
    const id = row.id;
    const next = { ...this.expandedRows };

    next[id] ? delete next[id] : (next[id] = true);
    this.expandedRows = next;
  }

  @action
  sessionRowClassName(row, index) {
    return this.treeRowClassName(row, index, this.sessionDisplayRows);
  }

  @action
  companionRowClassName(row, index) {
    return this.treeRowClassName(row, index, this.companionRows);
  }

  @action
  treeRowClassName(row, index, rows) {
    const parts = [];
    const next = rows[index + 1];
    const hasChild =
      next && next.groupId === row.groupId && next.rowRole === 'child';

    row.rowRole === 'parent' && parts.push('datatable-tree-parent');
    row.rowRole === 'child' && parts.push('datatable-tree-child');
    row.isLastChild && parts.push('datatable-tree-last-child');
    row.rowRole === 'parent' && hasChild && parts.push('datatable-tree-branch');

    return parts.filter(Boolean).join(' ');
  }

  @action
  handleRowAction(row, _event, item) {
    // Demo-only handler for the actions menu.
    void row;
    void item;
  }

  <template>
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-2">
        <h4 class="semibold-font">Expandable sessions</h4>
        <p class="text-13 fg-text-secondary">
          Flatten nested session data into inline rows. Use
          <code>@customClass="tree-table"</code>,
          <code>@scrollable</code>, custom column bodies, and
          <code>@rowClassName</code>
          for parent, child, and group borders.
        </p>
        <UlxTable
          @value={{this.sessionDisplayRows}}
          @columns={{this.sessionColumns}}
          @dataKey="id"
          @customClass="tree-table"
          @scrollable={{true}}
          @rowClassName={{this.sessionRowClassName}}
        />
      </section>

      <section class="flex flex-col gap-2">
        <h4 class="semibold-font">Attendees ({{this.companionRows.length}})</h4>
        <p class="text-13 fg-text-secondary">
          Always-visible parent and companion rows with tree connectors and row
          actions.
        </p>
        <UlxTable
          @value={{this.companionRows}}
          @columns={{this.companionColumns}}
          @dataKey="id"
          @customClass="tree-table"
          @scrollable={{true}}
          @rowClassName={{this.companionRowClassName}}
        >
          <:optionCell as |row|>
            <div class="flex items-center justify-end">
              <UlxActionMenu
                @label="Actions"
                @icon="session-settings-icon"
                @items={{this.rowActionItems}}
                @variant="secondary"
                @outlined={{true}}
                @onItemSelect={{fn this.handleRowAction row}}
                aria-label="Actions for {{row.name}}"
              />
            </div>
          </:optionCell>
        </UlxTable>
      </section>
    </div>
  </template>
}
