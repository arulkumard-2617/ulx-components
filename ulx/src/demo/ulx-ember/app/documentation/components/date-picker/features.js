import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
	BasicDemo,
	AltinputDemo,
	CustomparseformatDemo,
	DatetimeDemo,
	DatetimelimitsDemo,
	DisablespecificDemo,
	DisablerangeDemo,
	DisablefunctionDemo,
	DisabledDemo,
	EnablefunctionDemo,
	EnablerangeDemo,
	EnablespecificDemo,
	FilledDemo,
	InlineDemo,
	InvalidDemo,
	MinmaxDemo,
	MultipleDemo,
	MultipleconjunctionDemo,
	MultiplepreloadDemo,
	PreloadDemo,
	ShowiconDemo,
	WeeknumbersDemo,
	WrapexternalDemo,
	ImportSource,
	BasicSource,
	AltinputSource,
	CustomparseformatSource,
	DatetimeSource,
	DatetimelimitsSource,
	DisablespecificSource,
	DisablerangeSource,
	DisablefunctionSource,
	DisabledSource,
	EnablefunctionSource,
	EnablerangeSource,
	EnablespecificSource,
	FilledSource,
	InlineSource,
	InvalidSource,
	MinmaxSource,
	MultipleSource,
	MultipleconjunctionSource,
	MultiplepreloadSource,
	PreloadSource,
	ShowiconSource,
	WeeknumbersSource,
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

export const DatePickerFeatureItems = [
	feat(
		'import',
		'Import',
		'The <code>UlxDatePicker</code> component is exported from <code>ulx-components</code>.',
		null,
		ImportSource
	),
	feat(
		'basic',
		'Basic',
		'Flatpickr with default options (see <a href="https://flatpickr.js.org/examples/" target="_blank" rel="noopener noreferrer">flatpickr examples</a>).',
		BasicDemo,
		BasicSource
	),
	feat(
		'datetime',
		'DateTime',
		'<code>enableTime</code> and a date-time <code>dateFormat</code>.',
		DatetimeDemo,
		DatetimeSource
	),
	feat(
		'alt-input',
		'Human-friendly (altInput)',
		'<code>altInput</code> stores ISO in the real input and shows a friendlier format.',
		AltinputDemo,
		AltinputSource
	),
	feat(
		'preload',
		'Preloading a date',
		'<code>defaultDate</code> / bound <code>@value</code> for an initial selection.',
		PreloadDemo,
		PreloadSource
	),
	feat(
		'min-max',
		'minDate and maxDate',
		'Restrict selectable range; <code>readOnlyInput</code> matches flatpickr docs.',
		MinmaxDemo,
		MinmaxSource
	),
	feat(
		'disable-specific',
		'Disable specific dates',
		'<code>disable</code> with discrete dates.',
		DisablespecificDemo,
		DisablespecificSource
	),
	feat(
		'disable-range',
		'Disable date ranges',
		'<code>disable</code> with <code>from</code>/<code>to</code> objects.',
		DisablerangeDemo,
		DisablerangeSource
	),
	feat(
		'disable-function',
		'Disable by function',
		'Disable weekends; optional <code>locale.firstDayOfWeek</code> via <code>flatpickrOptions</code>.',
		DisablefunctionDemo,
		DisablefunctionSource
	),
	feat(
		'enable-specific',
		'Enable specific dates',
		'<code>enable</code> whitelist of dates.',
		EnablespecificDemo,
		EnablespecificSource
	),
	feat(
		'enable-range',
		'Enable date ranges',
		'<code>enable</code> with a range object.',
		EnablerangeDemo,
		EnablerangeSource
	),
	feat(
		'enable-function',
		'Enable by function',
		'Only certain days pass the predicate.',
		EnablefunctionDemo,
		EnablefunctionSource
	),
	feat(
		'multiple',
		'Multiple dates',
		'<code>@mode="multiple"</code> and array <code>@value</code>.',
		MultipleDemo,
		MultipleSource
	),
	feat(
		'multiple-preload',
		'Preload multiple dates',
		'<code>defaultDate</code> array for multiple mode.',
		MultiplepreloadDemo,
		MultiplepreloadSource
	),
	feat(
		'multiple-conjunction',
		'Custom conjunction',
		'<code>conjunction</code> between dates in the input.',
		MultipleconjunctionDemo,
		MultipleconjunctionSource
	),
	feat(
		'datetime-limits',
		'DateTime with limited time',
		'<code>minTime</code> / <code>maxTime</code> when <code>enableTime</code> is on.',
		DatetimelimitsDemo,
		DatetimelimitsSource
	),
	feat(
		'inline',
		'Inline calendar',
		'<code>@inline={{true}}</code> always-visible calendar.',
		InlineDemo,
		InlineSource
	),
	feat(
		'week-numbers',
		'Week numbers',
		'<code>@weekNumbers={{true}}</code>.',
		WeeknumbersDemo,
		WeeknumbersSource
	),
	feat(
		'wrap-external',
		'Wrap + external elements',
		'<code>@showIcon</code> and <code>@showClearButton</code> (<code>wrap: true</code>).',
		WrapexternalDemo,
		WrapexternalSource
	),
	feat(
		'custom-parse-format',
		'Custom parse and format',
		'<code>parseDate</code> / <code>formatDate</code> via <code>flatpickrOptions</code> (no moment).',
		CustomparseformatDemo,
		CustomparseformatSource
	),
	feat(
		'invalid',
		'Invalid',
		'<code>@invalid</code> for validation styling.',
		InvalidDemo,
		InvalidSource
	),
	feat(
		'disabled',
		'Disabled',
		'<code>@disabled</code>.',
		DisabledDemo,
		DisabledSource
	),
	feat(
		'filled',
		'Filled',
		'<code>@filled</code> input group style.',
		FilledDemo,
		FilledSource
	),
	feat(
		'show-icon',
		'Icon trigger',
		'<code>@showIcon</code> only (toggle button).',
		ShowiconDemo,
		ShowiconSource
	)
];
