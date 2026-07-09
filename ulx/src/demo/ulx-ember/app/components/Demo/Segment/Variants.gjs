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
        sampleText: 'Primary box with white text'
      },
      {
        customClass: 'color-primary-layer1',
        sampleText: 'Primary layer1 box with default text'
      },
      {
        customClass: 'color-primary-layer1 bordered',
        sampleText: 'Primary layer1 box with default text and border'
      },
      {
        customClass: 'color-primary-layer1 bordered fg-primary',
        sampleText: 'Primary layer1 box with primary text and border'
      },
      {
        customClass: 'color-primary-layer1 bordered marked fg-primary',
        sampleText: 'Marked box with primary text',
        useTag: true
      },
      {
        customClass: 'color-primary-layer1 bordered marked',
        sampleText: 'Marked box with default text',
        useTag: true
      }
    ];
  }

  get additionalColorContextVariants() {
    return [
      {
        customClass: 'color-primary-soft',
        sampleText: 'Alias for primary layer 1 surface'
      },
      {
        customClass: 'color-primary-layer2',
        sampleText: 'Primary layer 2 surface'
      },
      {
        customClass: 'color-primary-layer3',
        sampleText: 'Primary layer 3 surface'
      },
      {
        customClass: 'color-primary-layer4',
        sampleText: 'Primary layer 4 surface'
      },
      {
        customClass: 'primary-border-start',
        sampleText: 'Primary inline-start accent only'
      },
      {
        customClass: 'color-primary-layer1 primary-border-start',
        sampleText: 'Primary layer 1 with inline-start accent'
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
        <code>UlxSegment</code>. Surfaces are borderless by default; add
        <code>bordered</code>
        for an outline,
        <code>fg-primary</code>
        to override text color. Use
        <code>marked</code>
        on
        <code>UlxTag</code>
        for a leading accent dot paired with a
        <code>color-*</code>
        surface.</p>

      <div class="flex flex-col gap-3">
        {{#each this.colorContextVariants as |item|}}
          {{#if item.useTag}}
            <div>
              <UlxTag
                @value={{item.sampleText}}
                @size="m-size"
                @customClass={{item.customClass}}
              />
            </div>
          {{else}}
            <UlxSegment @customClass={{item.customClass}}>
              <p class="mb-0">{{item.sampleText}}</p>
            </UlxSegment>
          {{/if}}
        {{/each}}
      </div>

      <h3 class="mt-8 mb-4">Additional primary variants</h3>
      <div class="flex flex-col gap-3">
        {{#each this.additionalColorContextVariants as |item|}}
          <UlxSegment @customClass={{item.customClass}}>
            <p class="mb-0">{{item.sampleText}}</p>
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
