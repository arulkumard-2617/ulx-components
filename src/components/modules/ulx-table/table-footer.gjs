import Component from "@glimmer/component";
import { action } from "@ember/object";
import { getFieldValue } from "./utils.js";

/**
 * Internal tfoot for UlxTable.
 * Renders footer cells from flex-col `footer` text or `footerTemplate` component.
 */
export default class TableFooter extends Component {
	@action
	hasAnyFooter(columns) {
		return columns?.some((c) => c.footer || c.footerTemplate) ?? false;
	}

	@action
	footerCellClass(col) {
		const parts = ["datatable-flex-col-footer-cell"];
		col.frozen && parts.push("frozen");
		col.className && parts.push(col.className);
		return parts.filter(Boolean).join(" ");
	}

	@action
	footerCellStyle(col) {
		const parts = [];
		col.style && parts.push(col.style);
		if (col.frozen) {
			const side = col.alignFrozen ?? "left";
			parts.push(`${side}: ${col.frozenOffset ?? "0px"}`);
		}
		if (col.align) parts.push(`text-align: ${col.align}`);
		return parts.join("; ") || undefined;
	}

	<template>
		{{#if (this.hasAnyFooter @columns)}}
			<tfoot class="datatable-tfoot">
				<tr class="datatable-footer-row">
					{{#each @columns as |col|}}
						{{#if col.selectionMode}}
							<td class="datatable-flex-col-footer-cell" style="width: 3rem"></td>
						{{else if col.expander}}
							<td class="datatable-flex-col-footer-cell" style="width: 3rem"></td>
						{{else if col.rowReorder}}
							<td class="datatable-flex-col-footer-cell" style="width: 3rem"></td>
						{{else if col.rowEditor}}
							<td class="datatable-flex-col-footer-cell" style="width: 6rem"></td>
						{{else}}
							<td class={{this.footerCellClass col}} style={{this.footerCellStyle col}}>
								{{#if col.footerTemplate}}
									<col.footerTemplate @col={{col}} />
								{{else}}
									{{col.footer}}
								{{/if}}
							</td>
						{{/if}}
					{{/each}}

					{{#if @showManageColumns}}
						<td class="datatable-flex-col-footer-cell" style="width: 2.5rem"></td>
					{{/if}}
				</tr>
			</tfoot>
		{{/if}}
	</template>
}
