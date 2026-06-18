import Component from '@glimmer/component';
import { UlxDivider, UlxIcon } from 'ulx-components';
import { usagesPreviewRegistry } from '../../../documentation/shared/usages-previews';

export default class ComponentUsagesComponent extends Component {
  get content() {
    return this.args.content ?? {};
  }

  get routeKey() {
    return this.args.routeKey ?? '';
  }

  get previewEntry() {
    return this.routeKey ? usagesPreviewRegistry[this.routeKey] : null;
  }

  get antiPatternPreview() {
    return this.previewEntry?.antiPattern ?? null;
  }

  get owns() {
    return this.content.owns ?? [];
  }

  get whenToUse() {
    return this.content.whenToUse ?? [];
  }

  get whenNotToUse() {
    return this.content.whenNotToUse ?? [];
  }

  get dos() {
    return this.content.dos ?? [];
  }

  get donts() {
    return this.content.donts ?? [];
  }

  get antiPatterns() {
    return this.content.antiPatterns ?? [];
  }

  get hasUsageGuidelines() {
    return this.whenToUse.length || this.whenNotToUse.length;
  }

  get hasBestPractices() {
    return this.dos.length || this.donts.length;
  }

  get hasContentAfterResponsibility() {
    return (
      this.hasUsageGuidelines || this.hasBestPractices || this.antiPatterns.length
    );
  }

  get hasContentAfterUsageGuidelines() {
    return this.hasBestPractices || this.antiPatterns.length;
  }

  get hasContentAfterBestPractices() {
    return this.antiPatterns.length;
  }

  <template>
    <div
      class="component-usages flex flex-col gap-6 text-14"
      data-doc="component-usages"
    >
      {{#if this.owns.length}}
        <section
          class="flex flex-col gap-4"
          data-usages-section="responsibility"
        >
          <div class="flex items-center gap-2">
            <UlxIcon
              @iconName="focus-icon"
              @type="font"
              @componentClass="bs-icons1"
              @size="s22"
              @customClass="fg-primary shrink-0"
              aria-hidden="true"
            />
            <h4 class="bold-font m-0 text-15">{{"Responsibility"}}</h4>
          </div>

          <ul class="m-0 ps-6 flex flex-col gap-2 component-usages__list">
            {{#each this.owns as |item|}}
              <li class="fg-text-secondary">{{item}}</li>
            {{/each}}
          </ul>
          {{#if this.hasContentAfterResponsibility}}
            <UlxDivider @type="dotted" @customClass="my-1 h-4" />
          {{/if}}
        </section>
      {{/if}}

      {{#if this.hasUsageGuidelines}}
        <div
          class="flex flex-col gap-4"
          data-usages-section="usage-guidelines"
        >
          <div class="ulx-grid col-2 gap-6 items-start">
            {{#if this.whenToUse.length}}
              <section
                class="flex flex-col gap-4"
                data-usages-section="when-to-use"
              >
                <div class="flex items-center gap-2">
                  <UlxIcon
                    @customClass="fg-green shrink-0"
                    @type="font"
                    @iconName="ls-tick-filled-icon"
                    @size="s22"
                    aria-hidden="true"
                  />
                  <h4 class="bold-font m-0 text-15">{{"When to use"}}</h4>
                </div>
                <ul class="m-0 ps-6 flex flex-col gap-2 component-usages__list">
                  {{#each this.whenToUse as |item|}}
                    <li class="fg-text-secondary">{{item}}</li>
                  {{/each}}
                </ul>
              </section>
            {{/if}}

            {{#if this.whenNotToUse.length}}
              <section
                class="flex flex-col gap-4"
                data-usages-section="when-not-to-use"
              >
                <div class="flex items-center gap-2">
                  <UlxIcon
                    @customClass="fg-red shrink-0"
                    @type="font"
                    @iconName="close-stroke-icon"
                    @size="s22"
                    aria-hidden="true"
                  />
                  <h4 class="bold-font m-0 text-15">{{"When not to use"}}</h4>
                </div>
                <ul class="m-0 ps-6 flex flex-col gap-2 component-usages__list">
                  {{#each this.whenNotToUse as |entry|}}
                    <li class="fg-text-secondary">
                      {{#if entry.instead}}
                        <strong class="fg-text-primary">{{entry.instead}}</strong>
                        {{#if entry.when}}
                          <span> — {{entry.when}}</span>
                        {{/if}}
                      {{else}}
                        {{entry}}
                      {{/if}}
                    </li>
                  {{/each}}
                </ul>
              </section>
            {{/if}}
          </div>
          {{#if this.hasContentAfterUsageGuidelines}}
            <UlxDivider @type="dotted" @customClass="my-1 h-4" />
          {{/if}}
        </div>
      {{/if}}

      {{#if this.hasBestPractices}}
        <div
          class="flex flex-col gap-4"
          data-usages-section="best-practices"
        >
          <div class="ulx-grid col-2 gap-6 items-start">
            {{#if this.dos.length}}
              <section class="flex flex-col gap-4" data-usages-section="do">
                <div class="flex items-center gap-2">
                  <UlxIcon
                    @customClass="fg-green shrink-0"
                    @type="font"
                    @iconName="ls-tick-filled-icon"
                    @size="s22"
                    aria-hidden="true"
                  />
                  <h4 class="bold-font m-0 text-15">{{"Do"}}</h4>
                </div>
                <ul class="m-0 ps-6 flex flex-col gap-2 component-usages__list">
                  {{#each this.dos as |item|}}
                    <li class="fg-text-secondary">{{item}}</li>
                  {{/each}}
                </ul>
              </section>
            {{/if}}

            {{#if this.donts.length}}
              <section class="flex flex-col gap-4" data-usages-section="dont">
                <div class="flex items-center gap-2">
                  <UlxIcon
                    @customClass="fg-red shrink-0"
                    @type="font"
                    @iconName="close-stroke-icon"
                    @size="s22"
                    aria-hidden="true"
                  />
                  <h4 class="bold-font m-0 text-15">{{"Don't"}}</h4>
                </div>
                <ul class="m-0 ps-6 flex flex-col gap-2 component-usages__list">
                  {{#each this.donts as |item|}}
                    <li class="fg-text-secondary">{{item}}</li>
                  {{/each}}
                </ul>
              </section>
            {{/if}}
          </div>
          {{#if this.hasContentAfterBestPractices}}
            <UlxDivider @type="dotted" @customClass="my-1 h-4" />
          {{/if}}
        </div>
      {{/if}}

      {{#if this.antiPatterns.length}}
        <section
          class="flex flex-col gap-4"
          data-usages-section="anti-patterns"
        >
          <div class="flex items-center gap-2">
            <UlxIcon
              @iconName="alert-icon-01"
              @type="font"
              @componentClass="bs-icons1"
              @size="s22"
              @customClass="fg-red shrink-0"
              aria-hidden="true"
            />
            <h4 class="bold-font m-0 text-15">{{"Anti-patterns"}}</h4>
          </div>

          <div class="ulx-grid col-2 gap-6 items-start">
            <ul class="m-0 ps-6 flex flex-col gap-2 component-usages__list">
              {{#each this.antiPatterns as |item|}}
                <li class="fg-text-secondary">{{item}}</li>
              {{/each}}
            </ul>

            {{#if this.antiPatternPreview}}
              <div class="border rounded-md p-6">
                {{#let this.antiPatternPreview as |PreviewComponent|}}
                  <PreviewComponent />
                {{/let}}
              </div>
            {{/if}}
          </div>
        </section>
      {{/if}}
    </div>
  </template>
}
