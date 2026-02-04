import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const utilityGroups = [
	{
		name: 'Padding',
		classes: '.pd1 - .pd15, .pdx1 - .pdx15, .pdy1 - .pdy15'
	},
	{
		name: 'Margin',
		classes: '.mg1 - .mg15, .mgx1 - .mgx15, .mgy1 - .mgy15'
	},
	{
		name: 'Gap',
		classes: '.gp1 - .gp15, .hgap1 - .hgap15, .vgap1 - .vgap15'
	}
];

export default function SpacingUtilities() {
	return (
		<FoundationSection
			id="spacing-utilities"
			title="Utilities"
			subtitle="Utilities mirror the base token scale, making the spacing system predictable."
		>
			{utilityGroups.map((group) => (
				<article key={group.name} className="ulx-foundation-card w-30p pd6 rds2 bd">
					<h3 className="mgt0">{group.name}</h3>
					<p className="fg-secondary">{group.classes}</p>
				</article>
			))}
		</FoundationSection>
	);
}
