import Component from "@glimmer/component";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { t } from "../../utils/i18n";

const LAYOUT_TO_CLASS = {
	list: "layout-list",
	grid: "layout-grid",
};

const DEFAULT_LAYOUT = "list";

/**
 * DataView is a layout wrapper with left, content, and right sections inside a dataview grid.
 * Uses existing dataview.less classes (ulx-dataview, dataview-content, layout-list/layout-grid) and base grid utilities.
 *
 * @class UlxDataView
 * @param {string} [layout="list"] - Layout variant: "list" or "grid". Adds layout-list or layout-grid class to root.
 * @param {string} [gridRole] - Optional ARIA role for the main content container (e.g. "list" for list semantics).
 * @param {string} [customClass] - Extra CSS class for root.
 * @param {string} [dataQa] - Optional root `data-qa` override (defaults to `ulx-dataview`).
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
		const { layout = DEFAULT_LAYOUT } = this.args;
		return LAYOUT_TO_CLASS[layout] ?? LAYOUT_TO_CLASS[DEFAULT_LAYOUT];
	}

	get rootClasses() {
		return joinClassNames(this.baseClass, this.layoutClass, this.args.customClass);
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-dataview";
	}

	<template>
		<div
			class={{this.rootClasses}}
			role="region"
			aria-label={{t "aria.dataview.region"}}
			data-qa={{this.rootDataQa}}
			...attributes
		>
			{{#if (has-block "header")}}
				<div class="dataview-header" data-qa="ulx-dataview-header">
					{{yield to="header"}}
				</div>
			{{/if}}
			<div class="dataview-content" data-qa="ulx-dataview-content" role={{this.args.gridRole}}>
				{{yield to="left"}}

				{{#if (has-block "content")}}
					{{yield to="content"}}
				{{else}}
					{{yield}}
				{{/if}}

				{{yield to="right"}}

				{{#if (has-block "footer")}}
					<div data-qa="ulx-dataview-footer">
						{{yield to="footer"}}
					</div>
				{{/if}}
			</div>
		</div>
	</template>
}
