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
import UlxMultiSelect from "../../elements/ulx-multi-select/index.gjs";

const MATCH_MODE_OPTIONS = [
	{ label: "Contains", value: "contains" },
	{ label: "Not contains", value: "notContains" },
	{ label: "Starts with", value: "startsWith" },
	{ label: "Ends with", value: "endsWith" },
	{ label: "Equals", value: "equals" },
	{ label: "Not equals", value: "notEquals" }
];

const MATCH_MODE_OPTIONS_MULTISELECT = [
	{ label: "In", value: "in" },
	{ label: "Not in", value: "notIn" }
];

const OPERATOR_OPTIONS = [
	{ label: "AND", value: "and" },
	{ label: "OR", value: "or" }
];

/**
 * Filter overlay popup for UlxTable menu-display filter mode.
 *
 * @param {Object} column - the column definition being filtered
 * @param {Object} filterMeta - current filter state: { value?, matchMode?, operator?, constraints? }
 * @param {Function} onApply - (field, filterMeta) => void
 * @param {Function} onClear - (field) => void
 * @param {Function} onClose - () => void
 */
export default class FilterOverlay extends Component {
	@tracked localConstraints = null;
	@tracked localOperator = "and";

	operatorOptions = OPERATOR_OPTIONS;

	get field() {
		return this.args.column?.filterField ?? this.args.column?.field;
	}

	get isMultiSelect() {
		return this.args.column?.filterType === "multiselect";
	}

	get hasMatchModes() {
		return this.args.column?.filterMatchModeOptions !== false;
	}

	get matchModeOptions() {
		if (this.isMultiSelect) {
			return this.args.column?.filterMatchModeOptions ?? MATCH_MODE_OPTIONS_MULTISELECT;
		}
		return this.args.column?.filterMatchModeOptions ?? MATCH_MODE_OPTIONS;
	}

	get filterOptions() {
		return this.args.column?.filterOptions ?? [];
	}

	get defaultMatchMode() {
		return this.isMultiSelect ? "in" : "contains";
	}

	get defaultValue() {
		return this.isMultiSelect ? [] : "";
	}

	get constraints() {
		if (this.localConstraints) return this.localConstraints;
		const meta = this.args.filterMeta;
		if (meta?.constraints) return meta.constraints;
		return [{
			value: meta?.value ?? this.defaultValue,
			matchMode: meta?.matchMode ?? this.defaultMatchMode
		}];
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
	updateConstraintFromInput(index, event) {
		const value = typeof event === "string" ? event : (event?.target?.value ?? "");
		this.updateConstraint(index, "value", value);
	}

	@action
	addConstraint() {
		this.localConstraints = [
			...this.constraints,
			{ value: this.defaultValue, matchMode: this.defaultMatchMode }
		];
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
			aria-label="Column filter"
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

						{{#if @column.filterElement}}
							<@column.filterElement
								@field={{this.field}}
								@value={{constraint.value}}
								@onChange={{fn this.updateConstraint index "value"}}
							/>
						{{else if this.isMultiSelect}}
							<UlxMultiSelect
								@value={{constraint.value}}
								@options={{this.filterOptions}}
								@optionLabel="label"
								@optionValue="value"
								@placeholder="Select values"
								@filter={{true}}
								@onChange={{fn this.updateConstraint index "value"}}
								aria-label="Filter values"
							/>
						{{else}}
							<UlxInput
								@value={{constraint.value}}
								@placeholder="Enter filter value"
								{{on "input" (fn this.updateConstraintFromInput index)}}
								aria-label="Filter value"
							/>
						{{/if}}

					{{#if (not (eq index 0))}}
						<UlxButton
							@variant="text"
							@icon="dash-circle"
							@iconComponentClass="bs-icons1"
							@iconSize="s14"
							@customClass="datatable-filter-remove"
							@onClick={{fn this.removeConstraint index}}
							aria-label="Remove filter rule"
						/>
					{{/if}}
					</div>
				{{/each}}
			</div>

			{{#if (not this.isMultiSelect)}}
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
			{{/if}}

			<div class="datatable-filter-buttonbar">
				<UlxButton @variant="outlined" @label="Clear" @onClick={{this.handleClear}} />
				<UlxButton @variant="primary" @label="Apply" @onClick={{this.handleApply}} />
			</div>
		</div>
	</template>
}
