import Component from "@glimmer/component";

/**
 * Slide pane body subcomponent.
 * Contains the main content area with optional scrolling.
 * Can be customized using the :body named block on UlxSlidePane.
 *
 * @class UlxSlidePaneBody
 * @param {boolean} [scrollable=true] - Enable vertical scrolling when content overflows
 * @param {boolean} [noPadding=false] - Remove default padding from content area
 * @param {string} [contentClassName] - Extra class for the content root (applied next to slidepane-content)
 */
export default class UlxSlidePaneBody extends Component {
	get scrollable() {
		return this.args.scrollable ?? true;
	}

	get noPadding() {
		return this.args.noPadding ?? false;
	}

	get contentClasses() {
		const { contentClassName } = this.args;
		const parts = ["slidepane-content"];
		this.noPadding && parts.push("no-padding");
		contentClassName && parts.push(contentClassName);
		return parts.filter(Boolean).join(" ");
	}

	get contentStyle() {
		const styles = [];
		if (this.scrollable) {
			styles.push("overflow-y: auto");
		} else {
			styles.push("overflow-y: hidden");
		}
		return styles.join("; ");
	}

	<template>
		<div
			class={{this.contentClasses}}
			style={{this.contentStyle}}
			...attributes
		>
			{{yield}}
		</div>
	</template>
}
