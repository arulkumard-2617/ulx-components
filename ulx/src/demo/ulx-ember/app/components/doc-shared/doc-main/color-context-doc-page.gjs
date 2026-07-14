import Component from '@glimmer/component';
import FoundationSection from './foundation-section';
import DocSectionNav from './doc-section-nav';

/**
 * Renders color context swatch grids driven by color-context-schema.js.
 * @param {Object} model - { title, description, sections }
 */
export default class ColorContextDocPageComponent extends Component {
  get sections() {
    return Array.isArray(this.args.model?.sections)
      ? this.args.model.sections
      : [];
  }

  get sectionNavItems() {
    return this.sections.map((section) => ({
      id: section.id,
      sectionNav: section.sectionNav
    }));
  }

  isSwatchSection = (section) => {
    return section?.kind === 'swatches';
  };

  <template>
    <div class="flex justify-between gap-8 items-start min-w-0">
      <div class="grow w-full min-w-0">
        {{#each this.sections as |section|}}
          {{#if (this.isSwatchSection section)}}
            <FoundationSection
              @id={{section.id}}
              @title={{section.sectionNav}}
              @subtitle={{section.subtitle}}
            >
              <div class="flex flex-wrap gap-x-10 gap-y-5">
                {{#each section.groups as |group|}}
                  <div>
                    <h6 class="bold-font mt-0 mb-2">{{group.title}}</h6>
                    <div class="flex flex-wrap gap-3">
                      {{#each group.rows as |row|}}
                        <div class="flex flex-col gap-2 min-w-0">
                          <div class={{row.classes}}>
                            {{#if row.sampleText}}
                              <span class="bold-font">{{row.sampleText}}</span>
                            {{/if}}
                          </div>
                        </div>
                      {{/each}}
                    </div>
                  </div>
                {{/each}}
              </div>
            </FoundationSection>
          {{/if}}
        {{/each}}
      </div>
      <DocSectionNav @features={{this.sectionNavItems}} />
    </div>
  </template>
}
