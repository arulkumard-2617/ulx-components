import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const fontFamilyUtilities = [
  { className: '.font-base', property: 'font-family: @font-family-base !important;' },
  { className: '.font-heading', property: 'font-family: @font-family-heading !important;' }
];

export default function FontFamilies() {
  return (
    <FoundationSection
      id="typography-font-family"
      title="Font Family Utilities"
      subtitle="Switch between the base body stack and the heading stack."
    >
      <ClassPropertyTable rows={fontFamilyUtilities} />
    </FoundationSection>
  );
}
