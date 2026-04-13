export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import {
  UlxTable,
  UlxButton,
  UlxAvatar,
  UlxSplitButton,
  UlxTag,
  UlxIcon,
  UlxModal,
  UlxTieredmenu,
} from 'ulx-components';
import { fn, array, hash } from '@ember/helper';

const PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24,
    price: 65,
    status: 'INSTOCK',
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    price: 72,
    status: 'INSTOCK',
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    price: 79,
    status: 'LOWSTOCK',
  },
  {
    id: 4,
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    quantity: 25,
    price: 29,
    status: 'INSTOCK',
  },
  {
    id: 5,
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    quantity: 73,
    price: 15,
    status: 'INSTOCK',
  },
  {
    id: 6,
    code: 'mbvjkgc55',
    name: 'Brown Purse',
    category: 'Accessories',
    quantity: 0,
    price: 120,
    status: 'OUTOFSTOCK',
  },
];

const columns = [
  { field: 'code', header: 'Code', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price ($)', sortable: true },
  { field: 'status', header: 'Status', sortable: true },
];

export default class DemoTableCardView extends Component {
  products = PRODUCTS;
  columns = columns;

  @tracked cardViewColumns = 3;
  @tracked isExpandedViewVisible = false;
  @tracked isMenuVisible = false;
  buttonElement = null;
  menuRef = null;

  get items() {
    return [
      { label: 'Manage', icon: 'bs-icons1 edit-icon' },
      { label: 'Event Day', icon: 'bs-icons1 event-day-icon' },
      { label: 'Overview', icon: 'bs-icons1 dashboard-icon' },
      { label: 'Clone', icon: 'bs-icons1 copy-icon' },
      {
        label: 'Cancel',
        icon: 'bs-icons1 cancellation-policy-icon',
      },
      {
        label: 'Trash',
        icon: 'bs-icons1 delete-icon',
        linkClass: 'fg-red',
      },
    ];
  }

  @action
  setCardColumns(n) {
    this.cardViewColumns = n;
  }

  @action
  openExpandedView() {
    this.isExpandedViewVisible = true;
  }

  @action
  closeExpandedView() {
    this.isExpandedViewVisible = false;
  }

  @action
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  @action
  hideMenu() {
    this.isMenuVisible = false;
  }

  setButtonRef = modifier((element) => {
    this.buttonElement = element;
    return () => {};
  });

  @action
  setMenuRef(ref) {
    this.menuRef = ref;
  }

  @action
  handleItemSelect() {
    this.isMenuVisible = false;
  }

  <template>
    <UlxButton
      @label="Show Event Table"
      @variant="primary"
      @size="s-size"
      @icon="expand-icon"
      @iconComponentClass="bs-icons1"
      @iconSize="s14"
      {{on "click" this.openExpandedView}}
    />
    {{! Expand button }}

    <UlxModal
      @visible={{this.isExpandedViewVisible}}
      @title="Immersia Expo 2026"
      @size="huge-size"
      @onHide={{this.closeExpandedView}}
      @cancelButtonLabel="Close"
      @hideDoneButton={{true}}
    >
      <:body>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @showToggleViews={{true}}
          @defaultView="table"
          @cardViewColumns={{this.cardViewColumns}}
          @showGlobalFilter={{true}}
        >

          <:card>
            <div class="flex flex-col gap-0 cursor-pointer">
              <div class="relative w-full h-170 overflow-hidden">
                <img
                  src="/default-map.png"
                  alt="Event location map"
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-2 right-2">
                  <UlxTag @value="Hybrid" @variant="black" @size="xs-size" />
                </div>
              </div>

              <div class="p-4 flex flex-col gap-3">
                <div class="flex items-start gap-2">
                  <div class="flex-1">
                    <p class="text-h4 bold-font mb-1">Design Testing</p>
                    <div class="flex flex-col gap-1 text-13 fg-secondary">
                      <span class="flex items-center gap-1">
                        <UlxIcon
                          @iconName="calendar-icon"
                          @type="font"
                          @componentClass="bs-icons1"
                          @size="s14"
                          aria-hidden="true"
                        />
                        Mar 09, 2026 · 01:00 AM
                      </span>
                      <span class="flex items-center gap-1">
                        <UlxIcon
                          @iconName="location-icon"
                          @type="font"
                          @componentClass="bs-icons1"
                          @size="s14"
                          aria-hidden="true"
                        />
                        Location not added
                      </span>
                    </div>
                  </div>

                </div>

                <div class="flex items-center gap-1 text-13 fg-secondary">
                  <UlxIcon
                    @iconName="ticket-details-icon"
                    @type="font"
                    @componentClass="bs-icons1"
                    @size="s14"
                    aria-hidden="true"
                  />
                  <span>1 / 200</span>
                </div>

                <div class="flex items-center justify-between mt-1">
                  <div class="flex items-center gap-2 text-13 fg-secondary">
                    <UlxAvatar
                      @type="image"
                      @image="/attendee-1.png"
                      @shape="circle"
                      @size="xs-size"
                      aria-hidden="true"
                    />
                    <span>Last modified 2 days ago</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <UlxTag
                      @value="RUNNING"
                      @variant="running-color"
                      @size="xxs-size"
                    />
                    <UlxButton
                      @text={{true}}
                      @variant="primary"
                      @size="s-size"
                      @icon="kebeb-vertical-icon"
                      @iconComponentClass="bs-icons1"
                      @iconSize="s16"
                      {{on "click" this.toggleMenu}}
                      {{this.setButtonRef}}
                      aria-haspopup="menu"
                      aria-expanded={{this.isMenuVisible}}
                      aria-controls="tieredmenu-popup"
                    />
                    <UlxTieredmenu
                      id="tieredmenu-popup"
                      @items={{this.items}}
                      @popup={{true}}
                      @visible={{this.isMenuVisible}}
                      @target={{this.buttonElement}}
                      @onHide={{this.hideMenu}}
                      @registerRef={{this.setMenuRef}}
                      @onItemSelect={{this.handleItemSelect}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </:card>

          <:detailed>
            <div class="flex gap-4">
              <div class="col-3">
                <div class="relative w-252 h-172 rounded-md overflow-hidden">
                  <img
                    src="/default-map.png"
                    alt="Event location map"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute bottom-2 right-2">
                    <UlxTag
                      @value="In-Person"
                      @variant="black"
                      @size="xs-size"
                    />
                  </div>
                </div>
              </div>

              <div class="col-7">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-2">
                    <UlxButton
                      @variant="link"
                      @text={{true}}
                      @size="s-size"
                      @customClass="text-h4 bold-font"
                    >
                      Immersia Expo 2026
                    </UlxButton>
                    <UlxTag
                      @value="DRAFT"
                      @size="xs-size"
                      @variant="draft-color"
                      @rounded={{true}}
                    />
                  </div>

                  <div
                    class="flex flex-wrap items-center gap-3 text-13 fg-secondary"
                  >
                    <span class="flex items-center gap-1">
                      <UlxIcon
                        @iconName="calendar-icon"
                        @type="font"
                        @componentClass="bs-icons1"
                        @size="s14"
                        aria-hidden="true"
                      />
                      Apr 8 to 22, 2026
                    </span>
                    <span class="flex items-center gap-1">
                      <UlxIcon
                        @iconName="in-person-event-icon"
                        @type="font"
                        @componentClass="bs-icons1"
                        @size="s14"
                        aria-hidden="true"
                      />
                      In-Person Event
                    </span>
                    <span class="flex items-center gap-1">
                      <UlxIcon
                        @iconName="location-icon"
                        @type="font"
                        @componentClass="bs-icons1"
                        @size="s14"
                        aria-hidden="true"
                      />
                      Location not added
                    </span>
                  </div>

                  <div class="flex items-center gap-2 text-13 fg-secondary">
                    <UlxIcon
                      @iconName="brand-members-icon"
                      @type="font"
                      @componentClass="bs-icons1"
                      @size="s14"
                      aria-hidden="true"
                    />
                    <span>1 Organizers</span>
                  </div>

                  <div class="flex items-center gap-2 mt-2">
                    <UlxAvatar
                      @type="text"
                      @label="JR"
                      @shape="circle"
                      @size="xs-size"
                      @variant="blue"
                      aria-hidden="true"
                    />
                    <span class="text-13 fg-secondary">
                      Last modified 7 days ago
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-2 ms-auto">
                <div class="flex flex-col items-end gap-2">
                  <UlxSplitButton
                    @label="Manage"
                    @variant="secondary"
                    @outlined={{true}}
                    @size="s-size"
                    @menuCustomClass="with-separator"
                    @items={{array
                      (hash label="Event Day" icon="event-day-icon")
                      (hash label="Overview" icon="dashboard-icon")
                      (hash label="Clone" icon="copy-icon")
                      (hash label="Cancel" icon="cancellation-policy-icon")
                      (hash label="Trash" icon="delete-icon" linkClass="fg-red")
                    }}
                  />
                  <div class="flex gap-1 flex-wrap justify-end">
                    <UlxButton
                      @label="Preview"
                      @icon="preview-icon"
                      @iconComponentClass="bs-icons1"
                      @iconSize="s14"
                      @variant="primary"
                      @text={{true}}
                      @size="s-size"
                    />
                    <UlxButton
                      @label="View website"
                      @icon="website-icon"
                      @iconComponentClass="bs-icons1"
                      @iconSize="s14"
                      @variant="primary"
                      @text={{true}}
                      @size="s-size"
                    />
                  </div>
                </div>
              </div>
            </div>
          </:detailed>

          <:customOptions>
            <p class="text-sm fg-text-secondary">Card columns</p>
            <div class="uls-column gap-2">
              <button
                type="button"
                class="uls-button text s-size"
                {{on "click" (fn this.setCardColumns 2)}}
              >2 columns</button>
              <button
                type="button"
                class="uls-button text s-size"
                {{on "click" (fn this.setCardColumns 3)}}
              >3 columns</button>
              <button
                type="button"
                class="uls-button text s-size"
                {{on "click" (fn this.setCardColumns 4)}}
              >4 columns</button>
            </div>
          </:customOptions>
        </UlxTable>
      </:body>
    </UlxModal>
  </template>
}

`;
