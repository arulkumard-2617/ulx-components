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
  get colorContextVariants() {
    return [
      {
        customClass: 'color-primary',
        label: 'color-primary',
        description: 'Solid primary surface'
      },
      {
        customClass: 'color-primary-layer1',
        label: 'color-primary-layer1',
        description: 'Primary layer 1 surface, borderless by default'
      },
      {
        customClass: 'color-primary-layer1 bordered',
        label: 'color-primary-layer1 bordered',
        description: 'Primary layer 1 with surface-border'
      },
      {
        customClass: 'color-primary-soft',
        label: 'color-primary-soft',
        description: 'Alias for primary layer 1 surface'
      },
      {
        customClass: 'color-primary-layer2',
        label: 'color-primary-layer2',
        description: 'Primary layer 2 surface'
      },
      {
        customClass: 'color-primary-layer3',
        label: 'color-primary-layer3',
        description: 'Primary layer 3 surface'
      },
      {
        customClass: 'color-primary-layer4',
        label: 'color-primary-layer4',
        description: 'Primary layer 4 surface'
      },
      {
        customClass: 'primary-border-start',
        label: 'primary-border-start',
        description: 'Primary inline-start accent only — no surface bg/fg'
      },
      {
        customClass: 'color-primary-layer1 primary-border-start',
        label: 'color-primary-layer1 primary-border-start',
        description: 'Primary layer 1 surface with primary inline-start accent'
      }
    ];
  }

  get usageExamples() {
    return [
      {
        customClass: 'color-primary-layer1 p-4',
        layout: 'session',
        title: 'color-primary-layer1',
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
        customClass: 'color-primary-layer2 primary-border-start p-4',
        layout: 'companion',
        title: 'color-primary-layer2 primary-border-start',
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
      <h3 class="mb-1">Color context utilities</h3>
      <p class="mb-5">Apply ULS primary color context classes via
        <code>@customClass</code>
        on
        <code>UlxSegment</code>. Primary surfaces are borderless by default; add
        <code>bordered</code>
        for a
        <code>surface-border</code>
        outline. Pair with
        <code>primary-border-start</code>
        for an inline-start accent.</p>

      <div class="flex flex-col gap-3">
        {{#each this.colorContextVariants as |item|}}
          <UlxSegment @customClass={{item.customClass}}>
            <p>
              <span class="semibold-font">{{item.label}}</span>
              —
              {{item.description}}
            </p>
          </UlxSegment>
        {{/each}}
      </div>

      <h3 class="mt-8 mb-4">Usage examples</h3>
      <div class="flex flex-col gap-5">
        {{#each this.usageExamples as |item|}}
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

            <UlxSegment @customClass={{item.customClass}}>
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
        {{/each}}
      </div>
    </div>
  </template>
}

`;
