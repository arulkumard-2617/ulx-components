import { htmlSafe as safeHtml } from '@ember/template';
import { helper } from '@ember/component/helper';
import sanitizeUtil from '../utils/sanitize-util.js';

export function ulxHtmlSafe(message) {
	return safeHtml(sanitizeUtil.sanitizeHtml(message));
}

export default helper(function ([message]) {
	return ulxHtmlSafe(message);
});
