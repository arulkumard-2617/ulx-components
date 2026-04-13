import Component from "@glimmer/component";
import and from "ember-truth-helpers/helpers/and";
import not from "ember-truth-helpers/helpers/not";
import { getFieldValue } from "./utils.js";
import { t } from "../../utils/i18n.js";
import TableEmptyState from "./table-empty-state.gjs";

export default class TableViewVertical extends Component {
	get rows() {
		return this.args.rows ?? [];
	}

	<template>
		<div class="datatable-wrapper {{if @scrollable 'scrollable'}}" style={{@wrapperStyle}}>
			<table class="{{@tableClass}} datatable-vertical" role="grid">
				{{#if @verticalLabelField}}
					<thead>
						<tr>
							<th
								class="datatable-vertical-corner"
								scope="col"
								aria-label={{t "aria.table.vertical.corner"}}
							></th>
							{{#each this.rows as |row|}}
								<th class="datatable-vertical-col-header" scope="col">
									{{getFieldValue row @verticalLabelField}}
								</th>
							{{/each}}
						</tr>
					</thead>
				{{/if}}
				<tbody>
					{{#each @verticalRows as |col|}}
						<tr class="datatable-vertical-row">
							<th class="column-header-cell datatable-vertical-row-header" scope="row">
								{{col.header}}
							</th>
							{{#each this.rows as |row rowIdx|}}
								<td class="datatable-cell">
									{{#if col.body}}
										<col.body @row={{row}} @value={{@getCellValue row col}} @index={{rowIdx}} />
									{{else}}
										{{@getCellValue row col}}
									{{/if}}
								</td>
							{{/each}}
						</tr>
					{{/each}}
				</tbody>
			</table>
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
