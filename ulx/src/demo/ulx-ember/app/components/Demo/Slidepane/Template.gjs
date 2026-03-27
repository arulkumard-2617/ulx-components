import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton } from 'ulx-components';

export default class TemplateDemoComponent extends Component {
  @tracked isVisible = false;

  @action
  openPane() {
    this.isVisible = true;
  }

  @action
  closePane() {
    this.isVisible = false;
  }

  @action
  onSearchClick() {
    // Example: trigger search (e.g. focus input or run search)
  }

  @action
  handleDone() {
    this.closePane();
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxButton
        @label="Open Slide Pane"
        @variant="primary"
        {{on "click" this.openPane}}
      />

      <UlxSlidePane
        @visible={{this.isVisible}}
        @position="right"
        @onHide={{this.closePane}}
        @onDone={{this.handleDone}}
        @onCancel={{this.closePane}}
        @autoCloseOnCancel={{true}}
      >
        <:head>
          <h2 class="slidepane-title" id="slidepane-title">
            Filters
          </h2>
          <div class="slidepane-header-icons">
            <UlxButton
              @icon="search-icon"
              @iconSize="s18"
              @iconComponentClass="bs-icons1"
              @variant="text"
              @text={{true}}
              aria-label="Search"
              {{on "click" this.onSearchClick}}
            />
            <UlxButton
              @icon="close-icon-01"
              @iconComponentClass="bs-icons1"
              @variant="text"
              @iconSize="s18"
              @text={{true}}
              aria-label="Close"
              {{on "click" this.closePane}}
            />
          </div>
        </:head>

        <:body>
          <p>Use the header search icon to filter, or edit this body content.
            This pane uses custom header, body, and footer blocks.</p>
          <ul class="ulx-list">
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ul>
        </:body>

        <:footer>
          <UlxButton
            @label="Cancel"
            @variant="secondary"
            {{on "click" this.closePane}}
          />
          <UlxButton
            @label="Apply"
            @variant="primary"
            {{on "click" this.handleDone}}
          />
        </:footer>
      </UlxSlidePane>
    </div>
  </template>
}
