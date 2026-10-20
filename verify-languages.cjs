/* Run with Node.js. No browser, network or dependencies required. */
const fs=require('node:fs'), path=require('node:path'), vm=require('node:vm'), assert=require('node:assert/strict');
const read=name=>fs.readFileSync(path.join(__dirname,name),'utf8');
const c={URL,location:{href:'https://example.com/?lang=en'},localStorage:{getItem:()=>null,setItem:()=>{}},history:{replaceState:()=>{}}};
c.window=c;
vm.createContext(c);
for(const name of ['data.js','vocabulary.js','grammar.js','sheets.js','more-sheets.js','locales.js','languages.js','library.js'])vm.runInContext(read(name),c);
const app=read('app.js');vm.runInContext(app.slice(0,app.indexOf('const renderers=')),c);
const check=(code)=>vm.runInContext(code,c);
for(const lang of ['en','de']){
  c.I18N.setLanguage(lang);
  for(const [source,values] of Object.entries(c.FUNDAMENT_LOCALES)){
    assert(values.every(v=>typeof v==='string'&&v.trim()),source);
    assert(!/[А-Яа-яІіЇїЄєҐґ]/.test(c.I18N.t(source)),source);
  }
  assert.equal(check("I18N.t(D.words.find(w=>w[0]==='Mutter')[3])"),lang==='en'?'mother':'Mutter');
  assert.equal(c.I18N.t('мати'),lang==='en'?'to have':'haben');
  check("state.level='C1';state.levelOnly=false;state.query='';state.wordKind='Усе';state.filter='Усе'");
  assert.equal(check('visibleWords().length'),240);
  assert(!/[А-Яа-яІіЇїЄєҐґ]/.test(c.I18N.t(check('renderDictionary()').replace(/<[^>]*>/g,' '))));
  check("state.query="+JSON.stringify(lang==='en'?'responsibility':'Verantwortung'));
  assert(check("visibleWords().some(w=>w[0]==='Verantwortung')"));
  for(const sheet of c.SHEET_LIBRARY.sheets){
    check('state.sheetId='+JSON.stringify(sheet.id));
    assert(!/[А-Яа-яІіЇїЄєҐґ]/.test(c.I18N.t(check('renderReadySheet()').replace(/<[^>]*>/g,' '))),sheet.id+' '+lang);
  }
}
// Language changes must be reversible, including static text and accessibility labels.
const element={attrs:{'aria-label':'Закрити пояснення'},closest:()=>null,hasAttribute(k){return k in this.attrs},getAttribute(k){return this.attrs[k]},setAttribute(k,v){this.attrs[k]=v}};
const node={textContent:' Мій рівень ',parentElement:element};
const root={querySelectorAll:()=>[element]};
c.NodeFilter={SHOW_TEXT:4};c.document={body:root,documentElement:{},querySelector:()=>null,createTreeWalker:()=>{let done=false;return{nextNode:()=>done?null:(done=true,node)}}};
for(const [lang,label,title] of [['en',' My level ','Close explanation'],['de',' Mein Niveau ','Erklärung schließen'],['uk',' Мій рівень ','Закрити пояснення']]){
  c.I18N.setLanguage(lang);c.I18N.apply();assert.equal(node.textContent,label);assert.equal(element.attrs['aria-label'],title);assert.equal(c.document.documentElement.lang,lang);
}
// Direct language links still work if localStorage is blocked.
const blocked={URL,location:{href:'https://example.com/?lang=de'},localStorage:{getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}},FUNDAMENT_LOCALES:c.FUNDAMENT_LOCALES};blocked.window=blocked;vm.createContext(blocked);vm.runInContext(read('languages.js'),blocked);assert.equal(blocked.I18N.lang,'de');
console.log('Passed: 3 languages; 37 sheets in English and German; 240 words; translated search; reversible UI and accessibility text; blocked storage.');
