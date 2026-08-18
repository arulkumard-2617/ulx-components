export { default } from 'ember-qunit';
export {
  setupApplicationTest,
  setupRenderingTest,
  setupTest
} from 'ember-qunit';

export { dispatchClick } from './dispatch-click';
export {
  createDeferred,
  createHandledDeferred,
  resolveAndSettle,
  rejectAndSettle
} from './deferred';
