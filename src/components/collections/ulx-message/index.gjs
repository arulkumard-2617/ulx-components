import Component from "@glimmer/component";
import { action } from "@ember/object";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

/**
 * Inline message element: single-line message with optional icon and variant styling.
 * Uses role="alert", aria-live="polite", aria-atomic="true" for accessibility.
 *
 * @class UlxMessage
 * @param {string} [text] - Message text (ignored when using default or template block).
 * @param {'info'|'success'|'warn'|'error'} [variant='info'] - Visual variant (demo: use "Variant" not "Severity").
 * @param {string} [icon] - Icon name/class; icon is shown only when this is passed.
 * @param {string} [iconSize] - Optional icon size (e.g. s18). No default; only applied when provided.
 * @param {string} [customClass] - Extra CSS classes for the root.
 * @param {string} [id] - Id for the root element.
 */
export default class UlxMessage extends Component {
	get baseClass() {
		return getComponentClass("message");
	}

	get rootClasses() {
		const { variant = "info", customClass } = this.args;
		const parts = [this.baseClass];
		variant && parts.push(`${variant}`);
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get iconClass() {
		return `${this.baseClass}-icon`;
	}

	get textClass() {
		return "message-text";
	}

	get showIcon() {
		return !!this.args.icon;
	}

	<template>
		<div
			class={{this.rootClasses}}
			role="alert"
			aria-live="polite"
			aria-atomic="true"
			...attributes
		>
			{{#if this.showIcon}}
				<span class={{this.iconClass}} aria-hidden="true">
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
					<span class={{this.textClass}}>{{@text}}</span>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
