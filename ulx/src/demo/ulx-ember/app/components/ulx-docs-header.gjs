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
  UlxCheckbox,
  UlxIcon,
} from 'ulx-components';

export default class UlxDocsHeaderComponent extends Component {
  @tracked isSticky = false;
  @tracked isDarkMode = false;
  @tracked selectedTheme = 'default';
  @tracked isAccessibilityOpen = false;

  @service accessibility;

  constructor() {
    super(...arguments);
    // Initialize dark mode from localStorage or system preference
    this.initializeDarkMode();
    this.initializeColorTheme();
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
    if (typeof window === 'undefined') {
      return;
    }

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

  get accessibilitySections() {
    return [
      { header: 'Vision', id: 'vision', isVision: true, iconName: 'view-icon' },
      { header: 'Hearing', id: 'hearing', isVision: false },
      { header: 'Mobility', id: 'mobility', isVision: false },
      { header: 'Learning', id: 'learning', isVision: false },
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
      {
        value: 0.8,
        label: 'Aa-',
        selected: current < 0.9,
      },
      {
        value: 1,
        label: '100%',
        selected: current === 1,
      },
      {
        value: 1.2,
        label: 'Aa+',
        selected: current > 1 && current <= 1.2,
      },
      {
        value: 1.5,
        label: 'Aa+',
        selected: current > 1.2,
      },
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
      const scrollPosition = window.scrollY;
      // Add sticky class when scrolled past a threshold (e.g., 50px)
      this.isSticky = scrollPosition > 50;
    };

    // Set initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  <template>
    <div
      class="ulsp-topbar bg-default border-b h-64 p-1 ulx-grid col-1 w-full
        {{if this.isSticky 'sticky' ''}}"
      {{this.setupScrollObserver}}
    >
      <header class="ulx-container-fluid flex items-center justify-between">
        {{! LEFT: Title }}
        <div class="t-left">
          <div class="t-logo">
            <h3 class="bold-font">ULX
              <span class="fg-primary">EMBER</span>
            </h3>
          </div>
        </div>

        {{! RIGHT: Action Buttons }}
        <div class="t-right flex items-center gap-2">
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

          {{! Search Button }}
          <button
            type="button"
            class="hidden ulx-button secondary outlined m-size flex items-center gap-1"
            aria-haspopup="dialog"
            aria-expanded="false"
          >
            <span class="fg-text-secondary">Search docs</span>
            <span class="t-key-hint ms-2">⌘ K</span>
          </button>

          {{! Download Button }}
          <button
            type="button"
            class="hidden ulx-button primary flex items-center gap-1 m-size"
            aria-haspopup="menu"
            aria-controls="doc-download-menu"
          >
            <span>Download ZIP</span>
          </button>

          {{! Theme Toggle Button }}
          <UlxButton
            @icon={{if this.isDarkMode "light-mode-icon" "dark-mode-icon"}}
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @variant="basic"
            aria-label={{if
              this.isDarkMode
              "Switch to light theme"
              "Switch to dark theme"
            }}
            @onClick={{this.toggleDarkMode}}
          />

          {{! Accessibility Pane Trigger }}
          <UlxButton
            @icon="accessibility-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
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
              @model={{this.accessibilitySections}}
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
                                @customClass="mt-3"
                              />
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
                                @customClass="mt-3"
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
                                @customClass="mt-3"
                              >
                                <:item as |item|>
                                  <div class="flex flex-col items-start">
                                    <span>{{item.label}}</span>
                                    <span class="fg-text-secondary text-xs">
                                      {{item.description}}
                                    </span>
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
                            <h6 class="cl-title h7-font">Reading guide</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Improve focus by highlighting the text you are
                                reading and masking the rest.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.readingGuideValue}}
                                @onCheckedChange={{this.updateReadingGuide}}
                              >
                                <:itemLabel>
                                  Enable reading guide
                                </:itemLabel>
                              </UlxCheckbox>
                              {{#if this.accessibilityState.readingGuideValue}}
                                <div class="mt-2">
                                  <UlxSelectButton
                                    @options={{this.readingGuideOptions}}
                                    @value={{this.accessibilityState.readingGuideValue}}
                                    @onChange={{this.updateReadingGuideLevel}}
                                    @size="s-size"
                                    @variant="primary"
                                    @customClass="mt-3"
                                  />
                                </div>
                              {{/if}}
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
                            <h6 class="cl-title h7-font">Reading line</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Follow along with a horizontal line that tracks
                                your cursor.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.readingLineValue}}
                                @onCheckedChange={{this.updateReadingLine}}
                              >
                                <:itemLabel>
                                  Enable reading line
                                </:itemLabel>
                              </UlxCheckbox>
                              {{#if this.accessibilityState.readingLineValue}}
                                <div class="mt-2">
                                  <UlxSelectButton
                                    @options={{this.readingLineOptions}}
                                    @value={{this.normalizedReadingLineValue}}
                                    @onChange={{this.updateReadingLineLevel}}
                                    @size="s-size"
                                    @variant="primary"
                                    @customClass="mt-3"
                                  />
                                </div>
                              {{/if}}
                            </div>
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
                            <h6 class="cl-title h7-font">Toggle state label</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Show labels for toggle and switch states to
                                clarify on/off and selected state.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.toggleSwitchLabel}}
                                @onCheckedChange={{this.toggleCriticalInfo}}
                              >
                                <:itemLabel>
                                  Toggle state label
                                </:itemLabel>
                              </UlxCheckbox>
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
                            <h6 class="cl-title h7-font">Underline links</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Underline links to make them easier to identify
                                and improve legibility.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.underlineLink}}
                                @onCheckedChange={{this.toggleUnderlineLinks}}
                              >
                                <:itemLabel>
                                  Underline links
                                </:itemLabel>
                              </UlxCheckbox>
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
                            <h6 class="cl-title h7-font">Big cursor</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Enlarge the cursor to make it easier to see and
                                track on the screen.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.bigCursor}}
                                @onCheckedChange={{this.toggleBigCursor}}
                              >
                                <:itemLabel>
                                  Big cursor
                                </:itemLabel>
                              </UlxCheckbox>
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
                            <h6 class="cl-title h7-font">Emphasize focus</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Highlight the focused element with a visible
                                outline to improve keyboard navigation.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.emphasizeFocus}}
                                @onCheckedChange={{this.toggleEmphasizeFocus}}
                              >
                                <:itemLabel>
                                  Emphasize focus
                                </:itemLabel>
                              </UlxCheckbox>
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
                            <h6 class="cl-title h7-font">Dyslexia friendly</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Use a dyslexia-friendly font to improve reading
                                comfort and comprehension.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.accessibilityState.dyslexicFont}}
                                @onCheckedChange={{this.toggleDyslexicFont}}
                              >
                                <:itemLabel>
                                  Dyslexia friendly
                                </:itemLabel>
                              </UlxCheckbox>
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
                            <h6 class="cl-title h7-font">Zoom level</h6>
                            <div class="cl-sub-title">
                              <span class="text-small">
                                Enable zoom and choose a zoom level for the
                                screen content.
                              </span>
                            </div>
                            <div class="mt-2">
                              <UlxCheckbox
                                @checked={{this.isZoomEnabled}}
                                @onCheckedChange={{this.toggleZoomEnabled}}
                              >
                                <:itemLabel>
                                  Enable zoom
                                </:itemLabel>
                              </UlxCheckbox>
                              {{#if this.isZoomEnabled}}
                                <div class="mt-2">
                                  <UlxSelectButton
                                    @options={{this.zoomOptions}}
                                    @value={{this.accessibilityState.selectedScrZoomValue}}
                                    @onChange={{this.updateZoomLevel}}
                                    @size="s-size"
                                    @variant="primary"
                                    @customClass="mt-3"
                                  />
                                </div>
                              {{/if}}
                            </div>
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
