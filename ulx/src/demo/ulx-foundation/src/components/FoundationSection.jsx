import React from 'react';

/**
 * Lightweight wrapper for foundation documentation sections so they can render
 * consistently even when consumed outside the PrimeReact documentation app.
 */
function isReactText(value) {
	return value == null || typeof value === 'string' || typeof value === 'number';
}

export default function FoundationSection({ id, title, subtitle, children }) {
	const safeTitle = isReactText(title) ? title : null;
	const safeSubtitle = isReactText(subtitle) ? subtitle : null;

	return (
		<section id={id} className="ulx-foundation-section mgb20">
			{safeTitle != null && <h3 className="bold-font mgt0 mgb3">{safeTitle}</h3>}
			<header className="mgb4">
				{safeSubtitle != null && (
					<p className="ulx-foundation-section__subtitle mgb10 font-regular fg-text-secondary mgr0">
						{safeSubtitle}
					</p>
				)}
			</header>
			<div className="ulx-foundation-section__content w-100p">{children}</div>
		</section>
	);
}
