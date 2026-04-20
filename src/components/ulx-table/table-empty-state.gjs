import Component from "@glimmer/component";
import UlxEmptyState from "../ulx-empty-state/index.gjs";

export default class TableEmptyState extends Component {
	get iconSize() {
		return this.args.iconSize ?? "s32";
	}

	<template>
		{{#if (has-block "emptyMessage")}}
			{{yield to="emptyMessage"}}
		{{else}}
			<UlxEmptyState
				@headerText={{@headerText}}
				@subHeaderText={{@subHeaderText}}
				@iconName={{@iconName}}
				@iconSize={{this.iconSize}}
			/>
		{{/if}}
	</template>
}
