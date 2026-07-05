/**
 * Shared helpers for documentation code preview display.
 */

export function extractTemplateOnly(source) {
  if (!source) {
    return '';
  }

  const code = String(source);
  const openTag = '<template>';
  const closeTag = '</template>';
  const start = code.indexOf(openTag);
  if (start === -1) {
    return '';
  }
  const end = code.lastIndexOf(closeTag);
  if (end === -1 || end < start) {
    return '';
  }
  return code.slice(start, end + closeTag.length).trim();
}

/**
 * Remove common leading indentation while preserving relative indents.
 */
export function dedentBlock(text) {
  if (!text) {
    return '';
  }
  const normalized = text
    .replace(/\r\n?|\u2028|\u2029/g, '\n')
    .replace(/^\uFEFF/, '');
  const withoutLeadingNewline = normalized.replace(/^\n/, '');
  const lines = withoutLeadingNewline.split('\n');

  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim().length === 0) {
      continue;
    }
    const m = line.match(/^[\t ]*/);
    const count = m ? m[0].length : 0;
    if (count < minIndent) {
      minIndent = count;
    }
  }

  if (!isFinite(minIndent) || minIndent === 0) {
    return withoutLeadingNewline.trimEnd();
  }

  const out = lines.map((line) => {
    if (line.trim().length === 0) {
      return line;
    }
    return line.slice(minIndent);
  });

  if (out.length > 0 && out[0]) {
    out[0] = out[0].replace(/^\s+/, '');
  }

  return out.join('\n').trimEnd();
}

export function resolveDisplayCode(source, { expanded = false } = {}) {
  if (!source) {
    return '';
  }

  const code = String(source);

  if (!expanded) {
    const templateOnly = extractTemplateOnly(code);
    if (!templateOnly) {
      return dedentBlock(code);
    }
    return dedentBlock(templateOnly);
  }

  return dedentBlock(code);
}
