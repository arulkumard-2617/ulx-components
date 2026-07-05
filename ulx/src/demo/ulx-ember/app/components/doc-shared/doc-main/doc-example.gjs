import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';
import RichText from './rich-text';
import CodePreview from './code-preview';

/**
 * Reusable documentation example block: description, live demo, code preview, and notes.
 *
 * @param {string} [title] - Optional example title (omit when a parent section provides one)
 * @param {string} [description] - HTML description rendered via RichText
 * @param {string} [descriptionAs] - RichText wrapper element (span | div)
 * @param {string} source - Source text for CodePreview
 * @param {string} [language] - CodeMirror language hint
 * @param {string} [filename] - Source filename label
 * @param {string} [snippetName] - Fallback filename stem when @filename is omitted
 * @param {boolean} [hasDemo] - When true and a default block is provided, renders the live demo
 * @param {boolean} [expandable] - Enable template-only expand/collapse in CodePreview
 * @param {number|string} [maxHeight] - Max CodePreview height before scrolling
 * @param {string} [notes] - Optional HTML notes rendered below the preview
 */
export default class DocExampleComponent extends Component {
  get hasDemoBlock() {
    return Boolean(this.args.hasDemo);
  }

  <template>
    <div class="doc-example" ...attributes>
      {{#if @title}}
        <h4 class="bold-font mt-0 mb-2">{{@title}}</h4>
      {{/if}}

      {{#if @description}}
        <RichText @as={{or @descriptionAs "span"}} @content={{@description}} />
      {{/if}}

      <CodePreview
        @source={{@source}}
        @language={{@language}}
        @filename={{@filename}}
        @snippetName={{@snippetName}}
        @hasDemo={{this.hasDemoBlock}}
        @expandable={{@expandable}}
        @maxHeight={{@maxHeight}}
      >
        {{#if this.hasDemoBlock}}
          {{yield}}
        {{/if}}
      </CodePreview>

      {{#if @notes}}
        <RichText @as="div" @content={{@notes}} />
      {{/if}}

      {{#if (has-block "notes")}}
        <div class="doc-example__notes mt-4">
          {{yield to="notes"}}
        </div>
      {{/if}}
    </div>
  </template>
}
