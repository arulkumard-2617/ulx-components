import Component from "@glimmer/component";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxSplitButton from "../ulx-split-button/index.gjs";

function resolveItemCommand(item) {
	return item?.command ?? item?.action;
}

function toMenuItem(item) {
	if (item?.separator === true) {
		return { separator: true };
	}

	const command = resolveItemCommand(item);
	return command && !item.command ? { ...item, command } : item;
}

/**
 * Renders a primary {@link UlxIconButton} or {@link UlxSplitButton} from a list of action descriptors.
 * First item is the main action; additional items appear in the split dropdown.
 *
 * @class UlxActionButtons
 * @param {object[]} [actionButtons] - Action descriptors for UlxTieredmenu (see UlxTieredmenu model structure). First item is the primary button; additional items appear in the split dropdown. Supports `label`, `icon`, `command`, `separator`, `disabled`, `dataQa`, `linkClass`, etc. Legacy `action` is used when `command` is omitted.
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
		return this.actionButtonsList.slice(1).map(toMenuItem);
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
	handlePrimaryAction() {
		const command = resolveItemCommand(this.primaryActionButton);
		if (typeof command === "function") {
			command();
		}
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
