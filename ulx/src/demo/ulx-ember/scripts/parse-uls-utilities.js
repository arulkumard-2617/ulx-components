// /**
//  * Parses ULS utill.less and extracts utility class definitions for documentation.
//  * Writes app/data/uls-utilities.js so the doc app can render Class | Styles tables
//  * and stay in sync with the LESS file.
//  *
//  * Run: node scripts/parse-uls-utilities.js
//  */

// const fs = require('fs');
// const path = require('path');

// const SCRIPT_DIR = __dirname;
// const ULX_EMBER_ROOT = path.resolve(SCRIPT_DIR, '..');
// const UTLESS_CANDIDATES = [
//   path.resolve(
//     ULX_EMBER_ROOT,
//     '../../../node_modules/ULS_V2.0/src/styles/uls-styles/less/base/utill.less',
//   ),
//   path.resolve(
//     ULX_EMBER_ROOT,
//     '../../../../node_modules/ULS_V2.0/src/styles/uls-styles/less/base/utill.less',
//   ),
// ];
// function resolveUtillPath() {
//   for (const p of UTLESS_CANDIDATES) {
//     if (fs.existsSync(p)) return p;
//   }
//   return UTLESS_CANDIDATES[0];
// }
// const UTLESS_PATH = resolveUtillPath();
// const ULS_BASE_DIR = path.dirname(UTLESS_PATH);
// const TYPOLESS_PATH = path.resolve(ULS_BASE_DIR, 'typography.less');
// const COLORVARS_PATH = path.resolve(ULS_BASE_DIR, 'color-vars.less');
// const OUT_PATH = path.resolve(ULX_EMBER_ROOT, 'app/data/util-schema.js');

// const SCHEMA_CANDIDATES = [
//   path.resolve(
//     ULX_EMBER_ROOT,
//     'node_modules/ULS_V2.0/src/styles/uls-styles/schema/utill.schema.json',
//   ),
//   path.resolve(
//     ULX_EMBER_ROOT,
//     '../../node_modules/ULS_V2.0/src/styles/uls-styles/schema/utill.schema.json',
//   ),
//   path.resolve(
//     ULX_EMBER_ROOT,
//     '../../../node_modules/ULS_V2.0/src/styles/uls-styles/schema/utill.schema.json',
//   ),
// ];
// function resolveSchemaPath() {
//   for (const p of SCHEMA_CANDIDATES) {
//     if (fs.existsSync(p)) return p;
//   }
//   return null;
// }

// const SECTION_TO_SLUG = {
//   'Cursor Utilities': 'cursor',
//   'Display Utilities': 'display',
//   'Text Align Utilities': 'text-align',
//   'Text Transform Utilities': 'text-transform',
//   'Text Decoration Utilities': 'text-decoration',
//   'Vertical Align Utilities': 'vertical-align',
//   'Position Utilities': 'position',
//   'Float Utilities': 'float',
//   'Clear Utilities': 'clear',
//   'Word Break Utilities': 'word-break',
//   'Visibility Utilities': 'visibility',
//   'Overflow Utilities': 'overflow',
//   'Overflow X Utilities': 'overflow-x',
//   'Overflow Y Utilities': 'overflow-y',
// };

// function extractMapBlocks(content) {
//   const blocks = [];
//   const re =
//     /\/\/\s*(.+?)\s+Configuration\s*\n(?:\s*\/\/[^\n]*\n)*\s*@([a-z0-9-]+)-utilities:\s*\{/g;
//   let m;
//   while ((m = re.exec(content)) !== null) {
//     const sectionName = m[1].trim();
//     const mapName = m[2];
//     const start = m.index + m[0].length;
//     let depth = 1;
//     let end = start;
//     for (let i = start; i < content.length; i++) {
//       if (content[i] === '{') depth++;
//       if (content[i] === '}') {
//         depth--;
//         if (depth === 0) {
//           end = i;
//           break;
//         }
//       }
//     }
//     const body = content.slice(start, end);
//     const pairs = [];
//     body.split('\n').forEach((line) => {
//       const lineWithoutComment = line.replace(/\s*\/\/.*$/, '').trim();
//       const lineM = lineWithoutComment.match(/^([a-z0-9-]+):\s*([^;]+);$/);
//       if (lineM) {
//         pairs.push({ key: lineM[1], value: lineM[2].trim() });
//       }
//     });
//     blocks.push({ sectionName, mapName, pairs });
//   }
//   return blocks;
// }

// function extractEachProperty(content) {
//   const props = {};
//   const re =
//     /each\(@([a-z0-9-]+)-utilities,\s*\{\s*\.@\{key\}\s*\{\s*([a-z-]+):\s*@value/g;
//   let m;
//   while ((m = re.exec(content)) !== null) {
//     props[m[1]] = m[2];
//   }
//   return props;
// }

// function slugToTitle(slug) {
//   return slug
//     .split('-')
//     .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
//     .join(' ');
// }

// function descriptionForSlug(slug) {
//   const descriptions = {
//     cursor:
//       'Utilities for controlling the cursor style when hovering over an element.',
//     display: 'Utilities for controlling the display type of an element.',
//     'text-align': 'Utilities for controlling text alignment.',
//     'text-transform':
//       'Utilities for controlling text casing and transformation.',
//     'text-decoration': 'Utilities for controlling text decoration.',
//     'vertical-align':
//       'Utilities for controlling vertical alignment of inline content.',
//     position: 'Utilities for controlling element position.',
//     float: 'Utilities for controlling element float.',
//     clear: 'Utilities for controlling element clear.',
//     'word-break': 'Utilities for controlling word breaks.',
//     visibility: 'Utilities for controlling element visibility.',
//     overflow:
//       'Utilities for controlling element overflow (and overflow-x, overflow-y).',
//   };
//   return (
//     descriptions[slug] || `Utilities for ${slugToTitle(slug).toLowerCase()}.`
//   );
// }

// function buildData(blocks, eachProps) {
//   const result = {};
//   for (const { sectionName, mapName, pairs } of blocks) {
//     const slug =
//       SECTION_TO_SLUG[sectionName] ||
//       mapName.replace(/-utilities?$/, '').replace(/-/g, '-');
//     const property = eachProps[mapName] || mapName.replace(/-/g, '-');
//     const rows = pairs.map(({ key, value }) => ({
//       class: '.' + key,
//       styles: `${property}: ${value};`,
//     }));
//     const sectionTitle = sectionName.replace(/\s+Configuration\s*$/, '').trim();
//     if (!result[slug]) {
//       result[slug] = {
//         title: slugToTitle(slug),
//         description: descriptionForSlug(slug),
//         sections: [],
//       };
//     }
//     result[slug].sections.push({ title: sectionTitle, rows });
//   }
//   if (result['overflow-x'] || result['overflow-y']) {
//     const overflow = result['overflow'] || {
//       title: 'Overflow',
//       description: descriptionForSlug('overflow'),
//       sections: [],
//     };
//     if (result['overflow-x'])
//       overflow.sections.push(...result['overflow-x'].sections);
//     if (result['overflow-y'])
//       overflow.sections.push(...result['overflow-y'].sections);
//     delete result['overflow-x'];
//     delete result['overflow-y'];
//     result['overflow'] = overflow;
//   }
//   return result;
// }

// function extractBorderColorsKeys(content) {
//   const m = content.match(/@border-colors:\s*\{([^}]+)\}/);
//   if (!m) return [];
//   const keys = [];
//   m[1].split('\n').forEach((line) => {
//     const lineMatch = line.match(/^\s*([a-z0-9-]+):/);
//     if (lineMatch) keys.push(lineMatch[1]);
//   });
//   return keys;
// }

// function injectBorderFromLess(content, data) {
//   const borderColorKeys = extractBorderColorsKeys(content);

//   const borderWidthRows = [
//     { class: '.bd', styles: 'border: 1px solid (default color);' },
//     { class: '.bd-2 … .bd-5', styles: 'Border thickness 2px–5px.' },
//     {
//       class: '.bd-t / .bd-b / .bd-l / .bd-r',
//       styles: 'Side-specific border (top, bottom, left, right).',
//     },
//     { class: '.bd-x / .bd-y', styles: 'Horizontal or vertical sides.' },
//     { class: '.bd-s / .bd-e', styles: 'Logical start/end (LTR/RTL).' },
//     {
//       class: '.bd-none, .bd-t-none, .bd-x-none, …',
//       styles: 'Reset border (all or per side).',
//     },
//   ];
//   data['border-width'] = {
//     title: 'Border Width',
//     description:
//       'Utilities for border width and sides. Generated from utill.less BORDER SYSTEM.',
//     sections: [{ title: 'Border Width', rows: borderWidthRows }],
//   };

//   const borderStyleRows = [
//     { class: '.bd-dashed', styles: 'border-style: dashed;' },
//     { class: '.bd-dotted', styles: 'border-style: dotted;' },
//     { class: '.bd-double', styles: 'border-style: double;' },
//   ];
//   data['border-style'] = {
//     title: 'Border Style',
//     description: 'Utilities for border-style (dashed, dotted, double).',
//     sections: [{ title: 'Border Style', rows: borderStyleRows }],
//   };

//   const borderColorRows = borderColorKeys.map((key) => ({
//     class: `.bd-${key}`,
//     styles: `border-color: @${key} (semantic token);`,
//   }));
//   data['border-color'] = {
//     title: 'Border Color',
//     description:
//       'Utilities for border-color (semantic tokens from @border-colors).',
//     sections: [{ title: 'Border Color', rows: borderColorRows }],
//   };

//   const radiusRows = [
//     {
//       class: '.rds0 – .rds15',
//       styles: 'Border radius scale (spacing tokens).',
//     },
//     { class: '.rds-circle', styles: 'border-radius: 50%;' },
//     { class: '.rds-pill', styles: 'border-radius: 9999px;' },
//   ];
//   data['border-radius'] = {
//     title: 'Border Radius',
//     description:
//       'Utilities for border-radius. Generated from utill.less BORDER RADIUS UTILITIES.',
//     sections: [{ title: 'Border Radius', rows: radiusRows }],
//   };

//   return data;
// }

// const STANDALONE_SECTION_TO_SLUG = {
//   'ASPECT RATIO UTILITIES': 'aspect-ratio',
//   'COLUMNS UTILITIES': 'columns',
//   'ISOLATION UTILITIES': 'isolation',
//   'OVERSCROLL BEHAVIOR UTILITIES': 'overscroll-behavior',
//   'SHADOW UTILITIES': 'shadow',
//   'Z-INDEX UTILITIES': 'z-index',
//   'OPACITY UTILITIES': 'opacity',
//   'FILTER UTILITIES': 'filter',
//   'OBJECT FIT UTILITIES': 'object-fit',
//   'USER SELECT UTILITIES': 'user-select',
//   'POINTER EVENTS UTILITIES': 'pointer-events',
//   'WHITE SPACE UTILITIES': 'white-space',
//   'LINE CLAMP UTILITIES': 'line-clamp',
// };

// const STANDALONE_DESCRIPTIONS = {
//   'aspect-ratio':
//     'Utilities for aspect-ratio (e.g. .aspect-square, .aspect-video).',
//   columns: 'Utilities for columns and column-count.',
//   'break-after': 'Utilities for break-after (page/column breaks).',
//   'break-before': 'Utilities for break-before (page/column breaks).',
//   'break-inside': 'Utilities for break-inside (page/column breaks).',
//   'box-decoration-break': 'Utilities for box-decoration-break (slice, clone).',
//   'box-sizing': 'Utilities for box-sizing (border-box, content-box).',
//   'background-attachment':
//     'Utilities for background-attachment (scroll, fixed, local).',
//   'background-clip':
//     'Utilities for background-clip (border-box, padding-box, content-box, text).',
//   'background-origin': 'Utilities for background-origin.',
//   'background-position': 'Utilities for background-position.',
//   'background-repeat': 'Utilities for background-repeat.',
//   'background-size':
//     'Utilities for background-size (auto, cover, contain, etc.).',
//   'top-right-bottom-left':
//     'Utilities for top, right, bottom, left (tpN, rtN, btN, ltN).',
//   'border-collapse': 'Utilities for border-collapse (collapse, separate).',
//   'border-spacing': 'Utilities for border-spacing.',
//   'table-layout': 'Utilities for table-layout (auto, fixed).',
//   'caption-side': 'Utilities for caption-side (top, bottom).',
//   'outline-width': 'Utilities for outline-width (and outline: none).',
//   'outline-style':
//     'Utilities for outline-style (solid, dashed, dotted, double).',
//   'outline-offset': 'Utilities for outline-offset.',
//   'outline-color': 'Utilities for outline-color.',
//   'background-color':
//     'Utilities for background-color (semantic .bg-* classes from color system).',
//   isolation: 'Utilities for isolation (stacking context).',
//   'overscroll-behavior':
//     'Utilities for overscroll-behavior (auto, contain, none).',
//   shadow: 'Utilities for box-shadow (depth and elevation).',
//   'text-shadow': 'Utilities for text-shadow.',
//   'mix-blend-mode':
//     'Utilities for mix-blend-mode (normal, multiply, screen, etc.).',
//   'background-blend-mode': 'Utilities for background-blend-mode.',
//   'mask-clip': 'Utilities for mask-clip.',
//   'mask-composite': 'Utilities for mask-composite.',
//   'mask-image': 'Utilities for mask-image.',
//   'mask-mode': 'Utilities for mask-mode (alpha, luminance).',
//   'mask-origin': 'Utilities for mask-origin.',
//   'mask-position': 'Utilities for mask-position.',
//   'mask-repeat': 'Utilities for mask-repeat.',
//   'mask-size': 'Utilities for mask-size.',
//   'mask-type': 'Utilities for mask-type.',
//   'z-index': 'Utilities for z-index stacking order.',
//   opacity: 'Utilities for element opacity.',
//   filter: 'Utilities for CSS filter (blur, brightness, contrast, etc.).',
//   'transition-property': 'Utilities for transition-property.',
//   'transition-behavior': 'Utilities for transition-behavior.',
//   'transition-duration': 'Utilities for transition-duration (.duration-*).',
//   'transition-timing-function':
//     'Utilities for transition-timing-function (.ease-*).',
//   'transition-delay': 'Utilities for transition-delay (.delay-*).',
//   animation:
//     'Utilities for animation (duration, timing, delay, iteration, etc.).',
//   transform: 'Utilities for transform (none, gpu).',
//   'transform-origin': 'Utilities for transform-origin (.origin-*).',
//   rotate: 'Utilities for rotate (.rotate-*, .-rotate-*).',
//   scale: 'Utilities for scale (.scale-*).',
//   skew: 'Utilities for skew (.skew-*).',
//   translate: 'Utilities for translate (.translate-*, .-translate-*).',
//   'transform-style': 'Utilities for transform-style (preserve-3d, flat).',
//   'backface-visibility': 'Utilities for backface-visibility.',
//   perspective: 'Utilities for perspective.',
//   'perspective-origin': 'Utilities for perspective-origin.',
//   'object-fit': 'Utilities for object-fit and object-position.',
//   'user-select': 'Utilities for user-select.',
//   'pointer-events': 'Utilities for pointer-events.',
//   'white-space': 'Utilities for white-space.',
//   'line-clamp': 'Utilities for line clamping (multi-line truncation).',
//   gap: 'Utilities for gap, column-gap, and row-gap (flex/grid).',
//   flex: 'Flex layout utilities (from grid.less: .fxb, .fxauto, .flex, etc.).',
//   grid: 'Grid layout utilities (from grid.less).',
//   space: 'Spacing utilities: padding and margin (pd0–pd25, mg0–mg25, etc.).',
//   size: 'Width/height utilities (w2–w300, h2–h300, etc.).',
//   color: 'Color utilities (bg-*, fg-*, bd-*) from utill.less.',
//   hover: 'Hover state background/text utilities (hover:bg-*, hover:fg-*).',
// };

// function buildSlugEntry(slug, sectionRows) {
//   const title = slugToTitle(slug);
//   const description =
//     STANDALONE_DESCRIPTIONS[slug] ?? `Utilities for ${title.toLowerCase()}.`;
//   return { title, description, sections: [{ title, rows: sectionRows }] };
// }

// function extractStandaloneSections(content, data) {
//   // Title may be followed by parenthetical or other text (e.g. "BREAK UTILITIES (break-after, ...)")
//   const sectionRe =
//     /\/\/ -+\s*\n\/\/\s*([A-Z][A-Z0-9\s-]+)(?:[^\n]*)\n(?:\/\/[^\n]*\n)*/g;
//   const classRuleRe = /^\s*\.([a-z0-9-]+)\s*\{\s*([^}]+)\}\s*;?\s*$/gm;
//   let m;
//   const sections = [];
//   while ((m = sectionRe.exec(content)) !== null) {
//     const sectionTitle = m[1].trim();
//     const start = m.index + m[0].length;
//     let end = content.length;
//     const nextSection = content.indexOf('\n// ---', start);
//     if (nextSection !== -1) end = nextSection;
//     const block = content.slice(start, end);
//     const rows = [];
//     let lineM;
//     classRuleRe.lastIndex = 0;
//     while ((lineM = classRuleRe.exec(block)) !== null) {
//       const cls = lineM[1];
//       let styles = lineM[2].replace(/\s*!important\s*;?\s*$/, '').trim();
//       if (styles.includes('.line-clamp-mixin')) {
//         const numMatch = styles.match(/\((\d+)\)/);
//         styles = numMatch
//           ? `line-clamp: ${numMatch[1]} line(s);`
//           : 'line-clamp;';
//       }
//       rows.push({
//         class: '.' + cls,
//         styles: styles + (styles.endsWith(';') ? '' : ';'),
//       });
//     }
//     if (rows.length) sections.push({ sectionTitle, rows });
//   }
//   for (const { sectionTitle, rows } of sections) {
//     const normTitle = sectionTitle.trim();

//     if (
//       normTitle === 'BREAK UTILITIES' ||
//       normTitle.startsWith('BREAK UTILITIES')
//     ) {
//       const breakAfter = rows.filter((r) =>
//         r.class.startsWith('.break-after-'),
//       );
//       const breakBefore = rows.filter((r) =>
//         r.class.startsWith('.break-before-'),
//       );
//       const breakInside = rows.filter((r) =>
//         r.class.startsWith('.break-inside-'),
//       );
//       for (const [slug, sectionRows] of [
//         ['break-after', breakAfter],
//         ['break-before', breakBefore],
//         ['break-inside', breakInside],
//       ]) {
//         if (sectionRows.length) {
//           const title = slugToTitle(slug);
//           const description =
//             STANDALONE_DESCRIPTIONS[slug] ??
//             `Utilities for ${title.toLowerCase()}.`;
//           data[slug] = {
//             title,
//             description,
//             sections: [{ title, rows: sectionRows }],
//           };
//         }
//       }
//       continue;
//     }

//     if (
//       normTitle === 'BOX DECORATION BREAK' ||
//       normTitle.startsWith('BOX DECORATION BREAK')
//     ) {
//       const boxDeco = rows.filter((r) =>
//         r.class.startsWith('.box-decoration-'),
//       );
//       const boxSizing = rows.filter(
//         (r) => r.class === '.box-border' || r.class === '.box-content',
//       );
//       for (const [slug, sectionRows] of [
//         ['box-decoration-break', boxDeco],
//         ['box-sizing', boxSizing],
//       ]) {
//         if (sectionRows.length) {
//           const title = slugToTitle(slug);
//           const description =
//             STANDALONE_DESCRIPTIONS[slug] ??
//             `Utilities for ${title.toLowerCase()}.`;
//           data[slug] = {
//             title,
//             description,
//             sections: [{ title, rows: sectionRows }],
//           };
//         }
//       }
//       continue;
//     }

//     if (
//       normTitle === 'BACKGROUND UTILITIES' ||
//       normTitle.startsWith('BACKGROUND UTILITIES')
//     ) {
//       const bgAttachment = rows.filter((r) =>
//         r.class.startsWith('.bg-attachment-'),
//       );
//       const bgClip = rows.filter((r) => r.class.startsWith('.bg-clip-'));
//       const bgOrigin = rows.filter((r) => r.class.startsWith('.bg-origin-'));
//       const bgRepeat = rows.filter((r) => r.class.startsWith('.bg-repeat'));
//       const bgPosition = rows.filter((r) =>
//         r.class.startsWith('.bg-position-'),
//       );
//       const bgSize = rows.filter((r) => r.class.startsWith('.bg-size-'));
//       for (const [slug, sectionRows] of [
//         ['background-attachment', bgAttachment],
//         ['background-clip', bgClip],
//         ['background-origin', bgOrigin],
//         ['background-repeat', bgRepeat],
//         ['background-position', bgPosition],
//         ['background-size', bgSize],
//       ]) {
//         if (sectionRows.length) {
//           const title = slugToTitle(slug);
//           const description =
//             STANDALONE_DESCRIPTIONS[slug] ??
//             `Utilities for ${title.toLowerCase()}.`;
//           data[slug] = {
//             title,
//             description,
//             sections: [{ title, rows: sectionRows }],
//           };
//         }
//       }
//       continue;
//     }

//     if (
//       normTitle === 'TABLES UTILITIES' ||
//       normTitle.startsWith('TABLES UTILITIES')
//     ) {
//       const borderCollapse = rows.filter(
//         (r) =>
//           r.class.startsWith('.table-collapse') ||
//           r.class.startsWith('.table-separate'),
//       );
//       const tableLayout = rows.filter(
//         (r) =>
//           r.class.startsWith('.table-auto') ||
//           r.class.startsWith('.table-fixed'),
//       );
//       const captionSide = rows.filter((r) => r.class.startsWith('.caption-'));
//       const borderSpacing = rows.filter((r) =>
//         r.class.startsWith('.border-spacing-'),
//       );
//       for (const [slug, sectionRows] of [
//         ['border-collapse', borderCollapse],
//         ['table-layout', tableLayout],
//         ['caption-side', captionSide],
//         ['border-spacing', borderSpacing],
//       ]) {
//         if (sectionRows.length) {
//           const title = slugToTitle(slug);
//           const description =
//             STANDALONE_DESCRIPTIONS[slug] ??
//             `Utilities for ${title.toLowerCase()}.`;
//           data[slug] = {
//             title,
//             description,
//             sections: [{ title, rows: sectionRows }],
//           };
//         }
//       }
//       continue;
//     }

//     if (
//       normTitle === 'OUTLINE UTILITIES' ||
//       normTitle.startsWith('OUTLINE UTILITIES')
//     ) {
//       const outlineWidth = rows.filter(
//         (r) =>
//           r.class === '.outline-none' ||
//           r.class === '.outline-0' ||
//           r.class === '.outline-1' ||
//           r.class === '.outline-2' ||
//           r.class === '.outline-4',
//       );
//       const outlineStyle = rows.filter(
//         (r) =>
//           r.class === '.outline-solid' ||
//           r.class === '.outline-dashed' ||
//           r.class === '.outline-dotted' ||
//           r.class === '.outline-double',
//       );
//       const outlineOffset = rows.filter((r) =>
//         r.class.startsWith('.outline-offset-'),
//       );
//       for (const [slug, sectionRows] of [
//         ['outline-width', outlineWidth],
//         ['outline-style', outlineStyle],
//         ['outline-offset', outlineOffset],
//       ]) {
//         if (sectionRows.length) {
//           const title = slugToTitle(slug);
//           const description =
//             STANDALONE_DESCRIPTIONS[slug] ??
//             `Utilities for ${title.toLowerCase()}.`;
//           data[slug] = {
//             title,
//             description,
//             sections: [{ title, rows: sectionRows }],
//           };
//         }
//       }
//       continue;
//     }

//     if (
//       normTitle === 'COLOR UTILITIES' ||
//       normTitle.startsWith('COLOR UTILITIES')
//     ) {
//       const bgRows = rows.filter((r) => r.class.startsWith('.bg-'));
//       if (bgRows.length) {
//         data['background-color'] = {
//           title: 'Background Color',
//           description:
//             STANDALONE_DESCRIPTIONS['background-color'] ??
//             'Utilities for background-color (semantic .bg-* classes).',
//           sections: [{ title: 'Background Color', rows: bgRows }],
//         };
//       }
//       continue;
//     }

//     if (
//       normTitle.startsWith('TEXT SHADOW') ||
//       normTitle.includes('BLEND MODE')
//     ) {
//       const textShadow = rows.filter((r) => r.class.startsWith('.text-shadow'));
//       const mixBlend = rows.filter((r) => r.class.startsWith('.mix-blend-'));
//       const bgBlend = rows.filter((r) => r.class.startsWith('.bg-blend-'));
//       for (const [slug, sectionRows] of [
//         ['text-shadow', textShadow],
//         ['mix-blend-mode', mixBlend],
//         ['background-blend-mode', bgBlend],
//       ]) {
//         if (sectionRows.length) data[slug] = buildSlugEntry(slug, sectionRows);
//       }
//       continue;
//     }

//     if (
//       normTitle === 'MASK UTILITIES' ||
//       normTitle.startsWith('MASK UTILITIES')
//     ) {
//       const maskClip = rows.filter((r) => r.class.startsWith('.mask-clip-'));
//       const maskComposite = rows.filter((r) =>
//         r.class.startsWith('.mask-composite-'),
//       );
//       const maskImage = rows.filter((r) => r.class === '.mask-none');
//       const maskMode = rows.filter((r) => r.class.startsWith('.mask-mode-'));
//       const maskOrigin = rows.filter((r) =>
//         r.class.startsWith('.mask-origin-'),
//       );
//       const maskPosition = rows.filter((r) =>
//         r.class.startsWith('.mask-position-'),
//       );
//       const maskRepeat = rows.filter(
//         (r) =>
//           r.class.startsWith('.mask-repeat') || r.class === '.mask-no-repeat',
//       );
//       const maskSize = rows.filter((r) => r.class.startsWith('.mask-size-'));
//       const maskType = rows.filter((r) => r.class.startsWith('.mask-type-'));
//       for (const [slug, sectionRows] of [
//         ['mask-clip', maskClip],
//         ['mask-composite', maskComposite],
//         ['mask-image', maskImage],
//         ['mask-mode', maskMode],
//         ['mask-origin', maskOrigin],
//         ['mask-position', maskPosition],
//         ['mask-repeat', maskRepeat],
//         ['mask-size', maskSize],
//         ['mask-type', maskType],
//       ]) {
//         if (sectionRows.length) data[slug] = buildSlugEntry(slug, sectionRows);
//       }
//       continue;
//     }

//     if (
//       normTitle === 'TRANSITION UTILITIES' ||
//       normTitle.startsWith('TRANSITION UTILITIES')
//     ) {
//       const transitionProperty = rows.filter((r) =>
//         r.class.startsWith('.transition-'),
//       );
//       const transitionBehavior = rows.filter((r) =>
//         r.class.startsWith('.transition-behavior-'),
//       );
//       const transitionDuration = rows.filter((r) =>
//         r.class.startsWith('.duration-'),
//       );
//       const transitionTiming = rows.filter((r) => r.class.startsWith('.ease-'));
//       const transitionDelay = rows.filter((r) => r.class.startsWith('.delay-'));
//       const animationRows = rows.filter((r) =>
//         r.class.startsWith('.animation-'),
//       );
//       for (const [slug, sectionRows] of [
//         ['transition-property', transitionProperty],
//         ['transition-behavior', transitionBehavior],
//         ['transition-duration', transitionDuration],
//         ['transition-timing-function', transitionTiming],
//         ['transition-delay', transitionDelay],
//         ['animation', animationRows],
//       ]) {
//         if (sectionRows.length) data[slug] = buildSlugEntry(slug, sectionRows);
//       }
//       continue;
//     }

//     if (
//       normTitle === 'TRANSFORM UTILITIES' ||
//       normTitle.startsWith('TRANSFORM UTILITIES')
//     ) {
//       const transform = rows.filter((r) => r.class.startsWith('.transform-'));
//       const transformOrigin = rows.filter((r) =>
//         r.class.startsWith('.origin-'),
//       );
//       const rotate = rows.filter(
//         (r) =>
//           r.class.startsWith('.rotate-') || r.class.startsWith('.-rotate-'),
//       );
//       const scale = rows.filter((r) => r.class.startsWith('.scale-'));
//       const skew = rows.filter((r) => r.class.startsWith('.skew-'));
//       const translate = rows.filter(
//         (r) =>
//           r.class.startsWith('.translate-') ||
//           r.class.startsWith('.-translate-'),
//       );
//       const transformStyle = rows.filter((r) =>
//         r.class.startsWith('.preserve-'),
//       );
//       const backface = rows.filter((r) => r.class.startsWith('.backface-'));
//       const perspective = rows.filter(
//         (r) =>
//           r.class.startsWith('.perspective-') &&
//           !r.class.startsWith('.perspective-origin-'),
//       );
//       const perspectiveOrigin = rows.filter((r) =>
//         r.class.startsWith('.perspective-origin-'),
//       );
//       for (const [slug, sectionRows] of [
//         ['transform', transform],
//         ['transform-origin', transformOrigin],
//         ['rotate', rotate],
//         ['scale', scale],
//         ['skew', skew],
//         ['translate', translate],
//         ['transform-style', transformStyle],
//         ['backface-visibility', backface],
//         ['perspective', perspective],
//         ['perspective-origin', perspectiveOrigin],
//       ]) {
//         if (sectionRows.length) data[slug] = buildSlugEntry(slug, sectionRows);
//       }
//       continue;
//     }

//     const slug = STANDALONE_SECTION_TO_SLUG[normTitle];
//     if (slug == null) continue;
//     const title = slugToTitle(slug);
//     const description =
//       STANDALONE_DESCRIPTIONS[slug] ?? `Utilities for ${title.toLowerCase()}.`;
//     data[slug] = { title, description, sections: [{ title, rows }] };
//   }
//   return data;
// }

// function injectGapFlexGridSpaceSizeColorHover(data) {
//   const gapRows = [];
//   for (let i = 1; i <= 15; i++) {
//     gapRows.push({ class: `.gp${i}`, styles: 'gap: @' + i * 4 + 'px;' });
//     gapRows.push({
//       class: `.hgp${i}`,
//       styles: 'column-gap: @' + i * 4 + 'px;',
//     });
//     gapRows.push({ class: `.vgp${i}`, styles: 'row-gap: @' + i * 4 + 'px;' });
//   }
//   data['gap'] = {
//     title: 'Gap',
//     description: STANDALONE_DESCRIPTIONS.gap,
//     sections: [{ title: 'Gap', rows: gapRows }],
//   };

//   const flexRows = [
//     { class: '.fxb', styles: 'display: flex;' },
//     { class: '.fxauto', styles: 'flex: 1 1 auto;' },
//     { class: '.flex', styles: 'display: inline-flex;' },
//     { class: '.wrap / .no-wrap / .wrap-reverse', styles: 'flex-wrap.' },
//     {
//       class: '.row / .column / .row-reverse / .column-reverse',
//       styles: 'flex-direction.',
//     },
//     {
//       class: '.grow / .shrink / .no-shrink / .auto / .none',
//       styles: 'flex item (on .fxb).',
//     },
//     {
//       class: '.fvs / .fvh / .fhs / .fhe',
//       styles: 'align-items / justify-content.',
//     },
//   ];
//   data['flex'] = {
//     title: 'Flex',
//     description: STANDALONE_DESCRIPTIONS.flex,
//     sections: [{ title: 'Flex (from grid.less)', rows: flexRows }],
//   };

//   const gridRows = [
//     { class: '.grid', styles: 'display: grid; 12-column layout.' },
//     { class: '.col-1 … .col-12', styles: 'grid-column span.' },
//     { class: '.row-1 … .row-8', styles: 'grid-row span.' },
//     {
//       class: '.span-full / .span-left / .span-right',
//       styles: 'grid-column shortcuts.',
//     },
//   ];
//   data['grid'] = {
//     title: 'Grid',
//     description: STANDALONE_DESCRIPTIONS.grid,
//     sections: [{ title: 'Grid (from grid.less)', rows: gridRows }],
//   };

//   const spaceRows = [
//     {
//       class: '.pd0 – .pd25',
//       styles: 'padding (all sides and per-side: pdt, pdb, pdl, pdr, pdx, pdy).',
//     },
//     { class: '.mg0 – .mg25', styles: 'margin (mgt, mgb, mgl, mgr, mgx, mgy).' },
//     { class: '.mgn1 – .mgn25', styles: 'negative margin.' },
//     { class: '.mg-auto, .mgx-auto, .mgy-auto', styles: 'margin: auto.' },
//   ];
//   data['space'] = {
//     title: 'Space',
//     description: STANDALONE_DESCRIPTIONS.space,
//     sections: [{ title: 'Spacing', rows: spaceRows }],
//   };

//   const sizeRows = [
//     { class: '.w2 – .w150, .w155 – .w300', styles: 'width (px scale).' },
//     { class: '.h2 – .h150, .min-h*, .max-h*', styles: 'height.' },
//     {
//       class: '.w-full, .min-w-full, .w-1-2, .w-1-3',
//       styles: 'percent and fraction.',
//     },
//   ];
//   data['size'] = {
//     title: 'Size',
//     description: STANDALONE_DESCRIPTIONS.size,
//     sections: [{ title: 'Size', rows: sizeRows }],
//   };

//   data['color'] = data['color'] || {
//     title: 'Color',
//     description: STANDALONE_DESCRIPTIONS.color,
//     sections: [
//       {
//         title: 'Color',
//         rows: [
//           {
//             class: '.bg-*, .fg-*, .bd-*',
//             styles: 'See utill.less (brand, semantic, layers).',
//           },
//         ],
//       },
//     ],
//   };

//   data['hover'] = data['hover'] || {
//     title: 'Hover',
//     description: STANDALONE_DESCRIPTIONS.hover,
//     sections: [
//       {
//         title: 'Hover',
//         rows: [
//           {
//             class: '.hover\\:bg-*, .hover\\:fg-*',
//             styles: 'Hover state overrides (see utill.less).',
//           },
//         ],
//       },
//     ],
//   };

//   return data;
// }

// function readFileSafe(filePath) {
//   try {
//     return fs.readFileSync(filePath, 'utf8');
//   } catch (e) {
//     return null;
//   }
// }

// function injectTypographyFromLess(data) {
//   const content = readFileSafe(TYPOLESS_PATH);
//   if (!content) return data;
//   const classRuleRe = /^\s*\.([a-z0-9-]+)\s*\{\s*([^}]+)\}\s*;?\s*$/gm;
//   const rows = [];
//   let m;
//   while ((m = classRuleRe.exec(content)) !== null) {
//     const cls = m[1];
//     const body = m[2].replace(/\s*!important\s*;?\s*$/, '').trim();
//     const styles = body
//       .split(';')
//       .map((s) => s.trim())
//       .filter(Boolean)
//       .join('; ');
//     if (styles)
//       rows.push({
//         class: '.' + cls,
//         styles: styles + (styles.endsWith(';') ? '' : ';'),
//       });
//   }
//   const fontSizeRows = rows.filter(
//     (r) => r.class.startsWith('.font-size') || r.class.startsWith('.text-'),
//   );
//   const weightRows = rows.filter((r) =>
//     [
//       '.font-light',
//       '.regular-font',
//       '.medium-font',
//       '.font-semibold',
//       '.bold-font',
//     ].includes(r.class),
//   );
//   const headingRows = [
//     {
//       class: 'h1, .h1',
//       styles: 'font-size, line-height, font-weight from typography vars;',
//     },
//     { class: 'h2, .h2 … h6, .h6', styles: 'Heading scale (typography.less);' },
//     { class: '.h7', styles: 'Smallest heading;' },
//   ];
//   const otherTypoRows = rows.filter(
//     (r) =>
//       !fontSizeRows.includes(r) &&
//       !weightRows.includes(r) &&
//       (r.class.startsWith('.line-height') ||
//         (r.class.startsWith('.font-') && !r.class.startsWith('.font-size'))),
//   );
//   const sections = [];
//   if (fontSizeRows.length)
//     sections.push({ title: 'Font size', rows: fontSizeRows });
//   sections.push({ title: 'Headings', rows: headingRows });
//   if (weightRows.length)
//     sections.push({ title: 'Font weight / face', rows: weightRows });
//   if (otherTypoRows.length)
//     sections.push({ title: 'Line height & other', rows: otherTypoRows });
//   if (sections.length) {
//     data['typography'] = {
//       title: 'Typography',
//       description:
//         'Standardized font scale, heading system, and other utilities from typography.less and typography-vars.less.',
//       sections,
//     };
//   }
//   return data;
// }

// function injectColorsFromLess(data) {
//   const content = readFileSafe(COLORVARS_PATH);
//   if (!content) return data;
//   const varRe = /^\s*@([a-z0-9A-Z-]+):\s*(.+?);\s*$/gm;
//   const rows = [];
//   let m;
//   while ((m = varRe.exec(content)) !== null) {
//     const token = '@' + m[1];
//     let value = m[2].trim();
//     if (value.length > 72) value = value.slice(0, 69) + '...';
//     rows.push({ class: token, styles: value });
//   }
//   const bySection = {
//     brand: [
//       '@primary-color',
//       '@primary-hover-color',
//       '@primary-fg-color',
//       '@primary-disabled-color',
//       '@primary-bdr',
//       '@primary-text-color',
//     ],
//     text: [
//       '@text-color',
//       '@secondary-text-color',
//       '@tertiary-text-color',
//       '@link-color',
//       '@link-hover-color',
//       '@disabled-fg-color',
//     ],
//     bg: [
//       '@body-background',
//       '@default-background',
//       '@secondary-background',
//       '@bg-layer1',
//       '@bg-layer2',
//       '@overlay-bg',
//       '@header-background',
//     ],
//   };
//   const sections = [];
//   Object.entries(bySection).forEach(([name, tokens]) => {
//     const sectionRows = rows.filter((r) => tokens.includes(r.class));
//     if (sectionRows.length)
//       sections.push({
//         title:
//           name === 'brand'
//             ? 'Brand / primary'
//             : name === 'bg'
//               ? 'Backgrounds'
//               : 'Text colors',
//         rows: sectionRows,
//       });
//   });
//   const otherRows = rows.filter(
//     (r) => !Object.values(bySection).flat().includes(r.class),
//   );
//   if (otherRows.length)
//     sections.push({ title: 'Other tokens', rows: otherRows.slice(0, 35) });
//   if (sections.length) {
//     data['colors'] = {
//       title: 'Colors',
//       description:
//         'Palette layers, semantic tokens, and theming from color-vars.less. Utility classes (.bg-*, .fg-*) in utill.less.',
//       sections,
//     };
//   }
//   return data;
// }

// /** Mirrors utill.less @position-values; used for top/right/bottom/left docs. */
// const POSITION_VALUES = {
//   auto: 'auto',
//   0: '0',
//   1: '0.125rem',
//   2: '0.25rem',
//   3: '0.375rem',
//   4: '0.5rem',
//   5: '0.625rem',
//   6: '0.75rem',
//   8: '1rem',
//   10: '1.25rem',
//   12: '1.5rem',
//   16: '2rem',
//   20: '2.5rem',
//   24: '3rem',
//   32: '4rem',
//   40: '5rem',
//   48: '6rem',
//   56: '7rem',
//   64: '8rem',
//   full: '100%',
//   half: '50%',
// };

// function injectTopRightBottomLeft(data) {
//   const rows = [];
//   const prefixes = [
//     ['tp', 'top'],
//     ['rt', 'right'],
//     ['bt', 'bottom'],
//     ['lt', 'left'],
//   ];
//   for (const [prefix, property] of prefixes) {
//     for (const [key, value] of Object.entries(POSITION_VALUES)) {
//       rows.push({
//         class: `.${prefix}${key}`,
//         styles: `${property}: ${value};`,
//       });
//     }
//   }
//   data['top-right-bottom-left'] = {
//     title: 'Top Right Bottom Left',
//     description:
//       STANDALONE_DESCRIPTIONS['top-right-bottom-left'] ??
//       'Utilities for top, right, bottom, left (tpN, rtN, btN, ltN).',
//     sections: [{ title: 'Top Right Bottom Left', rows }],
//   };
//   return data;
// }

// /**
//  * Ensures every slug from utill.schema.json has an entry in data.
//  * Schema properties without parsed content get a stub (empty sections) so
//  * the docs app can show title/description and a consistent empty state.
//  */
// function ensureSchemaSlugsInData(data) {
//   const schemaPath = resolveSchemaPath();
//   if (!schemaPath) return data;
//   let schema;
//   try {
//     schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
//   } catch (e) {
//     return data;
//   }
//   const categories = schema.categories || {};
//   const allSlugs = new Set(Object.values(categories).flat());
//   for (const slug of allSlugs) {
//     if (data[slug]) continue;
//     data[slug] = {
//       title: slugToTitle(slug),
//       description: descriptionForSlug(slug),
//       sections: [],
//     };
//   }
//   return data;
// }

// function main() {
//   let content;
//   try {
//     content = fs.readFileSync(UTLESS_PATH, 'utf8');
//   } catch (e) {
//     console.error('Could not read utill.less at', UTLESS_PATH, e.message);
//     process.exit(1);
//   }

//   const blocks = extractMapBlocks(content);
//   const eachProps = extractEachProperty(content);
//   let data = buildData(blocks, eachProps);
//   data = injectBorderFromLess(content, data);
//   data = extractStandaloneSections(content, data);
//   data = injectGapFlexGridSpaceSizeColorHover(data);
//   data = injectTypographyFromLess(data);
//   data = injectColorsFromLess(data);
//   data = injectTopRightBottomLeft(data);
//   data = ensureSchemaSlugsInData(data);

//   const outDir = path.dirname(OUT_PATH);
//   if (!fs.existsSync(outDir)) {
//     fs.mkdirSync(outDir, { recursive: true });
//   }

//   const jsContent =
//     '// Auto-generated from ULS utill.less by scripts/parse-uls-utilities.js. Do not edit by hand.\n' +
//     'export default ' +
//     JSON.stringify(data, null, 2) +
//     ';\n';

//   fs.writeFileSync(OUT_PATH, jsContent, 'utf8');
//   console.log('Wrote', OUT_PATH);
// }

// main();
