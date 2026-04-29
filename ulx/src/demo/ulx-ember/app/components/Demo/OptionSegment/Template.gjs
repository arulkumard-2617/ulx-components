import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment, UlxIcon, t } from 'ulx-components';

export default class DemoOptionSegmentTemplate extends Component {
  @tracked selectedValues = ['agenda'];

  get maxSelectable() {
    return 3;
  }

  @action
  handleItemClick(nextSelected, value) {
    if (this.fixedValues.has(value)) {
      return;
    }

    const current = new Set(this.selectedValues);

    if (nextSelected) {
      if (current.size >= this.maxSelectable) {
        return;
      }
      current.add(value);
    } else {
      current.delete(value);
    }

    this.selectedValues = [...current];
  }

  get fixedValues() {
    return new Set(
      this.allItems.filter((item) => item.fixed).map((item) => item.value),
    );
  }

  get allItems() {
    return [
      {
        value: 'home',
        label: "Home",
        icon: 'home-icon-01',
        fixed: true,
      },
      {
        value: 'agenda',
        label: "Agenda",
        icon: 'agenda-icon',
      },
      {
        value: 'scan',
        label: "Scan",
        icon: 'split_booth',
      },
      {
        value: 'messages',
        label: "Messages",
        icon: 'split_booth',
      },
      {
        value: 'profile',
        label: "Profile",
        icon: 'split_booth',
        fixed: true,
      },
    ];
  }

  get selectedPreviewItems() {
    const selectedSet = new Set(this.selectedValues);

    return this.allItems.slice(0, 5).map((item) => ({
      ...item,
      selected: item.fixed || selectedSet.has(item.value),
      itemClass: 'w-100 h-70',
    }));
  }

  get availableItems() {
    const selectedSet = new Set(this.selectedValues);

    return this.allItems
      .filter((item) => !item.fixed)
      .map((item) => ({
        ...item,
        selected: selectedSet.has(item.value),
      }));
  }

  <template>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <div class="text-16 fw-600">{{"Navigation Items"}}</div>
        <div class="text-13 fg-secondary">
          {{"Home and Profile are fixed"}}
          &nbsp;•&nbsp;
          {{"Select up to 3 items from available options below"}}
          &nbsp;•&nbsp;
          {{"Preview shows first 5 items"}}
        </div>
      </div>

      <UlxOptionSegment
        @type="basic"
        @items={{this.selectedPreviewItems}}
        @onSelect={{this.handleItemClick}}
        @ariaLabel="Selected navigation items preview"
        @customClass="flex flex-row"
      >
        <:content as |item|>
          <div class="flex flex-col items-center gap-2">
            <div class="absolute top-1 left-1">
              {{#if item.fixed}}
                <UlxIcon
                  @iconName="lock-filled-icon"
                  @type="font"
                  aria-hidden="true"
                  @size="s18"
                />
              {{/if}}
            </div>

            <UlxIcon
              @iconName={{item.icon}}
              @type="font"
              @size="s28"
              aria-hidden="true"
            />
            <div class="text-13 fw-600">{{item.label}}</div>
          </div>
        </:content>
      </UlxOptionSegment>
    </div>
  </template>
}
