import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const textDecorationUtilities = [
  { className: '.text-decoration-none', property: 'text-decoration: none;' },
  { className: '.text-underline / .text-overline / .text-line-through', property: 'underline, overline, or line-through respectively.' },
  { className: '.text-underline-overline / .text-underline-line-through', property: 'Combine multiple decorations.' },
  { className: '.text-decoration-initial / .text-decoration-inherit / .text-decoration-unset', property: 'Reset decoration behavior.' }
];

export default function TextDecorationUtilities() {
  return (
    <FoundationSection
      id="utilities-text-decoration"
      title="Text Decoration Utilities"
      subtitle="Text decoration utility classes."
    >
      <ClassPropertyTable rows={textDecorationUtilities} />
    </FoundationSection>
  );
}
