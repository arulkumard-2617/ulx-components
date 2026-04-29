import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxPopup, UlxButton, t } from 'ulx-components';

export default class BasicPopupDemo extends Component {
  @tracked isPopupVisible = false;
  @tracked triggerElement = null;
  @tracked popupContext = 'body';
  @tracked popupBoundary = 'window';
  @tracked popupScrollContext = 'window';
  @tracked scrollHostElement = null;
  popupRef = null;

  get currentContextLabel() {
    if (this.popupContext === 'self') {
      return 'Context: self';
    }

    if (this.popupContext === 'body') {
      return 'Context: body';
    }

    return 'Boundary and scrollContext';
  }

  get currentDescription() {
    if (this.popupContext === this.scrollHostElement) {
      return 'Open the popup inside this scrollable container, then scroll to see @scrollContext keep it aligned while it stays open.';
    }

    return 'Use @context to choose where the popup is rendered. You can keep it inline with the trigger or portal it to the document body.';
  }

  scrollHostRef = modifier((element) => {
    this.scrollHostElement = element;

    return () => {
      if (this.scrollHostElement === element) {
        this.scrollHostElement = null;
      }
    };
  });

  @action
  setPopupRef(ref) {
    this.popupRef = ref;
  }

  @action
  openPopup(context, boundary, scrollContext, event) {
    const target = event?.currentTarget ?? this.triggerElement;
    const isSamePopupTarget =
      this.isPopupVisible &&
      target === this.triggerElement &&
      context === this.popupContext &&
      boundary === this.popupBoundary &&
      scrollContext === this.popupScrollContext;

    if (isSamePopupTarget) {
      this.popupRef?.hide();
      return;
    }

    this.triggerElement = target;
    this.popupContext = context;
    this.popupBoundary = boundary;
    this.popupScrollContext = scrollContext;
    this.isPopupVisible = true;
  }

  @action
  closePopup() {
    this.popupRef?.hide();
  }

  @action
  handlePopupHide() {
    this.isPopupVisible = false;
  }

  @action
  handleTriggerKeyDown(context, boundary, scrollContext, event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openPopup(context, boundary, scrollContext, event);
    }
  }

  <template>
    <div class="ulx-form m-size flex flex-col gap-8 mb-14">
      <div class="ulx-grid gap-8">
        <div class="col-4 flex flex-col gap-3">
          <div class="text-13 bold-font">{{"Context: self"}}</div>
          <UlxButton
            @label="Open popup"
            @variant="secondary"
            aria-haspopup="dialog"
            aria-expanded="{{this.isPopupVisible}}"
            {{on "click" (fn this.openPopup "self" "window" "window")}}
            {{on
              "keydown"
              (fn this.handleTriggerKeyDown "self" "window" "window")
            }}
          />
        </div>

        <div class="col-4 flex flex-col gap-3">
          <div class="text-13 bold-font">{{"Context: body"}}</div>
          <UlxButton
            @label="Open popup"
            @variant="primary"
            aria-haspopup="dialog"
            aria-expanded="{{this.isPopupVisible}}"
            {{on "click" (fn this.openPopup "body" "window" "window")}}
            {{on
              "keydown"
              (fn this.handleTriggerKeyDown "body" "window" "window")
            }}
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="text-13 fg-secondary">
          {{"Open the popup inside this scrollable container, then scroll to see @scrollContext keep it aligned while it stays open."}}
        </div>

        <div
          class="h-170 overflow-auto border rounded p-4"
          {{this.scrollHostRef}}
        >
          <div class="flex flex-col gap-8">
            <div class="h-170"></div>

            <div class="flex">
              <UlxButton
                @label="Boundary and scrollContext"
                @variant="secondary"
                aria-haspopup="dialog"
                aria-expanded="{{this.isPopupVisible}}"
                {{on
                  "click"
                  (fn
                    this.openPopup
                    this.scrollHostElement
                    this.scrollHostElement
                    this.scrollHostElement
                  )
                }}
                {{on
                  "keydown"
                  (fn
                    this.handleTriggerKeyDown
                    this.scrollHostElement
                    this.scrollHostElement
                    this.scrollHostElement
                  )
                }}
              />
            </div>

            <div class="h-170"></div>
          </div>
        </div>
      </div>

      <UlxPopup
        @visible={{this.isPopupVisible}}
        @target={{this.triggerElement}}
        @context={{this.popupContext}}
        @boundary={{this.popupBoundary}}
        @scrollContext={{this.popupScrollContext}}
        @position="position-bottom"
        @size="m-size"
        @variant="elevated"
        @dismissable={{true}}
        @closeOnEscape={{true}}
        @ariaLabel="Popup"
        @title="Popup"
        @onHide={{this.handlePopupHide}}
        @registerRef={{this.setPopupRef}}
        @cancelButtonLabel={{t "lbl.cancel"}}
        @doneButtonLabel={{t "lbl.save"}}
        @onCancel={{this.closePopup}}
        @onDone={{this.closePopup}}
      >
        <:body>
          <div class="flex flex-col gap-3">
            <p class="mb-0">
              <span class="bold-font">{{"Selected:"}}</span>
              {{this.currentContextLabel}}
            </p>
            <p class="mb-0">
              {{this.currentDescription}}
            </p>
          </div>
        </:body>
      </UlxPopup>
    </div>
  </template>
}
