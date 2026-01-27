import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const evenPxValues = Array.from({ length: 75 }, (_, index) => (index + 1) * 2); // 2 → 150
const extendedPxValues = Array.from({ length: 30 }, (_, index) => 155 + index * 5); // 155 → 300

const formatClassList = (prefix, values) =>
  values.map((value) => `.${prefix}${value}`).join(', ');

const widthRows = [
  { className: '.w-100p', property: 'width: 100%;' },
  { className: '.w-1-2', property: 'width: 50%;' },
  { className: '.w-1-3', property: 'width: 33.333%;' },
  { className: '.w-2-3', property: 'width: 66.666%;' }
];

const minWidthRows = [
  { className: '.min-w-100p', property: 'min-width: 100%;' }
];

const maxWidthRows = [
  { className: '.max-w-100p', property: 'max-width: 100%;' }
];

const heightRows = [
  { className: '.h-100p', property: 'height: 100%;' }
];

const minHeightRows = [
  { className: '.min-h-100p', property: 'min-height: 100%;' }
];

const maxHeightRows = [
  { className: '.max-h-100p', property: 'max-height: 100%;' }
];

const responsiveWidthRows = [
  {
    className: '.xs-w-100p',
    property: 'Mobile breakpoint (≤ @largest-mobile-screen): width: 100%.'
  },
  {
    className: '.sm-w-100p, .sm-w-1-2, .sm-w-1-3, .sm-w-2-3',
    property: 'Tablet breakpoint (≥ @tablet-breakpoint): preset fractional widths.'
  },
  {
    className: '.sm-max-w-512',
    property: 'Tablet breakpoint: max-width limited to 512px.'
  },
  {
    className: '.md-w-1-2, .md-w-1-3, .md-w-2-3',
    property: 'Desktop breakpoint (≥ @computer-breakpoint): fractional widths.'
  },
  {
    className: '.md-max-w-640',
    property: 'Desktop breakpoint: max-width limited to 640px.'
  },
  {
    className: '.lg-w-1-2, .lg-w-1-3, .lg-w-2-3',
    property: 'Wide-screen breakpoint (≥ @wide-screen-breakpoint): fractional widths.'
  }
];

const widthTokenRows = [
  {
    className: formatClassList('w', evenPxValues),
    property: 'width tokens (2px → 150px, 2px increments).'
  },
  {
    className: formatClassList('w', extendedPxValues),
    property: 'width tokens (155px → 300px, 5px increments).'
  }
];

const minWidthTokenRows = [
  {
    className: formatClassList('min-w', evenPxValues),
    property: 'min-width tokens (2px → 150px, 2px increments).'
  },
  {
    className: formatClassList('min-w', extendedPxValues),
    property: 'min-width tokens (155px → 300px, 5px increments).'
  }
];

const maxWidthTokenRows = [
  {
    className: formatClassList('max-w', evenPxValues),
    property: 'max-width tokens (2px → 150px, 2px increments).'
  },
  {
    className: formatClassList('max-w', extendedPxValues),
    property: 'max-width tokens (155px → 300px, 5px increments).'
  }
];

const heightTokenRows = [
  {
    className: formatClassList('h', evenPxValues),
    property: 'height tokens (2px → 150px, 2px increments).'
  },
  {
    className: formatClassList('h', extendedPxValues),
    property: 'height tokens (155px → 300px, 5px increments).'
  }
];

const minHeightTokenRows = [
  {
    className: formatClassList('min-h', evenPxValues),
    property: 'min-height tokens (2px → 150px, 2px increments).'
  },
  {
    className: formatClassList('min-h', extendedPxValues),
    property: 'min-height tokens (155px → 300px, 5px increments).'
  }
];

const maxHeightTokenRows = [
  {
    className: formatClassList('max-h', evenPxValues),
    property: 'max-height tokens (2px → 150px, 2px increments).'
  },
  {
    className: formatClassList('max-h', extendedPxValues),
    property: 'max-height tokens (155px → 300px, 5px increments).'
  }
];

export default function SizeUtilities() {
  return (
    <FoundationSection
      id="utilities-size"
    >
      <div className="fxb wrap gp6">
        <div className="fxauto w-100p md-w-1-2">
          <h3 className="h5 mgt0 mgb3">Width utilities</h3>
          <ClassPropertyTable rows={widthRows} columnLabels={['Class', 'Width']} />
          <h4 className="h5 mgt20 mgb3">Min width</h4>
          <ClassPropertyTable rows={minWidthRows} columnLabels={['Class', 'Min width']} />
          <h4 className="h5 mgt20 mgb3">Max width</h4>
          <ClassPropertyTable rows={maxWidthRows} columnLabels={['Class', 'Max width']} />
        </div>

        <div className="fxauto w-100p md-w-1-2">
          <h3 className="h5 mgt0 mgb3">Height utilities</h3>
          <ClassPropertyTable rows={heightRows} columnLabels={['Class', 'Height']} />
          <h4 className="h5 mgt20 mgb3">Min height</h4>
          <ClassPropertyTable rows={minHeightRows} columnLabels={['Class', 'Min height']} />
          <h4 className="h5 mgt20 mgb3">Max height</h4>
          <ClassPropertyTable rows={maxHeightRows} columnLabels={['Class', 'Max height']} />
        </div>
      </div>

      <div className="mgt8">
        <h3 className="h5 mgt0 mgb3">Responsive width helpers</h3>
        <ClassPropertyTable rows={responsiveWidthRows} columnLabels={['Class', 'Breakpoint rule']} />
      </div>

      <div className="mgt8">
        <h3 className="h5 mgt0 mgb3">Width tokens (px based)</h3>
        <ClassPropertyTable rows={widthTokenRows} columnLabels={['Classes', 'Description']} />
        <h4 className="h6 mgt6 mgb2">Min-width tokens</h4>
        <ClassPropertyTable rows={minWidthTokenRows} columnLabels={['Classes', 'Description']} />
        <h4 className="h6 mgt6 mgb2">Max-width tokens</h4>
        <ClassPropertyTable rows={maxWidthTokenRows} columnLabels={['Classes', 'Description']} />
      </div>

      <div className="mgt8">
        <h3 className="h5 mgt0 mgb3">Height tokens (px based)</h3>
        <ClassPropertyTable rows={heightTokenRows} columnLabels={['Classes', 'Description']} />
        <h4 className="h5 mgt20 mgb3">Min-height tokens</h4>
        <ClassPropertyTable rows={minHeightTokenRows} columnLabels={['Classes', 'Description']} />
        <h4 className="h5 mgt20 mgb3">Max-height tokens</h4>
        <ClassPropertyTable rows={maxHeightTokenRows} columnLabels={['Classes', 'Description']} />
      </div>
    </FoundationSection>
  );
}
