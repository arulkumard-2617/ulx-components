import Component from '@glimmer/component';

export default class RichTextComponent extends Component {
  get isSpan() {
    return this.args.as === 'span';
  }

  get htmlContent() {
    // Convert code tags to proper HTML with styling
    if (typeof this.args.content === 'string') {
      return this.args.content
        .replace(/<code>/g, '<code class="fg-primary bg-layer1 pdx2 pdy1 rds2">')
        .replace(/<\/code>/g, '</code>');
    }
    return this.args.content;
  }

  <template>
    <div class="mgb3">
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

