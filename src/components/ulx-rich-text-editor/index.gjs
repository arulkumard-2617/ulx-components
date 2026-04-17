import Component from "@glimmer/component";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import { createQuillInstance } from "../../utils/rte-util";

/**
 * Rich text editor powered by Quill.
 *
 * @class UlxRichTextEditor
 * @param {string} [id] - Root element id.
 * @param {string} [value=""] - Controlled HTML value.
 * @param {Function} [onTextChange] - Called on user edits only: ({ htmlValue, textValue, delta, source }) => void.
 * @param {Function} [onSelectionChange] - Called on selection changes: ({ range, oldRange, source }) => void.
 * @param {Function} [onLoad] - Called once Quill is created: (quill) => void.
 * @param {boolean} [readOnly=false] - When true, editor is non-editable.
 * @param {boolean} [disabled=false] - Alias of readOnly; also disables editing.
 * @param {boolean} [showHeader=true] - When false, toolbar is hidden/disabled.
 * @param {string} [placeholder] - Placeholder text (defaults to i18n key).
 * @param {string} [toolbarType="header"] - Named toolbar preset: prime, all, allWithZia, announcement, emailV1, email, header, headerWithZia, lite, superLite, formatOnly.
 * @param {boolean} [ignoreMentions=true] - When true, does not configure mention module even if available.
 * @param {Array<{ id: string, value: string }>} [suggestionWords] - Mention suggestions when mention module is available.
 * @param {Function} [openImagePicker] - Optional async image picker used by toolbar image handler.
 * @param {Function} [processWithZia] - Optional async processor used by toolbar zia handler.
 * @param {Function} [onImagePasteBlocked] - Called when an IMG paste is blocked.
 * @param {Function} [requestNumericValue] - Called when user selects custom line-height/letter-spacing in toolbar. ({ format, currentValue, setting }) => Promise<number|null>
 * @param {Object} [modules] - Quill module configuration overrides.
 * @param {string[]} [formats] - Allowed Quill formats override.
 * @param {number} [maxLength] - Max document length.
 * @param {string} [customClass] - Extra class names for root element.
 */
export default class UlxRichTextEditor extends Component {
	_quill = null;
	_rootElement = null;
	_contentElement = null;

	_textChangeHandler = null;
	_selectionChangeHandler = null;
	_blurHandler = null;
	_keydownHandler = null;

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [getComponentClass("editor")];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isDisabled() {
		const { disabled = false, readOnly = false } = this.args;
		return Boolean(disabled || readOnly);
	}

	get showHeader() {
		const { showHeader = true } = this.args;
		return Boolean(showHeader);
	}

	get placeholder() {
		const { placeholder } = this.args;
		return placeholder ?? t("lbl.editor.placeholder");
	}

	get toolbarType() {
		const { toolbarType = "header" } = this.args;
		return toolbarType;
	}

	initQuill = modifier((element) => {
		this._rootElement = element;

		const contentElement = element.querySelector("[data-ulx-rte-content]");

		this._contentElement = contentElement;

		const {
			modules,
			formats,
			maxLength,
			ignoreMentions = true,
			suggestionWords,
			openImagePicker,
			processWithZia,
			onImagePasteBlocked,
			requestNumericValue
		} = this.args;

		const quill = createQuillInstance(contentElement, {
			toolbar: this.showHeader ? undefined : false,
			toolbarType: this.toolbarType,
			placeholder: this.placeholder,
			readOnly: this.isDisabled,
			modules,
			formats,
			maxLength,
			ignoreMentions,
			suggestionWords,
			openImagePicker,
			processWithZia,
			onImagePasteBlocked,
			requestNumericValue
		});

		this._quill = quill;

		// Event wiring.
		this._textChangeHandler = (delta, oldContents, source) => {
			if (source !== "user") return;

			const htmlValue = this._getHtmlValue();
			const textValue = quill.getText();

			this.args.onTextChange?.({
				htmlValue,
				textValue,
				delta,
				source
			});
		};

		this._selectionChangeHandler = (range, oldRange, source) => {
			this.args.onSelectionChange?.({
				range,
				oldRange,
				source
			});
		};

		quill.on("text-change", this._textChangeHandler);
		quill.on("selection-change", this._selectionChangeHandler);

		this.args.onLoad?.(quill);

		// Blur propagation + Escape behavior (ported from legacy component).
		const editableElement = this._getEditableElement();

		this._blurHandler = () => {
			// Dispatch a blur event on the component root so consumers can listen.
			// Only dispatch when focus actually left the editor.
			queueMicrotask(() => {
				if (document.activeElement !== editableElement) {
					this._rootElement?.dispatchEvent(new Event("blur"));
				}
			});
		};

		this._keydownHandler = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				event.stopPropagation();
				quill.blur();
			}
		};

		editableElement?.addEventListener("blur", this._blurHandler);
		editableElement?.addEventListener("keydown", this._keydownHandler);

		return () => {
			try {
				if (this._textChangeHandler) {
					quill.off("text-change", this._textChangeHandler);
				}
				if (this._selectionChangeHandler) {
					quill.off("selection-change", this._selectionChangeHandler);
				}
			} finally {
				const container = this._contentElement;
				const toolbarElement = container?.previousElementSibling;
				const shouldRemoveToolbar =
					toolbarElement instanceof HTMLElement && toolbarElement.classList.contains("ql-toolbar");
				shouldRemoveToolbar && toolbarElement.remove();

				container?.classList?.remove("ql-container", "ql-snow", "ql-disabled");
				container && (container.innerHTML = "");

				const editable = this._getEditableElement();
				if (editable && this._blurHandler) {
					editable.removeEventListener("blur", this._blurHandler);
				}
				if (editable && this._keydownHandler) {
					editable.removeEventListener("keydown", this._keydownHandler);
				}

				this._textChangeHandler = null;
				this._selectionChangeHandler = null;
				this._blurHandler = null;
				this._keydownHandler = null;

				this._quill = null;
				this._rootElement = null;
				this._contentElement = null;
			}
		};
	});

	syncValue = modifier(() => {
		const quill = this._quill;
		if (!quill) return;

		// Keep enable state in sync.
		quill.enable(!this.isDisabled);

		// Only sync external value when editor does not have focus.
		if (quill.hasFocus?.() || this._isEditorFocused()) return;

		const nextValue = this.args.value ?? "";
		const currentValue = this._getHtmlValue() ?? "";

		if ((nextValue || "") !== (currentValue || "")) {
			if (nextValue) {
				this._setQuillHtml(nextValue);
			} else {
				quill.setText("");
			}
		}
	});

	_getEditableElement() {
		const root = this._rootElement;
		return root?.querySelector(".ql-editor") ?? null;
	}

	_isEditorFocused() {
		const editable = this._getEditableElement();
		return Boolean(editable && document.activeElement === editable);
	}

	_getHtmlValue() {
		const contentRoot = this._contentElement;
		const firstChild = contentRoot?.children?.[0];
		let htmlValue = firstChild ? firstChild.innerHTML : null;

		if (htmlValue === "<p><br></p>") {
			htmlValue = null;
		}

		return htmlValue;
	}

	_setQuillHtml(html) {
		const quill = this._quill;
		if (!quill) return;

		// Convert html into Quill contents, avoids raw innerHTML assignment.
		quill.setContents(
			quill.clipboard.convert({
				html,
				text: ""
			})
		);
	}

	<template>
		<div
			id={{@id}}
			class={{this.rootClasses}}
			{{this.initQuill}}
			{{this.syncValue}}
			...attributes
		>
			<div data-ulx-rte-content style={{@style}}></div>
		</div>
	</template>
}
