import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const layers = [
  { name: 'Layer 1', token: '@bg-layer1', usage: 'Cards, surfaces' },
  { name: 'Layer 2', token: '@bg-layer2', usage: 'Nested containers' },
  { name: 'Layer 3', token: '@bg-layer3', usage: 'Overlays' },
  { name: 'Layer 4', token: '@bg-layer4', usage: 'Focus shadows' }
];

export default function ColorSystem() {
  return (
    <FoundationSection
      id="colors-system"
      title="Layered Backgrounds"
      subtitle="Color mixing via CSS custom properties enables automatic contrast management."
    >
      {layers.map((layer) => (
        <article key={layer.token} className="uls-foundation-card w-30p min-w-220 pd6 bd rds2">
          <h5 className="bold-font mgt0 fg-primary">{layer.name}</h5>
          <p className="fg-secondary mgb1"><code>{layer.token}</code></p>
          <p className="mgb0 fg-secondary">{layer.usage}</p>
        </article>
      ))}
    </FoundationSection>
  );
}
