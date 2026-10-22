/* eslint-disable @typescript-eslint/no-require-imports -- Pure TypeScript regression harness; no network, real auth or cloud writes. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(id,...args){return resolve.call(this,id.startsWith('@/')?path.resolve(__dirname,'../src',id.slice(2)):id,...args)};
require.extensions['.ts']=(m,file)=>m._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,file);
const {questions}=require('../src/data/questions.ts');const {curricula}=require('../src/data/curriculum.ts');
const {learningDay,scheduledReviews,relatedPractice,dailyLearning,practiceQueue,practiceHref,questionGrade}=require('../src/lib/daily-learning.ts');
const {reviewVariantGroups}=require('../src/data/review-variants.ts');const {courseForTopic}=require('../src/lib/review-plan.ts');
const {safeReturnPath,loginUrl}=require('../src/lib/login-return.ts');const {observeAccount}=require('../src/lib/account-observer.ts');
const {chapterAssessments,newAssessment,hasAssessmentAnswer,validAssessmentDraft,assessmentResult}=require('../src/lib/assessment.ts');const {answerLabel}=require('../src/lib/answer-checking.ts');
const q=questions.find(q=>q.id==='g3-functions-domain-range-choice-01');
function attempt(id,created_at,is_correct=true){const question=questions.find(q=>q.id===id);return {question_id:id,topic:question.topic,created_at,is_correct,selected_answer:question.kind==='written'?'self:{"work":"","checks":[2,2,2],"mode":"paper"}':'A'}}
(async()=>{
 assert.equal(learningDay('2026-10-21T15:59:59Z')+1,learningDay('2026-10-21T16:00:00Z'));
 const wrong=attempt(q.id,'2026-10-18T01:00:00Z',false),right=attempt(q.id,'2026-10-19T01:00:00Z');
 const repeated=[wrong,right,...Array.from({length:12},(_,i)=>attempt(q.id,`2026-10-19T02:${String(i).padStart(2,'0')}:00Z`))];
 let schedule=scheduledReviews(repeated,[],new Date('2026-10-20T01:00:00Z'))[0];assert.equal(schedule.successfulDays,1);assert.equal(schedule.interval,1);assert.equal(schedule.dueDay,learningDay('2026-10-20T01:00:00Z'));
 schedule=scheduledReviews([...repeated,attempt(q.id,'2026-10-20T01:00:00Z')],[],new Date('2026-10-20T02:00:00Z'))[0];assert.equal(schedule.interval,3);
 schedule=scheduledReviews([...repeated,attempt(q.id,'2026-10-20T01:00:00Z'),attempt(q.id,'2026-10-23T01:00:00Z')],[],new Date('2026-10-23T02:00:00Z'))[0];assert.equal(schedule.interval,7);
 schedule=scheduledReviews([...repeated,attempt(q.id,'2026-10-21T01:00:00Z',false)],[],new Date('2026-10-21T02:00:00Z'))[0];assert.equal(schedule.interval,0);assert.equal(schedule.successfulDays,0);
 assert.equal(scheduledReviews([wrong,right],[{question_id:q.id,status:'已掌握',updated_at:'2026-10-20T01:00:00Z'}],new Date('2026-10-21T01:00:00Z'))[0].dueDay,learningDay('2026-10-20T01:00:00Z')+14);
 assert.equal(scheduledReviews([attempt(q.id,'2099-01-01T00:00:00Z',false)],[],new Date('2026-10-21')).length,0);
 assert.equal(scheduledReviews([right],[],new Date('2026-10-21')).length,0,'Never-wrong questions are not invented as mistakes');
 for(const group of reviewVariantGroups){assert.ok(group.ids.length>=2);const rows=group.ids.map(id=>questions.find(q=>q.id===id));assert.ok(rows.every(Boolean),group.skill);assert.equal(new Set(rows.map(questionGrade)).size,1,group.skill)}
 assert.equal(relatedPractice(q,[wrong,right],right.created_at).label,'同知识点变式');
 const other=questions.find(q=>q.id==='sets-concept-01');assert.equal(relatedPractice(other,[],right.created_at).label,'同专题巩固');
 for(const grade of curricula){const daily=dailyLearning([],[],grade.id,new Date('2026-10-22T01:00:00Z'));assert.ok(daily.tasks.length>0&&daily.tasks.length<=5);assert.equal(new Set(daily.tasks.map(t=>t.question.id)).size,daily.tasks.length);assert.ok(daily.tasks.every(t=>questionGrade(t.question)===grade.id));assert.ok(daily.tasks.filter(t=>t.question.kind==='written').length<=1)}
 const daily=dailyLearning([wrong,right],[],'grade3',new Date('2026-10-20T01:00:00Z'));assert.equal(daily.tasks[0].question.id,q.id);assert.equal(daily.tasks[0].label,'原题复练');
 const written=questions.find(q=>q.id==='g3-review-sets-logic-written-01');
 const withSelf=dailyLearning([...Array.from({length:4},()=>attempt(written.id,'2026-10-22T01:00:00Z',false))],[],'grade3',new Date('2026-10-22T02:00:00Z'));assert.equal(withSelf.completed,1);assert.equal(withSelf.weak,null);
 const queue=practiceQueue([q.id,q.id,other.id,'unknown'].join(','));assert.equal(queue.length,1);assert.equal(queue[0].id,q.id);assert.equal(new URLSearchParams(practiceHref(q,[q.id]).split('?')[1]).get('question'),q.id);
 for(const value of ['https://evil.example','//evil.example','/\\evil.example','/practice/%2f%2fevil.example','/login/?returnTo=/login/','/reset-password/','javascript:alert(1)','/practice/\n//evil.example'])assert.equal(safeReturnPath(value),'/',value);
 const returnTo='/practice/?topic='+encodeURIComponent(q.topic)+'&question='+q.id+'#practice-question';assert.equal(safeReturnPath(returnTo),returnTo);assert.equal(new URLSearchParams(loginUrl(returnTo).split('?')[1]).get('returnTo'),returnTo);
 let callback,finish,unsubscribed=false;const received=[];const mock={auth:{onAuthStateChange(fn){callback=fn;return{data:{subscription:{unsubscribe(){unsubscribed=true}}}}},getUser(){return new Promise(resolve=>finish=resolve)}}};
 const stop=observeAccount(mock,(user,failed)=>received.push([user?.id??null,failed]));callback('SIGNED_IN',{user:{id:'B'}});finish({data:{user:{id:'A'}},error:null});await new Promise(resolve=>setImmediate(resolve));assert.deepEqual(received,[['B',false]],'A late initial account must not replace B');callback('SIGNED_OUT',null);assert.deepEqual(received.at(-1),[null,false]);stop();callback('SIGNED_IN',{user:{id:'C'}});assert.equal(received.length,2);assert.ok(unsubscribed);
 const paper=chapterAssessments[0],draft=newAssessment(paper,'10000000-0000-4000-8000-000000000001',new Date('2026-10-22T01:00:00Z'));const w=paper.questions.find(q=>q.kind==='written');draft.paperAnswers={[w.id]:true};draft.flagged=[w.id];assert.ok(validAssessmentDraft(draft,paper));assert.ok(hasAssessmentAnswer(draft,w));assert.ok(!hasAssessmentAnswer(draft,paper.questions[0]));assert.ok(!validAssessmentDraft({...draft,paperAnswers:{[paper.questions[0].id]:true}},paper));assert.ok(!validAssessmentDraft({...draft,flagged:['unknown']},paper));
 draft.scores=Object.fromEntries(paper.questions.filter(q=>q.kind==='written').map(q=>[q.id,[0,0,0]]));draft.scores[w.id]=[3,3,2];assert.equal(assessmentResult(paper,draft).selfScore,8);assert.equal(assessmentResult(paper,draft).objective,0);
 assert.ok(answerLabel('self:{"mode":"paper","work":"","checks":[2,1,0]}').includes('纸上过程未上传'));assert.ok(answerLabel('self:{"work":"旧草稿","checks":[2,1,0]}').includes('旧草稿'));
 const missing=[];let mapped=0;for(const grade of curricula)for(const chapter of grade.chapters)for(const [i,lesson]of chapter.lessons.entries()){const topic=chapter.topics[i],course=courseForTopic(topic);assert.equal(course.href,lesson.href);mapped++;const file=path.join(__dirname,'../src/app',lesson.href,'page.tsx');const source=fs.readFileSync(file,'utf8');const confirmedComplexTitles={"复数的加减运算":"复数的加法与减法","复数的乘除运算":"复数的乘法与除法","复数综合应用":"复数的综合应用"};if(!source.includes(topic)&&!source.includes(encodeURIComponent(topic))&&!(confirmedComplexTitles[topic]===lesson.title&&source.includes(lesson.title)))missing.push({topic,href:lesson.href})}
 assert.deepEqual(missing,[],'Course-topic links must agree with actual lesson source, not guessed titles');assert.equal(mapped,132);
 console.log(JSON.stringify({questions:questions.length,courseMappings:mapped,checkedVariantGroups:reviewVariantGroups.length,beijingBoundaries:'passed',spacedIntervalsAndReset:'passed',objectiveSelfSeparation:'passed',safeLoginReturn:'passed',authRaceAndSignout:'passed',paperAssessmentCompatibility:'passed',actualCloudWrites:false}));
})().catch(error=>{console.error(error);process.exitCode=1});
