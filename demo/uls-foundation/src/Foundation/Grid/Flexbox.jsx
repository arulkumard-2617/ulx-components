import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const flexUtilities = [
  { className: '.uls-column', desc: 'Base flex container with column direction' },
  { className: '.uls-column.row', desc: 'Switch to row direction' },
  { className: '.uls-column.centered', desc: 'Centers both axis' },
  { className: '.justify-between / .align-center', desc: 'Standalone alignment helpers' }
];

export default function FlexboxDocs() {
  return (
    <FoundationSection
      id="grid-flex"
      title="Flex Utilities"
      subtitle="Composable helpers for one-dimensional layouts."
    >
      {flexUtilities.map((utility) => (
        <article key={utility.className} className="uls-foundation-card w-45p pd6 rds2 bdr">
          <h3 className="mgt0"><code>{utility.className}</code></h3>
          <p className="fg-secondary">{utility.desc}</p>
        </article>
      ))}
    </FoundationSection>
  );
}
