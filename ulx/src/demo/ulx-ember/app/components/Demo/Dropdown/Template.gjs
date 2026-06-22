import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxAvatar, UlxDropdown, UlxField, UlxIcon } from 'ulx-components';

const OPTIONS = [
  { label: 'Abeyy', value: 'abeyy', initials: 'AB', variant: 'orange' },
  { label: 'Bachpai', value: 'bachpai', initials: 'BA', variant: 'purple' },
  { label: 'Angelina', value: 'angelina', initials: 'AN', variant: 'orange' }
];

export default class DemoDropdownTemplate extends Component {
  @tracked selectedItem = null;

  get options() {
    return this.args.options ?? OPTIONS;
  }

  @action
  setSelectedItem(value) {
    this.selectedItem = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Speakers"
        @fieldId="dropdown-template"
        @fieldClass="col-4"
        as |field|
      >
        <UlxDropdown
          @field={{field}}
          @options={{this.options}}
          @value={{this.selectedItem}}
          @onChange={{this.setSelectedItem}}
          @optionLabel="label"
          @optionValue="value"
          @placeholder="Select Speakers"
        >
          <:value as |ctx|>
            {{#if ctx.selectedOption}}
              <span class="flex items-center gap-2">
                <UlxAvatar
                  @type="text"
                  @label={{ctx.selectedOption.initials}}
                  @variant={{ctx.selectedOption.variant}}
                  @shape="circle"
                  @size="xs-size"
                  aria-hidden="true"
                />
                <span>{{ctx.selectedLabel}}</span>
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
                @size="xs-size"
                aria-hidden="true"
              />
              <span>{{ctx.label}}</span>
            </span>
          </:item>
          <:footer as |ctx|>
            {{#if ctx.selectedOption}}
              <span>{{ctx.selectedOption.label}} selected.</span>
            {{else}}
              <span>No speaker selected.</span>
            {{/if}}
          </:footer>
          <:icon as |ctx|>
            {{#if ctx.overlayVisible}}
              <UlxIcon
                @iconName="right-arrow-icon"
                @type="font"
                @componentClass="bs-icons1"
                aria-hidden="true"
                @size="s22"
              />
            {{else}}
              <UlxIcon
                @iconName="down-arrow-icon"
                @type="font"
                @componentClass="bs-icons1"
                aria-hidden="true"
                @size="s20"
              />
            {{/if}}
          </:icon>
        </UlxDropdown>
      </UlxField>
    </div>
  </template>
}
