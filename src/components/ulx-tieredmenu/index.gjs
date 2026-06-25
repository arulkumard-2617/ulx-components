import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import overlayPortal from "../../modifiers/overlay-portal";
import {
	applyBodyAbsoluteFromViewport,
	getOverlayZIndexAboveMask,
	isPointerOutsideAnchoredOverlay,
	isPointerOutsideElement
} from "../../utils/overlay-helpers";
import {
	buildOverlayCoordinateApi,
	clampOverlayValue,
	getBoundaryRectInOverlaySpace,
	getOverlayPlacementSpace,
	resolveOverlayBoundary,
	resolveOverlayContext,
	resolveOverlayScrollContext
} from "../../utils/overlay-context";
import { getAdjacentFocusableInDocument } from "../../utils/focus-util";
import UlxTieredmenuMenuList from "./menu-list.gjs";

/** Durations match popup/tieredmenu CSS (e.g. 0.2s); fallback timeout covers missing `transitionend`. */
const TIEREDMENU_TRANSITION_MS = 200;
const TIEREDMENU_PANEL_POSITION_AUTO = "auto";
const TIEREDMENU_PANEL_POSITION_TOP = "top";
const TIEREDMENU_PANEL_POSITION_BOTTOM = "bottom";

function normalizeTieredmenuPanelPosition(position) {
	if (position === TIEREDMENU_PANEL_POSITION_TOP || position === "above") {
		return TIEREDMENU_PANEL_POSITION_TOP;
	}

	if (position === TIEREDMENU_PANEL_POSITION_BOTTOM || position === "below") {
		return TIEREDMENU_PANEL_POSITION_BOTTOM;
	}

	return TIEREDMENU_PANEL_POSITION_AUTO;
}
const TIEREDMENU_TRANSITION_FALLBACK_MS = TIEREDMENU_TRANSITION_MS + 100;
/** Popup open/close state machine: used to avoid restarting animations and to keep the root in DOM during exit. */
const TIEREDMENU_ENTER_STATES = new Set(["enter", "enter-active", "enter-done"]);
const TIEREDMENU_EXIT_STATES = new Set(["exit", "exit-active", "exit-done"]);

/** Direct children of a list only — arrow keys stay within one menu level. */
const TIEREDMENU_DIRECT_LINK_SELECTOR =
	":scope > li > .tieredmenu-item-link:not([aria-disabled='true'])";
/** First actionable row inside a submenu panel (after opening via keyboard). */
const TIEREDMENU_SUBMENU_FIRST_LINK_SELECTOR =
	".tieredmenu-list > li > .tieredmenu-item-link:not([aria-disabled='true'])";
/** First focusable item in the whole menubar (popup open focus). */
const TIEREDMENU_ANY_FOCUSABLE_LINK = ".tieredmenu-item-link:not([aria-disabled='true'])";

/**
 * TieredMenu component for displaying hierarchical menus with nested submenus.
 * Displays submenus in nested overlays positioned to the right of parent items.
 *
 * ## Model Structure
 * Each item in the model can have:
 * - `label` (string): Display text for the menu item
 * - `icon` (string): Icon class string for UlxIcon (e.g., "bs-icons1 pdf-stroke-icon" or "bs-icons1 add-icon-01 green")
 * - `items` (Array): Array of submenu items (nested structure supported)
 * - `separator` (boolean): When true, renders as a separator line
 * - `disabled` (boolean): When true, item is disabled and non-interactive
 * - `command` (function): Callback function executed when item is activated
 * - `url` (string): URL for navigation (used with command for router integration)
 * - `template` (Component): Custom template component for item rendering
 * - `dataQa` (string): Optional full `data-qa` override for the row; default is `ulx-tieredmenu-item` (or `{root}-item` when `@dataQa` is set on the menu)
 *
 * ## Popup Mode
 * When `@popup={{true}}`, the menu is hidden by default and shown when `@visible={{true}}`.
 * Use `@onHide` callback to handle visibility state changes.
 *
 * ## WCAG
 * - Uses `role="menubar"` with `aria-orientation="vertical"` for the root menu
 * - Each item has `role="menuitem"` with proper `aria-label` and `aria-disabled`
 * - Submenus use `role="menu"` with `aria-labelledby` referencing parent item
 * - Items with submenus have `aria-haspopup`, `aria-expanded`, and `aria-controls`
 * - Full keyboard support: Tab, Shift+Tab, Enter, Space, Escape, Arrow keys, Home, End
 * - Focus management: Focus moves to first item on open, tracks active item
 *
 * @class UlxTieredmenu
 * @param {Array<Object>} [items=[]] - Array of menu item objects
 * @param {boolean} [popup=false] - When true, menu operates in popup mode (hidden by default)
 * @param {boolean} [visible=false] - Visibility state for popup mode
 * @param {string} [breakpoint='767px'] - Breakpoint for responsive behavior (mobile/tablet)
 * @param {function} [onItemSelect] - Callback when an item is selected; receives the item object
 * @param {function} [onHide] - Callback when menu should be hidden (popup mode)
 * @param {function} [onShow] - Callback when menu is shown (popup mode)
 * @param {HTMLElement} [target] - Target element for popup positioning (button that triggers menu)
 * @param {'start'|'end'} [align='start'] - Horizontal alignment of popup panel relative to trigger. 'start' aligns the menu's left edge to the trigger's left edge; 'end' aligns the menu's right edge to the trigger's right edge.
 * @param {'self'|'body'|HTMLElement|Function|string} [context='body'] - Where the popup panel is rendered. `"self"` keeps the panel in-place; `"body"` appends to document body (default for popup).
 * @param {'window'|HTMLElement|Function|string} [boundary='window'] - Boundary used for flip/clamp calculations.
 * @param {'window'|HTMLElement|Function|string} [scrollContext='window'] - Scroll target that repositions the popup while it stays open.
 * @param {'auto'|'top'|'bottom'} [position='auto'] - Vertical placement relative to the trigger. `auto` flips above/below based on scroll space; `top` always opens above; `bottom` always opens below.
 * @param {string} [customClass] - Additional CSS classes
 * @param {function} [registerRef] - Callback invoked with the component instance (e.g. for calling hide() from parent)
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-tieredmenu`).
 */
export default class UlxTieredmenu extends Component {
	@service modalStack;

	/** Passed to `@onHide` when closing via Tab so parent can move focus in document order. */
	_pendingHideFocusDetail = undefined;

	@tracked openSubmenus = new Set();
	@tracked activeItemId = null;
	@tracked focusedSubmenuId = null;
	@tracked hoveredItemId = null;
	@tracked hasInteracted = false;
	@tracked animationState = null; // 'enter', 'enter-active', 'enter-done', 'exit', 'exit-active', 'exit-done', null
	@tracked targetElement = null;
	@tracked containerElement = null;
	@tracked menuElement = null;
	@tracked zIndex = null;
	_previousVisible = false; // Track previous visibility state to detect transitions
	_showEvent = null;

	get baseClass() {
		return getComponentClass("tieredmenu");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "tieredmenu");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	get rootClasses() {
		const { popup = false, customClass } = this.args;
		const parts = [this.baseClass];

		popup && parts.push("popup");
		popup && this.animationState && parts.push(this.animationState);

		customClass && parts.push(customClass);
		return joinClassNames(...parts);
	}

	get items() {
		return this.args.items ?? [];
	}

	get isPopup() {
		return this.args.popup === true;
	}

	get isVisible() {
		if (this.isPopup) {
			return this.args.visible === true;
		}
		return true;
	}

	get shouldRender() {
		if (!this.isPopup) return true;
		if (this.args.visible === true) return true;
		// Keep mounted while exit runs so CSS transition can finish.
		if (this.animationState?.startsWith("exit")) return true;
		// `@visible` may flip false before exit starts; stay mounted if we were mid enter.
		return !this.args.visible && TIEREDMENU_ENTER_STATES.has(this.animationState);
	}

	get resolvedContext() {
		if (!this.isPopup) {
			return null;
		}

		return resolveOverlayContext(
			this.args.context ?? this.args.renderContainer ?? this.args.appendTo ?? "body"
		);
	}

	get resolvedBoundary() {
		return resolveOverlayBoundary(this.args.boundary ?? "window");
	}

	get resolvedBoundaryElement() {
		const boundary = this.resolvedBoundary;

		return typeof boundary !== "undefined" &&
			boundary !== null &&
			typeof window !== "undefined" &&
			boundary !== window
			? boundary
			: null;
	}

	get resolvedScrollContext() {
		return resolveOverlayScrollContext(this.args.scrollContext ?? "window");
	}

	get shouldPortalOverlay() {
		return this.isPopup && this.resolvedContext != null;
	}

	get breakpoint() {
		return this.args.breakpoint ?? "767px";
	}

	/**
	 * Checks if an item has a submenu
	 */
	@action
	hasSubmenu(item) {
		return Array.isArray(item.items) && item.items.length > 0;
	}

	/**
	 * Checks if an item is a separator
	 */
	@action
	isSeparator(item) {
		return item.separator === true;
	}

	/**
	 * Checks if an item is disabled
	 */
	@action
	isDisabled(item) {
		return item.disabled === true;
	}

	/**
	 * Generates a unique ID for a menu item
	 */
	@action
	getItemId(item, index, parentId = null) {
		if (parentId) {
			return `${parentId}-item-${index}`;
		}
		return `tieredmenu-item-${index}`;
	}

	/**
	 * Generates a unique ID for a submenu
	 */
	@action
	getSubmenuId(itemId) {
		return `${itemId}-submenu`;
	}

	/**
	 * Checks if a submenu is open
	 */
	@action
	isSubmenuOpen(itemId) {
		return this.openSubmenus.has(itemId);
	}

	/**
	 * Closes all submenus that are siblings of the given itemId
	 * (submenus that share the same parent)
	 */
	@action
	closeSiblingSubmenus(itemId, parentId) {
		const newOpenSubmenus = new Set();
		for (const openId of this.openSubmenus) {
			// Skip the item we're about to open
			if (openId === itemId) {
				continue;
			}

			// If parentId is provided, close siblings (items with same parent)
			if (parentId) {
				// Extract parent from openId (format: parentId-item-X)
				const openParentMatch = openId.match(/^(.+)-item-\d+$/);
				if (openParentMatch && openParentMatch[1] === parentId) {
					// This is a sibling - skip it (close it)
					continue;
				}
			}

			// Keep ancestors (parent menus in the path) - items that itemId starts with
			if (itemId.startsWith(openId + "-")) {
				newOpenSubmenus.add(openId);
			}
			// Keep descendants (child menus) - items that start with itemId
			else if (openId.startsWith(itemId + "-")) {
				newOpenSubmenus.add(openId);
			}
		}
		return newOpenSubmenus;
	}

	/**
	 * Toggles submenu visibility
	 */
	@action
	toggleSubmenu(itemId, parentId, event) {
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}

		// Mark that user has interacted (clicked) - enables hover for other items
		this.hasInteracted = true;

		if (this.openSubmenus.has(itemId)) {
			// Close this submenu and all its descendants
			const newOpenSubmenus = new Set();
			for (const openId of this.openSubmenus) {
				if (!openId.startsWith(itemId)) {
					newOpenSubmenus.add(openId);
				}
			}
			this.openSubmenus = newOpenSubmenus;
			this.focusedSubmenuId = null;
			this.hoveredItemId = null;
		} else {
			// Close sibling submenus first, then open this one
			const newOpenSubmenus = this.closeSiblingSubmenus(itemId, parentId);
			newOpenSubmenus.add(itemId);
			this.openSubmenus = newOpenSubmenus;
			this.focusedSubmenuId = itemId;
			this.hoveredItemId = itemId;
		}
	}

	/**
	 * Closes all submenus
	 */
	@action
	closeAllSubmenus() {
		this.openSubmenus = new Set();
		this.focusedSubmenuId = null;
	}

	/**
	 * Clears expanded submenu / hover state for popup mode so reopening after close
	 * (e.g. modal dismissed) does not restore nested flyouts.
	 */
	@action
	_resetPopupTieredmenuState() {
		this.openSubmenus = new Set();
		this.focusedSubmenuId = null;
		this.hoveredItemId = null;
		this.activeItemId = null;
		this.hasInteracted = false;
	}

	/**
	 * Closes submenu for a specific item
	 */
	@action
	closeSubmenu(itemId) {
		if (this.openSubmenus.has(itemId)) {
			this.openSubmenus = new Set([...this.openSubmenus].filter((id) => id !== itemId));
			if (this.focusedSubmenuId === itemId) {
				this.focusedSubmenuId = null;
			}
		}
	}

	/**
	 * Handles item click/activation
	 */
	@action
	handleItemClick(item, itemId, parentId, event) {
		if (this.isDisabled(item)) {
			event.preventDefault();
			return;
		}

		if (this.hasSubmenu(item)) {
			this.toggleSubmenu(itemId, parentId, event);
		} else {
			if (item.command && typeof item.command === "function") {
				item.command({ item, originalEvent: event });
			}
			this.args.onItemSelect?.(item);
			this.closeAllSubmenus();
			if (this.isPopup) {
				this.handleHide();
			}
		}
	}

	/**
	 * Handles keyboard navigation
	 */
	@action
	handleKeyDown(item, itemId, parentId, event) {
		if (event.key === "Tab" && this.isPopup && this.isVisible) {
			event.preventDefault();
			const nextFocusable = getAdjacentFocusableInDocument(this.targetElement, {
				backward: event.shiftKey,
				excludeContaining: this.containerElement
			});
			this._pendingHideFocusDetail = nextFocusable ? { nextFocusable } : undefined;
			this.handleHide();
			return;
		}

		if (this.isDisabled(item)) {
			return;
		}

		const { key, code } = event;
		const hasSubmenu = this.hasSubmenu(item);

		// Activation: `key` + `code` so Space/NumpadEnter behave across browsers.
		if (key === "Enter" || key === " " || code === "Space" || code === "NumpadEnter") {
			event.preventDefault();
			if (hasSubmenu) {
				this.toggleSubmenu(itemId, parentId, event);
			} else {
				this.handleItemClick(item, itemId, parentId, event);
			}
			return;
		}

		switch (key) {
			case "ArrowRight":
				if (hasSubmenu) {
					event.preventDefault();
					const triggerButton = event.currentTarget;
					if (!this.isSubmenuOpen(itemId)) {
						this.toggleSubmenu(itemId, parentId, event);
						schedule("afterRender", () => this.focusFirstItemInSubmenu(triggerButton));
					} else {
						this.focusFirstItemInSubmenu(triggerButton);
					}
				}
				break;

			case "ArrowLeft":
				event.preventDefault();
				if (parentId) {
					this.closeSubmenu(parentId);
					this._getParentItemButton(event.currentTarget)?.focus({
						preventScroll: true
					});
				} else if (hasSubmenu && this.isSubmenuOpen(itemId)) {
					this.closeSubmenu(itemId);
				}
				break;

			case "Escape":
				event.preventDefault();
				if (parentId) {
					this.closeSubmenu(parentId);
					this._getParentItemButton(event.currentTarget)?.focus({
						preventScroll: true
					});
				} else if (this.isSubmenuOpen(itemId)) {
					this.closeSubmenu(itemId);
				} else if (this.isPopup) {
					this.handleHide();
					this.targetElement?.focus({ preventScroll: true });
				}
				break;

			case "Home":
				event.preventDefault();
				this.focusFirstItem(event.currentTarget.closest(".tieredmenu-list"));
				break;

			case "End":
				event.preventDefault();
				this.focusLastItem(event.currentTarget.closest(".tieredmenu-list"));
				break;

			case "ArrowDown":
				event.preventDefault();
				this.focusNextItem(event.currentTarget);
				break;

			case "ArrowUp":
				event.preventDefault();
				this.focusPreviousItem(event.currentTarget);
				break;
		}
	}

	/**
	 * Returns the parent menu item button that owns the submenu containing the given button.
	 * Uses DOM structure (submenu div's previousElementSibling) so the correct instance
	 * is found when multiple tieredmenus exist on the page.
	 * @param {HTMLElement} submenuItemButton - The focused button inside a submenu (e.g. "New")
	 * @returns {HTMLElement|null} The parent item's button (e.g. "File") or null
	 */
	_getParentItemButton(submenuItemButton) {
		const submenuDiv = submenuItemButton?.closest(".tieredmenu-submenu");
		const parentButton = submenuDiv?.previousElementSibling;
		return parentButton?.classList?.contains("tieredmenu-item-link") ? parentButton : null;
	}

	/**
	 * Returns focusable item links that are direct children of the given list
	 * (one per list item). Excludes nested submenu items so arrow keys move
	 * only within the current level (File -> Edit -> View -> Help).
	 */
	_getFocusableLinksInList(listElement) {
		if (!listElement) return [];
		return Array.from(listElement.querySelectorAll(TIEREDMENU_DIRECT_LINK_SELECTOR));
	}

	/**
	 * Focuses the first item in a menu list
	 */
	@action
	focusFirstItem(listElement) {
		const links = this._getFocusableLinksInList(listElement);
		links[0]?.focus({ preventScroll: true });
	}

	/**
	 * Focuses the last item in a menu list
	 */
	@action
	focusLastItem(listElement) {
		const links = this._getFocusableLinksInList(listElement);
		links[links.length - 1]?.focus({ preventScroll: true });
	}

	/**
	 * Focuses the next item
	 */
	@action
	focusNextItem(currentElement) {
		const list = currentElement.closest(".tieredmenu-list");
		const links = this._getFocusableLinksInList(list);
		const currentIndex = links.indexOf(currentElement);
		if (currentIndex < links.length - 1) {
			links[currentIndex + 1].focus({ preventScroll: true });
		}
	}

	/**
	 * Focuses the previous item
	 */
	@action
	focusPreviousItem(currentElement) {
		const list = currentElement.closest(".tieredmenu-list");
		const links = this._getFocusableLinksInList(list);
		const currentIndex = links.indexOf(currentElement);
		if (currentIndex > 0) {
			links[currentIndex - 1].focus({ preventScroll: true });
		}
	}

	/**
	 * Focuses the first item in the submenu that belongs to the trigger button.
	 * Uses the trigger element (not global id) so the correct submenu is focused
	 * when multiple tieredmenus exist on the page (e.g. Basic and Template demos).
	 * @param {HTMLElement} triggerButton - The menu item button that opened the submenu (e.g. "File")
	 */
	@action
	focusFirstItemInSubmenu(triggerButton) {
		const run = () => {
			const submenuDiv = triggerButton?.nextElementSibling?.classList?.contains(
				"tieredmenu-submenu"
			)
				? triggerButton.nextElementSibling
				: triggerButton?.closest("li")?.querySelector(".tieredmenu-submenu");
			const firstLink = submenuDiv?.querySelector(TIEREDMENU_SUBMENU_FIRST_LINK_SELECTOR);
			firstLink?.focus({ preventScroll: true });
		};
		schedule("afterRender", run);
	}

	/**
	 * Gets classes for a menu item
	 */
	@action
	getItemClasses(item, itemId) {
		const parts = ["tieredmenu-item"];
		this.hasSubmenu(item) && parts.push("has-submenu");
		(this.isSubmenuOpen(itemId) || this.hoveredItemId === itemId) && parts.push("active");
		this.isDisabled(item) && parts.push("disabled");
		return joinClassNames(...parts);
	}

	@action
	getSubmenuClasses(itemId) {
		const parts = ["tieredmenu-submenu"];
		this.isSubmenuOpen(itemId) && parts.push("open");
		return joinClassNames(...parts);
	}

	/**
	 * Handles mouse enter on item with submenu
	 * After first click interaction, allows hover to open submenus
	 */
	@action
	handleItemMouseEnter(item, itemId, parentId) {
		if (this.hasSubmenu(item)) {
			// If user has interacted (clicked) before, allow hover to open submenus
			if (this.hasInteracted) {
				if (!this.isSubmenuOpen(itemId)) {
					// Close sibling submenus first, then open this one
					const newOpenSubmenus = this.closeSiblingSubmenus(itemId, parentId);
					newOpenSubmenus.add(itemId);
					this.openSubmenus = newOpenSubmenus;
					this.focusedSubmenuId = itemId;
					this.hoveredItemId = itemId;
				} else {
					// Keep it open on hover if already opened
					this.hoveredItemId = itemId;
				}
			} else {
				// First interaction - only track hover state, don't open
				if (this.isSubmenuOpen(itemId)) {
					this.hoveredItemId = itemId;
				}
			}
		}
	}

	/**
	 * Handles mouse leave on menu item
	 */
	@action
	handleItemMouseLeave(itemId) {
		// Don't close immediately - let submenu handle its own mouse leave
		// This prevents flickering when moving between item and submenu
		this.hoveredItemId = null;
	}

	/**
	 * Renders menu items recursively
	 */
	@action
	renderItems(items, parentId = null, level = 0) {
		return items.map((item, index) => {
			const itemId = this.getItemId(item, index, parentId);
			return { item, itemId, index, parentId, level };
		});
	}

	/**
	 * Handles popup show animation
	 */
	@action
	handleShow() {
		if (!this.isPopup || !this.containerElement) return;

		// Do not restart enter if already entering or fully shown.
		if (TIEREDMENU_ENTER_STATES.has(this.animationState)) {
			return;
		}

		this._resetPopupTieredmenuState();

		if (!this.targetElement && this.args.target) {
			this.targetElement = this.args.target;
		}

		if (!this.targetElement) {
			// Can't position without target, but still show
			this.setZIndex();
			this.animationState = "enter-done";
			return;
		}

		// Set initial state only if not already set
		if (this.animationState !== "enter") {
			this.animationState = "enter";
		}

		this.modalStack?.registerModal(this);

		// Position overlay and set z-index
		this.alignOverlay();
		this.setZIndex();

		let transitionCompleted = false;
		let transitionEndTimeout = null;

		const completeEnterAnimation = () => {
			if (!transitionCompleted && this.animationState === "enter-active") {
				transitionCompleted = true;
				this.animationState = "enter-done";
				if (this.containerElement) {
					this.containerElement.removeEventListener("transitionend", handleTransitionEnd);
				}
				if (transitionEndTimeout) {
					clearTimeout(transitionEndTimeout);
					transitionEndTimeout = null;
				}
			}
		};

		const handleTransitionEnd = (event) => {
			if (event.target !== this.containerElement) return;
			// Popup animates opacity/transform; ignore bubbled events from descendants.
			if (event.propertyName === "opacity" || event.propertyName === "transform") {
				completeEnterAnimation();
			}
		};

		this.containerElement.addEventListener("transitionend", handleTransitionEnd);

		// Double rAF: first frame applies `enter`, next frame toggles to `enter-active` so the transition runs.
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "enter") {
					this.animationState = "enter-active";
					transitionEndTimeout = setTimeout(() => {
						completeEnterAnimation();
					}, TIEREDMENU_TRANSITION_FALLBACK_MS);
				}
			});
		});
	}

	/**
	 * Handles popup hide animation
	 */
	@action
	handleHide() {
		if (!this.isPopup) return;

		if (!this.containerElement) {
			this._resetPopupTieredmenuState();
			return;
		}

		if (TIEREDMENU_EXIT_STATES.has(this.animationState)) {
			return;
		}

		this.animationState = "exit";

		let transitionCompleted = false;
		let transitionEndTimeout = null;

		// Mirror enter: transitionend + timeout fallback, then reset state and notify parent.
		const completeExitAnimation = () => {
			if (!transitionCompleted && this.animationState === "exit-active") {
				transitionCompleted = true;
				this.animationState = "exit-done";
				this._resetPopupTieredmenuState();
				this.modalStack?.unregisterModal(this);
				this.clearZIndex();
				const hideDetail = this._pendingHideFocusDetail;
				this._pendingHideFocusDetail = undefined;
				this.args.onHide?.(hideDetail);
				const tabOutTarget = hideDetail?.nextFocusable;
				if (tabOutTarget) {
					schedule("afterRender", () => {
						requestAnimationFrame(() => {
							tabOutTarget.focus?.({ preventScroll: true });
						});
					});
				}
				setTimeout(() => {
					this.animationState = null;
				}, 50);
				if (this.containerElement) {
					this.containerElement.removeEventListener("transitionend", handleTransitionEnd);
				}
				if (transitionEndTimeout) {
					clearTimeout(transitionEndTimeout);
					transitionEndTimeout = null;
				}
			}
		};

		const handleTransitionEnd = (event) => {
			if (event.target !== this.containerElement) return;
			if (event.propertyName === "opacity" || event.propertyName === "transform") {
				completeExitAnimation();
			}
		};

		this.containerElement.addEventListener("transitionend", handleTransitionEnd);

		// Same double-rAF pattern as enter so `exit` → `exit-active` triggers CSS.
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "exit") {
					this.animationState = "exit-active";
					transitionEndTimeout = setTimeout(() => {
						completeExitAnimation();
					}, TIEREDMENU_TRANSITION_FALLBACK_MS);
				}
			});
		});
	}

	/**
	 * Aligns overlay to target element.
	 * Uses @align arg: 'start' (default) left-aligns menu to trigger, 'end' right-aligns menu to trigger.
	 * Viewport overflow clamping applies after the initial alignment is computed.
	 */
	@action
	alignOverlay() {
		if (!this.containerElement || !this.targetElement) return;

		const { align = "start", position = "auto" } = this.args;
		const panelPosition = normalizeTieredmenuPanelPosition(position);
		const container = this.containerElement;
		const target = this.targetElement;
		const coordinateApi = buildOverlayCoordinateApi(this.resolvedContext, container);

		// Temporarily remove the overlay from layout so its own size does not
		// inflate body / trigger a scrollbar and skew viewport or target measurements.
		const prevDisplay = container.style.display;
		container.style.display = "none";

		const targetRect = coordinateApi.fromViewportRect(target.getBoundingClientRect());
		const boundaryRect = getBoundaryRectInOverlaySpace(this.resolvedBoundary, coordinateApi);

		container.style.display = prevDisplay;

		const menuWidth = container.offsetWidth || 180;
		const menuHeight = container.offsetHeight || 200;
		const spacing = 2;
		const viewportPadding = 10;

		const fallbackBoundary = boundaryRect ?? {
			top: 0,
			left: 0,
			right: targetRect.left + menuWidth + viewportPadding,
			bottom: targetRect.bottom + menuHeight + viewportPadding
		};

		const boundaryLeft = fallbackBoundary.left;
		const boundaryRight = fallbackBoundary.right;
		const boundaryTop = fallbackBoundary.top;
		const boundaryBottom = fallbackBoundary.bottom;
		const minLeft = boundaryLeft + viewportPadding;
		const maxLeft = boundaryRight - menuWidth - viewportPadding;
		const minTop = boundaryTop + viewportPadding;
		const maxTop = boundaryBottom - menuHeight - viewportPadding;

		const leftForStart = targetRect.left;
		const leftForEnd = targetRect.right - menuWidth;
		const placementSpace = getOverlayPlacementSpace(this.resolvedBoundaryElement, target);

		let startFitsHorizontally;
		let endFitsHorizontally;

		if (placementSpace) {
			startFitsHorizontally =
				placementSpace.scrollableSpaceRight >= menuWidth + viewportPadding;
			endFitsHorizontally = placementSpace.scrollableSpaceLeft >= menuWidth + viewportPadding;
		} else {
			startFitsHorizontally = leftForStart >= minLeft && leftForStart <= maxLeft;
			endFitsHorizontally = leftForEnd >= minLeft && leftForEnd <= maxLeft;
		}

		let left;

		if (align === "end") {
			left = endFitsHorizontally
				? leftForEnd
				: startFitsHorizontally
					? leftForStart
					: clampOverlayValue(leftForEnd, minLeft, Math.max(minLeft, maxLeft));
		} else {
			left = startFitsHorizontally
				? leftForStart
				: endFitsHorizontally
					? leftForEnd
					: clampOverlayValue(leftForStart, minLeft, Math.max(minLeft, maxLeft));
		}

		let spaceBelow;
		let spaceAbove;

		if (placementSpace) {
			spaceBelow = placementSpace.scrollableSpaceBelow - spacing;
			spaceAbove = placementSpace.scrollableSpaceAbove - spacing;
		} else {
			spaceBelow = boundaryBottom - viewportPadding - (targetRect.bottom + spacing);
			spaceAbove = targetRect.top - spacing - (boundaryTop + viewportPadding);
		}

		let top;

		if (panelPosition === TIEREDMENU_PANEL_POSITION_BOTTOM) {
			top = targetRect.bottom + spacing;
		} else if (panelPosition === TIEREDMENU_PANEL_POSITION_TOP) {
			top = targetRect.top - menuHeight - spacing;
		} else if (spaceBelow >= menuHeight) {
			top = targetRect.bottom + spacing;
		} else if (spaceAbove >= menuHeight) {
			top = targetRect.top - menuHeight - spacing;
		} else if (spaceBelow >= spaceAbove) {
			top = targetRect.bottom + spacing;
		} else {
			top = targetRect.top - menuHeight - spacing;
		}

		const canExtendBelowInScrollContent =
			placementSpace && placementSpace.scrollableSpaceBelow >= menuHeight + spacing;

		const canExtendAboveInScrollContent =
			placementSpace && placementSpace.scrollableSpaceAbove >= menuHeight + spacing;

		const shouldSkipVerticalClamp =
			panelPosition === TIEREDMENU_PANEL_POSITION_BOTTOM ||
			panelPosition === TIEREDMENU_PANEL_POSITION_TOP;

		if (
			!shouldSkipVerticalClamp &&
			!canExtendBelowInScrollContent &&
			!canExtendAboveInScrollContent
		) {
			let adjustedMinTop = minTop;
			let adjustedMaxTop = maxTop;

			const targetOutTop = targetRect.bottom < boundaryTop + viewportPadding;
			const targetOutBottom = targetRect.top > boundaryBottom - viewportPadding;

			targetOutTop && (adjustedMinTop = Math.min(adjustedMinTop, top));
			targetOutBottom && (adjustedMaxTop = Math.max(adjustedMaxTop, top));

			if (coordinateApi.usesDocumentCoordinates) {
				adjustedMinTop = Math.min(adjustedMinTop, -menuHeight);
			}

			top = clampOverlayValue(top, adjustedMinTop, Math.max(adjustedMinTop, adjustedMaxTop));
		}

		if (coordinateApi.usesDocumentCoordinates) {
			applyBodyAbsoluteFromViewport(container, top, left);
		} else {
			coordinateApi.applyPosition(container, top, left);
		}
	}

	/**
	 * Sets z-index for popup
	 */
	@action
	setZIndex() {
		if (!this.containerElement || !this.isPopup) return;

		const zIndex =
			typeof this.args.zIndex === "number"
				? this.args.zIndex
				: this.resolvedContext === document.body
					? getOverlayZIndexAboveMask(this.modalStack, this)
					: 2;

		this.zIndex = zIndex;
		this.containerElement.style.zIndex = zIndex;
	}

	isPortalReadyForMeasurement(element) {
		const resolvedContext = this.resolvedContext;

		if (!this.isPopup) {
			return true;
		}

		if (!resolvedContext) {
			return true;
		}

		return element?.parentNode === resolvedContext;
	}

	/**
	 * Clears z-index
	 */
	@action
	clearZIndex() {
		if (this.containerElement) this.containerElement.style.zIndex = "";
		this.zIndex = null;
	}

	/**
	 * Modifier to handle container element reference and positioning
	 */
	setContainerRef = modifier((element) => {
		this.containerElement = element;

		if (this.args.target) {
			this.targetElement = this.args.target;
		}

		return () => {
			this.modalStack?.unregisterModal(this);
			this.containerElement = null;
		};
	});

	/**
	 * Modifier to handle menu element reference
	 */
	setMenuRef = modifier((element) => {
		this.menuElement = element;

		return () => {
			this.menuElement = null;
		};
	});

	/**
	 * Modifier to register component instance with parent (for imperative hide/show/toggle)
	 */
	registerRefModifier = modifier(() => {
		this.args.registerRef?.(this);
		// Clear so parents do not keep a stale instance after teardown.
		return () => this.args.registerRef?.(null);
	});

	/**
	 * Sets target element from argument or event
	 */
	@action
	setTarget(elementOrEvent) {
		if (elementOrEvent instanceof HTMLElement) {
			this.targetElement = elementOrEvent;
		} else if (elementOrEvent?.currentTarget) {
			this.targetElement = elementOrEvent.currentTarget;
		} else if (this.args.target) {
			this.targetElement = this.args.target;
		}
	}

	/**
	 * Public API: Show the popup menu
	 */
	@action
	show(event) {
		if (!this.isPopup) return;
		if (event) {
			this.setTarget(event);
		}
		// Visibility is controlled by parent via @visible arg
		// This method can be used to set target before showing.
		// onShow is emitted when the popup actually transitions to visible.
		this._showEvent = event;
	}

	/**
	 * Public API: Hide the popup menu
	 */
	@action
	hide() {
		if (!this.isPopup) return;
		this.handleHide();
	}

	/**
	 * Public API: Toggle the popup menu
	 */
	@action
	toggle(event) {
		if (!this.isPopup) return;
		if (event) {
			this.setTarget(event);
		}
		if (this.isVisible) {
			this.hide();
		} else {
			this.show(event);
		}
	}

	/**
	 * Syncs `@visible` with enter/exit animations. Parent owns `visible`; we only drive `animationState`
	 * and call `handleShow` / `handleHide` when edges are detected.
	 */
	watchVisibility = modifier((element, [isVisible, isPopup, targetElement, _animationState]) => {
		if (!isPopup) return;

		if (targetElement && targetElement !== this.targetElement) {
			this.targetElement = targetElement;
		}

		const previousVisible = this._previousVisible;
		const isTransitioningToVisible = !previousVisible && isVisible;
		const isTransitioningToHidden = previousVisible && !isVisible;

		if (isVisible) {
			const shouldShow =
				isTransitioningToVisible && !TIEREDMENU_ENTER_STATES.has(this.animationState);

			if (shouldShow) {
				this.args.onShow?.(this._showEvent);
				this._showEvent = null;
				if (this.targetElement || this.args.target) {
					if (!this.targetElement && this.args.target) {
						this.targetElement = this.args.target;
					}
					// overlayPortal may run after this modifier; measure once mounted in its final context.
				const checkAndShow = () => {
					if (this.isPortalReadyForMeasurement(element)) {
						if (!TIEREDMENU_ENTER_STATES.has(this.animationState)) {
							requestAnimationFrame(() => {
								this.handleShow();
							});
						}
					} else {
						requestAnimationFrame(checkAndShow);
					}
				};
				checkAndShow();
				}
			}
		} else {
			// Treat as "was open" if we were entering/entered, so `@visible` false still runs exit from a steady state.
			const isMenuCurrentlyShown = TIEREDMENU_ENTER_STATES.has(this.animationState);
			const wasVisible = isTransitioningToHidden || isMenuCurrentlyShown;

			if (
				wasVisible &&
				(this.animationState !== null || isTransitioningToHidden) &&
				!this.animationState?.startsWith("exit")
			) {
				requestAnimationFrame(() => {
					if (this.containerElement && !this.animationState?.startsWith("exit")) {
						this.handleHide();
					}
				});
			}
		}

		// While open, keep the panel pinned to the trigger (scroll/resize/layout).
		if (
			isVisible &&
			this.animationState === "enter-done" &&
			this.targetElement &&
			this.containerElement
		) {
			this.alignOverlay();
		}

		this._previousVisible = isVisible;
	});

	/**
	 * Modifier to focus first item when menu becomes visible (popup mode)
	 */
	focusFirstItemOnVisible = modifier((element, [isVisible, animationState]) => {
		if (isVisible && this.isPopup && animationState === "enter-done") {
			const firstLink = element?.querySelector(TIEREDMENU_ANY_FOCUSABLE_LINK);
			if (firstLink) {
				setTimeout(() => firstLink.focus({ preventScroll: true }), 0);
			}
		}
	});

	/**
	 * Modifier to handle click outside for popup mode
	 */
	closeOnClickOutside = modifier((element) => {
		// Inline menubar: outside click collapses open submenus only (root stays in document flow).
		if (!this.isPopup) {
			const handleClick = (event) => {
				if (isPointerOutsideElement(element, event)) {
					if (this.openSubmenus.size > 0) {
						this.closeAllSubmenus();
						this.hoveredItemId = null;
					}
				}
			};

			document.addEventListener("click", handleClick, true);
			return () => {
				document.removeEventListener("click", handleClick, true);
			};
		}

		// Popup: dismiss when click is outside both the panel and the anchor; respect modal stack top.
		const handleClick = (event) => {
			if (this.modalStack?.topModal && this.modalStack.topModal !== this) return;
			if (isPointerOutsideAnchoredOverlay(element, this.targetElement, event) && this.isVisible) {
				this.handleHide();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	});

	repositionOnScroll = modifier((_, [isVisible, animationState]) => {
		if (!this.isPopup || !isVisible || animationState !== "enter-done") {
			return;
		}

		const scrollTarget = this.resolvedScrollContext;
		const shouldTrackScroll = this.resolvedContext != null;
		const realignOverlay = () => {
			if (this.isVisible && this.animationState === "enter-done") {
				this.alignOverlay();
			}
		};

		const onWindowResize = () => {
			if (this.modalStack?.topModal && this.modalStack.topModal !== this) {
				return;
			}

			realignOverlay();
		};

		shouldTrackScroll && scrollTarget?.addEventListener?.("scroll", realignOverlay);
		window.addEventListener("resize", onWindowResize);

		const resizeObserver =
			typeof ResizeObserver !== "undefined" && this.containerElement
				? new ResizeObserver(() => {
						if (!this.isVisible || this.animationState !== "enter-done") {
							return;
						}

						requestAnimationFrame(realignOverlay);
					})
				: null;

		resizeObserver?.observe(this.containerElement);

		return () => {
			shouldTrackScroll && scrollTarget?.removeEventListener?.("scroll", realignOverlay);
			window.removeEventListener("resize", onWindowResize);
			resizeObserver?.disconnect();
		};
	});

	<template>
		{{#if this.shouldRender}}
			<div
				class={{this.rootClasses}}
				role="menubar"
				aria-orientation="vertical"
				data-qa={{this.rootDataQa}}
				{{overlayPortal this.shouldPortalOverlay this.resolvedContext}}
				{{this.setContainerRef}}
				{{this.registerRefModifier}}
				{{this.watchVisibility this.isVisible this.isPopup this.args.target this.animationState}}
				{{this.focusFirstItemOnVisible this.isVisible this.animationState}}
				{{this.repositionOnScroll this.isVisible this.animationState}}
				{{this.closeOnClickOutside}}
				...attributes
			>
				<ul class="tieredmenu-list" data-qa={{this.getDataQa "list"}} {{this.setMenuRef}}>
					<UlxTieredmenuMenuList
						@items={{this.items}}
						@getDataQa={{this.getDataQa}}
						@renderItems={{this.renderItems}}
						@isSeparator={{this.isSeparator}}
						@getItemClasses={{this.getItemClasses}}
						@hasSubmenu={{this.hasSubmenu}}
						@isDisabled={{this.isDisabled}}
						@isSubmenuOpen={{this.isSubmenuOpen}}
						@getSubmenuClasses={{this.getSubmenuClasses}}
						@getSubmenuId={{this.getSubmenuId}}
						@onMouseEnter={{this.handleItemMouseEnter}}
						@onMouseLeave={{this.handleItemMouseLeave}}
						@onClick={{this.handleItemClick}}
						@onKeyDown={{this.handleKeyDown}}
					/>
				</ul>
			</div>
		{{/if}}
	</template>
}
