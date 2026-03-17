export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment, UlxIcon, t } from 'ulx-components';

export default class DemoOptionSegmentTemplate extends Component {
  @tracked selectedValues = ['agenda', 'scan', 'messages'];

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
    return new Set(this.allItems.filter((item) => item.fixed).map((item) => item.value));
  }

  get allItems() {
    return [
      { value: 'home', label: t('demo.optionsegment.home'), icon: 'home-icon-01', fixed: true },
      { value: 'agenda', label: t('demo.optionsegment.agenda'), icon: 'agenda-icon' },
      { value: 'scan', label: t('demo.optionsegment.scan'), icon: 'split_booth' },
      { value: 'messages', label: t('demo.optionsegment.messages'), icon: 'split_booth' },
      { value: 'profile', label: t('demo.optionsegment.profile'), icon: 'split_booth', fixed: true },
    ];
  }

  get selectedPreviewItems() {
    const selectedSet = new Set(this.selectedValues);

    return this.allItems.slice(0, 5).map((item) => ({
      ...item,
      selected: item.fixed || selectedSet.has(item.value),
      itemClass: 'w-100 h-100',
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
        <div class="text-16 fw-600">{{t 'demo.optionsegment.navigation.items'}}</div>
        <div class="text-13 fg-secondary">
          {{t 'demo.optionsegment.note.fixed.items'}}
          &nbsp;•&nbsp;
          {{t 'demo.optionsegment.note.select.up.to.3'}}
          &nbsp;•&nbsp;
          {{t 'demo.optionsegment.note.preview.first.5'}}
        </div>
      </div>

      <UlxOptionSegment
        @type="basic"
        @items={{this.selectedPreviewItems}}
        @onSelect={{this.handleItemClick}}
        @ariaLabel={{t 'demo.optionsegment.selected.preview'}}
        @customClass="flex flex-row"
      >
        <:content as |item|>
          <div class="flex flex-col items-center gap-2 relative w-100 h-100">
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

            <UlxIcon @iconName={{item.icon}} @type="font" aria-hidden="true" @size="s28" />
            <div class="text-13 fw-600">{{item.label}}</div>
          </div>
        </:content>
      </UlxOptionSegment>

      <div class="flex flex-col gap-3">
        <div class="text-13 fw-600">
          {{t 'demo.optionsegment.available.items'}}
          <span class="fg-secondary">({{t 'demo.optionsegment.available.items.total.32'}})</span>
        </div>

        <UlxOptionSegment
          @type="basic"
          @items={{this.availableItems}}
          @onSelect={{this.handleItemClick}}
          @ariaLabel={{t 'demo.optionsegment.available.items'}}
        >
          <:title as |item|>
            <div class="flex flex-col items-center gap-2">
              <UlxIcon @iconName={{item.icon}} @type="font" aria-hidden="true" />
              <div class="text-13 fw-600">{{item.label}}</div>
            </div>
          </:title>
        </UlxOptionSegment>
      </div>
    </div>
  </template>
}

`;

