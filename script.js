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

/* ================================================================
   KNOWLEDGE BASE — structured offline educational content engine.
   Each entry follows a consistent textbook-style template. Fields are
   optional — the renderer only shows sections that exist for a topic.
   This is a starter set spanning multiple subjects; more topics can
   be added here later using the same shape without touching the UI.
   ================================================================ */
const KNOWLEDGE_BASE = {
  "science": {
    title:"Science", subject:"General Science",
    definition:"Science is the systematic study of the structure and behaviour of the natural and physical world through observation and experiment.",
    explanation:"Science works by observing the world, asking questions, forming a hypothesis, testing it through experiments, and drawing conclusions. This process is called the scientific method.",
    types:["Physical Science (Physics, Chemistry)","Life Science (Biology)","Earth Science (Geology, Geography)","Social Science (Economics, Psychology)"],
    examples:["A doctor using science to diagnose disease.","Engineers using science to build bridges.","Farmers using science to improve crop yield."],
    keyPoints:["Science is based on evidence, not opinion.","Scientific knowledge keeps updating as new evidence is found.","The scientific method is: Observation → Hypothesis → Experiment → Conclusion."],
    mcqs:[{q:"Which of these is a branch of science?", options:["Physics","Poetry","Painting","Cooking"], answer:"Physics"}],
    summary:"Science is the organised study of nature using observation and experiment, divided into branches like Physics, Chemistry, and Biology.",
    related:["biology","physics","chemistry"]
  },
  "biology": {
    title:"Biology", subject:"Science",
    definition:"Biology is the branch of science that studies living organisms — their structure, function, growth, and evolution.",
    explanation:"Biology covers everything from tiny cells to entire ecosystems, exploring how living things grow, reproduce, and interact with their environment.",
    types:["Botany (study of plants)","Zoology (study of animals)","Microbiology (study of microorganisms)","Genetics (study of heredity)","Ecology (study of ecosystems)"],
    examples:["Studying how the human heart pumps blood.","Studying how bees pollinate flowers."],
    keyPoints:["The cell is the basic unit of life.","All living things grow, reproduce and respond to stimuli."],
    summary:"Biology is the science of living things, split into fields like Botany, Zoology, and Genetics.",
    related:["cell","photosynthesis","ecosystem"]
  },
  "physics": {
    title:"Physics", subject:"Science",
    definition:"Physics is the branch of science concerned with matter, energy, force, and motion, and how they relate to one another.",
    explanation:"Physics explains natural phenomena using mathematical laws — from why objects fall to how electricity flows through a wire.",
    types:["Mechanics","Thermodynamics","Optics","Electricity & Magnetism","Modern/Quantum Physics"],
    examples:["A ball falling to the ground (gravity).","A torch producing light from a battery (electricity)."],
    keyPoints:["Physics is highly mathematical.","It forms the base for engineering and technology."],
    summary:"Physics studies matter, energy and motion, and explains how the physical universe works.",
    related:["gravity","newtons laws","energy"]
  },
  "chemistry": {
    title:"Chemistry", subject:"Science",
    definition:"Chemistry is the branch of science that studies the composition, properties, and reactions of matter.",
    explanation:"Chemistry looks at what substances are made of (atoms and molecules) and how they combine or change into new substances.",
    types:["Organic Chemistry (carbon compounds)","Inorganic Chemistry (minerals, metals)","Physical Chemistry (energy in reactions)","Biochemistry (chemistry of living things)"],
    examples:["Iron rusting when exposed to moisture.","Baking soda reacting with vinegar to release gas."],
    keyPoints:["Matter is made up of atoms.","A chemical reaction forms new substances with new properties."],
    summary:"Chemistry studies what matter is made of and how substances react and combine.",
    related:["atom","matter"]
  },
  "atom": {
    title:"Atom", subject:"Chemistry",
    definition:"An atom is the smallest unit of matter that retains the chemical properties of an element.",
    explanation:"Every atom has a nucleus (containing protons and neutrons) surrounded by electrons moving around it.",
    keyPoints:["Protons are positively charged.","Electrons are negatively charged.","Neutrons have no charge."],
    summary:"An atom is the basic building block of matter, made up of protons, neutrons, and electrons.",
    related:["matter","chemistry"]
  },
  "matter": {
    title:"Matter", subject:"Science",
    definition:"Matter is anything that has mass and occupies space.",
    types:["Solid","Liquid","Gas","Plasma"],
    examples:["Ice (solid), water (liquid), and steam (gas) are all the same matter in different states."],
    summary:"Matter is anything with mass and volume, existing mainly as solid, liquid or gas.",
    related:["atom","chemistry"]
  },
  "photosynthesis": {
    title:"Photosynthesis", subject:"Biology",
    definition:"Photosynthesis is the process by which green plants use sunlight, water, and carbon dioxide to make their own food (glucose) and release oxygen.",
    explanation:"It occurs mainly in the leaves, inside structures called chloroplasts, which contain a green pigment called chlorophyll that traps sunlight.",
    formula:"6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ (glucose) + 6O₂",
    process:["Plant absorbs sunlight through chlorophyll.","Roots absorb water; leaves take in carbon dioxide.","Light energy converts CO₂ and water into glucose.","Oxygen is released as a by-product."],
    keyPoints:["Only occurs in the presence of sunlight.","Essential for producing the oxygen we breathe."],
    mcqs:[{q:"What gas do plants release during photosynthesis?", options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"], answer:"Oxygen"}],
    summary:"Photosynthesis lets plants convert sunlight, water and CO₂ into food and oxygen.",
    related:["biology","cell"]
  },
  "cell": {
    title:"Cell", subject:"Biology",
    definition:"A cell is the smallest structural and functional unit of life; all living organisms are made of one or more cells.",
    types:["Plant Cell (has a cell wall & chloroplasts)","Animal Cell (no cell wall, no chloroplasts)"],
    keyPoints:["Discovered by Robert Hooke in 1665.","Contains a nucleus that controls cell activities (in most cells)."],
    summary:"The cell is the basic unit of all living organisms, differing slightly between plants and animals.",
    related:["biology","photosynthesis"]
  },
  "ecosystem": {
    title:"Ecosystem", subject:"Biology / Environmental Science",
    definition:"An ecosystem is a community of living organisms interacting with each other and their physical environment.",
    types:["Terrestrial ecosystem (forest, desert)","Aquatic ecosystem (pond, ocean)"],
    examples:["A forest with trees, animals, insects, and soil all interacting."],
    keyPoints:["Made up of biotic (living) and abiotic (non-living) components.","Energy flows through an ecosystem via food chains."],
    summary:"An ecosystem is a network of living things and their environment, connected through energy and matter flow.",
    related:["biology"]
  },
  "gravity": {
    title:"Gravity", subject:"Physics",
    definition:"Gravity is the natural force of attraction between any two objects with mass, pulling them towards each other.",
    explanation:"On Earth, gravity pulls everything towards its centre, which is why objects fall down instead of floating away.",
    keyPoints:["Discovered/formalised by Sir Isaac Newton.","The larger the mass, the stronger the gravitational pull."],
    summary:"Gravity is the attractive force between masses; on Earth, it pulls objects towards the ground.",
    related:["physics","newtons laws"]
  },
  "newtons laws": {
    title:"Newton's Laws of Motion", subject:"Physics",
    definition:"Newton's Laws of Motion are three fundamental laws that describe the relationship between a body and the forces acting on it.",
    types:[
      "1st Law (Inertia): An object stays at rest or in motion unless acted on by a force.",
      "2nd Law (F=ma): Force equals mass times acceleration.",
      "3rd Law: For every action, there is an equal and opposite reaction."
    ],
    formula:"F = m × a",
    examples:["A rocket launching (3rd law: exhaust pushes down, rocket pushes up).","A ball keeps rolling until friction stops it (1st law)."],
    mcqs:[{q:"Which law states 'every action has an equal and opposite reaction'?", options:["1st Law","2nd Law","3rd Law","None"], answer:"3rd Law"}],
    summary:"Newton's three laws explain how forces cause and change motion.",
    related:["physics","gravity"]
  },
  "energy": {
    title:"Energy", subject:"Physics",
    definition:"Energy is the capacity to do work.",
    types:["Kinetic Energy (motion)","Potential Energy (stored)","Heat Energy","Light Energy","Electrical Energy","Chemical Energy"],
    keyPoints:["Energy cannot be created or destroyed, only converted from one form to another (Law of Conservation of Energy)."],
    summary:"Energy is the ability to do work and exists in many interchangeable forms.",
    related:["physics"]
  },
  "computer": {
    title:"Computer", subject:"Computer Science",
    definition:"A computer is an electronic device that accepts data (input), processes it according to instructions, and produces results (output).",
    explanation:"A computer works using hardware (physical parts) and software (programs/instructions) together.",
    types:["Hardware — physical parts like CPU, monitor, keyboard.","Software — programs like an operating system or apps."],
    process:["Input (keyboard, mouse, scanner)","Processing (CPU)","Storage (RAM, hard disk)","Output (monitor, printer)"],
    advantages:["Fast processing of large amounts of data.","Can store huge amounts of information.","Automates repetitive tasks."],
    disadvantages:["Can malfunction or get viruses.","Overuse can affect health (eyes, posture)."],
    mcqs:[{q:"Which part of a computer is called its 'brain'?", options:["Monitor","CPU","Keyboard","Mouse"], answer:"CPU"}],
    summary:"A computer processes input data into useful output using hardware and software working together.",
    related:["hardware","software","internet"]
  },
  "hardware": {
    title:"Hardware", subject:"Computer Science",
    definition:"Hardware refers to the physical, touchable parts of a computer system.",
    examples:["CPU","Monitor","Keyboard","Mouse","Hard Disk","RAM"],
    summary:"Hardware is the physical equipment that makes up a computer system.",
    related:["computer","software"]
  },
  "software": {
    title:"Software", subject:"Computer Science",
    definition:"Software is a set of instructions or programs that tell a computer's hardware what to do.",
    types:["System Software (e.g. Operating System)","Application Software (e.g. browsers, games)"],
    summary:"Software is the set of programs and instructions that make hardware useful.",
    related:["computer","operating system"]
  },
  "internet": {
    title:"Internet", subject:"Computer Science",
    definition:"The Internet is a global network of interconnected computers that communicate and share information with each other.",
    advantages:["Instant access to information.","Easy communication across the world.","Supports online education and business."],
    disadvantages:["Risk of misinformation.","Cyber security threats.","Can be addictive/distracting."],
    keyPoints:["Uses protocols like TCP/IP to transmit data.","The World Wide Web (WWW) runs on top of the Internet."],
    summary:"The Internet connects computers worldwide, enabling communication and information sharing.",
    related:["computer","html"]
  },
  "html": {
    title:"HTML", subject:"Computer Science / Web Development",
    definition:"HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.",
    explanation:"HTML uses elements called 'tags' (like <p>, <h1>, <div>) to define parts of a web page such as headings, paragraphs, and links.",
    examples:["<h1>Heading</h1>","<p>A paragraph of text.</p>"],
    keyPoints:["HTML defines structure; CSS defines styling; JavaScript adds interactivity."],
    summary:"HTML is the language used to structure the content of web pages.",
    related:["css","internet"]
  },
  "css": {
    title:"CSS", subject:"Computer Science / Web Development",
    definition:"CSS (Cascading Style Sheets) is a language used to style and visually design HTML web pages.",
    examples:["Setting text colour, fonts, spacing, and layout of a webpage."],
    summary:"CSS controls the visual appearance of HTML web pages.",
    related:["html"]
  },
  "sql": {
    title:"SQL", subject:"Computer Science / Databases",
    definition:"SQL (Structured Query Language) is a language used to store, manage, and retrieve data in relational databases.",
    examples:["SELECT * FROM students; — retrieves all records from a 'students' table."],
    summary:"SQL is the standard language for working with relational databases.",
    related:["computer"]
  },
  "artificial intelligence": {
    title:"Artificial Intelligence (AI)", subject:"Computer Science",
    definition:"Artificial Intelligence is the branch of computer science that builds machines/programs capable of performing tasks that normally require human intelligence.",
    types:["Narrow AI (specific tasks, e.g. voice assistants)","General AI (human-level intelligence, still theoretical)"],
    examples:["Voice assistants like Siri.","Recommendation systems on YouTube/Netflix.","Chatbots."],
    advantages:["Automates complex tasks.","Works continuously without fatigue.","Can analyse huge datasets quickly."],
    disadvantages:["Can replace human jobs.","May reflect biases in training data.","Raises privacy and ethical concerns."],
    summary:"AI enables machines to perform tasks that typically require human intelligence.",
    related:["machine learning","computer"]
  },
  "machine learning": {
    title:"Machine Learning", subject:"Computer Science",
    definition:"Machine Learning is a branch of Artificial Intelligence where computers learn patterns from data to make predictions or decisions without being explicitly programmed for every case.",
    examples:["Email spam filters that learn from example emails.","Product recommendations based on past purchases."],
    summary:"Machine Learning lets computers learn from data instead of following fixed rules.",
    related:["artificial intelligence"]
  },
  "algebra": {
    title:"Algebra", subject:"Mathematics",
    definition:"Algebra is a branch of mathematics that uses letters/symbols (like x, y) to represent numbers in equations and formulas.",
    examples:["Solving: 2x + 3 = 7 → x = 2"],
    keyPoints:["Used to find unknown values.","Basis for higher mathematics like calculus."],
    summary:"Algebra uses symbols to represent numbers and solve equations.",
    related:["geometry"]
  },
  "geometry": {
    title:"Geometry", subject:"Mathematics",
    definition:"Geometry is the branch of mathematics concerned with the properties, measurement, and relationships of points, lines, angles, surfaces, and shapes.",
    types:["Plane Geometry (2D shapes)","Solid Geometry (3D shapes)"],
    examples:["Calculating the area of a triangle or the volume of a cube."],
    summary:"Geometry studies shapes, sizes, and the properties of space.",
    related:["algebra","trigonometry"]
  },
  "trigonometry": {
    title:"Trigonometry", subject:"Mathematics",
    definition:"Trigonometry is the branch of mathematics that studies the relationships between the angles and sides of triangles.",
    formula:"sin(θ) = Opposite / Hypotenuse, cos(θ) = Adjacent / Hypotenuse, tan(θ) = Opposite / Adjacent",
    examples:["Used to calculate the height of a building using its shadow and angle of elevation."],
    summary:"Trigonometry relates the angles and sides of triangles, using ratios like sine, cosine, and tangent.",
    related:["geometry"]
  },
  "noun": {
    title:"Noun", subject:"English Grammar",
    definition:"A noun is a word that names a person, place, animal, thing, or idea.",
    types:["Common Noun (city, book)","Proper Noun (Karachi, Quran)","Abstract Noun (love, honesty)","Collective Noun (team, herd)"],
    examples:["Ali (proper noun) read a book (common noun) about honesty (abstract noun)."],
    mcqs:[{q:"Which of these is a proper noun?", options:["city","Karachi","book","team"], answer:"Karachi"}],
    summary:"A noun names a person, place, thing, animal, or idea, and comes in several types.",
    related:["parts of speech"]
  },
  "sentence": {
    title:"Kinds of Sentences", subject:"English Grammar",
    definition:"A sentence is a group of words that expresses a complete thought.",
    types:[
      "Assertive/Declarative — makes a statement. (She is reading.)",
      "Interrogative — asks a question. (Is she reading?)",
      "Imperative — gives a command/request. (Please read this.)",
      "Exclamatory — expresses strong feeling. (What a great book!)"
    ],
    summary:"Sentences are classified into declarative, interrogative, imperative, and exclamatory types based on their purpose.",
    related:["noun","parts of speech"]
  },
  "democracy": {
    title:"Democracy", subject:"Pakistan Studies / Social Science",
    definition:"Democracy is a system of government in which power is held by the people, usually exercised through elected representatives.",
    types:["Direct Democracy (citizens vote directly on laws)","Representative Democracy (citizens elect representatives)"],
    advantages:["Gives citizens a voice in government.","Encourages accountability of leaders.","Protects basic rights and freedoms."],
    disadvantages:["Can be slow in decision-making.","Susceptible to influence by money/media.","Majority decisions may overlook minority views."],
    mcqs:[{q:"In a representative democracy, who makes laws?", options:["A king","Elected representatives","The army","A single dictator"], answer:"Elected representatives"}],
    summary:"Democracy is a government system where power ultimately rests with the people, typically via elected representatives.",
    related:["pakistan"]
  },
  "pakistan": {
    title:"Pakistan", subject:"Pakistan Studies",
    definition:"Pakistan is a country in South Asia that was created on 14 August 1947 as a homeland for the Muslims of the Indian subcontinent.",
    keyPoints:["Founder: Muhammad Ali Jinnah (Quaid-e-Azam).","Capital: Islamabad.","National language: Urdu.","Consists of four provinces: Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan."],
    summary:"Pakistan is a South Asian country founded in 1947 under the leadership of Muhammad Ali Jinnah.",
    related:["democracy"]
  },
  "geography": {
    title:"Geography", subject:"Social Science",
    definition:"Geography is the study of the Earth's physical features, climate, and the relationship between people and their environments.",
    types:["Physical Geography (landforms, climate)","Human Geography (population, culture, cities)"],
    summary:"Geography studies the Earth's surface, climate, and how humans interact with their environment.",
    related:["climate"]
  },
  "climate": {
    title:"Climate", subject:"Geography / Environmental Science",
    definition:"Climate is the average weather pattern of a place over a long period of time (usually 30+ years), unlike weather which changes daily.",
    keyPoints:["Climate change refers to long-term shifts in global temperatures and weather patterns, largely driven by human activity."],
    summary:"Climate describes the long-term average weather conditions of a region.",
    related:["geography"]
  },
  "solar system": {
    title:"Solar System", subject:"Astronomy",
    definition:"The Solar System is the Sun and everything that orbits it, including eight planets, their moons, dwarf planets, asteroids, and comets.",
    types:["Inner (rocky) planets: Mercury, Venus, Earth, Mars.","Outer (gas giant) planets: Jupiter, Saturn, Uranus, Neptune."],
    keyPoints:["The Sun contains about 99.8% of the Solar System's mass.","Earth is the only known planet with life."],
    mcqs:[{q:"Which planet is closest to the Sun?", options:["Earth","Venus","Mercury","Mars"], answer:"Mercury"}],
    summary:"The Solar System consists of the Sun and the planets, moons, and other bodies that orbit it.",
    related:["physics"]
  },
  "hajj": {
    title:"Hajj", subject:"Islamiat",
    definition:"Hajj is the annual Islamic pilgrimage to Mecca, Saudi Arabia, and is the fifth pillar of Islam, obligatory once in a lifetime for every able Muslim who can afford it.",
    keyPoints:["Performed during the Islamic month of Dhul Hijjah.","Includes rituals such as Tawaf (circling the Kaaba) and standing at Arafat."],
    summary:"Hajj is the obligatory Islamic pilgrimage to Mecca, one of the five pillars of Islam.",
    related:["zakat","quran"]
  },
  "zakat": {
    title:"Zakat", subject:"Islamiat",
    definition:"Zakat is the obligatory charitable giving in Islam, one of the Five Pillars, requiring eligible Muslims to give a fixed portion of their wealth to those in need.",
    keyPoints:["Standard rate is 2.5% of qualifying wealth held for one lunar year.","Purifies wealth and helps reduce poverty in society."],
    summary:"Zakat is the compulsory giving of a portion of wealth to the needy, one of Islam's five pillars.",
    related:["hajj"]
  },
  "namaz": {
    title:"Namaz (Salah)", subject:"Islamiat",
    definition:"Namaz (Salah) is the ritual prayer performed by Muslims five times a day, and is the second pillar of Islam.",
    keyPoints:["The five daily prayers are: Fajr, Zuhr, Asr, Maghrib, and Isha.","Performed facing the Qibla (direction of the Kaaba in Mecca)."],
    summary:"Namaz is the five-times-daily obligatory prayer in Islam.",
    related:["quran"]
  },
  "quran": {
    title:"Quran", subject:"Islamiat",
    definition:"The Quran is the central religious text of Islam, believed by Muslims to be the word of God (Allah) revealed to Prophet Muhammad (PBUH) through the Angel Jibreel.",
    keyPoints:["Composed of 114 chapters called Surahs.","Revealed over approximately 23 years."],
    summary:"The Quran is Islam's holy book, believed to be the revealed word of God.",
    related:["hajj","namaz"]
  }
};

/* Common phrasing variants mapped to a canonical KNOWLEDGE_BASE key */
const KB_ALIASES = {
  "ai":"artificial intelligence","a computer":"computer","the computer":"computer",
  "newton's laws":"newtons laws","newtons law":"newtons laws","newton's law":"newtons laws",
  "the solar system":"solar system","kinds of sentences":"sentence","types of sentences":"sentence",
  "gk":"science","general science":"science"
};

/* ---------------- SMART QUESTION PARSER ---------------- */
function parseQuestion(question){
  let q = normalize(question).replace(/[?.!]+$/,"").trim();
  let intent = "general";

  if(/^difference between /.test(q)){
    const rest = q.replace(/^difference between /,"");
    const parts = rest.split(/ and /);
    return { intent:"difference", topicA: parts[0] && parts[0].trim(), topicB: parts[1] && parts[1].trim() };
  }
  const patterns = [
    [/^types? of (.+)$/, "types"],
    [/^kinds? of (.+)$/, "types"],
    [/^advantages? of (.+)$/, "advantages"],
    [/^disadvantages? of (.+)$/, "disadvantages"],
    [/^uses? of (.+)$/, "examples"],
    [/^applications? of (.+)$/, "examples"],
    [/^formula (?:of|for) (.+)$/, "formula"],
    [/^structure of (.+)$/, "explanation"],
    [/^define (.+)$/, "definition"],
    [/^defination of (.+)$/, "definition"],
    [/^meaning of (.+)$/, "definition"],
    [/^explain (.+)$/, "explanation"],
    [/^what (?:is|are) (.+)$/, "definition"],
    [/^who (?:is|was) (.+)$/, "definition"],
    [/^why (.+)$/, "explanation"],
    [/^how (?:does|do|is|are) (.+)$/, "explanation"]
  ];
  for(const [re, foundIntent] of patterns){
    const m = q.match(re);
    if(m){
      let topic = m[1].trim().replace(/^(a|an|the)\s+/,"");
      return { intent: foundIntent, topic };
    }
  }
  return { intent:"definition", topic:q };
}

function resolveTopic(topic){
  if(!topic) return null;
  const key = KB_ALIASES[topic] || topic;
  return KNOWLEDGE_BASE[key] || null;
}

/* Builds the structured, textbook-style HTML answer. Reuses the same
   classes already defined in style.css (h4 blue headings, chip pills,
   example-item) so the visual design stays identical to the rest of
   the app — only this content block is new. */
function renderKnowledgeAnswer(entry, focusIntent){
  let html = `<div class="kb-title">${entry.title}<span class="kb-subject">${entry.subject||""}</span></div>`;
  if(entry.definition) html += `<h4>Definition</h4><div class="definition">${entry.definition}</div>`;
  if(entry.explanation) html += `<h4>Explanation</h4><div class="definition">${entry.explanation}</div>`;
  if(entry.formula) html += `<h4>Formula</h4><div class="definition">${entry.formula}</div>`;
  if(entry.process) html += `<h4>Process</h4>${entry.process.map(p=>`<div class="example-item">• ${p}</div>`).join("")}`;
  if(entry.types) html += `<h4>Types / Classification</h4>${entry.types.map(t=>`<div class="example-item">• ${t}</div>`).join("")}`;
  if(entry.examples) html += `<h4>Examples</h4>${entry.examples.map(e=>`<div class="example-item">• ${e}</div>`).join("")}`;
  if(entry.advantages) html += `<h4>Advantages</h4>${entry.advantages.map(a=>`<div class="example-item">• ${a}</div>`).join("")}`;
  if(entry.disadvantages) html += `<h4>Disadvantages</h4>${entry.disadvantages.map(d=>`<div class="example-item">• ${d}</div>`).join("")}`;
  if(entry.keyPoints) html += `<h4>Key Points</h4>${entry.keyPoints.map(k=>`<div class="example-item">• ${k}</div>`).join("")}`;
  if(entry.mcqs) html += `<h4>Practice MCQ</h4>` + entry.mcqs.map(mcq=>`
      <div class="example-item">${mcq.q}<br>${mcq.options.map(o=>`<span class="chip" style="cursor:default;${o===mcq.answer?'font-weight:700':''}">${o}${o===mcq.answer?' ✓':''}</span>`).join(" ")}</div>`).join("");
  if(entry.summary) html += `<h4>Summary</h4><div class="definition">${entry.summary}</div>`;
  if(entry.related) html += `<h4>Related Topics</h4><div class="chips">${entry.related.map(r=>{
      const rEntry = KNOWLEDGE_BASE[r];
      const label = rEntry ? rEntry.title : r;
      return `<button class="chip" onclick="document.getElementById('qa-input').value='What is ${label}?';askQuestion()">${label}</button>`;
    }).join("")}</div>`;
  return html;
}

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

/* ---------------- Q&A HELPER SCREEN — Knowledge Assistant ---------------- */
function extractTopic(question){
  let q = normalize(question).replace(/[?]+$/,"").trim();
  q = q.replace(/^(what is|what are|who is|who was|define|meaning of|explain|tell me about)\s+/i,"");
  q = q.replace(/^(the|a|an)\s+/i,"");
  return q.trim();
}

/* Live general-knowledge lookup using Wikipedia's free public REST API
   (no API key needed) — used only when a topic isn't in our offline
   KNOWLEDGE_BASE. Needs an internet connection. */
async function fetchWikiAnswer(topic){
  try{
    const title = topic.charAt(0).toUpperCase() + topic.slice(1);
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    if(!res.ok) return null;
    const data = await res.json();
    if(data && data.extract){
      return data.extract.split(/(?<=[.!?])\s+/).slice(0,3).join(" ");
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

  outputEl.innerHTML = "Thinking...";
  const parsed = parseQuestion(question);
  let html = null;

  if(parsed.intent === "difference"){
    const a = resolveTopic(parsed.topicA);
    const b = resolveTopic(parsed.topicB);
    if(a && b){
      html = `<div class="kb-title">Difference: ${a.title} vs ${b.title}</div>`
        + `<h4>${a.title}</h4><div class="definition">${a.definition||""}</div>`
        + `<h4>${b.title}</h4><div class="definition">${b.definition||""}</div>`;
    }
  } else {
    const entry = resolveTopic(parsed.topic);
    if(entry) html = renderKnowledgeAnswer(entry, parsed.intent);
  }

  if(!html){
    // Not in the offline knowledge base — try a live Wikipedia summary
    const topic = extractTopic(question);
    const wiki = await fetchWikiAnswer(topic);
    if(wiki){
      html = `<div class="kb-title">${topic.charAt(0).toUpperCase()+topic.slice(1)}<span class="kb-subject">Live result</span></div>
        <h4>Definition</h4><div class="definition">${wiki}</div>
        <div class="example-item" style="opacity:.7;margin-top:8px">ℹ️ Full structured notes (types, examples, MCQs) aren't in the offline knowledge base yet for this topic — this is a live summary fetched online.</div>`;
    }
  }

  if(!html){
    html = `⚠ No offline answer found for this topic, and no internet connection to look it up live. Try a topic like: Science, Photosynthesis, Computer, Democracy, Noun, Zakat.`;
  }

  outputEl.innerHTML = html;
  addHistory("question", question, (outputEl.innerText || "").slice(0,80));
  addRecent("qa-recent-list", question, (outputEl.innerText || "").slice(0,80));
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
      <div class="ri-right" dir="${/[\u0600-\u06FF]/.test(r.ur)?'rtl':'ltr'}">${escapeHtml(r.ur)}</div>
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
  document.getElementById("qa-output").innerHTML = renderKnowledgeAnswer(KNOWLEDGE_BASE["science"]);

  addRecent("qa-recent-list","What is science?","The study of nature is called science.");
  addRecent("qa-recent-list","What is gravity?","Gravity is the force that pulls objects towards each other, and pulls everything on Earth towards the ground.");
  addRecent("qa-recent-list","What is knowledge?","Knowledge is facts, information, and skills acquired by a person through experience or education.");
});
