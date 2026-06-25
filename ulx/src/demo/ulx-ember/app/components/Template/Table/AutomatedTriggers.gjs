import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxButton,
  UlxIcon,
  UlxTag,
  UlxToggle,
  UlxTable,
  UlxField,
  UlxInputGroup,
  UlxInput,
  UlxSplitButton,
  UlxMessage,
  UlxModal
} from 'ulx-components';

const TriggerNameCell = <template>
  {{#if @row.banner}}
    <UlxMessage
      @text={{@row.banner}}
      @variant="warn"
      @icon="sp-danger-filled-icon"
      @customClass="tr-notify"
    />
  {{/if}}
  <span class="bold-font">{{@row.name}}</span>
</template>;

const MessageTemplateCell = <template>
  <div class="border-dashed border rounded p-3">
    <div class="text-13 text-secondary mb-2">{{@row.templateText}}</div>
    <UlxButton
      @label="View details"
      @variant="link"
      @text={{true}}
      @size="s-size"
    />
  </div>
</template>;

const StatusCell = <template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <UlxToggle
        @checked={{@row.active}}
        @size="m-size"
        @variant="primary"
        aria-label="Enable {{@row.name}}"
      />
      <UlxTag
        @value={{if @row.active "active" "Disabled"}}
        @variant={{if @row.active "success" "secondary"}}
        @size="s-size"
        @type="pill"
      />
    </div>
    {{#if @row.warning}}
      <div class="flex items-start gap-1 max-w-280">
        <UlxIcon
          @type="font"
          @componentClass="bs-icons1 fg-yellow"
          @iconName="alert-icon"
          @size="s14"
        />
        <span class="text-13 text-secondary">{{@row.warning}}</span>
      </div>
    {{/if}}
  </div>
</template>;

const ActionCell = <template>
  <UlxSplitButton
    @label="Edit"
    @items={{@row.actionItems}}
    @size="s-size"
    @variant="secondary"
    @outlined={{true}}
  />
</template>;

const TEMPLATE_TEXT =
  'Hi %Attendee name%, you have been successfully registered for the event. ' +
  'Please find your ticket attached below...';

export default class AutomatedTriggersTemplate extends Component {
  @tracked triggersEnabled = true;
  @tracked searchValue = '';
  @tracked isCreateTriggerOpen = false;

  columns = [
    {
      field: 'name',
      header: 'Trigger Name',
      style: 'width: 22%',
      body: TriggerNameCell
    },
    {
      field: 'templateText',
      header: 'Message Template',
      style: 'width: 32%',
      body: MessageTemplateCell
    },
    {
      field: 'status',
      header: 'Status',
      style: 'width: 30%',
      body: StatusCell
    },
    {
      field: 'action',
      header: 'Action',
      style: 'width: 16%',
      body: ActionCell
    }
  ];

  get rowActionItems() {
    return [
      { label: 'Edit', icon: 'edit-icon', command: () => {} },
      { label: 'View', icon: 'view-icon', command: () => {} },
      { label: 'Delete', icon: 'delete-icon', command: () => {} }
    ];
  }

  get triggerRows() {
    const items = this.rowActionItems;
    const rows = [
      {
        id: 1,
        name: 'Ticket Booking Confirmation',
        templateText: TEMPLATE_TEXT,
        active: false,
        warning:
          'This trigger cannot be enabled as it’s message template is yet to be approved by WhatsApp',
        actionItems: items
      },
      {
        id: 2,
        name: 'Ticket Canceled',
        templateText: TEMPLATE_TEXT,
        active: true,
        actionItems: items
      },
      {
        id: 3,
        name: 'Ticket Canceled',
        templateText: TEMPLATE_TEXT,
        active: true,
        banner:
          'Attention needed! The scheduled time for this announcement is out of the event day range',
        actionItems: items
      }
    ];
    const q = this.searchValue.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => r.name.toLowerCase().includes(q));
  }

  @action
  updateSearch(event) {
    this.searchValue = event.target.value;
  }

  @action
  toggleTriggers(checked) {
    this.triggersEnabled = checked;
  }

  @action
  openCreateTrigger() {
    this.isCreateTriggerOpen = true;
  }

  @action
  closeCreateTrigger() {
    this.isCreateTriggerOpen = false;
  }

  @action
  rowClassName(row) {
    return row?.banner ? 'alert-row' : '';
  }

  <template>
    <div class="flex items-center justify-between mb-4">
      <h5 class="bold-font m-0">Automated Triggers- Attendees</h5>
      <UlxToggle
        @checked={{this.triggersEnabled}}
        @onCheckedChange={{this.toggleTriggers}}
        @size="m-size"
        @variant="primary"
        aria-label="Enable automated triggers"
      />
    </div>

    <div class="flex items-center justify-between gap-3 mb-4">
      <UlxField @fieldClass="w-240">
        <UlxInputGroup @startAddonClass="icon-addon">
          <:start>
            <UlxIcon
              @type="font"
              @componentClass="bs-icons1"
              @iconName="search-icon"
              @size="s14"
            />
          </:start>
          <:input>
            <UlxInput
              @type="text"
              @value={{this.searchValue}}
              @size="l-size"
              placeholder="Search"
              {{on "input" this.updateSearch}}
              aria-label="Search triggers"
            />
          </:input>
        </UlxInputGroup>
      </UlxField>
      <UlxButton
        @label="Create Trigger"
        @variant="primary"
        @size="l-size"
        @iconLeft="add-icon1"
        @iconComponentClass="bs-icons1"
        @onClick={{this.openCreateTrigger}}
      />
    </div>

    <UlxTable
      @value={{this.triggerRows}}
      @columns={{this.columns}}
      @dataKey="id"
      @size="l-size"
      @customClass="top-align"
      @rowClassName={{this.rowClassName}}
    />

    <UlxModal
      @visible={{this.isCreateTriggerOpen}}
      @title="Create Trigger"
      @maximized={{true}}
      @size="maximized"
      @scrollable={{true}}
      @hideFooter={{true}}
      @onHide={{this.closeCreateTrigger}}
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h5 class="bold-font m-0">Automated Triggers- Attendees</h5>
          <UlxToggle
            @checked={{this.triggersEnabled}}
            @onCheckedChange={{this.toggleTriggers}}
            @size="m-size"
            @variant="primary"
            aria-label="Enable automated triggers"
          />
        </div>

        <div class="flex items-center justify-between gap-3 mb-4">
          <UlxField @fieldClass="w-240">
            <UlxInputGroup @startAddonClass="icon-addon">
              <:start>
                <UlxIcon
                  @type="font"
                  @componentClass="bs-icons1"
                  @iconName="search-icon"
                  @size="s14"
                />
              </:start>
              <:input>
                <UlxInput
                  @type="text"
                  @value={{this.searchValue}}
                  @size="l-size"
                  placeholder="Search"
                  {{on "input" this.updateSearch}}
                  aria-label="Search triggers"
                />
              </:input>
            </UlxInputGroup>
          </UlxField>
        </div>

        <UlxTable
          @value={{this.triggerRows}}
          @columns={{this.columns}}
          @dataKey="id"
          @size="l-size"
          @customClass="top-align"
          @rowClassName={{this.rowClassName}}
        />
      </div>
    </UlxModal>
  </template>
}
