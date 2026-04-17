import QuillImport from 'quill';
import 'quill-mention/autoregister';
import { t } from './i18n';

// Quill v2 exports a default in most bundlers; keep this tolerant.
const Quill = QuillImport?.default ?? QuillImport;

const DEFAULT_FONT_SIZE_PERCENT = ['30%', '60%', '80%', false, '130%', '160%', '200%'];
const FONT_SIZE_PX = ['8px', '10px', '12px', '14px', '18px', '24px', '36px'];

const TOOLBAR_SETTINGS = {
	size: [{ size: DEFAULT_FONT_SIZE_PERCENT }],
	lineHeight: [{ 'line-height': [false, 1, 1.15, 1.5, 2, 'custom'] }],
	letterSpacing: [{ 'letter-spacing': [false, 1, 3, 5, 10, 'custom'] }],
	textTransform: [{ 'text-transform': [false, 'capitalize', 'uppercase', 'lowercase'] }],
	fontFamily: [
		{
			'font-family': [
				'var(--regular-font)',
				'var(--light-font)',
				'var(--medium-font)',
				'var(--bold-font)'
			]
		}
	],
	header: [{ header: [false, 2, 3, 4, 5] }],
	formats: ['bold', 'italic', 'underline', 'strike'],
	scripts: [{ script: 'sub' }, { script: 'super' }],
	colors: [{ color: [] }, { background: [] }],
	hr: [{ hr: [false, 1, 2, 3] }]
};

const SPECTRUM_COLORS = [
	['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff'],
	['#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff'],
	['#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff'],
	['#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2'],
	['#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466']
];
const ALL_COLORS = ['false', ...SPECTRUM_COLORS.flat(), 'custom'];

TOOLBAR_SETTINGS.colors = [{ color: ALL_COLORS }, { background: ALL_COLORS }];

export const TOOLBAR_OPTIONS = {
	prime: [
		[{ header: [1, 2, false] }],
		[{ font: [] }],
		['bold', 'italic', 'underline'],
		[{ color: [] }, { background: [] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ align: [] }],
		['link', 'image', 'code-block'],
		['clean']
	],
	all: [
		TOOLBAR_SETTINGS.header,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.fontFamily,
		TOOLBAR_SETTINGS.formats,
		[{ 'align-class': ['left', 'center', 'right', 'justify'] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ indent: '-1' }, { indent: '+1' }],
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.textTransform,
		TOOLBAR_SETTINGS.colors,
		['link', 'hr'],
		TOOLBAR_SETTINGS.scripts,
		['blockquote'],
		['clean']
	],
	allWithZia: [
		TOOLBAR_SETTINGS.header,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.fontFamily,
		TOOLBAR_SETTINGS.formats,
		[{ 'align-class': ['left', 'center', 'right', 'justify'] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ indent: '-1' }, { indent: '+1' }],
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.textTransform,
		TOOLBAR_SETTINGS.colors,
		['link', 'hr'],
		TOOLBAR_SETTINGS.scripts,
		['blockquote'],
		['clean'],
		['zia']
	],
	announcement: [
		TOOLBAR_SETTINGS.header,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.fontFamily,
		TOOLBAR_SETTINGS.formats,
		[{ 'align-class': ['left', 'center', 'right', 'justify'] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ indent: '-1' }, { indent: '+1' }],
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.textTransform,
		TOOLBAR_SETTINGS.colors,
		['link', 'hr'],
		['blockquote'],
		['clean'],
		['image']
	],
	emailV1: [
		TOOLBAR_SETTINGS.header,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.formats,
		[{ list: 'ordered' }, { list: 'bullet' }],
		TOOLBAR_SETTINGS.colors,
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.textTransform,
		['link', 'hr'],
		['clean']
	],
	email: [
		TOOLBAR_SETTINGS.header,
		[{ size: FONT_SIZE_PX }],
		TOOLBAR_SETTINGS.formats,
		[{ 'align-class': ['left', 'center', 'right'] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		TOOLBAR_SETTINGS.colors,
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.textTransform,
		['link', 'hr'],
		['clean']
	],
	header: [
		TOOLBAR_SETTINGS.formats,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.fontFamily,
		[{ 'align-class': ['left', 'center', 'right', 'justify'] }],
		TOOLBAR_SETTINGS.colors,
		TOOLBAR_SETTINGS.textTransform,
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.scripts,
		['clean']
	],
	headerWithZia: [
		TOOLBAR_SETTINGS.formats,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.fontFamily,
		[{ 'align-class': ['left', 'center', 'right', 'justify'] }],
		TOOLBAR_SETTINGS.colors,
		TOOLBAR_SETTINGS.textTransform,
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.scripts,
		['clean'],
		['zia']
	],
	lite: [
		TOOLBAR_SETTINGS.formats,
		TOOLBAR_SETTINGS.size,
		TOOLBAR_SETTINGS.fontFamily,
		[{ 'align-class': ['left', 'center', 'right', 'justify'] }],
		TOOLBAR_SETTINGS.colors,
		TOOLBAR_SETTINGS.textTransform,
		TOOLBAR_SETTINGS.lineHeight,
		TOOLBAR_SETTINGS.letterSpacing,
		TOOLBAR_SETTINGS.scripts,
		['blockquote'],
		['link', 'hr'],
		['clean']
	],
	superLite: [TOOLBAR_SETTINGS.formats, TOOLBAR_SETTINGS.colors, ['link'], ['clean']],
	formatOnly: [TOOLBAR_SETTINGS.formats, TOOLBAR_SETTINGS.colors, ['clean']]
};

// Prime-like default toolbar (kept for backwards compatibility when toolbarType is omitted).
export const DEFAULT_TOOLBAR = TOOLBAR_OPTIONS.header;

function getAllowedFormats(toolbarConfig) {
	const flattened = Array.isArray(toolbarConfig) ? toolbarConfig.flat() : [];
	const formats = flattened
		.map((item) =>
			item && typeof item === 'object' && !Array.isArray(item) ? Object.keys(item)[0] : item
		)
		.filter(Boolean)
		.filter((formatName) => !['clean', 'zia'].includes(formatName));
	return [...new Set(formats)];
}

let HAS_REGISTERED_EXTENSIONS = false;
function ensureQuillExtensionsRegistered() {
	if (HAS_REGISTERED_EXTENSIONS) return;
	HAS_REGISTERED_EXTENSIONS = true;

	// Size whitelist: allow percent and px.
	const SizeStyle = Quill.import('attributors/style/size');
	SizeStyle.whitelist = [...DEFAULT_FONT_SIZE_PERCENT, ...FONT_SIZE_PX];
	Quill.register(SizeStyle, true);

	// Align whitelist + align icon mapping.
	const AlignStyle = Quill.import('attributors/style/align');
	AlignStyle.whitelist = ['left', 'center', 'right', 'justify'];
	Quill.register(AlignStyle, true);

	const Icons = Quill.import('ui/icons');
	Icons.align.left = Icons.align[''];

	// Strike tag.
	const Strike = Quill.import('formats/strike');
	Strike.tagName = ['STRIKE'];
	Quill.register(Strike, true);

	// Align class attributor to match legacy ql-align behavior.
	const Parchment = Quill.import('parchment');
	const { ClassAttributor } = Parchment;
	const AlignClass = new ClassAttributor('align-class', 'ql-align', {
		scope: Parchment.Scope.BLOCK,
		whitelist: AlignStyle.whitelist
	});
	Quill.register(AlignClass, true);

	// HR blot.
	const BlockEmbed = Quill.import('blots/block/embed');
	class HrBlot extends BlockEmbed {
		static blotName = 'hr';
		static className = 'ql-hr';
		static tagName = 'hr';
		static create(value) {
			const node = super.create();
			if (value) node.className = `ql-hr-${value}`;
			return node;
		}
		static value(node) {
			return node.className;
		}
	}
	Quill.register(HrBlot);

	// Custom image: accept { url }.
	const Image = Quill.import('formats/image');
	class CustomImage extends Image {
		static create(value) {
			const node = super.create();
			const url = value?.url ?? value;
			url && node.setAttribute('src', url);
			node.setAttribute('width', '500');
			node.style.maxWidth = '100%';
			return node;
		}
		static value(node) {
			return { url: node.getAttribute('src') };
		}
	}
	Quill.register(CustomImage, true);

	// Extra attributors.
	const { StyleAttributor, Scope } = Parchment;
	Quill.register(
		new StyleAttributor('line-height', 'line-height', { scope: Scope.BLOCK, whitelist: null }),
		true
	);
	Quill.register(
		new StyleAttributor('letter-spacing', 'letter-spacing', {
			scope: Scope.INLINE,
			whitelist: null
		}),
		true
	);
	Quill.register(
		new StyleAttributor('font-family', 'font-family', {
			scope: Scope.INLINE,
			whitelist: TOOLBAR_SETTINGS.fontFamily[0]['font-family']
		}),
		true
	);
	Quill.register(
		new StyleAttributor('text-transform', 'text-transform', {
			scope: Scope.INLINE,
			whitelist: ['capitalize', 'uppercase', 'lowercase']
		}),
		true
	);

	// List style overrides (ported from legacy to support css var formatting on list items).
	overrideListStyles(Parchment);
}

const FORMAT_SETTING = {
	'letter-spacing': { unit: 'px', min: 0, max: 200, step: 1 },
	'line-height': { unit: '', min: 0, max: 10, step: 0.5 }
};

function overrideListStyles(Parchment) {
	if (!Parchment) return;

	const { StyleAttributor } = Parchment;
	if (!StyleAttributor) return;

	// Parchment 3 StyleAttributor uses node.style[camelCase] which cannot set CSS variables.
	// Patch only the css-var case, and only once per runtime.
	if (!StyleAttributor.__ulxCssVarPatchApplied) {
		const originalAdd = StyleAttributor.prototype.add;
		const originalRemove = StyleAttributor.prototype.remove;

		StyleAttributor.prototype.add = function (node, value) {
			if (this.keyName?.startsWith?.('--')) {
				if (!this.canAdd(node, value)) return false;
				node.style.setProperty(this.keyName, value);
				return true;
			}
			return originalAdd.call(this, node, value);
		};

		StyleAttributor.prototype.remove = function (node) {
			if (this.keyName?.startsWith?.('--')) {
				node.style.removeProperty(this.keyName);
				if (!node.getAttribute('style')) {
					node.removeAttribute('style');
				}
				return;
			}
			return originalRemove.call(this, node);
		};

		StyleAttributor.__ulxCssVarPatchApplied = true;
	}

	class CustomColor extends StyleAttributor {
		value(node) {
			return Quill.import('attributors/style/color').value(node);
		}
	}

	class CustomSize extends StyleAttributor {
		value(node) {
			return node.style.getPropertyValue(this.keyName);
		}
	}

	const customColorAttributor = new CustomColor('custom-color', 'color', {
		scope: Parchment.Scope.BLOCK
	});

	const customSizeAttributor = new CustomSize('custom-size', '--ql-bullet-size', {
		scope: Parchment.Scope.BLOCK
	});

	Quill.register(customSizeAttributor);
	Quill.register(customColorAttributor);

	const getUniqueAttrVal = (node, attrName) => {
		const values = [];
		let child = node?.children?.head ?? null;
		while (child) {
			const attr = child.attributes?.attributes?.[attrName];
			values.push(attr ? attr.value(child.domNode) : '');
			child = child.next;
		}
		return [...new Set(values)].filter(Boolean)[0];
	};

	// Quill 2 exports list item as the default export from 'formats/list'.
	const ListItem = Quill.import('formats/list');
	if (!ListItem) return;

	class ListItemExt extends ListItem {
		optimize(context) {
			super.optimize(context);

			const uniqueColor = getUniqueAttrVal(this, 'color');
			const uniqueSize = getUniqueAttrVal(this, 'size');

			const child = this.children?.head;
			const attributes = child?.attributes;
			if (!child || !attributes) return;

			if (uniqueColor && attributes.attributes?.color) {
				let color = attributes.attributes.color.value(child.domNode);
				color && color.includes('var') && (color = null);
				this.format('custom-color', color);
			} else if (this.attributes?.attributes?.hasOwnProperty('custom-color')) {
				this.format('custom-color', null);
			}

			if (uniqueSize && attributes.attributes?.size) {
				const font = attributes.attributes.size.value(child.domNode);
				const customSize = this.attributes?.attributes?.['custom-size'];
				if (customSize) {
					const currentVal = customSize.value(this.domNode);
					if (currentVal && currentVal.trim() !== font) {
						this.format('custom-size', font);
					}
				} else {
					this.format('custom-size', font);
				}
			} else if (this.attributes?.attributes?.hasOwnProperty('custom-size')) {
				this.format('custom-size', null);
			}
		}
	}

	Quill.register(ListItemExt);
}

/**
 * Create a Quill editor instance with ULX-friendly defaults.
 *
 * @param {HTMLElement} contentElement - Element that becomes the Quill editor surface.
 * @param {Object} [options]
 * @param {HTMLElement|Array|false} [options.toolbar] - Toolbar config (array), DOM element, or false to disable.
 * @param {string} [options.toolbarType] - Named toolbar preset: all, allWithZia, announcement, emailV1, email, header, headerWithZia, lite, superLite, formatOnly.
 * @param {string} [options.placeholder]
 * @param {boolean} [options.readOnly=false]
 * @param {string} [options.theme="snow"]
 * @param {Object} [options.modules]
 * @param {string[]} [options.formats]
 * @param {number} [options.maxLength]
 * @param {boolean} [options.ignoreMentions=false]
 * @param {Array<{ id: string, value: string }>} [options.suggestionWords]
 * @param {Function} [options.openImagePicker] - Optional async image picker. Should resolve to an array of { [id]: url } or an array of urls.
 * @param {Function} [options.processWithZia] - Optional async text processor for zia handler.
 * @param {Function} [options.onImagePasteBlocked] - Called when an IMG paste is blocked.
 * @param {Function} [options.requestNumericValue] - Async handler for custom numeric formats. ({ format, currentValue, setting }) => Promise<number|null>
 * @returns {import('quill').Quill}
 */
export function createQuillInstance(
	contentElement,
	{
		toolbar,
		toolbarType,
		placeholder,
		readOnly = false,
		theme = 'snow',
		modules = {},
		formats,
		maxLength,
		ignoreMentions = false,
		suggestionWords = [],
		openImagePicker,
		processWithZia,
		onImagePasteBlocked,
		requestNumericValue
	} = {}
) {
	if (!contentElement) {
		throw new Error('[UlxRichTextEditor] Missing content element for Quill init.');
	}

	ensureQuillExtensionsRegistered();

	const resolvedToolbarType = toolbarType ?? 'header';
	const resolvedToolbarPreset = TOOLBAR_OPTIONS[resolvedToolbarType] ?? DEFAULT_TOOLBAR;

	const resolvedToolbar = Object.prototype.hasOwnProperty.call(modules, 'toolbar')
		? modules.toolbar
		: toolbar === undefined
			? resolvedToolbarPreset
			: toolbar;

	const resolvedMention =
		ignoreMentions || Object.prototype.hasOwnProperty.call(modules, 'mention')
			? modules.mention
			: {
					allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
					mentionDenotationChars: ['{'],
					showDenotationChar: false,
					getAllValues: () => suggestionWords,
					source: (searchTerm, renderList, mentionChar) => {
						const values = mentionChar === '{' ? suggestionWords : [];
						if (!searchTerm?.length) {
							renderList(values, searchTerm);
							return;
						}
						const matches = values.filter((v) =>
							String(v?.value ?? '')
								.toLowerCase()
								.includes(String(searchTerm).toLowerCase())
						);
						renderList(matches, searchTerm);
					},
					onSelect: (item, insertItem) => insertItem(item)
				};

	const configuration = {
		modules: {
			...modules,
			toolbar: resolvedToolbar,
			...(!ignoreMentions && resolvedMention ? { mention: resolvedMention } : {})
		},
		placeholder,
		readOnly,
		theme,
		formats: formats ?? [
			...new Set(
				getAllowedFormats(
					(Array.isArray(resolvedToolbarPreset) ? resolvedToolbarPreset : DEFAULT_TOOLBAR).concat({
						mention: true
					})
				).concat(['custom-color', 'custom-size'])
			)
		]
	};

	const quill = new Quill(contentElement, configuration);

	function handleCustomFormat(format, value) {
		const formatVals = FORMAT_SETTING[format];
		if (!formatVals) return;

		const unit = formatVals.unit;
		if (value === 'custom') {
			const range = quill.getSelection(true);
			const formats = quill.getFormat(range);
			const currentValueWithUnit = formats?.[format];
			const currentValue = currentValueWithUnit?.replace?.(unit, '') ?? null;

			const ask = requestNumericValue
				? requestNumericValue({ format, currentValue, setting: formatVals })
				: Promise.resolve(
						Number(
							window.prompt(
								t(`lbl.editor.${format.replace('-', '.')}`) ?? t('lbl.enter.value'),
								currentValue ?? ''
							)
						)
					);

			Promise.resolve(ask)
				.then((customValue) => {
					if (
						customValue === null ||
						customValue === undefined ||
						customValue === '' ||
						Number.isNaN(customValue)
					) {
						quill.setSelection(range, 'silent');
						return;
					}
					quill.setSelection(range, 'silent');
					quill.format(format, `${customValue}${unit}`);
				})
				.catch(() => {
					quill.setSelection(range, 'silent');
				});
		} else {
			quill.format(format, value ? `${value}${unit}` : false);
		}
	}

	// Toolbar handlers (registered after init; supports toolbar configs provided as array or preset).
	const toolbarModule = quill.getModule?.('toolbar');
	if (toolbarModule && resolvedToolbar !== false) {
		toolbarModule.addHandler('hr', (type) => {
			const range = quill.getSelection(true);
			quill.insertText(range.index, '\n', Quill.sources.USER);
			quill.insertEmbed(range.index + 1, 'hr', type, Quill.sources.USER);
			quill.setSelection(range.index + 2, Quill.sources.SILENT);
		});
		toolbarModule.addHandler('zia', () => {
			const range = quill.getSelection(true);
			if (!range || range.length === 0) return;
			const selectedText = quill.getText(range.index, range.length);
			if (!processWithZia) return;

			Promise.resolve(processWithZia(selectedText))
				.then((resultText) => {
					if (!resultText) return;
					quill.setSelection(range.index, range.length, Quill.sources.SILENT);
					quill.deleteText(range.index, range.length, Quill.sources.USER);
					quill.insertText(range.index, resultText, Quill.sources.USER);
					quill.setSelection(range.index + resultText.length, 0, Quill.sources.SILENT);
				})
				.catch(() => {});
		});
		toolbarModule.addHandler('line-height', (value) => handleCustomFormat('line-height', value));
		toolbarModule.addHandler('letter-spacing', (value) =>
			handleCustomFormat('letter-spacing', value)
		);
		toolbarModule.addHandler('image', () => {
			const savedRange = quill.getSelection(true);
			if (!openImagePicker) return;

			Promise.resolve(openImagePicker())
				.then((docsAndUrls) => {
					let index = savedRange ? savedRange.index : quill.getLength();
					const list = Array.isArray(docsAndUrls) ? docsAndUrls : [];
					list.forEach((doc) => {
						const imageUrl = typeof doc === 'string' ? doc : Object.values(doc ?? {})[0];
						if (!imageUrl) return;
						quill.insertEmbed(index, 'image', { url: imageUrl }, Quill.sources.USER);
						index++;
					});
					quill.setSelection(index);
				})
				.catch(() => {});
		});

		const openNativeColorPicker = (format) => {
			const input = document.createElement('input');
			input.type = 'color';
			input.style.position = 'fixed';
			input.style.left = '-9999px';
			input.style.width = '1px';
			input.style.height = '1px';
			document.body.appendChild(input);

			const cleanup = () => {
				input.removeEventListener('change', handleChange);
				input.remove();
			};

			const handleChange = () => {
				const value = input.value;
				value && quill.format(format, value);
				cleanup();
			};

			input.addEventListener('change', handleChange, { once: true });
			input.click();
			setTimeout(() => cleanup(), 30_000);
		};

		toolbarModule.addHandler('color', (value) => {
			if (value === 'custom') return openNativeColorPicker('color');
			return quill.format('color', value === 'false' ? false : value);
		});
		toolbarModule.addHandler('background', (value) => {
			if (value === 'custom') return openNativeColorPicker('background');
			return quill.format('background', value === 'false' ? false : value);
		});
	}

	function getToolbarContainer() {
		const module = quill.getModule?.('toolbar');
		const container = module?.container;
		return container instanceof HTMLElement ? container : null;
	}

	function getToolbarButtonText(format, value) {
		if (format === 'bold') return t('lbl.editor.toolbar.bold');
		if (format === 'italic') return t('lbl.editor.toolbar.italic');
		if (format === 'underline') return t('lbl.editor.toolbar.underline');
		if (format === 'strike') return t('lbl.editor.toolbar.strike');
		if (format === 'link') return t('lbl.editor.toolbar.link');
		if (format === 'image') return t('lbl.editor.toolbar.image');
		if (format === 'code-block') return t('lbl.editor.toolbar.code.block');
		if (format === 'blockquote') return t('lbl.editor.toolbar.blockquote');
		if (format === 'clean') return t('lbl.editor.toolbar.clean');
		if (format === 'zia') return t('lbl.editor.toolbar.zia');

		if (format === 'script') {
			if (value === 'sub') return t('lbl.editor.toolbar.subscript');
			if (value === 'super') return t('lbl.editor.toolbar.superscript');
		}

		if (format === 'list') {
			if (value === 'ordered') return t('lbl.editor.toolbar.list.ordered');
			if (value === 'bullet') return t('lbl.editor.toolbar.list.bullet');
		}

		if (format === 'indent') {
			if (value === '+1' || value === 1 || value === '1') return t('lbl.editor.toolbar.indent.increase');
			if (value === '-1' || value === -1 || value === '-1') return t('lbl.editor.toolbar.indent.decrease');
		}

		return null;
	}

	function getPickerLabelKey(pickerClassName) {
		if (pickerClassName === 'header') return 'lbl.editor.toolbar.picker.header';
		if (pickerClassName === 'size') return 'lbl.editor.toolbar.picker.size';
		if (pickerClassName === 'font') return 'lbl.editor.toolbar.picker.font';
		if (pickerClassName === 'font-family') return 'lbl.editor.toolbar.picker.font.family';
		if (pickerClassName === 'align' || pickerClassName === 'align-class') {
			return 'lbl.editor.toolbar.picker.align';
		}
		if (pickerClassName === 'color') return 'lbl.editor.toolbar.picker.color';
		if (pickerClassName === 'background') return 'lbl.editor.toolbar.picker.background';
		if (pickerClassName === 'text-transform') return 'lbl.editor.toolbar.picker.text.transform';
		if (pickerClassName === 'line-height') return 'lbl.editor.toolbar.picker.line.height';
		if (pickerClassName === 'letter-spacing') return 'lbl.editor.toolbar.picker.letter.spacing';
		if (pickerClassName === 'hr') return 'lbl.editor.toolbar.hr';
		return null;
	}

	function applyToolbarTitlesAndA11y() {
		const toolbar = getToolbarContainer();
		if (!toolbar) return;

		toolbar.setAttribute('aria-label', t('lbl.editor.toolbar.region'));

		const controls = toolbar.querySelectorAll('button, .ql-picker');
		controls.forEach((control) => {
			if (!(control instanceof HTMLElement)) return;

			// Buttons: apply translated title + aria-label.
			if (control.tagName === 'BUTTON') {
				const formatClass = Array.from(control.classList).find((c) => c.startsWith('ql-'));
				const format = formatClass ? formatClass.slice('ql-'.length) : null;
				if (!format) return;

				const value = control.getAttribute('value') ?? control.value ?? null;
				const label = getToolbarButtonText(format, value);
				if (!label) return;

				control.setAttribute('title', label);
				control.setAttribute('aria-label', label);
				return;
			}

			// Pickers: apply translated title + aria-label on the interactive label.
			if (control.classList.contains('ql-picker')) {
				const pickerClass = Array.from(control.classList).find(
					(c) => c.startsWith('ql-') && c !== 'ql-picker'
				);
				const pickerName = pickerClass ? pickerClass.slice('ql-'.length) : null;
				if (!pickerName) return;

				const pickerKey = getPickerLabelKey(pickerName);
				if (!pickerKey) return;

				const pickerLabel = t(pickerKey);
				const labelEl = control.querySelector('.ql-picker-label');
				if (!(labelEl instanceof HTMLElement)) return;

				const currentValueLabel = labelEl.getAttribute('data-label');
				const ariaLabel = currentValueLabel ? `${pickerLabel}: ${currentValueLabel}` : pickerLabel;

				labelEl.setAttribute('title', pickerLabel);
				labelEl.setAttribute('aria-label', ariaLabel);
			}
		});
	}

	let toolbarA11yUpdateScheduled = false;
	function scheduleToolbarA11yUpdate() {
		if (toolbarA11yUpdateScheduled) return;
		toolbarA11yUpdateScheduled = true;
		requestAnimationFrame(() => {
			toolbarA11yUpdateScheduled = false;
			applyToolbarTitlesAndA11y();
		});
	}

	// Apply once after Quill + Snow theme initialize, then keep picker labels in sync.
	resolvedToolbar !== false && applyToolbarTitlesAndA11y();
	resolvedToolbar !== false && quill.on?.('editor-change', scheduleToolbarA11yUpdate);

	// Mentions: if quill-mention is not registered, Quill will throw during init.
	// Consumers should add quill-mention and register it; otherwise set @ignoreMentions={{true}}.

	// Prevent layout-breaking inline CSS vars from being pasted.
	// (Ported from legacy rte-util.js clipboard matcher behavior.)
	const Delta = Quill.import('delta');
	quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
		const style = node?.style;
		if (!style) return delta;

		const oldStyles = {};
		for (let i = 0; i < style.length; i++) {
			const propertyName = style[i];
			const propertyValue = style.getPropertyValue(propertyName);
			if (
				propertyValue &&
				(typeof propertyValue === 'string' || propertyValue instanceof String) &&
				propertyValue.includes('var')
			) {
				oldStyles[propertyName] = null;
			}
		}

		return delta.compose(new Delta().retain(delta.length(), oldStyles));
	});

	// Block IMG pastes (legacy behavior showed a toast; here we surface a callback hook).
	quill.clipboard.addMatcher('IMG', () => {
		onImagePasteBlocked?.();
		return new Delta();
	});

	// Max length enforcement (matches PrimeReact behavior).
	if (typeof maxLength === 'number' && Number.isFinite(maxLength)) {
		quill.on('text-change', () => {
			const length = quill.getLength();
			if (length > maxLength) {
				quill.deleteText(maxLength, length);
			}
		});
	}

	// Prevent scroll jumps on focus (ported from legacy rte-util.js).
	const editor = contentElement.querySelector('.ql-editor');
	if (editor) {
		editor._focus = editor.focus;
		editor.focus = function () {
			const x = window.scrollX;
			const y = window.scrollY;
			editor._focus?.call(editor);
			window.scrollTo(x, y);
		};
	}

	quill.destroy = function () {
		if (editor?._focus) {
			delete editor._focus;
		}
		quill.destroy = null;
	};

	return quill;
}
