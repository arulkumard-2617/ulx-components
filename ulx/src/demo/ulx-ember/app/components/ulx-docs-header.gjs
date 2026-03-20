import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { modifier } from 'ember-modifier';
import {
  UlxButton,
  UlxDropdown,
  UlxBadge,
  UlxSlidePane,
  UlxAccordion,
  UlxSelectButton,
  UlxToggle,
  UlxIcon,
  UlxProgressBar,
  t,
} from 'ulx-components';

export default class UlxDocsHeaderComponent extends Component {
  @tracked isSticky = false;
  @tracked isDarkMode = false;
  @tracked selectedTheme = 'default';
  @tracked selectedFont = 'lato2'; // ✅ NEW
  @tracked isAccessibilityOpen = false;
  @tracked accessibilityAccordionActiveIndex = 0;
  @tracked _saturationLocal = null;
  @tracked _colorAdjustmentLocal = null;

  @service accessibility;

  constructor() {
    super(...arguments);
    this.initializeDarkMode();
    this.initializeColorTheme();
    this.initializeFontFamily(); // ✅ NEW
  }

  /* ================= FONT ================= */

  get fontOptions() {
    return [
      { label: 'Zoho Puvi (Default)', value: 'zoho-puvi' },
      { label: 'Lato', value: 'lato' },
      { label: 'Lato2 ', value: 'lato2' },
      { label: 'Roboto', value: 'roboto' },
      { label: 'Manrope', value: 'manrope' },
    ];
  }

  initializeFontFamily() {
    if (typeof window === 'undefined') return;
    const savedFont = localStorage.getItem('ulx-font-family') || 'zoho-puvi';
    this.applyFont(savedFont);
  }

  applyFont(fontValue) {
    const nextFont = fontValue || 'zoho-puvi';
    this.selectedFont = nextFont;

    if (typeof document !== 'undefined') {
      const body = document.body;

      const fontClasses = ['lato2', 'lato', 'roboto', 'manrope', 'zoho-puvi'];

      fontClasses.forEach((cls) => body.classList.remove(cls));
      body.classList.add(`${nextFont}`);
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('ulx-font-family', nextFont);
    }
  }

  @action
  handleFontChange(value) {
    this.applyFont(value);
  }

  /* ================= EXISTING CODE ================= */

  initializeDarkMode() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const savedTheme = localStorage.getItem('ulx-theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        this.isDarkMode = true;
        document.body.classList.add('ulx-dark-mode');
      } else {
        this.isDarkMode = false;
        document.body.classList.remove('ulx-dark-mode');
      }
    }
  }

  get themeOptions() {
    return [
      {
        label: 'Default',
        value: 'default',
        badgeVariant: 'ulx-theme-badge-default',
      },
      {
        label: 'Cobalt',
        value: 'cobalt-theme',
        badgeVariant: 'ulx-theme-badge-cobalt',
      },
      {
        label: 'Fern',
        value: 'fern-theme',
        badgeVariant: 'ulx-theme-badge-fern',
      },
      {
        label: 'Cardinal',
        value: 'cardinal-theme',
        badgeVariant: 'ulx-theme-badge-cardinal',
      },
      {
        label: 'Tangerine',
        value: 'tangerine-theme',
        badgeVariant: 'ulx-theme-badge-tangerine',
      },
    ];
  }

  initializeColorTheme() {
    if (typeof window === 'undefined') return;
    const savedTheme = localStorage.getItem('ulx-color-theme') || 'default';
    this.applyTheme(savedTheme);
  }

  applyTheme(themeValue) {
    const nextTheme = themeValue || 'default';
    this.selectedTheme = nextTheme;

    if (typeof document !== 'undefined') {
      const body = document.body;
      const themeClasses = [
        'ulx-cobalt-theme',
        'ulx-fern-theme',
        'ulx-cardinal-theme',
        'ulx-tangerine-theme',
      ];

      themeClasses.forEach((themeClass) => body.classList.remove(themeClass));

      if (nextTheme !== 'default') {
        body.classList.add(`ulx-${nextTheme}`);
      }
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('ulx-color-theme', nextTheme);
    }
  }

  @action
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.body.classList.add('ulx-dark-mode');
        localStorage.setItem('ulx-theme', 'dark');
      } else {
        document.body.classList.remove('ulx-dark-mode');
        localStorage.setItem('ulx-theme', 'light');
      }
    }
  }

  @action
  handleThemeChange(value) {
    this.applyTheme(value);
  }

  setupScrollObserver = modifier(() => {
    const handleScroll = () => {
      this.isSticky = window.scrollY > 50;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  });

  <template>
    <div
      class="ulsp-topbar bg-default border-b h-64 p-1 ulx-grid col-1 w-full
        {{if this.isSticky 'sticky' ''}}"
      {{this.setupScrollObserver}}
    >
      <header class="ulx-container-fluid flex items-center justify-between">

        {{! LEFT }}
        <div class="t-left">
          <h3 class="bold-font">ULX <span class="fg-primary">EMBER</span></h3>
        </div>

        {{! RIGHT }}
        <div class="t-right flex items-center gap-2">

          {{! ✅ FONT DROPDOWN }}
          <UlxDropdown
            id="ulx-font-select"
            @options={{this.fontOptions}}
            @value={{this.selectedFont}}
            @onChange={{this.handleFontChange}}
          >
            <:value as |ctx|>
              <span>{{ctx.selectedLabel}}</span>
            </:value>

            <:item as |ctx|>
              <span class="font-preview-{{ctx.option.value}}">
                {{ctx.label}}
              </span>
            </:item>
          </UlxDropdown>

          {{! EXISTING THEME DROPDOWN }}
          <UlxDropdown
            id="ulx-theme-select"
            @options={{this.themeOptions}}
            @value={{this.selectedTheme}}
            @onChange={{this.handleThemeChange}}
          >
            <:value as |ctx|>
              <div class="flex items-center gap-2">
                {{#if ctx.selectedOption}}
                  <UlxBadge
                    @type="dot"
                    @size="l-size"
                    @variant={{ctx.selectedOption.badgeVariant}}
                  />
                  <span>{{ctx.selectedLabel}}</span>
                {{/if}}
              </div>
            </:value>
          </UlxDropdown>

          <UlxButton
            @icon={{if this.isDarkMode "light-mode-icon" "dark-mode-icon"}}
            @variant="basic"
            @onClick={{this.toggleDarkMode}}
          />

          <UlxButton
            @icon="accessibility-icon"
            @variant="basic"
            @onClick={{this.openAccessibilityPane}}
          />

        </div>
      </header>
    </div>
  </template>
}
