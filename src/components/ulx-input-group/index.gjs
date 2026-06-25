import Component from "@glimmer/component";

import { buildInputGroupClass } from "../../utils/input-util";

/**
 * UlxInputGroup
 *
 * Layout wrapper for grouping controls (input + addons).
 *
 * Responsibilities:
 * - Layout (start + input + end)
 * - Styling (size, filled, disabled, invalid)
 * - Accessible disabled / invalid state on the group (`inert`, `aria-disabled`, `aria-invalid`)
 *
 * DOES NOT handle:
 * - Input logic
 * - Validation messages
 * - Label / HelpText / Error
 *
 * Named blocks:
 * - <:start>   → left addon, rendered inside `<span class="inputgroup-addon">`
 * - <:input>   → input/control; yields `{ disabled, invalid }` for wiring child controls
 * - <:end>     → right addon, rendered inside `<span class="inputgroup-addon">`
 *
 * **`<:input as |group|>`:** Pass `@disabled={{group.disabled}}` and `@invalid={{group.invalid}}` on
 * slotted controls so native disabled / `aria-invalid` stay in sync with the group (required for form
 * submission and screen reader announcements). `@disabled` on the group also sets `inert` so keyboard
 * focus cannot enter the group when disabled.
 *
 * **Decorative addons:** Hide purely visual prefix/suffix text from assistive tech with `aria-hidden="true"`
 * when the input already has an accessible name.
 *
 * Optional `@startAddonClass` / `@endAddonClass` merge modifier classes (e.g. `text-addon`, `icon-addon`,
 * `button-addon`) onto the addon span. When omitted, the span also uses the `contents` utility so several
 * sibling addons in one slot participate in the input group flex row like direct children.
 *
 * Addon spans are omitted when `<:start>` or `<:end>` is not passed, so no empty wrapper nodes are rendered.
 *
 * @param {boolean} [disabled=false] - Disables interaction for the whole group (`inert`, `aria-disabled`) and
 *   yields `disabled` on the `<:input>` block.
 * @param {boolean} [invalid=false] - Marks the group invalid (`aria-invalid`) and yields `invalid` on the
 *   `<:input>` block.
 */

export default class UlxInputGroup extends Component {
	get rootClass() {
		const { size = "m-size", filled, disabled, invalid, customClass } = this.args;

		return buildInputGroupClass({
			size,
			filled,
			invalid,
			disabled,
			customClass
		});
	}

	get isDisabled() {
		return Boolean(this.args.disabled);
	}

	get isInvalid() {
		return Boolean(this.args.invalid);
	}

	get controlYieldHash() {
		return {
			disabled: this.isDisabled,
			invalid: this.isInvalid
		};
	}

	get startAddonSpanClass() {
		const { startAddonClass } = this.args;
		const parts = ["inputgroup-addon"];
		startAddonClass && parts.push(startAddonClass);
		startAddonClass || parts.push("contents");

		return parts.join(" ");
	}

	get endAddonSpanClass() {
		const { endAddonClass } = this.args;
		const parts = ["inputgroup-addon"];
		endAddonClass && parts.push(endAddonClass);
		endAddonClass || parts.push("contents");

		return parts.join(" ");
	}

	<template>
		<div
			class={{this.rootClass}}
			...attributes
			aria-disabled={{if this.isDisabled "true"}}
			aria-invalid={{if this.isInvalid "true"}}
			inert={{this.isDisabled}}
		>

			{{#if (has-block "start")}}
				<span class={{this.startAddonSpanClass}}>
					{{yield to="start"}}
				</span>
			{{/if}}

			{{yield this.controlYieldHash to="input"}}

			{{#if (has-block "end")}}
				<span class={{this.endAddonSpanClass}}>
					{{yield to="end"}}
				</span>
			{{/if}}

		</div>
	</template>
}
