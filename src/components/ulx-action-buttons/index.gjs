import Component from "@glimmer/component";
import { action } from "@ember/object";
import UlxButton from "../ulx-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxSplitButton from "../ulx-split-button/index.gjs";

/**
 * Renders a primary {@link UlxButton} or {@link UlxSplitButton} from a list of action descriptors.
 * First item is the main action; additional items appear in the split dropdown.
 *
 * @class UlxActionButtons
 * @param {object[]} [actionButtons] - `{ label, action, customParam?, icon?, dataQa? }`; empty or missing renders nothing. Optional `icon` on any item uses font-icon classes (e.g. `bs-icons1 ls-tick-icon`) for the primary button or split menu rows. Optional `dataQa` is passed through to each split-dropdown menu item (tiered menu row `data-qa`).
 * @param {string} [variant='primary'] - Passed to the underlying Ulx controls.
 * @param {boolean} [outlined=false]
 * @param {string} [size='m-size']
 * @param {boolean} [disabled=false]
 * @param {string} [tieredMenuDataQa] - Optional UlxTieredmenu root `data-qa` (see {@link UlxSplitButton} `@tieredMenuDataQa`).
 * @param {string} [dataQa] - Optional root `data-qa` for {@link UlxSplitButton} / {@link UlxButton} (e.g. `speakers-toolbar-add-speaker` → split default `…-default`, dropdown `…-dropdown`).
 * @param {string} [defaultButtonDataQa] - Optional data-qa override for UlxSplitButton default button.
 * @param {string} [dropdownButtonDataQa] - Optional data-qa override for UlxSplitButton dropdown button.
 */
export default class UlxActionButtons extends Component {
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
		return this.actionButtonsList.slice(1).map((actionButton) => ({
			label: actionButton.label,
			icon: actionButton.icon,
			command: () => this.triggerActionButton(actionButton),
			...(actionButton.dataQa ? { dataQa: actionButton.dataQa } : {})
		}));
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

	get hasPrimaryIcon() {
		return Boolean(this.primaryIcon);
	}

	get primaryIconName() {
		const icon = this.primaryIcon;
		if (!icon) {
			return null;
		}

		const parts = icon.trim().split(/\s+/);
		return parts.length > 1 ? parts[parts.length - 1] : icon;
	}

	get primaryIconComponentClass() {
		const icon = this.primaryIcon;
		if (!icon) {
			return "bs-icons1";
		}

		const parts = icon.trim().split(/\s+/);
		return parts.length > 1 ? parts[0] : "bs-icons1";
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
					@icon={{if this.hasPrimaryIcon this.primaryIconName}}
					@iconComponentClass={{this.primaryIconComponentClass}}
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
				/>
			{{else}}
				<UlxButton
					@label={{this.primaryActionButton.label}}
					@variant={{this.variant}}
					@outlined={{this.outlined}}
					@size={{this.size}}
					@onClick={{this.handlePrimaryAction}}
					@disabled={{this.disabled}}
					@dataQa={{@dataQa}}
				>
					<:prefix>
						{{#if this.hasPrimaryIcon}}
							<UlxIcon
								@iconName={{this.primaryIconName}}
								@type="font"
								@componentClass={{this.primaryIconComponentClass}}
								aria-hidden="true"
							/>
						{{/if}}
					</:prefix>
				</UlxButton>
			{{/if}}
		{{/if}}
	</template>
}
