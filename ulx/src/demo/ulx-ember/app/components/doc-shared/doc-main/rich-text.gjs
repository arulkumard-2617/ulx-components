import Component from '@glimmer/component';

export default class RichTextComponent extends Component {
  get isSpan() {
    return this.args.as === 'span';
  }

  get htmlContent() {
    // Convert code tags to proper HTML with styling
    if (typeof this.args.content === 'string') {
      return this.args.content
        .replace(
          /<code>/g,
          '<code class="fg-primary bg-layer1 px-2 py-1 rounded">',
        )
        .replace(/<\/code>/g, '</code>');
    }
    return this.args.content;
  }

  <template>
    <div class="mb-3">
      {{#if this.isSpan}}
        <span>
          {{{this.htmlContent}}}
        </span>
      {{else}}
        <div>
          {{{this.htmlContent}}}
        </div>
      {{/if}}
    </div>
  </template>
}
