import React from 'react';
import Overview from './Overview';
import CSSGrid from './CSSGrid';
import Flexbox from './Flexbox';

export { Overview, CSSGrid, Flexbox };

export default function Grid() {
  return (
    <div className="uls-foundation-page">
      <Overview />
      <CSSGrid />
      <Flexbox />
    </div>
  );
}
