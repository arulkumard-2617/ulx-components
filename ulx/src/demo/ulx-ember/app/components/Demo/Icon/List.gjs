import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxIcon } from 'ulx-components';

const BS_ICONS_CSS_URL =
  'https://cdn.zicons.in/21598000000025464/latest/bs-icons1.css';
const ICON_NAME_REGEX = /\.bs-icons1\.([a-zA-Z0-9_-]+):before/g;

export default class DemoIconList extends Component {
  on = on;
  runOnInsert = modifier(() => {
    this.loadIcons();
  });
  @tracked query = '';
  @tracked icons = [];

  get filteredIcons() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.icons;
    return this.icons.filter((name) => name.toLowerCase().includes(q));
  }

  @action
  loadIcons() {
    this.collectFromStyleSheets() || this.fetchAndParseCss();
  }

  collectFromStyleSheets() {
    const collected = new Set();
    try {
      Array.from(document.styleSheets).forEach((sheet) => {
        // Only parse the bs-icons1 icon-font stylesheet; skip app/vendor CSS
        // so we don't pick up utility classes like .bs-icons1.primary, .bs-icons1.s12, etc.
        if (!sheet.href || !sheet.href.includes('bs-icons1.css')) return;
        let rules;
        try {
          rules = sheet.cssRules || sheet.rules;
        } catch {
          return;
        }
        if (!rules) return;
        Array.from(rules).forEach((rule) => {
          if (!rule.selectorText) return;
          const selectors = rule.selectorText.split(',');
          selectors.forEach((sel) => {
            const s = sel.trim();
            if (s.startsWith('.bs-icons1.')) {
              const withoutPseudo = s.split(':')[0];
              if (withoutPseudo === '.bs-icons1') return;
              const match = /\.bs-icons1\.([a-zA-Z0-9_-]+)$/.exec(
                withoutPseudo,
              );
              if (match && !match[1].includes(' ')) {
                collected.add(match[1]);
              }
            }
          });
        });
      });
      if (collected.size > 0) {
        this.icons = Array.from(collected).sort();
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  }

  fetchAndParseCss() {
    fetch(BS_ICONS_CSS_URL)
      .then((r) => r.text())
      .then((css) => {
        const collected = new Set();
        let m;
        ICON_NAME_REGEX.lastIndex = 0;
        while ((m = ICON_NAME_REGEX.exec(css))) {
          collected.add(m[1]);
        }
        this.icons = Array.from(collected).sort();
      })
      .catch(() => {
        this.icons = [];
      });
  }

  @action
  updateQuery(e) {
    this.query = e.target.value ?? '';
  }
  <template>
    <div class="fxc gp4" {{this.runOnInsert}}>
      <div class="fxb fvc gp3 mgb8">
        <input
          type="text"
          placeholder="Search icons..."
          class="ulx-input"
          aria-label="Search icons"
          value={{this.query}}
          {{this.on "input" this.updateQuery}}
        />
        <span class="text-sm ulx-badge">{{this.filteredIcons.length}}
          icons</span>
      </div>

      {{#if this.filteredIcons.length}}
        <div class="ulx-grid gp5 col-5 pdt5 text-center bd-t">
          {{#each this.filteredIcons as |iconName|}}
            <div class="pd3 fxb column fvc gp3">
              <UlxIcon
                @componentClass="bs-icons1"
                @type="font"
                @iconName={{iconName}}
                @size="s20"
                @ariaLabel=""
              />
              <span class="text-sm">{{iconName}}</span>
            </div>
          {{/each}}
        </div>
      {{else}}
        <div class="text-center fg-text-muted pdy6 bd-t">No icons found</div>
      {{/if}}
    </div>
  </template>
}
