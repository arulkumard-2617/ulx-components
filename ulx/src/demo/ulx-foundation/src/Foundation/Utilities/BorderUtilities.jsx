import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const borderUtilities = [
  { className: '.bd, .bd-2 … .bd-5', property: 'Apply 1px–5px borders using the default border color.' },
  { className: '.bd-t / .bd-b / .bd-l / .bd-r / .bd-x / .bd-y', property: 'Side-specific border helpers.' },
  { className: 'Color modifiers', property: '.bd-primary, .bd-dark, .bd-error, etc. swap @default-border-color with semantic tokens.' },
  { className: 'Style modifiers', property: '.bd-dashed, .bd-dotted, .bd-double.' },
  { className: 'Logical sides', property: '.bd-s, .bd-e respect writing-mode (LTR/RTL).' },
  { className: 'Reset helpers', property: '.bd-none, .bd-t-none, .bd-x-none, etc.' }
];

const radiusUtilities = [
  { className: '.rds0 - .rds15', property: 'Border radius scale mapped to spacing tokens.' },
  { className: '.rds-circle', property: 'border-radius: 50%;' },
  { className: '.rds-pill', property: 'border-radius: 9999px;' }
];

export default function BorderUtilities() {
  return (
    <FoundationSection
      id="utilities-border"
      title="Border Utilities"
      subtitle="Border utility classes for controlling element borders."
    >
      <ClassPropertyTable rows={borderUtilities} columnLabels={['Utility', 'Description']} />
      <h4 className="bold-font mgb5 mgt20">Border Radius</h4>
      <ClassPropertyTable rows={radiusUtilities} columnLabels={['Utility', 'Description']} />
    </FoundationSection>
  );
}
