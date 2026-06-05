// Copy to documentation/components/<slug>/usages.js and fill in.
export default {
  component: 'UlxComponentName',
  routeKey: 'route-slug',
  summary:
    'One line under the page title (also set meta.subHeader). Pages with usages.js also show an AI hint to read Usage guidance.',
  guidanceSubtitle:
    'Best practices, when to use, and accessibility considerations.',
  responsibility: 'One sentence: what this component owns.',
  owns: ['Capability the component provides'],
  doesNotOwn: ['What callers should use another component for'],
  whenToUse: ['Scenario where this is the right choice'],
  whenNotToUse: [
    { instead: 'UlxOther', when: 'When that other component fits better' }
  ],
  dos: ['Actionable guidance'],
  donts: ['Avoid this pattern'],
  antiPatterns: ['Common misuse'],
  keyParamNames: ['mostUsedArg1', 'mostUsedArg2']
};
