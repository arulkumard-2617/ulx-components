import Component from "@glimmer/component";

/**
 * Popup header subcomponent for default header when no <:head> block is passed.
 * Displays title only. Close button is rendered by UlxPopup when @closable is true.
 *
 * @class UlxPopupHeader
 * @param {string} [title] - Header title text
 */
export default class UlxPopupHeader extends Component {
	<template>
		{{#if (has-block)}}
			{{yield}}
		{{else}}
			<h6 class="popup-title" id="popup-title">{{@title}}</h6>
		{{/if}}
	</template>
}
