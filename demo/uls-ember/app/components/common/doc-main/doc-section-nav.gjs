import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

export default class DocSectionNavComponent extends Component {
  @tracked activeSectionId = null;

  constructor() {
    super(...arguments);
    // Set default active section to the first one (Import)
    const sections = this.args.features || [];
    if (sections.length > 0) {
      this.activeSectionId = sections[0].id;
    }
  }

  get sections() {
    return this.args.features || [];
  }

  isActive = (sectionId) => {
    return this.activeSectionId === sectionId;
  }

  @action
  scrollToSection(sectionId, event) {
    if (event) {
      event.preventDefault();
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset from top for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  setupScrollObserver = modifier(() => {
    const handleScroll = () => {
      const sections = this.sections;
      if (!sections || sections.length === 0) return;

      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            this.activeSectionId = section.id;
            return;
          }
        }
      }

      // If scrolled to top, set first section as active
      if (scrollPosition < 100) {
        this.activeSectionId = sections[0]?.id || null;
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  <template>
    {{#if this.sections.length}}
      <nav class="doc-section-nav" {{this.setupScrollObserver}}>
        <ul>
          {{#each this.sections as |section|}}
            <li>
              <a
                href="#{{section.id}}"
                class={{if (this.isActive section.id) "active" ""}}
                {{on "click" (fn this.scrollToSection section.id)}}
              >
                {{section.sectionNav}}
              </a>
            </li>
          {{/each}}
        </ul>
      </nav>
    {{/if}}
  </template>
}

