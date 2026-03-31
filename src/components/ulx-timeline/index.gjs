import Component from "@glimmer/component";
import { getComponentClass } from "../../utils/component-config";

/**
 * Timeline visualizes a series of chained events.
 * Markup/classes match `ULS_V2.0/src/styles/uls-styles/less/collections/timeline.less`.
 *
 * @class UlxTimeline
 * @param {Array<any>} [items=[]] - Events array (preferred ULX arg). If not provided, falls back to `value`.
 * @param {Array<any>} [value=[]] - Events array (PrimeReact parity).
 * @param {"vertical"|"horizontal"} [layout="vertical"] - Timeline orientation.
 * @param {"left"|"right"|"top"|"bottom"|"alternate"} [align] - Alignment (default depends on layout).
 * @param {string} [dataKey] - Field name (supports dot paths) that uniquely identifies an item for stable rendering.
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [dataQa] - Override root data-qa attribute.
 *
 * @block opposite - Optional. Yields (item, index, meta) where meta: { first, last, layout, align }.
 * @block marker - Optional. Yields (item, index, meta) where meta: { first, last, layout, align }.
 * @block content - Optional. Yields (item, index, meta) where meta: { first, last, layout, align }.
 */
export default class UlxTimeline extends Component {
	get baseClass() {
		return getComponentClass("timeline");
	}

	get items() {
		const { items, value } = this.args;
		return items ?? value ?? [];
	}

	get layout() {
		const { layout = "vertical" } = this.args;
		return layout === "horizontal" ? "horizontal" : "vertical";
	}

	get align() {
		const { align } = this.args;
		if (align) return align;
		return this.layout === "horizontal" ? "top" : "left";
	}

	get rootClasses() {
		const { customClass } = this.args;

		const parts = [this.baseClass];
		parts.push(this.layout === "horizontal" ? "layout-horizontal" : "layout-vertical");

		if (this.layout === "vertical") {
			this.align === "right" && parts.push("align-right");
			this.align === "alternate" && parts.push("align-alternate");
		} else {
			this.align === "top" && parts.push("align-top");
			this.align === "bottom" && parts.push("align-bottom");
			this.align === "alternate" && parts.push("align-alternate");
		}

		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	resolveFieldData(item, path) {
		if (!item || !path) return undefined;
		if (!path.includes(".")) return item?.[path];

		return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), item);
	}

	get keyedModel() {
		const { dataKey } = this.args;
		const items = Array.isArray(this.items) ? this.items : [];
		const lastIndex = items.length - 1;

		return items.map((item, index) => {
			const key = dataKey ? this.resolveFieldData(item, dataKey) : undefined;
			const isHorizontal = this.layout === "horizontal";
			const meta = {
				first: index === 0,
				last: index === lastIndex,
				isHorizontal,
				isVertical: !isHorizontal,
				layout: this.layout,
				align: this.align
			};

			return { key: key ?? index, item, index, meta };
		});
	}

	get hasAnyOpposite() {
		const items = Array.isArray(this.items) ? this.items : [];
		return items.some((item) => Boolean(item?.opposite));
	}

	get shouldRenderOppositeColumn() {
		return this.align === "alternate" || this.hasAnyOpposite;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-timeline";
	}

	get itemDataQa() {
		return `${this.rootDataQa}-item`;
	}

	get separatorDataQa() {
		return `${this.rootDataQa}-separator`;
	}

	get contentDataQa() {
		return `${this.rootDataQa}-content`;
	}

	<template>
		<ol class={{this.rootClasses}} data-qa={{this.rootDataQa}} ...attributes>
			{{#each this.keyedModel key="key" as |row|}}
				<li
					class="timeline-event"
					data-qa={{this.itemDataQa}}
					data-index={{row.index}}
					data-state={{row.item.state}}
				>
					{{#if (has-block "opposite")}}
						<div class="timeline-opposite">
							{{yield row.item row.index row.meta to="opposite"}}
						</div>
					{{else}}
						{{#if this.shouldRenderOppositeColumn}}
							<div class="timeline-opposite">
								{{row.item.opposite}}
							</div>
						{{/if}}
					{{/if}}

					<div class="timeline-separator" data-qa={{this.separatorDataQa}}>
						{{#if row.meta.isHorizontal}}
							<div
								class="timeline-connector"
								data-part="start"
								data-placeholder={{if row.meta.first "true" "false"}}
								aria-hidden="true"
							></div>

							<div class="timeline-marker" aria-hidden="true">
								{{#if (has-block "marker")}}
									{{yield row.item row.index row.meta to="marker"}}
								{{/if}}
							</div>

							<div
								class="timeline-connector"
								data-part="end"
								data-placeholder={{if row.meta.last "true" "false"}}
								aria-hidden="true"
							></div>
						{{else}}
							<div class="timeline-marker" aria-hidden="true">
								{{#if (has-block "marker")}}
									{{yield row.item row.index row.meta to="marker"}}
								{{/if}}
							</div>

							{{#unless row.meta.last}}
								<div class="timeline-connector" aria-hidden="true"></div>
							{{/unless}}
						{{/if}}
					</div>

					<div class="timeline-content" data-qa={{this.contentDataQa}}>
						{{#if (has-block "content")}}
							{{yield row.item row.index row.meta to="content"}}
						{{else}}
							{{row.item.content}}
						{{/if}}
					</div>
				</li>
			{{/each}}
		</ol>
	</template>
}
