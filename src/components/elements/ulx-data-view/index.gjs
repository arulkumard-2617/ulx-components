import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";

/**
 * DataView is a layout wrapper with left, content, and right sections inside a dataview grid.
 * Uses existing dataview.less classes (ulx-dataview, dataview-content, layout-list/layout-grid) and base grid utilities.
 *
 * @class UlxDataView
 * @param {string} [layout="list"] - Layout variant: "list" or "grid". Adds layout-list or layout-grid class to root.
 * @param {string} [gridRole] - Optional ARIA role for the main content container (e.g. "list" for list semantics).
 * @param {string} [customClass] - Extra CSS class for root.
 *
 * Named blocks (lowercase):
 * - <:header> - Optional content above the grid (e.g. toolbar, filters).
 * - <:left> - Optional left section; caller controls layout/width using helper classes.
 * - <:content> - Main content section; default block is treated as content when no <:content> is provided.
 * - <:right> - Optional right section; caller controls layout/width using helper classes.
 * - <:footer> - Optional footer section below the grid (e.g. pagination).
 */
export default class UlxDataView extends Component {
	get baseClass() {
		return getComponentClass("dataview");
	}

	get layoutClass() {
		const { layout = "list" } = this.args;
		return layout === "grid" ? "layout-grid" : "layout-list";
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass, this.layoutClass];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	<template>
		<div
			class={{this.rootClasses}}
			role="region"
			aria-label={{t "aria.dataview.region"}}
			data-pc-name="dataview"
			data-pc-section="root"
			...attributes
		>
			{{#if (has-block "header")}}
				<div class="dataview-header" data-pc-section="header">
					{{yield to="header"}}
				</div>
			{{/if}}
			<div class="dataview-content" data-pc-section="content">

				<div class="uls-grid" role={{this.args.gridRole}}>
					{{#if (has-block "left")}}
						{{yield to="left"}}
					{{/if}}

					{{#if (has-block "content")}}
						{{yield to="content"}}
					{{else}}
						{{yield}}
					{{/if}}
					{{#if (has-block "right")}}
						{{yield to="right"}}
					{{/if}}
				</div>

				{{#if (has-block "footer")}}
					<div data-pc-section="footer">
						{{yield to="footer"}}
					</div>
				{{/if}}
			</div>
		</div>
	</template>
}
