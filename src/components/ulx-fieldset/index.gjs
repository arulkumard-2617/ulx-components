import Component from "@glimmer/component";

import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { resolveRootDataQa } from "../../utils/data-qa";

/**
 * Semantic `<fieldset>` + `<legend>` group for related controls with optional description,
 * content wrapper, and optional actions slot. Form-level sizing belongs on `UlxForm` (`@size`), not here.
 *
 * Subregions: `field-legend`, `field-description`, `fieldset-wrapper`, `fieldset-actions`.
 * Pass `aria-*`, `name`, `disabled`, etc. via `...attributes` on the fieldset.
 *
 * ## Content wrapper
 * The wrapper (`fieldset-wrapper`) does not apply a built-in layout. Pass layout utilities on
 * `@customClass` (e.g. `ulx-grid col-2 gap-6`, or `flex flex-col gap-4`). Root `<fieldset>` classes go
 * via `class` / `...attributes` on the component.
 *
 * @class UlxFieldSet
 * @param {string} [legend] - Legend text (or use the `legend` block).
 * @param {string} [description] - Optional description (or use the `description` block).
 * @param {boolean} [disabled] - Disables all nested controls.
 * @param {string} [customClass] - Extra classes on the fieldset **content wrapper** (layout utilities such as `ulx-grid`, `flex`, `gap-*`, `col-*`).
 * @param {string} [actionsClass] - Extra classes on the fieldset actions region.
 * @param {string} [dataQa] - Optional root `data-qa` (default `ulx-fieldset`).
 * @block default - Fields and controls (inside the wrapper region). With any other named block (`legend`, `description`, `actions`), use `<:default>` explicitly for this content.
 * @block legend - Custom legend content (use `@legend` or this block).
 * @block description - Custom description (use `@description` or this block).
 * @block actions - Optional secondary actions for this group.
 */
export default class UlxFieldSet extends Component {
	get baseClass() {
		return getComponentClass("fieldset");
	}

	get rootClasses() {
		return this.baseClass;
	}

	get wrapperClasses() {
		const { customClass } = this.args;

		const parts = ["fieldset-wrapper"];
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	get actionsClasses() {
		const { actionsClass } = this.args;
		const parts = ["fieldset-actions"];
		actionsClass && parts.push(actionsClass);

		return joinClassNames(...parts);
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "fieldset");
	}

	<template>
		<fieldset
			class={{this.rootClasses}}
			disabled={{@disabled}}
			data-qa={{this.rootDataQa}}
			...attributes
		>
			{{#if (has-block "legend")}}
				<legend class="field-legend">
					{{yield to="legend"}}
				</legend>
			{{else if @legend}}
				<legend class="field-legend">
					{{@legend}}
				</legend>
			{{/if}}

			{{#if (has-block "description")}}
				<div class="field-description">
					{{yield to="description"}}
				</div>
			{{else if @description}}
				<div class="field-description">
					{{@description}}
				</div>
			{{/if}}

			<div class={{this.wrapperClasses}}>
				{{yield}}
			</div>

			{{#if (has-block "actions")}}
				<div class={{this.actionsClasses}}>
					{{yield to="actions"}}
				</div>
			{{/if}}
		</fieldset>
	</template>
}
