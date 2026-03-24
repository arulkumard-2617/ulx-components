import { helper } from '@ember/component/helper';
import { t as t$1 } from '../utils/i18n.js';

/**
 * Template helper that resolves a translation key with optional interpolation.
 *
 * Usage in .gjs templates:
 *
 *   {{t "btn.save"}}
 *   {{t "lbl.day.no" number=3}}
 *   {{t "err.required" field="Email"}}
 *
 * The first positional argument is the translation key.
 * All named arguments are treated as interpolation parameters.
 *
 * @example
 *   // Import at the top of a .gjs file:
 *   import tHelper from "ulx-components/helpers/t";
 *
 *   <template>
 *     <span>{{tHelper "msg.welcome.user" name=@userName}}</span>
 *   </template>
 */
var t = helper(function t(positional, named) {
  const key = positional[0];
  return t$1(key, named);
});

export { t as default };
//# sourceMappingURL=t.js.map
