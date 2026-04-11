import Component from "@glimmer/component";
import { fn } from "@ember/helper";
import { eq } from "ember-truth-helpers";
import UlxButton from "../ulx-button/index.gjs";
import { t } from "../../utils/i18n";

/**
 * Default page number buttons for UlxPaginator.
 *
 * @param {number[]} pageLinks
 * @param {number} currentPageOneBased
 * @param {string} rootDataQa
 * @param {Function} goToPageNumber
 */
export default class PaginatorDefaultPageLinks extends Component {
	get pageLinks() {
		return this.args.pageLinks;
	}

	get currentPageOneBased() {
		return this.args.currentPageOneBased;
	}

	get rootDataQa() {
		return this.args.rootDataQa;
	}

	get goToPageNumber() {
		return this.args.goToPageNumber;
	}

	<template>
		<span
			class="paginator-page-links"
			role="group"
			aria-label={{t "aria.paginator.pageLabel" page=this.currentPageOneBased}}
			data-qa="{{this.rootDataQa}}-page-links"
		>
			{{#each this.pageLinks as |pageNum|}}
				<UlxButton
					@variant="basic"
					@label={{pageNum}}
					@customClass="paginator-page-button {{if (eq pageNum this.currentPageOneBased) 'active'}}"
					@onClick={{fn this.goToPageNumber pageNum}}
					aria-label={{t "aria.paginator.pageLabel" page=pageNum}}
					aria-current={{if (eq pageNum this.currentPageOneBased) "page"}}
				/>
			{{/each}}
		</span>
	</template>
}
