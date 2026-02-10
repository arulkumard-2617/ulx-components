import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const scale = [
	{ token: '@4px', rem: '0.285rem', usage: 'Tight gaps' },
	{ token: '@8px', rem: '0.57rem', usage: 'Compact padding' },
	{ token: '@12px', rem: '0.86rem', usage: 'Default vertical rhythm' },
	{ token: '@16px', rem: '1.14rem', usage: 'Card padding' },
	{ token: '@24px', rem: '1.71rem', usage: 'Section spacing' },
	{ token: '@32px', rem: '2.28rem', usage: 'Page gutters' }
];

export default function SpacingScale() {
	return (
		<FoundationSection
			id="spacing-scale"
			title="Token Scale"
			subtitle="Every spacing utility maps to these canonical tokens."
		>
			<table className="ulx-foundation-table w-100p">
				<thead>
					<tr>
						<th>Token</th>
						<th>REM value</th>
						<th>Usage</th>
					</tr>
				</thead>
				<tbody>
					{scale.map((row) => (
						<tr key={row.token}>
							<td>
								<code>{row.token}</code>
							</td>
							<td>{row.rem}</td>
							<td>{row.usage}</td>
						</tr>
					))}
				</tbody>
			</table>
		</FoundationSection>
	);
}
