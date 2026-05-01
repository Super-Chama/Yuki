// ── DECREES ───────────────────────────────────────────────────
const DECREES = [
  { emoji: '😴', activity: 'sleeping',            detail: 'specifically in the exact spot you need to sit.',                      photo: 0 },
  { emoji: '🏃', activity: 'zoomies',             detail: 'cause: unknown. destination: unknown. eta: never.',                    photo: 1 },
  { emoji: '🍽️', activity: 'demanding food',      detail: 'the bowl is 15% empty. this is a crisis.',                            photo: 2 },
  { emoji: '📦', activity: 'sitting in a box',    detail: 'a box appeared. there was no choice.',                                photo: 3 },
  { emoji: '🪟', activity: 'window surveillance', detail: 'a leaf moved outside. she is watching it very closely.',               photo: 0 },
  { emoji: '☀️', activity: 'sunbeam research',    detail: 'optimal thermal coordinates identified and occupied.',                 photo: 1 },
  { emoji: '💻', activity: 'keyboard assistance', detail: 'hjkjkjkkkk (peer reviewed, published in Nature).',                    photo: 2 },
  { emoji: '😤', activity: 'judging you',         detail: 'you know what you did.',                                              photo: 3 },
  { emoji: '🌙', activity: '3am zoomies',         detail: 'it is 3am. this is fine. everyone is fine.',                          photo: 0 },
  { emoji: '🍞', activity: 'being a loaf',        detail: 'paws tucked. perfectly round. maximum bread energy achieved.',        photo: 1 },
  { emoji: '🎯', activity: 'gravity testing',     detail: 'primary test subject: your water glass. result: the floor.',          photo: 2 },
  { emoji: '😌', activity: 'receiving adoration', detail: 'you may pet her now. for exactly 2.5 seconds. then stop.',            photo: 3 },
];



// ── MOODS ─────────────────────────────────────────────────────
const MOODS = [
  { emoji: '😑', text: 'judging you' },
  { emoji: '😴', text: 'extremely sleepy' },
  { emoji: '😤', text: 'mildly annoyed' },
  { emoji: '🥰', text: 'accepting pets' },
  { emoji: '😾', text: 'deeply offended' },
  { emoji: '😻', text: 'dangerously cute' },
  { emoji: '🙄', text: 'unimpressed' },
  { emoji: '😼', text: 'plotting something' },
  { emoji: '😹', text: 'chaotic energy' },
  { emoji: '😇', text: 'suspiciously good' },
];

// ── FUN FACTS ─────────────────────────────────────────────────
const FACTS = [
  'Yuki has never done anything wrong. Ever. In her life.',
  'Persian cats have existed for over 125 years. Yuki considers herself responsible for this.',
  '"Yuki" (雪) means snow in Japanese. She is exactly as cold and as beautiful.',
  'Scientists estimate cats sleep up to 16 hours a day. Yuki considers this a conservative estimate.',
  'Yuki\'s whiskers are calibrated to determine if a space is worth entering.',
  'Yuki holds a degree in Sitting There Looking Pretty (STLP, Hons).',
  'The sound of a treat bag can be detected from 3 floors away, through a closed door, while asleep.',
  'Yuki\'s purr vibrates at clinically therapeutic frequencies. She charges for this service.',
  'Persian cats were historically kept by royalty. Yuki has not forgotten this.',
  'In a 2026 poll, 100% of respondents agreed Yuki is "extremely, almost dangerously fluffy".',
  'Yuki does not fetch. Yuki does not come when called. Yuki appears when she decides.',
  'Yuki is a meteorological event: pristine, silent, and capable of making things very cold if dinner is late.',
];

// ── PHOTOS ────────────────────────────────────────────────────
const PHOTOS = [
  { src: 'web_assets/images/20260401_005005.webp?v=1', caption: 'in repose',        rot: -2   },
  { src: 'web_assets/images/20260401_005011.webp?v=1', caption: 'surveillance',     rot:  2   },
  { src: 'web_assets/images/20260413_073158.webp?v=1', caption: 'the morning loaf', rot: -1   },
  { src: 'web_assets/images/20260413_073204.webp?v=1', caption: 'peak floof',       rot:  2.5 },
  { src: 'web_assets/images/20260413_073208.webp?v=1', caption: 'judging u',        rot: -3   },
  { src: 'web_assets/images/20260413_073212.webp?v=1', caption: 'sunbeam hours',    rot:  1   },
  { src: 'web_assets/images/20260413_073246.webp?v=1', caption: 'royal portrait',   rot: -1.5 },
  { src: 'web_assets/images/20260413_073300.webp?v=1', caption: 'vibing intensely', rot:  2.2 },
];

// ══════════════════════════════════════════════════════════════
//  ORACLE
// ══════════════════════════════════════════════════════════════
function issueDecree() {
  const d      = DECREES[Math.floor(Math.random() * DECREES.length)];
  const statEl   = document.getElementById('sidebarStatus');
  const statElM  = document.getElementById('sidebarStatusMobile');
  const topEl    = document.getElementById('topBarStatus');
  const heroEl   = document.getElementById('heroStatus');
  if (statEl)  statEl.textContent  = d.activity;
  if (statElM) statElM.textContent = d.activity;
  if (topEl)   topEl.textContent   = 'STATUS: ' + d.activity.toUpperCase();
  if (heroEl)  heroEl.textContent  = (d.emoji + ' ' + d.activity).toUpperCase();
}
document.getElementById('oracleBtn') && document.getElementById('oracleBtn').addEventListener('click', issueDecree);
issueDecree();

// ══════════════════════════════════════════════════════════════
//  MOOD
// ══════════════════════════════════════════════════════════════
const mood = MOODS[Math.floor(Math.random() * MOODS.length)];
document.getElementById('moodEmoji').textContent = mood.emoji;
document.getElementById('moodText').textContent  = mood.text;

// ══════════════════════════════════════════════════════════════
//  FUN FACTS
// ══════════════════════════════════════════════════════════════
let factIdx = Math.floor(Math.random() * FACTS.length);
function showFact() {
  document.getElementById('funFact').textContent = FACTS[factIdx];
  factIdx = (factIdx + 1) % FACTS.length;
}
document.getElementById('nextFact').addEventListener('click', showFact);
showFact();

// ══════════════════════════════════════════════════════════════
//  PHOTO WALL
// ══════════════════════════════════════════════════════════════
(function buildPhotoWall() {
  const wall = document.getElementById('photoWall');
  PHOTOS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'polaroid';
    card.style.setProperty('--rot', p.rot + 'deg');
    card.innerHTML = `<img src="${p.src}" alt="${p.caption}" loading="lazy"/><span class="polaroid-caption">${p.caption}</span>`;
    wall.appendChild(card);
  });
})();

// ══════════════════════════════════════════════════════════════
//  VISITOR COUNTER  (Cloudflare KV via Pages Function)
// ══════════════════════════════════════════════════════════════
(async () => {
  const countEl = document.getElementById('visitorCount');
  const numEl   = document.getElementById('visitorNum');
  try {
    // POST increments the counter server-side and returns the new value
    const res   = await fetch('/api/counter', { method: 'POST' });
    const { count } = await res.json();
    if (countEl) countEl.textContent = String(count).padStart(6, '0');
    if (numEl)   numEl.textContent   = count;
  } catch {
    // Fallback for local dev (no KV available)
    if (countEl) countEl.textContent = '000000';
    if (numEl)   numEl.textContent   = 0;
  }
})();
