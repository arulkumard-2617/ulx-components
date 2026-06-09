import Component from '@glimmer/component';
import FoundationSection from './foundation-section';
import CodePreview from './code-preview';
import RichText from './rich-text';
import DocSectionNav from './doc-section-nav';
export default class DocPanelComponent extends Component {
  hasValidComponent(feature) {
    return feature?.demo?.component && feature.demo.component !== null;
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
              {{#if feature.sectionDesc}}
                <RichText
                  @as={{feature.sectionDesc.props.as}}
                  @content={{feature.sectionDesc.props.content}}
                />
              {{/if}}

              {{#if feature.demo}}
                <CodePreview
                  @source={{feature.demo.props.source}}
                  @language={{feature.demo.props.language}}
                  @snippetName={{feature.demo.props.snippetName}}
                  @title={{feature.demo.props.title}}
                  @description={{feature.demo.props.description}}
                  @hasDemo={{this.hasValidComponent feature}}
                >
                  {{#if (this.hasValidComponent feature)}}
                    {{#let feature.demo.component as |DemoComponent|}}
                      <DemoComponent />
                    {{/let}}
                  {{/if}}
                </CodePreview>
              {{/if}}
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
