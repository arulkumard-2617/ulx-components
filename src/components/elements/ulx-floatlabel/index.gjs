import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { hash } from "@ember/helper";

import { getComponentClass } from "../../../utils/component-config";

export default class UlxFloatLabel extends Component {
	@tracked isFocused = false;

	// ---------- Computed State ----------

	get baseClass() {
		return this.args.componentClass ?? getComponentClass("floatlabel");
	}

	get hasValue() {
		const value = this.args.value;
		return value !== undefined && value !== null && value !== "";
	}

	get isActive() {
		return this.isFocused || this.hasValue;
	}

	get rootClasses() {
		return [
			this.baseClass,
			this.args.size || "m-size",
			this.isActive && "active",
			this.args.disabled && "disabled",
			this.args.invalid && "invalid",
			this.args.customClass
		]
			.filter(Boolean)
			.join(" ");
	}

	// ---------- Actions ----------

	@action handleFocus(event) {
		this.isFocused = true;
		this.args.onFocus?.(event);
	}

	@action handleBlur(event) {
		this.isFocused = false;
		this.args.onBlur?.(event);
	}

	<template>
		<div class={{this.rootClasses}}>

			{{! Control Slot }}
			{{yield (hash onFocus=this.handleFocus onBlur=this.handleBlur)}}

			{{! Label }}
			<label class="floatlabel-label">
				{{#if (has-block "label")}}
					{{yield to="label"}}
				{{else}}
					{{@label}}
				{{/if}}

				{{#if @required}}
					<span class="required">*</span>
				{{/if}}
			</label>

		</div>
	</template>
}
