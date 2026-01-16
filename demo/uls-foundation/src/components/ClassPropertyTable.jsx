import React from 'react';

function formatClassName(value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(/(^|\s)\./g, '$1');
}

export default function ClassPropertyTable({ rows, columnLabels = ['Class', 'Properties'] }) {
  if (!rows?.length) {
    return null;
  }

  const [classLabel, propertyLabel] = columnLabels;

  return (
    <div className='uls-datatable s-size' style={{ width: '850px' }}>
      <div className="datatable-wrapper">
        <table className="datatable-table" style={{ tableLayout: 'fixed' }}>
          <thead className='datatable-header'>
            <tr className="datatable-header-row">
              <th className="datatable-column-header-cell">{classLabel}</th>
              <th className="datatable-column-header-cell">{propertyLabel}</th>
            </tr>
          </thead>
          <tbody className='datatable-tbody'>
            {rows.map(({ className, property, color }) => (
              <tr key={className} className='datatable-body-row'>
                <td className="datatable-column-body-cell">
                  <div className="fxb fvc gp3">
                    {color && (
                      <div
                        className="rds-circle bdr w20 h20 "
                        style={{
                          backgroundColor: color,
                          borderColor: 'var(--uls-default-border-color, #dee2e6)'
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <span className='font-bold fg-primary font-size16'>{formatClassName(className)}</span>
                  </div>
                </td>
                <td className="datatable-column-body-cell">
                  <span className='font-size16'>{property}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
