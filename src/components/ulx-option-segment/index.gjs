import Component from "@glimmer/component";
import { action } from "@ember/object";
import { joinClassNames } from "../../utils/class-names";
import { NAMESPACE, getComponentClass } from "../../utils/component-config";
import { resolveRootDataQa } from "../../utils/data-qa";
import { optionSegmentRowKey, resolveKey } from "../../utils/input-util";
import UlxOptionSegmentItem from "./item.gjs";

function isSelectionMode(value) {
	return value === "control" || value === "center" || value === "corner";
}

function buildOptionSegmentId(namespace, idArg, key) {
	if (typeof idArg === "string" && idArg.length) return idArg;
	if (typeof key === "string" && key.length) return key;
	return `${namespace}-option-segment-${key}`;
}

/**
 * OptionSegment component for building radio / checkbox style option cards.
 *
 * Uses ULX option segment styles with the updated structure:
 *
 * - Group container:
 *   - `.ulx-option-segments` (from `getComponentClass("option-segments")`)
 * - Individual option item inside the group:
 *   - `.os-item` (clickable card)
 *     - `.os-control` for the visual/control element
 *     - `.os-content` for text content
 *       - `.os-title` for primary label
 *       - `.os-description` for helper / secondary text
 *       - `.os-nested` and `.os-nested-item` for nested options
 *
 * WCAG semantics:
 * - The **group container** behaves as:
 *   - `role="radiogroup"` when `@type="radio"` or `@type="color-swatch"`
 *   - `role="group"` for all other types (e.g. checkbox/basic containers)
 * - The **individual option item** inside the group behaves as:
 *   - no `role` on the card when built-in `UlxRadio` / `UlxCheckbox` / `UlxTristateCheckbox` is used (focus stays on the native control)
 *   - `role="radio"` / `role="checkbox"` when the card is the toggle (custom `<:control>` or non-native selection)
 *   - `role="radio"` with roving `tabindex` and arrow / Home / End navigation for `@type="color-swatch"` (APG radiogroup)
 *   - `role="button"` with `aria-pressed` when `@type="basic"`
 *
 * Keyboard and screen reader behavior:
 * - With the default embedded `UlxRadio` / `UlxCheckbox` / `UlxTristateCheckbox`, the
 *   native input is the only tab stop; the card still handles clicks outside `.option-control`.
 * - With a custom `<:control>` block (or non-toggle types), each item card may expose
 *   `role="radio"` / `role="checkbox"` with `aria-checked` and `tabindex` for Space / Enter.
 * - Color swatches: one tab stop for the group via roving tabindex; Arrow keys move focus and selection; Space selects the focused swatch.
 *
 * @class UlxOptionSegment
 * @param {"radio"|"checkbox"|"tristate"|"basic"
 *   |"color-swatch"} [type="radio"] - Semantic type: built-in toggles, plain selectable cards, or color swatches (`color-swatch` root class; no `selection-*` root class)
 * @param {"stacked"|"tile"} [layout="stacked"] - `stacked` lists vertically; `tile` lays out items in a row with wrap (`layout-tile` on the group)
 * @param {"control"|"center"|"corner"} [selection] - Selection affordance (root class `selection-<value>` for styling). Omit for `@type="color-swatch"` (no `selection-*` class).
 *   - **control** — default when using built-in radio/checkbox/tristate; emphasize the `.option-control` column.
 *   - **corner** — default when `@type="basic"` or a custom `<:control>` block; corner tick/check treatment via CSS.
 *   - **center** — always opt-in (`@selection="center"`); full-card selection (tint, ring, or `::after` layer). No separate Ember behavior—target `.ulx-option-segments.selection-center` in styles.
 * @param {Array<object>} [items] - List of option items. When provided, the
 *   component renders a group:
 *   - Each item can include:
 *     - {string} value
 *     - {boolean} [selected]
 *     - {boolean} [disabled]
 *     - {boolean} [compact]
 *     - {string} [title]
 *     - {string} [description]
 *     - {Array<object>} [nestedItems]
 *     - {string} [itemClass] - Extra classes for this row only (after group `@itemClass`)
 *     - {string} [optionColorCode] - Color for **color-swatch** groups (`@type="color-swatch"`); sets `--ulx-option-color-code` on the card.
 *     - {string} [colorCode] - Alias of **optionColorCode**.
 *     - {string} [id] - Unique id for the embedded control when items can reorder; otherwise ids use index (stable when toggling selection).
 * @param {boolean} [selected=false] - Single-item selected state (when `@items` is not used)
 * @param {boolean} [disabled=false] - Disable interaction when true (group-level)
 * @param {boolean} [compact=false] - Use the compact visual variant (group-level)
 * @param {string} [value] - Value passed back to `@onSelect` (single-item mode)
 * @param {Function} [onSelect] - Callback invoked on click / key activation: `(selected, value, event) => void`
 * @param {string} [title] - Primary label text when no `title` block is provided
 * @param {string} [description] - Helper text when no `description` block is provided
 * @param {string} [itemClass] - CSS class applied to every `.option-item` root (before each item's own `itemClass`)
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 * @param {string} [id] - Base id for embedded controls and title/description ids (first list item). Auto-generated if omitted.
 * @param {string} [key] - When `@id` is omitted, stable key for auto-generated ids (e.g. `@key={{field.key}}` with `UlxField`).
 * @param {string} [role] - Custom ARIA role for the root element (overrides `@type`-based role)
 * @param {string} [ariaLabel] - Accessible label for the option
 * @param {string} [ariaLabelledBy] - ID of element that labels the option
 * @param {string} [ariaDescribedBy] - ID of element that describes the option
 * @param {string} [dataQa] - Override root data-qa attribute.
 *
 * @yield {Block} default - Additional content inside `.os-content` after title/description (single or items mode)
 * @yield {Block} control - Custom control content per item, receives the current `item`
 * @yield {Block} title - Custom title content per item, receives the current `item`
 * @yield {Block} description - Custom description content per item, receives the current `item`
 * @yield {Block} nested - Custom nested content per item, receives the current `item`
 */
export default class UlxOptionSegment extends Component {
	get baseClass() {
		return getComponentClass("option-segments");
	}

	get type() {
		return this.args.type ?? "radio";
	}

	get isRadioType() {
		return this.type === "radio";
	}

	get isCheckboxType() {
		return this.type === "checkbox";
	}

	get isTristateType() {
		return this.type === "tristate";
	}

	get isBasicType() {
		return this.type === "basic";
	}

	get isColorSwatchType() {
		return this.type === "color-swatch";
	}

	get isTileLayout() {
		return this.args.layout === "tile";
	}

	/**
	 * Resolved selection mode for the root `selection-*` class.
	 * - `@type="basic"` → default **corner**
	 * - Custom `<:control>` → default **corner**
	 * - Built-in radio / checkbox / tristate → default **control**
	 * `@selection="center"` is always explicit (never auto-defaulted).
	 */
	get resolvedSelection() {
		if (this.isColorSwatchType) return null;

		const { selection, hasControlBlock } = this.args;
		if (typeof selection === "string" && isSelectionMode(selection)) return selection;

		return this.isBasicType || hasControlBlock ? "corner" : "control";
	}

	/**
	 * Group layout modifier (e.g. `.ulx-option-segments.basic`): card-style / non–column-control variants.
	 * Toggle groups use `radio-options` or `checkbox-options`.
	 */
	get groupTypeClass() {
		if (this.args.hasControlBlock || this.isBasicType) return "basic";
		if (this.isRadioType) return "radio-options";
		if (this.isCheckboxType || this.isTristateType) return "checkbox-options";
		return "basic";
	}

	get isSelected() {
		return Boolean(this.args.selected);
	}

	get isDisabled() {
		return Boolean(this.args.disabled);
	}

	get isCompact() {
		return Boolean(this.args.compact);
	}

	get hasItems() {
		return Array.isArray(this.args.items) && this.args.items.length > 0;
	}

	get segmentIdBase() {
		return buildOptionSegmentId(NAMESPACE, this.args.id, resolveKey(this, this.args.key));
	}

	/**
	 * Stable row keys for `{{#each}}` so immutable item updates do not recreate
	 * `UlxOptionSegmentItem` (avoids focus loss on the embedded input).
	 * In single-item mode, wraps the args into a single-entry array so the template
	 * needs no `{{#if hasItems}}` fork.
	 */
	get itemEntries() {
		if (this.hasItems) {
			return this.args.items.map((item, index) => ({
				item,
				index,
				rowKey: optionSegmentRowKey(item, index, this.segmentIdBase)
			}));
		}

		const singleRowKey = optionSegmentRowKey({}, 0, this.segmentIdBase);
		return [
			{
				item: {
					value: this.args.value,
					selected: this.isSelected,
					disabled: this.isDisabled,
					compact: this.isCompact,
					title: this.args.title,
					description: this.args.description
				},
				index: 0,
				rowKey: singleRowKey
			}
		];
	}

	get rootClasses() {
		const { customClass } = this.args;
		return joinClassNames(
			this.baseClass,
			this.groupTypeClass,
			this.isColorSwatchType && "color-swatch",
			this.isTileLayout && "layout-tile",
			!this.isTileLayout && "layout-stacked",
			this.resolvedSelection && `selection-${this.resolvedSelection}`,
			customClass
		);
	}

	/**
	 * Group/container role:
	 * - radiogroup for radio options
	 * - group for all other types (checkbox/basic)
	 * Can be overridden via `@role` when needed.
	 */
	get groupRole() {
		if (this.args.role) return this.args.role;
		return this.isRadioType || this.isColorSwatchType ? "radiogroup" : "group";
	}

	/**
	 * Enabled color-swatch entries in DOM order for radiogroup focus and keyboard navigation.
	 */
	get colorSwatchNavigateEntries() {
		if (!this.isColorSwatchType || this.isDisabled) return [];
		return this.itemEntries.filter((e) => !e.item.disabled);
	}

	/**
	 * Which swatch root keeps `tabindex="0"` (checked if enabled, else first enabled).
	 */
	get colorSwatchRadiogroupFocusMemberId() {
		const entries = this.colorSwatchNavigateEntries;
		if (!entries.length) return undefined;

		const selected = entries.find((e) => Boolean(e.item.selected));
		return selected ? selected.rowKey : entries[0].rowKey;
	}

	@action
	handleColorSwatchRadiogroupNavigate(intent, fromControlId, event) {
		if (!this.isColorSwatchType) return;

		const enabled = this.colorSwatchNavigateEntries;
		if (!enabled.length) return;

		const curIdx = enabled.findIndex((e) => e.rowKey === fromControlId);
		let nextIdx = 0;

		if (intent === "next") {
			nextIdx = curIdx < 0 ? 0 : (curIdx + 1) % enabled.length;
		} else if (intent === "prev") {
			nextIdx = curIdx < 0 ? enabled.length - 1 : (curIdx - 1 + enabled.length) % enabled.length;
		} else if (intent === "first") {
			nextIdx = 0;
		} else if (intent === "last") {
			nextIdx = enabled.length - 1;
		} else {
			return;
		}

		event?.preventDefault?.();

		const nextEntry = enabled[nextIdx];
		if (typeof document !== "undefined") {
			document.getElementById(nextEntry.rowKey)?.focus();
		}

		if (!nextEntry.item.selected) {
			this.handleItemSelect(true, nextEntry.item.value, event, nextEntry.item);
		}
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "option-segment");
	}

	get itemDataQaPrefix() {
		return `${this.rootDataQa}-item`;
	}

	@action
	handleItemSelect(selected, value, event, item) {
		if (typeof this.args.onSelect === "function") {
			this.args.onSelect(selected, value, event, item);
		}
	}

	<template>
		<div
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			role={{this.groupRole}}
			aria-label={{this.args.ariaLabel}}
			aria-labelledby={{this.args.ariaLabelledBy}}
			aria-describedby={{this.args.ariaDescribedBy}}
			...attributes
		>
			{{#each this.itemEntries key="rowKey" as |entry|}}
				<UlxOptionSegmentItem
					@dataQa={{this.itemDataQaPrefix}}
					@type={{this.type}}
					@itemClass={{this.args.itemClass}}
					@item={{entry.item}}
					@itemIndex={{entry.index}}
					@controlId={{entry.rowKey}}
					@segmentIdBase={{this.segmentIdBase}}
					@disabled={{this.isDisabled}}
					@compact={{this.isCompact}}
					@onSelect={{this.handleItemSelect}}
					@radiogroupFocusMemberId={{this.colorSwatchRadiogroupFocusMemberId}}
					@onColorSwatchRadiogroupNavigate={{this.handleColorSwatchRadiogroupNavigate}}
					@hasControlBlock={{has-block "control"}}
					@hasContentBlock={{has-block "content"}}
					@hasTitleBlock={{has-block "title"}}
					@hasDescriptionBlock={{has-block "description"}}
					@hasNestedBlock={{has-block "nested"}}
				>
					<:control as |currentItem|>
						{{yield currentItem to="control"}}
					</:control>

					<:content as |currentItem|>
						{{yield currentItem to="content"}}
					</:content>

					<:title as |currentItem|>
						{{yield currentItem to="title"}}
					</:title>

					<:description as |currentItem|>
						{{yield currentItem to="description"}}
					</:description>

					<:nested as |currentItem|>
						{{yield currentItem to="nested"}}
					</:nested>
				</UlxOptionSegmentItem>
			{{/each}}
		</div>
	</template>
}
