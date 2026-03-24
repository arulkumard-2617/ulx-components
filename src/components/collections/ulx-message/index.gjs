import Component from "@glimmer/component";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import { joinClassNames } from "../../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../../utils/data-qa";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

const ENTER_DONE_CLASS = "enter-done";

/**
 * Inline message with optional icon and variant styling.
 * Live region: `role="alert"`, `aria-live="polite"`, `aria-atomic="true"`.
 *
 * @class UlxMessage
 * @param {string} [text] - Shown when no block is passed; ignored when a block is provided.
 * @param {'info'|'success'|'warn'|'error'} [variant='info'] - Visual variant (demos: "Variant", not "Severity").
 * @param {string} [icon] - Renders `UlxIcon` when set; icon wrapper is `aria-hidden`.
 * @param {string} [iconSize] - Passed to `UlxIcon` when `icon` is set.
 * @param {string} [size="m-size"] - Size token (e.g. xs-size … xl-size).
 * @param {string} [customClass] - Extra classes on the root.
 * @param {string} [id] - Root id (via `...attributes`).
 * @param {string} [dataQa] - Root `data-qa` override (default `ulx-message`).
 */
export default class UlxMessage extends Component {
	/** Next frame: adds `enter-done` so theme LESS can match `.ulx-message[role="alert"].enter-done`. */
	addEnterDoneAfterRender = modifier((element) => {
		const rafId = requestAnimationFrame(() => {
			element.classList.add(ENTER_DONE_CLASS);
		});
		return () => cancelAnimationFrame(rafId);
	});

	get baseClass() {
		return getComponentClass("message");
	}

	get rootClasses() {
		const { variant = "info", size = "m-size", customClass } = this.args;
		return joinClassNames(this.baseClass, variant, size, customClass);
	}

	get iconClass() {
		return `${this.baseClass}-icon`;
	}

	/** Must stay `message-text` to match theme `.ulx-message .message-text` selectors. */
	get textClass() {
		return "message-text";
	}

	get showIcon() {
		return !!this.args.icon;
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "message");
	}

	/** `data-qa` suffix for internal parts (`icon`, `text`). */
	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	<template>
		<div
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			role="alert"
			aria-live="polite"
			aria-atomic="true"
			{{this.addEnterDoneAfterRender}}
			...attributes
		>
			{{#if this.showIcon}}
				<span class={{this.iconClass}} data-qa={{this.getDataQa "icon"}} aria-hidden="true">
					<UlxIcon
						@componentClass="bs-icons1"
						@type="font"
						@iconName={{@icon}}
						@size={{@iconSize}}
					/>
				</span>
			{{/if}}
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				{{#if @text}}
					<span class={{this.textClass}} data-qa={{this.getDataQa "text"}}>{{@text}}</span>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
