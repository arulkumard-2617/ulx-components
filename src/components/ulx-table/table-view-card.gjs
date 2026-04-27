import Component from "@glimmer/component";
import and from "ember-truth-helpers/helpers/and";
import not from "ember-truth-helpers/helpers/not";
import UlxCard from "../ulx-card/index.gjs";
import TableEmptyState from "./table-empty-state.gjs";
import { resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for the card view wrapper (default: `ulx-table-view-card`). */
export default class TableViewCard extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-view-card");
	}

	get rows() {
		return this.args.rows ?? [];
	}

	<template>
		<div
			class="datatable-wrapper {{if @scrollable 'scrollable'}}"
			style={{@wrapperStyle}}
			data-qa={{this.rootDataQa}}
		>
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
