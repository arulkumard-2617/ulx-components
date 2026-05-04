import Component from "@glimmer/component";
import { fn } from "@ember/helper";
import eq from "ember-truth-helpers/helpers/eq";
import UlxPopup from "../ulx-popup/index.gjs";
import UlxSlidePane from "../ulx-slide-pane/index.gjs";
import UlxAccordion from "../ulx-accordion/index.gjs";
import UlxCheckboxItem from "../ulx-checkbox/checkbox-item.gjs";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import ManageColumns from "./manage-columns.gjs";
import FilterOverlay from "./filter-overlay.gjs";
import SortOptions from "./sort-options.gjs";
import { t } from "../../utils/i18n.js";
import { resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for overlay portal grouping (default: `ulx-table-overlays`). */
export default class TableOverlays extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-overlays");
	}

	get manageColumns() {
		return this.args.manageColumns ?? {};
	}

	get filterBubble() {
		return this.args.filterBubble ?? {};
	}

	get filterOverlay() {
		return this.args.filterOverlay ?? {};
	}

	get sortPopover() {
		return this.args.sortPopover ?? {};
	}

	get filterPane() {
		return this.args.filterPane ?? {};
	}

	get showManageColumnsPopup() {
		return this.manageColumns.visible && this.manageColumns.target;
	}

	get showFilterBubblePopup() {
		return this.filterBubble.activeBubble && this.filterBubble.target;
	}

	get showFilterOverlayPortal() {
		return this.filterOverlay.column && this.filterOverlay.portalTarget;
	}

	get showSortPopover() {
		return this.sortPopover.visible && this.sortPopover.target;
	}

	<template>
		<div class="datatable-overlays-root" data-qa={{this.rootDataQa}} style="display: contents">
		{{! Manage columns panel }}
		{{#if this.showManageColumnsPopup}}
			<UlxPopup
				@visible={{this.manageColumns.visible}}
				@target={{this.manageColumns.target}}
				@position="position-bottom-right"
				@size="l-size"
				@closable={{true}}
				@bodyClassName="p-0"
				@title={{t "lbl.manage.columns"}}
				@onHide={{this.manageColumns.onClose}}
				@ariaLabel={{t "lbl.manage.columns"}}
				@hideTertiaryButton={{false}}
				@tertiaryButtonLabel={{t "lbl.reset.to.default"}}
				@tertiaryButtonIcon="reset-icon"
				@cancelButtonLabel={{t "label.cancel"}}
				@doneButtonLabel={{t "label.save"}}
				@onTertiary={{this.manageColumns.onReset}}
				@onCancel={{this.manageColumns.onClose}}
				@onDone={{this.manageColumns.onInvokeApply}}
			>
				<ManageColumns
					@allColumns={{this.manageColumns.allColumns}}
					@visibleColumns={{this.manageColumns.visibleColumns}}
					@onApply={{this.manageColumns.onApply}}
					@onClose={{this.manageColumns.onClose}}
					@onReset={{this.manageColumns.onReset}}
					@registerRef={{this.manageColumns.onSetRef}}
				/>
			</UlxPopup>
		{{/if}}

		{{! Filter bubble edit popup }}
		{{#if this.showFilterBubblePopup}}
			<UlxPopup
				@visible={{true}}
				@target={{this.filterBubble.target}}
				@position="position-bottom-left"
				@size="m-size"
				@dismissable={{true}}
				@onHide={{this.filterBubble.onClose}}
				@ariaLabel={{t "lbl.filter"}}
				@hideFooter={{true}}
			>
				{{#if (eq this.filterBubble.activeBubble.type "column")}}
					<FilterOverlay
						@column={{this.filterBubble.activeBubble.col}}
						@filterMeta={{this.filterBubble.activeBubble.meta}}
						@onApply={{this.filterBubble.onApply}}
						@onClear={{this.filterBubble.onDelete}}
						@onClose={{this.filterBubble.onClose}}
					/>
				{{else}}
					<div class="flex flex-col gap-3">
						<div class="flex justify-between items-center">
							<span class="popup-title">{{this.filterBubble.activeBubble.label}}</span>
							<UlxIconButton
								@variant="danger"
								@text={{true}}
								@size="s-size"
								@iconLeft="delete-icon-02"
								@iconComponentClass="bs-icons1"
								@label={{t "lbl.delete.filter"}}
								@onClick={{fn this.filterBubble.onDelete this.filterBubble.activeBubble.field}}
							/>
						</div>

						<div class="ulx-checkbox-group">
							{{#each this.filterBubble.activeBubble.group.options as |opt|}}
								<UlxCheckboxItem
									@itemLabel={{opt.label}}
									@checked={{this.filterBubble.isOptionChecked
										this.filterBubble.activeBubble.group.key
										opt.value
									}}
									@onChange={{fn
										this.filterBubble.onUpdateSelection
										this.filterBubble.activeBubble.group.key
										opt.value
									}}
								/>
							{{/each}}
						</div>

						<div class="flex justify-end">
							<UlxButton
								@variant="primary"
								@size="s-size"
								@label={{t "lbl.apply.filter"}}
								@onClick={{fn this.filterBubble.onApplyPane this.filterBubble.activeBubble.field}}
							/>
						</div>
					</div>
				{{/if}}
			</UlxPopup>
		{{/if}}

		{{! Filter overlay (menu mode) – portaled to body, position absolute }}
		{{#if this.showFilterOverlayPortal}}
			{{#in-element this.filterOverlay.portalTarget insertBefore=null}}
				<div
					class="ulx-datatable-filter-overlay-wrapper"
					style={{this.filterOverlay.wrapperStyle}}
					role="presentation"
				>
					<FilterOverlay
						@column={{this.filterOverlay.column}}
						@filterMeta={{this.filterOverlay.filterMetaFor this.filterOverlay.column}}
						@onApply={{this.filterOverlay.onApply}}
						@onClear={{this.filterOverlay.onClear}}
						@onClose={{this.filterOverlay.onClose}}
					/>
				</div>
			{{/in-element}}
		{{/if}}

		{{! Sort options popover }}
		{{#if this.showSortPopover}}
			<UlxPopup
				@visible={{this.sortPopover.visible}}
				@target={{this.sortPopover.target}}
				@position="position-bottom-center"
				@size="xs-size"
				@dismissable={{true}}
				@onHide={{this.sortPopover.onClose}}
				@ariaLabel={{t "lbl.sort"}}
				@hideFooter={{true}}
			>
				<div class="fs-popup">
					<SortOptions
						@sortBy={{this.sortPopover.sortBy}}
						@sortOptions={{this.sortPopover.options}}
						@onChange={{this.sortPopover.onChange}}
					/>
				</div>
			</UlxPopup>
		{{/if}}

		{{! Filter slide pane }}
		{{#if this.filterPane.hasGroups}}
			<UlxSlidePane
				@visible={{this.filterPane.visible}}
				@title={{t "lbl.filter"}}
				@position="right"
				@onHide={{this.filterPane.onClose}}
				@onCancel={{this.filterPane.onClose}}
				@onDone={{this.filterPane.onApply}}
				@cancelButtonLabel={{t "label.close"}}
				@doneButtonLabel={{t "lbl.apply.filter"}}
			>
				<:body>
					<UlxAccordion
						@items={{this.filterPane.accordionModel}}
						@activeIndex={{this.filterPane.accordionActiveIndex}}
						@onTabChange={{this.filterPane.onAccordionChange}}
						@multiple={{true}}
						@toggleIconPosition="right"
						@variant="elevated"
						@size="s-size"
					>
						<:content as |item idx|>
							{{#let (this.filterPane.getGroupAt idx) as |group|}}
								{{#if group}}
									<div class={{this.filterPane.groupClass}}>
										{{#each group.options as |opt|}}
											<UlxCheckboxItem
												@itemLabel={{opt.label}}
												@checked={{this.filterPane.isOptionChecked group.key opt.value}}
												@onChange={{fn this.filterPane.onUpdateSelection group.key opt.value}}
											/>
										{{/each}}
									</div>
								{{/if}}
							{{/let}}
						</:content>
					</UlxAccordion>
				</:body>
			</UlxSlidePane>
		{{/if}}
		</div>
	</template>
}
