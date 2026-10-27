import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const core=readFileSync(new URL('../src/v10Core.js',import.meta.url),'utf8');
const cases=[
 ['Light-on-dark logo used in login and sidebar',()=>{assert.match(app,/className="brand-login-large"/);assert.match(app,/<div className="side-brand"><img src={logoDark}/);} ],
 ['Role navigation has labels, icons and an active-state marker',()=>{assert.match(app,/navIcons=\{/);assert.match(app,/aria-current=\{page===route\?'page'/);} ],
 ['Mobile navigation can be dismissed',()=>assert.match(app,/className="mobile-backdrop" type="button" aria-label="Close navigation"/)],
 ['Supplier pages are scoped to the selected menu route',()=>{for(const key of ['dashboard','products','requests','suppliers','messages','wallet','profile'])assert.ok(app.includes(`subpage==='${key}'`),key);}],
 ['Management statements use individual readable tabs',()=>{assert.match(app,/role="tablist"/);assert.match(app,/tab==='income'/);assert.match(app,/tab==='balance'/);assert.match(app,/tab==='cash'/);} ],
 ['BOT KPIs no longer duplicate gender measures',()=>{assert.match(app,/Business ownership by gender/);assert.match(app,/Business ownership by age/);} ],
 ['Demo sample loader and selective removal still exist',()=>{assert.match(app,/injectOctoberSamples/);assert.match(app,/removeOctoberSamples/);} ],
 ['Officer initial route is an accessible page',()=>assert.match(app,/role==='Officer'\?'mybiz'/)],
 ['Tanzania-local business date handling replaces raw UTC date display',()=>{assert.match(core,/timeZone:'Africa\/Dar_es_Salaam'/);assert.doesNotMatch(core,/today=\(\)=>new Date\(\)\.toISOString\(\)/);} ],
 ['Responsive widths and accessibility rules exist',()=>{for(const point of ['1350px','960px','680px','380px','500px'])assert.ok(css.includes(point),point);assert.ok(css.includes(':focus-visible'));assert.ok(css.includes('prefers-reduced-motion'));}],
 ['No stale V7 qualification footnote',()=>assert.doesNotMatch(app,/Only TFL-reviewed V7 journals/)]
];
for(const [name,check] of cases){check();console.log('PASS V11 UI:',name);}
console.log(`${cases.length} V11 UI source checks passed`);
