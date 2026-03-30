import Service from '@ember/service';
import { utilSchema as ulsUtilitiesData } from 'ulx-ember/data/util-schema';

/**
 * Maps schema property slugs to util-schema keys when the parser uses
 * a different key (e.g. schema has "padding"/"margin", parser has "space").
 */
const SLUG_TO_DATA_KEY = {
  // width: 'size',
  // 'min-width': 'size',
  // 'max-width': 'size',
  // height: 'size',
  // 'min-height': 'size',
  // 'max-height': 'size',
  // 'box-shadow': 'shadow',
  /** grid.less maps use @row-start / @row-end → schema keys rowStart / rowEnd */
  'grid-row-start': 'rowStart',
  'grid-row-end': 'rowEnd',
  /** column start/end use colStart / colEnd in generated schema (not gridColumnStart) */
  'grid-column-start': 'colStart',
  'grid-column-end': 'colEnd',
};

function slugToTitle(slug) {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

export default class UlsDocsService extends Service {
  normalize(str) {
    return str.toLowerCase().replace(/[&/]/g, '').replace(/\s+/g, '-');
  }

  getTypographySection(sectionSlug) {
    const data = ulsUtilitiesData.typography;

    if (!data) {
      return {
        slug: sectionSlug,
        title: slugToTitle(sectionSlug),
        description: '',
        sections: [],
      };
    }

    const sectionMap = {
      headings: 'Headings',
      'font-size': 'Font size',
      'font-weight': 'Font weight / face',
      'line-height': 'Line height & other',
    };

    const actualTitle = sectionMap[sectionSlug];

    const section = (data.sections ?? []).find((s) => s.title === actualTitle);

    return {
      slug: sectionSlug,
      title: actualTitle ?? slugToTitle(sectionSlug),
      description: data.description ?? '',
      sections: section ? [section] : [],
    };
  }

  toCamelCase(slug) {
    return slug.replace(/-([a-z])/g, (_, g) => g.toUpperCase());
  }

  getUtility(slug) {
    const normalizedSlug = this.toCamelCase(slug);
    const dataKey = SLUG_TO_DATA_KEY[slug] ?? normalizedSlug;
    const data = ulsUtilitiesData[dataKey];

    if (data) {
      const isAlias = dataKey !== slug;

      return {
        slug,
        title: isAlias ? slugToTitle(slug) : data.title,
        description: isAlias
          ? `Utilities for ${slugToTitle(slug).toLowerCase()}.`
          : data.description,
        sections: data.sections ?? [],
      };
    }

    return {
      slug,
      title: slugToTitle(slug),
      description: `Utilities for ${slugToTitle(slug).toLowerCase()}.`,
      sections: [],
    };
  }
}
