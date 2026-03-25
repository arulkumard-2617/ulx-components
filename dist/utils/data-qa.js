function resolveRootDataQa(dataQaArg, componentName) {
  return dataQaArg ?? `ulx-${componentName}`;
}
function buildDataQa(rootDataQa, part) {
  if (!part) {
    return rootDataQa;
  }
  return `${rootDataQa}-${part}`;
}

export { buildDataQa, resolveRootDataQa };
//# sourceMappingURL=data-qa.js.map
