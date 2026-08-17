import RichText from '../../components/doc-shared/doc-main/rich-text';

/**
 * Build a documentation feature item for DocPanel / DocSectionNav.
 *
 * @param {Object} config
 * @param {string} config.id - Section anchor id
 * @param {string} config.title - Section nav label and heading
 * @param {string} [config.description] - HTML description
 * @param {import('@glimmer/component').default|null} [config.demo] - Live demo component
 * @param {string} config.source - Raw source text module export
 * @param {string} [config.snippetName] - Snippet stem used for filename fallback
 * @param {string} [config.language='handlebars'] - CodeMirror language hint
 * @param {string} [config.filename] - Source filename label (e.g. basic.gjs)
 * @param {string} [config.notes] - Optional HTML notes below the example
 * @param {string[]} [config.tags] - Reserved for future filtering/search
 * @param {string} [config.category] - Reserved for future grouping
 */
export function createFeatureItem({
  id,
  title,
  description,
  demo = null,
  source,
  snippetName,
  language = 'handlebars',
  filename,
  notes,
  tags,
  category,
}) {
  const item = {
    id,
    sectionNav: title,
    demo: {
      component: demo,
      props: {
        source,
        snippetName,
        language,
        filename: filename ?? (snippetName ? `${snippetName}.gjs` : undefined),
        notes,
      },
    },
  };

  if (description) {
    item.sectionDesc = {
      component: RichText,
      props: { as: 'span', content: description },
    };
  }

  if (tags?.length) {
    item.tags = tags;
  }

  if (category) {
    item.category = category;
  }

  return item;
}
