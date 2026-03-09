import Component from "@glimmer/component";

/**
 * Modal body subcomponent.
 * Contains the main content area with optional scrolling.
 * Can be customized using the :body named block on UlxModal.
 *
 * ## Usage
 * ```gjs
 * <UlxModalBody @scrollable={{true}}>
 *   <p>Modal content goes here</p>
 * </UlxModalBody>
 * ```
 *
 * @class UlxModalBody
 * @param {boolean} [scrollable=true] - Enable vertical scrolling when content overflows
 * @param {string} [contentClassName] - Extra class for the content root (applied next to dialog-content)
 */
export default class UlxModalBody extends Component {
	get scrollable() {
		return this.args.scrollable ?? true;
	}

	get contentClasses() {
		const parts = ["dialog-content"];
		this.args.contentClassName && parts.push(this.args.contentClassName);
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
		<div class={{this.contentClasses}} style={{this.contentStyle}} ...attributes>
			{{yield}}
		</div>
	</template>
}
