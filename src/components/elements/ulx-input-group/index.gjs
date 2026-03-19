import Component from "@glimmer/component";

import { buildInputGroupClass } from "../../../utils/input-util";

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
 * - <:start>   → left addon (icon, text, etc.)
 * - <:input>   → required input/control
 * - <:end>     → right addon (button, icon, etc.)
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

	<template>
		<div class={{this.rootClass}}>

			{{! START }}
			{{#if (has-block "start")}}
				{{yield to="start"}}
			{{/if}}

			{{! INPUT (required) }}
			{{#if (has-block "input")}}
				{{yield to="input"}}
			{{/if}}

			{{! END }}
			{{#if (has-block "end")}}
				{{yield to="end"}}
			{{/if}}

		</div>
	</template>
}
