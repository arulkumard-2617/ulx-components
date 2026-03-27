import Component from "@glimmer/component";
import { getComponentClass } from "../../utils/component-config";

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
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-toolbar". Used for testing and automation.
 */
export default class UlxToolbar extends Component {
	get baseClass() {
		return getComponentClass("toolbar");
	}

	get rootDataQa() {
		return this.args.dataQa ?? getComponentClass("toolbar");
	}

	get startDataQa() {
		return `${this.rootDataQa}-start`;
	}

	get centerDataQa() {
		return `${this.rootDataQa}-center`;
	}

	get endDataQa() {
		return `${this.rootDataQa}-end`;
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	<template>
		<div class={{this.rootClasses}} role="toolbar" data-qa={{this.rootDataQa}} ...attributes>
			<div class="toolbar-start" data-qa={{this.startDataQa}}>
				{{#if (has-block "start")}}
					{{yield to="start"}}
				{{/if}}
			</div>

			<div class="toolbar-center" data-qa={{this.centerDataQa}}>
				{{#if (has-block "center")}}
					{{yield to="center"}}
				{{/if}}
			</div>

			<div class="toolbar-end" data-qa={{this.endDataQa}}>
				{{#if (has-block "end")}}
					{{yield to="end"}}
				{{/if}}
			</div>
		</div>
	</template>
}

