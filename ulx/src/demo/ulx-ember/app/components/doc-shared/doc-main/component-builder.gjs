/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import CodeBlock from 'ember-prism/components/code-block';
import { t } from 'ulx-components';

/**
 * Reusable doc builder: renders schema-driven controls, live preview, and generated code.
 * Yields resolved props to the <:preview> block so the parent can render the component.
 *
 * @param {Object} schema - Builder schema: { props, stateToProps, stateToSnippet, importLine?, componentName? }
 */
export default class ComponentBuilderComponent extends Component {
  @tracked stateSnapshot = null;
  @tracked copied = false;

  constructor(owner, args) {
    super(owner, args);
    const schema = args?.schema;
    const props = schema?.props ?? [];
    this.stateSnapshot = props.reduce(
      (acc, p) => ({ ...acc, [p.key]: p.default }),
      {},
    );
  }

  get state() {
    return this.stateSnapshot ?? {};
  }

  get schema() {
    return this.args.schema ?? {};
  }

  get resolvedProps() {
    const fn = this.schema.stateToProps;
    return typeof fn === 'function' ? fn(this.state) : {};
  }

  get generatedSnippet() {
    const fn = this.schema.stateToSnippet;
    return typeof fn === 'function' ? fn(this.state) : '';
  }

  get importLine() {
    return this.schema.importLine ?? '';
  }

  get displayCode() {
    const importLine = this.importLine;
    const snippet = this.generatedSnippet;
    if (!snippet) return '';
    if (importLine) {
      return `${importLine}\n\n<template>\n  ${snippet.split('\n').join('\n  ')}\n</template>`;
    }
    return `<template>\n  ${snippet.split('\n').join('\n  ')}\n</template>`;
  }

  /**
   * Options for a prop: from static options or getOptions(state).
   */
  optionsFor(prop) {
    if (prop.getOptions && typeof prop.getOptions === 'function') {
      return prop.getOptions(this.state) ?? [];
    }
    return prop.options ?? [];
  }

  /**
   * Props with resolved options, current value, and type flags so the template
   * never calls methods with arguments (which can lose `this` in Glimmer).
   */
  get propsWithOptions() {
    const state = this.state;
    const schema = this.schema;
    const list = schema.props ?? [];
    return list
      .filter((prop) => this.visible(prop))
      .map((prop) => {
        const opts = this.optionsFor(prop);
        const currentValue = state[prop.key];
        return {
          ...prop,
          currentValue,
          inputName: `builder-${prop.key}`,
          isRadio: prop.type === 'radio',
          isSelect: prop.type === 'select',
          isCheckbox: prop.type === 'checkbox',
          resolvedOptions: opts.map((opt) => ({
            ...opt,
            selected: currentValue === opt.value,
          })),
        };
      });
  }

  visible(prop) {
    if (prop.visibleWhen && typeof prop.visibleWhen === 'function') {
      return prop.visibleWhen(this.state);
    }
    return true;
  }

  @action
  updateProp(key, value) {
    this.stateSnapshot = { ...this.stateSnapshot, [key]: value };
  }

  @action
  selectChange(propKey, event) {
    this.updateProp(propKey, event.target.value);
  }

  @action
  checkboxChange(propKey, event) {
    this.updateProp(propKey, event.target.checked);
  }

  @action
  async copyCode() {
    if (
      !this.displayCode ||
      typeof navigator === 'undefined' ||
      !navigator.clipboard
    )
      return;
    try {
      await navigator.clipboard.writeText(this.displayCode);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }

  <template>
    <div class="doc-section component-builder">
      <div class="ulx-grid gap-12">

        {{! Preview + code flex-col }}
        <div class="flex grow flex-col gap-6 col-7">
          {{#if (has-block "preview")}}
            <div class="demo bg-default border p-8 rounded-md">
              <p class="text-12 fg-text-secondary mt-0 mb-4">{{"Preview"}}</p>
              {{yield this.resolvedProps to="preview"}}
            </div>
          {{/if}}
          {{#if this.displayCode}}
            <div class="code-block-wrapper">
              <div class="flex items-center justify-between">
                <p class="text-12 fg-text-secondary mt-0">{{"Generated code"}}</p>
                <div class="flex gap-4 py-1 px-3">
                  <button
                    type="button"
                    class="ulx-button link xs-size
                      {{if this.copied 'is-copied'}}"
                    aria-label={{"Copy code"}}
                    {{on "click" this.copyCode}}
                  >
                    {{#if this.copied}}
                      {{"Copied"}}
                    {{else}}
                      {{"Copy"}}
                    {{/if}}
                  </button>
                </div>
              </div>
              <div class="relative max-h-200 overflow-auto">
                <CodeBlock @code={{this.displayCode}} @language="markup" />

              </div>
            </div>
          {{/if}}
        </div>

        {{! Controls flex-col }}
        <div
          class="col-5 component-builder-controls border rounded-md p-6 bg-default component-builder-controls-col"
        >
          <h4 class="mt-0 mb-4 bold-font text-14">{{"Properties"}}</h4>
          {{#each this.propsWithOptions as |prop|}}
            <div class="mb-4">
              <label
                class="block text-12 font-medium mb-1 fg-text-secondary"
              >{{prop.label}}</label>
              {{#if prop.isRadio}}
                <div
                  class="flex flex-wrap gap-4"
                  role="group"
                  aria-label={{prop.label}}
                >
                  {{#each prop.resolvedOptions as |opt|}}
                    <label class="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name={{prop.inputName}}
                        value={{opt.value}}
                        checked={{opt.selected}}
                        {{on "change" (fn this.updateProp prop.key opt.value)}}
                        class="me-1"
                      />
                      <span class="text-12">{{opt.label}}</span>
                    </label>
                  {{/each}}
                </div>
              {{else if prop.isSelect}}
                <select
                  class="block w-full p-2 rounded border text-12"
                  value={{prop.currentValue}}
                  {{on "change" (fn this.selectChange prop.key)}}
                  aria-label={{prop.label}}
                >
                  {{#each prop.resolvedOptions as |opt|}}
                    <option
                      value={{opt.value}}
                      selected={{opt.selected}}
                    >{{opt.label}}</option>
                  {{/each}}
                </select>
              {{else if prop.isCheckbox}}
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={{prop.currentValue}}
                    {{on "change" (fn this.checkboxChange prop.key)}}
                    class="me-1"
                  />
                  <span class="text-12">{{prop.label}}</span>
                </label>
              {{/if}}
            </div>
          {{/each}}
        </div>

      </div>
    </div>
  </template>
}
