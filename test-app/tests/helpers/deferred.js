import { settled } from '@ember/test-helpers';

/**
 * Controllable promise for loading / async interaction tests.
 *
 * @returns {{ promise: Promise<unknown>, resolve: (value?: unknown) => void, reject: (reason?: unknown) => void }}
 */
export function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

/**
 * Deferred whose exposed thenable never rejects to QUnit, while still
 * letting the test reject the underlying promise to clear component state.
 *
 * @returns {{
 *   promise: Promise<unknown>,
 *   thenable: Promise<undefined>,
 *   resolve: (value?: unknown) => void,
 *   reject: (reason?: unknown) => void,
 * }}
 */
export function createHandledDeferred() {
  const { promise, resolve, reject } = createDeferred();
  const thenable = promise.then(
    () => undefined,
    () => undefined,
  );

  return { promise, thenable, resolve, reject };
}

/**
 * @param {{ resolve: (value?: unknown) => void }} deferred
 * @param {unknown} [value]
 */
export async function resolveAndSettle(deferred, value) {
  deferred.resolve(value);
  await settled();
}

/**
 * @param {{ reject: (reason?: unknown) => void }} deferred
 * @param {unknown} [reason]
 */
export async function rejectAndSettle(deferred, reason) {
  deferred.reject(reason);
  await settled();
}
