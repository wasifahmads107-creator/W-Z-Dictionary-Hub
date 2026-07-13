/* ============================================================
   W-Z DICTIONARY HUB — offline demo data + app logic
   ============================================================ */

/* ---------------- OFFLINE DICTIONARY DATA ---------------- */
const DICTIONARY = {
  "knowledge": {
    word:"Knowledge", ipa:"/ˈnɒlɪdʒ/", pos:"Noun",
    definition:"Facts, information, and skills acquired by a person through experience or education.",
    ur:"علم, معلومات, آگاہی",
    examples:[
      {en:"Education is the key to knowledge.", ur:"تعلیم علم کی کنجی ہے۔"},
      {en:"He has a vast knowledge of history.", ur:"اسے تاریخ کا وسیع علم ہے۔"}
    ],
    synonyms:["Awareness","Understanding","Wisdom","Information","Learning"]
  },
  "education": {
    word:"Education", ipa:"/ˌɛdʒʊˈkeɪʃn/", pos:"Noun",
    definition:"The process of receiving or giving systematic instruction, especially at a school or university.",
    ur:"تعلیم, تربیت",
    examples:[
      {en:"Education is the key to success.", ur:"تعلیم کامیابی کی کنجی ہے۔"},
      {en:"She believes in the power of education.", ur:"وہ تعلیم کی طاقت پر یقین رکھتی ہے۔"}
    ],
    synonyms:["Schooling","Teaching","Learning","Instruction","Tuition"]
  },
  "love": {
    word:"Love", ipa:"/lʌv/", pos:"Noun / Verb",
    definition:"A deep feeling of affection, care, or strong attachment towards someone or something.",
    ur:"محبت, پیار",
    examples:[
      {en:"I love my country.", ur:"میں اپنے ملک سے پیار کرتا ہوں۔"},
      {en:"A mother's love is unconditional.", ur:"ماں کی محبت غیر مشروط ہوتی ہے۔"}
    ],
    synonyms:["Affection","Adoration","Fondness","Devotion"]
  },
  "time": {
    word:"Time", ipa:"/taɪm/", pos:"Noun",
    definition:"The continuous, indefinite progress of existence, measured in seconds, minutes, hours, days, etc.",
    ur:"وقت",
    examples:[
      {en:"Time is money.", ur:"وقت پیسہ ہے۔"},
      {en:"Time heals all wounds.", ur:"وقت ہر زخم کو بھر دیتا ہے۔"}
    ],
    synonyms:["Duration","Period","Moment","Era"]
  },
  "water": {
    word:"Water", ipa:"/ˈwɔːtər/", pos:"Noun",
    definition:"A clear liquid that has no colour, smell, or taste and is essential for all forms of life.",
    ur:"پانی",
    examples:[
      {en:"Drink plenty of water every day.", ur:"روزانہ کافی مقدار میں پانی پیئیں۔"},
      {en:"Water covers most of the earth's surface.", ur:"پانی زمین کی زیادہ تر سطح کو ڈھانپتا ہے۔"}
    ],
    synonyms:["Aqua","H2O","Liquid"]
  },
  "book": {
    word:"Book", ipa:"/bʊk/", pos:"Noun",
    definition:"A written or printed work consisting of pages bound together, usually with a protective cover.",
    ur:"کتاب",
    examples:[
      {en:"She is reading a good book.", ur:"وہ ایک اچھی کتاب پڑھ رہی ہے۔"},
      {en:"Books are a source of knowledge.", ur:"کتابیں علم کا ذریعہ ہیں۔"}
    ],
    synonyms:["Volume","Publication","Text","Novel"]
  },
  "friend": {
    word:"Friend", ipa:"/frɛnd/", pos:"Noun",
    definition:"A person whom one knows well and regards with trust, affection, and loyalty.",
    ur:"دوست, یار",
    examples:[
      {en:"He is my best friend.", ur:"وہ میرا بہترین دوست ہے۔"},
      {en:"A true friend stands by you.", ur:"ایک سچا دوست ساتھ نبھاتا ہے۔"}
    ],
    synonyms:["Companion","Buddy","Pal","Ally"]
  }
};

/* ---------------- OFFLINE PHRASE TRANSLATION BANK ---------------- */
const PHRASES_EN_UR = {
  "good morning":"صبح بخیر",
  "how are you":"آپ کیسے ہیں؟",
  "how are you?":"آپ کیسے ہیں؟",
  "thank you":"شکریہ",
  "i love my country":"میں اپنے ملک سے پیار کرتا ہوں۔",
  "good night":"شب بخیر",
  "what is your name":"آپ کا نام کیا ہے؟",
  "i am fine":"میں ٹھیک ہوں",
  "welcome":"خوش آمدید",
  "see you later":"پھر ملیں گے",
  "good afternoon":"دوپہر بخیر",
  "how much is this":"یہ کتنے کا ہے؟"
};

const QA_BANK = {
  "what is science":"The study of nature is called science.",
  "what is gravity":"Gravity is the force that pulls objects towards each other, and pulls everything on Earth towards the ground.",
  "what is photosynthesis":"Photosynthesis is the process by which green plants use sunlight to make their own food from water and carbon dioxide.",
  "what is water":"Water is a clear liquid made of hydrogen and oxygen that is essential for all living things.",
  "what is gravity force":"Gravity is the natural force that attracts any two objects with mass towards each other.",
  "what is the capital of pakistan":"Islamabad is the capital of Pakistan.",
  "what is the capital of france":"Paris is the capital of France.",
  "who is the father of pakistan":"Muhammad Ali Jinnah is known as the father of the nation of Pakistan.",
  "what is love":"Love is a deep feeling of affection, care, or strong attachment towards someone or something.",
  "what is time":"Time is the continuous progress of existence, measured in seconds, minutes, hours, and days.",
  "what is knowledge":"Knowledge is facts, information, and skills acquired by a person through experience or education.",
  "what is education":"Education is the process of receiving or giving systematic instruction, especially at a school or university.",
  "what is mathematics":"Mathematics is the science and study of numbers, quantities, shapes, and their relationships.",
  "what is history":"History is the study of past events, particularly human affairs.",
  "who is albert einstein":"Albert Einstein was a physicist famous for developing the theory of relativity.",
  "what is the sun":"The Sun is the star at the centre of our solar system that gives Earth light and heat."
};

/* ---------------- GRAMMAR CONTENT ---------------- */
const GRAMMAR_EN = {
  "Tenses":"English has 12 tenses built from Present, Past and Future, each in Simple, Continuous, Perfect and Perfect Continuous forms. Example: 'She writes' (Present Simple) vs 'She has been writing' (Present Perfect Continuous).",
  "Parts of Speech":"There are 8 parts of speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction and Interjection. Every English word belongs to at least one of these.",
  "Articles":"'A' and 'an' are indefinite articles used for non-specific nouns, while 'the' is the definite article used for specific nouns. Example: 'A book' vs 'The book on the table'.",
  "Prepositions":"Prepositions show the relationship between a noun/pronoun and other words in a sentence, e.g. in, on, at, under, between. Example: 'The cat is under the table.'",
  "Conjunctions":"Conjunctions join words, phrases, or clauses. Common ones are and, but, or, because, although. Example: 'I was tired, but I kept working.'",
  "Active & Passive":"In the active voice the subject performs the action ('He wrote a letter'); in the passive voice the subject receives the action ('A letter was written by him').",
  "Direct & Indirect":"Direct speech quotes the exact words spoken ('She said, \"I am happy.\"'), while indirect speech reports it ('She said that she was happy').",
  "Voice":"'Voice' in grammar refers to the form of a verb that shows whether the subject performs (active) or receives (passive) the action.",
  "Narration":"Narration is the reporting of someone else's words, changing tense, pronouns and time expressions when moving from direct to indirect speech."
};

const GRAMMAR_UR = {
  "اسم":"اسم وہ لفظ ہے جو کسی شخص، جگہ یا چیز کا نام ہو، جیسے کراچی، کتاب، احمد۔",
  "صفت":"صفت وہ لفظ ہے جو اسم کی خوبی یا کیفیت ظاہر کرے، جیسے اچھا، بڑا، خوبصورت۔",
  "فعل":"فعل وہ لفظ ہے جس سے کسی کام کا کرنا یا ہونا معلوم ہو، جیسے کھانا، جانا، پڑھنا۔",
  "ضمائر":"ضمیر وہ لفظ ہے جو اسم کی جگہ استعمال ہو، جیسے میں، تم، وہ، ہم۔",
  "حروف":"حروف وہ الفاظ ہیں جو دو اسموں یا جملوں کو آپس میں جوڑتے ہیں، جیسے اور، یا، لیکن۔",
  "اسم اشارہ":"اسم اشارہ وہ اسم ہے جو کسی چیز کی طرف اشارہ کرے، جیسے یہ، وہ۔",
  "تراکیب":"تراکیب دو یا زیادہ الفاظ کے مجموعے سے بنتی ہیں جو مل کر ایک نیا معنی دیتے ہیں، جیسے 'میز پر'۔",
  "املا و قواعد":"املا حروف کی درست ترتیب کو کہتے ہیں جبکہ قواعد زبان کے قوانین اور اصولوں کا مجموعہ ہیں۔"
};

/* ---------------- APP STATE (in-memory only) ---------------- */
const state = {
  history: [],     // {type, title, sub, ts}
  favourites: [],   // {id, type, title, sub}
  darkMode:false
};

/* ---------------- NAVIGATION ---------------- */
function showScreen(name){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const el = document.getElementById("screen-"+name);
  if(el) el.classList.add("active");
  closeOverlay('quick-launch-overlay');
  closeOverlay('topic-overlay');
  if(name==="history") renderHistory();
  if(name==="favourite") renderFavourites();
  if(name==="profile") renderProfile();
  if(name==="grammar-en") renderGrammarPopular();
  if(name==="grammar-ur") renderGrammarPopularUr();
  window.scrollTo(0,0);
}

function toggleMenu(){
  showToast("Menu: Home • History • Favourite • Profile");
}

function openQuickLaunch(){ document.getElementById("quick-launch-overlay").classList.add("open"); }
function closeOverlay(id){ const o=document.getElementById(id); if(o) o.classList.remove("open"); }
function closeOverlayBg(e){ if(e.target.classList.contains("overlay")) e.target.classList.remove("open"); }

/* ---------------- TOAST ---------------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 1800);
}

/* ---------------- SPEECH & CLIPBOARD ---------------- */
function speak(text, lang){
  if(!text) return;
  if(!("speechSynthesis" in window)){ showToast("Voice not supported on this device"); return; }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang || "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
function copyText(id){
  const el = document.getElementById(id);
  const text = (el.value !== undefined) ? el.value : el.innerText;
  navigator.clipboard && navigator.clipboard.writeText(text).then(()=>showToast("Copied to clipboard"));
}
function fakeMic(inputId){
  showToast("🎙 Listening... (offline voice demo)");
}

/* ---------------- DICTIONARY SCREEN ---------------- */
function normalize(s){ return (s||"").trim().toLowerCase(); }

async function lookupWord(){
  const q = normalize(document.getElementById("dict-search").value);
  await renderDictResult(q);
}

function swapDictLang(){
  const a = document.getElementById("dict-lang-from");
  const b = document.getElementById("dict-lang-to");
  const tmp = a.textContent; a.textContent = b.textContent; b.textContent = tmp;
}

async function renderDictResult(query){
  const box = document.getElementById("dict-result");
  if(!query){
    box.innerHTML = `<div class="no-result">Type a word above to look it up.</div>`;
    return;
  }
  const entry = DICTIONARY[query];
  if(entry){
    addHistory("word", entry.word, entry.ur);
    box.innerHTML = `
      <h2>${entry.word} <button class="speaker" onclick="speak('${entry.word}','en-US')">🔊</button></h2>
      <div class="ipa">${entry.ipa}</div>
      <div class="pos">${entry.pos}</div>
      <div class="definition">${entry.definition}</div>
      <div class="ur-line">${entry.ur} <button class="speaker" onclick="speak('${entry.ur}','ur-PK')">🔊</button></div>
      <h4>Examples</h4>
      ${entry.examples.map(ex=>`
        <div class="example-item">• ${ex.en}
          <div class="ex-ur">${ex.ur}</div>
        </div>`).join("")}
      <h4>Synonyms</h4>
      <div class="chips">${entry.synonyms.map(s=>`<button class="chip" onclick="document.getElementById('dict-search').value='${s}';lookupWord()">${s}</button>`).join("")}</div>
    `;
    return;
  }

  // Not in the small offline word list — try a live translation as a
  // best-effort result (needs internet). This keeps the app useful for
  // words beyond the built-in offline set.
  box.innerHTML = `<div class="no-result">Looking up "${escapeHtml(query)}"...</div>`;
  const translated = await translateOnline(query, "en", "ur");
  if(translated){
    addHistory("word", query, translated);
    box.innerHTML = `
      <h2>${escapeHtml(query)} <button class="speaker" onclick="speak('${escapeHtml(query)}','en-US')">🔊</button></h2>
      <div class="ipa">Live translation (not in offline word list)</div>
      <div class="ur-line">${translated} <button class="speaker" onclick="speak('${translated}','ur-PK')">🔊</button></div>
      <div class="no-result" style="padding:12px 0 0;text-align:left">Full definitions, examples and synonyms are only available for the offline word set: knowledge, education, love, time, water, book, friend.</div>
    `;
  } else {
    box.innerHTML = `<div class="no-result">No offline entry found for "<b>${escapeHtml(query)}</b>" and no internet connection to fetch a live translation.<br>Try: knowledge, education, love, time, water, book, friend.</div>`;
  }
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* ---------------- TRANSLATOR SCREEN ---------------- */
const LANGS = ["🇬🇧 English","🇵🇰 Urdu","🇸🇦 Arabic","🇪🇸 Spanish","🇫🇷 French"];
const LANG_CODES = {
  "🇬🇧 English":"en", "🇵🇰 Urdu":"ur", "🇸🇦 Arabic":"ar", "🇪🇸 Spanish":"es", "🇫🇷 French":"fr"
};
function cycleLang(id){
  const el = document.getElementById(id);
  let idx = LANGS.indexOf(el.textContent);
  idx = (idx+1) % LANGS.length;
  el.textContent = LANGS[idx];
}
function swapTranslator(){
  const from = document.getElementById("tr-lang-from");
  const to = document.getElementById("tr-lang-to");
  const tmp = from.textContent; from.textContent = to.textContent; to.textContent = tmp;
  const inp = document.getElementById("tr-input");
  const out = document.getElementById("tr-output");
  const tmp2 = inp.value; inp.value = out.innerText; out.innerText = tmp2;
}

/* Live translation using the free MyMemory API — works whenever the device
   is online. Falls back to the small offline phrase bank when there is no
   internet connection (e.g. api call fails/times out). */
async function translateOnline(text, fromCode, toCode){
  try{
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromCode}|${toCode}`;
    const res = await fetch(url);
    const data = await res.json();
    if(data && data.responseData && data.responseData.translatedText){
      return data.responseData.translatedText;
    }
  }catch(e){
    return null; // no internet or request blocked
  }
  return null;
}

async function doTranslate(){
  const inputEl = document.getElementById("tr-input");
  const outputEl = document.getElementById("tr-output");
  const input = inputEl.value.trim();
  if(!input){ showToast("Type something first"); return; }
  const lines = input.split("\n").map(l=>l.trim()).filter(Boolean);
  const fromCode = LANG_CODES[document.getElementById("tr-lang-from").textContent] || "en";
  const toCode = LANG_CODES[document.getElementById("tr-lang-to").textContent] || "ur";

  outputEl.innerText = "Translating...";
  const outputs = [];
  for(const line of lines){
    const key = normalize(line).replace(/[.?!]+$/,"");
    let result = (fromCode==="en" && toCode==="ur") ? (PHRASES_EN_UR[key] || PHRASES_EN_UR[normalize(line)]) : null;
    if(!result) result = await translateOnline(line, fromCode, toCode);
    if(!result) result = wordByWordTranslate(line);
    outputs.push(result);
  }
  outputEl.innerText = outputs.join("\n");
  addHistory("translation", input.split("\n")[0], outputs[0]);
  addRecent("tr-recent-list", input.split("\n")[0], outputs[0]);
}

function wordByWordTranslate(line){
  const words = normalize(line).replace(/[.?!]/g,"").split(/\s+/);
  const known = words.map(w=> DICTIONARY[w] ? DICTIONARY[w].ur.split(",")[0].trim() : null);
  if(known.every(w=>w===null)){
    return "⚠ No internet connection — offline dictionary has no entry for this.";
  }
  return known.map((w,i)=> w || words[i]).join(" ") + " (offline partial match)";
}

/* ---------------- Q&A HELPER SCREEN ---------------- */
function extractTopic(question){
  let q = normalize(question).replace(/[?]+$/,"").trim();
  q = q.replace(/^(what is|what are|who is|who was|define|meaning of|explain|tell me about)\s+/i,"");
  q = q.replace(/^(the|a|an)\s+/i,"");
  return q.trim();
}

/* Live general-knowledge lookup using Wikipedia's free public REST API
   (no API key needed). Used whenever the question isn't in the small
   offline QA_BANK. Needs an internet connection. */
async function fetchWikiAnswer(topic){
  try{
    const title = topic.charAt(0).toUpperCase() + topic.slice(1);
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    if(!res.ok) return null;
    const data = await res.json();
    if(data && data.extract){
      const firstTwo = data.extract.split(/(?<=[.!?])\s+/).slice(0,2).join(" ");
      return firstTwo;
    }
  }catch(e){
    return null;
  }
  return null;
}

async function askQuestion(){
  const inputEl = document.getElementById("qa-input");
  const outputEl = document.getElementById("qa-output");
  const question = inputEl.value.trim();
  if(!question){ showToast("Type a question first"); return; }

  outputEl.innerText = "Thinking...";
  const key = normalize(question).replace(/[?]+$/,"");
  let answer = QA_BANK[key];

  if(!answer){
    const topic = extractTopic(question);
    answer = await fetchWikiAnswer(topic);
  }
  if(!answer){
    answer = "⚠ No offline answer found and no internet connection to look this up. Try rephrasing, e.g. 'What is science?'";
  }

  outputEl.innerText = answer;
  addHistory("question", question, answer);
  addRecent("qa-recent-list", question, answer);
}

/* ---------------- RECENT LISTS (in-memory rendering helpers) ---------------- */
const recentStore = { "tr-recent-list":[], "qa-recent-list":[] };
function addRecent(listId, en, ur){
  recentStore[listId].unshift({en,ur});
  recentStore[listId] = recentStore[listId].slice(0,8);
  renderRecent(listId);
}
function renderRecent(listId){
  const el = document.getElementById(listId);
  if(!el) return;
  el.innerHTML = recentStore[listId].map(r=>`
    <div class="row-item">
      <div class="ri-main"><b>${escapeHtml(r.en)}</b></div>
      <div class="ri-right" dir="rtl">${r.ur}</div>
    </div>`).join("") || `<p class="empty-hint">No recent translations yet.</p>`;
}

/* ---------------- GRAMMAR TOPICS ---------------- */
function openGrammarTopic(lang, topic){
  const title = document.getElementById("topic-title");
  const body = document.getElementById("topic-body");
  title.textContent = topic;
  if(lang==="en"){
    body.innerHTML = `<p>${GRAMMAR_EN[topic] || "Content coming soon."}</p>`;
    addHistory("grammar", topic, "English Grammar");
  } else {
    body.innerHTML = `<p class="ur">${GRAMMAR_UR[topic] || "جلد شامل کیا جائے گا۔"}</p>`;
    addHistory("grammar", topic, "اردو گرامر");
  }
  document.getElementById("topic-overlay").classList.add("open");
}
function renderGrammarPopular(){
  const el = document.getElementById("gren-popular");
  const topics = [
    ["Present Simple Tense","Structure, Use & Examples","#FFEDEA","#FF6B4A","⏰"],
    ["Past Continuous Tense","Structure, Use & Examples","#E6FBF5","#12B886","⏳"],
    ["Articles (A, An, The)","Rules & Examples","#EEECFF","#6C5CE7","Aa"]
  ];
  el.innerHTML = topics.map(t=>`
    <div class="row-item" onclick="openGrammarTopic('en','${t[0].split(' (')[0]}')">
      <span class="icon-badge" style="background:${t[2]};color:${t[3]}">${t[4]}</span>
      <div class="ri-main" style="flex:1"><b>${t[0]}</b><span>${t[1]}</span></div>
      <div class="ri-right">›</div>
    </div>`).join("");
}
function renderGrammarPopularUr(){
  const el = document.getElementById("grur-popular");
  const topics = [
    ["اسم کی اقسام","تعریف اور مثالیں","#E6FBF5","#12B886","📗"],
    ["فعل کی اقسام","تعریف اور مثالیں","#E6FBF5","#0FA898","⚡"],
    ["حروف کی اقسام","تعریف اور مثالیں","#EEECFF","#6C5CE7","🔠"]
  ];
  el.innerHTML = topics.map(t=>`
    <div class="row-item" onclick="openGrammarTopic('ur','${t[0].replace('کی اقسام','')}')">
      <div class="ri-right">‹</div>
      <div class="ri-main" style="flex:1"><b>${t[0]}</b><span>${t[1]}</span></div>
      <span class="icon-badge" style="background:${t[2]};color:${t[3]}">${t[4]}</span>
    </div>`).join("");
}

/* ---------------- HISTORY ---------------- */
function addHistory(type, title, sub){
  state.history.unshift({type, title, sub, ts: Date.now()});
  state.history = state.history.slice(0,50);
  renderHomeRecent();
}
function renderHistory(){
  const el = document.getElementById("history-list");
  const empty = document.getElementById("history-empty");
  if(state.history.length===0){ el.innerHTML=""; empty.style.display="block"; return; }
  empty.style.display="none";
  el.innerHTML = state.history.map((h,i)=>`
    <div class="row-item">
      <div class="ri-main"><b>${escapeHtml(h.title)}</b><span dir="${/[\u0600-\u06FF]/.test(h.sub)?'rtl':'ltr'}">${h.sub||''}</span></div>
      <div class="ri-right">
        <button class="ri-fav" onclick="toggleFav('h${i}','${h.type}','${escapeHtml(h.title).replace(/'/g,"\\'")}','${(h.sub||'').replace(/'/g,"\\'")}')">♡</button>
      </div>
    </div>`).join("");
}
function renderHomeRecent(){
  const el = document.getElementById("home-recent-list");
  if(!el) return;
  const items = state.history.slice(0,3);
  el.innerHTML = items.map(h=>`
    <div class="row-item" onclick="showScreen('history')">
      <div class="ri-main"><b>🕒 &nbsp;${escapeHtml(h.title)}</b><span>${h.sub||''}</span></div>
      <div class="ri-right">›</div>
    </div>`).join("") || `<p class="empty-hint">No searches yet. Try the Dictionary or Translator!</p>`;
}
function clearHistory(){
  state.history = [];
  renderHistory();
  renderHomeRecent();
  showToast("History cleared");
}

/* ---------------- FAVOURITES ---------------- */
function toggleFav(id, type, title, sub){
  const idx = state.favourites.findIndex(f=>f.id===id);
  if(idx>-1){
    state.favourites.splice(idx,1);
    showToast("Removed from Favourite");
  } else {
    state.favourites.unshift({id, type: type||'word', title: title||'Item', sub: sub||''});
    showToast("Added to Favourite ❤");
  }
  renderFavourites();
}
let favFilter = "all";
function filterFav(type, btn){
  favFilter = type;
  document.querySelectorAll("#screen-favourite .tab").forEach(t=>t.classList.remove("active"));
  btn.classList.add("active");
  renderFavourites();
}
function renderFavourites(){
  const el = document.getElementById("fav-list");
  const empty = document.getElementById("fav-empty");
  if(!el) return;
  const items = state.favourites.filter(f=> favFilter==="all" ? true : f.type===favFilter);
  if(items.length===0){ el.innerHTML=""; empty.style.display="block"; return; }
  empty.style.display="none";
  el.innerHTML = items.map(f=>`
    <div class="row-item">
      <div class="ri-main"><b>${escapeHtml(f.title)}</b><span dir="${/[\u0600-\u06FF]/.test(f.sub)?'rtl':'ltr'}">${f.sub}</span></div>
      <div class="ri-right"><button class="ri-fav" onclick="toggleFav('${f.id}')">💔</button></div>
    </div>`).join("");
  document.getElementById("stat-fav") && (document.getElementById("stat-fav").textContent = state.favourites.length);
}
function clearFavourites(){
  state.favourites = [];
  renderFavourites();
  showToast("Favourites cleared");
}

/* ---------------- PROFILE ---------------- */
function renderProfile(){
  document.getElementById("stat-history").textContent = state.history.length;
  document.getElementById("stat-fav").textContent = state.favourites.length;
}
function toggleTheme(){
  document.body.classList.toggle("dark");
  showToast(document.body.classList.contains("dark") ? "Dark mode on" : "Light mode on");
}

/* ---------------- HOME SEARCH ---------------- */
function homeSearch(){
  const q = normalize(document.getElementById("home-search").value);
  if(!q) return;
  showScreen("dictionary");
  document.getElementById("dict-search").value = q;
  lookupWord();
}

/* ---------------- INITIAL RENDER ---------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  renderDictResult("knowledge");

  // demo history so Home > Recent Searches looks alive, like the reference design
  state.history = [
    {type:"word", title:"Conocimiento", sub:"Spanish", ts:Date.now()-3000},
    {type:"word", title:"علم", sub:"Urdu", ts:Date.now()-2000},
    {type:"word", title:"Knowledge", sub:"English", ts:Date.now()-1000}
  ].reverse();
  renderHomeRecent();

  addRecent("tr-recent-list","Thank you","شکریہ");
  addRecent("tr-recent-list","How are you?","آپ کیسے ہیں؟");
  addRecent("tr-recent-list","I love my country","میں اپنے ملک سے پیار کرتا ہوں۔");
  addRecent("qa-recent-list","What is science?","The study of nature is called science.");
  addRecent("qa-recent-list","What is gravity?","Gravity is the force that pulls objects towards each other, and pulls everything on Earth towards the ground.");
  addRecent("qa-recent-list","What is knowledge?","Knowledge is facts, information, and skills acquired by a person through experience or education.");
});
