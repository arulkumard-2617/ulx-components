export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxInput,
  UlxIconButton,
  UlxCheckbox,
  UlxField,
  UlxInputGroup,
  t,
} from 'ulx-components';
import { eq, or } from 'ember-truth-helpers';

export default class DemoInputGroupTemplate extends Component {
  @tracked hours = 0;
  @tracked minutes = 45;
  @tracked isToBeAnnounced = false;

  hourMin = 0;
  hourMax = 23;

  minuteMin = 0;
  minuteMax = 59;

  get hourRules() {
    return { min: { value: this.hourMin }, max: { value: this.hourMax } };
  }

  get minuteRules() {
    return { min: { value: this.minuteMin }, max: { value: this.minuteMax } };
  }

  get isDisabled() {
    return this.isToBeAnnounced;
  }

  @action updateHours(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this.hours = Math.max(this.hourMin, Math.min(this.hourMax, num));
    }
  }

  @action updateMinutes(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this.minutes = Math.max(this.minuteMin, Math.min(this.minuteMax, num));
    }
  }

  @action incrementHours() {
    if (this.isDisabled) return;
    this.hours = Math.min(this.hourMax, this.hours + 1);
  }

  @action decrementHours() {
    if (this.isDisabled) return;
    this.hours = Math.max(this.hourMin, this.hours - 1);
  }

  @action incrementMinutes() {
    if (this.isDisabled) return;
    this.minutes = Math.min(this.minuteMax, this.minutes + 1);
  }

  @action decrementMinutes() {
    if (this.isDisabled) return;
    this.minutes = Math.max(this.minuteMin, this.minutes - 1);
  }

  @action handleToBeAnnouncedChange(checked) {
    this.isToBeAnnounced = checked;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-x-4 gap-y-2">

      <UlxField
        @label="Start Time"
        @fieldId="start-time"
        @fieldClass="col-3"
      >
        <:default as |field|>
          <UlxInputGroup
            @disabled={{this.isDisabled}}
            @endAddonClass="icon-addon"
          >

            <:input as |group|>
              <UlxInput
                @field={{field}}
                @disabled={{group.disabled}}
                @invalid={{group.invalid}}
                placeholder={{"12:00 AM"}}
                aria-label={{"Start Time"}}
              />
            </:input>

            <:end>
              <UlxIconButton
                @variant="basic"
                @size="compact"
                @iconLeft="time-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                @disabled={{this.isDisabled}}
                aria-label={{"Open time picker"}}
              />
            </:end>

          </UlxInputGroup>
        </:default>

        <:assistive>
          <UlxCheckbox
            @itemLabel="To be announced"
            @checked={{this.isToBeAnnounced}}
            @onCheckedChange={{this.handleToBeAnnouncedChange}}
          />
        </:assistive>
      </UlxField>

      {{! DURATION }}
      <UlxField @label="Duration" @fieldClass="col-8">

        <div class="ulx-grid gap-3">

          {{! HOURS }}
          <div class="field col-3">
            <UlxInputGroup @disabled={{this.isDisabled}}>

              <:input as |group|>
                <UlxInput
                  @value={{this.hours}}
                  @rules={{this.hourRules}}
                  @onChange={{this.updateHours}}
                  type="number"
                  @disabled={{group.disabled}}
                  @invalid={{group.invalid}}
                  aria-label={{"Hours"}}
                />
              </:input>

              <:end>
                <span class="inputgroup-addon text-addon">
                  {{"Hr"}}
                </span>

                <span class="inputgroup-addon vertical-stack-addon">
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="up-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.incrementHours}}
                    @disabled={{or
                      this.isDisabled
                      (eq this.hours this.hourMax)
                    }}
                    aria-label={{"Increment"}}
                  />
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="down-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.decrementHours}}
                    @disabled={{or
                      this.isDisabled
                      (eq this.hours this.hourMin)
                    }}
                    aria-label={{"Decrement"}}
                  />
                </span>
              </:end>

            </UlxInputGroup>
          </div>

          {{! MINUTES }}
          <div class="field col-3">
            <UlxInputGroup @disabled={{this.isDisabled}}>

              <:input as |group|>
                <UlxInput
                  @value={{this.minutes}}
                  @rules={{this.minuteRules}}
                  @onChange={{this.updateMinutes}}
                  type="number"
                  @disabled={{group.disabled}}
                  @invalid={{group.invalid}}
                  aria-label={{"Minutes"}}
                />
              </:input>

              <:end>
                <span class="inputgroup-addon text-addon">
                  {{"Mins"}}
                </span>

                <span class="inputgroup-addon vertical-stack-addon">
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="up-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.incrementMinutes}}
                    @disabled={{or
                      this.isDisabled
                      (eq this.minutes this.minuteMax)
                    }}
                    aria-label={{"Increment"}}
                  />
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="down-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.decrementMinutes}}
                    @disabled={{or
                      this.isDisabled
                      (eq this.minutes this.minuteMin)
                    }}
                    aria-label={{"Decrement"}}
                  />
                </span>
              </:end>

            </UlxInputGroup>
          </div>

        </div>

      </UlxField>

    </div>
  </template>
}

`;
