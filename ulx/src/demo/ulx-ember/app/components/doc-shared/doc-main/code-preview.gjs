/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import CodeBlock from 'ember-prism/components/code-block';
import { t } from 'ulx-components';

export default class CodePreviewComponent extends Component {
  @tracked isCodeTab = false;
  @tracked colCount = 6;
  @tracked expanded = false;
  @tracked copied = false;

  @action
  setActiveTab(isCodeTab) {
    this.isCodeTab = isCodeTab;
  }

  get effectiveLanguage() {
    return !this.expanded ? 'markup' : 'javascript';
  }

  extractTemplateOnly(source) {
    if (!source) {
      return '';
    }

    const match = source.match(/<template>[\s\S]*?<\/template>/m);

    return match ? match[0].trim() : '';
  }

  @action
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  @action
  async copyCode() {
    if (
      this.displayCode &&
      typeof navigator !== 'undefined' &&
      navigator.clipboard
    ) {
      try {
        await navigator.clipboard.writeText(this.displayCode);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    }
  }

  // Dedent helper: remove common indentation, preserve relative indents
  dedentBlock(text) {
    if (!text) return '';
    const normalized = text
      .replace(/\r\n?|\u2028|\u2029/g, '\n')
      .replace(/^\uFEFF/, '');
    // Remove leading newline if present
    const withoutLeadingNewline = normalized.replace(/^\n/, '');
    const lines = withoutLeadingNewline.split('\n');

    // Find minimum indentation (excluding empty lines)
    let minIndent = Infinity;
    for (const line of lines) {
      if (line.trim().length === 0) continue; // Skip empty lines
      const m = line.match(/^[\t ]*/);
      const count = m ? m[0].length : 0;
      if (count < minIndent) minIndent = count;
    }

    // If no indentation found, return as is
    if (!isFinite(minIndent) || minIndent === 0) {
      return withoutLeadingNewline.trimEnd();
    }

    // Remove common indentation from all lines
    let out = lines.map((l) => {
      if (l.trim().length === 0) return l; // Keep empty lines as is
      return l.slice(minIndent);
    });

    // Remove leading whitespace from first line
    if (out.length > 0 && out[0]) {
      out[0] = out[0].replace(/^\s+/, '');
    }

    return out.join('\n').trimEnd();
  }

  get displayCode() {
    const source = this.args.source;
    if (!source) return '';

    const code = String(source);

    // collapsed → template only
    if (!this.expanded) {
      const templateOnly = this.extractTemplateOnly(code);

      // 👇 IMPORTANT FIX
      if (!templateOnly) {
        return this.dedentBlock(code);
      }

      return this.dedentBlock(templateOnly);
    }

    // expanded → full code
    return this.dedentBlock(code);
  }

  get language() {
    // Map language names to Prism-supported languages
    const lang = this.args.language || 'javascript';
    // Map jsx to javascript, handlebars to markup
    if (lang === 'jsx') return 'javascript';
    if (lang === 'handlebars' || lang === 'hbs') return 'markup';
    return lang;
  }

  get snippetName() {
    return this.args.snippetName || 'code';
  }

  <template>
    <div class="code-preview-container" ...attributes>
      {{#if @title}}
        <h5 class="mb-2 font-medium">{{@title}}</h5>
      {{/if}}
      {{#if @description}}
        <div class="text-sm fg-text-secondary mb-4">
          {{@description}}
        </div>
      {{/if}}
      {{#if (has-block)}}
        {{#if @hasDemo}}
          <div class="demo-and-code">
            <div class="demo">
              <div class="code-preview-container">
                <div class="demo bg-default border p-8 mb-2 rounded-md">
                  {{yield}}
                </div>
                {{#if this.displayCode}}
                  <div class="code-block">
                    {{#if this.expanded}}
                      <CodeBlock
                        @code={{this.displayCode}}
                        @language="javascript"
                      />
                    {{else}}
                      <CodeBlock
                        @code={{this.displayCode}}
                        @language={{this.effectiveLanguage}}
                      />
                    {{/if}}
                    <div class="code-actions flex gap-4 py-1 px-3">
                      <button
                        type="button"
                        class="expand-btn {{if this.expanded 'is-expanded'}}"
                        {{on "click" this.toggleExpanded}}
                        aria-label={{if
                          this.expanded
                          (t "lbl.collapse.code")
                          (t "lbl.expand.code")
                        }}
                      >
                        <svg
                          class="fit-width-icon"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <!-- left bar -->
                          <path class="bar left" d="M4 4v16" />

                          <!-- right bar -->
                          <path class="bar right" d="M20 4v16" />

                          <!-- left arrow -->
                          <path
                            class="arrow left"
                            d="M10 12H6m0 0l2-2m-2 2l2 2"
                          />

                          <!-- right arrow -->
                          <path
                            class="arrow right"
                            d="M14 12h4m0 0l-2-2m2 2l-2 2"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="copy-btn {{if this.copied 'is-copied'}}"
                        aria-label={{t "lbl.copy.code"}}
                        {{on "click" this.copyCode}}
                      >
                        <svg
                          class="copy-icon"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <!-- Copy icon -->
                          <g class="icon-copy">
                            <rect
                              x="6"
                              y="2"
                              width="13"
                              height="13"
                              rx="2"
                              stroke="currentColor"
                              stroke-width="2"
                            />
                            <rect
                              x="1"
                              y="8"
                              width="13"
                              height="13"
                              rx="2"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="#272822"
                            />

                          </g>

                          <!-- Check icon -->
                          <path
                            class="icon-check"
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                {{/if}}
              </div>
            </div>
          </div>
        {{else}}
          {{#if this.displayCode}}
            <div class="code-block">
              <CodeBlock
                @code={{this.displayCode}}
                @language={{this.effectiveLanguage}}
              />
              <div class="code-actions flex gap-4 py-1 px-3">
                <button
                  type="button"
                  class="copy-btn {{if this.copied 'is-copied'}}"
                  aria-label={{t "lbl.copy.code"}}
                  {{on "click" this.copyCode}}
                >
                  <svg
                    class="copy-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <!-- Copy icon -->
                    <g class="icon-copy">
                      <rect
                        x="6"
                        y="2"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                      <rect
                        x="1"
                        y="8"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="#272822"
                      />

                    </g>

                    <!-- Check icon -->
                    <path
                      class="icon-check"
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          {{/if}}
        {{/if}}
      {{else}}
        {{#if this.displayCode}}
          <div class="code-block">
            <CodeBlock
              @code={{this.displayCode}}
              @language={{this.effectiveLanguage}}
            />
            <div class="code-actions flex gap-4 py-1 px-3">
              <button
                type="button"
                aria-label={{t "lbl.copy.code"}}
                {{on "click" this.copyCode}}
              >
                {{#if this.copied}}
                  {{t "lbl.copied"}}
                {{else}}
                  {{t "lbl.copy"}}
                {{/if}}
              </button>
            </div>
          </div>
        {{/if}}
      {{/if}}
    </div>
  </template>
}
