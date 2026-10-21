/* eslint-disable @typescript-eslint/no-require-imports -- Isolated CommonJS harness for the TypeScript client wrapper; no real auth requests or password changes. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (id, ...args) { return resolve.call(this, id.startsWith('@/') ? path.resolve(__dirname, '../src', id.slice(2)) : id, ...args); };
require.extensions['.ts'] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
const { passwordRecoveryDestination, passwordResetPath } = require('../src/lib/password-recovery.ts');
for (const event of ['INITIAL_SESSION', 'SIGNED_IN', 'SIGNED_OUT', 'TOKEN_REFRESHED', 'USER_UPDATED', 'MFA_CHALLENGE_VERIFIED']) {
  assert.equal(passwordRecoveryDestination(event, '/'), null);
}
for (const pathname of ['/', '/login/', '/practice/']) assert.equal(passwordRecoveryDestination('PASSWORD_RECOVERY', pathname), passwordResetPath);
for (const pathname of ['/reset-password', '/reset-password/']) assert.equal(passwordRecoveryDestination('PASSWORD_RECOVERY', pathname), null);

let callback, subscriptions = 0;
const navigations = [];
const fakeClient = { auth: { onAuthStateChange(handler) { subscriptions++; callback = handler; } } };
const load = Module._load;
Module._load = function (id, ...args) { return id === '@supabase/ssr' ? { createBrowserClient: () => fakeClient } : load.call(this, id, ...args); };
const { createClient } = require('../src/lib/supabase/client.ts');
assert.equal(createClient(), fakeClient);
assert.equal(subscriptions, 0, 'server rendering must not register browser navigation');
global.window = { location: { pathname: '/', replace: destination => navigations.push(destination) } };
assert.equal(createClient(), fakeClient);
createClient();
assert.equal(subscriptions, 1, 'the shared client must have only one recovery listener');
callback('SIGNED_IN');
assert.deepEqual(navigations, []);
callback('PASSWORD_RECOVERY');
assert.deepEqual(navigations, ['/reset-password/']);
window.location.pathname = '/reset-password/';
callback('PASSWORD_RECOVERY');
assert.equal(navigations.length, 1, 'recovery page must not reload in a loop');
delete global.window;
Module._load = load;
console.log(JSON.stringify({ verifiedRecoveryRoutesToForm: true, ordinarySignInUnchanged: true, singletonAndServerRendering: 'passed', actualPasswordChanged: false }));
