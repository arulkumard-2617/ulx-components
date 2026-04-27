import Component from "@glimmer/component";
import UlxPaginator from "../ulx-paginator/index.gjs";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for the paginator row (default: `ulx-table-paginator`). */
export default class TablePaginatorRow extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-paginator");
	}

	get paginatorDataQa() {
		return buildDataQa(this.rootDataQa, "paginator");
	}

	get isVisible() {
		return !!this.args.visible;
	}

	<template>
		{{#if this.isVisible}}
			<div class="datatable-paginator" data-qa={{this.rootDataQa}}>
				<UlxPaginator
					@dataQa={{this.paginatorDataQa}}
					@totalRecords={{@totalRecords}}
					@rows={{@rows}}
					@first={{@first}}
					@rowsPerPageOptions={{@rowsPerPageOptions}}
					@template={{@template}}
					@currentPageReportTemplate={{@currentPageReportTemplate}}
					@onPageChange={{@onPageChange}}
				>
					<:left>{{yield to="left"}}</:left>
					<:right>{{yield to="right"}}</:right>
				</UlxPaginator>
			</div>
		{{/if}}
	</template>
}
