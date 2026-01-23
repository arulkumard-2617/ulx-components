import React from 'react';
import FoundationSection from '../../components/FoundationSection';

export default function UtilitiesOverview() {
  return (
    <FoundationSection
      id="utilities-overview"
    >
      <article className="uls-foundation-card w-45p pd6 rds2 bd">
        <h3 className="mgt0">Predictable naming</h3>
        <p className="fg-secondary">Display (.block, .inline, .flex), spacing (.pd-, .mg-), typography (.text-).</p>
      </article>
      <article className="uls-foundation-card w-45p pd6 rds2 bd">
        <h3 className="mgt0">Responsive variants</h3>
        <p className="fg-secondary">Use prefixes such as .md-w-100 or .lg-flex for breakpoint-specific adjustments.</p>
      </article>
    </FoundationSection>
  );
}
