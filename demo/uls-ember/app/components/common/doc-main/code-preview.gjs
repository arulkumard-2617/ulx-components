import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import CodeBlock from 'ember-prism/components/code-block';

export default class CodePreviewComponent extends Component {
  @tracked isCodeTab = false;
  @tracked colCount = 6;
  @tracked expanded = false;
  @tracked copied = false;

  @action
  setActiveTab(isCodeTab) {
    this.isCodeTab = isCodeTab;
  }

  @action
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  @action
  async copyCode() {
    if (this.displayCode && typeof navigator !== 'undefined' && navigator.clipboard) {
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
    if (!text) return "";
    const normalized = text.replace(/\r\n?|\u2028|\u2029/g, "\n").replace(/^\uFEFF/, "");
    // Remove leading newline if present
    const withoutLeadingNewline = normalized.replace(/^\n/, "");
    const lines = withoutLeadingNewline.split("\n");
    
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
      out[0] = out[0].replace(/^\s+/, "");
    }
    
    return out.join("\n").trimEnd();
  }

  get displayCode() {
    const source = this.args.source;
    if (!source) {
      return "";
    }
    const code = String(source);
    const dedented = this.dedentBlock(code);
    // Return dedented code (already trimmed)
    return dedented;
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
        <h5 class="mgb2 font-medium">{{@title}}</h5>
      {{/if}}
      {{#if @description}}
        <div class="text-small fg-text-secondary mgb4">
          {{@description}}
        </div>
      {{/if}}
      {{#if (has-block)}}
        {{#if @hasDemo}}
          <div class="demo-and-code">
            <div class="demo">
              <div class="code-preview-container">
                <div class="demo bg-default bdr pd8 mgb2 rds3">
                  {{yield}}
                </div>
                {{#if this.displayCode}}
                  <div class="code-block">
                    <CodeBlock
                      @code={{this.displayCode}}
                      @language={{this.language}}
                    />
                    <div class="code-actions fxb gp4 pdy1 pdx3">
                      <button type="button" aria-label="Toggle code view" {{on "click" this.toggleExpanded}}>
                        code
                      </button>
                      <button type="button" aria-label="Copy code" {{on "click" this.copyCode}}>
                        {{#if this.copied}}
                          copied
                        {{else}}
                          copy
                        {{/if}}
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
                @language={{this.language}}
              />
              <div class="code-actions fxb gp4 pdy1 pdx3">
                <button type="button" aria-label="Copy code" {{on "click" this.copyCode}}>
                  {{#if this.copied}}
                    copied
                  {{else}}
                    copy
                  {{/if}}
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
              @language={{this.language}}
            />
            <div class="code-actions fxb gp4 pdy1 pdx3">
              <button type="button" aria-label="Copy code" {{on "click" this.copyCode}}>
                {{#if this.copied}}
                  copied
                {{else}}
                  copy
                {{/if}}
              </button>
            </div>
          </div>
        {{/if}}
      {{/if}}
    </div>
  </template>
}

