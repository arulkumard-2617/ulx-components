import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Toolbar layout container with start, center, and end slots.
 *
 * Content is provided via named blocks:
 * - <:start>   - Left-aligned content (e.g. primary actions).
 * - <:center>  - Center content (e.g. title or filters).
 * - <:end>     - Right-aligned content (e.g. secondary actions).
 *
 * Uses existing ULX toolbar classes from collections/toolbar.less.
 *
 * @class UlxToolbar
 * @param {string} [customClass] - Additional CSS classes for the root element.
 */
export default class UlxToolbar extends Component {
	get baseClass() {
		return getComponentClass("toolbar");
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	<template>
		<div class={{this.rootClasses}} role="toolbar" ...attributes>
			<div class="toolbar-start">
				{{#if (has-block "start")}}
					{{yield to="start"}}
				{{/if}}
			</div>

			<div class="toolbar-center">
				{{#if (has-block "center")}}
					{{yield to="center"}}
				{{/if}}
			</div>

			<div class="toolbar-end">
				{{#if (has-block "end")}}
					{{yield to="end"}}
				{{/if}}
			</div>
		</div>
	</template>
}

