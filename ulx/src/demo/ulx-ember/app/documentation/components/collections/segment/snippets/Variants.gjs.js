export default `
import Component from '@glimmer/component';
import { eq } from 'ember-truth-helpers';
import {
  UlxSegment,
  UlxIcon,
  UlxTag,
  UlxBadge,
  UlxAvatar
} from 'ulx-components';

export default class VariantsDemoComponent extends Component {
  get coloredVariants() {
    return [
      {
        variant: 'grey',
        title: 'Grey',
        description: 'Grey segment with light background and black text'
      },
      {
        variant: 'success',
        layout: 'session',
        title: 'Success segment',
        description: 'The Business of Creativity',
        date: 'Jan 04, 2025 - 10:00 AM (IST)',
        location: 'South Plaza II',
        track: 'Track 1',
        trackStyle:
          '--lt-track-bg-color: color-mix(in srgb, #3B82F6 20%, white); --track-bg-color: #3B82F6',
        price: '$50.0',
        priceClass: 'text-14 semibold-font shrink-0',
        headerIcon: 'check-in-icon',
        headerIconClass: 'fg-green'
      },
      {
        variant: 'danger',
        layout: 'companion',
        title: 'Danger segment',
        name: 'Jane Cooper',
        email: 'janecooper@zylker.com',
        relation: 'Family Member',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        price: '- $150.00',
        priceClass: 'text-14 semibold-font shrink-0 fg-red',
        headerIcon: 'close-icon-01',
        headerIconClass: 'fg-red'
      }
    ];
  }

  <template>
    <div class="variants-demo">
      <h3 class="mb-4">Colored Segments (Standard Variants)</h3>
      <div class="flex flex-col gap-5">
        {{#each this.coloredVariants as |item|}}
          {{#if item.headerIcon}}
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <UlxIcon
                  @iconName={{item.headerIcon}}
                  @type="font"
                  @componentClass="bs-icons1"
                  @size="s16"
                  @customClass={{item.headerIconClass}}
                  aria-hidden="true"
                />
                <span class="text-14 semibold-font">{{item.title}}</span>
              </div>

              <UlxSegment @variant={{item.variant}} @customClass="p-4">
                {{#if (eq item.layout "companion")}}
                  <div class="flex items-center justify-between gap-4">
                    <div class="flex gap-3 min-w-0">
                      <UlxAvatar
                        @type="image"
                        @image={{item.image}}
                        @shape="circle"
                        @size="s-size"
                        aria-hidden="true"
                      />

                      <div class="flex flex-col gap-1 min-w-0">
                        <span
                          class="text-14 semibold-font leading-none"
                        >{{item.name}}</span>
                        <span class="text-12 fg-secondary">{{item.email}}</span>
                        <span
                          class="flex items-center gap-2 text-12 fg-secondary"
                        >
                          <UlxIcon
                            @iconName="ticket-details-icon"
                            @type="font"
                            @componentClass="bs-icons1"
                            @size="s14"
                            aria-hidden="true"
                          />
                          {{item.relation}}
                        </span>
                      </div>
                    </div>

                    <span class={{item.priceClass}}>{{item.price}}</span>
                  </div>
                {{else}}
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex flex-col gap-2 min-w-0">
                      <span
                        class="text-14 semibold-font"
                      >{{item.description}}</span>

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
                          {{item.date}}
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
                          {{item.location}}
                        </span>

                        <UlxBadge
                          @type="dot"
                          @size="xxs-size"
                          @variant="light-grey"
                          aria-hidden="true"
                        />

                        <UlxTag
                          @value={{item.track}}
                          @variant="lt-track-label"
                          @type="pill"
                          @size="xxs-size"
                          @customClass="shrink-0"
                          style={{item.trackStyle}}
                        />
                      </div>
                    </div>

                    <span class={{item.priceClass}}>{{item.price}}</span>
                  </div>
                {{/if}}
              </UlxSegment>
            </div>
          {{else}}
            <UlxSegment @variant={{item.variant}}>
              <p>{{item.title}} segment — {{item.description}}</p>
            </UlxSegment>
          {{/if}}
        {{/each}}
      </div>
    </div>
  </template>
}

`;
