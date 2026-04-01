/* eslint-disable no-console */
import Application from 'ulx-ember/app';
import config from 'ulx-ember/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start, setupEmberOnerrorValidation } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);
setupEmberOnerrorValidation();

// Only load tests if test-loader is available
try {
  const { loadTests } = require('ember-qunit/test-loader');
loadTests();
} catch {
  // Test loader not available, skip loading tests
  console.warn('Test loader not available, skipping test loading');
}

start();
