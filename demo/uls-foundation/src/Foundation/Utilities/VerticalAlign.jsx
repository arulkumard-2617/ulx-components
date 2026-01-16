import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const verticalAlignUtilities = [
  { className: '.align-baseline', property: 'vertical-align: baseline;' },
  { className: '.align-top / .align-text-top', property: 'vertical-align: top / text-top;' },
  { className: '.align-middle', property: 'vertical-align: middle;' },
  { className: '.align-bottom / .align-text-bottom', property: 'vertical-align: bottom / text-bottom;' },
  { className: '.align-sub / .align-super', property: 'vertical-align: sub / super;' }
];

export default function VerticalAlignUtilities() {
  return (
    <FoundationSection
      id="utilities-vertical-align"
    >
      <ClassPropertyTable rows={verticalAlignUtilities} />
    </FoundationSection>
  );
}
