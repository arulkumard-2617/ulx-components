import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import eq from "ember-truth-helpers/helpers/eq";
import not from "ember-truth-helpers/helpers/not";
import and from "ember-truth-helpers/helpers/and";
import or from "ember-truth-helpers/helpers/or";
import gt from "ember-truth-helpers/helpers/gt";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxIconButton from "../../elements/ulx-icon-button/index.gjs";
import UlxDropdown from "../../elements/ulx-dropdown/index.gjs";
import UlxInput from "../../elements/ulx-input/index.gjs";
import UlxMultiSelect from "../../elements/ulx-multi-select/index.gjs";
import { t } from "../../../utils/i18n.js";

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
	@tracked localOperator = null;
	@tracked showValidation = false;

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
		const textOptions = [
			{ label: t("lbl.filter.contains"), value: "contains" },
			{ label: t("lbl.filter.not.contains"), value: "notContains" },
			{ label: t("lbl.filter.starts.with"), value: "startsWith" },
			{ label: t("lbl.filter.ends.with"), value: "endsWith" },
			{ label: t("lbl.filter.equals"), value: "equals" },
			{ label: t("lbl.filter.not.equals"), value: "notEquals" }
		];
		const multiselectOptions = [
			{ label: t("lbl.filter.in"), value: "in" },
			{ label: t("lbl.filter.not.in"), value: "notIn" }
		];
		if (this.isMultiSelect) {
			return this.args.column?.filterMatchModeOptions ?? multiselectOptions;
		}
		return this.args.column?.filterMatchModeOptions ?? textOptions;
	}

	get operatorOptions() {
		return [
			{ label: t("lbl.filter.and"), value: "and" },
			{ label: t("lbl.filter.or"), value: "or" }
		];
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
		return [
			{
				value: meta?.value ?? this.defaultValue,
				matchMode: meta?.matchMode ?? this.defaultMatchMode
			}
		];
	}

	get operator() {
		return this.localOperator ?? this.args.filterMeta?.operator ?? "and";
	}

	get canAddRule() {
		return !this.isMultiSelect;
	}

	get isValid() {
		return this.constraints.every((c) => {
			const { value } = c;
			if (Array.isArray(value)) return value.length > 0;
			return value != null && String(value).trim() !== "";
		});
	}

	isConstraintValueEmpty = (constraint) => {
		const { value } = constraint;
		if (Array.isArray(value)) return value.length === 0;
		return value == null || String(value).trim() === "";
	};

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
		if (!this.canAddRule) return;
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
		this.showValidation = true;
		if (!this.isValid) return;
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
		this.localOperator = null;
		this.showValidation = false;
		this.args.onClear?.(this.field);
		this.args.onClose?.();
	}

	@action
	handleOverlayKeydown(event) {
		if (event.key === "Escape") {
			event.preventDefault();
			this.args.onClose?.();
		}
	}

	@action
	handleFilterValueKeydown(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.addConstraint();
		}
	}

	<template>
		<div
			class="ulx-datatable-filter-overlay menu-display"
			role="dialog"
			aria-label={{t "aria.table.column.filter"}}
			{{on "keydown" this.handleOverlayKeydown}}
		>
			<div class="filter-overlay-header">
				<span class="filter-overlay-title">{{or @column.header this.field}}</span>
				<UlxIconButton
					@variant="secondary"
					@text={{true}}
					@size="s-size"
					@iconLeft="close-icon-01"
					@iconComponentClass="bs-icons1"
					@iconSize="s18"
					@onClick={{@onClose}}
					aria-label={{t "lbl.close"}}
				/>
			</div>
			{{#if this.hasMatchModes}}
				<div class="filter-operator">
					<UlxDropdown
						@value={{this.operator}}
						@options={{this.operatorOptions}}
						@optionLabel="label"
						@optionValue="value"
						@onChange={{this.setOperator}}
						aria-label={{t "aria.table.filter.operator"}}
					/>
				</div>
			{{/if}}

			<div class="filter-constraints">
				{{#each this.constraints key="@index" as |constraint index|}}
					<div class="filter-constraint">
						{{#if this.hasMatchModes}}
							<UlxDropdown
								@value={{constraint.matchMode}}
								@options={{this.matchModeOptions}}
								@optionLabel="label"
								@optionValue="value"
								@onChange={{fn this.updateConstraint index "matchMode"}}
								aria-label={{t "aria.table.filter.match.mode"}}
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
								@placeholder={{t "msg.table.select.values"}}
								@filter={{true}}
								@invalid={{and this.showValidation (not constraint.value.length)}}
								@onChange={{fn this.updateConstraint index "value"}}
								aria-label={{t "aria.table.filter.values"}}
							/>
						{{else}}
							<UlxInput
								@value={{constraint.value}}
								@placeholder={{t "msg.table.enter.filter.value"}}
								@invalid={{and this.showValidation (this.isConstraintValueEmpty constraint)}}
								@onKeydown={{this.handleFilterValueKeydown}}
								{{on "input" (fn this.updateConstraintFromInput index)}}
								aria-label={{t "aria.table.filter.value"}}
							/>
						{{/if}}

						{{#if (gt index 0)}}
							<UlxIconButton
								@variant="text"
								@iconLeft="dash-circle"
								@iconComponentClass="bs-icons1"
								@iconSize="s14"
								@customClass="filter-remove"
								@onClick={{fn this.removeConstraint index}}
								aria-label={{t "aria.table.remove.filter.rule"}}
							/>
						{{/if}}
					</div>
				{{/each}}
			</div>

			{{#if this.canAddRule}}
				<div class="filter-add-rule">
					<UlxIconButton
						@outlined={{true}}
						@variant="primary"
						@label={{t "lbl.add.filter.rule"}}
						@iconLeft="add-icon-01"
						@size="s-size"
						@onClick={{this.addConstraint}}
					/>
				</div>
			{{/if}}

			<div class="filter-buttonbar">
				<UlxButton @variant="basic" @label={{t "lbl.clear"}} @onClick={{this.handleClear}} />
				<UlxButton
					@variant="primary"
					@label={{t "lbl.apply.filter"}}
					@onClick={{this.handleApply}}
				/>
			</div>
		</div>
	</template>
}
