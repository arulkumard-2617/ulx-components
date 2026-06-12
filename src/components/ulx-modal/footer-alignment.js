const FOOTER_ALIGNMENT_TO_CLASS = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
	"space-between": "justify-between"
};

/**
 * Utility classes for footer action alignment on an inner flex row.
 *
 * @param {string} [alignment="end"]
 * @returns {string}
 */
export function getFooterAlignmentClasses(alignment = "end") {
	const justifyClass = FOOTER_ALIGNMENT_TO_CLASS[alignment] ?? FOOTER_ALIGNMENT_TO_CLASS.end;
	return `flex w-full gap-2 ${justifyClass}`;
}
