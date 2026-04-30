import Component from "@glimmer/component";
import UlxDropdown from "../ulx-dropdown/index.gjs";
import { t } from "../../utils/i18n";

/**
 * Default rows-per-page dropdown for UlxPaginator.
 *
 * @param {number} rows
 * @param {{ label: string; value: number }[]} options
 * @param {boolean} isEmpty
 * @param {boolean} showRecordsPerPageLabel
 * @param {Function} onRowsChange
 * @param {string} rootDataQa
 */
export default class PaginatorDefaultRowsPerPage extends Component {
	get rows() {
		return this.args.rows;
	}

	get options() {
		return this.args.options;
	}

	get isEmpty() {
		return this.args.isEmpty;
	}

	get showRecordsPerPageLabel() {
		return this.args.showRecordsPerPageLabel;
	}

	get onRowsChange() {
		return this.args.onRowsChange;
	}

	get rootDataQa() {
		return this.args.rootDataQa;
	}

	<template>
		<div class="paginator-rpp" data-qa="{{this.rootDataQa}}-rpp">
			{{#if this.showRecordsPerPageLabel}}
				<span class="paginator-rpp-label">{{t "lbl.records.per.page"}}</span>
			{{/if}}
			<UlxDropdown
				@value={{this.rows}}
				@options={{this.options}}
				@optionLabel="label"
				@optionValue="value"
				@placeholder={{t "lbl.paginator.choose"}}
				@disabled={{this.isEmpty}}
				@onChange={{this.onRowsChange}}
				@customClass="paginator-rpp-dropdown"
				aria-label={{t "lbl.a11y.paginator.rowsPerPage"}}
			/>
		</div>
	</template>
}
