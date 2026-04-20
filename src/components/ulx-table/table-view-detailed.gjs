import Component from "@glimmer/component";
import or from "ember-truth-helpers/helpers/or";
import and from "ember-truth-helpers/helpers/and";
import not from "ember-truth-helpers/helpers/not";
import UlxDataView from "../ulx-data-view/index.gjs";
import TableEmptyState from "./table-empty-state.gjs";

export default class TableViewDetailed extends Component {
	get rows() {
		return this.args.rows ?? [];
	}

	<template>
		<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{@wrapperStyle}}>
			{{#if (or @loading this.rows.length)}}
				<UlxDataView @layout="list" @gridRole="list">
					<:content>
						{{#each this.rows as |row|}}
							<div class="dataview-item">
								{{yield row to="detailed"}}
							</div>
						{{/each}}
					</:content>
				</UlxDataView>
			{{/if}}
			{{#if (and (not @loading) (not this.rows.length))}}
				<div class="datatable-empty-message">
					<TableEmptyState
						@headerText={{@emptyStateHeaderText}}
						@subHeaderText={{@emptyStateSubHeaderText}}
						@iconName={{@emptyStateIconName}}
					>
						<:emptyMessage>{{yield to="emptyMessage"}}</:emptyMessage>
					</TableEmptyState>
				</div>
			{{/if}}
		</div>
	</template>
}
