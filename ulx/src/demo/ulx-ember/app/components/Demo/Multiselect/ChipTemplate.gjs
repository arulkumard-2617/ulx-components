import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import {
  UlxMultiSelect,
  UlxField,
  UlxChip,
  UlxAvatar,
  UlxIcon
} from 'ulx-components';

const CO_HOSTS = [
  {
    label: 'Aaron',
    value: 'aaron',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    label: 'Joshuva',
    value: 'joshuva',
    memberProfile: {
      fullName: 'Joshuva',
      hasImage: false,
      colorTheme: 'grey'
    }
  },
  {
    label: 'Mark',
    value: 'mark',
    memberProfile: {
      fullName: 'Mark',
      hasImage: false,
      colorTheme: 'purple'
    }
  },
  {
    label: 'Vijaykumar',
    value: 'vijaykumar',
    memberProfile: {
      fullName: 'Vijaykumar',
      hasImage: false,
      colorTheme: 'blue'
    }
  },
  {
    label: 'Vijay Kishore',
    value: 'vijay-kishore',
    memberProfile: {
      fullName: 'Vijay Kishore',
      hasImage: false,
      colorTheme: 'purple'
    }
  }
];

export default class DemoMultiselectChipTemplate extends Component {
  coHosts = CO_HOSTS;

  @tracked selected = [
    'aaron',
    'joshuva',
    'mark',
    'vijaykumar',
    'vijay-kishore'
  ];

  @action
  setSelected(value) {
    this.selected = value;
  }

  @action
  removeCoHost(option, event) {
    event?.stopPropagation?.();
    this.selected = this.selected.filter((value) => value !== option.value);
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Select Co-Host"
        @fieldId="multiselect-chip-template"
        @fieldClass="col-12"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.coHosts}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @size="l-size"
          @filter={{true}}
          @placeholder="Select co-hosts"
        >
          <:chip as |ctx|>
            {{#if ctx.option.image}}
              <UlxChip
                @label={{ctx.label}}
                @image={{ctx.option.image}}
                @imageAlt={{ctx.label}}
                @removable={{true}}
                @size="s-size"
                @onRemove={{fn this.removeCoHost ctx.option}}
              />
            {{else}}
              <UlxChip
                @label={{ctx.label}}
                @size="s-size"
                @customClass="with-icon"
              >
                <span class="chip-icon" data-qa="ulx-chip-icon">
                  <UlxAvatar
                    @memberProfile={{ctx.option.memberProfile}}
                    @size="s-size"
                    @shape="circle"
                    aria-hidden="true"
                  />
                </span>
                <span
                  class="chip-label"
                  data-qa="ulx-chip-label"
                >{{ctx.label}}</span>
                <button
                  type="button"
                  class="chip-remove-icon"
                  data-qa="ulx-chip-remove"
                  aria-label="Remove"
                  {{on "click" (fn this.removeCoHost ctx.option)}}
                >
                  <UlxIcon
                    @iconName="bs-icons1 close-icon-01"
                    @type="font"
                    @size="s18"
                    aria-hidden="true"
                  />
                </button>
              </UlxChip>
            {{/if}}
          </:chip>

          <:item as |ctx|>
            <span class="flex items-center gap-4">
              {{#if ctx.option.image}}
                <UlxAvatar
                  @type="image"
                  @image={{ctx.option.image}}
                  @size="s-size"
                  @shape="circle"
                  aria-hidden="true"
                />
              {{else if ctx.option.memberProfile}}
                <UlxAvatar
                  @memberProfile={{ctx.option.memberProfile}}
                  @size="s-size"
                  @shape="circle"
                  aria-hidden="true"
                />
              {{/if}}
              <span>{{ctx.label}}</span>
            </span>
          </:item>
        </UlxMultiSelect>
      </UlxField>
    </div>
  </template>
}
