import Component from '@glimmer/component';
import FoundationSection from './foundation-section';
import DocExample from './doc-example';
import DocSectionNav from './doc-section-nav';

export default class DocPanelComponent extends Component {
  hasValidComponent(feature) {
    return Boolean(
      feature?.demo?.component && feature.demo.component !== null
    );
  }

  <template>
    <div class="flex justify-between gap-8 items-start min-w-0">
      <div class="grow w-full min-w-0">
        {{#if @features}}
          {{#each @features as |feature|}}
            <FoundationSection
              @id={{feature.id}}
              @title={{feature.sectionNav}}
            >
              <DocExample
                @description={{if
                  feature.sectionDesc
                  feature.sectionDesc.props.content
                }}
                @source={{feature.demo.props.source}}
                @language={{feature.demo.props.language}}
                @filename={{feature.demo.props.filename}}
                @snippetName={{feature.demo.props.snippetName}}
                @hasDemo={{this.hasValidComponent feature}}
                @notes={{feature.demo.props.notes}}
              >
                {{#if (this.hasValidComponent feature)}}
                  {{#let feature.demo.component as |DemoComponent|}}
                    <DemoComponent />
                  {{/let}}
                {{/if}}
              </DocExample>
            </FoundationSection>
          {{/each}}
        {{else}}
          <p class="fg-text-secondary">No features available</p>
        {{/if}}
      </div>
      <DocSectionNav @features={{@features}} />
    </div>
  </template>
}
