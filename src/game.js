const lessonTemplates = [
  { title: 'Bakery Orders', body: 'Buy a warm pastry from the bakery NPC.', native: 'Bread', key: 'bread', decoys: ['cat', 'bicycle'], reward: '🥖 Bread Badge' },
  { title: 'Café Chat', body: 'Order a drink and greet the barista.', native: 'Coffee', key: 'coffee', decoys: ['rain', 'night'], reward: '☕ Café Cup' },
  { title: 'Bicycle Rental', body: 'Rent a bike to cross the academy faster.', native: 'Bicycle', key: 'bicycle', decoys: ['bakery', 'thankYou'], reward: '🚲 Bike Bell' },
  { title: 'Cats in the Garden', body: 'Talk about the cats sleeping near the fountain.', native: 'Cat', key: 'cat', decoys: ['day', 'map'], reward: '🐈 Cat Sticker' },
  { title: 'Weather Report', body: 'Tell your AI tutor what the sky is doing.', native: 'Rain', key: 'rain', decoys: ['sun', 'moon'], reward: '🌧️ Rain Pin' }
];

const languagePacks = {
  Spanish: { tutor: 'Profesora Nova', speechLang: 'es-ES', color: 0xff6b6b, words: { bread: 'Pan', cat: 'Gato', bicycle: 'Bicicleta', coffee: 'Café', rain: 'Lluvia', night: 'Noche', bakery: 'Panadería', thankYou: 'Gracias', day: 'Día', map: 'Mapa', sun: 'Sol', moon: 'Luna' } },
  French: { tutor: 'Professeure Nova', speechLang: 'fr-FR', color: 0x35d0ba, words: { bread: 'Pain', cat: 'Chat', bicycle: 'Vélo', coffee: 'Café', rain: 'Pluie', night: 'Nuit', bakery: 'Boulangerie', thankYou: 'Merci', day: 'Jour', map: 'Carte', sun: 'Soleil', moon: 'Lune' } },
  Japanese: { tutor: 'Sensei Nova', speechLang: 'ja-JP', color: 0x7c5cff, words: { bread: 'Pan', cat: 'Neko', bicycle: 'Jitensha', coffee: 'Kōhī', rain: 'Ame', night: 'Yoru', bakery: 'Pan-ya', thankYou: 'Arigatō', day: 'Hiru', map: 'Chizu', sun: 'Taiyō', moon: 'Tsuki' } },
  German: { tutor: 'Professor Nova', speechLang: 'de-DE', color: 0xf59e0b, words: { bread: 'Brot', cat: 'Katze', bicycle: 'Fahrrad', coffee: 'Kaffee', rain: 'Regen', night: 'Nacht', bakery: 'Bäckerei', thankYou: 'Danke', day: 'Tag', map: 'Karte', sun: 'Sonne', moon: 'Mond' } },
  Italian: { tutor: 'Professoressa Nova', speechLang: 'it-IT', color: 0x22c55e, words: { bread: 'Pane', cat: 'Gatto', bicycle: 'Bicicletta', coffee: 'Caffè', rain: 'Pioggia', night: 'Notte', bakery: 'Panetteria', thankYou: 'Grazie', day: 'Giorno', map: 'Mappa', sun: 'Sole', moon: 'Luna' } },
  Portuguese: { tutor: 'Professora Nova', speechLang: 'pt-BR', color: 0x10b981, words: { bread: 'Pão', cat: 'Gato', bicycle: 'Bicicleta', coffee: 'Café', rain: 'Chuva', night: 'Noite', bakery: 'Padaria', thankYou: 'Obrigado', day: 'Dia', map: 'Mapa', sun: 'Sol', moon: 'Lua' } },
  Korean: { tutor: 'Nova 선생님', speechLang: 'ko-KR', color: 0x60a5fa, words: { bread: 'Ppang', cat: 'Goyangi', bicycle: 'Jajeongeo', coffee: 'Keopi', rain: 'Bi', night: 'Bam', bakery: 'Ppangjip', thankYou: 'Gamsahamnida', day: 'Nat', map: 'Jido', sun: 'Taeyang', moon: 'Dal' } },
  Chinese: { tutor: 'Nova 老师', speechLang: 'zh-CN', color: 0xef4444, words: { bread: 'Miànbāo', cat: 'Māo', bicycle: 'Zìxíngchē', coffee: 'Kāfēi', rain: 'Yǔ', night: 'Yèwǎn', bakery: 'Miànbāodiàn', thankYou: 'Xièxie', day: 'Báitiān', map: 'Dìtú', sun: 'Tàiyáng', moon: 'Yuèliàng' } },
  Arabic: { tutor: 'المعلّم نوفا', speechLang: 'ar-SA', color: 0xf97316, words: { bread: 'Khubz', cat: 'Qitta', bicycle: 'Daraja', coffee: 'Qahwa', rain: 'Matar', night: 'Layl', bakery: 'Makhbaz', thankYou: 'Shukran', day: 'Nahar', map: 'Kharita', sun: 'Shams', moon: 'Qamar' } },
  Hindi: { tutor: 'Nova शिक्षक', speechLang: 'hi-IN', color: 0xec4899, words: { bread: 'Roti', cat: 'Billi', bicycle: 'Saikil', coffee: 'Kofi', rain: 'Barish', night: 'Raat', bakery: 'Bekari', thankYou: 'Dhanyavaad', day: 'Din', map: 'Naksha', sun: 'Suraj', moon: 'Chaand' } },
  Russian: { tutor: 'Профессор Нова', speechLang: 'ru-RU', color: 0x38bdf8, words: { bread: 'Khleb', cat: 'Koshka', bicycle: 'Velosiped', coffee: 'Kofe', rain: 'Dozhd', night: 'Noch', bakery: 'Pekarnya', thankYou: 'Spasibo', day: 'Den', map: 'Karta', sun: 'Solntse', moon: 'Luna' } },
  Dutch: { tutor: 'Docent Nova', speechLang: 'nl-NL', color: 0xfb923c, words: { bread: 'Brood', cat: 'Kat', bicycle: 'Fiets', coffee: 'Koffie', rain: 'Regen', night: 'Nacht', bakery: 'Bakkerij', thankYou: 'Dank je', day: 'Dag', map: 'Kaart', sun: 'Zon', moon: 'Maan' } },
  Swedish: { tutor: 'Lärare Nova', speechLang: 'sv-SE', color: 0xfacc15, words: { bread: 'Bröd', cat: 'Katt', bicycle: 'Cykel', coffee: 'Kaffe', rain: 'Regn', night: 'Natt', bakery: 'Bageri', thankYou: 'Tack', day: 'Dag', map: 'Karta', sun: 'Sol', moon: 'Måne' } },
  Norwegian: { tutor: 'Lærer Nova', speechLang: 'nb-NO', color: 0x93c5fd, words: { bread: 'Brød', cat: 'Katt', bicycle: 'Sykkel', coffee: 'Kaffe', rain: 'Regn', night: 'Natt', bakery: 'Bakeri', thankYou: 'Takk', day: 'Dag', map: 'Kart', sun: 'Sol', moon: 'Måne' } },
  Danish: { tutor: 'Lærer Nova', speechLang: 'da-DK', color: 0xf87171, words: { bread: 'Brød', cat: 'Kat', bicycle: 'Cykel', coffee: 'Kaffe', rain: 'Regn', night: 'Nat', bakery: 'Bageri', thankYou: 'Tak', day: 'Dag', map: 'Kort', sun: 'Sol', moon: 'Måne' } },
  Finnish: { tutor: 'Opettaja Nova', speechLang: 'fi-FI', color: 0xa78bfa, words: { bread: 'Leipä', cat: 'Kissa', bicycle: 'Polkupyörä', coffee: 'Kahvi', rain: 'Sade', night: 'Yö', bakery: 'Leipomo', thankYou: 'Kiitos', day: 'Päivä', map: 'Kartta', sun: 'Aurinko', moon: 'Kuu' } },
  Polish: { tutor: 'Profesor Nova', speechLang: 'pl-PL', color: 0xf472b6, words: { bread: 'Chleb', cat: 'Kot', bicycle: 'Rower', coffee: 'Kawa', rain: 'Deszcz', night: 'Noc', bakery: 'Piekarnia', thankYou: 'Dziękuję', day: 'Dzień', map: 'Mapa', sun: 'Słońce', moon: 'Księżyc' } },
  Turkish: { tutor: 'Öğretmen Nova', speechLang: 'tr-TR', color: 0x14b8a6, words: { bread: 'Ekmek', cat: 'Kedi', bicycle: 'Bisiklet', coffee: 'Kahve', rain: 'Yağmur', night: 'Gece', bakery: 'Fırın', thankYou: 'Teşekkürler', day: 'Gün', map: 'Harita', sun: 'Güneş', moon: 'Ay' } },
  Greek: { tutor: 'Δάσκαλος Nova', speechLang: 'el-GR', color: 0x818cf8, words: { bread: 'Psomi', cat: 'Gata', bicycle: 'Podilato', coffee: 'Kafes', rain: 'Vrochi', night: 'Nychta', bakery: 'Fournos', thankYou: 'Efcharisto', day: 'Mera', map: 'Chartis', sun: 'Ilios', moon: 'Fengari' } },
  Hebrew: { tutor: 'המורה נובה', speechLang: 'he-IL', color: 0x67e8f9, words: { bread: 'Lechem', cat: 'Chatul', bicycle: 'Ofanayim', coffee: 'Kafe', rain: 'Geshem', night: 'Layla', bakery: 'Maafiya', thankYou: 'Toda', day: 'Yom', map: 'Mapa', sun: 'Shemesh', moon: 'Yareach' } },
  Vietnamese: { tutor: 'Thầy Nova', speechLang: 'vi-VN', color: 0x34d399, words: { bread: 'Bánh mì', cat: 'Mèo', bicycle: 'Xe đạp', coffee: 'Cà phê', rain: 'Mưa', night: 'Đêm', bakery: 'Tiệm bánh', thankYou: 'Cảm ơn', day: 'Ngày', map: 'Bản đồ', sun: 'Mặt trời', moon: 'Mặt trăng' } },
  Thai: { tutor: 'ครู Nova', speechLang: 'th-TH', color: 0xc084fc, words: { bread: 'Khanom pang', cat: 'Maew', bicycle: 'Jakkrayan', coffee: 'Kafae', rain: 'Fon', night: 'Khuen', bakery: 'Ran khanom pang', thankYou: 'Khob khun', day: 'Wan', map: 'Phaenthi', sun: 'Phra athit', moon: 'Phra chan' } },
  Indonesian: { tutor: 'Guru Nova', speechLang: 'id-ID', color: 0x2dd4bf, words: { bread: 'Roti', cat: 'Kucing', bicycle: 'Sepeda', coffee: 'Kopi', rain: 'Hujan', night: 'Malam', bakery: 'Toko roti', thankYou: 'Terima kasih', day: 'Hari', map: 'Peta', sun: 'Matahari', moon: 'Bulan' } },
  Swahili: { tutor: 'Mwalimu Nova', speechLang: 'sw-KE', color: 0x84cc16, words: { bread: 'Mkate', cat: 'Paka', bicycle: 'Baiskeli', coffee: 'Kahawa', rain: 'Mvua', night: 'Usiku', bakery: 'Duka la mikate', thankYou: 'Asante', day: 'Siku', map: 'Ramani', sun: 'Jua', moon: 'Mwezi' } },
  Ukrainian: { tutor: 'Професор Нова', speechLang: 'uk-UA', color: 0x3b82f6, words: { bread: 'Khlib', cat: 'Kit', bicycle: 'Velosyped', coffee: 'Kava', rain: 'Doshch', night: 'Nich', bakery: 'Pekarnia', thankYou: 'Diakuiu', day: 'Den', map: 'Mapa', sun: 'Sontse', moon: 'Misiats' } }
};

const courseData = Object.fromEntries(
  Object.entries(languagePacks).map(([language, pack]) => [
    language,
    {
      tutor: pack.tutor,
      speechLang: pack.speechLang,
      color: pack.color,
      lessons: lessonTemplates.map((template) => ({
        title: template.title,
        body: template.body,
        native: template.native,
        target: pack.words[template.key],
        options: [pack.words[template.key], ...template.decoys.map((key) => pack.words[key])],
        reward: template.reward
      }))
    }
  ])
);

const locations = [
  { id: 'bakery', icon: '🍕', name: 'Bakery', description: 'A delicious shop for food words and polite orders.', item: '🍕 Bakery Slice', x: -360, y: -160 },
  { id: 'cafe', icon: '☕', name: 'Café', description: 'A cozy place to practice drinks and greetings.', item: '☕ Loyalty Card', x: -120, y: -280 },
  { id: 'bicycle', icon: '🚲', name: 'Bicycle Park', description: 'A transit hub for directions and travel phrases.', item: '🚲 Map Pedal', x: 230, y: -210 },
  { id: 'cats', icon: '🐈', name: 'Cats Garden', description: 'A calm garden for animal words and short sentences.', item: '🐈 Yarn Charm', x: -300, y: 170 },
  { id: 'weather', icon: '🌧️', name: 'Weather Station', description: 'A sky lab for rain, sun, day, and night phrases.', item: '🌧️ Weather Patch', x: 310, y: 130 },
  { id: 'moon', icon: '🌙', name: 'Moon Plaza', description: 'A night plaza for time and evening vocabulary.', item: '🌙 Moon Token', x: 40, y: 300 }
];

const npcTutors = [
  { name: 'Chef Bella', icon: '🍕', locationId: 'bakery', prompt: 'Bakery quiz ready!' },
  { name: 'Barista Mo', icon: '☕', locationId: 'cafe', prompt: 'Café conversation challenge!' },
  { name: 'Rider Kai', icon: '🚲', locationId: 'bicycle', prompt: 'Direction and bicycle quiz!' },
  { name: 'Mina Cats', icon: '🐈', locationId: 'cats', prompt: 'Animal words lesson!' },
  { name: 'Storm Sage', icon: '🌧️', locationId: 'weather', prompt: 'Weather report quiz!' },
  { name: 'Luna Guide', icon: '🌙', locationId: 'moon', prompt: 'Day and night vocabulary!' }
];

let selectedLanguage = 'Spanish';
let lessonIndex = 0;
let xp = 0;
let streak = 0;
let activeLocation = locations[0].id;
let weatherMode = 'Clear';
let isNight = false;
let musicEnabled = false;
let audioContext;
let musicTimer;
let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const inventory = new Set(['🗺️ Starter Map']);
const achievements = new Set();
const player = { x: 0, y: 0, speed: 4.2 };
const keys = new Set();

const els = {
  languageSelect: document.querySelector('#languageSelect'),
  xp: document.querySelector('#xp'),
  streak: document.querySelector('#streak'),
  level: document.querySelector('#level'),
  timeOfDay: document.querySelector('#timeOfDay'),
  weatherLabel: document.querySelector('#weatherLabel'),
  lessonTitle: document.querySelector('#lessonTitle'),
  lessonBody: document.querySelector('#lessonBody'),
  nativePhrase: document.querySelector('#nativePhrase'),
  targetPhrase: document.querySelector('#targetPhrase'),
  nextLesson: document.querySelector('#nextLesson'),
  pronounce: document.querySelector('#pronounce'),
  npcName: document.querySelector('#npcName'),
  npcDialogue: document.querySelector('#npcDialogue'),
  question: document.querySelector('#question'),
  answers: document.querySelector('#answers'),
  feedback: document.querySelector('#feedback'),
  mapButtons: document.querySelector('#mapButtons'),
  toggleDayNight: document.querySelector('#toggleDayNight'),
  toggleWeather: document.querySelector('#toggleWeather'),
  toggleMusic: document.querySelector('#toggleMusic'),
  inventoryList: document.querySelector('#inventoryList'),
  achievementList: document.querySelector('#achievementList'),
  npcList: document.querySelector('#npcList'),
  schoolStatus: document.querySelector('#schoolStatus'),
  moveUp: document.querySelector('#moveUp'),
  moveLeft: document.querySelector('#moveLeft'),
  moveDown: document.querySelector('#moveDown'),
  moveRight: document.querySelector('#moveRight'),
  xpBar: document.querySelector('#xpBar'),
  fps: document.querySelector('#fps'),
  resolution: document.querySelector('#resolution'),
  dpr: document.querySelector('#dpr'),
  qualitySelect: document.querySelector('#qualitySelect')
};

Object.keys(courseData).forEach((language) => {
  const option = document.createElement('option');
  option.value = language;
  option.textContent = language;
  els.languageSelect.append(option);
});

locations.forEach((location) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.location = location.id;
  button.textContent = `${location.icon} ${location.name}`;
  button.addEventListener('click', () => visitLocation(location.id));
  els.mapButtons.append(button);
});

function getLesson() {
  return courseData[selectedLanguage].lessons[lessonIndex];
}

function getLocation() {
  return locations.find((location) => location.id === activeLocation) || locations[0];
}

function renderLesson() {
  const course = courseData[selectedLanguage];
  const lesson = getLesson();
  const location = getLocation();
  els.lessonTitle.textContent = `${lesson.title} · ${location.icon} ${location.name}`;
  els.lessonBody.textContent = `${lesson.body} ${location.description}`;
  els.nativePhrase.textContent = lesson.native;
  els.targetPhrase.textContent = lesson.target;
  els.npcName.textContent = course.tutor;
  els.question.textContent = `Translate “${lesson.native}” into ${selectedLanguage}`;
  els.answers.replaceChildren();
  lesson.options.forEach((answer) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = answer;
    button.addEventListener('click', () => answerQuiz(answer));
    els.answers.append(button);
  });
  els.feedback.textContent = '';
  updateStats();
  updateMapButtons();
  renderCollections();
  updateWorldColor(course.color);
}

function answerQuiz(answer) {
  const lesson = getLesson();
  const isCorrect = answer === lesson.target;
  if (isCorrect) {
    streak += 1;
    xp += 15 + streak * 2;
    inventory.add(lesson.reward);
    els.feedback.textContent = `Correct! ${courseData[selectedLanguage].tutor} added ${lesson.reward} to your inventory.`;
    els.feedback.className = 'feedback good';
    unlockAchievements();
  } else {
    streak = 0;
    xp = Math.max(0, xp - 3);
    els.feedback.textContent = `Almost! The AI NPC says the answer is “${lesson.target}”.`;
    els.feedback.className = 'feedback bad';
  }
  els.npcDialogue.textContent = isCorrect
    ? 'Great recall. I will make the next challenge a little smarter.'
    : 'No worries. I adjusted your path and will review this phrase again soon.';
  updateStats();
  renderCollections();
}

function unlockAchievements() {
  if (streak >= 3) achievements.add('🔥 3-answer streak');
  if (xp >= 100) achievements.add('⭐ Level 2 learner');
  if (inventory.size >= 6) achievements.add('🎒 Full starter kit');
  if (isNight && weatherMode === 'Rain') achievements.add('🌧️🌙 Night rain explorer');
}

function updateStats() {
  els.xp.textContent = xp;
  els.streak.textContent = streak;
  els.level.textContent = Math.floor(xp / 100) + 1;
  els.timeOfDay.textContent = isNight ? 'Night' : 'Day';
  els.weatherLabel.textContent = weatherMode;
  if (els.xpBar) els.xpBar.style.width = `${(xp % 100)}%`;
}

function renderCollections() {
  renderList(els.inventoryList, [...inventory]);
  renderList(els.achievementList, achievements.size ? [...achievements] : ['Keep quizzing to unlock trophies']);
  renderList(els.npcList, npcTutors.map((npc) => `${npc.icon} ${npc.name}: ${npc.prompt}`));
}

function renderList(list, items) {
  list.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });
}

function updateMapButtons() {
  document.querySelectorAll('[data-location]').forEach((button) => {
    button.classList.toggle('active', button.dataset.location === activeLocation);
  });
}

function visitLocation(locationId) {
  activeLocation = locationId;
  const target = getLocation();
  player.x = target.x;
  player.y = target.y;
  const location = getLocation();
  inventory.add(location.item);
  achievements.add('🗺️ Map explorer');
  lessonIndex = locations.findIndex((item) => item.id === locationId) % courseData[selectedLanguage].lessons.length;
  els.npcDialogue.textContent = `Welcome to ${location.icon} ${location.name}. I loaded a matching class for you.`;
  renderLesson();
}

function speakPhrase() {
  if (!('speechSynthesis' in window)) {
    els.feedback.textContent = 'Voice pronunciation is not supported on this device/browser.';
    els.feedback.className = 'feedback bad';
    return;
  }
  const utterance = new SpeechSynthesisUtterance(getLesson().target);
  utterance.lang = courseData[selectedLanguage].speechLang;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  achievements.add('🗣️ Pronunciation practice');
  renderCollections();
}

function playMusicLoop() {
  if (!musicEnabled) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  [261.63, 329.63, 392, 523.25].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    gain.gain.setValueAtTime(0.0001, now + index * 0.18);
    gain.gain.exponentialRampToValueAtTime(0.05, now + index * 0.18 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.18 + 0.16);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now + index * 0.18);
    oscillator.stop(now + index * 0.18 + 0.18);
  });
  musicTimer = window.setTimeout(playMusicLoop, 950);
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  els.toggleMusic.textContent = musicEnabled ? '🎵 Music on' : '🎵 Music';
  achievements.add('🎵 Music lover');
  renderCollections();
  if (musicEnabled) {
    playMusicLoop();
  } else {
    window.clearTimeout(musicTimer);
  }
}

els.languageSelect.addEventListener('change', (event) => {
  selectedLanguage = event.target.value;
  lessonIndex = 0;
  streak = 0;
  renderLesson();
});

els.nextLesson.addEventListener('click', () => {
  lessonIndex = (lessonIndex + 1) % courseData[selectedLanguage].lessons.length;
  renderLesson();
});

els.pronounce.addEventListener('click', speakPhrase);
els.toggleDayNight.addEventListener('click', () => {
  isNight = !isNight;
  if (typeof rebuildSky === 'function') rebuildSky();
  unlockAchievements();
  updateStats();
  renderCollections();
});
els.toggleWeather.addEventListener('click', () => {
  weatherMode = weatherMode === 'Clear' ? 'Rain' : 'Clear';
  unlockAchievements();
  updateStats();
  renderCollections();
});
els.toggleMusic.addEventListener('click', toggleMusic);
function setMove(direction, enabled) {
  if (enabled) keys.add(direction);
  else keys.delete(direction);
}

[
  [els.moveUp, 'up'],
  [els.moveLeft, 'left'],
  [els.moveDown, 'down'],
  [els.moveRight, 'right']
].forEach(([button, direction]) => {
  button.addEventListener('pointerdown', () => setMove(direction, true));
  button.addEventListener('pointerup', () => setMove(direction, false));
  button.addEventListener('pointerleave', () => setMove(direction, false));
  button.addEventListener('click', () => {
    setMove(direction, true);
    window.setTimeout(() => setMove(direction, false), 120);
  });
});

function getMoveDirection(key) {
  return { ArrowUp: 'up', w: 'up', W: 'up', ArrowDown: 'down', s: 'down', S: 'down', ArrowLeft: 'left', a: 'left', A: 'left', ArrowRight: 'right', d: 'right', D: 'right' }[key];
}

window.addEventListener('keydown', (event) => {
  const direction = getMoveDirection(event.key);
  if (direction) keys.add(direction);
});

window.addEventListener('keyup', (event) => {
  const direction = getMoveDirection(event.key);
  if (direction) keys.delete(direction);
});


const canvas = document.querySelector('#world');
const ctx = canvas.getContext('2d', { alpha: false });

/* Pip-Boy phosphor palette used across the renderer. */
const PHOS = '#2bff88';
const PHOS_BRIGHT = '#b9ffd6';
const AMBER = '#ffb43a';

let accentHue = '#ff6b6b';
let spin = 0;

/* ---------- 4K / high-DPI render scaling ---------- */
const QUALITY_TARGET_HEIGHT = { '4k': 2160, '1440': 1440, '1080': 1080, '720': 720 };
let renderQuality = 'auto';
let renderScale = 1;
let viewW = window.innerWidth;
let viewH = window.innerHeight;

function computeRenderScale() {
  const dpr = window.devicePixelRatio || 1;
  if (renderQuality === 'auto') {
    return Math.min(Math.max(dpr, 1), 4);
  }
  const target = QUALITY_TARGET_HEIGHT[renderQuality] || 1080;
  // Scale so the backing-store height matches the requested vertical resolution,
  // capped at 4x to keep fill-rate sane on small displays.
  return Math.min(Math.max(target / window.innerHeight, 0.5), 4);
}

let skyGradient = null;

function getCenterY() {
  return viewW < 760 ? viewH * 0.32 : viewH / 2 + 70;
}

// Rebuilt only on resize / day-night change — never per frame.
function rebuildSky() {
  const centerX = viewW / 2;
  skyGradient = ctx.createRadialGradient(centerX, viewH * 0.34, 80, centerX, getCenterY(), viewH);
  skyGradient.addColorStop(0, isNight ? 'rgba(6, 34, 20, 1)' : 'rgba(9, 58, 36, 1)');
  skyGradient.addColorStop(1, isNight ? '#010a06' : '#02160a');
}

function resizeCanvas() {
  viewW = window.innerWidth;
  viewH = window.innerHeight;
  renderScale = computeRenderScale();
  canvas.width = Math.round(viewW * renderScale);
  canvas.height = Math.round(viewH * renderScale);
  // Draw using CSS pixels; the transform upscales to the high-res backing store.
  ctx.setTransform(renderScale, 0, 0, renderScale, 0, 0);
  rebuildSky();
  if (els.resolution) els.resolution.textContent = `${canvas.width}×${canvas.height}`;
  if (els.dpr) els.dpr.textContent = `${renderScale.toFixed(2)}×`;
}

function hexToCss(color) {
  return `#${color.toString(16).padStart(6, '0')}`;
}

function updateWorldColor(color) {
  accentHue = hexToCss(color);
}

if (els.qualitySelect) {
  els.qualitySelect.value = renderQuality;
  els.qualitySelect.addEventListener('change', (event) => {
    renderQuality = event.target.value;
    resizeCanvas();
  });
}

/* ---------- Simulation (delta-time, framerate independent) ---------- */
function updatePlayer(step) {
  const dx = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
  const dy = (keys.has('down') ? 1 : 0) - (keys.has('up') ? 1 : 0);
  if (dx || dy) {
    const length = Math.hypot(dx, dy);
    const move = player.speed * step;
    player.x = Math.max(-520, Math.min(520, player.x + (dx / length) * move));
    player.y = Math.max(-420, Math.min(420, player.y + (dy / length) * move));
    achievements.add('🕹️ Open-world explorer');
  }

  const nearest = locations.reduce((best, location) => {
    const distance = Math.hypot(player.x - location.x, player.y - location.y);
    return distance < best.distance ? { location, distance } : best;
  }, { location: getLocation(), distance: Infinity });

  if (nearest.distance < 90 && nearest.location.id !== activeLocation) {
    activeLocation = nearest.location.id;
    const npc = npcTutors.find((tutor) => tutor.locationId === activeLocation);
    lessonIndex = locations.findIndex((item) => item.id === activeLocation) % courseData[selectedLanguage].lessons.length;
    inventory.add(nearest.location.item);
    achievements.add('🧑‍🏫 Met a tutor NPC');
    els.schoolStatus.textContent = `${npc.icon} ${npc.name} asks: ${getLesson().native} in ${selectedLanguage}?`;
    els.npcDialogue.textContent = `${npc.name}: ${npc.prompt} Answer my question to earn rewards.`;
    renderLesson();
  } else if (nearest.distance < 140) {
    const npc = npcTutors.find((tutor) => tutor.locationId === nearest.location.id);
    els.schoolStatus.textContent = `${npc.icon} ${npc.name} is nearby. Walk closer for a question.`;
  }
}

function worldToScreen(worldX, worldY, centerX, centerY) {
  const depth = 1 + (worldY - player.y + 520) / 1040;
  return {
    x: centerX + (worldX - player.x) * 0.78,
    y: centerY + (worldY - player.y) * 0.34,
    scale: Math.max(0.55, Math.min(1.35, depth))
  };
}

/* ---------- High-detail rendering helpers ---------- */
function drawGridFloor(centerX, centerY, time) {
  // Perspective phosphor grid that scrolls with player position.
  ctx.save();
  ctx.lineWidth = 1;
  const horizon = centerY - 40;
  const rows = 22;
  for (let i = 0; i < rows; i += 1) {
    const t = i / rows;
    const y = horizon + Math.pow(t, 1.8) * (viewH - horizon + 120);
    const alpha = 0.10 + t * 0.32;
    ctx.strokeStyle = `rgba(43, 255, 136, ${alpha})`;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(viewW, y);
    ctx.stroke();
  }
  // Vertical lines share one colour, so batch them into a single stroke and
  // cull anything off-screen — far cheaper than one stroke() call per line.
  const cols = 26;
  const offset = ((player.x * 0.4) % 60);
  ctx.strokeStyle = 'rgba(43, 255, 136, 0.22)';
  ctx.beginPath();
  for (let i = -cols; i <= cols; i += 1) {
    const vx = centerX + i * 60 - offset;
    if (vx < -40 || vx > viewW + 40) continue;
    ctx.moveTo(centerX + (vx - centerX) * 0.18, horizon);
    ctx.lineTo(vx, viewH);
  }
  ctx.stroke();
  ctx.restore();
}

function drawStars(time) {
  ctx.save();
  for (let i = 0; i < 90; i += 1) {
    const x = (i * 137.5) % viewW;
    const y = (i * 89.3) % (viewH * 0.55);
    const tw = 0.4 + 0.6 * Math.abs(Math.sin(time * 0.001 + i));
    ctx.fillStyle = `rgba(185, 255, 214, ${tw * 0.6})`;
    ctx.fillRect(x, y, 1.5, 1.5);
  }
  ctx.restore();
}

function drawCampusBuilding(location, centerX, centerY) {
  const point = worldToScreen(location.x, location.y, centerX, centerY);
  const width = 86 * point.scale;
  const height = 104 * point.scale;
  const active = location.id === activeLocation;
  const x0 = point.x - width / 2;
  const y0 = point.y - height;
  const edge = active ? AMBER : PHOS;

  // Ground glow anchors each building (cheap translucent ellipse, no blur).
  ctx.fillStyle = active ? 'rgba(255, 180, 58, 0.18)' : 'rgba(43, 255, 136, 0.16)';
  ctx.beginPath();
  ctx.ellipse(point.x, point.y, width * 0.85, 16 * point.scale, 0, 0, Math.PI * 2);
  ctx.fill();

  // Solid body so buildings read clearly against the dark screen (no costly blur).
  const body = ctx.createLinearGradient(x0, y0, x0, point.y);
  if (active) {
    body.addColorStop(0, 'rgba(120, 80, 16, 0.96)');
    body.addColorStop(1, 'rgba(60, 40, 8, 0.96)');
  } else {
    body.addColorStop(0, 'rgba(26, 110, 68, 0.96)');
    body.addColorStop(1, 'rgba(10, 56, 34, 0.96)');
  }
  ctx.fillStyle = body;
  ctx.fillRect(x0, y0, width, height);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = edge;
  ctx.strokeRect(x0, y0, width, height);

  // Lit window grid for high-detail look.
  const cols = 3;
  const rows = 4;
  const pad = 8 * point.scale;
  const cw = (width - pad * 2) / cols;
  const ch = (height - pad * 2) / rows;
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const lit = (r + c + Math.floor(location.x)) % 3 === 0;
      ctx.fillStyle = lit
        ? (active ? 'rgba(255, 200, 110, 0.95)' : 'rgba(120, 255, 180, 0.85)')
        : 'rgba(2, 22, 10, 0.85)';
      ctx.fillRect(x0 + pad + c * cw + 1, y0 + pad + r * ch + 1, cw - 3, ch - 3);
    }
  }

  // Roof beacon icon + label plate.
  ctx.fillStyle = PHOS_BRIGHT;
  ctx.font = `${28 * point.scale}px sans-serif`;
  ctx.fillText(location.icon, point.x - 15 * point.scale, y0 - 8);
  ctx.fillStyle = active ? AMBER : PHOS_BRIGHT;
  ctx.font = `700 ${12 * point.scale}px "Share Tech Mono", monospace`;
  ctx.fillText(location.name.toUpperCase(), x0, point.y + 18);
}

function drawNpc(location, centerX, centerY) {
  const npc = npcTutors.find((tutor) => tutor.locationId === location.id);
  const point = worldToScreen(location.x + 44, location.y + 38, centerX, centerY);
  const r = 17 * point.scale;
  ctx.beginPath();
  ctx.fillStyle = 'rgba(8, 44, 27, 0.95)';
  ctx.strokeStyle = PHOS_BRIGHT;
  ctx.lineWidth = 2;
  ctx.arc(point.x, point.y - 28 * point.scale, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = PHOS_BRIGHT;
  ctx.font = `${20 * point.scale}px sans-serif`;
  ctx.fillText(npc.icon, point.x - 11 * point.scale, point.y - 21 * point.scale);
}

function drawTower(angle, height, centerX, centerY, radius) {
  const x = Math.cos(angle + spin) * radius;
  const z = Math.sin(angle + spin) * radius;
  const scale = 1.1 - z / (radius * 4);
  const baseX = centerX + x * 0.75;
  const baseY = centerY + z * 0.22;
  const towerHeight = height * 62 * scale;
  const width = 28 * scale;
  const gradient = ctx.createLinearGradient(baseX - width, baseY - towerHeight, baseX + width, baseY);
  gradient.addColorStop(0, 'rgba(43, 255, 136, 0.05)');
  gradient.addColorStop(1, 'rgba(43, 255, 136, 0.4)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(baseX - width, baseY);
  ctx.lineTo(baseX - width * 0.55, baseY - towerHeight);
  ctx.lineTo(baseX + width * 0.55, baseY - towerHeight - 8);
  ctx.lineTo(baseX + width, baseY - 6);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(43, 255, 136, 0.35)';
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawBot(centerX, botY, isCompact) {
  const radius = isCompact ? 42 : 58;
  // Cheap layered "bloom" — concentric translucent rings instead of shadowBlur.
  ctx.fillStyle = 'rgba(43, 255, 136, 0.10)';
  ctx.beginPath();
  ctx.arc(centerX, botY, radius + 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(43, 255, 136, 0.16)';
  ctx.beginPath();
  ctx.arc(centerX, botY, radius + 10, 0, Math.PI * 2);
  ctx.fill();
  // Body.
  ctx.fillStyle = accentHue;
  ctx.beginPath();
  ctx.arc(centerX, botY, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(2, 22, 10, 0.6)';
  ctx.beginPath();
  ctx.arc(centerX, botY, radius * 0.72, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = PHOS_BRIGHT;
  ctx.lineWidth = 2;
  ctx.stroke();
  // Eyes + smile.
  ctx.fillStyle = PHOS_BRIGHT;
  ctx.fillRect(centerX - 25, botY - 8, 14, 12);
  ctx.fillRect(centerX + 11, botY - 8, 14, 12);
  ctx.strokeStyle = PHOS_BRIGHT;
  ctx.beginPath();
  ctx.arc(centerX, botY + 8, 22, 0.15, Math.PI - 0.15);
  ctx.stroke();
  // Rotating scanner halo for extra detail.
  ctx.strokeStyle = 'rgba(43, 255, 136, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, botY, radius + 12, spin, spin + Math.PI * 0.6);
  ctx.stroke();
}

function drawWorld(time) {
  const width = viewW;
  const height = viewH;
  const centerX = width / 2;
  const isCompact = width < 760;
  const centerY = isCompact ? height * 0.32 : height / 2 + 70;

  // Sky / screen base — uses the gradient cached on resize / day-night change.
  ctx.fillStyle = skyGradient || (isNight ? '#010a06' : '#02160a');
  ctx.fillRect(0, 0, width, height);

  if (isNight) drawStars(time);
  drawGridFloor(centerX, centerY, time);

  // Rotating campus platform.
  const mapRadiusX = isCompact ? 210 : 360;
  const mapRadiusY = isCompact ? 74 : 128;
  ctx.save();
  ctx.translate(centerX, centerY + 95);
  ctx.rotate(spin * 0.18);
  ctx.fillStyle = 'rgba(12, 70, 42, 0.92)';
  ctx.strokeStyle = 'rgba(43, 255, 136, 0.65)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i < 12; i += 1) {
    const a = (i / 12) * Math.PI * 2;
    const x = Math.cos(a) * mapRadiusX;
    const y = Math.sin(a) * mapRadiusY;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  locations
    .slice()
    .sort((a, b) => a.y - b.y)
    .forEach((location) => {
      drawCampusBuilding(location, centerX, centerY + 60);
      drawNpc(location, centerX, centerY + 60);
    });

  Array.from({ length: isCompact ? 6 : 10 }).forEach((_, i, towers) => drawTower((i / towers.length) * Math.PI * 2, 1.2 + i * 0.15, centerX, centerY, isCompact ? 170 : 285));

  const botY = centerY - 72 + Math.sin(time * 0.003) * 14;
  drawBot(centerX, botY, isCompact);

  if (weatherMode === 'Rain') {
    ctx.strokeStyle = 'rgba(43, 255, 136, 0.4)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 80; i += 1) {
      const x = (i * 83 + time * 0.06) % width;
      const y = (i * 47 + time * 0.5) % height;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 8, y + 18);
      ctx.stroke();
    }
  }
}

/* ---------- Main loop: delta-time stepping + FPS meter ---------- */
let lastTime = performance.now();
let fpsAccum = 0;
let fpsFrames = 0;
let fpsTimer = 0;

function frame(now) {
  const dtMs = Math.min(now - lastTime, 100);
  lastTime = now;
  const step = dtMs / 16.6667; // 1.0 == one 60fps frame

  updatePlayer(step);
  drawWorld(now);

  if (!prefersReducedMotion) {
    spin += 0.008 * step;
  }

  // Smoothed FPS readout, refreshed ~4x/second.
  fpsAccum += dtMs;
  fpsFrames += 1;
  fpsTimer += dtMs;
  if (fpsTimer >= 250) {
    const fps = Math.round(1000 / (fpsAccum / fpsFrames));
    if (els.fps) els.fps.textContent = String(fps);
    fpsAccum = 0;
    fpsFrames = 0;
    fpsTimer = 0;
  }

  requestAnimationFrame(frame);
}

window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (event) => {
  prefersReducedMotion = event.matches;
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
renderLesson();
requestAnimationFrame(frame);
