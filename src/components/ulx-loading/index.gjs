import Component from "@glimmer/component";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { resolveRootDataQa, buildDataQa } from "../../utils/data-qa";
import { t } from "../../utils/i18n";

const MODE_FULL_PAGE = "full-page";
const MODE_FULL_CONTAINER = "full-container";
const MODE_COVER = "cover";
const PARENT_RELATIVE_CLASS = "relative";

/**
 * Loading overlay for page, container, or cover scopes.
 * Uses ULS `loading.less` modes (`full-page`, `full-container`, `cover`) and
 * the `dot-spinner` indicator for the default loading state.
 *
 * When `@isParent` is true (or `@mode="full-container"`), the parent element
 * receives the `relative` utility class so the absolute overlay positions correctly.
 *
 * @class UlxLoading
 * @param {'full-page'|'full-container'|'cover'} [mode] - Overlay mode. Defaults from `@isParent` / `@parentClass`.
 * @param {boolean} [isParent=false] - Use `full-container` mode and set parent `relative`.
 * @param {string} [parentClass] - Override mode class (legacy; prefer `@mode`).
 * @param {boolean} [isLabel=false] - Show a loading label under the spinner.
 * @param {string} [label] - Label text or i18n key (defaults to `label.loading`).
 * @param {string} [ariaLabel] - Accessible name (defaults to label / `label.loading`).
 * @param {string} [customClass] - Extra CSS classes on the root.
 * @param {string} [componentClass] - Override base class (defaults to `ulx-loading`).
 * @param {string} [dataQa] - Override root `data-qa` (default: `ulx-loading`).
 * @yield default - Custom loading content instead of the default spinner and label.
 */
export default class UlxLoading extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("loading");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "loading");
	}

	get dataQa() {
		return (part) => buildDataQa(this.rootDataQa, part);
	}

	get isParentMode() {
		return !!this.args.isParent || this.args.mode === MODE_FULL_CONTAINER;
	}

	get modeClass() {
		const { parentClass, mode, isParent = false } = this.args;

		if (parentClass) {
			return parentClass;
		}

		if (mode === MODE_FULL_PAGE || mode === MODE_FULL_CONTAINER || mode === MODE_COVER) {
			return mode;
		}

		return isParent ? MODE_FULL_CONTAINER : MODE_FULL_PAGE;
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass, this.modeClass];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get labelText() {
		return this.args.label ?? t("label.loading");
	}

	get ariaLabelText() {
		return this.args.ariaLabel ?? this.labelText;
	}

	get showLabel() {
		return !!this.args.isLabel;
	}

	manageParentPosition = modifier((element) => {
		const parent = element.parentElement;
		if (!parent || !this.isParentMode) {
			return;
		}

		parent.classList.add(PARENT_RELATIVE_CLASS);

		return () => {
			parent.classList.remove(PARENT_RELATIVE_CLASS);
		};
	});

	<template>
		<div
			class={{this.rootClasses}}
			role="status"
			aria-live="polite"
			aria-label={{this.ariaLabelText}}
			data-qa={{this.rootDataQa}}
			{{this.manageParentPosition}}
			...attributes
		>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				<div class="text-center" data-qa={{this.dataQa "content"}}>
					<div class="dot-spinner" aria-hidden="true" data-qa={{this.dataQa "spinner"}}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					{{#if this.showLabel}}
						<p class="fg-text-secondary mt-2" data-qa={{this.dataQa "label"}}>
							{{this.labelText}}
						</p>
					{{/if}}
				</div>
			{{/if}}
		</div>
	</template>
}
