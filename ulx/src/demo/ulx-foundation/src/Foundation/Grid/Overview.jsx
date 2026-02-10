import React from 'react';
import FoundationSection from '../../components/FoundationSection';

export default function GridOverview() {
	return (
		<FoundationSection
			id="grid-overview"
			title="Grid System"
			subtitle="Unified API for CSS Grid and flex layouts."
		>
			<article className="ulx-foundation-card w-45p pd6 rds2 bd">
				<h3 className="mgt0">CSS Grid</h3>
				<p className="fg-secondary">`.ulx-grid` handles columns, gaps, responsive breakpoints.</p>
			</article>
			<article className="ulx-foundation-card w-45p pd6 rds2 bd">
				<h3 className="mgt0">Flexbox</h3>
				<p className="fg-secondary">
					`.ulx-column` applies flex utilities for stacks, alignment, and spacing.
				</p>
			</article>
		</FoundationSection>
	);
}
