import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxIconButton } from 'ulx-components';

export default class WithBadgeAnnouncementDemo extends Component {
  @tracked isVisible = true;

  @action
  dismiss() {
    this.isVisible = false;
  }

  <template>
    <div
      class="ulx-message with-badge announcement enter-done"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="message-badge message-badge-shimmer">
        <div class="relative">
          <div class="ulx-sparkles white">
            <span class="bs-icons1 sparkle-icon" aria-hidden="true"></span>
            <span
              class="bs-icons1 sparkle-icon spark2"
              aria-hidden="true"
            ></span>
            <span
              class="bs-icons1 sparkle-icon spark3"
              aria-hidden="true"
            ></span>
          </div>
          <span class="badge-label">New Feature</span>
        </div>
      </div>
      <div
        class="message-content flex justify-between gap-3 items-center wt100p"
      >
        <div>
          <span class="bold-font">Contact Segments:</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

      </div>
    </div>
  </template>
}
