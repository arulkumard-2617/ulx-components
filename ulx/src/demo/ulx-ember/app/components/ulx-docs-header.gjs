import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { UlxButton } from 'ulx-components';

export default class UlxDocsHeaderComponent extends Component {
  @tracked isSticky = false;
  @tracked isDarkMode = false;

  constructor() {
    super(...arguments);
    // Initialize dark mode from localStorage or system preference
    this.initializeDarkMode();
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
      class="ulsp-topbar h64 pd1 ulx-grid col-1 w-100p
        {{if this.isSticky 'sticky' ''}}"
      {{this.setupScrollObserver}}
    >
      <header class="ulx-container-fluid fxb fvc fsb">
        {{! LEFT: Title }}
        <div class="t-left">
          <div class="t-logo">
            <h3 class="bold-font">ULX
              <span class="fg-primary">EMBER</span>
            </h3>
          </div>
        </div>

        {{! RIGHT: Action Buttons }}
        <div class="t-right fxb fvc gp2">
          {{! Search Button }}
          <button
            type="button"
            class="hidden ulx-button secondary outlined m-size fxb fvc gp1"
            aria-haspopup="dialog"
            aria-expanded="false"
          >
            <span class="fg-text-secondary">Search docs</span>
            <span class="t-key-hint mgl2">⌘ K</span>
          </button>

          {{! Download Button }}
          <button
            type="button"
            class="hidden ulx-button primary fxb fvc gp1 m-size"
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
        </div>
      </header>
    </div>
  </template>
}
