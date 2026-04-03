import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
	Basic24Demo,
	Basic12Demo,
	LimitsDemo,
	PreloadDemo,
	ShowiconDemo,
	WrapexternalDemo,
	ImportSource,
	Basic24Source,
	Basic12Source,
	LimitsSource,
	PreloadSource,
	ShowiconSource,
	WrapexternalSource
} from './imports';

function feat(id, nav, html, Demo, Source) {
	return {
		id,
		sectionNav: nav,
		sectionDesc: {
			component: RichText,
			props: { as: 'span', content: html }
		},
		demo: {
			component: Demo,
			props: {
				source: Source,
				snippetName: id,
				language: 'handlebars'
			}
		}
	};
}

export const TimePickerFeatureItems = [
	feat(
		'import',
		'Import',
		'Import <code>UlxTimePicker</code> from <code>ulx-components</code>.',
		null,
		ImportSource
	),
	feat(
		'basic-24',
		'24-hour time',
		'Flatpickr <a href="https://flatpickr.js.org/examples/#time-picker" target="_blank" rel="noopener noreferrer">time picker</a> with <code>time_24hr</code>.',
		Basic24Demo,
		Basic24Source
	),
	feat(
		'basic-12',
		'12-hour time',
		'<code>@hourFormat="12"</code>.',
		Basic12Demo,
		Basic12Source
	),
	feat(
		'time-limits',
		'Time limits',
		'<code>minTime</code> / <code>maxTime</code>.',
		LimitsDemo,
		LimitsSource
	),
	feat(
		'preload',
		'Preloading time',
		'Initial bound <code>@value</code> with a time.',
		PreloadDemo,
		PreloadSource
	),
	feat(
		'show-icon',
		'Icon trigger',
		'<code>@showIcon</code>.',
		ShowiconDemo,
		ShowiconSource
	),
	feat(
		'wrap-external',
		'Wrap + clear',
		'Toggle and clear via <code>wrap</code>.',
		WrapexternalDemo,
		WrapexternalSource
	)
];
