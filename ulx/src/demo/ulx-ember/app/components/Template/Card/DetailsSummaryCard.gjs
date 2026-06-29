import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq } from 'ember-truth-helpers';
import {
  UlxCard,
  UlxIcon,
  UlxIconButton,
  UlxAvatar,
  UlxTag,
  UlxBadge
} from 'ulx-components';

export default class DetailsSummaryCardTemplate extends Component {
  @tracked isExpanded = false;

  attendee = {
    name: 'John Wick',
    email: 'johnwick@zylker.com',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  };

  ticket = {
    type: 'Premium Delegate',
    id: '485380000007900201'
  };

  payment = {
    amount: '$531.00',
    orderId: '48538000000790020'
  };

  sessions = [
    {
      id: 'session-business-creativity',
      title: 'The Business of Creativity',
      date: 'May 28, 2026',
      time: '07:30 AM - 08:15 AM',
      location: 'South Plaza II',
      track: 'Track 1',
      trackStyle:
        '--lt-track-bg-color: color-mix(in srgb, #3B82F6 20%, white); --track-bg-color: #3B82F6',
      price: '$50.00'
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
      price: '$50.00'
    }
  ];

  companions = [
    {
      id: 'companion-jane-cooper',
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      ticket: 'General admission',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      price: '$150.00'
    }
  ];

  get linkedSessionsLabel() {
    return `Linked Sessions (${this.sessions.length})`;
  }

  get companionTicketsLabel() {
    return `Companion Tickets (${this.companions.length})`;
  }

  get toggleLabel() {
    if (this.isExpanded) {
      return `Hide ${this.linkedSessionsLabel} & ${this.companionTicketsLabel}`;
    }

    return `Show ${this.linkedSessionsLabel} & ${this.companionTicketsLabel}`;
  }

  get toggleIcon() {
    return this.isExpanded ? 'up-arrow-icon' : 'down-arrow-icon';
  }

  get cardClass() {
    return this.isExpanded
      ? 'details-summary-card expanded'
      : 'details-summary-card';
  }

  @action
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  <template>
    <UlxCard
      @appearance="flat"
      @size="s-size"
      @customClass={{this.cardClass}}
      @contentClass="no-padding"
      @footerClass="flex justify-center"
      data-qa="details-summary-card"
    >
      <:header>
        <div class="ulx-grid col-3 col-sm-1 divided w-full">
          <div class="flex flex-col gap-3 my-4 px-4 min-w-0">
            <div class="flex items-center gap-2 text-13 fg-secondary">
              <UlxIcon
                @iconName="user-info-icon"
                @type="font"
                @componentClass="bs-icons1"
                @size="s14"
                @customClass="fg-primary"
                aria-hidden="true"
              />
              Attendee
            </div>

            <div class="flex items-center gap-3 min-w-0">
              <UlxAvatar
                @type="image"
                @image={{this.attendee.image}}
                @shape="circle"
                @size="s-size"
                aria-hidden="true"
              />

              <div class="flex flex-col gap-1 min-w-0">
                <span
                  class="text-14 semibold-font"
                >{{this.attendee.name}}</span>
                <span
                  class="text-12 fg-secondary"
                >{{this.attendee.email}}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 my-4 px-4 min-w-0">
            <div class="flex items-center gap-2 text-13 fg-secondary">
              <UlxIcon
                @iconName="ticket-details-icon"
                @type="font"
                @componentClass="bs-icons1"
                @size="s14"
                @customClass="fg-primary"
                aria-hidden="true"
              />
              Current Ticket
            </div>

            <div class="flex flex-col gap-1 min-w-0">
              <span class="text-14 semibold-font">{{this.ticket.type}}</span>
              <div class="flex items-center gap-2 flex-wrap text-12">
                <span>Ticket ID: {{this.ticket.id}}</span>
                <UlxIconButton
                  @iconLeft="copy-icon"
                  @variant="link on-hover"
                  @size="s-size"
                  @iconComponentClass="bs-icons1"
                  @iconSize="s14"
                  aria-label="Copy ticket ID"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 my-4">
            <div class="flex items-center gap-2 text-13 fg-secondary">
              <UlxIcon
                @iconName="wallet-credits-icon"
                @type="font"
                @componentClass="bs-icons1"
                @size="s14"
                @customClass="fg-green"
                aria-hidden="true"
              />
              Total Paid
            </div>

            <div class="flex flex-col gap-1 min-w-0">
              <span class="text-14 semibold-font">{{this.payment.amount}}</span>
              <div class="flex items-center gap-2 flex-wrap text-12">
                <span>Order ID: {{this.payment.orderId}}</span>
                <UlxIconButton
                  @iconLeft="copy-icon"
                  @variant="link on-hover"
                  @size="s-size"
                  @iconComponentClass="bs-icons1"
                  @iconSize="s14"
                  aria-label="Copy order ID"
                />
              </div>
            </div>
          </div>
        </div>
      </:header>

      <:content>
        <div class="py-4 px-4 border-b">
          <div class="text-13 fg-secondary">{{this.linkedSessionsLabel}}</div>

          {{#each this.sessions key="id" as |session index|}}
            <div
              class="flex items-start justify-between gap-4 py-2
                {{unless (eq index 0) 'border-t border-dashed'}}"
            >
              <div class="flex flex-col gap-2 min-w-0">
                <span class="text-14 semibold-font">{{session.title}}</span>

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
                class="text-14 semibold-font shrink-0"
              >{{session.price}}</span>
            </div>
          {{/each}}
        </div>

        <div class="py-4 px-4">
          <div class="text-13 fg-secondary">{{this.companionTicketsLabel}}</div>

          {{#each this.companions key="id" as |companion|}}
            <div class="flex items-center justify-between gap-4 py-2">
              <div class="flex items-center gap-3 min-w-0">
                <UlxAvatar
                  @type="image"
                  @image={{companion.image}}
                  @shape="circle"
                  @size="s-size"
                  aria-hidden="true"
                />

                <div class="flex flex-col gap-1 min-w-0">
                  <span class="text-14 semibold-font">{{companion.name}}</span>
                  <span class="text-12 fg-secondary">{{companion.email}}</span>
                  <span class="flex items-center gap-2 text-12 fg-secondary">
                    <UlxIcon
                      @iconName="ticket-details-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    {{companion.ticket}}
                  </span>
                </div>
              </div>

              <span
                class="text-14 semibold-font shrink-0"
              >{{companion.price}}</span>
            </div>
          {{/each}}
        </div>
      </:content>

      <:footer>
        <UlxIconButton
          @label={{this.toggleLabel}}
          @variant="link on-hover"
          @size="s-size"
          @iconRight={{this.toggleIcon}}
          @iconComponentClass="bs-icons1"
          @iconSize="s14"
          @onClick={{this.toggleExpand}}
          aria-expanded={{this.isExpanded}}
        />
      </:footer>
    </UlxCard>
  </template>
}
