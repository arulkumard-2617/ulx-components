import { helper } from "@ember/component/helper";
import { tSafe } from "../utils/i18n";

/**
 * Template helper that resolves a translation key and returns an htmlSafe string.
 * Use this only when the translation value contains trusted HTML markup.
 *
 * Usage in .gjs templates:
 *
 *   {{tSafeHelper "msg.welcome.html" name="Ada"}}
 *
 * @example
 *   import tSafeHelper from "ulx-components/helpers/t-safe";
 *
 *   <template>
 *     {{tSafeHelper "msg.formatted.message" name="Ada"}}
 *   </template>
 */
export default helper(function tSafeHelperFn(positional, named) {
	const key = positional[0];
	return tSafe(key, named);
});
