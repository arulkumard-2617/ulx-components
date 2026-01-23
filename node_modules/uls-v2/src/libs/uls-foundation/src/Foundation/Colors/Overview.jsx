import React from 'react';
import FoundationSection from '../../components/FoundationSection';

export default function ColorsOverview() {
  return (
    <FoundationSection
      id="colors-overview"
      title="Color System"
      subtitle="Layered palette that separates static brand hues from semantic tokens."
    >
      <article className="uls-foundation-card w-45p pd6 rds2 bd bg-layer1 mgb12">
        <h5 className="bold-font mgt0 fg-primary mgb2">Static palette</h5>
        <p className="fg-secondary">Defined in <code>static-color-vars.less</code> for brand alignment.</p>
      </article>
      <article className="uls-foundation-card w-45p pd6 rds2 bd bg-layer1">
        <h5 className="bold-font mgt0 fg-primary">Semantic tokens</h5>
        <p className="fg-secondary">Tokens like <code>@primary-color</code> and <code>@success-color</code> reference the palette.</p>
      </article>
    </FoundationSection>
  );
}
