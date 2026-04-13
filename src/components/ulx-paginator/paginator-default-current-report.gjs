import Component from "@glimmer/component";

/**
 * Default current page report text for UlxPaginator.
 *
 * @param {string} text
 * @param {string} rootDataQa
 */
export default class PaginatorDefaultCurrentReport extends Component {
	get text() {
		return this.args.text;
	}

	get rootDataQa() {
		return this.args.rootDataQa;
	}

	<template>
		<span class="paginator-current-report" aria-live="polite" data-qa="{{this.rootDataQa}}-current-report">{{this.text}}</span>
	</template>
}
