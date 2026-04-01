import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const STORAGE_KEY = 'ulx-a11y-settings';

// All a11y classes use the ULX prefix from `prefix-vars.overrides.less`
const A11Y_PREFIX = 'ulx-';

const TEXT_SPACE_MEDIUM = `${A11Y_PREFIX}text-space-medium`;
const TEXT_SPACE_LARGE = `${A11Y_PREFIX}text-space-large`;

const DEFAULT_VALUES = {
	contrast: 100,
	readingGuide: 10,
	readingLine: 400
};

/**
 * AccessibilityService manages global accessibility helpers such as
 * contrast, saturation, text size/spacing, reading guide/line,
 * big cursor, link underline, critical info and emphasize focus.
 *
 * It relies on the global ULX a11y styles defined in `a11y.less`
 * and only toggles the corresponding classes / CSS variables.
 *
 * @class AccessibilityService
 * @extends Service
 */
export default class AccessibilityService extends Service {
	/**
	 * Class names used by the ULX a11y styles.
	 */
	classNames = {
		readingGuide: `${A11Y_PREFIX}reading-guide`,
		bigCursor: `${A11Y_PREFIX}big-cursor`,
		criticalInfo: `${A11Y_PREFIX}critical-info`,
		underlineLink: `${A11Y_PREFIX}link-underline`,
		emphasizeFocus: `${A11Y_PREFIX}emphasize-focus`,
		dyslexicFont: 'dyslexic',
		accFeature: `${A11Y_PREFIX}acc-feature`,
		readingLine: `${A11Y_PREFIX}reading-line`,
		lowContrast: `${A11Y_PREFIX}low-contrast`,
		highContrast: `${A11Y_PREFIX}high-contrast`,
		toggleLabelStatus: `${A11Y_PREFIX}toggle-status`,
		textSpaceMedium: TEXT_SPACE_MEDIUM,
		textSpaceLarge: TEXT_SPACE_LARGE
	};

	TEXT_SPACING = [
		{ label: 'lbl.default', classname: '', value: 1 },
		{ label: 'label.medium', classname: TEXT_SPACE_MEDIUM, value: 2 },
		{ label: 'lbl.large', classname: TEXT_SPACE_LARGE, value: 3 }
	];

	@tracked propsValues = null;
	@tracked readingLineLastX;
	@tracked readingLineLastY;
	@tracked readingGuideLastX;
	@tracked readingGuideLastY;

	get defaultAccessibilityProps() {
		return {
			bigCursor: false,
			underlineLink: false,
			highLightCriticalInfo: false,
			dyslexicFont: false,
			emphasizeFocus: false,
			selectedTextSize: 1,
			selectedContrast: '100%',
			selectedSaturation: '100',
			selectedColor: 2,
			selectedColorValue: { '--ulx-ba-sepia': '0%', '--ulx-ba-grayscale': '0%' },
			readingGuideValue: 0,
			readingLineValue: 0,
			selectedScrZoomValue: 1,
			toggleSwitchLabel: false,
			selectedTextSpacing: 1
		};
	}

	get accessibilityProperties() {
		const stored = this.getAccessibilityProps();
		const base = this.defaultAccessibilityProps;
		if (stored) {
			return { ...base, ...stored, ...this.propsValues };
		}
		return { ...base, ...this.propsValues };
	}

	setAccessibilityProp(key, value) {
		let props = this.propsValues;
		if (!props) {
			const stored = this.getAccessibilityProps();
			props = stored ? stored : this.defaultAccessibilityProps;
		}

		const updated = {
			...props,
			[key]: value
		};

		this.propsValues = updated;

		if (typeof window !== 'undefined' && window.localStorage) {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
		}
	}

	getAccessibilityProps() {
		if (typeof window === 'undefined' || !window.localStorage) {
			return null;
		}
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) : null;
		} catch {
			return null;
		}
	}

	assignValues(object, values) {
		Object.assign(object, values);
	}

	_createElement(object) {
		const ele = document.createElement(object.tagName);
		const eleAttributes = object.attributes ? Object.keys(object.attributes) : [];
		eleAttributes.forEach((key) => {
			ele.setAttribute(key, object.attributes[key]);
		});
		if (object.style) {
			this.assignValues(ele.style, object.style);
		}
		return ele;
	}

	createReadingGuideEle(heightValue) {
		const clientXValue = (window.innerHeight * heightValue) / 100;
		const top = ((this.readingGuideLastY - clientXValue) / window.innerHeight) * 100;
		const bottom =
			100 - (((this.readingGuideLastY + clientXValue) / window.innerHeight) * 100).toFixed();
		const divHeight = 70 - heightValue * 2;
		const divTop = top ? top : 30;
		const divBottom = bottom ? bottom : divHeight;

		this.assignValues(this, {
			readingGuide: this._createElement({
				tagName: 'div',
				style: { display: 'block' },
				attributes: { class: this.classNames.readingGuide }
			}),
			topLayer: this._createElement({
				tagName: 'div',
				style: { height: `${divTop.toFixed()}%` },
				attributes: { class: 'top-layer' }
			}),
			bottomLayer: this._createElement({
				tagName: 'div',
				style: { height: `${divBottom}%` },
				attributes: { class: 'bottom-layer' }
			})
		});

		this.readingGuide.append(this.topLayer);
		this.readingGuide.append(this.bottomLayer);
		return this.readingGuide;
	}

	setStyleProperties(element, objects) {
		objects.forEach((object) => {
			element.style.setProperty(object.properties, object.value);
		});
	}

	initReadingGuideEvent(body, className, value) {
		const observer = new MutationObserver(() => {
			const injectedAttr = 'reading-guide-injected';
			const dialogList = Array.from(document.querySelectorAll('dialog'));

			if (dialogList.length) {
				const topLayerDialogElem = dialogList[dialogList.length - 1];
				const prevDialogElem = dialogList[dialogList.length - 2];
				prevDialogElem?.removeAttribute(injectedAttr);

				if (!topLayerDialogElem.hasAttribute(injectedAttr)) {
					this.checkAndAddReadingGuideElement(value, topLayerDialogElem);
					topLayerDialogElem.setAttribute(injectedAttr, 'true');
					document.body.removeAttribute(injectedAttr);
				}
			} else if (!document.body.getAttribute(injectedAttr)) {
				this.checkAndAddReadingGuideElement(value, document.body);
				document.body.setAttribute(injectedAttr, 'true');
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});

		body.addEventListener('mousemove', (event) => {
			const clientXValue = (window.innerHeight * value) / 100;
			const clientY = event.clientY;
			const top = (((clientY - clientXValue) / window.innerHeight) * 100).toFixed();
			const bottom = 100 - (((clientY + clientXValue) / window.innerHeight) * 100).toFixed();
			const topLayer = document.querySelector(`.${className} .top-layer`);
			const bottomLayer = document.querySelector(`.${className} .bottom-layer`);

			if (topLayer && bottomLayer) {
				topLayer.style.setProperty('height', `${top}%`);
				bottomLayer.style.setProperty('height', `${bottom}%`);
			}

			this.readingGuideLastX = event.clientX;
			this.readingGuideLastY = event.clientY;
		});
	}

	checkAndAddReadingGuideElement(rdGuideHeight, element) {
		const guideEle = document.querySelector(`.${this.classNames.readingGuide}`);
		const isChecked = this.accessibilityProperties.readingGuideValue;

		if (guideEle) {
			guideEle.remove();
		}

		if (rdGuideHeight && isChecked) {
			element.append(this.createReadingGuideEle(rdGuideHeight));
		}
	}

	@action
	setContrast(contrastVal) {
		const htmlElement = document.documentElement;

		htmlElement.classList.add(this.classNames.accFeature);
		this.setStyleProperties(htmlElement, [
			{
				properties: '--ulx-ba-contrast',
				value: contrastVal
			}
		]);

		this.addContrastClass(contrastVal);
		this.setAccessibilityProp('selectedContrast', contrastVal);
	}

	addContrastClass(contrastVal) {
		const contrastValue = parseInt(contrastVal, 10);
		const bodyClasses = document.body.classList;
		const { lowContrast, highContrast } = this.classNames;

		bodyClasses.remove(lowContrast, highContrast);

		if (contrastValue > DEFAULT_VALUES.contrast) {
			bodyClasses.add(highContrast);
		} else if (contrastValue < DEFAULT_VALUES.contrast) {
			bodyClasses.add(lowContrast);
		}
	}

	@action
	setSaturationValue(saturationVal) {
		const htmlElement = document.documentElement;

		htmlElement.classList.add(this.classNames.accFeature);
		htmlElement.style.setProperty('--ulx-ba-saturate', `${saturationVal}%`);
		this.setAccessibilityProp('selectedSaturation', saturationVal);
	}

	@action
	checkAndAddCursor(state) {
		const body = document.body.classList;

		if (state) {
			body.add(this.classNames.bigCursor);
		} else {
			body.remove(this.classNames.bigCursor);
		}

		this.setAccessibilityProp('bigCursor', state);
	}

	@action
	setScrZoomVal(zoomValue) {
		const body = document.body;

		body.style.setProperty('zoom', zoomValue);

		if (zoomValue < 1) {
			body.classList.add('screen-zooming-size0');
		} else {
			body.classList.remove('screen-zooming-size0');
		}

		body.classList.remove(
			`screen-zooming-size${this.accessibilityProperties.selectedScrZoomValue.toFixed().replace('.', '-')}`
		);

		body.classList.add(`screen-zooming-size${zoomValue.toFixed().replace('.', '-')}`);
		this.setAccessibilityProp('selectedScrZoomValue', zoomValue);
	}

	@action
	checkAndAddUnderline(state) {
		const body = document.body.classList;

		if (state) {
			body.add(this.classNames.underlineLink);
		} else {
			body.remove(this.classNames.underlineLink);
		}

		this.setAccessibilityProp('underlineLink', state);
	}

	@action
	checkAndUpdateToggleStatusLabel(state) {
		const body = document.body.classList;

		if (state) {
			body.add(this.classNames.toggleLabelStatus);
		} else {
			body.remove(this.classNames.toggleLabelStatus);
		}

		this.setAccessibilityProp('toggleSwitchLabel', state);
	}

	@action
	enableEmphasizeFocus(state) {
		const body = document.body.classList;

		if (state) {
			body.add(this.classNames.emphasizeFocus);
		} else {
			body.remove(this.classNames.emphasizeFocus);
		}

		this.setAccessibilityProp('emphasizeFocus', state);
	}

	@action
	setColor(colorObj) {
		const html = document.documentElement;

		const sepiaValue = colorObj?.cssProp?.['--ulx-ba-sepia'] ?? '0%';
		const grayscaleValue = colorObj?.cssProp?.['--ulx-ba-grayscale'] ?? '0%';

		html.classList.add(this.classNames.accFeature);
		this.setStyleProperties(html, [
			{
				properties: '--ulx-ba-sepia',
				value: sepiaValue
			},
			{
				properties: '--ulx-ba-grayscale',
				value: grayscaleValue
			}
		]);

		this.setAccessibilityProp('selectedColor', colorObj.value);
		this.setAccessibilityProp('selectedColorValue', {
			'--ulx-ba-sepia': sepiaValue,
			'--ulx-ba-grayscale': grayscaleValue
		});
	}

	@action
	addReadingLine(value, isChecked) {
		const lineValue = value && isChecked ? value : 0;
		const body = document.body;

		this.setAccessibilityProp('readingLineValue', lineValue);

		if (lineValue) {
			this.createReadingLineEle(lineValue, body);

			document.addEventListener('mousemove', (event) => {
				const currentReadingLine = document.querySelector(`.${this.classNames.readingLine}`);

				if (currentReadingLine) {
					this.readingLineLastX = event.clientX;
					this.readingLineLastY = event.clientY;
					currentReadingLine.style.left = `${event.clientX - currentReadingLine.offsetWidth / 2}px`;
					currentReadingLine.style.top = `${event.clientY - currentReadingLine.offsetHeight / 2}px`;
				}
			});

			const observer = new MutationObserver(() => {
				const injectedAttr = 'reading-line-injected';
				const dialogs = Array.from(document.querySelectorAll('dialog'));

				if (dialogs.length) {
					const topDialog = dialogs[dialogs.length - 1];
					const previousDialog = dialogs[dialogs.length - 2];

					previousDialog?.removeAttribute(injectedAttr);

					if (!topDialog.getAttribute(injectedAttr)) {
						this.createReadingLineEle(lineValue, topDialog);
						topDialog.setAttribute(injectedAttr, 'true');
						document.body.removeAttribute(injectedAttr);
					}
				} else {
					const bodyReadingLine = document.querySelector(`.${this.classNames.readingLine}`);

					if (!bodyReadingLine) {
						this.createReadingLineEle(lineValue, document.body);
						document.body.setAttribute(injectedAttr, 'true');
					}
				}
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: ['open']
			});
		} else {
			const readingLines = document.querySelectorAll(`.${this.classNames.readingLine}`);
			readingLines.forEach((line) => line.remove());
		}
	}

	createReadingLineEle(lineValue, element) {
		const lineEle = document.querySelector(`.${this.classNames.readingLine}`);
		const isChecked = this.accessibilityProperties.readingLineValue;

		if (lineEle) {
			lineEle.remove();
		}

		if (isChecked) {
			const readingLine = document.createElement('div');
			readingLine.classList.add(this.classNames.readingLine);

			this.setStyleProperties(readingLine, [
				{
					properties: 'width',
					value: `${lineValue}px`
				}
			]);

			const cursor = document.createElement('div');
			cursor.classList.add('middle-arrow');
			readingLine.append(cursor);
			readingLine.style.position = 'fixed';

			if (this.readingLineLastX && this.readingLineLastY) {
				readingLine.style.left = `${this.readingLineLastX - lineValue / 2}px`;
				readingLine.style.top = `${this.readingLineLastY - cursor.offsetHeight / 2}px`;
			}

			element.appendChild(readingLine);
		}
	}

	setContrastSaturateColor(element, properties) {
		const sepiaValue = properties?.selectedColorValue?.['--ulx-ba-sepia'] ?? '0%';
		const grayscaleValue = properties?.selectedColorValue?.['--ulx-ba-grayscale'] ?? '0%';

		this.setStyleProperties(element, [
			{
				properties: '--ulx-ba-contrast',
				value: properties.selectedContrast
			},
			{
				properties: '--ulx-ba-saturate',
				value: `${properties.selectedSaturation}%`
			},
			{
				properties: '--ulx-ba-sepia',
				value: sepiaValue
			},
			{
				properties: '--ulx-ba-grayscale',
				value: grayscaleValue
			}
		]);
	}

	getCurrentTextSpacing() {
		const { selectedTextSpacing } = this.accessibilityProperties;
		const currentTextSpacing = this.TEXT_SPACING.find((item) => item.value === selectedTextSpacing);

		return currentTextSpacing ? currentTextSpacing.classname : null;
	}

	@action
	setTextSize(textVal) {
		const body = document.body;
		const html = document.documentElement;

		this.setStyleProperties(html, [
			{
				properties: '--ulx-global-text-size',
				value: textVal
			}
		]);

		body.classList.remove(
			`${A11Y_PREFIX}global-text-size${this.accessibilityProperties.selectedTextSize
				.toFixed(1)
				.replace('.', '-')}`
		);

		body.classList.add(`${A11Y_PREFIX}global-text-size${textVal.toFixed(1).replace('.', '-')}`);
		this.setAccessibilityProp('selectedTextSize', textVal);
	}

	@action
	setTextSpacing(textSpacing) {
		const body = document.body;
		const currentTextSpacingClass = this.getCurrentTextSpacing();

		if (currentTextSpacingClass) {
			body.classList.remove(currentTextSpacingClass);
		}

		if (textSpacing.classname) {
			body.classList.add(textSpacing.classname);
		}

		this.setAccessibilityProp('selectedTextSpacing', textSpacing.value);
	}

	@action
	addDyslexicFont(value) {
		const body = document.body.classList;

		if (value) {
			body.add(this.classNames.dyslexicFont);
		} else {
			body.remove(this.classNames.dyslexicFont);
		}

		this.setAccessibilityProp('dyslexicFont', value);
	}

	@action
	addReadingGuide(value, isChecked) {
		const rdGuideHeight = value && isChecked ? value : 0;
		const body = document.body;

		this.setAccessibilityProp('readingGuideValue', rdGuideHeight);
		this.checkAndAddReadingGuideElement(rdGuideHeight, body);

		if (rdGuideHeight) {
			this.initReadingGuideEvent(body, this.classNames.readingGuide, rdGuideHeight);
		}
	}

	@action
	setCriticalInfo(state) {
		const body = document.body;
		const infoClass = this.classNames.criticalInfo;

		if (state) {
			body.classList.add(infoClass);
		} else {
			body.classList.remove(infoClass);
		}

		this.setAccessibilityProp('highLightCriticalInfo', state);
	}

	setUserA11yProps() {
		const body = document.body;
		const html = document.documentElement;
		const accessibilityProps = this.getAccessibilityProps();

		if (!accessibilityProps) {
			return;
		}

		if (accessibilityProps.bigCursor) {
			body.classList.add(this.classNames.bigCursor);
		}

		this.addContrastClass(accessibilityProps.selectedContrast);
		this.setContrastSaturateColor(html, accessibilityProps);

		if (accessibilityProps.readingGuideValue) {
			this.checkAndAddReadingGuideElement(accessibilityProps.readingGuideValue, body);
			this.initReadingGuideEvent(
				body,
				this.classNames.readingGuide,
				accessibilityProps.readingGuideValue
			);
		}

		html.classList.add(this.classNames.accFeature);

		if (accessibilityProps.underlineLink) {
			body.classList.add(this.classNames.underlineLink);
		}

		if (accessibilityProps.selectedScrZoomValue) {
			body.style.setProperty('zoom', accessibilityProps.selectedScrZoomValue);
			body.classList.add(
				`screen-zooming-size${accessibilityProps.selectedScrZoomValue.toFixed().replace('.', '-')}`
			);
		}

		if (accessibilityProps.selectedTextSize) {
			this.setStyleProperties(html, [
				{
					properties: '--ulx-global-text-size',
					value: accessibilityProps.selectedTextSize
				}
			]);

			body.classList.add(
				`${A11Y_PREFIX}global-text-size${accessibilityProps.selectedTextSize
					.toFixed(1)
					.replace('.', '-')}`
			);
		}

		if (accessibilityProps.dyslexicFont) {
			body.classList.add(this.classNames.dyslexicFont);
		}

		if (accessibilityProps.readingLineValue) {
			this.addReadingLine(accessibilityProps.readingLineValue, true);
		}

		if (accessibilityProps.highLightCriticalInfo) {
			body.classList.add(this.classNames.criticalInfo);
		}

		if (accessibilityProps.emphasizeFocus) {
			body.classList.add(this.classNames.emphasizeFocus);
		}

		if (accessibilityProps.toggleSwitchLabel) {
			body.classList.add(this.classNames.toggleLabelStatus);
		}

		const textSpacingClass = this.getCurrentTextSpacing();

		if (textSpacingClass) {
			body.classList.add(textSpacingClass);
		}
	}

	resetA11yProps(accessibilityProperties) {
		const body = document.body;
		const html = document.documentElement;
		const accessibilityProps = this.defaultAccessibilityProps;

		this.propsValues = accessibilityProps;

		if (typeof window !== 'undefined' && window.localStorage) {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(accessibilityProps));
		}

		body.classList.remove(
			this.classNames.bigCursor,
			this.classNames.underlineLink,
			this.classNames.dyslexicFont,
			this.classNames.emphasizeFocus,
			this.classNames.criticalInfo,
			this.classNames.lowContrast,
			this.classNames.highContrast,
			`screen-zooming-size${accessibilityProperties.selectedScrZoomValue.toFixed().replace('.', '-')}`,
			`${A11Y_PREFIX}global-text-size${accessibilityProperties.selectedTextSize
				.toFixed(1)
				.replace('.', '-')}`,
			this.classNames.toggleLabelStatus,
			this.classNames.textSpaceMedium,
			this.classNames.textSpaceLarge
		);

		this.setStyleProperties(body, [
			{
				properties: 'zoom',
				value: accessibilityProps.selectedScrZoomValue
			}
		]);

		this.setStyleProperties(html, [
			{
				properties: '--ulx-global-text-size',
				value: accessibilityProps.selectedTextSize
			}
		]);

		this.setContrastSaturateColor(html, accessibilityProps);

		if (accessibilityProperties.readingLineValue) {
			const readingLine = document.querySelector(`.${this.classNames.readingLine}`);
			if (readingLine) {
				readingLine.remove();
			}
		}

		if (accessibilityProperties.readingGuideValue) {
			const readingGuide = document.querySelector(`.${this.classNames.readingGuide}`);
			if (readingGuide) {
				readingGuide.remove();
			}
		}

		return accessibilityProps;
	}
}
