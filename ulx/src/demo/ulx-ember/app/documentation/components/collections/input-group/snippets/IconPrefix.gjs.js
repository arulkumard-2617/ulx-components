export default `
import Component from '@glimmer/component';
import { UlxInput, UlxInputGroup, UlxIcon } from 'ulx-components';

const ICON_PREFIX_FIELDS = [
  { label: 'Name', icon: 'name-icon' },
  { label: 'Email Address', icon: 'email-icon' },
  { label: 'Phone Number', icon: 'phone-number-icon' },
  { label: 'Company', icon: 'company-icon' },
  { label: 'Referral', icon: 'referral-icon' },
  { label: 'Meals', icon: 'meal-icon' },
  { label: 'Clothing Size', icon: 'clothing-icon' },
  { label: 'Website', icon: 'website-icon' },
  { label: 'Country', icon: 'country-icon' },
  { label: 'Designation', icon: 'job-title-icon' },
];

export default class DemoInputGroupIconPrefix extends Component {
  get fields() {
    return ICON_PREFIX_FIELDS;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      {{#each this.fields as |field|}}
        <div class="col-6">
          <UlxInputGroup @startAddonClass="icon-addon">
            <:start>
              <UlxIcon
                @componentClass="bs-icons1"
                @type="font"
                @iconName={{field.icon}}
                @size="s18"
                aria-hidden="true"
              />
            </:start>
            <:input>
              <UlxInput
                placeholder={{field.label}}
                aria-label={{field.label}}
              />
            </:input>
          </UlxInputGroup>
        </div>
      {{/each}}
    </div>
  </template>
}

`;
