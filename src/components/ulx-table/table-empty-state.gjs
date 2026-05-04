import Component from "@glimmer/component";
import UlxEmptyState from "../ulx-empty-state/index.gjs";

export default class TableEmptyState extends Component {
	get iconSize() {
		return this.args.iconSize ?? "s32";
	}

	get hasCustomContent() {
		return !!this.args.hasCustomEmptyMessage;
	}

	<template>
		{{#if this.hasCustomContent}}
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
