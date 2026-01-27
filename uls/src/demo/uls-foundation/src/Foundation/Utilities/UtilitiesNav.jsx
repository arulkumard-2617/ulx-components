import React from 'react';

const navItems = [
  { label: 'Space', href: '#utilities-space' },
  { label: 'Padding', href: '#utilities-padding' },
  { label: 'Gap', href: '#utilities-gap' },
  { label: 'Grid', href: '#utilities-grid' },
  { label: 'Flex', href: '#utilities-flex' }
];

export default function UtilitiesNav() {
  return (
    <div className="fxb fcol gp3 mgb12" style={{ borderLeft: '1px solid var(--uls-default-border-color)', paddingLeft: '1.5rem' }}>
      <div className="fxb fvc gp3">
        <span className="rds4 w36 h36 fxb fvc center-all bg-layer2">
          <i className="pi pi-sliders-h" aria-hidden></i>
        </span>
        <div className="fxcol">
          <p className="text-uppercase font-semibold fg-text-secondary mgb0">Foundation</p>
          <h3 className="mgt0 mgb0">Utilities</h3>
        </div>
        <i className="pi pi-angle-up fg-text-secondary mgl-auto"></i>
      </div>
      <nav className="fxcol gp2">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="fg-primary text-decoration-none font-semibold">
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
