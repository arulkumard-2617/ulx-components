import Route from '@ember/routing/route';

const OVERVIEW_SECTIONS = [
  { id: 'overview-introduction', sectionNav: 'Introduction' },
  { id: 'overview-advantages', sectionNav: 'Advantages of ULX' },
  { id: 'overview-who-is-this-for', sectionNav: 'Who is this for' },
  { id: 'overview-next-steps', sectionNav: 'Explore next' }
];

export default class GettingStartedOverviewRoute extends Route {
  model() {
    return { sections: OVERVIEW_SECTIONS };
  }
}
