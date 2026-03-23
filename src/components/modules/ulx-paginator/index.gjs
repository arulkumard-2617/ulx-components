import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn, hash } from "@ember/helper";
import { getComponentClass } from "../../../utils/component-config";
import { joinClassNames } from "../../../utils/class-names";
import { t } from "../../../utils/i18n";
import UlxButton from "../../elements/ulx-button/index.gjs";
import UlxIconButton from "../../elements/ulx-icon-button/index.gjs";
import UlxDropdown from "../../elements/ulx-dropdown/index.gjs";
import { eq } from "ember-truth-helpers";

const DEFAULT_TEMPLATE =
	"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";
const DEFAULT_PAGE_REPORT = "({currentPage} of {totalPages})";

/**
 * Paginator component for paged content. Aligns with ULS paginator.less.
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
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-paginator".
 *
 * Named blocks (lowercase) override default UI when provided:
 * - <:firstPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:prevPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:nextPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
 * - <:lastPageLink> - yields { icon, onClick, disabled, className, ariaLabel }
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
		return joinClassNames(this.baseClass, customClass);
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-paginator";
	}

	get navFirstPrevDisabled() {
		return this.isFirstPage || this.isEmpty;
	}

	get navNextLastDisabled() {
		return this.isLastPage || this.isEmpty;
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
		const visiblePages = Math.min(pageLinkSize, totalPages);
		let start = Math.max(0, Math.ceil(page - visiblePages / 2));
		let end = Math.min(totalPages - 1, start + visiblePages - 1);
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
		return opts?.length ? opts.map((opt) => ({ label: String(opt), value: opt })) : [];
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
		return template.replace(/\{(\w+)\}/g, (_, key) => tokens[key] ?? "");
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

	_navLinkConfig(suffix, icon, onClick, disabled, ariaKey) {
		return {
			icon,
			onClick,
			disabled,
			className: joinClassNames(`paginator-${suffix}`, disabled && "disabled"),
			ariaLabel: t(ariaKey)
		};
	}

	get firstPageLinkConfig() {
		return this._navLinkConfig(
			"first",
			this.firstPageLinkIcon,
			this.goToFirst,
			this.navFirstPrevDisabled,
			"aria.paginator.firstPage"
		);
	}

	get prevPageLinkConfig() {
		return this._navLinkConfig(
			"prev",
			this.prevPageLinkIcon,
			this.goToPrev,
			this.navFirstPrevDisabled,
			"aria.paginator.prevPage"
		);
	}

	get nextPageLinkConfig() {
		return this._navLinkConfig(
			"next",
			this.nextPageLinkIcon,
			this.goToNext,
			this.navNextLastDisabled,
			"aria.paginator.nextPage"
		);
	}

	get lastPageLinkConfig() {
		return this._navLinkConfig(
			"last",
			this.lastPageLinkIcon,
			this.goToLast,
			this.navNextLastDisabled,
			"aria.paginator.lastPage"
		);
	}

	@action
	changePage(first, rows) {
		const r = rows ?? this.rows;
		if (r <= 0) return;
		const totalPages = Math.ceil(this.totalRecords / r);
		const p = Math.floor(first / r);
		if (p >= 0 && p < totalPages) {
			const onPageChange = this.args.onPageChange;
			if (typeof onPageChange === "function") {
				onPageChange({ first, rows: r, page: p, totalPages });
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

	get showPaginator() {
		const { alwaysShow = true } = this.args;
		return alwaysShow || this.totalPages > 1;
	}

	<template>
		{{#if this.showPaginator}}
			<div
				class={{this.rootClasses}}
				role="navigation"
				aria-label={{t "aria.paginator.navigation"}}
				data-qa={{this.rootDataQa}}
				...attributes
			>
				{{#if (has-block "left")}}
					<div class="paginator-left" data-qa="{{this.rootDataQa}}-left">{{yield to="left"}}</div>
				{{/if}}

				{{#each this.templateKeys as |key|}}
					{{#if (eq key "FirstPageLink")}}
						{{#if (has-block "firstPageLink")}}
							{{yield this.firstPageLinkConfig to="firstPageLink"}}
						{{else}}
							<UlxIconButton
								@variant="secondary"
								@text={{true}}
								@icon={{this.firstPageLinkConfig.icon}}
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass={{this.firstPageLinkConfig.className}}
								@disabled={{this.firstPageLinkConfig.disabled}}
								@onClick={{this.firstPageLinkConfig.onClick}}
								aria-label={{this.firstPageLinkConfig.ariaLabel}}
								data-qa="{{this.rootDataQa}}-first"
							/>
						{{/if}}
					{{else if (eq key "PrevPageLink")}}
						{{#if (has-block "prevPageLink")}}
							{{yield this.prevPageLinkConfig to="prevPageLink"}}
						{{else}}
							<UlxIconButton
								@variant="basic"
								@text={{true}}
								@icon={{this.prevPageLinkConfig.icon}}
								@label={{t "lbl.paginator.previous"}}
								@icon={{this.prevPageLinkIcon}}
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass={{this.prevPageLinkConfig.className}}
								@disabled={{this.prevPageLinkConfig.disabled}}
								@onClick={{this.prevPageLinkConfig.onClick}}
								aria-label={{this.prevPageLinkConfig.ariaLabel}}
								data-qa="{{this.rootDataQa}}-prev"
							/>
						{{/if}}
					{{else if (eq key "NextPageLink")}}
						{{#if (has-block "nextPageLink")}}
							{{yield this.nextPageLinkConfig to="nextPageLink"}}
						{{else}}
							<UlxIconButton
								@variant="basic"
								@text={{true}}
								@icon={{this.nextPageLinkConfig.icon}}
								@label={{t "lbl.paginator.next"}}
								@icon={{this.nextPageLinkIcon}}
								@iconPos="right"
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass={{this.nextPageLinkConfig.className}}
								@disabled={{this.nextPageLinkConfig.disabled}}
								@onClick={{this.nextPageLinkConfig.onClick}}
								aria-label={{this.nextPageLinkConfig.ariaLabel}}
								data-qa="{{this.rootDataQa}}-next"
							/>
						{{/if}}
					{{else if (eq key "LastPageLink")}}
						{{#if (has-block "lastPageLink")}}
							{{yield this.lastPageLinkConfig to="lastPageLink"}}
						{{else}}
							<UlxIconButton
								@variant="secondary"
								@text={{true}}
								@icon={{this.lastPageLinkConfig.icon}}
								@iconComponentClass="bs-icons1"
								@iconSize="s18"
								@customClass={{this.lastPageLinkConfig.className}}
								@disabled={{this.lastPageLinkConfig.disabled}}
								@onClick={{this.lastPageLinkConfig.onClick}}
								aria-label={{this.lastPageLinkConfig.ariaLabel}}
								data-qa="{{this.rootDataQa}}-last"
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
								data-qa="{{this.rootDataQa}}-page-links"
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
								data-qa="{{this.rootDataQa}}-current-report"
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
							<div class="paginator-rpp" data-qa="{{this.rootDataQa}}-rpp">
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
					<div class="paginator-end" data-qa="{{this.rootDataQa}}-right">{{yield to="right"}}</div>
				{{/if}}
			</div>
		{{/if}}
	</template>
}
