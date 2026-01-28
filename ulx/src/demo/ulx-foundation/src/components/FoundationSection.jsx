import React from 'react';

/**
 * Lightweight wrapper for foundation documentation sections so they can render
 * consistently even when consumed outside the PrimeReact documentation app.
 */
export default function FoundationSection({ id, title, subtitle, children }) {
  return (
    <section id={id} className="uls-foundation-section mgb20">
      <h3 className="bold-font mgt0 mgb3">{title}</h3>
      <header className="mgb4">
        {subtitle && (
          <p className="uls-foundation-section__subtitle mgb10 font-regular fg-text-secondary mgr0">
            {subtitle}
          </p>
        )}
      </header>
      <div className="uls-foundation-section__content w-100p">
        {children}
      </div>
    </section>
  );
}
