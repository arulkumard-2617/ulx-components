import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import not from "ember-truth-helpers/helpers/not";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxDropdown from "../../elements/ulx-dropdown/index.gjs";
import UlxInput from "../../elements/ulx-input/index.gjs";

const MATCH_MODE_OPTIONS = [
	{ label: "Contains", value: "contains" },
	{ label: "Not contains", value: "notContains" },
	{ label: "Starts with", value: "startsWith" },
	{ label: "Ends with", value: "endsWith" },
	{ label: "Equals", value: "equals" },
	{ label: "Not equals", value: "notEquals" }
];

const OPERATOR_OPTIONS = [
	{ label: "AND", value: "and" },
	{ label: "OR", value: "or" }
];

/**
 * Filter overlay popup for UlxTable menu-display filter mode.
 *
 * @param {Object} flex-col - the flex-col definition being filtered
 * @param {Object} filterMeta - current filter state for the flex-col: { value?, matchMode?, operator?, constraints? }
 * @param {Function} onApply - (field, filterMeta) => void
 * @param {Function} onClear - (field) => void
 * @param {Function} onClose - () => void
 * @param {string} [position] - e.g. 'bottom-left'
 */
export default class FilterOverlay extends Component {
	@tracked localConstraints = null;
	@tracked localOperator = "and";

	matchModeDefaults = MATCH_MODE_OPTIONS;
	operatorOptions = OPERATOR_OPTIONS;

	get field() {
		return this.args.flex - col?.filterField ?? this.args.flex - col?.field;
	}

	get hasMatchModes() {
		return this.args.flex - col?.filterMatchModeOptions !== false;
	}

	get matchModeOptions() {
		return this.args.flex - col?.filterMatchModeOptions ?? MATCH_MODE_OPTIONS;
	}

	get constraints() {
		if (this.localConstraints) return this.localConstraints;
		const meta = this.args.filterMeta;
		if (meta?.constraints) return meta.constraints;
		return [{ value: meta?.value ?? "", matchMode: meta?.matchMode ?? "contains" }];
	}

	get operator() {
		return this.localOperator ?? this.args.filterMeta?.operator ?? "and";
	}

	@action
	updateConstraint(index, key, value) {
		const updated = this.constraints.map((c, i) => (i === index ? { ...c, [key]: value } : c));
		this.localConstraints = updated;
	}

	@action
	addConstraint() {
		this.localConstraints = [...this.constraints, { value: "", matchMode: "contains" }];
	}

	@action
	removeConstraint(index) {
		if (this.constraints.length <= 1) return;
		this.localConstraints = this.constraints.filter((_, i) => i !== index);
	}

	@action
	setOperator(value) {
		this.localOperator = value;
	}

	@action
	handleApply() {
		const singleConstraint = this.constraints.length === 1;
		const meta = singleConstraint
			? { value: this.constraints[0].value, matchMode: this.constraints[0].matchMode }
			: { operator: this.operator, constraints: this.constraints };
		this.args.onApply?.(this.field, meta);
		this.args.onClose?.();
	}

	@action
	handleClear() {
		this.localConstraints = null;
		this.localOperator = "and";
		this.args.onClear?.(this.field);
		this.args.onClose?.();
	}

	<template>
		<div
			class="ulx-datatable-filter-overlay menu-display"
			role="dialog"
			aria-label="flex-col filter"
		>
			{{#if this.hasMatchModes}}
				<div class="datatable-filter-operator">
					<UlxDropdown
						@value={{this.operator}}
						@options={{this.operatorOptions}}
						@optionLabel="label"
						@optionValue="value"
						@onChange={{this.setOperator}}
						aria-label="Filter operator"
					/>
				</div>
			{{/if}}

			<div class="datatable-filter-constraints">
				{{#each this.constraints as |constraint index|}}
					<div class="datatable-filter-constraint">
						{{#if this.hasMatchModes}}
							<UlxDropdown
								@value={{constraint.matchMode}}
								@options={{this.matchModeOptions}}
								@optionLabel="label"
								@optionValue="value"
								@onChange={{fn this.updateConstraint index "matchMode"}}
								aria-label="Filter match mode"
							/>
						{{/if}}

						{{#if @flex-col.filterElement}}
							<@flex-col.filterElement
								@field={{this.field}}
								@value={{constraint.value}}
								@onChange={{fn this.updateConstraint index "value"}}
							/>
						{{else}}
							<UlxInput
								@value={{constraint.value}}
								@placeholder="Enter filter value"
								@onChange={{fn this.updateConstraint index "value"}}
								aria-label="Filter value"
							/>
						{{/if}}

						{{#if (not (eq index 0))}}
							<button
								type="button"
								class="datatable-filter-remove"
								aria-label="Remove filter rule"
								{{on "click" (fn this.removeConstraint index)}}
							>
								<i class="bs-icons1 dash-circle s14" aria-hidden="true"></i>
							</button>
						{{/if}}
					</div>
				{{/each}}
			</div>

			<div class="datatable-filter-add-rule">
				<UlxButton
					@variant="text"
					@label="Add rule"
					@icon="plus-circle"
					@iconComponentClass="bs-icons1"
					@iconSize="s14"
					@onClick={{this.addConstraint}}
				/>
			</div>

			<div class="datatable-filter-buttonbar">
				<UlxButton @variant="outlined" @label="Clear" @onClick={{this.handleClear}} />
				<UlxButton @variant="primary" @label="Apply" @onClick={{this.handleApply}} />
			</div>
		</div>
	</template>
}
