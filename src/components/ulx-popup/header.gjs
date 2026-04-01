import Component from "@glimmer/component";

/**
 * Popup header subcomponent for default header when no <:head> block is passed.
 * Displays title only. Close button is rendered by UlxPopup when @closable is true.
 *
 * @class UlxPopupHeader
 * @param {string} [title] - Header title text
 * @param {string} [titleId] - DOM id for the title element (e.g. from parent for `aria-labelledby` on the dialog)
 */
export default class UlxPopupHeader extends Component {
	<template>
		{{#if (has-block)}}
			{{yield}}
		{{else}}
			<h6 class="popup-title" id={{@titleId}}>{{@title}}</h6>
		{{/if}}
	</template>
}
