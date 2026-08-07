import Component from "@glimmer/component";
import and from "ember-truth-helpers/helpers/and";
import gt from "ember-truth-helpers/helpers/gt";
import or from "ember-truth-helpers/helpers/or";
import UlxBadgeButton from "../ulx-badge-button/index.gjs";
import UlxButtonGroup from "../ulx-button-group/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxInput from "../ulx-input/index.gjs";
import UlxIconInput from "../ulx-icon-input/index.gjs";
import UlxSelectButton from "../ulx-select-button/index.gjs";
import tooltip from "../../modifiers/tooltip.js";
import { t } from "../../utils/i18n.js";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for the toolbar (default: `ulx-table-toolbar`). */
export default class TableToolbar extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-toolbar");
	}

	getDataQa = (part) => buildDataQa(this.rootDataQa, part);

	get showRightCluster() {
		return (
			this.args.hasFilterGroups ||
			(this.args.sortOptions?.length ?? 0) > 0 ||
			!!this.args.showManageColumns ||
			!!this.args.showToggleViews
		);
	}

	get showViewToggle() {
		return !!this.args.showToggleViews && (this.args.viewOptions?.length ?? 0) > 1;
	}

	<template>
		{{#if @visible}}
			<div class="header-toolbar datatable-toolbar" data-qa={{this.rootDataQa}}>
				<div class="datatable-toolbar-left flex gap-4">
					{{yield to="preLeftMenu"}}
					{{#if @showGlobalFilter}}
						<div class="datatable-globalfilter" role="search" data-qa="search">
							<UlxIconInput
								@iconLeft="search-icon"
								@iconType="font"
								@iconClass="bs-icons1"
								@iconSize="s20"
							>
								<UlxInput
									@key="datatable-global-filter"
									@value={{@globalFilterValue}}
									@onInput={{@onGlobalFilterInput}}
									@customClass="w-352"
									data-qa="search-input"
									placeholder={{or
										@globalFilterPlaceholder
										(t "msg.table.global.filter.placeholder")
									}}
									aria-label={{t "lbl.a11y.table.global.filter"}}
								/>
							</UlxIconInput>
						</div>
					{{/if}}
					{{yield to="postLeftMenu"}}
				</div>
				<div class="datatable-toolbar-right flex gap-4">
					{{yield to="preRightMenu"}}
					{{#if this.showRightCluster}}
						<UlxButtonGroup @size="m-size" @dataQa={{this.getDataQa "icon-button-group"}}>
							{{#if @hasFilterGroups}}
								<UlxBadgeButton
									@size="xl-size"
									@dataQa="filter"
									@badge={{if (gt @activeFilterCount 0) @activeFilterCount}}
									@badgeType="circle"
									@onClick={{@onOpenFilterPane}}
									@badgeCustomClass="h-16 w-16 "
									@badgeSize="text-xs"
									@customClass={{if (gt @activeFilterCount 0) "highlighted icon-only" "icon-only"}}
									aria-label={{if
										(gt @activeFilterCount 0)
										(t "lbl.a11y.table.toolbar.filter.active" count=@activeFilterCount)
										(t "lbl.filter")
									}}
									{{tooltip (t "lbl.filter") position="bottom" disabled=@filterPaneOpen}}
								>
									<:prefix>
										<UlxIcon
											@iconName="filter-icon"
											@type="font"
											@componentClass="bs-icons1"
											@size="s16"
											aria-hidden="true"
										/>
									</:prefix>
								</UlxBadgeButton>
							{{/if}}
							{{#if (and @sortOptions (gt @sortOptions.length 0))}}
								<UlxBadgeButton
									@size="xl-size"
									@dataQa="sort"
									@onClick={{@onOpenSortPopover}}
									@customClass="icon-only"
									aria-label={{t "lbl.sort"}}
									aria-expanded={{@showSortPopover}}
									{{tooltip (t "lbl.sort") position="bottom" disabled=@showSortPopover}}
								>
									<:prefix>
										<UlxIcon
											@iconName="sort-icon"
											@type="font"
											@componentClass="bs-icons1"
											@size="s16"
											aria-hidden="true"
										/>
									</:prefix>
								</UlxBadgeButton>
							{{/if}}
							{{#if @showManageColumns}}
								<UlxBadgeButton
									@size="xl-size"
									@dataQa="manage-columns"
									@onClick={{@onOpenManageColumns}}
									@customClass="icon-only"
									aria-label={{t "lbl.columns"}}
									aria-expanded={{@showManageColumnsPopup}}
									{{tooltip (t "lbl.columns") position="bottom" disabled=@showManageColumnsPopup}}
								>
									<:prefix>
										<UlxIcon
											@iconName="columns-icon"
											@type="font"
											@componentClass="bs-icons1"
											@size="s16"
											aria-hidden="true"
										/>
									</:prefix>
								</UlxBadgeButton>
							{{/if}}
						</UlxButtonGroup>
						{{#if this.showViewToggle}}
							<UlxSelectButton
								@options={{@viewOptions}}
								@value={{@viewMode}}
								@onChange={{@onViewToggleChange}}
								@size="m-size"
								@variant="primary"
								@ariaLabel={{t "lbl.a11y.table.view.toggle"}}
							>
								<:item as |option|>
									<UlxIcon
										@iconName={{option.icon}}
										@type="font"
										@componentClass="bs-icons1"
										@size="s16"
										aria-hidden="true"
									/>
								</:item>
							</UlxSelectButton>
						{{/if}}
					{{/if}}
					{{yield to="postRightMenu"}}
				</div>
			</div>
		{{/if}}
	</template>
}
