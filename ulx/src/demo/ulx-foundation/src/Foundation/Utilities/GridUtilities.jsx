import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const gridUtilities = [
	{
		className: '.ulx-grid',
		property: 'display: grid; 12-column template with gap: @16px and `min-width: 0`.'
	},
	{ className: '.ulx-grid.compact / .comfortable', property: 'gap presets (`@8px` and `@24px`).' },
	{
		className: '.ulx-grid.auto-fit / .auto-fill',
		property: 'responsive `repeat(auto-fit|auto-fill, minmax(250px, 1fr))` templates.'
	},
	{
		className: '.ulx-grid.masonry / .gallery / .dashboard',
		property: 'pre-built layout patterns for specific use cases.'
	},
	{
		className: 'col-1, col-2, ... col-12',
		property: 'Direct span helpers for children within `.ulx-grid`.'
	},
	{
		className: 'col-lg-1, col-lg-2, ... col-lg-12',
		property: 'Desktop overrides (≥ @computer-breakpoint).'
	},
	{
		className: 'col-md-1, col-md-2, ... col-md-12',
		property: 'Small computer overrides (≤ @largest-small-computer-screen).'
	},
	{
		className: 'col-sm-1, col-sm-2, ... col-sm-12',
		property: 'Tablet overrides (≤ @largest-tablet-screen).'
	},
	{
		className: 'col-xs-1, col-xs-2, ... col-xs-12',
		property: 'Mobile overrides (≤ @largest-mobile-screen).'
	},
	{
		className: '.ulx-grid.gap-none / gap-xs / gap-sm / …',
		property: 'Gap modifiers from @8px through @32px, plus column/row gap utilities.'
	}
];

export default function GridUtilities() {
	return (
		<FoundationSection
			id="utilities-grid"
			title="Grid Utilities"
			subtitle="Grid utility classes for layout."
		>
			<ClassPropertyTable rows={gridUtilities} columnLabels={['Selector / Class', 'Description']} />
		</FoundationSection>
	);
}
