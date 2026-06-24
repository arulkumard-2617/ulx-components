/**
 * Reads a property from a plain object or Ember Object/Model.
 * Uses `.get(key)` when available so Glimmer tracks Ember Data changes.
 *
 * @param {object} obj
 * @param {string} key
 * @returns {*}
 */
export function getValue(obj, key) {
	if (!obj) {
		return undefined;
	}

	return typeof obj.get === "function" ? obj.get(key) : obj[key];
}

export default { getValue };
