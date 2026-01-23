import React from 'react';
import FoundationSection from '../../components/FoundationSection';

export default function SpacingOverview() {
  return (
    <FoundationSection
      id="spacing-overview"
      title="Spacing System"
      subtitle="Quarter-rem base unit with semantic aliases (spacing-sm, spacing-lg, etc.)."
    >
      <article className="uls-foundation-card w-45p pd6 rds2 bd">
        <h3 className="mgt0">Design tokens</h3>
        <p className="fg-secondary">@4px through @150px cover component padding, gaps, and layout spacing.</p>
      </article>
      <article className="uls-foundation-card w-45p pd6 rds2 bd">
        <h3 className="mgt0">Utility classes</h3>
        <p className="fg-secondary">.pd1 - .pd15, .mgx1 - .mgx15, .gp1 - .gp15 mirror the token scale.</p>
      </article>
    </FoundationSection>
  );
}
