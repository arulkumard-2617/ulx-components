import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";

import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { resolveRootDataQa } from "../../utils/data-qa";

/** Size tokens that add a class on the root (`s-size` is the default in CSS and is not emitted). */
const FORM_SIZE_CLASSES = new Set(["m-size", "l-size", "xl-size"]);

/**
 * Semantic `<form>` container with ULX layout classes, optional action region, and form-level events.
 * Pass `aria-*`, `novalidate`, `method`, `action`, etc. via `...attributes`.
 *
 * ## Structure
 * - Default block: main content (fieldsets, fields, sections). With `<:actions>`, use `<:default>` for main content.
 * - `<:actions>`: optional footer row (e.g. submit / reset buttons).
 *
 * ## Events
 * - `@onSubmit` — when provided, `submit` is `preventDefault`’d and this callback receives the native event.
 * - `@onReset` — optional; invoked on `reset` (native reset still runs unless the handler calls `preventDefault`).
 *
 * ## WCAG
 * - Uses `<form>`; name the form with `aria-label`, `aria-labelledby`, or a visible heading associated via `aria-describedby` as needed.
 *
 * @class UlxForm
 * @param {(event: SubmitEvent) => void} [onSubmit] - Submit handler; prevents default navigation when set.
 * @param {(event: Event) => void} [onReset] - Reset handler.
 * @param {'m-size'|'l-size'|'xl-size'} [size] - Size variant (default s-size has no class).
 * @param {string} [customClass] - Extra CSS classes on the form root. Avoid `ulx-grid` here; use `UlxFieldSet` `@customClass` on the fieldset content wrapper (e.g. `ulx-grid`, `flex flex-col`) for field groups.
 * @param {string} [actionsClass] - Extra classes on the actions wrapper (base `ulx-form-actions`).
 * @param {string} [dataQa] - Optional root `data-qa` (default `ulx-form`).
 * @block default - Primary form content.
 * @block actions - Optional actions row (buttons).
 */
export default class UlxForm extends Component {
	get baseClass() {
		return getComponentClass("form");
	}

	/** Optional size from `FORM_SIZE_CLASSES`, then `customClass` (spacing/stack utilities only; field group layout belongs on `UlxFieldSet` `@customClass`). */
	get rootClasses() {
		const { size, customClass } = this.args;

		const parts = [this.baseClass];
		size && FORM_SIZE_CLASSES.has(size) && parts.push(size);
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	get actionsClasses() {
		const { actionsClass } = this.args;
		const parts = [`${this.baseClass}-actions`];
		actionsClass && parts.push(actionsClass);

		return joinClassNames(...parts);
	}

	/** Default root `data-qa` is `ulx-form`; optional `@dataQa` replaces it. */
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "form");
	}

	@action
	handleSubmit(event) {
		const { onSubmit } = this.args;
		if (onSubmit) {
			event.preventDefault();
			onSubmit(event);
		}
	}

	@action
	handleReset(event) {
		this.args.onReset?.(event);
	}

	<template>
		<form
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			{{on "submit" this.handleSubmit}}
			{{on "reset" this.handleReset}}
			...attributes
		>
			{{yield}}

			{{#if (has-block "actions")}}
				<div class={{this.actionsClasses}}>
					{{yield to="actions"}}
				</div>
			{{/if}}
		</form>
	</template>
}
