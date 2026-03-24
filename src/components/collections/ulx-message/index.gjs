import Component from "@glimmer/component";
import { action } from "@ember/object";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../../utils/data-qa";
import { t } from "../../../utils/i18n";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

const ENTER_DONE_CLASS = "enter-done";

/**
 * Inline message element: single-line message with optional icon and variant styling.
 * Uses role="alert", aria-live="polite", aria-atomic="true" for accessibility.
 *
 * @class UlxMessage
 * @param {string} [text] - Message text (ignored when using default or template block).
 * @param {'info'|'success'|'warn'|'error'} [variant='info'] - Visual variant (demo: use "Variant" not "Severity").
 * @param {string} [icon] - Icon name/class; icon is shown only when this is passed.
 * @param {string} [iconSize] - Optional icon size (e.g. s18). No default; only applied when provided.
 * @param {string} [size="m-size"] - Size class (e.g. xs-size, s-size, m-size, l-size, xl-size).
 * @param {string} [customClass] - Extra CSS classes for the root.
 * @param {string} [id] - Id for the root element.
 * @param {string} [dataQa] - Override root data-qa attribute.
 */
export default class UlxMessage extends Component {
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
		const parts = [this.baseClass];
		variant && parts.push(`${variant}`);
		size && parts.push(size);
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

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "message");
	}

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
