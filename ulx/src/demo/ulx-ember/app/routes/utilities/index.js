import Route from '@ember/routing/route';

export default class UtilitiesIndexRoute extends Route {
  async model() {
    // Import React Utilities component from @ulx/foundation
    let ReactUtilities;
    try {
      const utilitiesModule = await import('@ulx/foundation');
      ReactUtilities = utilitiesModule.Utilities ?? utilitiesModule.default;
    } catch (error) {
      console.error('Could not load React Utilities component:', error);
      if (error.message) {
        console.error('Error message:', error.message);
      }
      if (error.stack) {
        console.error('Error stack:', error.stack);
      }
    }

    return {
      useReactComponents: !!ReactUtilities,
      ReactUtilities
    };
  }
}

