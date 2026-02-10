import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { modifier } from "ember-modifier";
import { LinkTo } from "@ember/routing";
import { getComponentClass } from "../../../utils/component-config";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

/**
 * TabMenu component for displaying menu items as tab headers.
 *
 * ## Rendering Behavior
 * - **Default rendering**: When no `:item` named block is provided, the component automatically renders `item.icon` and `item.label` from the model.
 * - **Custom rendering with named blocks**: When using the `:item` named block, the component does NOT automatically render `label` or `icon` from the model. The named block receives the full `item` object, allowing you to customize the content entirely.
 *   - **Important**: Even if your model includes `label` or `icon` properties, they will NOT be rendered automatically when using a named block. You can safely access `item.label` or `item.icon` within your block without worrying about duplicates - the component only renders what you explicitly put in the named block.
 *
 * ## WCAG
 * - Uses `role="menubar"` for the navigation container
 * - Each item has `role="menuitem"` with proper `aria-label` and `aria-disabled`
 * - Keyboard support: Tab, Enter, Space, Arrow keys, Home, End
 * - Focus management: Active tab receives focus when component is focused
 *
 * @class UlxTabmenu
 * @param {Array<Object>} [model] - Array of menu item objects. Each item can have:
 *   - `label` (string): Display text for the tab (only rendered automatically when NOT using `:item` named block)
 *   - `icon` (string): Icon name/class for the tab (only rendered automatically when NOT using `:item` named block)
 *   - `iconType` (string): Icon type for UlxIcon (e.g., "font", "svg")
 *   - `iconComponentClass` (string): Custom component class for UlxIcon
 *   - `iconSize` (string): Size for UlxIcon
 *   - `command` (Function): Callback function when tab is activated: (event, item) => void
 *   - `disabled` (boolean): Whether the tab is disabled
 *   - `route` (string): Ember route name for LinkTo navigation (takes precedence over `url`)
 *   - `models` (Array|Object): Route models for LinkTo (e.g., [id] or { id: 1 })
 *   - `query` (Object): Query parameters for LinkTo (e.g., { page: 1 })
 *   - `url` (string): URL for navigation (used when `route` is not provided)
 *   - `target` (string): Target attribute for links (e.g., "_blank")
 * @param {number} [activeIndex] - Controlled active tab index (0-based). When provided, component is controlled.
 * @param {Function} [onTabChange] - Callback fired when active tab changes: (event) => void. Event has `index` and `originalEvent` properties.
 * @param {string} [variant] - Visual variant (for future use).
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [ariaLabel] - Accessible label for the menubar. Use `aria-labelledby` if referencing an existing label.
 * @param {string} [ariaLabelledBy] - ID of element that labels the menubar.
 *
 * @example
 * // Default rendering (automatically renders label and icon)
 * <UlxTabmenu @model={{this.items}} />
 *
 * @example
 * // Using LinkTo for Ember routing
 * <UlxTabmenu @model={{this.items}} />
 * // items: [
 * //   { label: 'Dashboard', route: 'dashboard' },
 * //   { label: 'Users', route: 'users.index', models: [123] },
 * //   { label: 'Settings', route: 'settings', query: { tab: 'general' } }
 * // ]
 *
 * @example
 * // Custom rendering with named block (label/icon NOT rendered automatically)
 * // Note: Even if items have 'label' property, it won't be rendered automatically.
 * // You can safely use item.label in your block without duplicates.
 * <UlxTabmenu @model={{this.items}}>
 *   <:item as |item|>
 *     <div class="fxb fvc gp2">
 *       <UlxAvatar @image={{item.imageUrl}} />
 *       <span class="tabmenu-label">{{item.label}}</span>
 *       <UlxBadge @value={{item.badgeValue}} />
 *     </div>
 *   </:item>
 * </UlxTabmenu>
 */
export default class UlxTabmenu extends Component {
	get baseClass() {
		return getComponentClass("tabmenu");
	}

	get rootClasses() {
		const { variant, customClass } = this.args;

		const parts = [this.baseClass];
		variant && parts.push(variant);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get model() {
		return this.args.model ?? [];
	}

	get activeIndex() {
		return this.args.activeIndex ?? this._internalActiveIndex ?? 0;
	}

	get isControlled() {
		return this.args.activeIndex != null;
	}

	get ariaLabel() {
		return this.args.ariaLabel;
	}

	get ariaLabelledBy() {
		return this.args.ariaLabelledBy;
	}

	get role() {
		return "menubar";
	}

	get inkbarStyleString() {
		return `left: ${this.inkbarStyle.left}; width: ${this.inkbarStyle.width};`;
	}

	@tracked _internalActiveIndex = 0;
	@tracked inkbarElement = null;
	@tracked inkbarStyle = {
		left: "0px",
		width: "0px"
	};

	@action
	getItemId(index) {
		return `ulx-tabmenu-item-${index}`;
	}

	@action
	getItemClasses(index) {
		const model = this.args.model ?? [];
		if (!Array.isArray(model)) return "";

		const item = model[index];
		if (!item) return "";

		const parts = ["tabmenu-item"];
		this.activeIndex === index && parts.push("active");
		item.disabled && parts.push("disabled");

		return parts.join(" ");
	}

	@action
	getTabIndex(index) {
		const model = this.args.model ?? [];
		if (!Array.isArray(model)) return "0";

		const item = model[index];
		if (item?.disabled) {
			return "-1";
		}
		return "0";
	}

	@action
	getLinkClasses(index) {
		const model = this.args.model ?? [];
		if (!Array.isArray(model)) return "";

		const item = model[index];
		if (!item) return "";

		const parts = ["tabmenu-link"];
		item.disabled && parts.push("disabled");

		return parts.join(" ");
	}

	@action
	getLinkToModels(item) {
		// Return models only if it's a valid array, otherwise return undefined
		// LinkTo will ignore undefined arguments
		if (item?.models && Array.isArray(item.models)) {
			return item.models;
		}
		return undefined;
	}

	@action
	getLinkToQuery(item) {
		// Return query only if it's a valid object, otherwise return undefined
		// LinkTo will ignore undefined arguments
		if (item?.query && typeof item.query === "object" && !Array.isArray(item.query)) {
			return item.query;
		}
		return undefined;
	}

	@action
	handleItemClick(item, index, event) {
		if (item.disabled) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		if (!this.isControlled) {
			this._internalActiveIndex = index;
		}

		if (item.command) {
			item.command(event, item);
		}

		if (this.args.onTabChange) {
			this.args.onTabChange({
				index,
				originalEvent: event
			});
		}

		// Update inkbar position after tab change
		requestAnimationFrame(
			function () {
				this.updateInkbarPosition();
			}.bind(this)
		);
	}

	@action
	handleKeydown(item, index, event) {
		if (item.disabled) {
			return;
		}

		let newIndex = index;

		switch (event.key) {
			case "Enter":
			case " ": {
				event.preventDefault();
				this.handleItemClick(item, index, event);
				break;
			}
			case "ArrowRight": {
				event.preventDefault();
				newIndex = this.getNextEnabledIndex(index);
				if (newIndex !== index) {
					this.focusTab(newIndex);
				}
				break;
			}
			case "ArrowLeft": {
				event.preventDefault();
				newIndex = this.getPreviousEnabledIndex(index);
				if (newIndex !== index) {
					this.focusTab(newIndex);
				}
				break;
			}
			case "Home": {
				event.preventDefault();
				newIndex = this.getFirstEnabledIndex();
				if (newIndex !== -1) {
					this.focusTab(newIndex);
				}
				break;
			}
			case "End": {
				event.preventDefault();
				newIndex = this.getLastEnabledIndex();
				if (newIndex !== -1) {
					this.focusTab(newIndex);
				}
				break;
			}
		}
	}

	getNextEnabledIndex(currentIndex) {
		for (let i = currentIndex + 1; i < this.model.length; i++) {
			if (!this.model[i]?.disabled) {
				return i;
			}
		}
		return currentIndex;
	}

	getPreviousEnabledIndex(currentIndex) {
		for (let i = currentIndex - 1; i >= 0; i--) {
			if (!this.model[i]?.disabled) {
				return i;
			}
		}
		return currentIndex;
	}

	getFirstEnabledIndex() {
		for (let i = 0; i < this.model.length; i++) {
			if (!this.model[i]?.disabled) {
				return i;
			}
		}
		return -1;
	}

	getLastEnabledIndex() {
		for (let i = this.model.length - 1; i >= 0; i--) {
			if (!this.model[i]?.disabled) {
				return i;
			}
		}
		return -1;
	}

	@action
	focusTab(index) {
		const element = document.getElementById(this.getItemId(index));
		if (element) {
			element.focus();
		}
	}

	@action
	updateInkbarPosition() {
		if (!this.inkbarElement) return;

		const navElement = this.inkbarElement.closest(".tabmenu-nav");
		if (!navElement) return;

		// Find the active, enabled tab item similar to PrimeReact:
		// prefer `.tabmenu-item.active` and fall back to the first non-disabled item.
		const items = Array.from(navElement.children).filter(function (el) {
			return el.classList?.contains("tabmenu-item");
		});

		let activeItemElement =
			items.find(function (el) {
				return el.classList.contains("active") && !el.classList.contains("disabled");
			}) ??
			items.find(function (el) {
				return !el.classList.contains("disabled");
			});

		if (!activeItemElement) {
			this.inkbarStyle = { left: "0px", width: "0px" };
			return;
		}

		const navRect = navElement.getBoundingClientRect();
		const itemRect = activeItemElement.getBoundingClientRect();

		const left = itemRect.left - navRect.left;
		const width = itemRect.width;

		this.inkbarStyle = {
			left: `${left}px`,
			width: `${width}px`
		};
	}

	inkbarModifier = modifier(
		function (element) {
			this.inkbarElement = element;

			// Update immediately
			this.updateInkbarPosition();

			// Update on next frame to ensure DOM is ready
			const self = this;
			requestAnimationFrame(function () {
				self.updateInkbarPosition();
			});

			// Update on resize
			const resizeObserver = new ResizeObserver(function () {
				self.updateInkbarPosition();
			});

			const navElement = element.closest(".tabmenu-nav");
			if (navElement) {
				resizeObserver.observe(navElement);
			}

			return function () {
				resizeObserver.disconnect();
				self.inkbarElement = null;
			};
		}.bind(this)
	);

	<template>
		<div class={{this.rootClasses}}>
			<ul
				class="tabmenu-nav"
				role={{this.role}}
				aria-label={{this.ariaLabel}}
				aria-labelledby={{this.ariaLabelledBy}}
				...attributes
			>
				{{#each this.model as |item index|}}
					<li class={{this.getItemClasses index}} role="presentation">
						{{#if item.route}}
							{{#if item.disabled}}
								{{! Disabled LinkTo - render as span }}
								<span
									id={{this.getItemId index}}
									class={{this.getLinkClasses index}}
									role="menuitem"
									aria-label={{item.label}}
									aria-disabled="true"
									tabindex="-1"
								>
									{{#if (has-block "item")}}
										{{yield item to="item"}}
									{{else}}
										{{#if item.icon}}
											<span class="tabmenu-icon">
												<UlxIcon
													@iconName={{item.icon}}
													@type={{item.iconType}}
													@componentClass={{item.iconComponentClass}}
													@size={{item.iconSize}}
												/>
											</span>
										{{/if}}
										{{#if item.label}}
											<span class="tabmenu-label">{{item.label}}</span>
										{{/if}}
									{{/if}}
								</span>
							{{else}}
								{{! LinkTo with Ember route - use single LinkTo with conditional arguments }}
								{{#let (this.getLinkToModels item) (this.getLinkToQuery item) as |models query|}}
									{{#if models}}
										{{#if query}}
											{{! Both models and query }}
											<LinkTo
												@route={{item.route}}
												@models={{models}}
												@query={{query}}
												id={{this.getItemId index}}
												class={{this.getLinkClasses index}}
												role="menuitem"
												aria-label={{item.label}}
												tabindex={{this.getTabIndex index}}
												{{on "click" (fn this.handleItemClick item index)}}
												{{on "keydown" (fn this.handleKeydown item index)}}
											>
												{{#if (has-block "item")}}
													{{yield item to="item"}}
												{{else}}
													{{#if item.icon}}
														<span class="tabmenu-icon">
															<UlxIcon
																@iconName={{item.icon}}
																@type={{item.iconType}}
																@componentClass={{item.iconComponentClass}}
																@size={{item.iconSize}}
															/>
														</span>
													{{/if}}
													{{#if item.label}}
														<span class="tabmenu-label">{{item.label}}</span>
													{{/if}}
												{{/if}}
											</LinkTo>
										{{else}}
											{{! Models only }}
											<LinkTo
												@route={{item.route}}
												@models={{models}}
												id={{this.getItemId index}}
												class={{this.getLinkClasses index}}
												role="menuitem"
												aria-label={{item.label}}
												tabindex={{this.getTabIndex index}}
												{{on "click" (fn this.handleItemClick item index)}}
												{{on "keydown" (fn this.handleKeydown item index)}}
											>
												{{#if (has-block "item")}}
													{{yield item to="item"}}
												{{else}}
													{{#if item.icon}}
														<span class="tabmenu-icon">
															<UlxIcon
																@iconName={{item.icon}}
																@type={{item.iconType}}
																@componentClass={{item.iconComponentClass}}
																@size={{item.iconSize}}
															/>
														</span>
													{{/if}}
													{{#if item.label}}
														<span class="tabmenu-label">{{item.label}}</span>
													{{/if}}
												{{/if}}
											</LinkTo>
										{{/if}}
									{{else if query}}
										{{! Query only }}
										<LinkTo
											@route={{item.route}}
											@query={{query}}
											id={{this.getItemId index}}
											class={{this.getLinkClasses index}}
											role="menuitem"
											aria-label={{item.label}}
											tabindex={{this.getTabIndex index}}
											{{on "click" (fn this.handleItemClick item index)}}
											{{on "keydown" (fn this.handleKeydown item index)}}
											{{on "focus" (fn this.handleFocus index)}}
											{{on "blur" this.handleBlur}}
										>
											{{#if (has-block "item")}}
												{{yield item to="item"}}
											{{else}}
												{{#if item.icon}}
													<span class="tabmenu-icon">
														<UlxIcon
															@iconName={{item.icon}}
															@type={{item.iconType}}
															@componentClass={{item.iconComponentClass}}
															@size={{item.iconSize}}
														/>
													</span>
												{{/if}}
												{{#if item.label}}
													<span class="tabmenu-label">{{item.label}}</span>
												{{/if}}
											{{/if}}
										</LinkTo>
									{{else}}
										{{! Route only }}
										<LinkTo
											@route={{item.route}}
											id={{this.getItemId index}}
											class={{this.getLinkClasses index}}
											role="menuitem"
											aria-label={{item.label}}
											tabindex={{this.getTabIndex index}}
											{{on "click" (fn this.handleItemClick item index)}}
											{{on "keydown" (fn this.handleKeydown item index)}}
											{{on "focus" (fn this.handleFocus index)}}
											{{on "blur" this.handleBlur}}
										>
											{{#if (has-block "item")}}
												{{yield item to="item"}}
											{{else}}
												{{#if item.icon}}
													<span class="tabmenu-icon">
														<UlxIcon
															@iconName={{item.icon}}
															@type={{item.iconType}}
															@componentClass={{item.iconComponentClass}}
															@size={{item.iconSize}}
														/>
													</span>
												{{/if}}
												{{#if item.label}}
													<span class="tabmenu-label">{{item.label}}</span>
												{{/if}}
											{{/if}}
										</LinkTo>
									{{/if}}
								{{/let}}
							{{/if}}
						{{else if item.url}}
							{{! Link with URL }}
							<a
								id={{this.getItemId index}}
								class={{this.getLinkClasses index}}
								href={{item.url}}
								target={{item.target}}
								role="menuitem"
								aria-label={{item.label}}
								aria-disabled={{if item.disabled "true"}}
								tabindex={{this.getTabIndex index}}
								{{on "click" (fn this.handleItemClick item index)}}
								{{on "keydown" (fn this.handleKeydown item index)}}
								{{on "focus" (fn this.handleFocus index)}}
								{{on "blur" this.handleBlur}}
							>
								{{#if (has-block "item")}}
									{{yield item to="item"}}
								{{else}}
									{{#if item.icon}}
										<span class="tabmenu-icon">
											<UlxIcon
												@iconName={{item.icon}}
												@type={{item.iconType}}
												@componentClass={{item.iconComponentClass}}
												@size={{item.iconSize}}
											/>
										</span>
									{{/if}}
									{{#if item.label}}
										<span class="tabmenu-label">{{item.label}}</span>
									{{/if}}
								{{/if}}
							</a>
						{{else}}
							{{! Button without URL or route }}
							<button
								type="button"
								id={{this.getItemId index}}
								class={{this.getLinkClasses index}}
								role="menuitem"
								aria-label={{item.label}}
								aria-disabled={{if item.disabled "true"}}
								disabled={{item.disabled}}
								tabindex={{this.getTabIndex index}}
								{{on "click" (fn this.handleItemClick item index)}}
								{{on "keydown" (fn this.handleKeydown item index)}}
								{{on "focus" (fn this.handleFocus index)}}
								{{on "blur" this.handleBlur}}
							>
								{{#if (has-block "item")}}
									{{yield item to="item"}}
								{{else}}
									{{#if item.icon}}
										<span class="tabmenu-icon">
											<UlxIcon
												@iconName={{item.icon}}
												@type={{item.iconType}}
												@componentClass={{item.iconComponentClass}}
												@size={{item.iconSize}}
											/>
										</span>
									{{/if}}
									{{#if item.label}}
										<span class="tabmenu-label">{{item.label}}</span>
									{{/if}}
								{{/if}}
							</button>
						{{/if}}
					</li>
				{{/each}}
				<span
					class="tabmenu-inkbar"
					role="presentation"
					aria-hidden="true"
					style={{this.inkbarStyleString}}
					{{this.inkbarModifier}}
				></span>
			</ul>
		</div>
	</template>
}
