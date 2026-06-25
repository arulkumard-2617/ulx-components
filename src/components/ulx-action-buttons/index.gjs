import Component from "@glimmer/component";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxSplitButton from "../ulx-split-button/index.gjs";

/**
 * Renders a primary {@link UlxIconButton} or {@link UlxSplitButton} from a list of action descriptors.
 * First item is the main action; additional items appear in the split dropdown.
 *
 * @class UlxActionButtons
 * @param {object[]} [actionButtons] - `{ label, action, customParam?, icon?, dataQa?, separator? }`; empty or missing renders nothing. Optional `icon` on any item uses font-icon classes (e.g. `bs-icons1 ls-tick-icon`) for the primary button or split menu rows. Optional `dataQa` is passed through to each split-dropdown menu item (tiered menu row `data-qa`). Secondary items with `separator: true` render a tiered menu divider.
 * @param {string} [variant='primary'] - Passed to the underlying Ulx controls.
 * @param {boolean} [outlined=false]
 * @param {string} [size='m-size']
 * @param {boolean} [disabled=false]
 * @param {string} [tieredMenuDataQa] - Optional UlxTieredmenu root `data-qa` (see {@link UlxSplitButton} `@tieredMenuDataQa`).
 * @param {string} [dataQa] - Optional root `data-qa` for {@link UlxSplitButton} / {@link UlxIconButton} (e.g. `speakers-toolbar-add-speaker` → split default `…-default`, dropdown `…-dropdown`).
 * @param {string} [defaultButtonDataQa] - Optional data-qa override for UlxSplitButton default button.
 * @param {string} [dropdownButtonDataQa] - Optional data-qa override for UlxSplitButton dropdown button.
 * @param {function} [onShow] - Called when the split-button dropdown opens (see {@link UlxSplitButton} `@onShow`).
 * @param {function} [onHide] - Called when the split-button dropdown closes (see {@link UlxSplitButton} `@onHide`).
 * @param {function} [onPrimaryButtonReady] - Called with the primary action button's DOM element once it mounts (split-button default or standalone button); use as a popup or tooltip anchor target.
 */
export default class UlxActionButtons extends Component {
	primaryButtonRef = modifier((element) => {
		const { onPrimaryButtonReady } = this.args;
		if (typeof onPrimaryButtonReady === "function") {
			onPrimaryButtonReady(element);
		}
	});

	get actionButtonsList() {
		return this.args.actionButtons ?? [];
	}

	get primaryActionButton() {
		return this.actionButtonsList[0] ?? null;
	}

	get hasSecondaryActions() {
		return this.actionButtonsList.length > 1;
	}

	get secondaryActionButtons() {
		return this.actionButtonsList.slice(1).map((actionButton) => {
			if (actionButton.separator === true) {
				return { separator: true };
			}

			return {
				label: actionButton.label,
				icon: actionButton.icon,
				command: () => this.triggerActionButton(actionButton),
				...(actionButton.dataQa ? { dataQa: actionButton.dataQa } : {})
			};
		});
	}

	get variant() {
		return this.args.variant ?? "primary";
	}

	get size() {
		return this.args.size ?? "m-size";
	}

	get outlined() {
		return Boolean(this.args.outlined);
	}

	get disabled() {
		return Boolean(this.args.disabled);
	}

	get primaryIcon() {
		return this.primaryActionButton?.icon ?? null;
	}

	@action
	triggerActionButton(actionButton) {
		const actionFn = actionButton?.action;
		if (typeof actionFn !== "function") {
			return;
		}

		if (actionButton.customParam !== undefined) {
			actionFn(actionButton.customParam);
			return;
		}

		actionFn();
	}

	@action
	handlePrimaryAction() {
		this.triggerActionButton(this.primaryActionButton);
	}

	<template>
		{{#if this.primaryActionButton}}
			{{#if this.hasSecondaryActions}}
				<UlxSplitButton
					@label={{this.primaryActionButton.label}}
					@icon={{this.primaryIcon}}
					@variant={{this.variant}}
					@outlined={{this.outlined}}
					@size={{this.size}}
					@onClick={{this.handlePrimaryAction}}
					@items={{this.secondaryActionButtons}}
					@disabled={{this.disabled}}
					@dataQa={{@dataQa}}
					@defaultButtonDataQa={{@defaultButtonDataQa}}
					@dropdownButtonDataQa={{@dropdownButtonDataQa}}
					@tieredMenuDataQa={{@tieredMenuDataQa}}
					@onShow={{@onShow}}
					@onHide={{@onHide}}
					@defaultButtonRef={{this.primaryButtonRef}}
				/>
			{{else}}
				<UlxIconButton
					@label={{this.primaryActionButton.label}}
					@iconLeft={{this.primaryIcon}}
					@variant={{this.variant}}
					@outlined={{this.outlined}}
					@size={{this.size}}
					@onClick={{this.handlePrimaryAction}}
					@disabled={{this.disabled}}
					@dataQa={{@dataQa}}
					@elementRef={{this.primaryButtonRef}}
				/>
			{{/if}}
		{{/if}}
	</template>
}
