import assert from 'node:assert/strict';
import {emptyDb,balanced,statement,credit,groupKpis} from '../src/v10Core.js';
import {injectOctoberSamples,removeOctoberSamples,sampleCounts,SAMPLE_BATCH} from '../src/v10DemoSeed.js';
const age=d=>{const now=new Date('2026-10-27T00:00:00Z'),birth=new Date(d+'T00:00:00Z');let a=now.getUTCFullYear()-birth.getUTCFullYear();if(now.getUTCMonth()<birth.getUTCMonth()||(now.getUTCMonth()===birth.getUTCMonth()&&now.getUTCDate()<birth.getUTCDate()))a--;return a;};
const db=injectOctoberSamples(emptyDb());
assert.equal(db.businesses.length,10);assert.equal(db.entries.length,100);assert.equal(db.ratings.length,8);
assert.equal(db.businesses.filter(x=>x.gender==='Female').length,5);assert.equal(db.businesses.filter(x=>x.gender==='Male').length,5);
assert.equal(db.businesses.filter(x=>age(x.birthDate)<=35).length,5);assert.equal(db.businesses.filter(x=>age(x.birthDate)>35).length,5);
assert.equal(db.businesses.filter(x=>x.sampleRecordsReviewed).length,8);assert.equal(db.businesses.filter(x=>!x.sampleRecordsReviewed).length,2);
assert.equal(db.businesses.filter(x=>x.unbankedAtEntry).length,5);
const uniqueIds=new Set(db.entries.map(x=>x.id));assert.equal(uniqueIds.size,100);
for(const b of db.businesses){
 const e=db.entries.filter(x=>x.businessId===b.id);
 assert.equal(e.length,10);assert.equal(e.filter(x=>x.direction==='in').length,5);assert.equal(e.filter(x=>x.direction==='out').length,5);
 const dates=new Set(e.map(x=>x.date));assert.equal(dates.size,5);
 for(const d of dates)assert.equal(e.filter(x=>x.date===d).length,2);
 for(const tx of e){assert.ok(tx.date>='2026-10-01'&&tx.date<='2026-10-27');assert.ok(balanced(tx.lines),tx.id);assert.equal(tx.demoBatch,SAMPLE_BATCH);}
 const s=statement(db,b.id,'2026-10-01','2026-10-27');assert.ok(s);assert.ok(s.balanced,'statement balance '+b.id);
 assert.ok(Number.isFinite(credit(db,b.id).score));
 assert.equal(credit(db,b.id).qualified,false,'10 entries should not imply qualification');
}
assert.equal(db.ratings.map(x=>x.score).sort((a,b)=>a-b).join(','),'42,55,68,73,78,84,90,94');
assert.equal(groupKpis(db).registered,10);
assert.throws(()=>injectOctoberSamples(db),/already loaded/);
const extra={...db.entries[0],id:'CUSTOM-TX-ON-DEMO',demoBatch:undefined,sample:false};db.entries.push(extra);
const cleaned=removeOctoberSamples(db);
assert.equal(cleaned.businesses.length,0);assert.equal(cleaned.entries.length,0);assert.equal(cleaned.ratings.length,0);assert.equal(cleaned.closes.length,0);
const preserved=emptyDb();preserved.businesses.push({id:'NORMAL-1',name:'Unrelated records',testPin:'000000'});preserved.entries.push({id:'N-1',businessId:'NORMAL-1',status:'draft'});
const roundtrip=removeOctoberSamples(injectOctoberSamples(preserved));
assert.equal(roundtrip.businesses.length,1);assert.equal(roundtrip.entries.length,1);
console.log('PASS: 10 profiles, 100 balanced transactions, 8 reviews, gender/age split, KPI, duplicate-load block, selective cleanup and non-qualification');
