import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

const TOP_BAR_FALLBACK_PX = 64;

function resolveTopBarPx() {
  const raw = getComputedStyle(document.body)
    .getPropertyValue('--uls-top-bar-height')
    .trim();
  if (!raw) return TOP_BAR_FALLBACK_PX;
  if (raw.endsWith('px')) return parseFloat(raw) || TOP_BAR_FALLBACK_PX;
  const tmp = document.createElement('div');
  tmp.style.cssText = 'position:absolute;visibility:hidden;height:' + raw;
  document.body.appendChild(tmp);
  const px = tmp.getBoundingClientRect().height || TOP_BAR_FALLBACK_PX;
  document.body.removeChild(tmp);
  return px;
}

export default class DocSectionNavComponent extends Component {
  @tracked activeSectionId = null;

  _navEl = null;
  _observer = null;

  constructor() {
    super(...arguments);
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
  };

  _scrollNavToActive(sectionId) {
    if (!this._navEl) return;
    const activeLink = this._navEl.querySelector(`a[href="#${CSS.escape(sectionId)}"]`);
    if (!activeLink) return;

    const nav = this._navEl;
    const navRect = nav.getBoundingClientRect();
    const itemRect = activeLink.getBoundingClientRect();
    const isVisible = itemRect.top >= navRect.top && itemRect.bottom <= navRect.bottom;

    if (!isVisible) {
      const scrollTop =
        activeLink.offsetTop - nav.clientHeight / 2 + activeLink.clientHeight / 2;
      nav.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  }

  @action
  scrollToSection(sectionId, event) {
    if (event) event.preventDefault();

    const element = document.getElementById(sectionId);
    if (!element) return;

    const topBarPx = resolveTopBarPx();
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topBarPx - 8;

    window.scrollTo({ top, behavior: 'smooth' });
  }

  setupIntersectionObserver = modifier((navEl) => {
    this._navEl = navEl;

    const topBarPx = resolveTopBarPx();

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newId = entry.target.id;
            if (this.activeSectionId !== newId) {
              this.activeSectionId = newId;
              this._scrollNavToActive(newId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: `-${topBarPx}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    this.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) this._observer.observe(el);
    });

    return () => {
      this._observer?.disconnect();
      this._observer = null;
      this._navEl = null;
    };
  });

  <template>
    {{#if this.sections.length}}
      <nav
        class="nav-section-links h-300 position-sticky top-64 min-w-200 overflow-y-auto overflow-x-hidden"
        {{this.setupIntersectionObserver}}
      >
        <ul class="list-reset p-0 m-0">
          {{#each this.sections as |section|}}
            <li class="p-0 m-0">
              <a
                href="#{{section.id}}"
                class="block py-2 px-3 decoration-none text-sm border-s
                  {{if
                    (this.isActive section.id)
                    'fg-primary border-primary bg-layer1'
                    'fg-secondary border-default'
                  }}"
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
