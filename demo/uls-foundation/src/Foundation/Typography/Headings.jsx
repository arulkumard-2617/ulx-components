import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const headingUtilities = [
  {
    className: 'h1, .h1',
    property: 'font-size: @h1-size; line-height: @line-height-h1; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  },
  {
    className: 'h2, .h2',
    property: 'font-size: @h2-size; line-height: @line-height-h2; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  },
  {
    className: 'h3, .h3',
    property: 'font-size: @h3-size; line-height: @line-height-h3; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  },
  {
    className: 'h4, .h4',
    property: 'font-size: @h4-size; line-height: @line-height-h4; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  },
  {
    className: 'h5, .h5',
    property: 'font-size: @h5-size; line-height: @line-height-h5; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  },
  {
    className: 'h6, .h6',
    property: 'font-size: @h6-size; line-height: @line-height-h6; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  },
  {
    className: '.h7',
    property: 'font-size: @h7-size; line-height: @line-height-h7; font-family: @font-family-heading; font-weight: @font-weight-semibold;'
  }
];

export default function Headings() {
  return (
    <FoundationSection
      id="typography-headings"
      title="Heading Styles"
      subtitle="Semantic elements and utility aliases share the same design tokens."
    >
      <ClassPropertyTable rows={headingUtilities} columnLabels={['Selector / Class', 'Properties']} />
    </FoundationSection>
  );
}
