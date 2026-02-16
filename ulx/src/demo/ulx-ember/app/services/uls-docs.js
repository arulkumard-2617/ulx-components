import Service from '@ember/service';
import ulsUtilitiesData from 'ulx-ember/data/uls-utilities';

/**
 * Maps schema property slugs to uls-utilities.js keys when the parser uses
 * a different key (e.g. schema has "padding"/"margin", parser has "space").
 * After running sync-uls-schema, add any new schema properties here if they
 * need to point at an existing uls-utilities key.
 */
const SLUG_TO_DATA_KEY = {
  padding: 'space',
  margin: 'space',
  width: 'size',
  'min-width': 'size',
  'max-width': 'size',
  height: 'size',
  'min-height': 'size',
  'max-height': 'size',
  'box-shadow': 'shadow',
};

function slugToTitle(slug) {
  return slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

/**
 * Provides documentation data for ULS utilities, generated from utill.less.
 * Run `node scripts/parse-uls-utilities.js` to regenerate app/data/uls-utilities.js.
 */
export default class UlsDocsService extends Service {
  getUtility(slug) {
    const dataKey = SLUG_TO_DATA_KEY[slug] ?? slug;
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
