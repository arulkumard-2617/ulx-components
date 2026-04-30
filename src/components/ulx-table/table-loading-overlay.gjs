import Component from "@glimmer/component";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import { t } from "../../utils/i18n.js";
import { resolveRootDataQa } from "../../utils/data-qa";

/** @param {string} [dataQa] - Root `data-qa` for the loading overlay (default: `ulx-table-loading-overlay`). */
export default class TableLoadingOverlay extends Component {
	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "table-loading-overlay");
	}

	get isLoading() {
		return !!this.args.loading;
	}

	<template>
		{{#if this.isLoading}}
			<div
				class="datatable-loading-overlay"
				aria-live="polite"
				aria-label={{t "lbl.a11y.table.loading"}}
				data-qa={{this.rootDataQa}}
			>
				{{#if (has-block "loadingOverlay")}}
					{{yield to="loadingOverlay"}}
				{{else}}
					<UlxProgressSpinner @size="l-size" />
				{{/if}}
			</div>
		{{/if}}
	</template>
}
