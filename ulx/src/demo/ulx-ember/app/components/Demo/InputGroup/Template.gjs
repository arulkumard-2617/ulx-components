import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxInput,
  UlxButton,
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

  @action updateHours(e) {
    const num = Number(e.target.value);
    if (!Number.isNaN(num)) {
      this.hours = Math.max(this.hourMin, Math.min(this.hourMax, num));
    }
  }

  @action updateMinutes(e) {
    const num = Number(e.target.value);
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

      {{! START TIME }}
      <UlxField
        @label={{t "lbl.start.time"}}
        @fieldId="start-time"
        @fieldClass="col-3"
      >

        <:control as |field|>
          <UlxInputGroup @disabled={{this.isDisabled}}>

            <:input>
              <UlxInput
                @key={{field.key}}
                @disabled={{this.isDisabled}}
                placeholder={{t "lbl.start.time.placeholder"}}
                aria-label={{t "lbl.start.time"}}
              />
            </:input>

            <:end>
              <UlxButton
                @variant="basic"
                @size="compact"
                @icon="time-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s18"
                @customClass="inputgroup-addon icon-addon"
                @disabled={{this.isDisabled}}
                aria-label={{t "lbl.start.time"}}
              />
            </:end>

          </UlxInputGroup>
        </:control>

        <:assistive>
          <UlxCheckbox
            @itemLabel={{t "lbl.to.be.announced"}}
            @checked={{this.isToBeAnnounced}}
            @onCheckedChange={{this.handleToBeAnnouncedChange}}
          />
        </:assistive>

      </UlxField>

      {{! DURATION }}
      <UlxField @label={{t "lbl.duration"}} @fieldClass="col-8">

        <:control>
          <div class="ulx-grid gap-3">

            {{! HOURS }}
            <div class="field col-3">
              <UlxInputGroup @disabled={{this.isDisabled}}>

                <:input>
                  <UlxInput
                    @value={{this.hours}}
                    @rules={{this.hourRules}}
                    @onChange={{this.updateHours}}
                    type="number"
                    @disabled={{this.isDisabled}}
                    aria-label={{t "lbl.duration.hours"}}
                  />
                </:input>

                <:end>
                  <span class="inputgroup-addon text-addon">
                    {{t "lbl.hr"}}
                  </span>

                  <span class="inputgroup-addon vertical-stack-addon">
                    <UlxButton
                      @variant="basic"
                      @size="compact"
                      @icon="up-arrow-icon"
                      @iconSize="s14"
                      @onClick={{this.incrementHours}}
                      @disabled={{or
                        this.isDisabled
                        (eq this.hours this.hourMax)
                      }}
                      aria-label={{t "lbl.increment"}}
                    />
                    <UlxButton
                      @variant="basic"
                      @size="compact"
                      @icon="down-arrow-icon"
                      @iconSize="s14"
                      @onClick={{this.decrementHours}}
                      @disabled={{or
                        this.isDisabled
                        (eq this.hours this.hourMin)
                      }}
                      aria-label={{t "lbl.decrement"}}
                    />
                  </span>
                </:end>

              </UlxInputGroup>
            </div>

            {{! MINUTES }}
            <div class="field col-3">
              <UlxInputGroup @disabled={{this.isDisabled}}>

                <:input>
                  <UlxInput
                    @value={{this.minutes}}
                    @rules={{this.minuteRules}}
                    @onChange={{this.updateMinutes}}
                    type="number"
                    @disabled={{this.isDisabled}}
                    aria-label={{t "lbl.duration.minutes"}}
                  />
                </:input>

                <:end>
                  <span class="inputgroup-addon text-addon">
                    {{t "lbl.min"}}
                  </span>

                  <span class="inputgroup-addon vertical-stack-addon">
                    <UlxButton
                      @variant="basic"
                      @size="compact"
                      @icon="up-arrow-icon"
                      @iconSize="s14"
                      @onClick={{this.incrementMinutes}}
                      @disabled={{or
                        this.isDisabled
                        (eq this.minutes this.minuteMax)
                      }}
                      aria-label={{t "lbl.increment"}}
                    />
                    <UlxButton
                      @variant="basic"
                      @size="compact"
                      @icon="down-arrow-icon"
                      @iconSize="s14"
                      @onClick={{this.decrementMinutes}}
                      @disabled={{or
                        this.isDisabled
                        (eq this.minutes this.minuteMin)
                      }}
                      aria-label={{t "lbl.decrement"}}
                    />
                  </span>
                </:end>

              </UlxInputGroup>
            </div>

          </div>
        </:control>

      </UlxField>

    </div>
  </template>
}
