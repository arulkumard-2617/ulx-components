import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const steps = [
  {
    title: 'Base variables',
    detail: 'Override CSS custom properties via :root or data-theme attributes.'
  },
  {
    title: 'LESS overrides',
    detail: 'Use uls-overrides to re-map tokens and regenerate CSS bundles.'
  },
  {
    title: 'Runtime switches',
    detail: 'Toggle body classes such as .uls-dark-mode and .uls-cardinal-theme.'
  }
];

export default function Theming() {
  return (
    <FoundationSection
      id="colors-theming"
      title="Theming Workflow"
      subtitle="Mix runtime custom properties with compile-time LESS overrides."
    >
      <ol className="foundation-ordered-list uls-messages info m-size mgt10">
        {steps.map((step) => (
          <li key={step.title} className="info uls-messages s-size enter-done mgy2" role='alert'>
            <h4 className="mgb1">{step.title}</h4>
            <p className="fg-secondary">{step.detail}</p>
          </li>
        ))}
      </ol>
    </FoundationSection>
  );
}
