import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn, hash } from "@ember/helper";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxDropdown from "../../elements/ulx-dropdown/index.gjs";
import { eq, or } from "ember-truth-helpers";

const DEFAULT_TEMPLATE =
	"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";
const DEFAULT_PAGE_REPORT = "({currentPage} of {totalPages})";

/**
 * Paginator component for paged content. Matches PrimeReact Paginator API and ULS paginator.less.
 * Uses UlxButton for first/prev/next/last and page number buttons; UlxDropdown for rows per page.
 *
 * @class UlxPaginator
 * @param {number} [totalRecords=0] - Total number of records
 * @param {number} [rows=0] - Rows per page
 * @param {number} [first=0] - Zero-based index of first row to display
 * @param {number} [pageLinkSize=5] - Number of page links to show
 * @param {number[]} [rowsPerPageOptions] - Options for rows-per-page dropdown (e.g. [10, 20, 30])
 * @param {boolean} [alwaysShow=true] - Show paginator even when only one page
 * @param {string} [template] - Layout string, e.g. "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
 * @param {string} [currentPageReportTemplate] - Report template; placeholders: {currentPage}, {totalPages}, {first}, {last}, {rows}, {totalRecords}
 * @param {Function} [onPageChange] - Callback (event) => void; event: { first, rows, page, totalPages }
 * @param {string} [firstPageLinkIcon] - Icon name for first page button
 * @param {string} [prevPageLinkIcon] - Icon name for previous page button
 * @param {string} [nextPageLinkIcon] - Icon name for next page button
 * @param {string} [lastPageLinkIcon] - Icon name for last page button
 * @param {string} [customClass] - Extra CSS class for root
 *
 * Named blocks (lowercase) override default UI when provided:
 * - <:firstPageLink> - yields { onClick, disabled, className, ariaLabel }
 * - <:prevPageLink> - yields { onClick, disabled, className, ariaLabel }
 * - <:nextPageLink> - yields { onClick, disabled, className, ariaLabel }
 * - <:lastPageLink> - yields { onClick, disabled, className, ariaLabel }
 * - <:pageLinks> - yields { pageLinks, currentPage, totalPages, goToPageNumber }
 * - <:currentPageReport> - yields { text, first, last, totalRecords, currentPage, totalPages }
 * - <:rowsPerPageDropdown> - yields { value, options, onChange, disabled }
 * - <:left> - content before paginator controls
 * - <:right> - content after paginator controls
 */
export default class UlxPaginator extends Component {
	get baseClass() {
		return getComponentClass("paginator");
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass];
		customClass && parts.push(customClass);
		return parts.filter(Boolean).join(" ");
	}

	get totalRecords() {
		return this.args.totalRecords ?? 0;
	}

	get rows() {
		return this.args.rows ?? 0;
	}

	get first() {
		return this.args.first ?? 0;
	}

	get pageLinkSize() {
		return this.args.pageLinkSize ?? 5;
	}

	get page() {
		const { rows } = this;
		return rows > 0 ? Math.floor(this.first / rows) : 0;
	}

	get totalPages() {
		const { totalRecords, rows } = this;
		return rows > 0 ? Math.ceil(totalRecords / rows) : 0;
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

	get templateKeys() {
		const raw = this.args.template ?? DEFAULT_TEMPLATE;
		return typeof raw === "string" ? raw.trim().split(/\s+/).filter(Boolean) : [];
	}

	get pageLinkBoundaries() {
		const { totalPages, pageLinkSize, page } = this;
		const numberOfPages = totalPages;
		const visiblePages = Math.min(pageLinkSize, numberOfPages);
		let start = Math.max(0, Math.ceil(page - visiblePages / 2));
		let end = Math.min(numberOfPages - 1, start + visiblePages - 1);
		const delta = pageLinkSize - (end - start + 1);
		start = Math.max(0, start - delta);
		return [start, end];
	}

	get pageLinks() {
		const [start, end] = this.pageLinkBoundaries;
		const links = [];
		for (let i = start; i <= end; i++) {
			links.push(i + 1);
		}
		return links;
	}

	get rowsPerPageOptions() {
		const opts = this.args.rowsPerPageOptions;
		return opts && opts.length ? opts.map((opt) => ({ label: String(opt), value: opt })) : [];
	}

	get reportFirst() {
		return Math.min(this.first + 1, this.totalRecords);
	}

	get reportLast() {
		return Math.min(this.first + this.rows, this.totalRecords);
	}

	get currentPageReportText() {
		const template = this.args.currentPageReportTemplate ?? DEFAULT_PAGE_REPORT;
		const report = {
			currentPage: this.page + 1,
			totalPages: this.totalPages,
			first: this.reportFirst,
			last: this.reportLast,
			rows: this.rows,
			totalRecords: this.totalRecords
		};
		return template
			.replace(/\{currentPage\}/g, String(report.currentPage))
			.replace(/\{totalPages\}/g, String(report.totalPages))
			.replace(/\{first\}/g, String(report.first))
			.replace(/\{last\}/g, String(report.last))
			.replace(/\{rows\}/g, String(report.rows))
			.replace(/\{totalRecords\}/g, String(report.totalRecords));
	}

	get firstPageLinkIcon() {
		return this.args.firstPageLinkIcon ?? "double-left-icon";
	}

	get prevPageLinkIcon() {
		return this.args.prevPageLinkIcon ?? "left-arrow-icon";
	}

	get nextPageLinkIcon() {
		return this.args.nextPageLinkIcon ?? "right-arrow-icon";
	}

	get lastPageLinkIcon() {
		return this.args.lastPageLinkIcon ?? "double-right-icon";
	}

	@action
	changePage(first, rows) {
		const r = rows ?? this.rows;
		const totalPages = this.rows > 0 ? Math.ceil(this.totalRecords / r) : 0;
		const p = Math.floor(first / r);
		if (p >= 0 && p < totalPages) {
			const fn = this.args.onPageChange;
			if (typeof fn === "function") {
				fn({ first, rows: r, page: p, totalPages });
			}
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

	@action
	jumpToPageChange(event) {
		const val = Number(event?.target?.value);
		if (Number.isInteger(val) && val >= 1 && val <= this.totalPages) {
			this.changePage((val - 1) * this.rows, this.rows);
		}
	}

	get showPaginator() {
		const { alwaysShow = true } = this.args;
		return alwaysShow || this.totalPages > 1;
	}

	get hasLayout() {
		return this.templateKeys.length > 0;
	}

	<template>
		{{#if this.showPaginator}}
			<div
				class={{this.rootClasses}}
				role="navigation"
				aria-label={{t "aria.paginator.rowsPerPage"}}
				...attributes
			>
				{{#if (has-block "left")}}
					<div class="paginator-left">{{yield to="left"}}</div>
				{{/if}}

				{{#each this.templateKeys as |key|}}
					{{#if (eq key "FirstPageLink")}}
						{{#if (has-block "firstPageLink")}}
							{{yield
								(hash
									onClick=this.goToFirst
									disabled=(or this.isFirstPage this.isEmpty)
									className="paginator-first"
									ariaLabel=(t "aria.paginator.firstPage")
								)
								to="firstPageLink"
							}}
						{{else}}
							<UlxButton
								@variant="secondary"
								@text={{true}}
								@icon={{this.firstPageLinkIcon}}
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass="paginator-first {{if (or this.isFirstPage this.isEmpty) 'disabled'}}"
								@disabled={{or this.isFirstPage this.isEmpty}}
								@onClick={{this.goToFirst}}
								aria-label={{t "aria.paginator.firstPage"}}
							/>
						{{/if}}
					{{else if (eq key "PrevPageLink")}}
						{{#if (has-block "prevPageLink")}}
							{{yield
								(hash
									onClick=this.goToPrev
									disabled=(or this.isFirstPage this.isEmpty)
									className="paginator-prev"
									ariaLabel=(t "aria.paginator.prevPage")
								)
								to="prevPageLink"
							}}
						{{else}}
							<UlxButton
								@variant="basic"
								@text={{true}}
								@label={{t "lbl.paginator.previous"}}
								@icon={{this.prevPageLinkIcon}}
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass="paginator-prev {{if (or this.isFirstPage this.isEmpty) 'disabled'}}"
								@disabled={{or this.isFirstPage this.isEmpty}}
								@onClick={{this.goToPrev}}
								aria-label={{t "aria.paginator.prevPage"}}
							/>
						{{/if}}
					{{else if (eq key "NextPageLink")}}
						{{#if (has-block "nextPageLink")}}
							{{yield
								(hash
									onClick=this.goToNext
									disabled=(or this.isLastPage this.isEmpty)
									className="paginator-next"
									ariaLabel=(t "aria.paginator.nextPage")
								)
								to="nextPageLink"
							}}
						{{else}}
							<UlxButton
								@variant="basic"
								@text={{true}}
								@label={{t "lbl.paginator.next"}}
								@icon={{this.nextPageLinkIcon}}
								@iconPos="right"
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass="paginator-next {{if (or this.isLastPage this.isEmpty) 'disabled'}}"
								@disabled={{or this.isLastPage this.isEmpty}}
								@onClick={{this.goToNext}}
								aria-label={{t "aria.paginator.nextPage"}}
							/>
						{{/if}}
					{{else if (eq key "LastPageLink")}}
						{{#if (has-block "lastPageLink")}}
							{{yield
								(hash
									onClick=this.goToLast
									disabled=(or this.isLastPage this.isEmpty)
									className="paginator-last"
									ariaLabel=(t "aria.paginator.lastPage")
								)
								to="lastPageLink"
							}}
						{{else}}
							<UlxButton
								@variant="secondary"
								@text={{true}}
								@icon={{this.lastPageLinkIcon}}
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass="paginator-last {{if (or this.isLastPage this.isEmpty) 'disabled'}}"
								@disabled={{or this.isLastPage this.isEmpty}}
								@onClick={{this.goToLast}}
								aria-label={{t "aria.paginator.lastPage"}}
							/>
						{{/if}}
					{{else if (eq key "PageLinks")}}
						{{#if (has-block "pageLinks")}}
							{{yield
								(hash
									pageLinks=this.pageLinks
									currentPage=this.currentPageOneBased
									totalPages=this.totalPages
									goToPageNumber=this.goToPageNumber
								)
								to="pageLinks"
							}}
						{{else}}
							<span
								class="paginator-page-links"
								role="group"
								aria-label={{t "aria.paginator.pageLabel" page=this.currentPageOneBased}}
							>
								{{#each this.pageLinks as |pageNum|}}
									<UlxButton
										@variant="secondary"
										@text={{true}}
										@label={{pageNum}}
										@customClass="paginator-page-button {{if
											(eq pageNum this.currentPageOneBased)
											'active'
										}}"
										@onClick={{fn this.goToPageNumber pageNum}}
										aria-label={{t "aria.paginator.pageLabel" page=pageNum}}
										aria-current={{if (eq pageNum this.currentPageOneBased) "page"}}
									/>
								{{/each}}
							</span>
						{{/if}}
					{{else if (eq key "CurrentPageReport")}}
						{{#if (has-block "currentPageReport")}}
							{{yield
								(hash
									text=this.currentPageReportText
									first=this.reportFirst
									last=this.reportLast
									totalRecords=this.totalRecords
									currentPage=this.currentPageOneBased
									totalPages=this.totalPages
								)
								to="currentPageReport"
							}}
						{{else}}
							<span
								class="paginator-current-report"
								aria-live="polite"
							>{{this.currentPageReportText}}</span>
						{{/if}}
					{{else if (eq key "RowsPerPageDropdown")}}
						{{#if (has-block "rowsPerPageDropdown")}}
							{{yield
								(hash
									value=this.rows
									options=this.rowsPerPageOptions
									onChange=this.onRowsChange
									disabled=this.isEmpty
								)
								to="rowsPerPageDropdown"
							}}
						{{else if this.rowsPerPageOptions.length}}
							<div class="paginator-rpp">
								<UlxDropdown
									@value={{this.rows}}
									@options={{this.rowsPerPageOptions}}
									@optionLabel="label"
									@optionValue="value"
									@placeholder={{t "lbl.paginator.choose"}}
									@disabled={{this.isEmpty}}
									@onChange={{this.onRowsChange}}
									@customClass="paginator-rpp-dropdown"
									aria-label={{t "aria.paginator.rowsPerPage"}}
								/>
							</div>
						{{/if}}
					{{/if}}
				{{/each}}

				{{#if (has-block "right")}}
					<div class="paginator-end">{{yield to="right"}}</div>
				{{/if}}
			</div>
		{{/if}}
	</template>
}
