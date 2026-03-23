import Component from "@glimmer/component";

import { buildIconFieldClass, getInputIconClass } from "../../../utils/input-util";

import UlxIcon from "../ulx-icon/index.gjs";

/**
 * UlxIconInput (Wrapper)
 *
 * Icon placement: pass exactly one of `@iconLeft` or `@iconRight`. Use a string icon name for
 * the default `UlxIcon`, or `true` when providing a custom icon via the `<:icon>` block.
 *
 * @class UlxIconInput
 * @param {string|boolean} [iconLeft] - Font/symbol icon name on the left, or `true` with `<:icon>`.
 * @param {string|boolean} [iconRight] - Font/symbol icon name on the right, or `true` with `<:icon>`.
 * @param {string} [iconType] - Passed to `UlxIcon` when using a string `iconLeft` / `iconRight`.
 * @param {string} [iconSize] - Passed to `UlxIcon`.
 * @param {string} [iconClass] - Extra classes on `UlxIcon` (`@customClass`).
 * @param {string} [iconAriaLabel] - Meaningful name for the preset icon; sets wrapper visibility for AT.
 * @param {string} [size] - Icon field size class (default `m-size`).
 * @param {boolean} [disabled] - Adds `disabled` on the icon-field root; mirror the inner control.
 * @param {string} [iconFieldClass] - Extra classes on the icon-field root.
 *
 * Invalid / filled appearance comes from the slotted control (e.g. `UlxInput` with `@field` or `@error`), not from this wrapper.
 *
 * `@disabled` is kept on the wrapper so the icon-field root can get the `disabled` class for shell styling; pass the same value as on the inner control (see `UlxPassword`).
 *
 * DOES NOT handle:
 * - Input logic
 * - Label / HelpText / Error
 *
 * Use with:
 * - UlxInput (recommended)
 * - UlxTextarea (future)
 */
export default class UlxIconInput extends Component {
	get iconPosition() {
		const { iconLeft, iconRight } = this.args;
		const rightActive =
			iconRight === true || (typeof iconRight === "string" && iconRight.length > 0);
		const leftActive = iconLeft === true || (typeof iconLeft === "string" && iconLeft.length > 0);

		if (rightActive) return "right";
		if (leftActive) return "left";
		return "left";
	}

	get resolvedIconName() {
		const { iconLeft, iconRight } = this.args;
		if (typeof iconRight === "string" && iconRight.length > 0) return iconRight;
		if (typeof iconLeft === "string" && iconLeft.length > 0) return iconLeft;
		return undefined;
	}

	get hasPresetIcon() {
		const n = this.resolvedIconName;
		return typeof n === "string" && n.length > 0;
	}

	get iconInputClass() {
		const { size = "m-size", disabled, iconFieldClass } = this.args;

		return buildIconFieldClass({
			iconPosition: this.iconPosition,
			size,
			disabled,
			iconFieldClass
		});
	}

	get inputIconClass() {
		return getInputIconClass();
	}

	<template>
		<div class={{this.iconInputClass}}>

			{{! Icon }}
			<span class={{this.inputIconClass}} aria-hidden={{if @iconAriaLabel "false" "true"}}>
				{{#if (has-block "icon")}}
					{{yield to="icon"}}

				{{else if this.hasPresetIcon}}
					<UlxIcon
						@iconName={{this.resolvedIconName}}
						@type={{@iconType}}
						@ariaLabel={{@iconAriaLabel}}
						@size={{@iconSize}}
						@customClass={{@iconClass}}
					/>
				{{/if}}
			</span>

			{{! Control (Input goes here) }}
			{{#if (has-block "input")}}
				{{yield to="input"}}
			{{else}}
				{{yield}}
			{{/if}}

		</div>
	</template>
}
