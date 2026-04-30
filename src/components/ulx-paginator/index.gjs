import Component from "@glimmer/component";
import { action } from "@ember/object";
import and from "ember-truth-helpers/helpers/and";
import { eq } from "ember-truth-helpers";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { t } from "../../utils/i18n";
import PaginatorDefaultCurrentReport from "./paginator-default-current-report.gjs";
import PaginatorDefaultNavButton from "./paginator-default-nav-button.gjs";
import PaginatorDefaultPageLinks from "./paginator-default-page-links.gjs";
import PaginatorDefaultRowsPerPage from "./paginator-default-rows-per-page.gjs";
import {
	DEFAULT_PAGE_REPORT,
	DEFAULT_TEMPLATE,
	TEMPLATE_KEY,
	computePageLinkBoundaries,
	computePageFromFirst,
	computeTotalPages,
	interpolatePageReport,
	mapRowsPerPageOptions,
	pageLinksFromBoundaries,
	parseTemplateKeys
} from "./utils.js";

const DEFAULT_ROWS = 10;
const DEFAULT_ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

/**
 * Paginator component for paged content. Aligns with ULS paginator.less.
 * Uses UlxButton for first/prev/next/last and page number buttons; UlxDropdown for rows per page.
 *
 * @class UlxPaginator
 * @param {number} [totalRecords=0] - Total number of records
 * @param {number} [rows=10] - Rows per page
 * @param {number} [first=0] - Zero-based index of first row to display
 * @param {number} [pageLinkSize=5] - Number of page links to show
 * @param {number[]} [rowsPerPageOptions=[10, 25, 50, 100]] - Options for rows-per-page dropdown
 * @param {boolean} [alwaysShow=true] - Show paginator even when only one page
 * @param {string} [template] - Layout string, e.g. "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
 * @param {string} [currentPageReportTemplate] - Report template; placeholders: {currentPage}, {totalPages}, {first}, {last}, {rows}, {totalRecords}
 * @param {Function} [onPageChange] - Callback (event) => void; event: { first, rows, page, totalPages }
 * @param {string} [firstPageLinkIcon] - Icon name for first page button
 * @param {string} [prevPageLinkIcon] - Icon name for previous page button
 * @param {string} [nextPageLinkIcon] - Icon name for next page button
 * @param {string} [lastPageLinkIcon] - Icon name for last page button
 * @param {string} [customClass] - Extra CSS class for root
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-paginator".
 * @param {boolean} [showRecordsPerPageLabel=true] - When true, show text before the rows-per-page dropdown.
 * @param {boolean} [hasLeft] - When true together with <:left>, render the left slot.
 * @param {boolean} [hasRight] - When true together with <:right>, render the right slot.
 * @param {boolean} [showFirstLastNav=false] - When true, renders the first and last page navigation buttons.
 *
 * Named blocks (lowercase) override default UI when provided:
 * - <:firstPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:prevPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:nextPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:lastPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:pageLinks> - yields { pageLinks, currentPage, totalPages, goToPageNumber }
 * - <:currentPageReport> - yields { text, first, last, totalRecords, currentPage, totalPages }
 * - <:rowsPerPageDropdown> - yields { value, options, onChange, disabled }
 * - <:left> - content before paginator controls (shown only when @hasLeft is true and <:left> is provided)
 * - <:right> - content after paginator controls (shown only when @hasRight is true and <:right> is provided)
 */
export default class UlxPaginator extends Component {
	templateKey = TEMPLATE_KEY;

	get baseClass() {
		return getComponentClass("paginator");
	}

	get rootClasses() {
		const { customClass } = this.args;
		return joinClassNames(this.baseClass, customClass);
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-paginator";
	}

	get totalRecords() {
		return this.args.totalRecords ?? 0;
	}

	get rows() {
		const { rows, rowsPerPageOptions } = this.args;
		if (rows !== undefined && rows !== null) {
			return rows;
		}
		return rowsPerPageOptions?.[0] ?? DEFAULT_ROWS;
	}

	get first() {
		return this.args.first ?? 0;
	}

	get pageLinkSize() {
		return this.args.pageLinkSize ?? 5;
	}

	get page() {
		const { rows, first } = this;
		return computePageFromFirst(rows, first);
	}

	get totalPages() {
		const { totalRecords, rows } = this;
		return computeTotalPages(totalRecords, rows);
	}

	get isFirstPage() {
		return this.page === 0;
	}

	get isLastPage() {
		return this.totalPages === 0 || this.page === this.totalPages - 1;
	}

	get isEmpty() {
		return this.totalPages === 0;
	}

	get currentPageOneBased() {
		return this.page + 1;
	}

	get navFirstPrevDisabled() {
		return this.isFirstPage || this.isEmpty;
	}

	get navNextLastDisabled() {
		return this.isLastPage || this.isEmpty;
	}

	get showNavigationControls() {
		return this.totalPages > 1;
	}

	get templateKeys() {
		const templateKeys = parseTemplateKeys(this.args.template, DEFAULT_TEMPLATE);
		const prevIndex = templateKeys.indexOf(this.templateKey.PREV_PAGE_LINK);
		const nextIndex = templateKeys.indexOf(this.templateKey.NEXT_PAGE_LINK);

		if (prevIndex >= 0 && nextIndex < 0) {
			templateKeys.splice(prevIndex + 1, 0, this.templateKey.NEXT_PAGE_LINK);
		} else if (nextIndex >= 0 && prevIndex < 0) {
			templateKeys.splice(nextIndex, 0, this.templateKey.PREV_PAGE_LINK);
		}

		return templateKeys;
	}

	get pageLinkBoundaries() {
		const { totalPages, pageLinkSize, page } = this;
		return computePageLinkBoundaries(totalPages, pageLinkSize, page);
	}

	get pageLinks() {
		const [start, end] = this.pageLinkBoundaries;
		return pageLinksFromBoundaries(start, end);
	}

	get rowsPerPageOptions() {
		const { rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS } = this.args;
		return mapRowsPerPageOptions(rowsPerPageOptions);
	}

	get reportFirst() {
		return Math.min(this.first + 1, this.totalRecords);
	}

	get reportLast() {
		return Math.min(this.first + this.rows, this.totalRecords);
	}

	get currentPageReportText() {
		const template = this.args.currentPageReportTemplate ?? DEFAULT_PAGE_REPORT;
		const tokens = {
			currentPage: this.currentPageOneBased,
			totalPages: this.totalPages,
			first: this.reportFirst,
			last: this.reportLast,
			rows: this.rows,
			totalRecords: this.totalRecords
		};
		return interpolatePageReport(template, tokens);
	}

	get pageLinksYield() {
		return {
			pageLinks: this.pageLinks,
			currentPage: this.currentPageOneBased,
			totalPages: this.totalPages,
			goToPageNumber: this.goToPageNumber
		};
	}

	get currentPageReportYield() {
		return {
			text: this.currentPageReportText,
			first: this.reportFirst,
			last: this.reportLast,
			totalRecords: this.totalRecords,
			currentPage: this.currentPageOneBased,
			totalPages: this.totalPages
		};
	}

	get rowsPerPageDropdownYield() {
		return {
			value: this.rows,
			options: this.rowsPerPageOptions,
			onChange: this.onRowsChange,
			disabled: this.isEmpty
		};
	}

	get firstPageLinkIcon() {
		return this.args.firstPageLinkIcon ?? "left-arrow-bounded-icon";
	}

	get prevPageLinkIcon() {
		return this.args.prevPageLinkIcon ?? "left-arrow-icon";
	}

	get nextPageLinkIcon() {
		return this.args.nextPageLinkIcon ?? "right-arrow-icon";
	}

	get lastPageLinkIcon() {
		return this.args.lastPageLinkIcon ?? "right-arrow-bounded-icon";
	}

	buildNavLinkConfig(suffix, icon, onClick, disabled, ariaKey) {
		return {
			icon,
			onClick,
			disabled,
			className: joinClassNames(`paginator-${suffix}`, disabled && "disabled"),
			ariaLabel: t(ariaKey)
		};
	}

	get firstPageLinkConfig() {
		return this.buildNavLinkConfig(
			"first",
			this.firstPageLinkIcon,
			this.goToFirst,
			this.navFirstPrevDisabled,
			"lbl.a11y.paginator.firstPage"
		);
	}

	get prevPageLinkConfig() {
		return this.buildNavLinkConfig(
			"prev",
			this.prevPageLinkIcon,
			this.goToPrev,
			this.navFirstPrevDisabled,
			"lbl.a11y.paginator.prevPage"
		);
	}

	get nextPageLinkConfig() {
		return this.buildNavLinkConfig(
			"next",
			this.nextPageLinkIcon,
			this.goToNext,
			this.navNextLastDisabled,
			"lbl.a11y.paginator.nextPage"
		);
	}

	get lastPageLinkConfig() {
		return this.buildNavLinkConfig(
			"last",
			this.lastPageLinkIcon,
			this.goToLast,
			this.navNextLastDisabled,
			"lbl.a11y.paginator.lastPage"
		);
	}

	get showPaginator() {
		const { alwaysShow = true } = this.args;
		return alwaysShow || this.totalPages > 1;
	}

	get showRecordsPerPageLabel() {
		return this.args.showRecordsPerPageLabel !== false;
	}

	get showFirstLastNav() {
		return this.args.showFirstLastNav ?? false;
	}

	@action
	changePage(first, rows) {
		const baseRows = rows ?? this.rows;
		const r =
			typeof baseRows === "number" && Number.isFinite(baseRows) ? baseRows : Number(baseRows);
		if (!Number.isFinite(r) || r <= 0) return;

		const totalPages = computeTotalPages(this.totalRecords, r);
		const p = computePageFromFirst(r, first);

		// With no records, totalPages is 0 but rows-per-page / first=0 must still notify the parent.
		if (totalPages === 0) {
			if (first !== 0) return;
			const { onPageChange } = this.args;
			if (typeof onPageChange === "function") {
				onPageChange({ first: 0, rows: r, page: 0, totalPages: 0 });
			}
			return;
		}

		if (p < 0 || p >= totalPages) return;

		const { onPageChange } = this.args;
		if (typeof onPageChange === "function") {
			onPageChange({ first, rows: r, page: p, totalPages });
		}
	}

	@action
	goToFirst(event) {
		event?.preventDefault?.();
		this.changePage(0, this.rows);
	}

	@action
	goToPrev(event) {
		event?.preventDefault?.();
		this.changePage(this.first - this.rows, this.rows);
	}

	@action
	goToNext(event) {
		event?.preventDefault?.();
		this.changePage(this.first + this.rows, this.rows);
	}

	@action
	goToLast(event) {
		event?.preventDefault?.();
		this.changePage((this.totalPages - 1) * this.rows, this.rows);
	}

	@action
	goToPageNumber(pageOneBased, event) {
		event?.preventDefault?.();
		this.changePage((pageOneBased - 1) * this.rows, this.rows);
	}

	@action
	onRowsChange(value) {
		this.changePage(0, value);
	}

	<template>
		{{#if this.showPaginator}}
			<div
				class={{this.rootClasses}}
				role="navigation"
				aria-label={{t "lbl.a11y.paginator.navigation"}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				{{#if (and @hasLeft (has-block "left"))}}
					<div class="paginator-left" data-qa="{{this.rootDataQa}}-left">{{yield to="left"}}</div>
				{{/if}}

				{{#each this.templateKeys as |segment|}}
					{{#if (eq segment this.templateKey.FIRST_PAGE_LINK)}}
						{{#if (and this.showNavigationControls this.showFirstLastNav)}}
							{{#if (has-block "firstPageLink")}}
								{{yield this.firstPageLinkConfig to="firstPageLink"}}
							{{else}}
								<PaginatorDefaultNavButton
									@kind="first"
									@config={{this.firstPageLinkConfig}}
									@rootDataQa={{this.rootDataQa}}
								/>
							{{/if}}
						{{/if}}

					{{else if (eq segment this.templateKey.PREV_PAGE_LINK)}}
						{{#if this.showNavigationControls}}
							{{#if (has-block "prevPageLink")}}
								{{yield this.prevPageLinkConfig to="prevPageLink"}}
							{{else}}
								<PaginatorDefaultNavButton
									@kind="prev"
									@config={{this.prevPageLinkConfig}}
									@rootDataQa={{this.rootDataQa}}
								/>
							{{/if}}
						{{/if}}

					{{else if (eq segment this.templateKey.NEXT_PAGE_LINK)}}
						{{#if this.showNavigationControls}}
							{{#if (has-block "nextPageLink")}}
								{{yield this.nextPageLinkConfig to="nextPageLink"}}
							{{else}}
								<PaginatorDefaultNavButton
									@kind="next"
									@config={{this.nextPageLinkConfig}}
									@rootDataQa={{this.rootDataQa}}
								/>
							{{/if}}
						{{/if}}

					{{else if (eq segment this.templateKey.LAST_PAGE_LINK)}}
						{{#if (and this.showNavigationControls this.showFirstLastNav)}}
							{{#if (has-block "lastPageLink")}}
								{{yield this.lastPageLinkConfig to="lastPageLink"}}
							{{else}}
								<PaginatorDefaultNavButton
									@kind="last"
									@config={{this.lastPageLinkConfig}}
									@rootDataQa={{this.rootDataQa}}
								/>
							{{/if}}
						{{/if}}

					{{else if (eq segment this.templateKey.PAGE_LINKS)}}
						{{#if this.showNavigationControls}}
							{{#if (has-block "pageLinks")}}
								{{yield this.pageLinksYield to="pageLinks"}}
							{{else}}
								<PaginatorDefaultPageLinks
									@pageLinks={{this.pageLinks}}
									@currentPageOneBased={{this.currentPageOneBased}}
									@rootDataQa={{this.rootDataQa}}
									@goToPageNumber={{this.goToPageNumber}}
								/>
							{{/if}}
						{{/if}}

					{{else if (eq segment this.templateKey.CURRENT_PAGE_REPORT)}}
						{{#if (has-block "currentPageReport")}}
							{{yield this.currentPageReportYield to="currentPageReport"}}
						{{else}}
							<PaginatorDefaultCurrentReport
								@text={{this.currentPageReportText}}
								@rootDataQa={{this.rootDataQa}}
							/>
						{{/if}}

					{{else if (eq segment this.templateKey.ROWS_PER_PAGE_DROPDOWN)}}
						{{#if (has-block "rowsPerPageDropdown")}}
							{{yield this.rowsPerPageDropdownYield to="rowsPerPageDropdown"}}
						{{else if this.rowsPerPageOptions.length}}
							<PaginatorDefaultRowsPerPage
								@rows={{this.rows}}
								@options={{this.rowsPerPageOptions}}
								@isEmpty={{this.isEmpty}}
								@showRecordsPerPageLabel={{this.showRecordsPerPageLabel}}
								@onRowsChange={{this.onRowsChange}}
								@rootDataQa={{this.rootDataQa}}
							/>
						{{/if}}
					{{/if}}
				{{/each}}

				{{#if (and @hasRight (has-block "right"))}}
					<div class="paginator-end" data-qa="{{this.rootDataQa}}-right">{{yield to="right"}}</div>
				{{/if}}
			</div>
		{{/if}}
	</template>
}
