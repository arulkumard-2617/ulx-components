export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { concat } from '@ember/helper';
import { UlxDropdown, UlxField, UlxIcon, t } from 'ulx-components';

const IMAGE_PLACEHOLDER =
  'https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png';

const OPTIONS = [
  { label: 'New York', value: 'NY', imageUrl: IMAGE_PLACEHOLDER, code: 'us' },
  { label: 'Rome', value: 'RM', imageUrl: IMAGE_PLACEHOLDER, code: 'it' },
  { label: 'London', value: 'LDN', imageUrl: IMAGE_PLACEHOLDER, code: 'uk' },
  { label: 'Paris', value: 'PRS', imageUrl: IMAGE_PLACEHOLDER, code: 'fr' },
  { label: 'Berlin', value: 'BER', imageUrl: IMAGE_PLACEHOLDER, code: 'de' },
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

  @action
  getFlagClass(code) {
    return code ? \`flag flag-\${String(code).toLowerCase()}\` : '';
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.dropdown.template"}}
        @id="dropdown-template"
        @fieldClass="col-4"
      >
        <:control as |field|>
          <UlxDropdown
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @options={{this.options}}
            @value={{this.selectedItem}}
            @onChange={{this.setSelectedItem}}
            @optionLabel="label"
            @optionValue="value"
            @optionImageUrl="imageUrl"
            @placeholder={{t "msg.dropdown.placeholder.city"}}
          >
        <:value as |ctx|>
          {{#if ctx.selectedOption}}
            {{#if ctx.imageUrl}}
              <img
                src={{ctx.imageUrl}}
                alt={{ctx.selectedLabel}}
                class={{concat
                  "me-2 flag "
                  (this.getFlagClass ctx.selectedOption.code)
                }}
                style="width: 18px;"
                aria-hidden="true"
              />
            {{/if}}
            <div>{{ctx.selectedLabel}}</div>
          {{else}}
            <span class="dropdown-item-label">{{ctx.placeholder}}</span>
          {{/if}}
        </:value>
        <:item as |ctx|>
          {{#if ctx.imageUrl}}
            <img
              src={{ctx.imageUrl}}
              alt={{ctx.label}}
              class={{concat "me-2 flag " (this.getFlagClass ctx.option.code)}}
              style="width: 18px;"
              aria-hidden="true"
            />
          {{/if}}
          <div>{{ctx.label}}</div>
        </:item>
        <:footer as |ctx|>
          {{#if ctx.selectedOption}}
            <span>{{t
                "msg.dropdown.country.selected"
                name=ctx.selectedOption.label
              }}</span>
          {{else}}
            <span>{{t "msg.dropdown.no.country.selected"}}</span>
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
        </:control>
      </UlxField>
    </div>
  </template>
}

`;
