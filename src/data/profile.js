// Everything the site shows lives in this file. Edit here, not in the components.
// Lines marked TODO are optional: anything left as '' is hidden on the site.

export const agent = {
  callsign: 'LynzTighers',
  name: '', // TODO: your real name
  role: 'Full-Stack Developer',
  agentClass: 'Initiator', // Duelist / Initiator / Controller / Sentinel: pick your vibe
  origin: '', // TODO: where you're based
  // Extra rows on the dossier card
  facts: [
    { label: 'Training', value: 'Ohio State, B.S. ECE (Computer Eng.), May 2027' },
    { label: 'Languages', value: 'English, French, Arabic' },
    { label: 'Certification', value: 'AWS Cloud Practitioner (Dec 2026)' },
  ],
  tagline: 'I break things open to see how they work, then build my own.',
  bio: [
    'Developer who learns by shipping: a live bakery site with its own API, a co-op mod for a game I love, and a hardware capstone that has to survive a real chicken coop.',
    'I like the parts other people skip: reading decompiled code, wiring two services together, and writing the README so the next person is not lost.',
  ],
  links: {
    github: 'https://github.com/LynzTighers',
    email: '', // TODO: your contact email
    resume: '', // TODO: link to a PDF, e.g. '/resume.pdf' in public/
  },
}

// Abilities: your four signature strengths, in C / Q / E / X (ultimate) order.
export const abilities = [
  {
    key: 'C',
    name: 'Decompile',
    text: 'Reads compiled game code to find the exact class and method to patch before writing a line.',
  },
  {
    key: 'Q',
    name: 'Split Push',
    text: 'Ships a front end and a separate REST API as two deployments that talk over a real domain.',
  },
  {
    key: 'E',
    name: 'Hardware Link',
    text: 'Connects microcontrollers, sensors and a Pi into one system with clear failure behavior.',
  },
  {
    key: 'X',
    name: 'Full Party',
    text: 'Ultimate: turns a single-player game into a 4-player co-op session over Photon networking.',
    ult: true,
  },
]

// Arsenal: proficiency and usage are 0-100. Tune them honestly; recruiters do ask.
export const arsenal = [
  {
    slot: 'Sidearms',
    note: 'Languages',
    items: [
      { name: 'JavaScript', proficiency: 80, usage: 90, detail: 'Daily driver for front end and Node back ends.' },
      { name: 'TypeScript', proficiency: 65, usage: 65, detail: 'Typed React and Node code.' },
      { name: 'Java', proficiency: 70, usage: 55, detail: 'Coursework: software development, data structures and algorithms.' },
      { name: 'C/C++', proficiency: 60, usage: 45, detail: 'Embedded C and Arduino-framework firmware on the ESP32.' },
      { name: 'C#', proficiency: 50, usage: 60, detail: 'BepInEx/Harmony modding on .NET Framework 4.7.2.' },
      { name: 'Python', proficiency: 55, usage: 45, detail: 'Raspberry Pi side of the capstone: camera and YOLO vision.' },
      { name: 'HTML/CSS', proficiency: 80, usage: 90, detail: 'Responsive layouts, hand-written CSS like this site.' },
    ],
  },
  {
    slot: 'Rifles',
    note: 'Frameworks & libraries',
    items: [
      { name: 'React', proficiency: 75, usage: 85, detail: 'Component UIs, this site included.' },
      { name: 'Next.js', proficiency: 70, usage: 75, detail: 'App Router site for Chez Hayet, deployed on Vercel.' },
      { name: 'Node.js', proficiency: 70, usage: 75, detail: 'Server-side JavaScript behind the bakery API.' },
      { name: 'Express', proficiency: 70, usage: 70, detail: 'REST API with validation, auth middleware and cookies.' },
      { name: 'Tailwind CSS', proficiency: 65, usage: 60, detail: 'Utility-first styling with design tokens.' },
      { name: '.NET', proficiency: 50, usage: 55, detail: 'Class libraries for game mods, packages via NuGet.' },
      { name: 'Unity', proficiency: 45, usage: 50, detail: "Working inside a shipped Unity game's systems." },
    ],
  },
  {
    slot: 'Snipers',
    note: 'Game modding',
    items: [
      { name: 'BepInEx', proficiency: 60, usage: 60, detail: 'Plugin loader and config system for Unity mods.' },
      { name: 'Harmony', proficiency: 55, usage: 55, detail: "Runtime patching of a Unity game's methods." },
      { name: '.NET RE', proficiency: 60, usage: 55, detail: 'Reverse engineering compiled game assemblies with REA.' },
    ],
  },
  {
    slot: 'SMGs',
    note: 'Embedded & systems',
    items: [
      { name: 'ESP32', proficiency: 60, usage: 55, detail: 'Door controller: schedule, motor control and fail-safes.' },
      { name: 'Raspberry Pi', proficiency: 55, usage: 50, detail: 'Hosts the web app and predator detection.' },
      { name: 'TI LaunchPad', proficiency: 50, usage: 35, detail: 'Microcontroller labs in coursework.' },
    ],
  },
  {
    slot: 'Heavies',
    note: 'Data & infra',
    items: [
      { name: 'PostgreSQL', proficiency: 60, usage: 60, detail: 'Neon serverless Postgres with migrations.' },
      { name: 'Docker', proficiency: 50, usage: 45, detail: 'Compose setup so reviewers can run the full stack.' },
      { name: 'Vercel', proficiency: 70, usage: 70, detail: 'Two projects, custom domains, env config.' },
    ],
  },
  {
    slot: 'Utility',
    note: 'Tools',
    items: [
      { name: 'Git & GitHub', proficiency: 75, usage: 95, detail: 'Releases, public repos, gh CLI.' },
      { name: 'Vite', proficiency: 70, usage: 70, detail: 'Dev server and build tool for React apps, this site included.' },
      { name: 'Linux', proficiency: 60, usage: 60, detail: 'Command line, Raspberry Pi OS.' },
      { name: 'VS Code', proficiency: 80, usage: 95, detail: 'Main editor.' },
      { name: 'Eclipse', proficiency: 60, usage: 40, detail: 'Java coursework IDE.' },
      { name: 'NuGet', proficiency: 50, usage: 45, detail: '.NET package management for mod builds.' },
    ],
  },
  {
    slot: 'Tactical',
    note: 'AI & dev practice',
    items: [
      { name: 'Claude Code', proficiency: 75, usage: 85, detail: 'AI-assisted coding, debugging and reverse engineering.' },
      { name: 'MCP', proficiency: 60, usage: 60, detail: 'Tool integrations such as Firecrawl and PostHog.' },
      { name: 'Agent workflows', proficiency: 60, usage: 60, detail: 'Multi-step AI agent setups for development work.' },
      { name: 'Agile/Kanban', proficiency: 60, usage: 55, detail: 'Two-semester capstone team workflow.' },
    ],
  },
]

// Match history: your projects. status drives the colored result banner.
// status: 'victory' (shipped/live), 'overtime' (released, still iterating), 'live' (in progress)
export const matches = [
  {
    title: 'Chez Hayet Bakery',
    map: 'Web // Full-stack',
    status: 'victory',
    result: 'Live',
    year: '2026',
    summary: 'Bakery website for a friend\'s future business: a Next.js front end and a separate Express API.',
    stats: [
      { label: 'Services', value: '2' },
      { label: 'Database', value: 'Postgres' },
      { label: 'Cost', value: '$0/mo' },
    ],
    details: [
      'Front end and API deployed as two Vercel projects on www and api subdomains.',
      'Order and contact forms persist to Neon Postgres; baker login uses hashed passwords and cookies.',
      'The split is intentional: it shows a clean REST boundary instead of collapsing everything into one app.',
    ],
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Vercel', 'Docker'],
    links: [
      { label: 'Live site', href: 'https://www.chezhayetoh.com' },
      { label: 'API repo', href: 'https://github.com/LynzTighers/chez-hayet-bakery-api' },
    ],
  },
  {
    title: 'Expedition',
    map: 'Game mod // Networking',
    status: 'overtime',
    result: 'Alpha v0.3.0',
    year: '2026',
    summary: 'Co-op expansion for Outward Definitive Edition: 4-player rooms, shared rewards, pings and a party map.',
    stats: [
      { label: 'Players', value: '4' },
      { label: 'Releases', value: '3' },
      { label: 'License', value: 'MIT' },
    ],
    details: [
      'Patches the game at runtime with Harmony through BepInEx 5.',
      'Raises Photon room size to 4 and syncs pings, nameplates and per-player map markers.',
      'Shares quest rewards, silver and loot so the whole party progresses together.',
    ],
    stack: ['C#', 'BepInEx', 'Harmony', 'Photon', 'Unity'],
    links: [{ label: 'GitHub', href: 'https://github.com/LynzTighers/Expedition' }],
  },
  {
    title: 'Coop Door',
    map: 'Embedded // Capstone',
    status: 'live',
    result: 'In progress',
    year: '2026',
    summary: 'Team capstone: a solar-powered chicken coop door on a sunrise/sunset schedule with predator detection.',
    stats: [
      { label: 'Controllers', value: '2' },
      { label: 'Budget', value: '$340' },
      { label: 'Team', value: '21' },
    ],
    details: [
      'Replaces a light-sensor door that a neighbor\'s porch light kept triggering.',
      'ESP32 runs the door state machine; a Raspberry Pi watches a camera for predators and can override it.',
      'Priority rules: predator override beats manual, manual beats the schedule.',
    ],
    stack: ['ESP32', 'C++', 'Raspberry Pi', 'Python', 'React', 'Node'],
    links: [],
  },
]
