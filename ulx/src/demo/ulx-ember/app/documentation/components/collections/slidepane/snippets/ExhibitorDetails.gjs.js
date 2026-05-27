export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import {
  UlxSlidePane,
  UlxButton,
  UlxIconButton,
  UlxTabmenu,
  UlxIcon,
  UlxImage,
  UlxChip,
  UlxTieredmenu,
  UlxSlider,
  UlxRating
} from 'ulx-components';

const ACTION_OPTIONS = [
  { label: 'View Sent Emails', value: 'view-emails' },
  { label: 'Update Benefits', value: 'update-benefits' },
  { label: 'Delete Exhibitor', value: 'delete' }
];

export default class ExhibitorDetailsSlidepaneDemo extends Component {
  @tracked isVisible = false;
  @tracked activeNavIndex = 0;
  @tracked actionValue = null;
  @tracked ratingValue = 40;
  @tracked starRating = 3;
  @tracked isActionMenuVisible = false;
  @tracked actionButtonElement = null;

  actionMenuRef = null;

  get navItems() {
    return [
      { label: 'Exhibitor Details' },
      { label: 'Contact Details' },
      { label: 'Billing Information' },
      { label: 'Manage Booth' },
      { label: 'Orders' },
      { label: 'Notes' },
      { label: 'Exhibitor Profile' },
      { label: 'Activities' }
    ];
  }

  get detailFields() {
    return [
      { label: 'Company Name', value: 'Zoho Corporation' },
      { label: 'Company Website URL', value: 'https://www.zoho.com' },
      { label: 'First Name', value: 'Rohit' },
      { label: 'Last Name', value: 'Mehra' },
      { label: 'Clothing Size', value: 'Medium' },
      { label: 'Designation', value: 'Regional Sales Manager' },
      { label: 'URL', value: 'www.dyson.com' },
      { label: 'Meals', value: 'Glutten Free' },
      { label: 'Referral', value: 'Zylker Corporation' },
      { label: 'Company', value: 'Dyson Technologies India Pvt.Ltd.' },
      { label: 'Phone Number', value: '+91-8832425458' },
      { label: 'Email', value: 'rohit.mehra@dyson.in' },
      { label: 'Dropdown', value: 'Premium Visibility' },
      { label: 'Time', value: '10:00 AM' },
      { label: 'Single Choice', value: 'Option 2' },
      { label: 'Meals', value: 'Option 1' },
      { label: 'Date', value: 'December 12, 2024' },
      { label: 'Number', value: '32' }
    ];
  }

  get tagChips() {
    return [
      { id: 'event', label: 'Event' },
      { id: 'tech', label: 'Tech' }
    ];
  }

  get actionMenuItems() {
    return ACTION_OPTIONS.map((option) => ({
      label: option.label,
      command: () => this.handleActionSelect(option)
    }));
  }

  setActionButtonRef = modifier((element) => {
    this.actionButtonElement = element;
    return () => {};
  });

  @action
  openPane() {
    this.isVisible = true;
  }

  @action
  closePane() {
    this.isVisible = false;
  }

  @action
  handleNavChange(event) {
    this.activeNavIndex = event.index;
  }

  @action
  handleActionSelect(option) {
    this.actionValue = option.value;
  }

  @action
  setActionMenuRef(componentInstance) {
    this.actionMenuRef = componentInstance;
  }

  @action
  toggleActionMenu(event) {
    event?.stopPropagation();

    if (this.isActionMenuVisible) {
      this.actionMenuRef?.hide(event);
      return;
    }

    this.isActionMenuVisible = true;
    this.actionMenuRef?.show?.(event);
  }

  @action
  hideActionMenu() {
    this.isActionMenuVisible = false;
  }

  @action
  handleActionItemSelect(_item) {
    void _item;
  }

  @action
  handleRatingSliderChange(value) {
    this.ratingValue = Number(value);
  }

  @action
  handleStarRatingChange(value) {
    this.starRating = value;
  }

  <template>
    <UlxButton
      @label="Open Exhibitor Details"
      @variant="primary"
      {{on "click" this.openPane}}
    />

    <UlxSlidePane
      @visible={{this.isVisible}}
      @position="right"
      @size="xxl-size"
      @onHide={{this.closePane}}
      @hideFooter={{true}}
      @contentClassName="p-0"
    >
      <:head>
        <h5 class="slidepane-title" id="exhibitor-slidepane-title">
          Mc Donald's - Exhibitor Details
        </h5>
        <div class="slidepane-header-icons flex items-center gap-3">
          <UlxIconButton
            @label="Action"
            @iconRight="down-stroke-icon-new"
            @iconComponentClass="bs-icons1"
            @variant="basic"
            @size="s-size"
            @onClick={{this.toggleActionMenu}}
            {{this.setActionButtonRef}}
            aria-label="Exhibitor actions"
            aria-haspopup="menu"
            aria-expanded={{this.isActionMenuVisible}}
            aria-controls="exhibitor-action-menu"
          />
          <UlxTieredmenu
            id="exhibitor-action-menu"
            @items={{this.actionMenuItems}}
            @popup={{true}}
            @visible={{this.isActionMenuVisible}}
            @align="end"
            @target={{this.actionButtonElement}}
            @onHide={{this.hideActionMenu}}
            @registerRef={{this.setActionMenuRef}}
            @onItemSelect={{this.handleActionItemSelect}}
          />
          <UlxIconButton
            @iconLeft="close-icon-01"
            @iconComponentClass="bs-icons1"
            @variant="text"
            @text={{true}}
            @iconSize="s18"
            @customClass="slidepane-close-button"
            aria-label="Close"
            {{on "click" this.closePane}}
          />
        </div>
      </:head>

      <:body>
        <div class="flex h-full">
          <aside class="bg-vnav w-200 shrink-0 border-e p-3">
            <UlxTabmenu
              @items={{this.navItems}}
              @activeIndex={{this.activeNavIndex}}
              @onTabChange={{this.handleNavChange}}
              @variant="vertical"
              @tabId="exhibitor-slidepane-nav"
              @customClass="w-full"
              aria-label="Exhibitor sections"
            />
          </aside>

          <div class="p-6 overflow-y-auto">
            <div
              class="border border-primary rounded-md overflow-hidden bg-default"
            >
              <div class="flex border-b border-primary py-4 bg-primaryLayer1">
                <div class="border-e px-6 w-252">
                  <div class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="bs-icons1 company-icon"
                      @type="font"
                      @size="s18"
                      @customClass="fg-primary"
                      aria-hidden="true"
                    />
                    <span class="text-13 fg-secondary">Exhibitor Company</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <UlxImage
                      @src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/120px-McDonald%27s_Golden_Arches.svg.png"
                      @size="s-size"
                      @shape="rounded"
                      @alt=""
                    />
                    <span class="text-15 semibold-font">Mc Donald's</span>
                  </div>
                  <a
                    href="#"
                    class="text-13 fg-primary flex items-center gap-1 w-fit"
                  >
                    Exhibitor Profile
                    <UlxIcon
                      @iconName="bs-icons1 link-external-icon"
                      @type="font"
                      @size="s14"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div class="border-e px-6">
                  <div class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="bs-icons1 email-icon"
                      @type="font"
                      @size="s18"
                      @customClass="fg-purple"
                      aria-hidden="true"
                    />
                    <span class="text-13 fg-secondary">Exhibitor Contact</span>
                  </div>
                  <span class="text-15 semibold-font">John Wick</span>
                  <a
                    href="mailto:johnwick@zylker.com"
                    class="text-13 fg-primary w-fit"
                  >
                    johnwick@zylker.com
                  </a>
                </div>

                <div class="border-e px-6 w-180">
                  <div class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="bs-icons1 list-view-icon"
                      @type="font"
                      @size="s18"
                      @customClass="fg-green"
                      aria-hidden="true"
                    />
                    <span class="text-13 fg-secondary">Booth Type</span>
                  </div>
                  <div class="text-15 semibold-font">Golden</div>
                  <div class="text-13 fg-secondary">₹20,000</div>
                </div>

                <div class="flex flex-col gap-3 px-6 min-w-0">
                  <div class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="bs-icons1 booths-icon"
                      @type="font"
                      @size="s18"
                      @customClass="fg-primary"
                      aria-hidden="true"
                    />
                    <span class="text-13 fg-secondary">Booth ID</span>
                  </div>
                  <span class="text-15 semibold-font">110</span>
                  <UlxChip
                    @label="Exhibitor Pro"
                    @size="xs-size"
                    @customClass="w-100 with-icon bg-goldLayer2"
                  >
                    <span class="chip-icon" data-qa="ulx-chip-icon">
                      <svg aria-hidden="true">
                        <use href="#plugin-medium"></use>
                      </svg>
                    </span>
                    <span class="chip-label" data-qa="ulx-chip-label">
                      Exhibitor Pro
                    </span>
                  </UlxChip>
                </div>
              </div>

              <div class="flex py-4 justify-between">
                <div class="px-6 border-e w-200">
                  <div class="flex items-center gap-2">
                    <UlxIcon
                      @iconName="bs-icons1 payments-icon"
                      @type="font"
                      @size="s18"
                      @customClass="fg-green"
                      aria-hidden="true"
                    />
                    <span class="text-13 fg-secondary">Order Total</span>
                  </div>
                  <span class="text-h4 semibold-font">$1,019.20</span>
                </div>
                <div class="border-e flex gap-8 justify-between pe-6">
                  <div class="flex flex-col gap-2 text-end">
                    <span class="text-13 fg-secondary">Net Amount</span>
                    <span class="text-15 semibold-font fg-green">$997.60</span>
                  </div>
                  <div class="flex flex-col gap-2 text-end">
                    <span class="text-13 fg-secondary">Outstanding</span>
                    <span class="text-15 semibold-font fg-orange">$0.00</span>
                  </div>
                  <div class="flex flex-col gap-2 text-end">
                    <span class="text-13 fg-secondary">Refunded</span>
                    <span
                      class="text-15 semibold-font fg-secondary"
                    >$0.00</span>
                  </div>
                </div>

                <div class="px-6 items-end text-end">
                  <div class="text-13 fg-secondary">Source</div>
                  <div class="semibold-font text-13">Exhibitor Request</div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between gap-4 pb-6 mt-6">
              <div class="flex items-center gap-3">
                <h3 class="text-h5 semibold-font">Exhibitor Details</h3>
              </div>
              <UlxButton
                @label="Edit"
                @variant="primary"
                @text={{true}}
                @size="s-size"
              >
                <:prefix>
                  <UlxIcon
                    @iconName="bs-icons1 anonymous-icon"
                    @type="font"
                    @size="s18"
                    aria-hidden="true"
                  />
                </:prefix>
              </UlxButton>
            </div>

            <div class="flex flex-col gap-6 mt-6">
              <h4 class="text-15 semibold-font">Exhibitor Information</h4>

              <div class="ulx-grid col-2 gap-8">
                {{#each this.detailFields as |field|}}
                  <div class="flex flex-col gap-1">
                    <span class="text-13 fg-secondary">{{field.label}}</span>
                    <span class="text-15 semibold-font">{{field.value}}</span>
                  </div>
                {{/each}}
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-13 fg-secondary">Rating</span>
                <UlxSlider
                  @value={{this.ratingValue}}
                  @onChange={{this.handleRatingSliderChange}}
                  @min={{1}}
                  @max={{100}}
                  @showTooltip={{true}}
                  @showLimits={{true}}
                  @size="w-full s-size"
                />
              </div>

              <div class="flex flex-col gap-1">
                <span class="text-13 fg-secondary">Text Box</span>
                <p class="text-15 semibold-font">
                  Interested in showcasing latest cordless vacuum and air
                  purifier range.
                </p>
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-13 fg-secondary">Rating</span>
                <UlxRating
                  @value={{this.starRating}}
                  @onChange={{this.handleStarRatingChange}}
                />
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-13 fg-secondary">Tags</span>
                <div class="flex flex-wrap gap-2">
                  {{#each this.tagChips key="id" as |tag|}}
                    <UlxChip @label={{tag.label}} @size="s-size" />
                  {{/each}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </:body>
    </UlxSlidePane>
  </template>
}

`;
