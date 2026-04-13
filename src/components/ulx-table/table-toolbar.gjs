import Component from "@glimmer/component";
import { on } from "@ember/modifier";
import and from "ember-truth-helpers/helpers/and";
import gt from "ember-truth-helpers/helpers/gt";
import or from "ember-truth-helpers/helpers/or";
import UlxButtonGroup from "../ulx-button-group/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxInput from "../ulx-input/index.gjs";
import UlxIconInput from "../ulx-icon-input/index.gjs";
import UlxSelectButton from "../ulx-select-button/index.gjs";
import { t } from "../../utils/i18n.js";

export default class TableToolbar extends Component {
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
			<div class="header-toolbar datatable-toolbar">
				<div class="datatable-toolbar-left">
					{{yield to="preLeftMenu"}}
					{{#if @showGlobalFilter}}
						<div class="datatable-globalfilter" role="search">
							<UlxIconInput
								@iconLeft="search-icon"
								@iconType="font"
								@iconClass="bs-icons1"
								@iconSize="s14"
							>
								<UlxInput
									@key="datatable-global-filter"
									@value={{@globalFilterValue}}
									@onInput={{@onGlobalFilterInput}}
									placeholder={{or
										@globalFilterPlaceholder
										(t "msg.table.global.filter.placeholder")
									}}
									aria-label={{t "aria.table.global.filter"}}
								/>
							</UlxIconInput>
						</div>
					{{/if}}
					{{yield to="postLeftMenu"}}
				</div>
				<div class="datatable-toolbar-right flex gap-4">
					{{yield to="preRightMenu"}}
					{{#if this.showRightCluster}}
						<UlxButtonGroup @size="m-size" @customClass="uls-inline-popup">
							{{#if @hasFilterGroups}}
								<UlxIconButton
									@variant="outlined"
									@size="m-size"
									@iconLeft="filter-icon"
									@iconComponentClass="bs-icons1"
									aria-label={{t "lbl.filter"}}
									{{on "click" @onOpenFilterPane}}
								/>
							{{/if}}
							{{#if (and @sortOptions (gt @sortOptions.length 0))}}
								<UlxIconButton
									@variant="outlined"
									@size="m-size"
									@iconLeft="sort-icon"
									@iconComponentClass="bs-icons1"
									aria-label={{t "lbl.sort"}}
									aria-expanded={{@showSortPopover}}
									{{on "click" @onOpenSortPopover}}
								/>
							{{/if}}
							{{#if @showManageColumns}}
								<UlxIconButton
									@variant="outlined"
									@size="m-size"
									@iconLeft="columns-icon"
									@iconComponentClass="bs-icons1"
									aria-label={{t "lbl.columns"}}
									{{on "click" @onOpenManageColumns}}
								/>
							{{/if}}
						</UlxButtonGroup>
						{{#if this.showViewToggle}}
							<UlxSelectButton
								@options={{@viewOptions}}
								@value={{@viewMode}}
								@onChange={{@onViewToggleChange}}
								@size="m-size"
								@variant="primary"
								@ariaLabel={{t "aria.table.view.toggle"}}
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
