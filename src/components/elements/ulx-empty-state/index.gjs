import Component from "@glimmer/component";
import { LinkTo } from "@ember/routing";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";

const DEFAULT_ICON_SIZE = "s48";
const DEFAULT_MARGIN_CLASS = "mt-6";

/**
 * Empty state element component. Displays an icon, title, optional subtitle,
 * and an optional actions area (yielded hash with button and linkTo).
 *
 * @class UlxEmptyState
 * @param {string} [headerText] - Title (i18n key or display text); rendered via t().
 * @param {string} [subHeaderText] - Subtitle (i18n key or display text); rendered via t().
 * @param {string} [iconName] - Icon for UlxIcon (font or symbol name).
 * @param {string} [iconSize] - Size class for icon (default s48).
 * @param {string} [containerClass] - Extra classes on inner container.
 * @param {string} [marginClass] - Margin class for the actions area (default mt-6).
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

	get iconWrapperClass() {
		return getComponentClass("empty-state-icon");
	}

	get titleClass() {
		return getComponentClass("empty-state-title");
	}

	get subtitleClass() {
		return getComponentClass("empty-state-subtitle");
	}

	get navClass() {
		const marginClass = this.args.marginClass ?? DEFAULT_MARGIN_CLASS;
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
		return this.args.headerText ? t(this.args.headerText) : "";
	}

	get subHeaderDisplay() {
		return this.args.subHeaderText ? t(this.args.subHeaderText) : "";
	}

	<template>
		<div aria-label={{this.ariaLabel}} ...attributes>
			<div class={{this.rootClasses}}>
				{{#if @iconName}}
					<div class={{this.iconWrapperClass}}>
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
					<h4 class={{this.titleClass}} aria-describedby="empty-state-subtitle">
						{{this.headerDisplay}}
					</h4>
				{{/if}}
				{{#if @subHeaderText}}
					<h6 class={{this.subtitleClass}} id="empty-state-subtitle" aria-hidden="true">
						{{this.subHeaderDisplay}}
					</h6>
				{{/if}}
				{{#if (has-block)}}
					<div class={{this.navClass}}>
						{{yield}}
					</div>
				{{/if}}
			</div>
		</div>
	</template>
}
