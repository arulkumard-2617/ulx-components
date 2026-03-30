// ==========================================================================
// UlxImage Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  ShapeDemo,
  SizesDemo,
  AspectRatioDemo,
  ThumbnailDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  ShapeSource,
  SizesSource,
  AspectRatioSource,
  ThumbnailSource,
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
    id: 'aspect-ratio',
    sectionNav: 'Aspect ratio',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Fluid <code>img-aspect-*</code> classes from ULS section 4. Use <code>@aspectRatio</code> with a bounded width (parent utilities and/or <code>@size</code> such as <code>img-size-100</code>).',
      },
    },
    demo: {
      component: AspectRatioDemo,
      props: {
        source: AspectRatioSource,
        snippetName: 'aspect-ratio',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'thumbnail',
    sectionNav: 'Thumbnail',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Fixed-size 16:9 and 9:16 thumbnails (<code>thumb-landscape-*</code>, <code>thumb-portrait-*</code>). Use <code>@thumbLandscape</code> or <code>@thumbPortrait</code>; avoid setting both on one instance.',
      },
    },
    demo: {
      component: ThumbnailDemo,
      props: {
        source: ThumbnailSource,
        snippetName: 'thumbnail',
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
