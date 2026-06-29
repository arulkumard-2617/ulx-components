export default `
import Component from '@glimmer/component';
import {
  UlxCard,
  UlxButton,
  UlxTag,
  UlxIcon,
  UlxAvatar,
  UlxIconButton
} from 'ulx-components';

export default class SessionCardTemplate extends Component {
  get sessions() {
    return [
      {
        id: 'ui-design-1',
        title: 'UI Design',
        date: 'May 28, 2026',
        time: '07:30 AM - 08:15 AM',
        location: 'hall 3',
        track: 'Track 1',
        trackStyle:
          '--lt-track-bg-color: color-mix(in srgb, #8B5CF6 20%, white); --track-bg-color: #8B5CF6',
        speakers: [
          { label: 'AS', variant: 'orange' },
          { label: 'BA', variant: 'purple' }
        ],
        actions: [
          { label: 'Bookmarked (0)' },
          { label: 'Materials (0)' },
          { label: 'Handouts (0)' },
          { label: 'Polls', icon: 'polls-icon' }
        ]
      },
      {
        id: 'registration',
        title: 'Registration & Welcome Tea',
        date: 'May 28, 2026',
        time: '07:30 AM - 08:15 AM',
        location: 'TBA',
        track: 'Track 2',
        trackStyle:
          '--lt-track-bg-color: color-mix(in srgb, #EC4899 20%, white); --track-bg-color: #EC4899',
        speakerLabel: 'Speaker to be announced',
        actions: [
          { label: 'Participants (0)' },
          { label: 'Bookmarked (0)' },
          { label: 'Materials (0)' },
          { label: 'Handouts (0)' },
          { label: 'Polls', icon: 'polls-icon' }
        ]
      },
      {
        id: 'networking',
        title: 'Networking',
        date: 'May 28, 2026',
        time: '07:30 AM - 08:15 AM',
        location: 'TBA',
        track: 'Track 2',
        trackStyle:
          '--lt-track-bg-color: color-mix(in srgb, #EC4899 20%, white); --track-bg-color: #EC4899',
        speakerLabel: 'Speaker to be announced',
        actions: [
          { label: 'Bookmarked (0)' },
          { label: 'Materials (0)' },
          { label: 'Handouts (0)' },
          { label: 'Polls', icon: 'polls-icon' }
        ]
      },
      {
        id: 'ui-design-2',
        title: 'UI Design',
        date: 'May 28, 2026',
        time: '07:30 AM - 08:15 AM',
        location: 'TBA',
        track: 'Track 1',
        trackStyle:
          '--lt-track-bg-color: color-mix(in srgb, #8B5CF6 20%, white); --track-bg-color: #8B5CF6',
        speakerLabel: 'Speaker to be announced',
        actions: [
          { label: 'Bookmarked (0)' },
          { label: 'Materials (0)' },
          { label: 'Handouts (0)' },
          { label: 'Polls', icon: 'polls-icon' }
        ]
      }
    ];
  }

  <template>
    <div class="flex flex-col gap-5">
      {{#each this.sessions key="id" as |session|}}
        <UlxCard @appearance="outlined" @size="s-size">
          <:content>
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between gap-4">
                <h5 class="bold-font">{{session.title}}</h5>
                <UlxButton
                  @label="View Details"
                  @variant="primary"
                  @size="s-size"
                />
              </div>

              <div class="flex flex-col gap-3">
                <div
                  class="flex flex-wrap items-center gap-6 text-13 fg-secondary"
                >
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="calendar-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    {{session.date}}
                  </span>
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="time-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    {{session.time}}
                  </span>
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="location-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    {{session.location}}
                  </span>
                </div>

                <UlxTag
                  @value={{session.track}}
                  @variant="lt-track-label"
                  @type="pill"
                  @size="xxs-size"
                  @customClass="self-start"
                  style={{session.trackStyle}}
                />
              </div>

              <div class="flex items-center justify-between gap-4 flex-wrap">
                <div class="flex items-center gap-2 text-13 fg-secondary">
                  {{#if session.speakers}}
                    <span>Speakers</span>
                    {{#each session.speakers key="label" as |speaker|}}
                      <UlxAvatar
                        @type="text"
                        @label={{speaker.label}}
                        @variant={{speaker.variant}}
                        @shape="circle"
                        @size="xs-size"
                        aria-hidden="true"
                      />
                    {{/each}}
                  {{else}}
                    <span>{{session.speakerLabel}}</span>
                  {{/if}}
                </div>

                <div class="flex items-center gap-2 text-13 flex-wrap">
                  {{#each session.actions as |action index|}}
                    {{#if index}}
                      <span class="fg-secondary" aria-hidden="true">|</span>
                    {{/if}}
                    <UlxIconButton
                      @label={{action.label}}
                      @variant="link on-hover"
                      @size="s-size"
                      @iconRight={{action.icon}}
                      @iconComponentClass="bs-icons1"
                      @iconSize="s14"
                    />
                  {{/each}}
                </div>
              </div>
            </div>
          </:content>
        </UlxCard>
      {{/each}}
    </div>
  </template>
}

`;
