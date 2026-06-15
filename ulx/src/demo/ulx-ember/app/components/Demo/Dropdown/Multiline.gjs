import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxAvatar, UlxDropdown, UlxField } from 'ulx-components';

const USERS = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    value: 'john-doe'
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    value: 'jane-smith'
  },
  {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    value: 'alex-johnson'
  },
  {
    name: 'Sam Williams',
    email: 'sam.williams@example.com',
    value: 'sam-williams'
  }
];

const MEMBERS = [
  {
    name: 'John Doe',
    designation: 'Product Manager',
    initials: 'JD',
    variant: 'orange',
    value: 'john-doe'
  },
  {
    name: 'Jane Smith',
    designation: 'UX Designer',
    initials: 'JS',
    variant: 'purple',
    value: 'jane-smith'
  },
  {
    name: 'Alex Johnson',
    designation: 'Engineering Lead',
    initials: 'AJ',
    variant: 'blue',
    value: 'alex-johnson'
  },
  {
    name: 'Sam Williams',
    designation: 'Marketing Head',
    initials: 'SW',
    variant: 'green',
    value: 'sam-williams'
  }
];

export default class DemoDropdownMultiline extends Component {
  @tracked selectedUser = 'john-doe';
  @tracked selectedMember = 'john-doe';

  get users() {
    return USERS;
  }

  get members() {
    return MEMBERS;
  }

  @action
  setSelectedUser(value) {
    this.selectedUser = value;
  }

  @action
  setSelectedMember(value) {
    this.selectedMember = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-12 mb-14">
      <UlxField
        @label="Name and email"
        @fieldId="dropdown-multiline"
        @fieldClass="col-4"
        as |field|
      >
        <UlxDropdown
          @field={{field}}
          @options={{this.users}}
          @value={{this.selectedUser}}
          @onChange={{this.setSelectedUser}}
          @optionLabel="name"
          @optionValue="value"
          @placeholder="Select a user"
          @customClass="multiline"
        >
          <:value as |ctx|>
            {{#if ctx.selectedOption}}
              <div class="flex flex-col">
                <div>{{ctx.selectedOption.name}}</div>
                <div
                  class="text-13 fg-secondary"
                >{{ctx.selectedOption.email}}</div>
              </div>
            {{else}}
              <span class="dropdown-item-label">{{ctx.placeholder}}</span>
            {{/if}}
          </:value>
          <:item as |ctx|>
            <div class="flex flex-col">
              <div>{{ctx.option.name}}</div>
              <div class="text-13 fg-secondary">{{ctx.option.email}}</div>
            </div>
          </:item>
        </UlxDropdown>
      </UlxField>

      <UlxField
        @label="Avatar, name and designation"
        @fieldId="dropdown-multiline-avatar"
        @fieldClass="col-4"
        as |field|
      >
        <UlxDropdown
          @field={{field}}
          @options={{this.members}}
          @value={{this.selectedMember}}
          @onChange={{this.setSelectedMember}}
          @optionLabel="name"
          @optionValue="value"
          @placeholder="Select a team member"
          @customClass="multiline"
        >
          <:value as |ctx|>
            {{#if ctx.selectedOption}}
              <span class="flex items-center gap-2">
                <UlxAvatar
                  @type="text"
                  @label={{ctx.selectedOption.initials}}
                  @variant={{ctx.selectedOption.variant}}
                  @shape="circle"
                  @size="s-size"
                  aria-hidden="true"
                />
                <div class="flex flex-col">
                  <div>{{ctx.selectedOption.name}}</div>
                  <div
                    class="text-13 fg-secondary"
                  >{{ctx.selectedOption.designation}}</div>
                </div>
              </span>
            {{else}}
              <span class="dropdown-item-label">{{ctx.placeholder}}</span>
            {{/if}}
          </:value>
          <:item as |ctx|>
            <span class="flex items-center gap-2">
              <UlxAvatar
                @type="text"
                @label={{ctx.option.initials}}
                @variant={{ctx.option.variant}}
                @shape="circle"
                @size="s-size"
                aria-hidden="true"
              />
              <div class="flex flex-col">
                <div>{{ctx.option.name}}</div>
                <div
                  class="text-13 fg-secondary"
                >{{ctx.option.designation}}</div>
              </div>
            </span>
          </:item>
        </UlxDropdown>
      </UlxField>
    </div>
  </template>
}
