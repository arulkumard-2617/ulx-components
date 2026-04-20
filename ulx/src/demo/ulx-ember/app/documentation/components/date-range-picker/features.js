import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
	BasicDemo,
	LocaleDemo,
	PreloadDemo,
	RangewithdisableDemo,
	ShowiconDemo,
	WrapexternalDemo,
	ImportSource,
	BasicSource,
	LocaleSource,
	PreloadSource,
	RangewithdisableSource,
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

export const DateRangePickerFeatureItems = [
	feat(
		'import',
		'Import',
		'Import <code>UlxDateRangePicker</code> from <code>ulx-components</code>.',
		null,
		ImportSource
	),
	feat(
		'basic',
		'Range calendar',
		'<code>mode: "range"</code> — same as flatpickr <a href="https://flatpickr.js.org/examples/#range-calendar" target="_blank" rel="noopener noreferrer">Range calendar</a>.',
		BasicDemo,
		BasicSource
	),
	feat(
		'locale',
		'Locale',
		'Imported flatpickr locale object via <code>@locale</code> (Spanish example).',
		LocaleDemo,
		LocaleSource
	),
	feat(
		'preload',
		'Preloading range dates',
		'Initial <code>@value</code> with two bounds.',
		PreloadDemo,
		PreloadSource
	),
	feat(
		'range-with-disable',
		'Range with disabled logic',
		'<code>minDate</code> and <code>disable</code> function (flatpickr range example).',
		RangewithdisableDemo,
		RangewithdisableSource
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
		'<code>@showIcon</code> and <code>@showClearButton</code>.',
		WrapexternalDemo,
		WrapexternalSource
	)
];
