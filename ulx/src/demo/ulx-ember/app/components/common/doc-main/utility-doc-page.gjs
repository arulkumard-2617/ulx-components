import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

const TABLE_SHOW_MORE_THRESHOLD = 10;

/**
 * Renders a Tailwind-docs-style utility reference: title, description, and Class | Styles table(s).
 * Data is driven by @model from uls-docs service (generated from utill.less).
 * @param {Object} model - { title, description, sections: [{ title, rows: [{ class, styles }] }] }
 */
export default class CommonDocMainUtilityDocPageComponent extends Component {
  @tracked expandedSectionIndices = {};

  get sections() {
    const model = this.args.model;
    console.log('model', model);

    return Array.isArray(model?.sections) ? model.sections : [];
  }

  /** Rows to display for a section: first 10 or all when expanded. */
  @action
  visibleRows(section, sectionIndex) {
    const rows = section?.rows ?? [];
    if (rows.length <= TABLE_SHOW_MORE_THRESHOLD) return rows;
    return this.expandedSectionIndices[sectionIndex]
      ? rows
      : rows.slice(0, TABLE_SHOW_MORE_THRESHOLD);
  }

  @action
  hasMoreRows(section) {
    return (section?.rows?.length ?? 0) > TABLE_SHOW_MORE_THRESHOLD;
  }

  @action
  isSectionExpanded(sectionIndex) {
    return !!this.expandedSectionIndices[sectionIndex];
  }

  @action
  rowClass(row) {
    return row?.class ?? '';
  }

  @action
  rowStyles(row) {
    return row?.styles ?? '';
  }

  @action
  toggleSection(sectionIndex) {
    this.expandedSectionIndices = {
      ...this.expandedSectionIndices,
      [sectionIndex]: !this.expandedSectionIndices[sectionIndex],
    };
  }

  <template>
    <div class="doc-foundation-page__content w-100p">
      {{#if this.sections.length}}
        {{#each this.sections as |section sectionIndex|}}
          <div class="ulx-foundation-section mgb10 relative" role="region">
            {{#if section.title}}
              <h4 class="bold-font mgt0 mgb4">{{section.title}}</h4>
            {{/if}}
            <div class="overflow-auto mgb6">
              <table class="w-100p rds2" role="grid">
                <thead class="bg-default bd-b">
                  <tr>
                    <th class="text-left pdx4 pdy3 bold-font fg-text">Class</th>
                    <th
                      class="text-left pdx4 pdy3 bold-font fg-text"
                    >Styles</th>
                  </tr>
                </thead>
                <tbody class="bg-body">
                  {{#each (this.visibleRows section sectionIndex) as |row|}}
                    <tr class="bd-b bd-default">
                      <td class="pdx4 pdy3 fg-link font-regular">
                        <div class="fg-primary">{{this.rowClass row}}</div>
                      </td>
                      <td class="pdx4 pdy3 fg-text-secondary font-regular">
                        <div
                          class="fg-blue whitespace-pre-line"
                        >{{this.rowStyles row}}</div>
                      </td>
                    </tr>
                  {{/each}}
                </tbody>
              </table>
            </div>
            {{#if (this.hasMoreRows section)}}
              <div>
                <button
                  type="button"
                  class="ulx-button primary pilled raised m-size"
                  {{on "click" (fn this.toggleSection sectionIndex)}}
                >
                  {{#if (this.isSectionExpanded sectionIndex)}}
                    Show less
                  {{else}}
                    Show more
                  {{/if}}
                </button>
              </div>
            {{/if}}
          </div>
        {{/each}}
      {{else}}
        <p class="fg-text-secondary">
          No utilities available for this category. If you recently updated
          <code>utill.less</code>, run
          <code>npm run generate:uls-schema</code>
          to regenerate the schema.
        </p>
      {{/if}}
    </div>
  </template>
}
