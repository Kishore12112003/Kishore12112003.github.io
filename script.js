/* =========================================================
   Kishore KV portfolio — interactions + work showcase
   Edit the PROJECTS, SKILLS, CREDENTIALS and TESTIMONIALS
   lists below to update the site.
   ========================================================= */

const C = { cream: "#f4ead9", c2: "#efe2cb", o: "#c4572f", o2: "#db7442", ol: "#6b6845", ol2: "#57553a", ink: "#1e1a16", ink2: "#2a241f", grey: "#8a8276" };

/* ---------------- DATA ---------------- */
const PROJECTS = [
  {
    slug: "techster-ai-ops", art: "ops", featured: true,
    title: "AI Ops Tool & Website", client: "Techster IT Service", year: "2024–25",
    role: "Freelance AI & cloud consultant", duration: "Client engagement",
    types: ["AI / ML", "Web", "Cloud"], industry: "IT services",
    skills: ["AI APIs", "AWS", "HTML/CSS", "JavaScript", "UI/UX"],
    summary: "A new company website plus an AI-powered tool that helps the team manage its software operations, built and hosted on AWS.",
    challenge: "Techster IT Service needed a modern web presence and a smarter way to manage its day-to-day software operations.",
    approach: ["Mapped the operations the team handles and where AI could help", "Designed the website and the tool's interface", "Built the AI-powered tool on top of AI model APIs", "Deployed and hosted both on AWS"],
    outcome: "Techster now runs a new company website and an AI-powered operations tool, both hosted on AWS.",
    flow: ["Team request", "AI model", "Ops tool", "Hosted on AWS"],
    before: "Software operations handled by hand", after: "AI-assisted operations tool + live website",
    links: [], testimonial: null,
  },
  {
    slug: "n8n-automation", art: "flow",
    title: "AI Workflow Automation", client: "Freelance clients", year: "2024–25",
    role: "Automation engineer", duration: "Ongoing",
    types: ["Automation", "AI / ML"], industry: "Small business",
    skills: ["n8n", "AI APIs"],
    summary: "Business workflows automated in n8n, connecting AI models with the tools clients already use.",
    challenge: "Repetitive tasks were eating into clients' time, with information moved between tools by hand.",
    approach: ["Found the repetitive steps worth automating", "Built n8n workflows with triggers, AI steps and actions", "Connected AI models to the client's existing tools", "Handed over workflows that run on their own"],
    outcome: "Recurring tasks now run automatically through n8n, with AI handling steps that used to need a person.",
    flow: ["Trigger", "n8n workflow", "AI step", "Client tools"],
    before: "Copy-paste between apps", after: "Workflows that run on their own",
    links: [], testimonial: null,
  },
  {
    slug: "course-recommender", art: "rec", featured: true,
    title: "Smart Course Recommender", client: "ECE Paris · team project", year: "2025",
    role: "Project manager", duration: "6 weeks",
    types: ["AI / ML", "Web"], industry: "Education",
    skills: ["Python", "Machine learning", "HTML/CSS", "SQL"],
    summary: "A recommendation system that matches courses to each student's skills, interests and goals.",
    challenge: "Students struggle to find relevant learning content because there are so many resources to choose from.",
    approach: ["Week 1: planning, scope and risks (dataset issues, time limits, accuracy)", "Week 2: designed user profiles, the UI and the feedback loop", "Weeks 3–5: built content-based and collaborative filtering", "Week 6: testing and final report"],
    outcome: "A working system (UI, backend and report) that gives each user personalised course recommendations.",
    flow: ["User profile", "Content-based filtering", "Collaborative filtering", "Ranked courses", "Feedback"],
    before: "One long list of courses for everyone", after: "Personalised picks for each student",
    links: [{ label: "View project charter", href: "assets/certificates/course-recommender-charter.pdf" }], testimonial: null,
  },
  {
    slug: "fish-farm-iot", art: "fish", featured: true,
    title: "Fish Farm Monitoring", client: "IEEE ICSCAN 2023 · field tested", year: "2023",
    role: "First author · hardware & software", duration: "Research project",
    types: ["IoT", "Research"], industry: "Aquaculture",
    skills: ["Arduino", "Sensors", "IoT"],
    summary: "An Arduino sensor network that tracks water quality and temperature in real time and alerts farmers when values leave the safe range.",
    challenge: "Water quality and temperature can change quickly, and farmers can't watch every pond all the time.",
    approach: ["Connected water-quality and temperature sensors to an Arduino", "Defined safe ranges for each reading", "Built real-time monitoring with alerts when values leave the range", "Tested the system on a commercial fish farm"],
    outcome: "Published as first author at the 2023 IEEE ICSCAN conference (Puducherry, India).",
    flow: ["Water sensors", "Arduino", "Safe-range check", "Farmer alert"],
    before: "Occasional manual checks", after: "Real-time readings + instant alerts",
    links: [{ label: "Read on IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10395013" }], testimonial: null,
  },
  {
    slug: "robotic-vision", art: "vision",
    title: "Robotic Vision Paper", client: "CyberSynapse'23 · DRDO-sponsored", year: "2023",
    role: "Author & presenter", duration: "Conference paper",
    types: ["AI / ML", "Research"], industry: "Robotics research",
    skills: ["Computer vision", "Machine learning"],
    summary: "“Robo Visual System and Object Recognition Techniques”, presented at a DRDO-sponsored national conference.",
    challenge: "Robots need to see and recognise objects reliably before they can act in the real world.",
    approach: ["Studied robot visual systems and object-recognition techniques", "Wrote the paper and presented it at CyberSynapse'23, R.M.D. Engineering College"],
    outcome: "Presented at the DRDO-sponsored national conference CyberSynapse'23 on 7 September 2023.",
    flow: ["Camera", "Visual system", "Object recognition", "Robot action"],
    before: "Raw camera view", after: "Objects detected and labelled",
    links: [{ label: "View certificate", href: "assets/certificates/cybersynapse-23.pdf" }], testimonial: null,
  },
  {
    slug: "restaurant-meta-ads", art: "ads",
    title: "Restaurant Meta Ads", client: "Local restaurants", year: "2024–25",
    role: "Digital marketing consultant", duration: "Campaigns",
    types: ["Marketing"], industry: "Food & hospitality",
    skills: ["Meta Ads", "Social media"],
    summary: "Facebook and Instagram campaigns planned and run for local restaurants.",
    challenge: "Local restaurants needed to reach nearby customers where they spend time: on social media.",
    approach: ["Planned campaigns and local audiences", "Prepared ad creatives", "Ran campaigns on Facebook & Instagram", "Reviewed results and adjusted"],
    outcome: "Each restaurant got planned, targeted Meta campaigns aimed at local customers.",
    flow: ["Local audience", "Ad creative", "Meta campaign", "Review & adjust"],
    before: "Posting without a plan", after: "Planned, targeted campaigns",
    links: [], testimonial: null,
  },
  {
    slug: "ecommerce-site", art: "shop",
    title: "E-commerce Website", client: "Web project", year: "—",
    role: "Designer & developer", duration: "Web build",
    types: ["Web"], industry: "Retail",
    skills: ["HTML/CSS", "JavaScript", "UI/UX"],
    summary: "A responsive shopping website built with HTML, CSS and JavaScript.",
    challenge: "Shoppers expect a store that works as well on a phone as on a laptop.",
    approach: ["Designed the store layout and product pages", "Built it with HTML, CSS and JavaScript", "Made every page responsive"],
    outcome: "A responsive shopping site that works across screen sizes.",
    flow: ["Home", "Catalog", "Product page", "Cart"],
    before: "Desktop-only layout", after: "Responsive on every screen",
    links: [], testimonial: null,
  },
];

// Self-rated out of 7 — adjust freely
const SKILLS = [["Python", 6], ["n8n & automation", 6], ["Machine learning", 5], ["AWS / cloud", 5], ["Figma & UI/UX", 6], ["HTML · CSS · JS", 6], ["SQL", 4], ["Arduino / IoT", 5]];

const CREDENTIALS = [
  ["accenture-product-design", "Product Design Virtual Experience", "Accenture × Forage · 2023"],
  ["coursera-aws-s3", "AWS S3 Basics", "Coursera · 2022"],
  ["aws-value-added-programme", "AWS Value Added Programme", "Velammal Inst. of Technology · 2023"],
  ["tata-data-visualisation", "Data Visualisation for Business", "Tata × Forage · 2023"],
  ["coursera-figma", "Get Started with Figma", "Coursera · 2022"],
  ["growthschool-ux", "UX Kickstarter Workshop", "GrowthSchool"],
  ["graphic-design-ai", "Graphic Design with AI · Distinction", "Artisto Picasso · 2023"],
  ["redbull-sales", "On-Premise Sales Virtual Experience", "Red Bull × Forage · 2023"],
  ["cybersynapse-23", "Paper · CyberSynapse'23 (DRDO)", "R.M.D. Engineering College · 2023"],
  ["quantum-tech-fest-paper", "Paper Presentation · Quantum Tech Fest'23", "SIMATS · 2023"],
  ["quantum-tech-fest-quiz", "Technical Quiz · Quantum Tech Fest'23", "SIMATS · 2023"],
  ["codeathon-23", "State-level 12-hour Codeathon'23", "Prathyusha Engineering College · 2023"],
  ["flipkart-grid-5", "Flipkart GRiD 5.0 · Software Dev Track", "Flipkart × Unstop · 2023"],
  ["srm-gamification-workshop", "Gamification with EdTech Tools", "SRM IST · 2023"],
];

// Add real client quotes here, e.g. { quote: "...", name: "Name", role: "Title, Company", project: "techster-ai-ops" }
const TESTIMONIALS = [];

/* ---------------- HELPERS ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = {
  get(k) { try { return JSON.parse(sessionStorage.getItem(k)) || []; } catch { return []; } },
  set(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- GENERATED ARTWORK ---------------- */
function frame(inner, bg, w = 290, h = 200) {
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="${w}" height="${h}" fill="${bg}"/>${inner}</svg>`;
}
const ART = {
  ops() {
    let g = "";
    for (let i = 0; i < 8; i++) { const y = 122 + i * i * 1.4 + i * 4; g += `<line x1="0" y1="${y}" x2="290" y2="${y}"/>`; }
    for (let x = -330; x <= 620; x += 60) g += `<line x1="145" y1="118" x2="${x}" y2="200"/>`;
    let stars = ""; [[30, 30], [60, 70], [240, 26], [262, 80], [200, 40], [90, 20]].forEach(([x, y]) => (stars += `<circle cx="${x}" cy="${y}" r="1.2" fill="${C.c2}"/>`));
    return frame(`${stars}<circle cx="145" cy="92" r="48" fill="${C.o}"/>
      <rect x="90" y="96" width="110" height="3" fill="${C.ink}"/><rect x="90" y="104" width="110" height="4" fill="${C.ink}"/><rect x="90" y="112" width="110" height="5" fill="${C.ink}"/>
      <rect y="118" width="290" height="82" fill="${C.ink}"/><g stroke="${C.o2}" stroke-width=".8" opacity=".75">${g}</g>`, C.ink);
  },
  flow() {
    let dots = "";
    for (let x = 10; x < 290; x += 20) for (let y = 10; y < 200; y += 20) dots += `<circle cx="${x}" cy="${y}" r=".9" fill="${C.c2}" opacity=".35"/>`;
    const box = (x, ic) => `<rect x="${x}" y="78" width="46" height="46" rx="12" fill="${C.c2}"/>${ic}`;
    return frame(`${dots}<path d="M70 101 H122 M168 101 H220" stroke="${C.c2}" stroke-width="2" stroke-dasharray="4 4"/>
      ${box(24, `<circle cx="47" cy="101" r="10" fill="${C.o}"/>`)}
      ${box(122, `<path d="M145 88l3.5 9.5 9.5 3.5-9.5 3.5-3.5 9.5-3.5-9.5-9.5-3.5 9.5-3.5z" fill="${C.ink}"/>`)}
      ${box(220, `<rect x="233" y="91" width="20" height="20" rx="3" fill="${C.o}"/>`)}
      <circle r="5" cy="101" fill="${C.o2}"><animate attributeName="cx" values="70;220" dur="2.6s" repeatCount="indefinite"/></circle>
      <text x="145" y="160" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="14" fill="${C.c2}" letter-spacing="2">n8n</text>`, C.ol);
  },
  rec() {
    const nodes = [[205, 50], [250, 90], [215, 140], [250, 170], [180, 100]];
    let lines = "", circ = "";
    nodes.forEach(([x, y], i) => { lines += `<line x1="95" y1="100" x2="${x}" y2="${y}"/>`; circ += `<circle cx="${x}" cy="${y}" r="${i === 1 ? 10 : 6}" fill="${i === 1 ? C.o : C.ink}"/>`; });
    return frame(`<g fill="none" stroke="${C.o}" stroke-width="1.4"><circle cx="95" cy="100" r="74"/><circle cx="95" cy="100" r="56"/><circle cx="95" cy="100" r="38"/></g>
      <circle cx="95" cy="100" r="20" fill="${C.o}"/><g stroke="${C.ink}" stroke-width="1" opacity=".5">${lines}</g>${circ}
      <path d="M262 30l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" fill="${C.ink}"/>`, C.c2);
  },
  fish() {
    let waves = "";
    for (let i = 0; i < 6; i++) { const y = 130 + i * 12; waves += `<path d="M0 ${y} Q 36 ${y - 8} 72 ${y} T 145 ${y} T 218 ${y} T 290 ${y}"/>`; }
    return frame(`<circle cx="190" cy="70" r="46" fill="${C.c2}"/><circle cx="174" cy="58" r="7" fill="#d9caa9"/><circle cx="205" cy="84" r="10" fill="#d9caa9"/>
      <g fill="none" stroke="${C.c2}" stroke-width="1" opacity=".55">${waves}</g>
      <path d="M58 150 q32 -24 64 0 q-32 24 -64 0z M122 150 l16 -12 v24z" fill="${C.o}"/><circle cx="74" cy="146" r="2.4" fill="${C.ink}"/>
      <g fill="none" stroke="${C.o2}" stroke-width="1.2"><circle cx="246" cy="150" r="5"><animate attributeName="r" values="4;16;4" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite"/></circle></g>
      <circle cx="246" cy="150" r="3" fill="${C.o2}"/><line x1="246" y1="150" x2="246" y2="200" stroke="${C.o2}"/>`, C.ink);
  },
  vision() {
    const c = C.cream;
    return frame(`<path d="M40 100 Q145 18 250 100 Q145 182 40 100z" fill="${C.ink}"/>
      <circle cx="145" cy="100" r="36" fill="${C.c2}"/><circle cx="145" cy="100" r="22" fill="none" stroke="${C.o}" stroke-width="3"/><circle cx="145" cy="100" r="13" fill="${C.ink}"/><circle cx="139" cy="94" r="4" fill="${c}"/>
      <g stroke="${c}" stroke-width="3" fill="none"><path d="M90 52h-16v16M200 52h16v16M90 148h-16v-16M200 148h16v-16"/></g>
      <rect x="74" y="60" width="142" height="2" fill="${c}" opacity=".8"><animate attributeName="y" values="56;144;56" dur="3s" repeatCount="indefinite"/></rect>`, C.o);
  },
  ads() {
    let dots = "";
    for (let x = 8; x < 290; x += 14) for (let y = 8; y < 200; y += 14) dots += `<circle cx="${x}" cy="${y}" r="${(Math.max(0, 1 - x / 290) * 4 + .4).toFixed(2)}" fill="${C.o}"/>`;
    return frame(`${dots}<rect x="112" y="26" width="72" height="150" rx="14" fill="${C.ink}"/><rect x="118" y="38" width="60" height="118" rx="6" fill="${C.c2}"/>
      <path d="M148 82c-6-10-22-6-18 6 3 8 18 18 18 18s15-10 18-18c4-12-12-16-18-6z" fill="${C.o}"/>
      <rect x="126" y="118" width="44" height="5" rx="2" fill="${C.ol}"/><rect x="126" y="128" width="30" height="5" rx="2" fill="${C.ol}" opacity=".6"/>`, C.cream);
  },
  shop() {
    const arch = (x, w, col) => `<path d="M${x} 200 V${90} a${w / 2} ${w / 2} 0 0 1 ${w} 0 V200z" fill="${col}"/>`;
    return frame(`${arch(26, 64, C.ol)}${arch(110, 70, C.o)}${arch(200, 64, C.c2)}
      <g fill="none" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"><path d="M122 112h10l8 36h30l8-26h-44"/></g>
      <circle cx="146" cy="160" r="5" fill="${C.ink}"/><circle cx="168" cy="160" r="5" fill="${C.ink}"/>
      <circle cx="58" cy="60" r="12" fill="${C.o}"/>`, C.ink2);
  },
};
// Project cover images (AI-generated, in assets/work/<slug>.jpg). The drawn ART above stays as a fallback.
const art = (p) => `<img src="assets/work/${p.slug}.jpg" alt="" loading="lazy" decoding="async" onerror="this.outerHTML=ART['${p.art}']()">`;

function wrap(label, max = 12) {
  const words = label.split(" "); const lines = [""];
  words.forEach((w) => { const l = lines[lines.length - 1]; if ((l + " " + w).trim().length > max && l) lines.push(w); else lines[lines.length - 1] = (l + " " + w).trim(); });
  return lines;
}
function flowSVG(steps) {
  const W = 420, n = steps.length, gap = 18, bw = (W - 40 - gap * (n - 1)) / n;
  let s = "";
  steps.forEach((t, i) => {
    const x = 20 + i * (bw + gap), lines = wrap(t, Math.max(8, Math.floor(bw / 7)));
    s += `<rect x="${x}" y="72" width="${bw}" height="66" rx="12" fill="${i === n - 1 ? C.o : C.card || "#f8f0e3"}" stroke="${C.ink}" stroke-width="1.2"/>`;
    s += `<circle cx="${x + 14}" cy="72" r="10" fill="${C.ink}"/><text x="${x + 14}" y="75.5" text-anchor="middle" font-size="9" font-weight="700" fill="${C.cream}" font-family="Archivo, sans-serif">${i + 1}</text>`;
    lines.forEach((l, j) => (s += `<text x="${x + bw / 2}" y="${105 + (j - (lines.length - 1) / 2) * 13}" text-anchor="middle" font-size="10.5" font-weight="700" fill="${i === n - 1 ? C.cream : C.ink}" font-family="Archivo, sans-serif">${esc(l)}</text>`));
    if (i < n - 1) s += `<path d="M${x + bw + 3} 105 h${gap - 6}" stroke="${C.o}" stroke-width="2" marker-end="url(#ah)"/>`;
  });
  return `<svg viewBox="0 0 ${W} 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><marker id="ah" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3 0 6z" fill="${C.o}"/></marker></defs><rect width="${W}" height="200" fill="${C.c2}"/>
    <text x="20" y="34" font-size="11" font-weight="800" letter-spacing="2" fill="${C.ink}" font-family="Archivo, sans-serif">HOW IT WORKS</text>${s}</svg>`;
}
function stackSVG(skills, types) {
  const all = [...skills, ...types.map((t) => t.toUpperCase())];
  let s = "", x = 20, y = 52;
  all.forEach((t, i) => {
    const w = t.length * 7.4 + 30;
    if (x + w > 400) { x = 20; y += 44; }
    s += `<rect x="${x}" y="${y}" width="${w}" height="32" rx="8" fill="${i < skills.length ? C.ink : C.o}"/><text x="${x + w / 2}" y="${y + 20.5}" text-anchor="middle" font-size="11" font-weight="700" fill="${C.cream}" font-family="Archivo, sans-serif">${esc(t)}</text>`;
    x += w + 10;
  });
  return `<svg viewBox="0 0 420 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><rect width="420" height="200" fill="${C.ol}"/>
    <text x="20" y="34" font-size="11" font-weight="800" letter-spacing="2" fill="${C.c2}" font-family="Archivo, sans-serif">TOOLS &amp; DISCIPLINES</text>${s}</svg>`;
}
function beforeSVG() {
  let notes = "";
  [[60, 50, -8], [150, 80, 6], [250, 46, -4], [320, 96, 9], [100, 120, 4], [210, 128, -7]].forEach(([x, y, r]) => (notes += `<rect x="${x}" y="${y}" width="58" height="44" rx="3" fill="${C.grey}" transform="rotate(${r} ${x + 29} ${y + 22})"/><rect x="${x + 8}" y="${y + 12}" width="34" height="3" fill="#5f594f" transform="rotate(${r} ${x + 29} ${y + 22})"/><rect x="${x + 8}" y="${y + 20}" width="24" height="3" fill="#5f594f" transform="rotate(${r} ${x + 29} ${y + 22})"/>`));
  return `<svg viewBox="0 0 420 200" preserveAspectRatio="xMidYMid slice"><rect width="420" height="200" fill="#3a3530"/>
    <path d="M40 170 C 120 40, 200 200, 260 90 S 380 60, 390 160" fill="none" stroke="#6d665c" stroke-width="2" stroke-dasharray="5 6"/>${notes}
    <text x="380" y="50" font-size="34" font-family="Archivo Black, sans-serif" fill="#6d665c">?</text><text x="30" y="110" font-size="26" font-family="Archivo Black, sans-serif" fill="#6d665c">?</text></svg>`;
}
function afterSVG() {
  let bars = "";
  [30, 46, 40, 62, 74, 88].forEach((h, i) => (bars += `<rect x="${250 + i * 20}" y="${160 - h}" width="12" height="${h}" rx="3" fill="${i === 5 ? C.o : C.ol}"/>`));
  return `<svg viewBox="0 0 420 200" preserveAspectRatio="xMidYMid slice"><rect width="420" height="200" fill="${C.ink}"/>
    <rect x="24" y="20" width="372" height="160" rx="14" fill="${C.c2}"/><rect x="24" y="20" width="70" height="160" rx="14" fill="${C.ink2}"/>
    <circle cx="44" cy="44" r="8" fill="${C.o}"/><rect x="38" y="66" width="40" height="5" rx="2" fill="${C.grey}"/><rect x="38" y="80" width="32" height="5" rx="2" fill="${C.grey}"/><rect x="38" y="94" width="36" height="5" rx="2" fill="${C.grey}"/>
    <rect x="110" y="36" width="120" height="56" rx="10" fill="${C.cream}" stroke="${C.line || "#d8c6a8"}"/><circle cx="130" cy="64" r="11" fill="${C.ol}"/><path d="M125 64l4 4 7-8" stroke="${C.cream}" stroke-width="2.4" fill="none"/>
    <rect x="148" y="56" width="66" height="6" rx="3" fill="${C.ink}"/><rect x="148" y="68" width="44" height="5" rx="2" fill="${C.grey}"/>
    <rect x="110" y="104" width="120" height="60" rx="10" fill="${C.o}"/><polyline points="120,150 145,136 165,142 190,120 220,114" fill="none" stroke="${C.cream}" stroke-width="2.5"/>
    ${bars}<line x1="244" y1="160" x2="380" y2="160" stroke="${C.ink}" stroke-width="1"/></svg>`;
}

/* ---------------- BASIC UI ---------------- */
$("#year").textContent = new Date().getFullYear();

const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
const observeReveals = (root = document) => $$(".reveal:not(.in)", root).forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
observeReveals();

// mobile menu
const burger = $(".burger"), menu = $("#menu");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
$$("#menu a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }));

// scroll spy
const spyLinks = $$("#menu a");
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const id = e.target.id === "top" ? "top" : e.target.id;
  spyLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + id));
}), { rootMargin: "-45% 0px -50% 0px" });
["about", "services", "work", "experience", "credentials", "contact"].forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && spyLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#top"))), { rootMargin: "-45% 0px -50% 0px" }).observe($(".hero"));

// skills
$("#skillList").innerHTML = SKILLS.map(([n, v]) => `<li><span>${esc(n)}</span><span class="rating" aria-label="${v} out of 7">${Array.from({ length: 7 }, (_, i) => `<i class="${i < v ? "f" : ""}" style="transition-delay:${i * 60}ms"></i>`).join("")}</span></li>`).join("");

/* ---------------- WORK SHOWCASE ---------------- */
const state = { type: "All", industry: "All", skill: "All" };
const TYPES = ["All", ...new Set(PROJECTS.flatMap((p) => p.types))];
const INDUSTRIES = ["All", ...new Set(PROJECTS.map((p) => p.industry))].sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)));
const SKILL_OPTS = ["All", ...new Set(PROJECTS.flatMap((p) => p.skills))].sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)));
const grid = $("#workGrid");

$("#typeChips").innerHTML = TYPES.map((t) => `<button aria-pressed="${t === "All"}" data-t="${esc(t)}">${esc(t)}<sup>${t === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.types.includes(t)).length}</sup></button>`).join("");
$("#fIndustry").innerHTML = INDUSTRIES.map((i) => `<option>${esc(i)}</option>`).join("");
$("#fSkill").innerHTML = SKILL_OPTS.map((i) => `<option>${esc(i)}</option>`).join("");

const matches = (p) => (state.type === "All" || p.types.includes(state.type)) && (state.industry === "All" || p.industry === state.industry) && (state.skill === "All" || p.skills.includes(state.skill));
const visible = () => PROJECTS.filter(matches);

function cardHTML(p, viewed) {
  return `<button class="wcard out" data-slug="${p.slug}" aria-label="Open case study: ${esc(p.title)}">
    <div class="art">${art(p)}<span class="play">▶</span>${p.featured ? '<span class="badge-new">Featured</span>' : ""}${viewed.includes(p.slug) ? '<span class="seen">Viewed</span>' : ""}</div>
    <h3>${esc(p.title)}</h3><p>${esc(p.client)} · ${esc(p.industry)}</p>
    <div class="tags">${p.types.map((t) => `<span>${esc(t)}</span>`).join("")}</div></button>`;
}
let renderTimer;
function renderGrid(animate = true) {
  const list = visible(), viewed = store.get("kv-viewed");
  $$(".wcard", grid).forEach((c) => c.classList.add("out"));
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => {
    grid.innerHTML = list.map((p) => cardHTML(p, viewed)).join("");
    requestAnimationFrame(() => $$(".wcard", grid).forEach((c, i) => setTimeout(() => c.classList.remove("out"), reduced ? 0 : i * 60)));
    $("#workEmpty").hidden = list.length > 0;
    $("#workCount").textContent = `${list.length} of ${PROJECTS.length} projects`;
    $("#fReset").hidden = state.type === "All" && state.industry === "All" && state.skill === "All";
  }, animate && !reduced ? 260 : 0);
}
function setFilter(k, v) {
  state[k] = v;
  if (k === "type") $$("#typeChips button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.t === v));
  if (k === "industry") $("#fIndustry").value = v;
  if (k === "skill") $("#fSkill").value = v;
  renderGrid();
}
function resetFilters() { state.type = state.industry = state.skill = "All"; $$("#typeChips button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.t === "All")); $("#fIndustry").value = "All"; $("#fSkill").value = "All"; renderGrid(); }
$("#typeChips").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setFilter("type", b.dataset.t); });
$("#fIndustry").addEventListener("change", (e) => setFilter("industry", e.target.value));
$("#fSkill").addEventListener("change", (e) => setFilter("skill", e.target.value));
$("#fReset").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);
grid.addEventListener("click", (e) => { const c = e.target.closest(".wcard"); if (c) openCase(c.dataset.slug); });
$$(".svc-go").forEach((a) => a.addEventListener("click", () => { state.industry = state.skill = "All"; $("#fIndustry").value = "All"; $("#fSkill").value = "All"; setFilter("type", a.dataset.filterType); }));
renderGrid(false);

// related-work scoring
function related(p, n = 3, exclude = []) {
  return PROJECTS.filter((q) => q.slug !== p.slug && !exclude.includes(q.slug))
    .map((q) => ({ q, s: q.types.filter((t) => p.types.includes(t)).length * 3 + (q.industry === p.industry ? 2 : 0) + q.skills.filter((s) => p.skills.includes(s)).length + (q.featured ? 0.5 : 0) }))
    .sort((a, b) => b.s - a.s).slice(0, n).map((x) => x.q);
}
const miniHTML = (q, why) => `<button class="mini" data-slug="${q.slug}"><span class="art">${art(q)}</span><span><b>${esc(q.title)}</b><small>${esc(why)}</small></span></button>`;
function reason(p, q) {
  const t = q.types.find((x) => p.types.includes(x)); if (t) return `Also ${t}`;
  const s = q.skills.find((x) => p.skills.includes(x)); if (s) return `Also uses ${s}`;
  return q.featured ? "Featured project" : q.industry;
}
function renderRecs() {
  const viewed = store.get("kv-viewed"), box = $("#recs");
  if (!viewed.length) {
    const picks = PROJECTS.filter((p) => p.featured);
    $("#recsTitle").innerHTML = "Not sure where to start? <b>Try these first</b>";
    $("#recsRow").innerHTML = picks.map((q) => miniHTML(q, q.client)).join("");
  } else {
    const last = PROJECTS.find((p) => p.slug === viewed[viewed.length - 1]);
    const recs = related(last, 3, viewed);
    if (!recs.length) { box.hidden = true; return; }
    $("#recsTitle").innerHTML = `Because you viewed <b>${esc(last.title)}</b>`;
    $("#recsRow").innerHTML = recs.map((q) => miniHTML(q, reason(last, q))).join("");
  }
  box.hidden = false; observeReveals(box.parentElement);
}
$("#recsRow").addEventListener("click", (e) => { const b = e.target.closest(".mini"); if (b) openCase(b.dataset.slug); });
renderRecs();

/* ---------------- CASE STUDY ---------------- */
const dlg = $("#case"), inner = $("#caseInner");
let current = null;

function caseHTML(p) {
  const list = visible().length ? visible() : PROJECTS;
  const idx = list.findIndex((q) => q.slug === p.slug);
  const prev = list[(idx - 1 + list.length) % list.length] || PROJECTS[0];
  const next = list[(idx + 1) % list.length] || PROJECTS[0];
  const rel = related(p);
  const slides = [[art(p), "Cover · AI-generated image"], [flowSVG(p.flow), "How it works"], [stackSVG(p.skills, p.types), "Stack & disciplines"]];
  return `
  <div class="case-top">
    <span class="crumb">Case study · ${idx + 1} / ${list.length}</span>
    <button class="icon-btn" data-go="${prev.slug}" aria-label="Previous project">←</button>
    <button class="icon-btn" data-go="${next.slug}" aria-label="Next project">→</button>
    <button class="icon-btn" data-close aria-label="Close case study">✕</button>
  </div>
  <div class="case-hero">
    <div class="art">${art(p)}</div>
    <div>
      <p class="case-kicker">${esc(p.types.join(" · "))}</p>
      <h2 id="caseTitle">${esc(p.title)}</h2>
      <p class="case-sum">${esc(p.summary)}</p>
      <dl class="facts">
        <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Industry</dt><dd>${esc(p.industry)}</dd></div>
        <div><dt>When</dt><dd>${esc(p.year === "—" ? p.duration : p.year + " · " + p.duration)}</dd></div>
      </dl>
    </div>
  </div>
  <div class="case-body">
    <section class="case-sec"><h4>The story</h4>
      <details class="xp" open><summary><span class="n">01</span>The challenge</summary><div class="xp-body"><p>${esc(p.challenge)}</p></div></details>
      <details class="xp"><summary><span class="n">02</span>What I did</summary><div class="xp-body"><ul>${p.approach.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></div></details>
      <details class="xp"><summary><span class="n">03</span>The result</summary><div class="xp-body"><p>${esc(p.outcome)}</p></div></details>
    </section>

    <section class="case-sec"><h4>Before / after</h4>
      <div class="ba" style="--pos:50%">
        ${afterSVG()}
        <div class="before">${beforeSVG()}</div>
        <span class="lab l">Before</span><span class="lab r">After</span>
        <span class="handle"></span>
        <input type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after">
      </div>
      <div class="ba-cap"><div><b>Before</b>${esc(p.before)}</div><div><b>After</b>${esc(p.after)}</div></div>
      <p class="note-small">Drag the slider to compare. Illustrations, not screenshots.</p>
    </section>

    <section class="case-sec"><h4>Gallery</h4>
      <div class="gal" data-i="0">
        <div class="gal-track">${slides.map(([s, cap]) => `<figure class="gal-slide">${s}<figcaption>${cap}</figcaption></figure>`).join("")}</div>
        <button class="icon-btn gal-btn prev" aria-label="Previous slide">←</button>
        <button class="icon-btn gal-btn next" aria-label="Next slide">→</button>
      </div>
      <div class="gal-dots">${slides.map((_, i) => `<button aria-label="Slide ${i + 1}" aria-current="${i === 0}"></button>`).join("")}</div>
    </section>

    <section class="case-sec"><h4>Tools</h4><div class="stack-tags">${p.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div></section>

    ${p.testimonial ? `<section class="case-sec"><h4>Client words</h4><blockquote class="case-quote"><q>${esc(p.testimonial.quote)}</q><p>— ${esc(p.testimonial.name)}, ${esc(p.testimonial.role)}</p></blockquote></section>` : ""}

    ${p.links.length ? `<section class="case-sec"><h4>Links</h4><div class="case-links">${p.links.map((l) => `<a class="pill pill-orange small" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} <i class="arrow">↗</i></a>`).join("")}</div></section>` : ""}

    <div class="case-cta"><p>Want something like this?</p><a href="#contact" class="pill pill-orange" data-hire="${esc(p.title)}">Start a project <i class="arrow">→</i></a></div>

    <section class="case-sec"><h4>You might also like</h4><div class="recs-row">${rel.map((q) => miniHTML(q, reason(p, q))).join("")}</div></section>

    <div class="case-nav">
      <button data-go="${prev.slug}"><small>← Previous</small><b>${esc(prev.title)}</b></button>
      <button data-go="${next.slug}"><small>Next →</small><b>${esc(next.title)}</b></button>
    </div>
  </div>`;
}

function wireCase() {
  // before/after slider
  const ba = $(".ba", inner), range = $("input", ba);
  range.addEventListener("input", () => ba.style.setProperty("--pos", range.value + "%"));
  // gallery
  const gal = $(".gal", inner), track = $(".gal-track", gal), dots = $$(".gal-dots button", inner), n = dots.length;
  const go = (i) => { i = (i + n) % n; gal.dataset.i = i; track.style.transform = `translateX(-${i * 100}%)`; dots.forEach((d, j) => d.setAttribute("aria-current", j === i)); };
  $(".prev", gal).addEventListener("click", () => go(+gal.dataset.i - 1));
  $(".next", gal).addEventListener("click", () => go(+gal.dataset.i + 1));
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
  let x0 = null;
  track.addEventListener("pointerdown", (e) => (x0 = e.clientX));
  track.addEventListener("pointerup", (e) => { if (x0 === null) return; const dx = e.clientX - x0; if (Math.abs(dx) > 40) go(+gal.dataset.i + (dx < 0 ? 1 : -1)); x0 = null; });
}

function openCase(slug, push = true) {
  const p = PROJECTS.find((q) => q.slug === slug);
  if (!p) return;
  current = p;
  inner.innerHTML = caseHTML(p);
  inner.scrollTop = 0;
  wireCase();
  if (!dlg.open) { dlg.showModal(); document.body.classList.add("locked"); }
  $("[data-close]", inner).focus({ preventScroll: true });
  const viewed = store.get("kv-viewed").filter((s) => s !== slug); viewed.push(slug); store.set("kv-viewed", viewed);
  if (push) history.replaceState(null, "", "#work/" + slug);
}
function closeCase() { if (dlg.open) dlg.close(); }
dlg.addEventListener("close", () => {
  document.body.classList.remove("locked");
  history.replaceState(null, "", "#work");
  renderGrid(false); renderRecs();
  const card = $(`.wcard[data-slug="${current?.slug}"]`);
  setTimeout(() => card?.focus({ preventScroll: true }), 300);
});
inner.addEventListener("click", (e) => {
  const t = e.target.closest("[data-go],[data-close],.mini,[data-hire]");
  if (!t) return;
  if (t.matches("[data-close]")) closeCase();
  else if (t.matches("[data-go]")) openCase(t.dataset.go);
  else if (t.matches(".mini")) openCase(t.dataset.slug);
  else if (t.matches("[data-hire]")) {
    closeCase();
    const f = $("#contactForm");
    f.msg.value = `Hi Kishore, I saw your "${t.dataset.hire}" project and I'd like something similar. `;
  }
});
dlg.addEventListener("click", (e) => { if (e.target === dlg) closeCase(); });
dlg.addEventListener("keydown", (e) => {
  if (e.target.matches("input,textarea,select")) return;
  if (e.key === "ArrowRight") $("[data-go]:nth-of-type(2)", inner)?.click();
  if (e.key === "ArrowLeft") $("[data-go]", inner)?.click();
});
// deep link: #work/<slug>
const fromHash = () => { const m = location.hash.match(/^#work\/(.+)$/); if (m) openCase(decodeURIComponent(m[1]), false); };
addEventListener("hashchange", fromHash);
fromHash();

/* ---------------- CREDENTIALS ---------------- */
const credRow = $("#credRow"), SHOW = 5;
credRow.innerHTML = CREDENTIALS.map(([f, t, by], i) => `<a class="cred" href="assets/certificates/${f}.pdf" target="_blank" rel="noopener" ${i >= SHOW ? "hidden" : ""}>
  <img src="assets/certificates/${f}.jpg" alt="${esc(t)} certificate" loading="lazy"><b>${esc(t)}</b><span>${esc(by)}</span></a>`).join("");
$("#credToggle").addEventListener("click", (e) => {
  const btn = e.currentTarget, open = btn.getAttribute("aria-expanded") !== "true";
  $$(".cred", credRow).forEach((c, i) => (c.hidden = !open && i >= SHOW));
  btn.setAttribute("aria-expanded", open);
  btn.firstChild.textContent = open ? "Show less " : "View all ";
});

/* ---------------- KIND WORDS ---------------- */
$("#wordsGrid").innerHTML = TESTIMONIALS.length
  ? TESTIMONIALS.map((t) => `<figure class="quote reveal"><q>${esc(t.quote)}</q><figcaption class="who"><i>${esc(t.name.split(" ").map((w) => w[0]).join("").slice(0, 2))}</i><span><b>${esc(t.name)}</b><small>${esc(t.role)}</small></span></figcaption></figure>`).join("")
  : `<div class="quote ask reveal" style="grid-column:1/-1"><q>Client testimonials are on their way.</q><p>Worked with me on a project? I'd love to feature a few words from you here.</p>
     <a href="mailto:kishorekv1211@gmail.com?subject=A%20few%20kind%20words" class="pill-link">Share your words <i class="ring">▸</i></a></div>`;
observeReveals($("#words"));

/* ---------------- CONTACT ---------------- */
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.currentTarget;
  const subject = `Project enquiry: ${f.type.value} — ${f.name.value}`;
  location.href = `mailto:kishorekv1211@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(f.msg.value + "\n\n— " + f.name.value)}`;
});
