import Component from "@glimmer/component";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";

/**
 * Temporary loading placeholder. Centers a progress spinner with an optional label.
 *
 * ## WCAG
 * - Root uses `role="status"` and `aria-live="polite"` for loading announcements.
 * - Spinner is decorative (`aria-hidden="true"`); the root `aria-label` carries the accessible name.
 *
 * @class UlxTemp
 * @param {boolean} [loading=true] - When false, nothing is rendered.
 * @param {string} [size="m-size"] - Spinner size class (e.g. s-size, m-size, l-size).
 * @param {string} [label] - Visible and screen-reader label; defaults to `label.loading` via t().
 * @param {boolean} [hideLabel=false] - Hide the visible label while keeping the root aria-label.
 * @param {string} [customClass] - Additional CSS classes on the root element.
 * @param {string} [componentClass] - Override base component class (default: ulx-temp).
 * @param {string} [dataQa] - Override for root element data-qa (default: ulx-temp).
 */
export default class UlxTemp extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("temp");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-temp";
	}

	get showLoading() {
		const { loading = true } = this.args;
		return loading;
	}

	get spinnerSize() {
		return this.args.size ?? "m-size";
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass, "flex", "flex-column", "align-center", "gap-4"];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get ariaLabelText() {
		return this.args.label ?? t("label.loading");
	}

	get showLabel() {
		const { hideLabel = false } = this.args;
		return !hideLabel;
	}

	<template>
		{{#if this.showLoading}}
			<div
				class={{this.rootClasses}}
				role="status"
				aria-live="polite"
				aria-label={{this.ariaLabelText}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				<UlxProgressSpinner @size={{this.spinnerSize}} aria-hidden="true" />
				{{#if this.showLabel}}
					<span class="text-13 fg-secondary" data-qa="ulx-temp-label">
						{{#if @label}}
							{{@label}}
						{{else}}
							{{t "label.loading"}}
						{{/if}}
					</span>
				{{/if}}
			</div>
		{{/if}}
	</template>
}
