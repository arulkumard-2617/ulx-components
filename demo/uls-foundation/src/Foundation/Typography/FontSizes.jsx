import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const fontSizeUtilities = Array.from({ length: 23 }, (_, index) => {
  const size = index + 10; // 10 → 32
  const lineHeight = size <= 12 ? '@line-height-tight' : '@line-height-normal';
  return {
    className: `.font-size${size}`,
    property: `font-size: @font-size${size}; line-height: ${lineHeight};`
  };
});

export default function FontSizes() {
  return (
    <FoundationSection
      id="typography-font-sizes"
      title="Font Size Utilities"
      subtitle="Each class compiles to the tokenized REM scale defined in @typography.less."
    >
      <ClassPropertyTable rows={fontSizeUtilities} columnLabels={['Class', 'Properties']} />
    </FoundationSection>
  );
}
