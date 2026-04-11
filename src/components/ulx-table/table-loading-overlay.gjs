import Component from "@glimmer/component";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import { t } from "../../utils/i18n.js";

export default class TableLoadingOverlay extends Component {
	get isLoading() {
		return !!this.args.loading;
	}

	<template>
		{{#if this.isLoading}}
			<div class="datatable-loading-overlay" aria-live="polite" aria-label={{t "aria.table.loading"}}>
				{{#if (has-block "loadingOverlay")}}
					{{yield to="loadingOverlay"}}
				{{else}}
					<UlxProgressSpinner @size="l-size" />
				{{/if}}
			</div>
		{{/if}}
	</template>
}
