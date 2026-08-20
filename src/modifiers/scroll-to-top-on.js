import { modifier } from "ember-modifier";
import { schedule } from "@ember/runloop";
import { scrollElementToTop } from "../utils/scroll-util";

const previousKeys = new WeakMap();

/**
 * Scrolls the host element to top when `key` changes.
 * Skips the first run by default so open/mount does not force a jump.
 *
 * Usage: {{scrollToTopOn this.activeStepIndex}}
 * Named: {{scrollToTopOn this.activeStepIndex behavior="smooth" skipInitial=false}}
 *
 * When `key` is `undefined` or `null`, the modifier is a no-op (opt-in).
 *
 * @param {HTMLElement} element
 * @param {unknown} key
 * @param {ScrollBehavior} [behavior="auto"]
 * @param {boolean} [skipInitial=true]
 */
export default modifier((element, [key], { behavior = "auto", skipInitial = true } = {}) => {
	if (key === undefined || key === null) {
		return;
	}

	const previous = previousKeys.get(element);
	const next = key;

	if (previous === undefined) {
		previousKeys.set(element, next);
		if (!skipInitial) {
			schedule("afterRender", () => scrollElementToTop(element, behavior));
		}
		return;
	}

	if (previous !== next) {
		previousKeys.set(element, next);
		schedule("afterRender", () => scrollElementToTop(element, behavior));
	}
});
