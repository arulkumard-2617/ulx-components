const i18n = {
	t(key, params = {}) {
		const template = key;
		return String(template).replace(/\{(\w+)\}/g, (match, name) => {
			return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match;
		});
	}
};

export default i18n;

export function t(key, params) {
	return i18n.t(key, params);
}
