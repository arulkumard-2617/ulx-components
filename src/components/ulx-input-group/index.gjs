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
 *
 * DOES NOT handle:
 * - Input logic
 * - Validation
 * - Label / HelpText / Error
 *
 * Named blocks:
 * - <:start>   → left addon, rendered inside `<span class="inputgroup-addon">`
 * - <:input>   → input/control (no wrapper)
 * - <:end>     → right addon, rendered inside `<span class="inputgroup-addon">`
 *
 * Optional `@startAddonClass` / `@endAddonClass` merge modifier classes (e.g. `text-addon`, `icon-addon`,
 * `button-addon`) onto the addon span. When omitted, the span also uses the `contents` utility so several
 * sibling addons in one slot participate in the input group flex row like direct children.
 *
 * Addon spans are omitted when `<:start>` or `<:end>` is not passed, so no empty wrapper nodes are rendered.
 */

export default class UlxInputGroup extends Component {
	get rootClass() {
		const { size = "m-size", filled, disabled, invalid } = this.args;

		return buildInputGroupClass({
			size,
			filled,
			invalid,
			disabled
		});
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
		<div class={{this.rootClass}}>

			{{#if (has-block "start")}}
				<span class={{this.startAddonSpanClass}}>
					{{yield to="start"}}
				</span>
			{{/if}}

			{{yield to="input"}}

			{{#if (has-block "end")}}
				<span class={{this.endAddonSpanClass}}>
					{{yield to="end"}}
				</span>
			{{/if}}

		</div>
	</template>
}
