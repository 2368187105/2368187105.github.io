/* eslint-disable @typescript-eslint/no-require-imports -- Offline TypeScript regression harness. */
const assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), Module = require('node:module'), ts = require('typescript');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(id, ...args) { return resolve.call(this, id.startsWith('@/') ? path.resolve(__dirname, '../src', id.slice(2)) : id, ...args); };
require.extensions['.ts'] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, file);
const { questions } = require('../src/data/questions.ts');
const { curricula } = require('../src/data/curriculum.ts');
const { searchSite } = require('../src/lib/site-search.ts');
const { safeReturnPath } = require('../src/lib/login-return.ts');
const { newPracticeBatch, readPracticeBatch, emptyBatchAnswer, batchAnswered, batchAssessed, batchRecord, savePracticeBatch } = require('../src/lib/practice-batch.ts');

function fixture() {
  const state = { rows: [], mistakes: new Map(), writes: 0, failRead: false, failInsert: false, failMistake: false, user: 'student-A' };
  const client = { auth: { async getUser() { return { data: { user: { id: state.user } } }; } }, from(table) {
    return {
      select() { const filters = {}; const chain = { eq(k, v) { filters[k] = v; return chain; }, async in(k, ids) { return { data: state.rows.filter(r => Object.entries(filters).every(([k, v]) => r[k] === v) && ids.includes(r[k])), error: state.failRead ? {} : null }; } }; return chain; },
      async insert(value) {
        if (table === 'practice_attempts') { if (state.failInsert) return { error: {} }; state.writes++; state.rows.push(...value); return { error: null }; }
        if (state.failMistake) return { error: {} };
        if (state.mistakes.has(value.question_id)) return { error: { code: '23505' } };
        state.mistakes.set(value.question_id, value); return { error: null };
      },
      update(value) { const chain = { eq() { return chain; }, select() { return chain; }, async maybeSingle() { state.mistakes.set(value.question_id, value); return { data: value, error: null }; } }; return chain; },
    };
  } };
  return { state, client };
}
(async () => {
  assert.deepEqual(searchSite('   '), []);
  assert.deepEqual(searchSite('不存在的知识点xyz'), []);
  assert.ok(searchSite('导数').some(r => r.kind === 'course'));
  assert.ok(searchSite('导数 单调').length > 0);
  assert.ok(searchSite('向量', 'grade2', 'question').every(r => r.grade === 'grade2' && r.kind === 'question'));
  assert.equal(searchSite('填空题', 'all', 'question').length, questions.filter(q => q.kind === 'fill').length);
  for (const grade of curricula) for (const chapter of grade.chapters) for (const lesson of chapter.lessons) assert.ok(searchSite(lesson.title, grade.id, 'course').some(r => r.href === lesson.href));
  for (const q of questions) assert.ok(searchSite(q.title, 'all', 'question').some(r => r.id === q.id), q.id);
  assert.ok(searchSite('√3').length > 0);
  assert.equal(safeReturnPath('/search/?q=%E5%AF%BC%E6%95%B0'), '/search/?q=%E5%AF%BC%E6%95%B0');
  const items = ['g3-functions-domain-range-choice-01', 'g3-sets-concept-fill-02', 'g3-review-sets-logic-written-01'].map(id => questions.find(q => q.id === id));
  const [choice, fill, written] = items;
  const draft = newPracticeBatch(items);
  assert.ok(readPracticeBatch(JSON.stringify(draft), items));
  assert.equal(readPracticeBatch(JSON.stringify(draft), items.slice(1)), null);
  assert.ok(!batchAnswered(written, emptyBatchAnswer()));
  draft.answers[choice.id] = { ...emptyBatchAnswer(), text: choice.correctAnswer };
  draft.answers[fill.id] = { ...emptyBatchAnswer(), text: fill.correctAnswer };
  draft.answers[written.id] = { ...emptyBatchAnswer(), attempted: true, checks: [] };
  assert.ok(items.every(q => batchAnswered(q, draft.answers[q.id])));
  assert.ok(!batchAssessed(written, draft.answers[written.id]));
  draft.stage = 'review'; assert.ok(readPracticeBatch(JSON.stringify(draft), items));
  draft.answers[written.id].checks = [2, 1, 0];
  assert.ok(batchAssessed(written, draft.answers[written.id]));
  assert.equal(batchRecord(written, draft.answers[written.id]).correct, false);
  assert.deepEqual(JSON.parse(batchRecord(written, draft.answers[written.id]).answer.slice(5)), { mode: 'paper', work: '', checks: [2, 1, 0] });
  draft.stage = 'submitted'; draft.submittedAt = '2026-10-22T05:10:01.234Z';
  assert.ok(readPracticeBatch(JSON.stringify(draft), items));
  const broken = structuredClone(draft); broken.answers[written.id].checks = [2, null, 2]; assert.equal(readPracticeBatch(JSON.stringify(broken), items), null);
  let { client, state } = fixture();
  state.failMistake = true;
  let result = await savePracticeBatch(client, 'student-A', items, draft);
  assert.ok(!result.saved); assert.equal(state.rows.length, 3); assert.equal(state.writes, 1);
  state.failMistake = false;
  result = await savePracticeBatch(client, 'student-A', items, draft);
  assert.ok(result.saved); assert.equal(state.rows.length, 3); assert.equal(state.writes, 1, 'Retry must not reinsert confirmed answers');
  result = await savePracticeBatch(client, 'student-A', items, draft);
  assert.ok(result.saved); assert.equal(state.writes, 1); assert.equal(state.mistakes.size, 1);
  state.failRead = true; result = await savePracticeBatch(client, 'student-A', items, draft); assert.ok(!result.saved); assert.equal(state.writes, 1);
  state.failRead = false; state.user = 'student-B'; result = await savePracticeBatch(client, 'student-A', items, draft); assert.ok(!result.saved); assert.equal(state.writes, 1);
  ({ client, state } = fixture()); state.failInsert = true;
  result = await savePracticeBatch(client, 'student-A', items, draft); assert.ok(!result.saved); assert.equal(state.rows.length, 0); assert.equal(state.mistakes.size, 0);
  state.failInsert = false; result = await savePracticeBatch(client, 'student-A', items, draft); assert.ok(result.saved); assert.equal(state.rows.length, 3);
  console.log(JSON.stringify({ searchCourses: 132, searchableQuestions: questions.length, mixedBatch: 'passed', draftRestoreAndValidation: 'passed', failedRetryNoDuplicate: 'passed', authIsolation: 'passed', actualCloudWrites: false }));
})().catch(error => { console.error(error); process.exitCode = 1; });
