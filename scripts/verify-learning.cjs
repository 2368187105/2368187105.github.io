/* eslint-disable @typescript-eslint/no-require-imports -- This Node CommonJS check installs a TypeScript require hook before loading the app's pure modules. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (id, ...args) { return resolve.call(this, id.startsWith('@/') ? path.resolve(__dirname, '../src', id.slice(2)) : id, ...args); };
require.extensions['.ts'] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
const { questions, grade3PracticeChapters } = require('../src/data/questions.ts');
const { checkAnswer, normalizeAnswer } = require('../src/lib/answer-checking.ts');
const { summarizeLearning } = require('../src/lib/learning-summary.ts');
const { savePracticeRecord } = require('../src/lib/practice-records.ts');

function clientFixture(errors = [], updatedRowVisible = true) {
  const calls = [];
  return { calls, from(table) { return {
    async insert(value) { calls.push({ action: 'insert', table, value }); const error = errors.shift(); if (error instanceof Error) throw error; return { error }; },
    update(value) { const call = { action: 'update', table, value, filters: [] }; calls.push(call); const chain = { eq(k, v) { call.filters.push([k, v]); return chain; }, select() { return chain; }, async maybeSingle() { return { error: errors.shift(), data: updatedRowVisible ? { question_id: value.question_id, user_answer: value.user_answer } : null }; } }; return chain; },
  }; } };
}

(async () => {
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  const topics = new Set(grade3PracticeChapters.flatMap(c => c.topics));
  assert.ok(questions.filter(q => q.id.startsWith('g3-')).every(q => topics.has(q.topic)));
  for (const q of questions.filter(q => q.kind === 'fill')) {
    for (const a of q.acceptedAnswers ?? [q.correctAnswer]) assert.ok(checkAnswer(q, a), `${q.id}: ${a}`);
    assert.ok(!checkAnswer(q, '1/0') && !checkAnswer(q, 'process.exit()'));
  }
  assert.equal(normalizeAnswer('-0.50'), normalizeAnswer('-1/2'));
  assert.equal(normalizeAnswer('{3,1,3}'), normalizeAnswer('{1,3}'));
  const intervalQuestion = questions.find(q => q.id === 'g3-review-sets-logic-fill-02');
  for (const answer of ['(1,4]', '1<x<=4', '4>=x>1', 'x∈(1,4]']) assert.ok(checkAnswer(intervalQuestion, answer));
  for (const answer of ['[1,4]', '1<=x<=4', '(1,4)', '1<x<4']) assert.ok(!checkAnswer(intervalQuestion, answer));
  const writtenIds = new Set(questions.filter(q => q.kind === 'written').map(q => q.id));
  const q = questions.find(q => q.kind === 'fill');
  const w = questions.find(q => q.kind === 'written');
  const summary = summarizeLearning([
    { question_id: w.id, topic: w.topic, selected_answer: 'self:{"checks":[2,1]}', is_correct: false },
    { question_id: q.id, topic: q.topic, selected_answer: q.correctAnswer, is_correct: true },
    { question_id: 'legacy-choice', topic: q.topic, selected_answer: 'B', is_correct: false },
    { question_id: 'removed-written', topic: w.topic, selected_answer: 'self:{}', is_correct: true },
  ], writtenIds);
  assert.deepEqual([summary.total, summary.correct, summary.wrong, summary.accuracy, summary.selfAssessed], [2, 1, 1, 50, 2]);
  let client = clientFixture();
  let result = await savePracticeRecord(client, 'test-user', q, q.correctAnswer, true);
  assert.ok(result.saved); assert.equal(client.calls.length, 1); assert.equal(client.calls[0].value.user_id, 'test-user');
  client = clientFixture();
  result = await savePracticeRecord(client, 'test-user', w, 'self:{"work":"test","checks":[2,1,0]}', false);
  assert.ok(result.saved); assert.equal(client.calls.length, 2); assert.ok(client.calls[1].value.user_answer.startsWith('self:'));
  client = clientFixture([null, { code: '23505' }, null]);
  result = await savePracticeRecord(client, 'test-user', q, 'wrong-latest', false);
  assert.ok(result.saved); assert.deepEqual(client.calls[2].filters, [['user_id', 'test-user'], ['question_id', q.id]]); assert.equal(client.calls[2].value.user_answer, 'wrong-latest');
  client = clientFixture([{ message: 'unavailable' }]);
  result = await savePracticeRecord(client, 'test-user', q, 'wrong', false);
  assert.ok(!result.saved); assert.equal(client.calls.length, 1);
  client = clientFixture([new Error('offline')]);
  result = await savePracticeRecord(client, 'test-user', q, 'wrong', false);
  assert.ok(!result.saved); assert.ok(result.message.includes('本地结果'));
  client = clientFixture([null, { code: '23505' }, { message: 'update denied' }]);
  result = await savePracticeRecord(client, 'test-user', q, 'wrong', false);
  assert.ok(result.saved && result.message.includes('更新未确认'));
  client = clientFixture([null, { code: '23505' }, null], false);
  result = await savePracticeRecord(client, 'test-user', q, 'wrong', false);
  assert.ok(result.saved && result.message.includes('更新未确认'));
  console.log(JSON.stringify({ questions: questions.length, answerAliases: 'passed', objectiveAndSelfAssessmentSeparation: 'passed', persistenceFailureAndDuplicateCases: 'passed', actualCloudWrites: false }));
})().catch(error => { console.error(error); process.exitCode = 1; });
