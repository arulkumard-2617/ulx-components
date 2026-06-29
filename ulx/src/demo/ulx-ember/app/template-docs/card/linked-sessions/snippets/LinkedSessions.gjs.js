export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import {
  UlxFieldSet,
  UlxCard,
  UlxCheckbox,
  UlxTag,
  UlxBadge,
  UlxAvatar,
  UlxIcon
} from 'ulx-components';

export default class LinkedSessionsTemplate extends Component {
  @tracked sessions = [
    {
      id: 'session-business-creativity',
      title: 'The Business of Creativity',
      date: 'May 28, 2026',
      time: '07:30 AM - 08:15 AM',
      location: 'Hall 3',
      track: 'Track 1',
      trackStyle:
        '--lt-track-bg-color: color-mix(in srgb, #3B82F6 20%, white); --track-bg-color: #3B82F6',
      price: '$50.00',
      available: true,
      checked: true,
      disabled: false,
      statusIcon: 'check-in-icon',
      statusBarClass: 'bg-greenLayer1 fg-green',
      statusMessage:
        'This session is available with General Admission and will be carried forward.'
    },
    {
      id: 'session-privacy-security',
      title: 'Privacy and Security: Our Promise to all Zylker Customers',
      date: 'May 28, 2026',
      time: '09:00 AM - 09:45 AM',
      location: 'Hall 1',
      track: 'Track 2',
      trackStyle:
        '--lt-track-bg-color: color-mix(in srgb, #EC4899 20%, white); --track-bg-color: #EC4899',
      price: '$50.00',
      available: false,
      checked: false,
      disabled: true,
      statusIcon: 'close-icon-01',
      statusBarClass: 'bg-redLayer1 fg-red',
      statusMessage:
        'This session is not available with General Admission and will be cancelled. Refund (if approved): $50.00'
    }
  ];

  @tracked companions = [
    {
      id: 'companion-jane-cooper',
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      relation: 'Family Member',
      avatarLabel: 'JC',
      avatarVariant: 'purple',
      price: '$150.00',
      available: false,
      checked: false,
      disabled: true,
      statusIcon: 'close-icon-01',
      statusBarClass: 'bg-redLayer1 fg-red',
      statusMessage:
        'This Companion Ticket is not available with General Admission and will be cancelled. Refund (if approved): $150.00'
    }
  ];

  get linkedSessionsLegend() {
    return \`Linked Sessions (\${this.sessions.length})\`;
  }

  get companionTicketsLegend() {
    return \`Companion Tickets (\${this.companions.length})\`;
  }

  @action
  onSessionToggle(session, checked) {
    this.sessions = this.sessions.map((item) =>
      item.id === session.id ? { ...item, checked } : item
    );
  }

  @action
  onCompanionToggle(companion, checked) {
    this.companions = this.companions.map((item) =>
      item.id === companion.id ? { ...item, checked } : item
    );
  }

  <template>
    <div class="flex flex-col gap-4">
      <UlxFieldSet
        class="gap-2"
        @legendClass="mb-0 leading-none"
        @customClass="flex flex-col gap-2 mt-0"
      >
        <:legend>
          <span
            class="text-14 bold-font leading-none"
          >{{this.linkedSessionsLegend}}</span>
        </:legend>

        <:default>
          {{#each this.sessions key="id" as |session|}}
            <UlxCard
              @appearance="outlined"
              @variant={{if session.available "success" "danger"}}
              @size="s-size"
              @customClass="p-0"
              @bodyClass="p-0"
              @contentClass="p-0"
              data-qa="session-card-{{session.id}}"
            >
              <div class="flex flex-col">
              <div class="flex items-start gap-2 p-3">
                <UlxCheckbox
                  @id={{session.id}}
                  @checked={{session.checked}}
                  @disabled={{session.disabled}}
                  @size="m-size"
                    @onCheckedChange={{fn this.onSessionToggle session}}
                    @customClass="shrink-0"
                    aria-describedby="session-status-{{session.id}}"
                  />

                  <label
                    for={{session.id}}
                    class="checkbox-label flex-1 min-w-0
                      {{if session.disabled 'disabled'}}"
                  >
                    <div class="flex items-start justify-between gap-4 w-full">
                      <div class="flex flex-col gap-1 min-w-0">
                        <span
                          class="text-14 bold-font leading-none
                            {{unless session.available 'fg-secondary'}}"
                        >{{session.title}}</span>

                        <div
                          class="flex flex-wrap items-center gap-2 text-12 fg-secondary"
                        >
                          <span class="flex items-center gap-2 shrink-0">
                            <UlxIcon
                              @iconName="calendar-icon"
                              @type="font"
                              @componentClass="bs-icons1"
                              @size="s14"
                              aria-hidden="true"
                            />
                            {{session.date}}
                            -
                            {{session.time}}
                          </span>

                          <UlxBadge
                            @type="dot"
                            @size="xxs-size"
                            @variant="light-grey"
                            aria-hidden="true"
                          />

                          <span class="flex items-center gap-2 shrink-0">
                            <UlxIcon
                              @iconName="location-icon"
                              @type="font"
                              @componentClass="bs-icons1"
                              @size="s14"
                              aria-hidden="true"
                            />
                            {{session.location}}
                          </span>

                          <UlxBadge
                            @type="dot"
                            @size="xxs-size"
                            @variant="light-grey"
                            aria-hidden="true"
                          />

                          <UlxTag
                            @value={{session.track}}
                            @variant="lt-track-label"
                            @type="pill"
                            @size="xxs-size"
                            @customClass="shrink-0"
                            style={{session.trackStyle}}
                          />
                        </div>
                      </div>

                      <span
                        class="text-14 bold-font shrink-0
                          {{unless session.available 'fg-secondary'}}"
                      >{{session.price}}</span>
                    </div>
                  </label>
                </div>

              <div
                id="session-status-{{session.id}}"
                class="flex items-center gap-2 px-3 py-2 text-12
                  {{session.statusBarClass}}"
                role="status"
              >
                  <UlxIcon
                    @iconName={{session.statusIcon}}
                    @type="font"
                    @componentClass="bs-icons1"
                    @size="s14"
                    aria-hidden="true"
                  />
                  <span>{{session.statusMessage}}</span>
                </div>
              </div>
            </UlxCard>
          {{/each}}
        </:default>
      </UlxFieldSet>

      <UlxFieldSet
        class="gap-2"
        @legendClass="mb-0 leading-none"
        @customClass="flex flex-col gap-2 mt-0"
      >
        <:legend>
          <span
            class="text-14 bold-font leading-none"
          >{{this.companionTicketsLegend}}</span>
        </:legend>

        <:default>
          {{#each this.companions key="id" as |companion|}}
            <UlxCard
              @appearance="outlined"
              @variant={{if companion.available "success" "danger"}}
              @size="s-size"
              @customClass="p-0"
              @bodyClass="p-0"
              @contentClass="p-0"
              data-qa="companion-card-{{companion.id}}"
            >
              <div class="flex flex-col">
                <div class="flex items-start gap-2 p-3">
                  <UlxCheckbox
                    @id={{companion.id}}
                    @checked={{companion.checked}}
                    @disabled={{companion.disabled}}
                    @size="m-size"
                    @onCheckedChange={{fn this.onCompanionToggle companion}}
                    @customClass="shrink-0"
                    aria-describedby="companion-status-{{companion.id}}"
                  />

                  <label
                    for={{companion.id}}
                    class="checkbox-label flex-1 min-w-0
                      {{if companion.disabled 'disabled'}}"
                  >
                    <div class="flex items-start justify-between gap-4 w-full">
                      <div class="flex items-center gap-3 min-w-0">
                        <UlxAvatar
                          @type="text"
                          @label={{companion.avatarLabel}}
                          @variant={{companion.avatarVariant}}
                          @shape="circle"
                          @size="s-size"
                          aria-hidden="true"
                        />

                        <div class="flex flex-col gap-1 min-w-0">
                          <span
                            class="text-14 bold-font
                              {{unless companion.available 'fg-secondary'}}"
                          >{{companion.name}}</span>
                          <span
                            class="text-12 fg-secondary"
                          >{{companion.email}}</span>
                          <UlxTag
                            @value={{companion.relation}}
                            @variant="secondary"
                            @type="pill"
                            @size="xxs-size"
                            @customClass="self-start"
                          />
                        </div>
                      </div>

                      <span
                        class="text-14 bold-font shrink-0
                          {{unless companion.available 'fg-secondary'}}"
                      >{{companion.price}}</span>
                    </div>
                  </label>
                </div>

              <div
                id="companion-status-{{companion.id}}"
                class="flex items-center gap-2 px-3 py-2 text-12
                  {{companion.statusBarClass}}"
                role="status"
              >
                  <UlxIcon
                    @iconName={{companion.statusIcon}}
                    @type="font"
                    @componentClass="bs-icons1"
                    @size="s14"
                    aria-hidden="true"
                  />
                  <span>{{companion.statusMessage}}</span>
                </div>
              </div>
            </UlxCard>
          {{/each}}
        </:default>
      </UlxFieldSet>
    </div>
  </template>
}

`;
