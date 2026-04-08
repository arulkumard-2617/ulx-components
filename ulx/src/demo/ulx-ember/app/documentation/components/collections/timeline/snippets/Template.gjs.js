export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { eq } from 'ember-truth-helpers';
import { fn } from '@ember/helper';
import {
  UlxTimeline,
  UlxAccordion,
  UlxTag,
  UlxIcon,
  UlxButton,
} from 'ulx-components';

export default class TemplateTimelineDemo extends Component {
  /** Only one timeline row accordion open at a time; each accordion has a single tab (index 0). */
  @tracked openRowId = 'v4';

  get versions() {
    return [
      {
        id: 'v4',
        state: 'completed',
        accordionItems: [
          {
            header: 'March 6, 2026',
            dateTitle: 'March 6, 2026',
            version: 'v4.0',
            live: true,
            meta: '09:41 AM · 4 changes',
            changes: [
              { title: 'Page Design', detail: '5 pages updated' },
              { title: 'Navigation', detail: 'Bottom nav & header' },
              { title: 'App Assets', detail: 'Branding & colours' },
              { title: 'Speakers Page', detail: 'Featured & all speakers' },
            ],
          },
        ],
      },
      {
        id: 'v3',
        state: 'upcoming',
        accordionItems: [
          {
            header: 'March 4, 2026',
            dateTitle: 'March 4, 2026',
            version: 'v3.0',
            live: false,
            meta: '02:22 PM · 3 changes',
            changes: [
              { title: 'Registration', detail: 'Form & validation' },
              { title: 'Schedule', detail: 'Session grid' },
              { title: 'Notifications', detail: 'Email templates' },
            ],
          },
        ],
      },
      {
        id: 'v2',
        state: 'upcoming',
        accordionItems: [
          {
            header: 'February 28, 2026',
            dateTitle: 'February 28, 2026',
            version: 'v2.0',
            live: false,
            meta: '11:05 AM · 2 changes',
            changes: [
              { title: 'Homepage', detail: 'Hero & CTA' },
              { title: 'Analytics', detail: 'Event tracking' },
            ],
          },
        ],
      },
      {
        id: 'v1',
        state: 'upcoming',
        accordionItems: [
          {
            header: 'February 20, 2026',
            dateTitle: 'February 20, 2026',
            version: 'v1.0',
            live: false,
            meta: '04:30 PM · 2 changes',
            changes: [
              { title: 'App Details', detail: 'Initial publish' },
              { title: 'App Assets', detail: 'Brand colours set' },
            ],
          },
        ],
      },
    ];
  }

  @action
  handleTimelineAccordionChange(rowId, { index }) {
    if (index === null || index === undefined) {
      this.openRowId === rowId && (this.openRowId = null);
    } else {
      this.openRowId = rowId;
    }
  }

  <template>
    <div class="w-full max-w-500">
      <UlxTimeline
        @items={{this.versions}}
        @customClass="state-tracker"
        @dataKey="id"
      >
        <:content as |row|>
          <UlxAccordion
            @variant="outlined"
            @toggleIconPosition="right"
            @items={{row.accordionItems}}
            @activeIndex={{if (eq row.id this.openRowId) 0 null}}
            @onTabChange={{fn this.handleTimelineAccordionChange row.id}}
          >
            <:header as |item|>
              <div class="flex flex-col gap-2 w-full min-w-0">
                <div class="flex flex-wrap gap-2 align-center">
                  <UlxTag
                    @value={{item.version}}
                    @variant="lt-primary"
                    @size="xs-size"
                    @type="pill"
                  />
                  {{#if item.live}}
                    <UlxTag @value="LIVE" @variant="lt-green" @size="xs-size" />
                  {{/if}}
                </div>
                <div class="flex flex-col gap-1">
                  <div class="medium-font m-0">{{item.dateTitle}}</div>
                  <div class="text-12 fg-secondary">{{item.meta}}</div>
                </div>
              </div>
            </:header>
            <:content as |item|>
              <div class="flex flex-col gap-3">
                <ul
                  class="m-0 flex flex-col gap-3 list-none border-default border-t pt-3"
                >
                  {{#each item.changes as |ch|}}
                    <li class="flex gap-3">
                      <span class="flex center-all shrink-0" aria-hidden="true">
                        <UlxIcon
                          @type="font"
                          @iconName="ls-tick-filled-icon"
                          @componentClass="bs-icons1"
                          @size="s18"
                          @customClass="fg-primary"
                        />
                      </span>
                      <div class="flex gap-1 min-w-0">
                        <span class="medium-font text-13">{{ch.title}}</span>
                        <span class="text-13 fg-secondary">-
                          {{ch.detail}}</span>
                      </div>
                    </li>
                  {{/each}}
                </ul>
                {{#unless (eq row.id "v4")}}
                  <UlxButton
                    @label="Restore & Publish This Version"
                    @variant="secondary"
                    @fluid={{true}}
                    @size="s-size"
                    @customClass="flex justify-start text-start"
                  >
                    <:prefix>
                      <UlxIcon
                        @type="font"
                        @iconName="change-icon"
                        @componentClass="bs-icons1"
                        @size="s18"
                        aria-hidden="true"
                      />
                    </:prefix>
                  </UlxButton>
                {{/unless}}
              </div>
            </:content>
          </UlxAccordion>
        </:content>
      </UlxTimeline>
    </div>
  </template>
}

`;
