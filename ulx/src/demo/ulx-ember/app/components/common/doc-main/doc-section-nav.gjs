import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

/**
 * Flattens a tree of sections (with optional `children`) into an ordered list
 * of items that have an `id` (for scroll spy and initial active).
 * @param {Array} items - Top-level sections (each may have id, sectionNav/label, children)
 * @returns {Array<{ id: string }>}
 */
function flattenSectionsWithIds(items) {
  if (!Array.isArray(items) || items.length === 0) return [];
  const out = [];
  for (const item of items) {
    if (item?.id) out.push({ id: item.id });
    if (Array.isArray(item?.children) && item.children.length > 0) {
      out.push(...flattenSectionsWithIds(item.children));
    }
  }
  return out;
}

export default class DocSectionNavComponent extends Component {
  @tracked activeSectionId = null;

  get sections() {
    return this.args.features ?? [];
  }

  /** All section ids in document order (for scroll spy). Supports flat and grouped features. */
  get flatSections() {
    return flattenSectionsWithIds(this.sections);
  }

  get firstSectionId() {
    const flat = this.flatSections;
    return flat.length > 0 ? flat[0].id : null;
  }

  /** Active id for display: tracked value or first section when not yet set. */
  get effectiveActiveId() {
    return this.activeSectionId ?? this.firstSectionId;
  }

  @action
  isActive(sectionId) {
    return this.effectiveActiveId === sectionId;
  }

  /** Whether an item is a group (has children). */
  @action
  hasChildren(item) {
    return Array.isArray(item?.children) && item.children.length > 0;
  }

  /** Display label for a section or category (sectionNav or label). */
  @action
  getSectionLabel(item) {
    return item?.sectionNav ?? item?.label ?? '';
  }

  @action
  scrollToSection(sectionId, event) {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    this.activeSectionId = sectionId;
  }

  setupScrollObserver = modifier(() => {
    const handleScroll = () => {
      const flat = this.flatSections;
      if (!flat || flat.length === 0) return;

      const scrollPosition = window.scrollY + 150;

      for (let i = flat.length - 1; i >= 0; i--) {
        const { id } = flat[i];
        const element = document.getElementById(id);

        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            this.activeSectionId = id;
            return;
          }
        }
      }

      if (scrollPosition < 100) {
        this.activeSectionId = this.firstSectionId;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  <template>
    {{#if this.sections.length}}
      <nav class="doc-section-nav" {{this.setupScrollObserver}}>
        <ul class="doc-section-nav-list">
          {{#each this.sections as |item|}}
            {{#if (this.hasChildren item)}}
              <li class="doc-section-nav-group">
                {{#if item.id}}
                  <a
                    href="#{{item.id}}"
                    class="doc-section-nav-group-label {{if (this.isActive item.id) "active"}}"
                    {{on "click" (fn this.scrollToSection item.id)}}
                  >
                    {{this.getSectionLabel item}}
                  </a>
                {{else}}
                  <span class="doc-section-nav-group-label doc-section-nav-group-label--header">
                    {{this.getSectionLabel item}}
                  </span>
                {{/if}}
                <ul class="doc-section-nav-children">
                  {{#each item.children as |child|}}
                    <li class="doc-section-nav-item">
                      {{#if child.id}}
                        <a
                          href="#{{child.id}}"
                          class={{if (this.isActive child.id) "active" ""}}
                          {{on "click" (fn this.scrollToSection child.id)}}
                        >
                          {{this.getSectionLabel child}}
                        </a>
                      {{else}}
                        <span class="doc-section-nav-group-label doc-section-nav-group-label--header">
                          {{this.getSectionLabel child}}
                        </span>
                      {{/if}}
                    </li>
                  {{/each}}
                </ul>
              </li>
            {{else}}
              <li class="doc-section-nav-item">
                {{#if item.id}}
                  <a
                    href="#{{item.id}}"
                    class={{if (this.isActive item.id) "active" ""}}
                    {{on "click" (fn this.scrollToSection item.id)}}
                  >
                    {{this.getSectionLabel item}}
                  </a>
                {{/if}}
              </li>
            {{/if}}
          {{/each}}
        </ul>
      </nav>
    {{/if}}
  </template>
}
