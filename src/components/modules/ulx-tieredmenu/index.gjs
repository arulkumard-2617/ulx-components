import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { schedule } from "@ember/runloop";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxTieredmenuMenuList from "./menu-list.gjs";

/**
 * TieredMenu component for displaying hierarchical menus with nested submenus.
 * Displays submenus in nested overlays positioned to the right of parent items.
 *
 * ## Model Structure
 * Each item in the model can have:
 * - `label` (string): Display text for the menu item
 * - `icon` (string): Icon class name (e.g., "bs-icons1 pdf-stroke-icon")
 * - `items` (Array): Array of submenu items (nested structure supported)
 * - `separator` (boolean): When true, renders as a separator line
 * - `disabled` (boolean): When true, item is disabled and non-interactive
 * - `command` (function): Callback function executed when item is activated
 * - `url` (string): URL for navigation (used with command for router integration)
 * - `template` (Component): Custom template component for item rendering
 * - `dataQa` (string): Optional value for the item's `data-qa` attribute (defaults to "ulx-tieredmenu-item")
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
 * @param {Array<Object>} [model=[]] - Array of menu item objects
 * @param {boolean} [popup=false] - When true, menu operates in popup mode (hidden by default)
 * @param {boolean} [visible=false] - Visibility state for popup mode
 * @param {string} [breakpoint='767px'] - Breakpoint for responsive behavior (mobile/tablet)
 * @param {function} [onItemSelect] - Callback when an item is selected; receives the item object
 * @param {function} [onHide] - Callback when menu should be hidden (popup mode)
 * @param {function} [onShow] - Callback when menu is shown (popup mode)
 * @param {HTMLElement} [target] - Target element for popup positioning (button that triggers menu)
 * @param {string} [customClass] - Additional CSS classes
 * @param {function} [registerRef] - Callback invoked with the component instance (e.g. for calling hide() from parent)
 */
export default class UlxTieredmenu extends Component {
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

	get rootClasses() {
		const { popup = false, customClass } = this.args;
		const parts = [this.baseClass];

		popup && parts.push("popup");
		popup && this.animationState && parts.push(this.animationState);

		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get model() {
		return this.args.model ?? [];
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
		// In popup mode, render if visible or animating out
		if (this.isPopup) {
			// Render if visible
			if (this.args.visible === true) {
				return true;
			}
			// Render if already animating out
			if (this.animationState?.startsWith("exit")) {
				return true;
			}
			// Render if menu was shown (enter states) but visible just became false
			// This ensures the element stays in DOM long enough for exit animation to start
			if (
				!this.args.visible &&
				(this.animationState === "enter-done" ||
					this.animationState === "enter-active" ||
					this.animationState === "enter")
			) {
				return true;
			}
			return false;
		}
		return true;
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
		if (this.isDisabled(item)) {
			return;
		}

		const { key } = event;
		const hasSubmenu = this.hasSubmenu(item);

		switch (key) {
			case "Enter":
			case " ":
				event.preventDefault();
				if (hasSubmenu) {
					this.toggleSubmenu(itemId, parentId, event);
				} else {
					this.handleItemClick(item, itemId, parentId, event);
				}
				break;

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
		return Array.from(
			listElement.querySelectorAll(
				":scope > li > .tieredmenu-item-link:not([aria-disabled='true'])"
			) ?? []
		);
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
			const firstLink = submenuDiv?.querySelector(
				".tieredmenu-list > li > .tieredmenu-item-link:not([aria-disabled='true'])"
			);
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
		// Only mark as active if this specific item's submenu is open
		(this.isSubmenuOpen(itemId) || this.hoveredItemId === itemId) && parts.push("active");
		this.isDisabled(item) && parts.push("disabled");
		return parts.filter(Boolean).join(" ");
	}

	/**
	 * Gets classes for a submenu
	 */
	@action
	getSubmenuClasses(itemId) {
		const parts = ["tieredmenu-submenu"];
		this.isSubmenuOpen(itemId) && parts.push("open");
		return parts.filter(Boolean).join(" ");
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
	 * Renders a menu item with its submenu (recursive)
	 */
	@action
	renderMenuItem(itemData) {
		return {
			...itemData,
			hasSubmenu: this.hasSubmenu(itemData.item),
			isDisabled: this.isDisabled(itemData.item),
			isSeparator: this.isSeparator(itemData.item),
			isSubmenuOpen: this.isSubmenuOpen(itemData.itemId),
			itemClasses: this.getItemClasses(itemData.item, itemData.itemId),
			submenuClasses: this.getSubmenuClasses(itemData.itemId),
			submenuId: this.getSubmenuId(itemData.itemId),
			tabindex: "0"
		};
	}

	/**
	 * Handles popup show animation
	 */
	@action
	handleShow() {
		if (!this.isPopup || !this.containerElement) return;

		// Prevent multiple calls - if already animating or done, don't restart
		if (
			this.animationState === "enter" ||
			this.animationState === "enter-active" ||
			this.animationState === "enter-done"
		) {
			return;
		}

		// Ensure we have a target
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

		// Position overlay and set z-index
		this.alignOverlay();
		this.setZIndex();

		// Track transition completion
		let transitionCompleted = false;
		const transitionDuration = 200; // Match CSS transition duration (0.2s from LESS file)
		let transitionEndTimeout = null;

		// Function to complete the enter animation
		const completeEnterAnimation = () => {
			if (!transitionCompleted && this.animationState === "enter-active") {
				transitionCompleted = true;
				this.animationState = "enter-done";
				this.containerElement.removeEventListener("transitionend", handleTransitionEnd);
				if (transitionEndTimeout) {
					clearTimeout(transitionEndTimeout);
					transitionEndTimeout = null;
				}
			}
		};

		// Listen for transition end - CSS transitions both opacity and transform
		const handleTransitionEnd = (event) => {
			// Only process events from the container element
			if (event.target !== this.containerElement) return;

			// The transition affects both opacity and transform
			// We want to complete when either finishes (they should finish together)
			if (event.propertyName === "opacity" || event.propertyName === "transform") {
				completeEnterAnimation();
			}
		};

		this.containerElement.addEventListener("transitionend", handleTransitionEnd);

		// Trigger enter-active after frames to allow browser to apply initial styles and start transition
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "enter") {
					this.animationState = "enter-active";

					// Fallback timeout - ensure we complete even if transitionend doesn't fire
					// Use slightly longer than transition duration to account for any delays
					transitionEndTimeout = setTimeout(() => {
						completeEnterAnimation();
					}, transitionDuration + 100); // 300ms total to be safe
				}
			});
		});
	}

	/**
	 * Handles popup hide animation
	 */
	@action
	handleHide() {
		if (!this.isPopup || !this.containerElement) return;

		// Prevent multiple calls - if already animating out or done, don't restart
		if (
			this.animationState === "exit" ||
			this.animationState === "exit-active" ||
			this.animationState === "exit-done"
		) {
			return;
		}

		// Set exit state
		this.animationState = "exit";

		// Track transition completion
		let transitionCompleted = false;
		const transitionDuration = 200; // Match CSS transition duration (0.2s from LESS file)
		let transitionEndTimeout = null;

		// Function to complete the exit animation
		const completeExitAnimation = () => {
			if (!transitionCompleted && this.animationState === "exit-active") {
				transitionCompleted = true;
				this.animationState = "exit-done";
				this.clearZIndex();
				this.args.onHide?.();
				// Reset state after a brief delay
				setTimeout(() => {
					this.animationState = null;
				}, 50);
				this.containerElement.removeEventListener("transitionend", handleTransitionEnd);
				if (transitionEndTimeout) {
					clearTimeout(transitionEndTimeout);
					transitionEndTimeout = null;
				}
			}
		};

		// Listen for transition end - CSS transitions both opacity and transform
		const handleTransitionEnd = (event) => {
			// Only process events from the container element
			if (event.target !== this.containerElement) return;

			// The transition affects both opacity and transform
			// We want to complete when either finishes (they should finish together)
			if (event.propertyName === "opacity" || event.propertyName === "transform") {
				completeExitAnimation();
			}
		};

		this.containerElement.addEventListener("transitionend", handleTransitionEnd);

		// Trigger exit-active after frames to allow browser to apply initial styles and start transition
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (this.animationState === "exit") {
					this.animationState = "exit-active";

					// Fallback timeout - ensure we complete even if transitionend doesn't fire
					// Use slightly longer than transition duration to account for any delays
					transitionEndTimeout = setTimeout(() => {
						completeExitAnimation();
					}, transitionDuration + 100); // 300ms total to be safe
				}
			});
		});
	}

	/**
	 * Aligns overlay to target element
	 */
	@action
	alignOverlay() {
		if (!this.containerElement || !this.targetElement) return;

		const container = this.containerElement;
		const target = this.targetElement;

		// Get target position relative to viewport
		const targetRect = target.getBoundingClientRect();

		// Get container dimensions (may need to measure)
		const containerRect = container.getBoundingClientRect();
		const menuWidth = containerRect.width || container.offsetWidth || 180;
		const menuHeight = containerRect.height || container.offsetHeight || 200;

		// Calculate position relative to viewport
		let top = targetRect.bottom;
		let left = targetRect.left;

		// Check if menu fits on screen
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		// Adjust horizontal position if needed
		if (left + menuWidth > viewportWidth - scrollbarWidth) {
			// Try positioning to the left of target
			const leftPosition = targetRect.right - menuWidth;
			if (leftPosition >= 0) {
				left = leftPosition;
			} else {
				// Not enough space, align to right edge
				left = viewportWidth - menuWidth - scrollbarWidth - 10;
			}
		}
		if (left < 0) {
			left = 10;
		}

		// Adjust vertical position if needed
		if (top + menuHeight > viewportHeight) {
			// Position above target instead
			const topPosition = targetRect.top - menuHeight;
			if (topPosition >= 0) {
				top = topPosition;
			} else {
				// Not enough space above, position below but adjust
				top = viewportHeight - menuHeight - 10;
			}
		}
		if (top < 0) {
			top = 10;
		}

		// Convert viewport coordinates to document coordinates (align with ulx-popup)
		// so the menu moves with the target when the page scrolls.
		const scrollX = window.pageXOffset ?? window.scrollX ?? 0;
		const scrollY = window.pageYOffset ?? window.scrollY ?? 0;

		container.style.position = "absolute";
		container.style.top = `${top + scrollY}px`;
		container.style.left = `${left + scrollX}px`;
		container.style.right = "auto";
		container.style.bottom = "auto";
		container.style.margin = "0";
	}

	/**
	 * Sets z-index for popup
	 */
	@action
	setZIndex() {
		if (!this.containerElement || !this.isPopup) return;

		// Keep menu above adjacent overlay surfaces.
		const baseZIndex = 1100;
		this.zIndex = baseZIndex;
		this.containerElement.style.zIndex = baseZIndex;
	}

	/**
	 * Clears z-index
	 */
	@action
	clearZIndex() {
		if (this.containerElement) {
			this.containerElement.style.zIndex = "";
		}
		this.zIndex = null;
	}

	/**
	 * Modifier to append popup to body
	 */
	appendToBody = modifier((element, [isPopup, shouldRender]) => {
		if (!isPopup || !shouldRender) {
			// If not popup or shouldn't render, ensure element is removed from body
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
			return;
		}

		// Only append if not already in body
		if (element.parentNode !== document.body) {
			document.body.appendChild(element);
		}

		return () => {
			// Remove from body when component is destroyed or hidden
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
		};
	});

	/**
	 * Modifier to handle container element reference and positioning
	 */
	setContainerRef = modifier((element) => {
		this.containerElement = element;

		// Set target from args if provided
		if (this.args.target) {
			this.targetElement = this.args.target;
		}

		// Don't trigger show here - let watchVisibility handle it
		// This modifier just sets up the reference

		return () => {
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
		return () => {};
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
	hide(event) {
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
			this.hide(event);
		} else {
			this.show(event);
		}
	}

	/**
	 * Modifier to watch visibility changes and trigger animations
	 */
	watchVisibility = modifier((element, [isVisible, isPopup, targetElement]) => {
		if (!isPopup) return;

		// Update target element if provided
		if (targetElement && targetElement !== this.targetElement) {
			this.targetElement = targetElement;
		}

		// Track transition from hidden to visible
		const previousVisible = this._previousVisible;
		const isTransitioningToVisible = !previousVisible && isVisible;
		const isTransitioningToHidden = previousVisible && !isVisible;

		if (isVisible) {
			// Only trigger show if:
			// 1. We're transitioning from not visible to visible (or first time visible)
			// 2. Animation is not already in progress or completed
			const shouldShow =
				isTransitioningToVisible &&
				this.animationState !== "enter" &&
				this.animationState !== "enter-active" &&
				this.animationState !== "enter-done";

			if (shouldShow) {
				this.args.onShow?.(this._showEvent);
				this._showEvent = null;
				// Ensure we have a target before showing
				if (this.targetElement || this.args.target) {
					if (!this.targetElement && this.args.target) {
						this.targetElement = this.args.target;
					}
					// Wait for element to be in body before showing
					const checkAndShow = () => {
						if (element.parentNode === document.body || !this.isPopup) {
							// Double check state hasn't changed before calling handleShow
							if (
								this.animationState !== "enter" &&
								this.animationState !== "enter-active" &&
								this.animationState !== "enter-done"
							) {
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
			// Update previous visible state AFTER handling show
			this._previousVisible = isVisible;
		} else if (!isVisible) {
			// Handle hide - check if menu was visible (either from previousVisible or animationState)
			// Menu is considered visible if:
			// 1. previousVisible was true (tracked state) - indicates transition from visible to hidden
			// 2. OR animationState indicates it was shown (enter states) - fallback if tracking is off
			const isMenuCurrentlyShown =
				this.animationState === "enter-done" ||
				this.animationState === "enter-active" ||
				this.animationState === "enter";
			const wasVisible = isTransitioningToHidden || isMenuCurrentlyShown;

			// Only trigger hide if:
			// 1. Menu was visible (wasVisible is true)
			// 2. Not already hiding (animationState doesn't start with "exit")
			// 3. Animation state exists (not null) OR we're transitioning from visible (fallback)
			if (
				wasVisible &&
				(this.animationState !== null || isTransitioningToHidden) &&
				!this.animationState?.startsWith("exit")
			) {
				// Use requestAnimationFrame to ensure DOM is ready for animation
				// This ensures the element is still in the DOM and classes can be applied
				requestAnimationFrame(() => {
					// Double-check state hasn't changed and container still exists
					if (this.containerElement && !this.animationState?.startsWith("exit")) {
						this.handleHide();
					}
				});
			}
			// Update previous visible state AFTER handling hide
			this._previousVisible = isVisible;
		} else {
			// No change, just update the tracking
			this._previousVisible = isVisible;
		}

		// Reposition if visible and target changed (for dynamic target updates)
		// Only reposition if animation is complete
		if (
			isVisible &&
			this.animationState === "enter-done" &&
			this.targetElement &&
			this.containerElement
		) {
			this.alignOverlay();
		}
	});

	/**
	 * Modifier to focus first item when menu becomes visible (popup mode)
	 */
	focusFirstItemOnVisible = modifier((element, [isVisible, animationState]) => {
		if (isVisible && this.isPopup && animationState === "enter-done") {
			const firstLink = element?.querySelector(".tieredmenu-item-link:not([aria-disabled='true'])");
			if (firstLink) {
				setTimeout(() => firstLink.focus({ preventScroll: true }), 0);
			}
		}
	});

	/**
	 * Modifier to handle click outside for popup mode
	 */
	closeOnClickOutside = modifier((element) => {
		if (!this.isPopup) {
			// For non-popup mode, only close submenus
			const handleClick = (event) => {
				if (!element.contains(event.target)) {
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

		// For popup mode, close the entire menu when clicking outside
		const handleClick = (event) => {
			const isOutsideContainer = element && !element.contains(event.target);
			const isOutsideTarget =
				this.targetElement &&
				!(this.targetElement === event.target || this.targetElement.contains(event.target));

			if (isOutsideContainer && isOutsideTarget && this.isVisible) {
				this.handleHide();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	});

	/**
	 * Modifier to handle window resize (close popup on resize)
	 */
	handleResize = modifier(() => {
		if (!this.isPopup || !this.isVisible) return;

		const handleResize = () => {
			if (this.isVisible) {
				this.handleHide();
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	<template>
		{{#if this.shouldRender}}
			<div
				class={{this.rootClasses}}
				role="menubar"
				aria-orientation="vertical"
				data-qa="ulx-tieredmenu"
				{{this.appendToBody this.isPopup this.shouldRender}}
				{{this.setContainerRef}}
				{{this.registerRefModifier}}
				{{this.watchVisibility this.isVisible this.isPopup this.args.target}}
				{{this.focusFirstItemOnVisible this.isVisible this.animationState}}
				{{this.closeOnClickOutside}}
				{{this.handleResize}}
				...attributes
			>
				<ul class="tieredmenu-list" data-qa="ulx-tieredmenu-list" {{this.setMenuRef}}>
					<UlxTieredmenuMenuList
						@items={{this.model}}
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
