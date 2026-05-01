import Component from "@glimmer/component";
import { fn } from "@ember/helper";
import eq from "ember-truth-helpers/helpers/eq";
import UlxButton from "../ulx-button/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxChip from "../ulx-chip/index.gjs";
import { t } from "../../utils/i18n.js";
import { resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for the filter bubbles bar (default: `ulx-table-filter-bubbles`). */
export default class TableFilterBubblesBar extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-filter-bubbles");
	}

	get bubbles() {
		return this.args.bubbles ?? [];
	}

	<template>
		{{#if @visible}}
			<div
				class="datatable-filter-bubbles-bar"
				role="group"
				aria-label={{t "lbl.filter"}}
				data-qa={{this.rootDataQa}}
			>
				{{#each this.bubbles as |bubble|}}
					<div class="datatable-filter-bubble-item">
						<UlxButton
							@variant="outlined"
							@size="compact"
							@customClass="filter-bubble-trigger"
							{{!-- @onClick={{fn @onOpenBubble bubble}} --}}
							aria-haspopup="true"
							aria-expanded={{eq @activeField bubble.field}}
						>
							<:default>
								<UlxChip @size="s-size" @customClass="filter-bubble-chip px-2">
									{{!<UlxIcon
										@iconName="filter-icon"
										@componentClass="bs-icons1"
										@type="font"
										@size="s18"
										aria-hidden="true"
									/>}}
									<span class="filter-bubble-label">
										{{bubble.label}}:
										<strong>{{bubble.displayValue}}</strong>
									</span>
									{{!	<UlxIcon
										@iconName="down-arrow-filled-icon"
										@componentClass="bs-icons1"
										@type="font"
										@size="s18"
										aria-hidden="true"
									/> }}
									<UlxIconButton
										@variant="link"
										@size="s-size"
										@iconSize="s18"
										@pilled={{true}}
										@iconComponentClass="bs-icons1"
										@iconLeft="close-icon-01"
										@customClass="filter-bubble-remove-btn icon compact"
										@onClick={{fn @onRemoveBubble bubble.field}}
										aria-label={{t "lbl.delete.filter"}}
									/>
								</UlxChip>
							</:default>
						</UlxButton>

					</div>
				{{/each}}
				<UlxIconButton
					@variant="danger"
					@text={{true}}
					@size="compact"
					@label={{t "lbl.clear.filters"}}
					@onClick={{@onClearAll}}
				/>
			</div>
		{{/if}}
	</template>
}
