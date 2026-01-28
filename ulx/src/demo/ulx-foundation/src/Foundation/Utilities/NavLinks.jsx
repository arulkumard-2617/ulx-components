import React from 'react';
import FoundationSection from '../../components/FoundationSection';

const navLinkUtilities = [
    {
        className: '.uls-toggle-link',
        description:
            'Resets button styles for accordion/toggle links and applies inline-flex alignment with focus-visible outlines.',
    },
    {
        className: '.uls-toggle-chevron',
        description:
            '32px square chevron button with border, centered icon, and rotation animation when `.is-open` is applied.',
    },
    {
        className: '.uls-toggle-content',
        description:
            'Wrapper that animates `max-height` for collapsible sections (used with sidebar navigation).',
    },
];

export default function NavLinks() {
    return (
        <FoundationSection id="utilities-nav-links" title="Nav Links" subtitle="Navigation link and toggle utility classes.">
            <div className="fxb wrap gap-lg">
                {navLinkUtilities.map((item) => (
                    <article
                        key={item.className}
                        className="uls-foundation-card pd6 rds4 bd w-100p md-w-1-3"
                    >
                        <p className="font-semibold mgb2">
                            <code>{item.className}</code>
                        </p>
                        <p className="fg-text-secondary mgb0">{item.description}</p>
                    </article>
                ))}
            </div>
        </FoundationSection>
    );
}
