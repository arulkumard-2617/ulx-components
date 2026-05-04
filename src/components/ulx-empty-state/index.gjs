import Component from "@glimmer/component";
import { guidFor } from "@ember/object/internals";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";

const DEFAULT_ICON_SIZE = "s48";
const DEFAULT_MARGIN_CLASS = "mt-6";

/**
 * Empty state element component. Displays an icon, title, optional subtitle,
 * and an optional actions area (default block content).
 *
 * @class UlxEmptyState
 * @param {string} [headerText] - Title (i18n key or display text); rendered via t().
 * @param {string} [subHeaderText] - Subtitle (i18n key or display text); rendered via t().
 * @param {string} [iconName] - Icon for UlxIcon (font or symbol name).
 * @param {string} [iconSize] - Size class for icon (default s48).
 * @param {string} [containerClass] - Extra classes on inner container.
 * @param {string} [marginClass] - Margin class for the actions area (default mt-6).
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-empty-state".
 * @yield default - Any content rendered inside the EmptyState actions area.
 */
export default class UlxEmptyState extends Component {
	get rootClasses() {
		const { containerClass } = this.args;
		const base = getComponentClass("empty-state");
		const parts = [base];
		containerClass && parts.push(containerClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get actionClass() {
		const { marginClass = DEFAULT_MARGIN_CLASS } = this.args;
		const base = getComponentClass("empty-state-nav");
		return `${base} ${marginClass}`.trim();
	}

	get iconSize() {
		return this.args.iconSize ?? DEFAULT_ICON_SIZE;
	}

	get ariaLabel() {
		return t("lbl.a11y.empty.state.content");
	}

	get headerDisplay() {
		return this.args.headerText ?? "";
	}

	get subHeaderDisplay() {
		return this.args.subHeaderText ?? "";
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-empty-state";
	}

	get subtitleId() {
		return `ulx-empty-state-subtitle-${guidFor(this)}`;
	}

	get titleDescribedBy() {
		return this.args.subHeaderText ? this.subtitleId : null;
	}

	<template>
		<div aria-label={{this.ariaLabel}} data-qa={{this.rootDataQa}} ...attributes>
			<div class={{this.rootClasses}}>
				{{#if @iconName}}
					<div class="empty-state-icon" data-qa="ulx-empty-state-icon">
						<UlxIcon
							@type="svg"
							@componentClass="empty-svg-size"
							@iconName={{@iconName}}
							@size={{this.iconSize}}
							aria-hidden="true"
						/>
					</div>
				{{/if}}
				{{#if @headerText}}
					<h4
						class="empty-state-title"
						aria-describedby={{this.titleDescribedBy}}
						data-qa="ulx-empty-state-title"
					>
						{{this.headerDisplay}}
					</h4>
				{{/if}}
				{{#if @subHeaderText}}
					<h6
						class="empty-state-subtitle"
						id={{this.subtitleId}}
						data-qa="ulx-empty-state-subtitle"
					>
						{{this.subHeaderDisplay}}
					</h6>
				{{/if}}
				{{#if (has-block)}}
					<div class={{this.actionClass}} data-qa="ulx-empty-state-nav">
						{{yield}}
					</div>
				{{/if}}
			</div>
		</div>
	</template>
}
