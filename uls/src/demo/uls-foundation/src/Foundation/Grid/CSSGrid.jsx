import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const modifiers = [
  { className: '.uls-grid.cols-1 ... cols-12', detail: 'Explicit column templates' },
  { className: '.uls-grid.gap-1 ... gap-15', detail: 'Shared spacing scale for grid gaps' },
  { className: '.uls-grid.compact', detail: 'Reduced gap preset for dense layouts' },
  { className: '.uls-grid.masonry', detail: 'Auto-placement pattern for cards' }
];

export default function CSSGridDocs() {
  return (
    <FoundationSection
      id="grid-css"
      title="CSS Grid Utilities"
      subtitle="Responsive modifiers follow the same breakpoint variables as the container system."
    >
      <table className="uls-foundation-table w-100p">
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {modifiers.map((item) => (
            <tr key={item.className}>
              <td><code>{item.className}</code></td>
              <td>{item.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </FoundationSection>
  );
}
