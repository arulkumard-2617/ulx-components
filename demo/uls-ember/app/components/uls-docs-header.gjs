import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { on } from '@ember/modifier';

export default class UlsDocsHeaderComponent extends Component {
  @tracked isSticky = false;
  @tracked isDarkMode = false;

  constructor() {
    super(...arguments);
    // Initialize dark mode from localStorage or system preference
    this.initializeDarkMode();
  }

  initializeDarkMode() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const savedTheme = localStorage.getItem('uls-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        this.isDarkMode = true;
        document.body.classList.add('uls-dark-mode');
      } else {
        this.isDarkMode = false;
        document.body.classList.remove('uls-dark-mode');
      }
    }
  }

  @action
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.body.classList.add('uls-dark-mode');
        localStorage.setItem('uls-theme', 'dark');
      } else {
        document.body.classList.remove('uls-dark-mode');
        localStorage.setItem('uls-theme', 'light');
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
    <div class="ulsp-topbar h64 pd1 uls-grid col-1 w-100p {{if this.isSticky 'sticky' ''}}" {{this.setupScrollObserver}}>
    <header class="uls-container-fluid fxb fvc fsb">
        {{! LEFT: Title }}
        <div class="t-left">
            <div class="t-logo">
                <h3 class="font-bold">ULS 
                    <span class="fg-primary">EMBER</span>
                </h3>
            </div>
        </div>

        {{! RIGHT: Action Buttons }}
        <div class="t-right fxb fvc gp2">
            {{! Search Button }}
            <button type="button" class="uls-button secondary  outlined s-size fxb fvc gp1" aria-haspopup="dialog" aria-expanded="false">
                <span class="fg-text-secondary">Search docs</span>
                <span class="t-key-hint mgl2">⌘ K</span>
            </button>

            {{! Download Button }}
            <button 
                type="button" 
                class="uls-button primary fxb fvc gp1 " 
                aria-haspopup="menu" 
                aria-controls="doc-download-menu">
                 <span>Download ZIP</span>
            </button>

            {{! Theme Toggle Button }}
            
              <button 
                type="button"
                aria-label={{if this.isDarkMode "Switch to light theme" "Switch to dark theme"}}
                class="pd2 uls-button secondary outlined icon-only s-size" 
                data-pc-name="button" 
                data-pc-section="root"
                {{on "click" this.toggleDarkMode}}
              >
                  <i class="uls-icons s18" aria-hidden="true">{{if this.isDarkMode "☀️" "🌙"}}</i>
                <span class="uls-button-label" data-pc-section="label">&nbsp;</span>
                <span role="presentation" aria-hidden="true" class="uls-button-ink" data-pc-name="ripple" data-pc-section="root" style="height: 40px; width: 40px;"></span>
            </button>
        </div>
    </header>
  </div>
</template>
}
