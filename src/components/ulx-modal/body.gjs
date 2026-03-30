import Component from "@glimmer/component";
import { joinClassNames } from "../../utils/class-names";

const CONTENT_OVERFLOW_STYLE = {
	true: "overflow-y: auto",
	false: "overflow-y: hidden"
};

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
		return joinClassNames("dialog-content", this.args.contentClassName);
	}

	get contentStyle() {
		return CONTENT_OVERFLOW_STYLE[this.scrollable];
	}

	<template>
		<div class={{this.contentClasses}} data-qa="ulx-modal-body" style={{this.contentStyle}} ...attributes>
			{{yield}}
		</div>
	</template>
}
