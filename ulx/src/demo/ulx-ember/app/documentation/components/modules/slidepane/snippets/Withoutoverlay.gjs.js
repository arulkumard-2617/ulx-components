export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton } from 'ulx-components';

export default class WithoutoverlayDemoComponent extends Component {
  @tracked showPane1 = false;
  @tracked showPane2 = false;
  @tracked showPane3 = false;

  @action
  openPane1() {
    this.showPane1 = true;
  }

  @action
  closePane1() {
    this.showPane1 = false;
  }

  @action
  openPane2() {
    this.showPane2 = true;
  }

  @action
  closePane2() {
    this.showPane2 = false;
  }

  @action
  openPane3() {
    this.showPane3 = true;
  }

  @action
  closePane3() {
    this.showPane3 = false;
  }

  <template>
    <div class="fxb fvc gp4 fw-wrap">
      <UlxButton
        @label="Show First"
        @variant="primary"
        {{on "click" this.openPane1}}
      />
      <UlxButton
        @label="Show Second"
        @variant="primary"
        {{on "click" this.openPane2}}
      />
      <UlxButton
        @label="Show Third"
        @variant="primary"
        {{on "click" this.openPane3}}
      />
    </div>

    <UlxSlidePane
      @visible={{this.showPane1}}
      @title="First Pane (No Overlay)"
      @onHide={{this.closePane1}}
      @overlay={{false}}
      @blockScroll={{false}}
      @closeOnBackdrop={{false}}
      @size="s-size"
      @position="right"
      @doneButtonLabel="Close"
      @onDone={{this.closePane1}}
      @onCancel={{this.closePane1}}
      @autoCloseOnCancel={{true}}
    >
      <:body>
        <p>This pane has <code>@overlay={{false}}</code>, <code>@blockScroll={{false}}</code> and <code>@closeOnBackdrop={{false}}</code>. Clicks pass through the dimmed area to the buttons behind; close via the pane button.</p>
      </:body>
    </UlxSlidePane>

    <UlxSlidePane
      @visible={{this.showPane2}}
      @title="Second Pane (No Overlay)"
      @onHide={{this.closePane2}}
      @overlay={{false}}
      @blockScroll={{false}}
      @closeOnBackdrop={{false}}
      @size="s-size"
      @position="right"
      @doneButtonLabel="Close"
      @onDone={{this.closePane2}}
      @onCancel={{this.closePane2}}
      @autoCloseOnCancel={{true}}
    >
      <:body>
        <p>Multiple non-blocking slide panes stack. You can open several and close each from its footer or header close button.</p>
      </:body>
    </UlxSlidePane>

    <UlxSlidePane
      @visible={{this.showPane3}}
      @title="Third Pane (No Overlay)"
      @onHide={{this.closePane3}}
      @overlay={{false}}
      @blockScroll={{false}}
      @closeOnBackdrop={{false}}
      @size="s-size"
      @position="right"
      @doneButtonLabel="Close"
      @onDone={{this.closePane3}}
      @onCancel={{this.closePane3}}
      @autoCloseOnCancel={{true}}
    >
      <:body>
        <p>Uses <code>@overlay={{false}}</code> so the mask does not block clicks; the page stays scrollable and you can interact with content behind the pane.</p>
      </:body>
    </UlxSlidePane>
  </template>
}

`;
