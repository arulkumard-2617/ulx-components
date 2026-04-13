import Component from "@glimmer/component";
import and from "ember-truth-helpers/helpers/and";
import not from "ember-truth-helpers/helpers/not";
import UlxCard from "../ulx-card/index.gjs";
import TableEmptyState from "./table-empty-state.gjs";

export default class TableViewCard extends Component {
	get rows() {
		return this.args.rows ?? [];
	}

	<template>
		<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{@wrapperStyle}}>
			<div class="ulx-grid gap-4 col-{{@cardViewColumns}}">
				{{#each this.rows as |row|}}
					<UlxCard @bodyClass="p-0">{{yield row to="card"}}</UlxCard>
				{{/each}}
			</div>
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
