export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTimePicker } from 'ulx-components';

export default class PreloadTimeDemo extends Component {
	@tracked value = new Date(2026, 2, 31, 13, 45, 0, 0);

	@action
	onChange(dates) {
		this.value = dates?.[0] ?? null;
	}

	<template>
		<div class="w-250">
			<UlxTimePicker @hourFormat="24" @value={{this.value}} @onChange={{this.onChange}} />
		</div>
	</template>
}

`;
