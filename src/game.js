const courseData = {
  Spanish: {
    tutor: 'Profesora Nova',
    color: 0xff6b6b,
    lessons: [
      { title: 'Greetings', body: 'Start conversations with warm, common greetings.', native: 'Hello', target: 'Hola', options: ['Hola', 'Adiós', 'Gracias'] },
      { title: 'Gratitude', body: 'Show appreciation in everyday situations.', native: 'Thank you', target: 'Gracias', options: ['Por favor', 'Gracias', 'Buenos días'] },
      { title: 'Introductions', body: 'Tell someone your name with confidence.', native: 'My name is...', target: 'Me llamo...', options: ['Me llamo...', 'Hasta luego', 'Lo siento'] }
    ]
  },
  Japanese: {
    tutor: 'Sensei Nova',
    color: 0x7c5cff,
    lessons: [
      { title: 'Greetings', body: 'Practice polite phrases used when meeting people.', native: 'Hello', target: 'Konnichiwa', options: ['Arigatō', 'Konnichiwa', 'Sayonara'] },
      { title: 'Gratitude', body: 'Thank classmates and shopkeepers naturally.', native: 'Thank you', target: 'Arigatō', options: ['Arigatō', 'Ohayō', 'Hai'] },
      { title: 'Yes and No', body: 'Answer simple AI NPC questions quickly.', native: 'Yes', target: 'Hai', options: ['Iie', 'Hai', 'Sumimasen'] }
    ]
  },
  French: {
    tutor: 'Professeure Nova',
    color: 0x35d0ba,
    lessons: [
      { title: 'Greetings', body: 'Enter the academy cafe with a friendly greeting.', native: 'Hello', target: 'Bonjour', options: ['Merci', 'Bonjour', 'Bonsoir'] },
      { title: 'Courtesy', body: 'Make requests politely during class activities.', native: 'Please', target: "S'il vous plaît", options: ['Au revoir', "S'il vous plaît", 'Salut'] },
      { title: 'Goodbyes', body: 'End conversations with the right farewell.', native: 'Goodbye', target: 'Au revoir', options: ['Au revoir', 'Oui', 'Merci'] }
    ]
  }
};

let selectedLanguage = 'Spanish';
let lessonIndex = 0;
let xp = 0;
let streak = 0;
let activeZone = 'vocab';

const els = {
  languageSelect: document.querySelector('#languageSelect'),
  xp: document.querySelector('#xp'),
  streak: document.querySelector('#streak'),
  level: document.querySelector('#level'),
  lessonTitle: document.querySelector('#lessonTitle'),
  lessonBody: document.querySelector('#lessonBody'),
  nativePhrase: document.querySelector('#nativePhrase'),
  targetPhrase: document.querySelector('#targetPhrase'),
  nextLesson: document.querySelector('#nextLesson'),
  npcName: document.querySelector('#npcName'),
  npcDialogue: document.querySelector('#npcDialogue'),
  question: document.querySelector('#question'),
  answers: document.querySelector('#answers'),
  feedback: document.querySelector('#feedback')
};

Object.keys(courseData).forEach((language) => {
  const option = document.createElement('option');
  option.value = language;
  option.textContent = language;
  els.languageSelect.append(option);
});

function getLesson() {
  return courseData[selectedLanguage].lessons[lessonIndex];
}

function renderLesson() {
  const course = courseData[selectedLanguage];
  const lesson = getLesson();
  els.lessonTitle.textContent = `${lesson.title} · ${activeZone}`;
  els.lessonBody.textContent = lesson.body;
  els.nativePhrase.textContent = lesson.native;
  els.targetPhrase.textContent = lesson.target;
  els.npcName.textContent = course.tutor;
  els.question.textContent = `Translate “${lesson.native}” into ${selectedLanguage}`;
  els.answers.replaceChildren();
  lesson.options.forEach((answer) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => answerQuiz(answer));
    els.answers.append(button);
  });
  els.feedback.textContent = '';
  updateStats();
  updateWorldColor(course.color);
}

function answerQuiz(answer) {
  const lesson = getLesson();
  const isCorrect = answer === lesson.target;
  if (isCorrect) {
    streak += 1;
    xp += 15 + streak * 2;
    els.feedback.textContent = `Correct! ${courseData[selectedLanguage].tutor} unlocked bonus XP.`;
    els.feedback.className = 'feedback good';
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
}

function updateStats() {
  els.xp.textContent = xp;
  els.streak.textContent = streak;
  els.level.textContent = Math.floor(xp / 100) + 1;
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

document.querySelectorAll('[data-zone]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-zone]').forEach((zoneButton) => zoneButton.classList.remove('active'));
    button.classList.add('active');
    activeZone = button.dataset.zone;
    renderLesson();
  });
});


const canvas = document.querySelector('#world');
const ctx = canvas.getContext('2d');
let worldHue = '#ff6b6b';
let spin = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function hexToCss(color) {
  return `#${color.toString(16).padStart(6, '0')}`;
}

function updateWorldColor(color) {
  worldHue = hexToCss(color);
}

function project(point, centerX, centerY) {
  const depth = 7 + point.z;
  const scale = 760 / depth;
  return { x: centerX + point.x * scale, y: centerY - point.y * scale, scale };
}

function drawTower(angle, height, centerX, centerY) {
  const radius = 2.8;
  const x = Math.cos(angle + spin) * radius;
  const z = Math.sin(angle + spin) * radius;
  const base = project({ x, y: -1, z }, centerX, centerY);
  const top = project({ x, y: height, z }, centerX, centerY);
  const width = Math.max(18, 70 * base.scale / 120);
  const gradient = ctx.createLinearGradient(base.x - width, top.y, base.x + width, base.y);
  gradient.addColorStop(0, 'rgba(141, 232, 255, 0.35)');
  gradient.addColorStop(1, 'rgba(124, 92, 255, 0.85)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(top.x - width * 0.45, top.y);
  ctx.lineTo(top.x + width * 0.45, top.y + 10);
  ctx.lineTo(base.x + width, base.y);
  ctx.lineTo(base.x - width, base.y - 12);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.25)';
  ctx.stroke();
}

function drawWorld() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width / 2;
  const centerY = height / 2 + 70;
  ctx.clearRect(0, 0, width, height);

  const sky = ctx.createRadialGradient(centerX, height * 0.34, 80, centerX, centerY, height);
  sky.addColorStop(0, 'rgba(51, 77, 160, 0.95)');
  sky.addColorStop(1, '#07111f');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(centerX, centerY + 95);
  ctx.rotate(spin * 0.18);
  ctx.fillStyle = 'rgba(29, 43, 83, 0.95)';
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * Math.PI * 2;
    const x = Math.cos(a) * 310;
    const y = Math.sin(a) * 110;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  Array.from({ length: 8 }).forEach((_, i) => drawTower((i / 8) * Math.PI * 2, 1.2 + i * 0.15, centerX, centerY));

  const botY = centerY - 115 + Math.sin(Date.now() * 0.003) * 14;
  ctx.shadowColor = worldHue;
  ctx.shadowBlur = 35;
  ctx.fillStyle = worldHue;
  ctx.beginPath();
  ctx.arc(centerX, botY, 58, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillRect(centerX - 25, botY - 8, 14, 12);
  ctx.fillRect(centerX + 11, botY - 8, 14, 12);
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.beginPath();
  ctx.arc(centerX, botY + 8, 22, 0.15, Math.PI - 0.15);
  ctx.stroke();
  spin += 0.008;
  requestAnimationFrame(drawWorld);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
renderLesson();
drawWorld();
