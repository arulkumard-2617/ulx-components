import { helper } from '@ember/component/helper';
import { t as translate } from '../utils/i18n';

/**
 * Template helper that resolves a translation key with optional interpolation.
 *
 * Usage in .gjs templates:
 *
 *   {{ulx-t "btn.save"}}
 *   {{ulx-t "lbl.day.no" number=3}}
 *   {{ulx-t "err.required" field="Email"}}
 *
 * The first positional argument is the translation key.
 * All named arguments are treated as interpolation parameters.
 *
 * @example
 *   // Import at the top of a .gjs file:
 *   import ulxTHelper from "ulx-components/helpers/ulx-t";
 *
 *   <template>
 *     <span>{{ulxTHelper "msg.welcome.user" name=@userName}}</span>
 *   </template>
 */
export default helper(function ulxT(positional, named) {
	const key = positional[0];
	return translate(key, named);
});
