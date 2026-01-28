import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const alignmentUtilities = [
  { className: '.text-left', property: 'text-align: start !important;' },
  { className: '.text-center', property: 'text-align: center !important;' },
  { className: '.text-right', property: 'text-align: end !important;' },
  { className: '.text-justify', property: 'text-align: justify !important;' }
];

export default function TextAlignment() {
  return (
    <FoundationSection
      id="typography-text-alignment"
      title="Text Alignment Utilities"
      subtitle="Logical properties ensure LTR/RTL support out of the box."
    >
      <ClassPropertyTable rows={alignmentUtilities} />
    </FoundationSection>
  );
}
