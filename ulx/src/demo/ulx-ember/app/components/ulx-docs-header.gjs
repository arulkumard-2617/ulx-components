import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { modifier } from 'ember-modifier';
import {
  UlxButton,
  UlxIconButton,
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
  @tracked selectedFont = 'lato2';
  @tracked isAccessibilityOpen = false;
  @tracked _saturationLocal = null;

  @service accessibility;

  constructor() {
    super(...arguments);
    this.initializeDarkMode();
    this.initializeColorTheme();
    this.initializeFontFamily();
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

  get accessibilityState() {
    return (
      this.accessibility?.accessibilityProperties ?? {
        bigCursor: false,
        underlineLink: false,
        highLightCriticalInfo: false,
        dyslexicFont: false,
        emphasizeFocus: false,
        selectedTextSize: 1,
        selectedContrast: '100%',
        selectedSaturation: '100',
        selectedColor: 2,
        selectedColorValue: {
          '--ulx-ba-sepia': '0%',
          '--ulx-ba-grayscale': '0%',
        },
        readingGuideValue: 0,
        readingLineValue: 0,
        selectedScrZoomValue: 1,
        toggleSwitchLabel: false,
        selectedTextSpacing: 1,
      }
    );
  }

  get contrastSliderValue() {
    const { selectedContrast } = this.accessibilityState;
    if (typeof selectedContrast === 'string') {
      const parsed = parseInt(selectedContrast, 10);
      return Number.isNaN(parsed) ? 100 : parsed;
    }
    return selectedContrast ?? 100;
  }

  get saturationFromState() {
    const { selectedSaturation } = this.accessibilityState;
    if (typeof selectedSaturation === 'string') {
      const parsed = parseInt(selectedSaturation, 10);
      return Number.isNaN(parsed) ? 100 : Math.min(200, Math.max(0, parsed));
    }
    const n = Number(selectedSaturation);
    return Number.isFinite(n) ? Math.min(200, Math.max(0, n)) : 100;
  }

  get saturationValue() {
    if (this._saturationLocal != null) {
      return this._saturationLocal;
    }
    return this.saturationFromState;
  }

  get accessibilitySections() {
    return [
      {
        header: 'Vision',
        id: 'vision',
        isVision: true,
        iconName: 'view-icon',
      },
      {
        header: 'Hearing',
        id: 'hearing',
        isHearing: true,
        iconName: 'hearing-icon',
      },
      {
        header: 'Mobility',
        id: 'mobility',
        isMobility: true,
        iconName: 'mobility-icon',
      },
      {
        header: 'Learning',
        id: 'learning',
        isLearning: true,
        iconName: 'read-icon',
      },
    ];
  }

  get contrastOptions() {
    const value = this.contrastSliderValue;
    return [
      { value: '70%', label: 'Low', selected: value < 100 },
      { value: '100%', label: 'Default', selected: value === 100 },
      { value: '135%', label: 'High', selected: value > 100 },
    ];
  }

  get textSpacingOptions() {
    const current = this.accessibilityState.selectedTextSpacing;
    return [
      { value: 1, label: 'Default', selected: current === 1 },
      { value: 2, label: 'Medium', selected: current === 2 },
      { value: 3, label: 'Large', selected: current === 3 },
    ];
  }

  get textSizeOptions() {
    const current = this.accessibilityState.selectedTextSize;
    return [
      { value: 0.8, label: 'Aa-', selected: current < 0.9 },
      { value: 1, label: '100%', selected: current === 1 },
      { value: 1.2, label: 'Aa+', selected: current > 1 && current <= 1.2 },
      { value: 1.5, label: 'Aa+', selected: current > 1.2 },
    ];
  }

  get readingGuideOptions() {
    const current = this.accessibilityState.readingGuideValue || 10;
    return [
      { value: 10, label: 'Level 1', selected: current === 10 },
      { value: 20, label: 'Level 2', selected: current === 20 },
      { value: 30, label: 'Level 3', selected: current === 30 },
    ];
  }

  get readingLineOptions() {
    const current = this.normalizedReadingLineValue;
    return [
      { value: 200, label: 'Level 1', selected: current === 200 },
      { value: 400, label: 'Level 2', selected: current === 400 },
      { value: 600, label: 'Level 3', selected: current === 600 },
    ];
  }

  get normalizedReadingLineValue() {
    const v = this.accessibilityState.readingLineValue;
    if (v === 200 || v === 400 || v === 600) return v;
    return 400;
  }

  get zoomOptions() {
    const current = this.accessibilityState.selectedScrZoomValue;
    return [
      { label: '75%', value: 0.75, selected: current === 0.75 },
      { label: '100%', value: 1, selected: current === 1 },
      { label: '125%', value: 1.25, selected: current === 1.25 },
      { label: '150%', value: 1.5, selected: current === 1.5 },
    ];
  }

  get isZoomEnabled() {
    return this.accessibilityState.selectedScrZoomValue !== 1;
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

  @action
  openAccessibilityPane() {
    this.isAccessibilityOpen = true;
    if (typeof window !== 'undefined') {
      this.accessibility.setUserA11yProps();
    }
  }

  @action
  closeAccessibilityPane() {
    this.isAccessibilityOpen = false;
  }

  @action
  toggleBigCursor(checked) {
    this.accessibility.checkAndAddCursor(checked);
  }

  @action
  toggleUnderlineLinks(checked) {
    this.accessibility.checkAndAddUnderline(checked);
  }

  @action
  toggleEmphasizeFocus(checked) {
    this.accessibility.enableEmphasizeFocus(checked);
  }

  @action
  toggleCriticalInfo(checked) {
    this.accessibility.setCriticalInfo(checked);
  }

  @action
  toggleToggleLabel(checked) {
    this.accessibility.checkAndUpdateToggleStatusLabel(checked);
  }

  @action
  toggleDyslexicFont(checked) {
    this.accessibility.addDyslexicFont(checked);
  }

  @action
  updateTextSize(nextValue) {
    if (typeof nextValue === 'number') {
      this.accessibility.setTextSize(nextValue);
    }
  }

  @action
  updateContrast(nextValue) {
    if (typeof nextValue === 'string') {
      this.accessibility.setContrast(nextValue);
    }
  }

  @action
  resetSaturation() {
    const defaultVal = 100;
    this._saturationLocal = defaultVal;
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.style.setProperty(
        '--ulx-ba-saturate',
        `${defaultVal}%`,
      );
    }
    this.accessibility.setSaturationValue(defaultVal);
  }

  @action
  updateSaturation(nextValue) {
    const n = Number(nextValue);
    if (Number.isFinite(n)) {
      const clamped = Math.min(200, Math.max(0, n));
      this._saturationLocal = clamped;
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.style.setProperty(
          '--ulx-ba-saturate',
          `${clamped}%`,
        );
      }
      this.accessibility.setSaturationValue(clamped);
    }
  }

  applySaturationToDocument = modifier((_element, [saturationPercent]) => {
    if (
      typeof document !== 'undefined' &&
      document.documentElement &&
      saturationPercent != null
    ) {
      const value = Math.min(200, Math.max(0, Number(saturationPercent)));
      document.documentElement.style.setProperty(
        '--ulx-ba-saturate',
        `${value}%`,
      );
    }
  });

  @action
  updateTextSpacing(nextValue) {
    const numeric = Number(nextValue);
    const option =
      this.accessibility.TEXT_SPACING.find((item) => item.value === numeric) ||
      this.accessibility.TEXT_SPACING[0];
    this.accessibility.setTextSpacing(option);
  }

  @action
  updateReadingGuide(checked) {
    const currentValue = this.accessibilityState.readingGuideValue || 10;
    const value = checked ? currentValue : 0;
    this.accessibility.addReadingGuide(value, checked);
  }

  @action
  updateReadingGuideLevel(nextValue) {
    const numeric = Number(nextValue);
    if (!Number.isNaN(numeric)) {
      this.accessibility.addReadingGuide(numeric, true);
    }
  }

  @action
  updateReadingLine(checked) {
    const currentValue = this.normalizedReadingLineValue;
    const value = checked ? currentValue : 0;
    this.accessibility.addReadingLine(value, checked);
  }

  @action
  updateReadingLineLevel(nextValue) {
    const numeric = Number(nextValue);
    if (!Number.isNaN(numeric)) {
      this.accessibility.addReadingLine(numeric, true);
    }
  }

  @action
  updateZoomLevel(value) {
    if (typeof value === 'number') {
      this.accessibility.setScrZoomVal(value);
    }
  }

  @action
  toggleZoomEnabled(checked) {
    if (checked) {
      const current = this.accessibilityState.selectedScrZoomValue;
      const nextValue = current && current !== 1 ? current : 1.25;
      this.accessibility.setScrZoomVal(nextValue);
    } else {
      this.accessibility.setScrZoomVal(1);
    }
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
      <header class="px-5 flex items-center justify-between">
        <div class="t-left flex gap-2 items-center">
          <div class="t-logo">
            <h3 class="bold-font">ULX
              <span class="fg-primary">COMPONENTS</span>
            </h3>
          </div>

          <UlxIconButton
            @href="/downloads/ulx-ai-skills.zip"
            @label={{t "msg.download.ai.skills"}}
            @iconLeft="download-icon"
            @iconComponentClass="bs-icons1"
            @variant="secondary"
            @size="xs-size"
            download="ulx-ai-skills.zip"
            aria-label={{t "msg.download.ai.skills"}}
          />
        </div>

        <div class="t-right flex items-center gap-2">
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
              <span
                class="font-preview-{{ctx.option.value}}"
              >{{ctx.label}}</span>
            </:item>
          </UlxDropdown>

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
                    aria-hidden="true"
                  />
                  <span>{{ctx.selectedLabel}}</span>
                {{else}}
                  <span>{{ctx.placeholder}}</span>
                {{/if}}
              </div>
            </:value>
            <:item as |ctx|>
              <div class="flex items-center gap-2">
                <UlxBadge
                  @type="dot"
                  @size="l-size"
                  @variant={{ctx.option.badgeVariant}}
                  aria-hidden="true"
                />
                <span>{{ctx.label}}</span>
              </div>
            </:item>
          </UlxDropdown>

          <UlxIconButton
            @iconLeft={{if this.isDarkMode "light-mode-icon" "dark-mode-icon"}}
            @variant="basic"
            aria-label={{if
              this.isDarkMode
              "Switch to light theme"
              "Switch to dark theme"
            }}
            @onClick={{this.toggleDarkMode}}
          />

          <UlxIconButton
            @iconLeft="accessibility-icon"
            @variant="basic"
            aria-label="Accessibility options"
            @onClick={{this.openAccessibilityPane}}
          />
        </div>
      </header>

      <UlxSlidePane
        @visible={{this.isAccessibilityOpen}}
        @onHide={{this.closeAccessibilityPane}}
        @title="Accessibility options"
        @position="right"
        @overlay={{false}}
        @hideFooter={{true}}
        @blockScroll={{true}}
        @contentClassName="p-0"
      >
        <:body>
          <div class="ulx-grid col-1 gap-3">
            <UlxAccordion
              @items={{this.accessibilitySections}}
              @variant="flat"
              @size="m-size"
            >
              <:content as |paneSection|>
                {{#if paneSection.isVision}}
                  <div class="ulx-grid col-1 gap-3">
                    <section class="ulx-section">
                      <div class="ulx-content-list divider">
                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgContrast"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Increased Contrast</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Improve overall legibility and definition by
                                increasing the contrast of text, interactive
                                elements, separators, and outlines.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxSelectButton
                                @options={{this.contrastOptions}}
                                @value={{this.accessibilityState.selectedContrast}}
                                @onChange={{this.updateContrast}}
                                @size="s-size"
                                @variant="primary"
                                @customClass="mt-3 fluid"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          class="list-item"
                          {{this.applySaturationToDocument
                            this.saturationValue
                          }}
                        >
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgSaturation"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex items-center gap-2">
                              <h6 class="cl-title h7-font">Saturation</h6>
                              <UlxButton
                                @icon="reset-icon"
                                @iconComponentClass="bs-icons1"
                                @iconSize="s18"
                                @variant="link"
                                @label={{t "lbl.reset"}}
                                @onClick={{this.resetSaturation}}
                                aria-label={{t "lbl.reset"}}
                                @size="s-size"
                              />
                            </div>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Adjust the saturation level based on your
                                preference.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxProgressBar
                                @showControls={{true}}
                                @value={{this.saturationValue}}
                                @onChange={{this.updateSaturation}}
                                @min={{0}}
                                @max={{200}}
                                @size="xs-size"
                              >
                                <:content>{{this.saturationValue}}%</:content>
                              </UlxProgressBar>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgCharacterSpacing"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Text Spacing</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Adjust the character spacing to enhance
                                readability and visual comfort.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxSelectButton
                                @options={{this.textSpacingOptions}}
                                @value={{this.accessibilityState.selectedTextSpacing}}
                                @onChange={{this.updateTextSpacing}}
                                @size="s-size"
                                @variant="primary"
                                @customClass="mt-3 fluid"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgTextSize"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Text Size</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Increase the text size to best suit your needs
                                on the web page.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxSelectButton
                                @options={{this.textSizeOptions}}
                                @value={{this.accessibilityState.selectedTextSize}}
                                @onChange={{this.updateTextSize}}
                                @size="s-size"
                                @variant="primary"
                                @customClass="mt-3 fluid"
                              >
                                <:item as |item|>
                                  <div class="flex flex-col items-start">
                                    <span>{{item.label}}</span>
                                    {{#if item.description}}
                                      <span class="fg-text-secondary text-xs">
                                        {{item.description}}
                                      </span>
                                    {{/if}}
                                  </div>
                                </:item>
                              </UlxSelectButton>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgReadingGuide"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Reading guide</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Improve focus by highlighting the text you
                                    are reading and masking the rest.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.readingGuideValue}}
                                  @onCheckedChange={{this.updateReadingGuide}}
                                />
                              </div>
                            </div>
                            {{#if this.accessibilityState.readingGuideValue}}
                              <div class="mt-2">
                                <UlxSelectButton
                                  @options={{this.readingGuideOptions}}
                                  @value={{this.accessibilityState.readingGuideValue}}
                                  @onChange={{this.updateReadingGuideLevel}}
                                  @size="s-size"
                                  @variant="primary"
                                  @customClass="mt-3 fluid"
                                />
                              </div>
                            {{/if}}
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgReadingLine"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Reading line</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Follow along with a horizontal line that
                                    tracks your cursor.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.readingLineValue}}
                                  @onCheckedChange={{this.updateReadingLine}}
                                />
                              </div>
                            </div>
                            {{#if this.accessibilityState.readingLineValue}}
                              <div class="mt-2">
                                <UlxSelectButton
                                  @options={{this.readingLineOptions}}
                                  @value={{this.normalizedReadingLineValue}}
                                  @onChange={{this.updateReadingLineLevel}}
                                  @size="s-size"
                                  @variant="primary"
                                  @customClass="mt-3 fluid"
                                />
                              </div>
                            {{/if}}
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgToggle"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Toggle state label</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Show labels for toggle and switch states to
                                    clarify on/off and selected state.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.toggleSwitchLabel}}
                                  @onCheckedChange={{this.toggleToggleLabel}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgUnderlineLink"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Underline links</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Underline links to make them easier to
                                    identify and improve legibility.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.underlineLink}}
                                  @onCheckedChange={{this.toggleUnderlineLinks}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgDyslexicFont"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Dyslexia friendly</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Use a dyslexia-friendly font to improve
                                    reading comfort and comprehension.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.dyslexicFont}}
                                  @onCheckedChange={{this.toggleDyslexicFont}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgScreenZoom"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Zoom level</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Enable zoom and choose a zoom level for the
                                    screen content.
                                  </span>
                                </div>
                              </div>

                            </div>
                            {{#if this.isZoomEnabled}}
                              <div class="mt-2">
                                <UlxSelectButton
                                  @options={{this.zoomOptions}}
                                  @value={{this.accessibilityState.selectedScrZoomValue}}
                                  @onChange={{this.updateZoomLevel}}
                                  @size="s-size"
                                  @variant="primary"
                                  @customClass="mt-3 fluid"
                                />
                              </div>
                            {{/if}}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                {{else if paneSection.isHearing}}
                  <div class="ulx-grid col-1 gap-3">
                    <section class="ulx-section">
                      <div class="ulx-content-list divider">
                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgScreenZoom"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Screen Reader</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Narrates the content on the screen using voice
                                and visual captions to help users perceive the
                                presented information more efficiently.
                              </span>
                            </div>
                            <div class="mt-3">
                              <p class="bold-font mb-1">macOS</p>
                              <p class="flex items-center gap-2">
                                <span class="t-key-hint">Cmd+F5</span>
                                <span class="fg-text-secondary text-sm">(Voice
                                  Over)</span>
                              </p>
                            </div>
                            <div class="mt-3">
                              <p class="bold-font mb-1">Windows / Linux</p>
                              <p class="flex items-center gap-2">
                                <span class="t-key-hint">Ctrl+Win+Enter</span>
                                <span
                                  class="fg-text-secondary text-sm"
                                >(Narrator)</span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgReadingLine"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Skip to Main
                                  Content</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Lets users bypass repeated elements and
                                    directly reach the main content of the page.
                                  </span>
                                </div>
                                <div class="mt-3">
                                  <span class="t-key-hint">G+M</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                {{else if paneSection.isMobility}}
                  <div class="ulx-grid col-1 gap-3">
                    <section class="ulx-section">
                      <div class="ulx-content-list divider">
                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgReadingLine"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Big cursor</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Enlarge the cursor to make it easier to see
                                    and track on the screen.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.bigCursor}}
                                  @onCheckedChange={{this.toggleBigCursor}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgReadingGuide"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Emphasize focus</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Highlight the focused element with a visible
                                    outline to improve keyboard navigation.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.emphasizeFocus}}
                                  @onCheckedChange={{this.toggleEmphasizeFocus}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="keyboardShortcutIcon"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Keyboard Shortcuts</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Navigate and perform actions quickly using the
                                keyboard.
                              </span>
                            </div>
                            <button
                              type="button"
                              class="mt-2 fg-primary text-sm underline flex items-center gap-1"
                            >
                              <span>View Shortcuts</span>
                            </button>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="pageNavigatorIcon"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Page Navigator</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Navigate to a specific part of the page using
                                the keyboard.
                              </span>
                            </div>
                            <button
                              type="button"
                              class="mt-2 fg-primary text-sm underline flex items-center gap-1"
                            >
                              <span>Invoke Page Navigator</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                {{else if paneSection.isLearning}}
                  <div class="ulx-grid col-1 gap-3">
                    <section class="ulx-section">
                      <div class="ulx-content-list divider">
                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgToggle"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <div class="flex justify-between gap-2">
                              <div>
                                <h6 class="cl-title h7-font">Highlight Critical
                                  Information</h6>
                                <div class="cl-sub-title">
                                  <span class="text-small">
                                    Displays critical information in a striking
                                    color for easier scanning.
                                  </span>
                                </div>
                              </div>
                              <div class="mt-2 flex align-items-center gap-2">
                                <UlxToggle
                                  @variant="green"
                                  @checked={{this.accessibilityState.highLightCriticalInfo}}
                                  @onCheckedChange={{this.toggleCriticalInfo}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="list-item">
                          <div class="left-item" aria-hidden="true">
                            <UlxIcon
                              @type="svg"
                              @iconName="svgScreenZoom"
                              @size="s32"
                              aria-hidden="true"
                            />
                          </div>
                          <div class="right-item">
                            <h6 class="cl-title h7-font">Toast Notifications</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Short, time-sensitive notifications that appear
                                after an action is performed.
                              </span>
                            </div>
                            <button
                              type="button"
                              class="mt-2 fg-primary text-sm underline flex items-center gap-1"
                            >
                              <span>Configure</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                {{else}}
                  <div class="ulx-section">
                    <p class="fg-text-secondary">
                      Settings for
                      {{paneSection.header}}
                      will be available soon.
                    </p>
                  </div>
                {{/if}}
              </:content>
            </UlxAccordion>
          </div>
        </:body>
      </UlxSlidePane>
    </div>
  </template>
}
