/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import codemirrorEditor from '../../../modifiers/codemirror-editor';
import { resolveDisplayCode } from '../../../utils/code-display';
import { effectiveLanguageFor } from '../../../utils/codemirror-languages';

/**
 * Read-only CodeMirror 6 code preview for documentation pages.
 *
 * @param {string} source - Raw source text to display
 * @param {string} [language] - Syntax language hint (gjs, javascript, html, css, json, etc.)
 * @param {string} [title] - Optional section title above the preview
 * @param {string} [description] - Optional description text
 * @param {boolean} [hasDemo] - When true, renders the yielded demo above the code block
 * @param {boolean} [expandable] - Show expand/collapse for full source vs template-only view
 */
export default class CodePreviewComponent extends Component {
  @tracked expanded = false;
  @tracked copied = false;

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

  get displayCode() {
    return resolveDisplayCode(this.args.source, { expanded: this.expanded });
  }

  get effectiveLanguage() {
    return effectiveLanguageFor(this.args.language, this.expanded);
  }

  get showExpandToggle() {
    if (this.args.expandable === false) {
      return false;
    }
    const source = this.args.source;
    if (!source) return false;
    return String(source).includes('<template>');
  }

  <template>
    <div class="ulx-code-preview relative" ...attributes>
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
              <div class="relative">
                <div class="demo bg-default border p-8 mb-2 rounded-md">
                  {{yield}}
                </div>
                {{#if this.displayCode}}
                  <div class="relative ulx-code-preview-editor-wrap">
                    <div
                      class="ulx-code-preview-editor code-block-dark rounded-md overflow-hidden"
                      {{codemirrorEditor this.displayCode this.effectiveLanguage}}
                    ></div>
                    <div
                      class="absolute top-4 right-4 flex gap-4 py-1 px-3 rounded"
                    >
                      {{#if this.showExpandToggle}}
                        <button
                          type="button"
                          class="pointer {{if this.expanded 'is-expanded'}}"
                          {{on "click" this.toggleExpanded}}
                          aria-label={{if
                            this.expanded
                            "Collapse code"
                            "Expand code"
                          }}
                        >
                          <svg
                            class="fit-width-icon fg-white inline-block"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path class="bar left" d="M4 4v16" />
                            <path class="bar right" d="M20 4v16" />
                            <path
                              class="arrow left"
                              d="M10 12H6m0 0l2-2m-2 2l2 2"
                            />
                            <path
                              class="arrow right"
                              d="M14 12h4m0 0l-2-2m2 2l-2 2"
                            />
                          </svg>
                        </button>
                      {{/if}}
                      <button
                        type="button"
                        class="{{if this.copied 'is-copied'}}"
                        aria-label="Copy code"
                        {{on "click" this.copyCode}}
                      >
                        <svg
                          class="copy-icon inline-block fg-white"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
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
            <div class="relative ulx-code-preview-editor-wrap">
              <div
                class="ulx-code-preview-editor code-block-dark rounded-md overflow-hidden"
                {{codemirrorEditor this.displayCode this.effectiveLanguage}}
              ></div>
              <div class="absolute top-4 right-4 flex gap-4 py-1 px-3 rounded">
                <button
                  type="button"
                  class="{{if this.copied 'is-copied'}}"
                  aria-label="Copy code"
                  {{on "click" this.copyCode}}
                >
                  <svg
                    class="copy-icon inline-block fg-white"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
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
          <div class="relative ulx-code-preview-editor-wrap">
            <div
              class="ulx-code-preview-editor code-block-dark rounded-md overflow-hidden"
              {{codemirrorEditor this.displayCode this.effectiveLanguage}}
            ></div>
            <div class="absolute top-4 right-4 flex gap-4 py-1 px-3 rounded">
              {{#if this.showExpandToggle}}
                <button
                  type="button"
                  class="pointer {{if this.expanded 'is-expanded'}}"
                  {{on "click" this.toggleExpanded}}
                  aria-label={{if
                    this.expanded
                    "Collapse code"
                    "Expand code"
                  }}
                >
                  <svg
                    class="fit-width-icon fg-white inline-block"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path class="bar left" d="M4 4v16" />
                    <path class="bar right" d="M20 4v16" />
                    <path
                      class="arrow left"
                      d="M10 12H6m0 0l2-2m-2 2l2 2"
                    />
                    <path
                      class="arrow right"
                      d="M14 12h4m0 0l-2-2m2 2l-2 2"
                    />
                  </svg>
                </button>
              {{/if}}
              <button
                type="button"
                aria-label="Copy code"
                {{on "click" this.copyCode}}
              >
                {{#if this.copied}}
                  Copied
                {{else}}
                  Copy
                {{/if}}
              </button>
            </div>
          </div>
        {{/if}}
      {{/if}}
    </div>
  </template>
}
