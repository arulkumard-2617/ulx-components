import Component from "@glimmer/component";
import UlxPaginator from "../ulx-paginator/index.gjs";

export default class TablePaginatorRow extends Component {
	get isVisible() {
		return !!this.args.visible;
	}

	<template>
		{{#if this.isVisible}}
			<div class="datatable-paginator">
				<UlxPaginator
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
