export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxTabmenu,
  UlxCard,
  UlxButton,
  UlxTag,
  UlxIcon,
  UlxAvatar,
  UlxModal,
  UlxDivider
} from 'ulx-components';

export default class PageViewTemplate extends Component {
  @tracked activeIndex = 0;
  @tracked isModalVisible = false;

  get navItems() {
    return [
      { label: 'Summary' },
      { label: 'Recordings' },
      { label: 'Polls' },
      { label: 'Materials' },
      { label: 'Handouts' },
      { label: 'Participants' },
      { label: 'Questions' },
      { label: 'Feedback' },
      { label: 'Chat' }
    ];
  }

  @action
  handleTabChange(event) {
    this.activeIndex = event.index;
  }

  @action
  openModal() {
    this.isModalVisible = true;
  }

  @action
  closeModal() {
    this.isModalVisible = false;
  }

  <template>
    <div class="h-400 overflow-hidden border-radius-md">
      <div class="ulx-page h-full">
        <aside class="page-left-panel expanded" aria-label="Session navigation">
          <UlxTabmenu
            @items={{this.navItems}}
            @activeIndex={{this.activeIndex}}
            @onTabChange={{this.handleTabChange}}
            @variant="vertical"
            @customClass="bordered"
            @tabId="page-view-nav"
            @ariaLabel="Session section navigation"
          />
        </aside>

        <main class="page-content-panel">
          <div class="flex items-center justify-between gap-4 mb-4">
            <h4 class="bold-font m-0">Summary</h4>
            <UlxButton
              @label="Open Full View"
              @variant="primary"
              @size="s-size"
              {{on "click" this.openModal}}
            />
          </div>

          <UlxCard @appearance="outlined" @size="s-size">
            <:content>
              <div class="flex flex-col gap-4">
                <h5 class="bold-font m-0">UI Design</h5>

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
                    May 28, 2026
                  </span>
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="time-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    07:30 AM - 08:15 AM
                  </span>
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="location-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    hall 3
                  </span>
                </div>

                <UlxTag
                  @value="Track 1"
                  @variant="lt-track-label"
                  @type="pill"
                  @size="xxs-size"
                  @customClass="self-start"
                />

                <div class="flex items-center gap-2 text-13 fg-secondary">
                  <span>Speakers</span>
                  <UlxAvatar
                    @type="text"
                    @label="AS"
                    @variant="orange"
                    @shape="circle"
                    @size="xs-size"
                    aria-hidden="true"
                  />
                  <UlxAvatar
                    @type="text"
                    @label="BA"
                    @variant="purple"
                    @shape="circle"
                    @size="xs-size"
                    aria-hidden="true"
                  />
                </div>

                <UlxDivider />

                <p class="text-13 fg-secondary m-0">No Description</p>
              </div>
            </:content>
          </UlxCard>
        </main>
      </div>
    </div>

    <UlxModal
      @visible={{this.isModalVisible}}
      @maximized={{true}}
      @scrollable={{true}}
      @onHide={{this.closeModal}}
      @hideFooter={{true}}
      @size="maximized"
      @contentClassName="p-0"
    >
      <div class="ulx-page h-full">
        <div class="page-left-panel expanded">
          <UlxTabmenu
            @items={{this.navItems}}
            @activeIndex={{this.activeIndex}}
            @onTabChange={{this.handleTabChange}}
            @variant="vertical"
            @customClass="bordered"
            @tabId="page-view-modal-nav"
            @ariaLabel="Session section navigation"
          />
        </div>

        <div class="page-content-panel">
          <h4 class="bold-font m-0 mb-4">Summary</h4>

          <UlxCard @appearance="outlined" @size="s-size">
            <:content>
              <div class="flex flex-col gap-4">
                <h5 class="bold-font m-0">UI Design</h5>

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
                    May 28, 2026
                  </span>
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="time-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    07:30 AM - 08:15 AM
                  </span>
                  <span class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="location-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    hall 3
                  </span>
                </div>

                <UlxTag
                  @value="Track 1"
                  @variant="lt-track-label"
                  @type="pill"
                  @size="xxs-size"
                  @customClass="self-start"
                />

                <div class="flex items-center gap-2 text-13 fg-secondary">
                  <span>Speakers</span>
                  <UlxAvatar
                    @type="text"
                    @label="AS"
                    @variant="orange"
                    @shape="circle"
                    @size="xs-size"
                    aria-hidden="true"
                  />
                  <UlxAvatar
                    @type="text"
                    @label="BA"
                    @variant="purple"
                    @shape="circle"
                    @size="xs-size"
                    aria-hidden="true"
                  />
                </div>

                <UlxDivider />

                <p class="text-13 fg-secondary m-0">No Description</p>
              </div>
            </:content>
          </UlxCard>
        </div>
      </div>
    </UlxModal>
  </template>
}

`;
