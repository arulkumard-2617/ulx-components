/* eslint-disable no-console */
import Component from '@glimmer/component';
import { registerDestructor } from '@ember/destroyable';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { htmlSafe } from '@ember/template';
import codemirrorEditor from '../../../modifiers/codemirror-editor';
import { resolveDisplayCode } from '../../../utils/code-display';
import { effectiveLanguageFor } from '../../../utils/codemirror-languages';

const DEFAULT_MAX_HEIGHT = 480;
const COPY_RESET_MS = 2000;

/**
 * Read-only CodeMirror 6 code preview for documentation pages.
 *
 * @param {string} source - Raw source text to display
 * @param {string} [language] - Syntax language hint (gjs, javascript, html, css, less, json, etc.)
 * @param {string} [title] - Optional section title above the preview
 * @param {string} [description] - Optional description text
 * @param {string} [filename] - Source filename shown above the editor (e.g. basic.gjs)
 * @param {string} [snippetName] - Fallback for filename when @filename is omitted
 * @param {boolean} [hasDemo] - When true, renders the yielded demo above the code block
 * @param {boolean} [expandable] - Show expand/collapse for full source vs template-only view
 * @param {number|string} [maxHeight] - Max editor height in px before scrolling (default 480)
 */
export default class CodePreviewComponent extends Component {
  @tracked expanded = false;
  @tracked copied = false;
  copyResetTimer = null;

  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, () => this.clearCopyResetTimer());
  }

  clearCopyResetTimer() {
    if (this.copyResetTimer) {
      clearTimeout(this.copyResetTimer);
      this.copyResetTimer = null;
    }
  }

  @action
  toggleExpanded(event) {
    const wrap = event.currentTarget.closest('.ulx-code-preview-editor-wrap');
    const scroller = wrap?.querySelector('.cm-scroller');
    const scrollTop = scroller?.scrollTop ?? 0;

    this.expanded = !this.expanded;

    if (scroller) {
      requestAnimationFrame(() => {
        const nextScroller = wrap?.querySelector('.cm-scroller');
        if (nextScroller) {
          nextScroller.scrollTop = this.expanded ? 0 : scrollTop;
        }
      });
    }
  }

  @action
  async copyCode() {
    if (
      !this.displayCode ||
      typeof navigator === 'undefined' ||
      !navigator.clipboard
    ) {
      return;
    }

    try {
      await navigator.clipboard.writeText(this.displayCode);
      this.copied = true;
      this.clearCopyResetTimer();
      this.copyResetTimer = setTimeout(() => {
        this.copied = false;
        this.copyResetTimer = null;
      }, COPY_RESET_MS);
    } catch (err) {
      console.error('Failed to copy code:', err);
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

  get displayFilename() {
    if (this.args.filename) {
      return this.args.filename;
    }

    if (this.args.snippetName) {
      return `${this.args.snippetName}.gjs`;
    }

    return null;
  }

  get editorMaxHeight() {
    const value = this.args.maxHeight;
    if (value === null || value === false) {
      return null;
    }

    if (value === undefined) {
      return this.expanded ? null : DEFAULT_MAX_HEIGHT;
    }

    return this.expanded ? null : Number(value);
  }

  get editorWrapStyle() {
    const maxHeight = this.editorMaxHeight;
    if (maxHeight == null || Number.isNaN(maxHeight)) {
      return htmlSafe('--ulx-code-preview-max-height: none;');
    }

    return htmlSafe(`--ulx-code-preview-max-height: ${maxHeight}px;`);
  }

  get expandLabel() {
    return this.expanded ? 'Show template only' : 'Show full source';
  }

  get copyLabel() {
    return this.copied ? 'Copied' : 'Copy code';
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

      {{#if @hasDemo}}
        {{#if (has-block)}}
          <div class="demo-and-code">
            <div class="demo bg-default border p-8 mb-2 rounded-md">
              {{yield}}
            </div>
          </div>
        {{/if}}
      {{/if}}

      {{#if this.displayCode}}
        <div
          class="relative ulx-code-preview-editor-wrap
            {{if this.expanded 'is-expanded'}}
            {{if this.displayFilename 'has-filename'}}"
          style={{this.editorWrapStyle}}
        >
          <div
            class="ulx-code-preview-editor-shell code-block-dark rounded-md overflow-hidden"
          >
            {{#if this.displayFilename}}
              <div
                class="ulx-code-preview-filename text-12 fg-text-secondary px-4 py-2 border-b"
                data-qa="ulx-code-preview-filename"
              >
                {{this.displayFilename}}
              </div>
            {{/if}}

            <div
              class="ulx-code-preview-editor relative"
              {{codemirrorEditor this.displayCode this.effectiveLanguage}}
            ></div>
          </div>

          <div
            class="ulx-code-preview-toolbar absolute top-3 right-3 flex items-center gap-2"
            role="toolbar"
            aria-label="Code preview actions"
          >
            {{#if this.showExpandToggle}}
              <button
                type="button"
                class="ulx-code-preview-action pointer
                  {{if this.expanded 'is-expanded'}}"
                title={{this.expandLabel}}
                aria-label={{this.expandLabel}}
                aria-expanded={{this.expanded}}
                {{on "click" this.toggleExpanded}}
              >
                <svg
                  class="ulx-code-preview-expand-icon fg-white inline-block"
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
              class="ulx-code-preview-action
                {{if this.copied 'is-copied'}}"
              title={{this.copyLabel}}
              aria-label={{this.copyLabel}}
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
              <span class="ulx-code-preview-copied-label fg-white text-12">
                Copied
              </span>
            </button>
          </div>
        </div>
      {{/if}}
    </div>
  </template>
}
