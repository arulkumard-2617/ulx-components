import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxOptionSegment } from 'ulx-components';
import CommonDocMainCodePreview from './code-preview';
import {
  PADDING_OPTIONS,
  MARGIN_OPTIONS,
  SLUG_WITH_POSITION_OPTIONS,
  POSITION_OPTIONS,
  BOX_LAYOUT_SLUGS,
} from 'ulx-ember/data/utility-builder-config';

const OPTION_SEGMENT_DROPDOWN_THRESHOLD = 10;

/**
 * Schema-driven utility class builder: lists classes from @model (uls-docs),
 * renders radio selection via UlxOptionSegment or dropdown (>10 items), and live preview + code via CodePreview.
 *
 * @param {Object} model - From uls-docs.getUtility(slug): { slug, title, description, sections: [{ title, rows: [{ class, styles }] }] }
 */
export default class CommonDocMainUtilityBuilderComponent extends Component {
  CommonDocMainCodePreview = CommonDocMainCodePreview;
  @tracked selectedClass = null;
  @tracked selectedPosition = 'relative';

  get model() {
    return this.args.model ?? {};
  }

  get slug() {
    return this.model.slug ?? '';
  }

  get hasPositionOptions() {
    return SLUG_WITH_POSITION_OPTIONS.includes(this.slug);
  }

  get useBoxLayout() {
    return BOX_LAYOUT_SLUGS.includes(this.slug);
  }

  get useGapLayout() {
    return this.slug === 'gap';
  }

  /** Dependency classes: user-chosen position for top-right-bottom-left, or empty. */
  get dependencyClasses() {
    if (!this.hasPositionOptions) return [];
    return [this.selectedPosition];
  }

  get useDropdown() {
    return this.optionItems.length > OPTION_SEGMENT_DROPDOWN_THRESHOLD;
  }

  get sections() {
    return Array.isArray(this.model.sections) ? this.model.sections : [];
  }

  /** Flatten section rows, or use generated list for padding/margin so dropdown lists all classes. */
  get optionItems() {
    if (this.slug === 'padding') {
      return PADDING_OPTIONS.map((opt) => ({
        ...opt,
        selected: this.selectedClass === opt.value,
      }));
    }
    if (this.slug === 'margin') {
      return MARGIN_OPTIONS.map((opt) => ({
        ...opt,
        selected: this.selectedClass === opt.value,
      }));
    }
    const items = [];
    for (const section of this.sections) {
      const rows = Array.isArray(section?.rows) ? section.rows : [];
      for (const row of rows) {
        const classStr = row?.class ?? '';
        const value = classStr.replace(/^\./, '');
        if (!value) continue;
        items.push({
          value,
          title: classStr || value,
          description: row?.styles ?? '',
          selected: this.selectedClass === value,
        });
      }
    }
    return items;
  }

  /** Resolved selected class for preview/code; defaults to first option. */
  get effectiveSelectedClass() {
    if (this.selectedClass) return this.selectedClass;
    const first = this.optionItems[0];
    return first ? first.value : '';
  }

  /** Combined classes for preview/code: dependency classes + selected class (e.g. relative + tp0). */
  get effectivePreviewClasses() {
    const dep = this.dependencyClasses;
    const cls = this.effectiveSelectedClass;
    return [...dep, cls].filter(Boolean).join(' ');
  }

  /** Build items with current selection for UlxOptionSegment. */
  get segmentItems() {
    const selected = this.effectiveSelectedClass;
    return this.optionItems.map((item) => ({
      ...item,
      selected: item.value === selected,
    }));
  }

  get builderSnippet() {
    const classAttr = this.effectivePreviewClasses;
    if (!classAttr) return '';
    if (this.slug === 'gap') {
      return `<div class="fxb ${classAttr}">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`;
    }
    if (this.useBoxLayout && this.slug !== 'gap') {
      return `<div class="${classAttr}">\n  <div class="bg-primary fg-white pd2">Content</div>\n</div>`;
    }
    return `<div class="${classAttr}">\n  Content\n</div>`;
  }

  /** Key so code block is recreated whenever snippet content changes (avoids removeChild errors with ember-prism). */
  get codeBlockKey() {
    return [this.effectivePreviewClasses + '-' + this.slug];
  }

  /** Key so preview DOM is recreated on change (avoids removeChild errors). */
  get previewKey() {
    return [this.effectivePreviewClasses + '-' + this.slug];
  }

  @action
  handleSelect(_selected, value) {
    this.selectedClass = value;
  }

  @action
  handleDropdownChange(event) {
    const value = event.target?.value;
    if (value !== undefined) this.selectedClass = value;
  }

  @action
  handlePositionChange(event) {
    const value = event.target?.value;
    if (value) this.selectedPosition = value;
  }

  get positionOptions() {
    return POSITION_OPTIONS;
  }

  <template>
    {{#if this.optionItems.length}}
      <div class="mgt8 mgb6 utility-builder-root">
        <h4 class="mgt0 mgb2 bold-font fg-text">Try it</h4>
        <p class="fg-text-secondary font-size12 mgb4">
          Choose a class to see the live preview and code.
        </p>
        {{#if this.hasPositionOptions}}
          <div class="mgb4">
            <label
              for="utility-builder-position"
              class="block font-size12 bold-font fg-text mgb2"
            >Position</label>
            <select
              id="utility-builder-position"
              class="block w-100p pd4 rds2 bd bg-default font-size12 fg-text"
              value={{this.selectedPosition}}
              {{on "change" this.handlePositionChange}}
            >
              {{#each this.positionOptions as |opt|}}
                <option value={{opt.value}}>{{opt.label}}</option>
              {{/each}}
            </select>
          </div>
        {{/if}}
        <div class="mgb4">
          {{#if this.useDropdown}}
            <label
              for="utility-builder-select"
              class="block font-size12 bold-font fg-text mgb2"
            >Choose a class</label>
            <select
              id="utility-builder-select"
              class="block w-100p pd4 rds2 bd bg-default font-size12 fg-text"
              value={{this.effectiveSelectedClass}}
              {{on "change" this.handleDropdownChange}}
            >
              {{#each this.optionItems as |item|}}
                <option value={{item.value}}>
                  {{item.title}}
                  {{#if item.description}}
                    —
                    {{item.description}}
                  {{/if}}
                </option>
              {{/each}}
            </select>
          {{else}}
            <div class="overflow-auto">
              <UlxOptionSegment
                @type="radio"
                @items={{this.segmentItems}}
                @onSelect={{this.handleSelect}}
                @compact={{true}}
                @horizontal={{true}}
                @ariaLabel="Utility class options"
              />
            </div>
          {{/if}}
        </div>
        <div class="mgb4 utility-builder-preview">
          <p class="mgt0 mgb2 bold-font font-size12 fg-text">Preview</p>
          {{#each this.previewKey as |pk|}}
            <div data-preview-key={{pk}}>
              {{#if this.useBoxLayout}}
                <div
                  class="utility-builder-box-stripe bg-default bd rds3 pd4 min-h80"
                  role="img"
                  aria-label="Box model preview"
                >
                  {{#if this.useGapLayout}}
                    <div class="fxb {{this.effectivePreviewClasses}}">
                      <div class="bg-primary fg-white rds1 pd2 font-size12">Item
                        1</div>
                      <div class="bg-primary fg-white rds1 pd2 font-size12">Item
                        2</div>
                    </div>
                  {{else}}
                    <div class="bd rds2 {{this.effectivePreviewClasses}}">
                      <div
                        class="bg-primary fg-white rds1 pd2 font-size12"
                      >Content</div>
                    </div>
                  {{/if}}
                </div>
              {{else}}
                <div
                  class="bg-default bd pd8 rds3 min-h80
                    {{this.effectivePreviewClasses}}"
                >
                  <span class="fg-text-secondary font-size12">Content</span>
                </div>
              {{/if}}
            </div>
          {{/each}}
        </div>
        <div class="utility-builder-code">
          {{#each this.codeBlockKey as |codeKey|}}
            <div data-utility-builder-key={{codeKey}}>
              <this.CommonDocMainCodePreview @source={{this.builderSnippet}} />
            </div>
          {{/each}}
        </div>
      </div>
    {{/if}}
  </template>
}
