/* eslint-disable @typescript-eslint/no-require-imports -- Loads pure TypeScript data and helpers for a Node verification. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(id,...args) { return resolve.call(this,id.startsWith('@/') ? path.resolve(__dirname,'../src',id.slice(2)) : id,...args); };
require.extensions['.ts'] = (m,file)=>m._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,file);
const { curricula, curriculumTotals } = require('../src/data/curriculum.ts');
const { gradeFromQuery, gradeUrl, queryAfterGradeChange } = require('../src/lib/grade-query.ts');
const { accuracyPercent } = require('../src/lib/learning-summary.ts');
assert.deepEqual(curricula.map(g=>[g.chapters.length,g.lessonCount,g.questionCount]),[[10,50,150],[9,30,90],[8,52,573]]);
assert.deepEqual(curriculumTotals,{grades:3,chapters:27,lessons:132,questions:813});
const routes = new Set();
for (const grade of curricula) {
  assert.equal(grade.chapters.reduce((sum,c)=>sum+c.questionCount,0),grade.questionCount,'Every question belongs to exactly one displayed chapter');
  for(const chapter of grade.chapters) {
    assert.ok(fs.existsSync(path.join(__dirname,'../src/app',chapter.href,'page.tsx')));
    for(const lesson of chapter.lessons) {
      assert.ok(!routes.has(lesson.href));routes.add(lesson.href);
      assert.ok(fs.existsSync(path.join(__dirname,'../src/app',lesson.href,'page.tsx')),lesson.href);
      assert.ok(lesson.title.trim());
    }
  }
}
assert.equal(routes.size,132);
for(const [grade,id] of [['高一','grade1'],['高二','grade2'],['高三','grade3']]) {
  const url=gradeUrl('/report/',grade);assert.equal(gradeFromQuery(url.slice(url.indexOf('?'))),grade);assert.ok(!url.includes('//'));
  const changed=queryAfterGradeChange('?topic=old&question=old-id&keep=yes',grade);
  const params=new URLSearchParams(changed);assert.equal(params.get('grade'),id);assert.equal(params.get('keep'),'yes');assert.ok(!params.has('topic')&&!params.has('question'));
}
assert.equal(gradeFromQuery('?grade=unexpected'),null);
assert.equal(accuracyPercent(9,28),32.1);assert.equal(accuracyPercent(2,6),33.3);assert.equal(accuracyPercent(0,0),0);
console.log(JSON.stringify({curriculum:curriculumTotals,uniqueLessonRoutes:routes.size,gradeNavigation:'passed',accuracyPrecision:'passed'}));
