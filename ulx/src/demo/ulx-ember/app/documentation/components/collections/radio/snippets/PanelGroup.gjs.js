export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDivider, UlxField, UlxInput, UlxRadioPanelGroup } from 'ulx-components';

export default class RadioPanelGroupDemo extends Component {
  @tracked restrictionType = 'allow';
  @tracked emailDomains = '';

  get restrictionItems() {
    return [
      {
        label: 'Allow these email domains',
        value: 'allow',
      },
      {
        label: 'Block these email domains',
        value: 'block',
      },
    ];
  }

  @action
  setRestrictionType(value) {
    this.restrictionType = value;
  }

  @action
  updateEmailDomains(event) {
    this.emailDomains = event.target.value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Email domain restriction"
        @fieldId="radio-panel-group"
        @fieldClass="col-10"
        as |field|
      >
        <UlxRadioPanelGroup
          @field={{field}}
          @items={{this.restrictionItems}}
          @value={{this.restrictionType}}
          @onChange={{this.setRestrictionType}}
          @panelClass="mt-0"
          @customClass="gap-3 flex flex-col mt-2"
        >
          <div class="flex gap-3">
            <UlxDivider
              @layout="vertical"
              @variant="primary"
              @customClass="radio-panel-divider m-0"
            />

            <div class="w-full py-4">
              <UlxField
                @label="Email Domains"
                @helpText="Enter one or multiple email domains. Separate multiple email domains with a comma."
                @fieldId="email-domains"
                as |domainField|
              >
                <UlxInput
                  @field={{domainField}}
                  @value={{this.emailDomains}}
                  @onInput={{this.updateEmailDomains}}
                />
              </UlxField>
            </div>
          </div>
        </UlxRadioPanelGroup>
      </UlxField>
    </div>
  </template>
}

`;
