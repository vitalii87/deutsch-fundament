// Відображення готових аркушів. Усі дані доступні локально.
function currentSheet(){return SHEET_LIBRARY.sheets.find(s=>s.id===state.sheetId);}
function levelRank(level){return SHEET_LIBRARY.levels.indexOf(level);}
function availableSheets(){return SHEET_LIBRARY.sheets.filter(s=>state.levelOnly?s.level===state.level:levelRank(s.level)<=levelRank(state.level));}
function tagged(text){
  text=I18N.t(text);
  let out='',end=0;
  for(const m of String(text).matchAll(/\{([^|{}]+)\|(Nom|Akk|Dat|Gen)(?:\|([mfnp]))?\}/g)){
    out+=esc(text.slice(end,m.index));const kind=GRAMMAR.cases[m[2]],gender=m[3]||'';
    out+=`<span class="grammar-phrase ${gender}" data-case="${kind}" title="${kind}">${esc(m[1])}<small class="case-badge" aria-label="${kind}">${m[2]}</small></span>`;end=m.index+m[0].length;
  }
  return out+esc(String(text).slice(end));
}
function renderLibrary(){
  const available=availableSheets();
  const visible=available.filter(s=>(state.filter==='Усе'||s.topic===state.filter)&&matches(s.title,s.description,s.topic,s.level,s.rule,s.more||'',s.parts.map(p=>[p.title,p.rows,p.tip])));
  const groups=SHEET_LIBRARY.levels.filter(l=>visible.some(s=>s.level===l));
  const cards=groups.map(level=>`<section class="shelf-group"><div class="shelf-group-head"><h2>${level}</h2><span>${{A1:'Перші опори',A2:'Впевненіша база',B1:'Розширення знайомих тем',B2:'Складніші зв’язки',C1:'Точність і стиль'}[level]}</span></div><div class="sheet-cards">${visible.filter(s=>s.level===level).map(s=>`<a class="sheet-card" href="#sheet/${s.id}"><div class="card-meta"><span class="level-badge">${s.level}</span><span>1 A4 / 2 A5</span></div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><div class="card-bottom"><span>${esc(s.topic)}</span><span>Відкрити ↗</span></div></a>`).join('')}</div></section>`).join('');
  return `<div class="shelf-intro"><div><strong>Обери одну тему на сьогодні.</strong><p>Правило, таблиця й підказка на A4. Пояснення можна розгорнути окремо на екрані.</p></div><span>${visible.length} / ${available.length} аркушів</span></div>${cards||empty()}<details class="reference-details no-print"><summary>З чим звірено бібліотеку?</summary><p>Охоплення тем порівняно з відкритими змістами навчальних граматик. Приклади й пояснення українською укладено для Fundament; сторінки підручників не копіюються.</p><ul>${(SHEET_LIBRARY.references||[]).map(r=>`<li><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a></li>`).join('')}</ul></details><p class="library-note">Бібліотека нагадувалок A1–C1. Рівні — орієнтири; теми можуть вивчатися на різних етапах. Це не повний курс і не офіційний перелік вимог до іспиту.</p><p class="library-print-message">Спочатку відкрий окремий аркуш у бібліотеці, потім натисни «Друк / PDF».</p>`;
}
function renderSheetPart(part,index){
  // Стовпчики родів забарвлюємо лише в явно позначених таблицях.
  const genderColumns=part.head.map(h=>h.includes('чол.')||h==='Чоловічий'?'m':h.includes('жін.')||h==='Жіночий'?'f':h.includes('сер.')||h==='Середній'?'n':h.includes('мн.')?'p':'');
  const rows=part.rows.map(row=>row.map((cell,i)=>genderColumns[i]?`<span class="${genderColumns[i]}">${tagged(cell)}</span>`:tagged(cell)));
  return `<section class="ready-part"><div class="ready-part-title"><span>${String(index+1).padStart(2,'0')}</span><h3>${esc(part.title)}</h3></div>${table(part.head.map(esc),rows)}${part.examples?`<div class="ready-examples optional-examples">${part.examples.map(([de,uk])=>`<p>${tagged(de)}${trans(uk)}</p>`).join('')}</div>`:''}<p class="ready-tip"><strong>Запам’ятай.</strong> ${tagged(part.tip)}</p></section>`;
}
function renderReadySheet(){
  const s=currentSheet();if(!s)return empty();
  const packs=state.paper==='A5'?s.parts.map((p,i)=>[{part:p,index:i}]):[s.parts.map((p,i)=>({part:p,index:i}))];
  const prerequisite=SHEET_LIBRARY.sheets.find(p=>p.id===s.requires);
  const related=SHEET_LIBRARY.sheets.filter(p=>p.topic===s.topic&&p.id!==s.id);
  return `<div class="sheet-actions no-print"><a href="#library">← До бібліотеки</a><span>${s.level} · ${state.paper==='A5'?'2 сторінки A5':'1 сторінка A4'}</span><button class="button" id="paper-preview" aria-pressed="${state.paperPreview}">▤ Перегляд сторінок</button></div>${prerequisite?`<p class="prerequisite no-print">Опора для цієї теми: <a href="#sheet/${prerequisite.id}">${esc(prerequisite.title)} · ${prerequisite.level}</a></p>`:''}<div class="ready-document">${packs.map((pack,i)=>`<article class="ready-page" data-sheet-id="${s.id}"><header class="ready-header"><div><span>fundament · ${s.level}</span><span>${esc(s.topic)}</span></div><h2>${esc(s.title)}</h2><p>${esc(s.rule)}</p></header>${pack.map(({part,index})=>renderSheetPart(part,index)).join('')}<footer class="ready-footer"><span>${s.level} · ${state.paper} · ${i+1}/${packs.length}</span><span>${s.id}</span></footer>${s.source?`<p class="sheet-source">Довідка: <a href="${s.source}" target="_blank" rel="noopener noreferrer">${esc(s.sourceLabel||(s.source.includes('duden')?'Duden':'IDS grammis'))}</a></p>`:''}</article>`).join('')}</div>${ruleDetails(s)}${related.length?`<div class="related-sheets no-print"><h3>Поруч із цією темою</h3>${related.map(p=>`<a href="#sheet/${p.id}"><span class="level-badge">${p.level}</span> ${esc(p.title)} ↗</a>`).join('')}</div>`:''}`;
}
function ruleDetails(s){return s.more?`<details class="rule-details no-print"><summary>Детальніше про правило</summary><p>${tagged(s.more)}</p><p class="details-print-note">На друк іде коротка нагадувалка вище; розгорнуте пояснення залишається на екрані.</p></details>`:'';}
function renderLevelPanel(){
  $('#level').value=state.level;$('#levelOnly').checked=state.levelOnly;
  $('#level-note').textContent=state.levelOnly?`Лише ${state.module==='dictionary'?'слова':'аркуші'} ${state.level}`:`Усі опори від A1 до ${state.level}`;
  document.body.classList.toggle('library-view',state.module==='library');
  document.body.classList.toggle('ready-view',state.module==='ready');
  document.body.classList.toggle('paper-preview',state.module==='ready'&&state.paperPreview);
  $('#level-panel').hidden=!['library','ready','dictionary'].includes(state.module);
  $('.level-label').textContent=state.level;
  $('.sidebar-caption').textContent='ТВОЯ БІБЛІОТЕКА · A1–C1';
  ['#print','#print-top'].forEach(id=>{$(id).disabled=state.module==='library';$(id).title=state.module==='library'?'Спочатку відкрий аркуш':'';});
  $('#genitive').closest('label').hidden=['library','ready','dictionary'].includes(state.module);
  $('#print-description').textContent=state.module==='dictionary'?`Друкується лише поточний аркуш словника: до ${state.paper==='A5'?6:12} слів. Перемикай аркуші або обери власні слова. У вікні друку вимкни колонтитули.`:state.module==='ready'?`Друкується тільки відкритий аркуш: ${state.paper==='A5'?'2 сторінки A5':'1 сторінка A4'}. Вимкни колонтитули браузера; для PDF обери «Зберегти як PDF».`:'Друкується відкритий розділ з поточними фільтрами. У вікні друку можна вибрати «Зберегти як PDF».';
}
