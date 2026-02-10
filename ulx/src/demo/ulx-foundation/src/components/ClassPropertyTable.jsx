import React from 'react';

function formatClassName(value) {
	if (typeof value !== 'string') {
		return typeof value === 'number' ? String(value) : '';
	}
	return value.replace(/(^|\s)\./g, '$1');
}

export default function ClassPropertyTable({ rows, columnLabels = ['Class', 'Properties'] }) {
	if (!rows?.length) {
		return null;
	}

	const [classLabel, propertyLabel] = Array.isArray(columnLabels)
		? columnLabels
		: ['Class', 'Properties'];
	const safeLabel = (v) => (typeof v === 'string' || typeof v === 'number' ? v : '');

	return (
		<div className="ulx-datatable s-size" style={{ width: '850px' }}>
			<div className="datatable-wrapper">
				<table className="datatable-table" style={{ tableLayout: 'fixed' }}>
					<thead className="datatable-header">
						<tr className="datatable-header-row">
							<th className="datatable-column-header-cell">{safeLabel(classLabel)}</th>
							<th className="datatable-column-header-cell">{safeLabel(propertyLabel)}</th>
						</tr>
					</thead>
					<tbody className="datatable-tbody">
						{rows.map(({ className, property, color }, index) => (
							<tr
								key={typeof className === 'string' ? className : `row-${index}`}
								className="datatable-body-row"
							>
								<td className="datatable-column-body-cell">
									<div className="fxb fvc gp3">
										{color && typeof color === 'string' && (
											<div
												className="rds-circle bd w20 h20 "
												style={{
													backgroundColor: color,
													borderColor: 'var(--ulx-default-border-color, #dee2e6)'
												}}
												aria-hidden="true"
											/>
										)}
										<span className="bold-font fg-primary font-size16">
											{formatClassName(className)}
										</span>
									</div>
								</td>
								<td className="datatable-column-body-cell">
									<span className="font-size16">
										{typeof property === 'string' || typeof property === 'number' ? property : ''}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
