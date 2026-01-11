import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const semanticTokens = [
  { token: '@success-color', bg: '@success-bg-color', desc: 'Affirmative states, confirmations' },
  { token: '@warning-color', bg: '@warning-bg-color', desc: 'Cautionary inline messaging' },
  { token: '@danger-color', bg: '@danger-bg-color', desc: 'Errors, destructive actions' },
  { token: '@info-color', bg: '@info-bg-color', desc: 'Informational banners' }
];

export default function SemanticColors() {
  return (
    <FoundationSection
      id="colors-semantic"
      title="Semantic Colors"
      subtitle="Foreground, border, and background tokens stay in sync."
    >
      {semanticTokens.map((item) => (
        <article key={item.token} className="uls-foundation-palette-card w-45p pd6 rds2" style={{ background: 'var(' + item.bg + ')' }}>
          <h3 className="mgt0">{item.token}</h3>
          <p className="fg-secondary">{item.desc}</p>
          <p className="fg-secondary">Background: <code>{item.bg}</code></p>
        </article>
      ))}
    </FoundationSection>
  );
}
