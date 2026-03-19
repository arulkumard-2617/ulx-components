import Component from "@glimmer/component";
import { action } from "@ember/object";

import { buildIconFieldClass, getInputIconClass } from "../../../utils/input-util";

import UlxIcon from "../ulx-icon/index.gjs";

/**
 * UlxIconInput (Wrapper)
 *
 * Responsibilities:
 * - Icon + input layout
 * - Icon rendering
 * - Focus styling
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
	// --------------------------
	// Icon
	// --------------------------

	get resolvedIconName() {
		return this.args.iconName ?? this.args.icon;
	}

	get hasIcon() {
		return typeof this.resolvedIconName === "string" && this.resolvedIconName.length > 0;
	}

	// --------------------------
	// Classes
	// --------------------------

	get iconInputClass() {
		const { iconPosition, size = "m-size", filled, disabled, invalid, iconFieldClass } = this.args;

		return buildIconFieldClass({
			iconPosition,
			size,
			filled,
			invalid,
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

				{{else if this.hasIcon}}
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
