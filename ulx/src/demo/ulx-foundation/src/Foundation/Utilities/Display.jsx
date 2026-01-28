import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const displayUtilities = [
  { className: '.block', property: 'display: block;' },
  { className: '.inline', property: 'display: inline;' },
  { className: '.inline-block', property: 'display: inline-block;' },
  { className: '.table', property: 'display: table;' },
  { className: '.table-cell', property: 'display: table-cell;' },
  { className: '.table-row', property: 'display: table-row;' },
  { className: '.table-column', property: 'display: table-column;' },
  { className: '.table-column-group', property: 'display: table-column-group;' },
  { className: '.table-header-group', property: 'display: table-header-group;' },
  { className: '.table-footer-group', property: 'display: table-footer-group;' },
  { className: '.table-row-group', property: 'display: table-row-group;' },
  { className: '.table-caption', property: 'display: table-caption;' },
  { className: '.list-item', property: 'display: list-item;' },
  { className: '.run-in', property: 'display: run-in;' },
  { className: '.compact', property: 'display: compact;' },
  { className: '.marker', property: 'display: marker;' },
  { className: '.ruby', property: 'display: ruby;' },
  { className: '.ruby-base', property: 'display: ruby-base;' },
  { className: '.ruby-text', property: 'display: ruby-text;' },
  { className: '.ruby-base-container', property: 'display: ruby-base-container;' },
  { className: '.ruby-text-container', property: 'display: ruby-text-container;' },
  { className: '.contents', property: 'display: contents;' },
  { className: '.none', property: 'display: none;' },
  { className: '.initial', property: 'display: initial;' },
  { className: '.inherit', property: 'display: inherit;' },
  { className: '.unset', property: 'display: unset;' }
];

export default function DisplayUtilities() {
  return (
    <FoundationSection
      id="utilities-display"
      title="Display Utilities"
      subtitle="Display utility classes for controlling element display type."
    >
      <ClassPropertyTable rows={displayUtilities} />
    </FoundationSection>
  );
}
