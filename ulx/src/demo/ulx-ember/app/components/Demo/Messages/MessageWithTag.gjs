import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxBannerMessage,
  UlxButton,
  UlxCard,
  UlxIcon,
  UlxIconButton,
  UlxImage,
  UlxModal,
  UlxTag
} from 'ulx-components';

const DEFAULT_MESSAGE = {
  id: 'abstract-management',
  variant: 'primary',
  closable: true
};

export default class MessageWithTagDemo extends Component {
  @tracked isModalVisible = false;
  @tracked message = { ...DEFAULT_MESSAGE };

  @action
  openModal() {
    this.message = { ...DEFAULT_MESSAGE };
    this.isModalVisible = true;
  }

  @action
  closeModal() {
    this.isModalVisible = false;
  }

  @action
  removeMessage(_message) {
    this.message = null;
  }

  <template>
    <UlxButton
      @label="Show Full View"
      @variant="primary"
      @size="s-size"
      {{on "click" this.openModal}}
    />

    <div>
      <UlxImage
        @src="/abstract-state-banner.png"
        @alt=""
        @objectFit="contain"
        @customClass="img-size-100 mt-5"
      />
    </div>

    <UlxModal
      @visible={{this.isModalVisible}}
      @scrollable={{true}}
      @onHide={{this.closeModal}}
      @hideFooter={{true}}
      @hideHeader={{true}}
      @closeOnBackdrop={{true}}
      @size="big-size"
      @contentClassName="p-0"
    >
      <div class="flex flex-col h-full">
        <div class="relative shrink-0 p-3">

          <UlxBannerMessage
            @message={{this.message}}
            @onRemove={{this.removeMessage}}
            @size="xl-size"
            @customClass="overflow-hidden"
          >
            <:leftItem>
              <div>
                <div class="message-corner-tag">
                  <UlxTag
                    @value="New Feature"
                    @variant="running-color"
                    @customClass="with-star corner-tag"
                    @size="xxs-size"
                  />
                </div>
                <span class="message-icon w-280" aria-hidden="true">
                  <UlxImage
                    @src="/Welcome.svg"
                    @alt=""
                    @objectFit="contain"
                    @customClass="img-size-75"
                  />
                </span>
              </div>
            </:leftItem>

            <:content>
              <div class="flex items-center gap-4 p-3">
                <div class="flex flex-col gap-3">
                  <div class="message-text p-0">
                    <h4 class="message-summary">
                      Abstract Management is Now
                      <span class="fg-primary bold-font">Live!</span>
                    </h4>
                    <span class="text-sm leading-none">
                      Manage abstracts effortlessly, from submission to session.
                      Customize forms, streamline reviews, and convert approved
                      abstracts into sessions with ease, all in one seamless
                      workflow.
                    </span>
                  </div>

                  <div class="flex flex-wrap gap-3">
                    <UlxButton
                      @label="Purchase Credits"
                      @variant="primary"
                      @size="s-size"
                    />
                    <UlxButton
                      @label="Learn More"
                      @variant="basic"
                      @size="s-size"
                    />
                  </div>
                </div>

                <div class="shrink-0 w-300">
                  <UlxCard @appearance="gradient primary" @size="s-size">
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center gap-1">
                        <UlxIcon
                          @type="font"
                          @iconName="credit-based-usage-icon_-1"
                          @customClass="fg-primary"
                          @size="s20"
                          aria-hidden="true"
                        />
                        <span class="bold-font text-14">Credit-based usage</span>
                      </div>
                      <div class="ms-5">
                        <ul class="ulx-list flex flex-col gap-3">
                          <li class="flex items-start gap-2">
                            <UlxIcon
                              @type="font"
                              @iconName="ls-tick-icon"
                              @customClass="icon-layer primary-layer2 circle p-2"
                              aria-hidden="true"
                            />
                            <span class="text-12 leading-tight">
                              One credit will be consumed per Abstract
                              Submission
                            </span>
                          </li>
                          <li class="flex items-start gap-2">
                            <UlxIcon
                              @type="font"
                              @iconName="ls-tick-icon"
                              @customClass="icon-layer primary-layer2 circle p-2"
                              aria-hidden="true"
                            />
                            <span class="text-12 leading-tight">
                              Purchase credits as needed
                            </span>
                          </li>
                        </ul>

                        <div class="mt-4">
                          <UlxIconButton
                            @label="View Pricing"
                            @variant="link on-hover"
                            @iconRight="ls-arrow-icon"
                            @size="s-size"
                          />
                        </div>
                      </div>
                    </div>
                  </UlxCard>
                </div>
              </div>
            </:content>
          </UlxBannerMessage>
        </div>
      </div>
    </UlxModal>
  </template>
}
