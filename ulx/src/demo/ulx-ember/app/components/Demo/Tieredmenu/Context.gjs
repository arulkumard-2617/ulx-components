/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxTieredmenu, UlxButton } from 'ulx-components';

export default class ContextTieredmenuDemo extends Component {
  @tracked isMenuVisible = false;
  @tracked triggerElement = null;
  @tracked menuContext = 'body';
  @tracked menuBoundary = 'window';
  @tracked menuScrollContext = 'window';
  @tracked scrollHostElement = null;
  menuRef = null;

  get items() {
    return [
      {
        label: 'File',
        icon: 'bs-icons1 pdf-stroke-icon',
        items: [
          {
            label: 'New',
            icon: 'bs-icons1 add-icon-01',
            items: [
              { label: 'Project', icon: 'bs-icons1 library-icon' },
              { label: 'File', icon: 'bs-icons1 pdf-stroke-icon' },
              { label: 'From Template', icon: 'bs-icons1 copy-icon' }
            ]
          },
          { label: 'Open', icon: 'bs-icons1 library-icon' },
          { separator: true },
          { label: 'Exit', icon: 'bs-icons1 close-icon-01' }
        ]
      },
      {
        label: 'Edit',
        icon: 'bs-icons1 edit-icon',
        items: [
          { label: 'Undo', icon: 'bs-icons1 undo-icon' },
          { label: 'Redo', icon: 'bs-icons1 update-icon' }
        ]
      },
      {
        label: 'Help',
        icon: 'bs-icons1 question-icon',
        command: () => console.log('Help clicked')
      }
    ];
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
  setMenuRef(ref) {
    this.menuRef = ref;
  }

  @action
  openMenu(context, boundary, scrollContext, event) {
    const target = event?.currentTarget ?? this.triggerElement;
    const isSameMenuTarget =
      this.isMenuVisible &&
      target === this.triggerElement &&
      context === this.menuContext &&
      boundary === this.menuBoundary &&
      scrollContext === this.menuScrollContext;

    if (isSameMenuTarget) {
      this.menuRef?.hide();
      return;
    }

    event?.stopPropagation?.();
    this.triggerElement = target;
    this.menuContext = context;
    this.menuBoundary = boundary;
    this.menuScrollContext = scrollContext;
    this.isMenuVisible = true;
    this.menuRef?.show?.(event);
  }

  @action
  hideMenu() {
    this.isMenuVisible = false;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="ulx-form m-size flex flex-col gap-8 mb-14">
      <div class="ulx-grid gap-8">
        <div class="col-4 flex flex-col gap-3">
          <div class="text-13 bold-font">{{"Context: self"}}</div>
          <UlxButton
            @label="Open menu"
            @variant="secondary"
            aria-haspopup="menu"
            aria-expanded={{this.isMenuVisible}}
            {{on "click" (fn this.openMenu "self" "window" "window")}}
          />
        </div>

        <div class="col-4 flex flex-col gap-3">
          <div class="text-13 bold-font">{{"Context: body"}}</div>
          <UlxButton
            @label="Open menu"
            @variant="primary"
            aria-haspopup="menu"
            aria-expanded={{this.isMenuVisible}}
            {{on "click" (fn this.openMenu "body" "window" "window")}}
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="text-13 fg-secondary">
          {{"Open the menu inside this scrollable container, then scroll to see @scrollContext keep it aligned while it stays open."}}
        </div>

        <div
          class="h-252 overflow-auto border rounded p-4"
          {{this.scrollHostRef}}
        >
          <div class="flex flex-col gap-8">
            <div class="h-170"></div>

            <div class="flex">
              <UlxButton
                @label="Boundary and scrollContext"
                @variant="secondary"
                aria-haspopup="menu"
                aria-expanded={{this.isMenuVisible}}
                {{on
                  "click"
                  (fn
                    this.openMenu
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

      <UlxTieredmenu
        @items={{this.items}}
        @popup={{true}}
        @visible={{this.isMenuVisible}}
        @target={{this.triggerElement}}
        @context={{this.menuContext}}
        @boundary={{this.menuBoundary}}
        @scrollContext={{this.menuScrollContext}}
        @onHide={{this.hideMenu}}
        @registerRef={{this.setMenuRef}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}
