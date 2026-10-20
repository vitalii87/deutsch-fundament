/* UI language is independent of learning settings and German grammatical examples. */
window.I18N = (() => {
  const supported = ['uk','en','de'];
  let language = 'uk';
  let requested, saved;
  try{requested=new URL(location.href).searchParams.get('lang');}catch{}
  try{saved=localStorage.getItem('fundament-language');}catch{}
  language=supported.includes(requested)?requested:supported.includes(saved)?saved:'uk';
  if(supported.includes(requested))try{localStorage.setItem('fundament-language',language);}catch{}
  const entries = window.FUNDAMENT_LOCALES;
  const escapeRE = s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const pattern = new RegExp('(?<![\\p{L}])(?:'+Object.keys(entries).sort((a,b)=>b.length-a.length).map(escapeRE).join('|')+')(?![\\p{L}])','gu');
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  function text(value) {
    const source = String(value);
    if(language==='uk')return source;
    const index=language==='en'?0:1;
    if(entries[source])return entries[source][index];
    return source.replace(pattern,key=>entries[key][index]);
  }
  function apply(root=document.body) {
    document.documentElement.lang=language;
    const selector=document.querySelector('#language');
    if(selector)selector.value=language;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())) {
      if(node.parentElement?.closest('script,style,[data-i18n-skip]'))continue;
      const previous=originalText.get(node);
      const source=previous&&node.textContent===previous.output?previous.source:node.textContent;
      const trimmed=source.trim();
      const output=trimmed?source.replace(trimmed,text(trimmed)):source;
      if(node.textContent!==output)node.textContent=output;
      originalText.set(node,{source,output});
    }
    for(const element of root.querySelectorAll('[aria-label],[placeholder],[title]')) {
      if(element.closest('[data-i18n-skip]'))continue;
      const previous=originalAttributes.get(element)||{};
      for(const name of ['aria-label','placeholder','title']) {
        if(!element.hasAttribute(name))continue;
        const current=element.getAttribute(name), old=previous[name];
        const source=old&&current===old.output?old.source:current;
        const output=text(source);
        if(current!==output)element.setAttribute(name,output);
        previous[name]={source,output};
      }
      originalAttributes.set(element,previous);
    }
  }
  function setLanguage(next) {
    if(!supported.includes(next))return;
    language=next;
    try{localStorage.setItem('fundament-language',language);}catch{}
    try{const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);}catch{}
  }
  return {get lang(){return language;},t:text,apply,setLanguage};
})();
