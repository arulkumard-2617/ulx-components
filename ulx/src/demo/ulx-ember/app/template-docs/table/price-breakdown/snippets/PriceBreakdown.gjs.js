export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxSegment,
  UlxIcon,
  UlxIconButton,
  UlxInput,
  UlxInputGroup,
  UlxDropdown,
  UlxCheckbox,
  UlxBadge,
  tooltip
} from 'ulx-components';

const DISCOUNT_UNIT_OPTIONS = [
  { label: '%', value: '%' },
  { label: '$', value: '$' }
];

export default class PriceBreakdownTableDemo extends Component {
  @tracked isEditing = false;
  @tracked isEditingBasePrice = false;
  @tracked basePriceValue = '5000';
  @tracked basePriceDraft = '5000';
  @tracked discountValue = '10';
  @tracked discountUnit = '%';
  @tracked itemLevelDiscount = false;

  discountUnitOptions = DISCOUNT_UNIT_OPTIONS;

  get basePriceUnitLabel() {
    const amount = Number(this.basePriceValue);
    if (Number.isNaN(amount)) {
      return '$0.00';
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  }

  get segmentClasses() {
    return this.isEditing
      ? 'price-breakdown-card price-breakdown-editing'
      : 'price-breakdown-card';
  }

  get tableClasses() {
    const parts = ['ulx-price-breakdown'];

    this.isEditing && parts.push('is-editing');
    this.showItemLevelDiscount && parts.push('has-item-discount');

    return parts.join(' ');
  }

  get showItemLevelDiscount() {
    return this.isEditing && this.itemLevelDiscount;
  }

  get detailColspan() {
    return this.showItemLevelDiscount ? 3 : 2;
  }

  get discountLabel() {
    return this.isEditing ? 'Discount' : \`Discount (\${this.discountValue}%)\`;
  }

  @action
  startEditOrder() {
    this.isEditing = true;
  }

  @action
  saveEditOrder() {
    this.isEditing = false;
    this.isEditingBasePrice = false;
  }

  @action
  cancelEditOrder() {
    this.isEditing = false;
    this.isEditingBasePrice = false;
    this.basePriceDraft = this.basePriceValue;
  }

  @action
  startEditBasePrice() {
    this.basePriceDraft = this.basePriceValue;
    this.isEditingBasePrice = true;
  }

  @action
  confirmBasePrice() {
    this.basePriceValue = this.basePriceDraft;
    this.isEditingBasePrice = false;
  }

  @action
  cancelBasePrice() {
    this.isEditingBasePrice = false;
  }

  @action
  setBasePriceDraft(value) {
    this.basePriceDraft = value ?? '';
  }

  @action
  setDiscountValue(value) {
    this.discountValue = value ?? '';
  }

  @action
  setDiscountUnit(value) {
    this.discountUnit = value ?? '%';
  }

  @action
  handleItemLevelDiscountChange(event) {
    this.itemLevelDiscount = event?.target?.checked ?? false;
  }

  <template>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-3">
        {{#if this.isEditing}}
          <div class="flex items-center justify-end gap-3">
            <UlxIconButton
              @label="Cancel"
              @iconLeft="bs-icons1 close-icon-01"
              @variant="danger "
              @text={{true}}
              @size="compact on-hover"
              @onClick={{this.cancelEditOrder}}
            />
            <UlxIconButton
              @label="Save"
              @iconLeft="bs-icons1 ls-tick-icon"
              @variant="primary "
              @text={{true}}
              @size="compact on-hover"
              @iconSize="s18"
              @onClick={{this.saveEditOrder}}
            />
          </div>
          <div class="flex items-center justify-end">
            <UlxCheckbox
              @itemLabel="Add item level discount"
              @checked={{this.itemLevelDiscount}}
              @onChange={{this.handleItemLevelDiscountChange}}
            />
          </div>
        {{else}}
          <div class="flex items-center justify-end gap-4">
            <UlxIconButton
              @label="Edit Order"
              @iconLeft="bs-icons1 edit-icon"
              @variant="link on-hover"
              @text={{true}}
              @size="s-size"
              @onClick={{this.startEditOrder}}
            />
          </div>
        {{/if}}
      </div>

      <UlxSegment
        @customClass={{this.segmentClasses}}
        @ariaLabel="Booth details and pricing"
      >
        <table class={{this.tableClasses}}>
          <caption class="price-breakdown-caption">
            Booth details and pricing
          </caption>
          <thead>
            <tr>
              <th scope="col">Booth Details</th>
              {{#if this.showItemLevelDiscount}}
                <th
                  scope="col"
                  class="price-breakdown-discount-col"
                >Discount</th>
              {{/if}}
              <th scope="col" class="price-breakdown-amount-col">Price</th>
            </tr>
          </thead>

          <tbody class="price-breakdown-tier">
            <tr class="price-breakdown-group-title">
              <th colspan={{this.detailColspan}} scope="rowgroup">
                <span class="semibold-font">Platinum</span>
                <span class="fg-secondary text-13"> ($50.00 per sq.ft)</span>
              </th>
            </tr>
            <tr class="price-breakdown-meta">
              <td
                colspan={{this.detailColspan}}
                class="flex items-center gap-2 flex-wrap"
              >
                <span class="semibold-font">Booth #1</span>
                <UlxBadge @type="dot" @size="xxs-size" @variant="light-grey" />
                <span class="fg-secondary text-13">10 ft x 10 ft (100 sq.ft)</span>
              </td>
            </tr>
            <tr
              class={{if this.isEditingBasePrice "price-breakdown-row-editing"}}
            >
              <th scope="row">
                <span class="price-breakdown-row-label">
                  <div>Base Price</div>
                  <UlxIcon
                    {{tooltip
                      "Base price is calculated from booth area and tier rate."
                      position="top"
                    }}
                    @iconName="bs-icons1 info-icon-01"
                    @type="font"
                    @size="s14"
                    aria-label="More information about base price"
                  />
                  {{#if this.isEditingBasePrice}}
                    <UlxBadge
                      @type="dot"
                      @size="xxs-size"
                      @variant="light-grey"
                    />
                    <span class="price-breakdown-inline-edit">
                      <UlxInputGroup
                        @size="s-size"
                        @startAddonClass="text-addon"
                        @customClass="w-108"
                      >
                        <:start>$</:start>
                        <:input>
                          <UlxInput
                            @type="number"
                            @value={{this.basePriceDraft}}
                            @onInput={{this.setBasePriceDraft}}
                            aria-label="Base price"
                          />
                        </:input>
                      </UlxInputGroup>
                      <UlxIconButton
                        @iconLeft="bs-icons1 ls-tick-icon"
                        @variant="primary"
                        @text={{true}}
                        @pilled={{true}}
                        @iconSize="s20"
                        @onClick={{this.confirmBasePrice}}
                        aria-label="Confirm base price"
                      />
                      <UlxIconButton
                        @iconLeft="bs-icons1 close-stroke-icon-new"
                        @variant="danger"
                        @text={{true}}
                        @pilled={{true}}
                        @iconSize="s20"
                        @onClick={{this.cancelBasePrice}}
                        aria-label="Cancel base price edit"
                      />
                    </span>
                  {{else}}
                    <UlxBadge
                      @type="dot"
                      @size="xxs-size"
                      @variant="light-grey"
                    />
                    <span
                      class="fg-secondary text-13"
                    >{{this.basePriceUnitLabel}}</span>
                    {{#if this.isEditing}}
                      <UlxIconButton
                        @iconLeft="bs-icons1 edit-icon"
                        @variant="primary"
                        @text={{true}}
                        @pilled={{true}}
                        @size="xs-size"
                        @onClick={{this.startEditBasePrice}}
                        aria-label="Edit base price"
                      />
                    {{/if}}
                  {{/if}}
                </span>
              </th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col flex justify-end">
                  <UlxInputGroup
                    @size="s-size"
                    @endAddonClass="dropdown-addon"
                    @customClass="w-108"
                  >
                    <:input>
                      <UlxInput
                        @type="number"
                        @value={{this.discountValue}}
                        @onInput={{this.setDiscountValue}}
                        aria-label="Base price discount"
                      />
                    </:input>
                    <:end>
                      <UlxDropdown
                        @options={{this.discountUnitOptions}}
                        @value={{this.discountUnit}}
                        @onChange={{this.setDiscountUnit}}
                        @size="s-size compact"
                        aria-label="Base price discount unit"
                      />
                    </:end>
                  </UlxInputGroup>
                </td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                {{#unless this.isEditingBasePrice}}
                  <span
                    class="price-breakdown-amount-cell
                      {{if this.showItemLevelDiscount 'semibold-font'}}"
                  >
                    {{#if this.showItemLevelDiscount}}
                      $4,500.00
                    {{else}}
                      {{this.basePriceUnitLabel}}
                      {{#if this.isEditing}}
                        <UlxIconButton
                          @iconLeft="bs-icons1 edit-icon"
                          @variant="primary"
                          @text={{true}}
                          @pilled={{true}}
                          @size="xs-size"
                          @onClick={{this.startEditBasePrice}}
                          aria-label="Edit base price amount"
                        />
                      {{/if}}
                    {{/if}}
                  </span>
                {{/unless}}
              </td>
            </tr>
          </tbody>

          <tbody class="price-breakdown-section">
            <tr class="price-breakdown-category">
              <th colspan={{this.detailColspan}} scope="colgroup"><span
                  class="medium-font"
                >PREMIUMS</span></th>
            </tr>
            <tr>
              <th scope="row">
                <span class="price-breakdown-row-label">
                  Corner
                  <UlxIcon
                    {{tooltip
                      "Corner premium applies to corner booth locations."
                      position="top"
                    }}
                    @iconName="bs-icons1 info-icon-01"
                    @type="font"
                    @size="s14"
                    aria-label="More information about corner premium"
                  />
                  <UlxBadge
                    @type="dot"
                    @size="xxs-size"
                    @variant="light-grey"
                  />
                  <span class="fg-secondary text-13">$100.00</span>
                  {{#if this.isEditing}}
                    <UlxIconButton
                      @iconLeft="bs-icons1 edit-icon"
                      @variant="primary"
                      @pilled={{true}}
                      @text={{true}}
                      @size="xs-size"
                      aria-label="Edit corner premium"
                    />
                  {{/if}}
                </span>
              </th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col flex justify-end">
                  <UlxInputGroup
                    @size="s-size"
                    @endAddonClass="dropdown-addon"
                    @customClass="w-108"
                  >
                    <:input>
                      <UlxInput
                        @type="number"
                        @value={{this.discountValue}}
                        @onInput={{this.setDiscountValue}}
                        aria-label="Corner premium discount"
                      />
                    </:input>
                    <:end>
                      <UlxDropdown
                        @options={{this.discountUnitOptions}}
                        @value={{this.discountUnit}}
                        @onChange={{this.setDiscountUnit}}
                        @size="s-size compact"
                        aria-label="Corner premium discount unit"
                      />
                    </:end>
                  </UlxInputGroup>
                </td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                <span
                  class="price-breakdown-amount-cell
                    {{if this.showItemLevelDiscount 'semibold-font'}}"
                >
                  {{if this.showItemLevelDiscount "$90.00" "$100.00"}}
                  {{#if this.isEditing}}
                    {{#unless this.showItemLevelDiscount}}
                      <UlxIconButton
                        @iconLeft="bs-icons1 edit-icon"
                        @variant="primary"
                        @text={{true}}
                        @pilled={{true}}
                        @size="xs-size"
                        aria-label="Edit corner premium amount"
                      />
                    {{/unless}}
                  {{/if}}
                </span>
              </td>
            </tr>
          </tbody>

          <tbody class="price-breakdown-section">
            <tr class="price-breakdown-category">
              <th colspan={{this.detailColspan}} scope="colgroup"><span
                  class="medium-font"
                >ADD-ONS</span></th>
            </tr>
            <tr>
              <th scope="row">
                <span class="price-breakdown-row-label">
                  Table
                  {{#if this.isEditing}}
                    <UlxBadge
                      @type="dot"
                      @size="xxs-size"
                      @variant="light-grey"
                    />
                    <span class="fg-secondary text-13">$10.00</span>
                    <UlxIconButton
                      @iconLeft="bs-icons1 edit-icon"
                      @variant="primary"
                      @text={{true}}
                      @pilled={{true}}
                      @size="xs-size"
                      aria-label="Edit table add-on"
                    />
                  {{/if}}
                </span>
              </th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col flex justify-end">
                  <UlxInputGroup
                    @size="s-size"
                    @endAddonClass="dropdown-addon"
                    @customClass="w-108"
                  >
                    <:input>
                      <UlxInput
                        @type="number"
                        @value={{this.discountValue}}
                        @onInput={{this.setDiscountValue}}
                        aria-label="Table add-on discount"
                      />
                    </:input>
                    <:end>
                      <UlxDropdown
                        @options={{this.discountUnitOptions}}
                        @value={{this.discountUnit}}
                        @onChange={{this.setDiscountUnit}}
                        @size="s-size compact"
                        aria-label="Table add-on discount unit"
                      />
                    </:end>
                  </UlxInputGroup>
                </td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                <span
                  class="price-breakdown-amount-cell
                    {{if this.showItemLevelDiscount 'semibold-font'}}"
                >
                  {{if
                    this.showItemLevelDiscount
                    "$9.00"
                    (if this.isEditing "$10.00" "$100.00")
                  }}
                  {{#if this.isEditing}}
                    {{#unless this.showItemLevelDiscount}}
                      <UlxIconButton
                        @iconLeft="bs-icons1 edit-icon"
                        @variant="primary"
                        @text={{true}}
                        @pilled={{true}}
                        @size="xs-size"
                        aria-label="Edit table add-on amount"
                      />
                    {{/unless}}
                  {{/if}}
                </span>
              </td>
            </tr>
          </tbody>

          <tbody class="price-breakdown-tier">
            <tr class="price-breakdown-group-title">
              <th colspan={{this.detailColspan}} scope="rowgroup">
                <span class="semibold-font">Gold</span>
                <span class="fg-secondary text-13"> ($30.00 per sq.ft)</span>
              </th>
            </tr>
            <tr class="price-breakdown-meta">
              <td
                colspan={{this.detailColspan}}
                class="flex items-center gap-2 flex-wrap"
              >
                <span class="semibold-font">Booth #2</span>
                <UlxBadge @type="dot" @size="xxs-size" @variant="light-grey" />
                <span class="fg-secondary text-13">10 ft x 20 ft (200 sq.ft)</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="price-breakdown-row-label">
                  Base Price
                  <UlxBadge
                    @type="dot"
                    @size="xxs-size"
                    @variant="light-grey"
                  />
                  <span class="fg-secondary text-13">$6,000.00</span>
                  {{#if this.isEditing}}
                    <UlxIconButton
                      @iconLeft="bs-icons1 edit-icon"
                      @variant="primary"
                      @text={{true}}
                      @pilled={{true}}
                      @size="xs-size"
                      aria-label="Edit base price"
                    />
                  {{/if}}
                </span>
              </th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col flex justify-end">
                  <UlxInputGroup
                    @size="s-size"
                    @endAddonClass="dropdown-addon"
                    @customClass="w-108"
                  >
                    <:input>
                      <UlxInput
                        @type="number"
                        @value={{this.discountValue}}
                        @onInput={{this.setDiscountValue}}
                        aria-label="Base price discount"
                      />
                    </:input>
                    <:end>
                      <UlxDropdown
                        @options={{this.discountUnitOptions}}
                        @value={{this.discountUnit}}
                        @onChange={{this.setDiscountUnit}}
                        @size="s-size compact"
                        aria-label="Base price discount unit"
                      />
                    </:end>
                  </UlxInputGroup>
                </td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                <span
                  class="price-breakdown-amount-cell
                    {{if this.showItemLevelDiscount 'semibold-font'}}"
                >
                  {{if this.showItemLevelDiscount "$5,400.00" "$6,000.00"}}
                  {{#if this.isEditing}}
                    {{#unless this.showItemLevelDiscount}}
                      <UlxIconButton
                        @iconLeft="bs-icons1 edit-icon"
                        @variant="primary"
                        @pilled={{true}}
                        @text={{true}}
                        @size="xs-size"
                        aria-label="Edit base price amount"
                      />
                    {{/unless}}
                  {{/if}}
                </span>
              </td>
            </tr>
          </tbody>

          <tbody class="price-breakdown-section">
            <tr class="price-breakdown-category">
              <th colspan={{this.detailColspan}} scope="colgroup"><span
                  class="medium-font"
                >PREMIUMS</span></th>
            </tr>
            <tr>
              <th scope="row">
                <span class="price-breakdown-row-label">
                  Corner
                  <UlxIcon
                    {{tooltip
                      "Corner premium applies to corner booth locations."
                      position="top"
                    }}
                    @iconName="bs-icons1 info-icon-01"
                    @type="font"
                    @size="s14"
                    aria-label="More information about corner premium"
                  />
                  <UlxBadge
                    @type="dot"
                    @size="xxs-size"
                    @variant="light-grey"
                  />
                  <span class="fg-secondary text-13">$100.00</span>
                  {{#if this.isEditing}}
                    <UlxIconButton
                      @iconLeft="bs-icons1 edit-icon"
                      @variant="primary"
                      @text={{true}}
                      @pilled={{true}}
                      @size="xs-size"
                      aria-label="Edit corner premium"
                    />
                  {{/if}}
                </span>
              </th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col flex justify-end">
                  <UlxInputGroup
                    @size="s-size"
                    @endAddonClass="dropdown-addon"
                    @customClass="w-108"
                  >
                    <:input>
                      <UlxInput
                        @type="number"
                        @value={{this.discountValue}}
                        @onInput={{this.setDiscountValue}}
                        aria-label="Corner premium discount"
                      />
                    </:input>
                    <:end>
                      <UlxDropdown
                        @options={{this.discountUnitOptions}}
                        @value={{this.discountUnit}}
                        @onChange={{this.setDiscountUnit}}
                        @size="s-size compact"
                        aria-label="Corner premium discount unit"
                      />
                    </:end>
                  </UlxInputGroup>
                </td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                <span
                  class="price-breakdown-amount-cell
                    {{if this.showItemLevelDiscount 'semibold-font'}}"
                >
                  {{if this.showItemLevelDiscount "$90.00" "$100.00"}}
                  {{#if this.isEditing}}
                    {{#unless this.showItemLevelDiscount}}
                      <UlxIconButton
                        @iconLeft="bs-icons1 edit-icon"
                        @pilled={{true}}
                        @variant="primary"
                        @text={{true}}
                        @size="xs-size"
                        aria-label="Edit corner premium amount"
                      />
                    {{/unless}}
                  {{/if}}
                </span>
              </td>
            </tr>
          </tbody>

          <tbody class="price-breakdown-section">
            <tr class="price-breakdown-category">
              <th colspan={{this.detailColspan}} scope="colgroup"><span
                  class="medium-font"
                >ADD-ONS</span></th>
            </tr>
            <tr>
              <th scope="row">
                <span class="price-breakdown-row-label">
                  Table
                  {{#if this.isEditing}}
                    <UlxBadge
                      @type="dot"
                      @size="xxs-size"
                      @variant="light-grey"
                    />
                    <span class="fg-secondary text-13">$10.00</span>
                    <UlxIconButton
                      @iconLeft="bs-icons1 edit-icon"
                      @variant="primary"
                      @text={{true}}
                      @pilled={{true}}
                      @size="xs-size"
                      aria-label="Edit table add-on"
                    />
                  {{/if}}
                </span>
              </th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col flex justify-end">
                  <UlxInputGroup
                    @size="s-size"
                    @endAddonClass="dropdown-addon"
                    @customClass="w-108"
                  >
                    <:input>
                      <UlxInput
                        @type="number"
                        @value={{this.discountValue}}
                        @onInput={{this.setDiscountValue}}
                        aria-label="Table add-on discount"
                      />
                    </:input>
                    <:end>
                      <UlxDropdown
                        @options={{this.discountUnitOptions}}
                        @value={{this.discountUnit}}
                        @onChange={{this.setDiscountUnit}}
                        @size="s-size compact"
                        aria-label="Table add-on discount unit"
                      />
                    </:end>
                  </UlxInputGroup>
                </td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                <span
                  class="price-breakdown-amount-cell
                    {{if this.showItemLevelDiscount 'semibold-font'}}"
                >
                  {{if
                    this.showItemLevelDiscount
                    "$9.00"
                    (if this.isEditing "$10.00" "$100.00")
                  }}
                  {{#if this.isEditing}}
                    {{#unless this.showItemLevelDiscount}}
                      <UlxIconButton
                        @iconLeft="bs-icons1 edit-icon"
                        @variant="primary"
                        @text={{true}}
                        @pilled={{true}}
                        @size="xs-size"
                        aria-label="Edit table add-on amount"
                      />
                    {{/unless}}
                  {{/if}}
                </span>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr class="price-breakdown-subtotal">
              <th scope="row">Subtotal</th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col"></td>
              {{/if}}
              <td class="price-breakdown-amount-col">
                {{if this.showItemLevelDiscount "$7,380.00" "$8,200.00"}}
              </td>
            </tr>
            {{#unless this.showItemLevelDiscount}}
              <tr class="price-breakdown-discount">
                <th scope="row">{{this.discountLabel}}</th>
                <td class="price-breakdown-amount-col">
                  <span class="price-breakdown-discount-controls">
                    <UlxInputGroup
                      @size="s-size"
                      @endAddonClass="dropdown-addon"
                      @customClass="w-108"
                    >
                      <:input>
                        <UlxInput
                          @type="number"
                          @value={{this.discountValue}}
                          @onInput={{this.setDiscountValue}}
                          aria-label="Discount value"
                        />
                      </:input>
                      <:end>
                        <UlxDropdown
                          @options={{this.discountUnitOptions}}
                          @value={{this.discountUnit}}
                          @onChange={{this.setDiscountUnit}}
                          @size="s-size compact"
                          aria-label="Discount unit"
                        />
                      </:end>
                    </UlxInputGroup>
                    {{#if this.isEditing}}
                      <span class="price-breakdown-discount-amount">- $820.00</span>
                    {{else}}
                      <span>$820.00</span>
                    {{/if}}
                  </span>
                </td>
              </tr>
            {{/unless}}
            <tr>
              <th scope="row">Tax (10%)</th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col"></td>
              {{/if}}
              <td class="price-breakdown-amount-col">$738.00</td>
            </tr>
            <tr class="price-breakdown-grand-total">
              <th scope="row">Grand Total</th>
              {{#if this.showItemLevelDiscount}}
                <td class="price-breakdown-discount-col"></td>
              {{/if}}
              <td class="price-breakdown-amount-col">$8,118.00</td>
            </tr>
          </tfoot>
        </table>
      </UlxSegment>
    </div>
  </template>
}

`;
