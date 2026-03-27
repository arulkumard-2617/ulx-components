// ==========================================================================
// UlxImage Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  ShapeDemo,
  SizesDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  ShapeSource,
  SizesSource,
  AccessibilitySource,
} from './imports';

export const UlxImageFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import <code>UlxImage</code> from <code>ulx-components</code> for styled content images aligned with ULS <code>image.less</code>.',
      },
    },
    demo: {
      component: null,
      props: {
        source: ImportSource,
        snippetName: 'import',
        language: 'jsx',
      },
    },
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Decorative images use an empty <code>@alt</code>. Meaningful images use descriptive <code>@alt</code> (via <code>t()</code> when the string is translated).',
      },
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: 'basic',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'shape',
    sectionNav: 'Shape',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          '<code>@shape</code> maps to ULS modifiers: <code>square</code> (use with <code>@size</code> for the square crop), <code>rounded</code>, and <code>circle</code>.',
      },
    },
    demo: {
      component: ShapeDemo,
      props: {
        source: ShapeSource,
        snippetName: 'shape',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'sizes',
    sectionNav: 'Sizes',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'ULS image scale classes: <code>xs-size</code> through <code>xxxl-size</code>. Shown with <code>@shape="square"</code> so each token uses the square crop.',
      },
    },
    demo: {
      component: SizesDemo,
      props: {
        source: SizesSource,
        snippetName: 'sizes',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'accessibility',
    sectionNav: 'Accessibility',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Patterns: empty vs meaningful <code>alt</code>, <code>aria-describedby</code> via <code>...attributes</code>, and load failure behavior when <code>alt</code> is non-empty.',
      },
    },
    demo: {
      component: AccessibilityDemo,
      props: {
        source: AccessibilitySource,
        snippetName: 'accessibility',
        language: 'handlebars',
      },
    },
  },
];

export default function UlxImageFeatures() {
  return UlxImageFeatureItems;
}
