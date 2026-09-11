/**
 * Project content. Each project gets:
 *   - a card on the home carousel and the Projects collage (cover)
 *   - its own page at /<slug>: photo hero, then either an `overview` (one photo + text) or
 *     three "trait" cards, an auto-scrolling photo reel, and a closing story.
 * Images live in /public/images/<slug>/ (see IMAGES.md). Order here = order on the home page.
 */
const img = (slug, name) => `/images/${slug}/${name}`
const reel = (slug, count) => Array.from({ length: count }, (_, i) => img(slug, `reel-${i + 1}.jpg`))

export const projects = [
  {
    slug: 'crosspaths',
    title: 'CrossPaths',
    subtitle: 'Co-Founder | 5,000+ Users | $2,000+ Revenue | 2026 McCloskey New Venture Semifinalist',
    cover: img('crosspaths', 'cover.jpg'),
    coverFocal: '50% 30%', // portrait photo: keep faces + banner title in the landscape crop
    hero: img('crosspaths', 'hero.jpg'),
    heroFocal: '50% 22%', // faces + top of the McCloskey banner in the wide crop
    cards: [
      {
        title: 'Building',
        image: img('crosspaths', 'card-1.jpg'),
        body: 'CrossPaths started with a simple question: why is meeting people at a school of 8,000 undergrads still so hard? I built the full-stack platform from the ground up: the web app, the backend and database, account and profile flows, and the payment system behind our paid features. Shipping a product that real students log into every day meant caring about the unglamorous parts too, from load times to moderation tools.',
      },
      {
        title: 'Matching',
        image: img('crosspaths', 'card-2.jpg'),
        body: 'The heart of CrossPaths is its recommendation engine. Instead of swiping on photos, users answer questions about their personality, interests, and values. Those answers are turned into semantic embeddings, and cosine similarity ranks the most compatible matches across campus. Iterating on the model with real user feedback taught me that a recommender is judged by the conversations it starts, not by its offline metrics.',
      },
      {
        title: 'Scaling',
        image: img('crosspaths', 'card-3.jpg'),
        body: 'Word of mouth carried CrossPaths to 5,000+ users, and paid features turned a side project into a profitable business with $2,000+ in revenue. Along the way we handled launch-week traffic spikes, support requests, and the occasional very public bug. In 2026 CrossPaths was recognized as a semifinalist in the McCloskey New Venture Competition.',
      },
    ],
    reel: reel('crosspaths', 3),
    closing: {
      title: 'Ownership',
      body: 'The night CrossPaths launched, sign-ups came in faster than anything we had planned for. Within a few hours the recommendation job that quietly ran every few minutes was taking longer than the interval between runs, and matches started arriving late. There was nobody to escalate to; my co-founder and I were the entire engineering team. I spent the night rewriting the matching pipeline to batch embeddings and cache similarity scores, deploying between refreshes of a dashboard that would not stop climbing. By morning matches were instant again, and we had crossed a thousand users. That night taught me what owning a product actually means: when something breaks, the only acceptable answer is to fix it, and the best products are built by people who cannot stand to watch them fail.',
    },
  },
  {
    slug: 'nd-trading-competition',
    title: 'ND Trading Competition',
    subtitle: 'Founder & Competition Lead | Rust/Python Exchange | 50 Competitors | $2,000+ in Prizes',
    cover: img('nd-trading-competition', 'cover.jpg'),
    hero: img('nd-trading-competition', 'hero.jpg'),
    cards: [
      {
        title: 'Initiative',
        image: img('nd-trading-competition', 'card-1.jpg'),
        body: 'Notre Dame had never hosted an algorithmic trading competition, so I built one. I pitched and secured sponsorships from Jane Street, SIG, DRW, Hudson River Trading, Optiver, Belvedere Trading, Jump Trading, Kalshi, and others, funding over $2,000 in cash prizes and awards and putting the event on the radar of the firms students most want to work for.',
      },
      {
        title: 'Engineering',
        image: img('nd-trading-competition', 'card-2.jpg'),
        body: 'The competition runs on an exchange I built from scratch in Rust and Python: a sub-microsecond matching engine, a TCP order gateway, a real-time market data feed, and a Python-based P&L and leaderboard system. Competitors connect their algorithms directly to the gateway and trade against each other in a simulated high-frequency environment.',
      },
      {
        title: 'Execution',
        image: img('nd-trading-competition', 'card-3.jpg'),
        body: 'From 100+ applicants I selected 50 competitors and led them through the build, testing, and live trading rounds. Running the event live meant monitoring the exchange, answering questions in real time, and keeping the leaderboard honest when strategies did things nobody expected.',
      },
    ],
    reel: reel('nd-trading-competition', 4),
    closing: {
      title: 'Building the Exchange',
      body: 'The first version of the matching engine was written in Python, and it was fine right up until fifty algorithms started hammering it at once. Orders queued, fills lagged, and the leaderboard drifted out of sync with reality. With a few weeks to go before the live rounds I rewrote the core in Rust: a lock-free order book, a single-threaded matching loop, and a TCP gateway that parsed and validated orders before they ever touched the book. Getting from milliseconds to sub-microsecond match latency took long nights of profiling and a lot of reading about how real exchanges are built, but on competition day the engine never blinked. Founding the competition taught me to sell an idea to sponsors, but building the exchange taught me something I value more: how much of trading is really infrastructure.',
    },
  },
  {
    slug: 'garda-capital-partners',
    title: 'Garda Capital Partners',
    subtitle: 'Trading Analyst Intern, US Rates | Fed Funds Futures vs. Prediction Markets | Summer 2026',
    cover: img('garda-capital-partners', 'cover.jpg'),
    coverFocal: '50% 55%', // keep the group + GARDA sign centred in tighter crops
    hero: img('garda-capital-partners', 'hero.jpg'),
    heroFocal: '50% 55%',
    // Overview layout: one photo on the left, the story on the right.
    overview: {
      image: img('garda-capital-partners', 'chart.jpg'),
      alt: 'Kalshi probability versus the Fed Funds swap-implied probability of a July hike',
      ratio: '3/2',
      title: 'The Internship',
      paragraphs: [
        'In the summer of 2026 I was a Trading Analyst Intern on the US Rates desk at Garda Capital Partners in New York. The desk trades Treasuries, interest rate swaps, and SOFR and Fed Funds futures, and my job was to build tools that helped the traders see the market faster and to bring them ideas of my own.',
        'My main project was an automated pipeline that processes more than 120,000 earnings call transcripts and audio files to pull out what executives are saying about pricing, inflation, labor, tariffs, and demand. It feeds a searchable dashboard and a weekly report email the desk uses to track how corporate commentary is shifting ahead of the official data.',
        'Ahead of the July FOMC meeting I noticed that Fed Funds futures and prediction markets like Kalshi were pricing very different odds of a hike. After normalizing both into implied probabilities, the gap was roughly 15 percentage points, which is the chart shown here. I modeled the trade’s P&L across hike, hold, and cut scenarios and presented the event-driven arbitrage to the desk.',
        'The summer taught me how much of trading is infrastructure: the data, the tooling, and the discipline to try to prove yourself wrong before you put on a position.',
      ],
    },
  },
  {
    slug: 'pathaware',
    title: 'PathAware',
    subtitle: 'Hesburgh Hackathon | Navigation Assistant for Blind and Low-Vision Users | Real-Time Computer Vision',
    cover: img('pathaware', 'cover.jpg'),
    coverFocal: '50% 40%', // portrait build photo: show the taped-on phone and the laptop
    hero: img('pathaware', 'hero.jpg'),
    heroFocal: '50% 45%',
    overview: {
      image: img('pathaware', 'team.jpg'),
      alt: 'The PathAware team at the Hesburgh Hackathon',
      ratio: '7/5',
      title: 'The Project',
      paragraphs: [
        'PathAware is a navigation assistant for blind and low-vision users that my team of three built at the Hesburgh Hackathon in April 2026. A phone strapped to your chest becomes a forward-facing camera, and the app tells you what is in your path before you reach it.',
        'The backend runs a live perception loop: a YOLO object detector finds people, doors, furniture, and vehicles in the video feed, and a hazard engine scores anything that overlaps the walking zone ahead, tracking objects frame to frame and describing them in plain language, from “a few steps ahead” to “immediately in front of you.” You can also ask the scene a question out loud. Whisper transcribes it, a vision model answers from the current frame, and the reply is spoken back.',
        'To keep it fast enough to be useful, the phone streams video over RTMP to a GPU server on AWS that handles decoding, inference, and hazard scoring, and serves a React dashboard with the annotated feed, alerts, and a running transcript. We tested it the only way you can at a hackathon: walking the halls of Hesburgh with a phone taped to a t-shirt.',
      ],
    },
  },
  {
    slug: 'dunne-hall-ra',
    title: 'Dunne Hall RA',
    subtitle: 'Resident Assistant | Dunne Hall | University of Notre Dame',
    cover: img('dunne-hall-ra', 'cover.jpg'),
    hero: img('dunne-hall-ra', 'hero.jpg'),
    heroFocal: '50% 62%', // keep the group in frame in the wide hero crop
    cards: [
      {
        title: 'Community',
        image: img('dunne-hall-ra', 'card-1.jpg'),
        body: 'Dunne Hall is home to a couple hundred undergrads, and as a Resident Assistant my job is to make it feel like one. I plan section events, welcome first-years into hall traditions, and try to know every resident on my floor by name and by story.',
      },
      {
        title: 'Responsibility',
        image: img('dunne-hall-ra', 'card-2.jpg'),
        body: 'RAs are the first call on nights and weekends. On duty I handle everything from lockouts and roommate conflicts to real emergencies, coordinating with hall staff and campus resources to keep residents safe and supported.',
      },
      {
        title: 'Presence',
        image: img('dunne-hall-ra', 'card-3.jpg'),
        body: 'Most of the job is showing up: door open, walking the halls, checking in on the resident who has gone quiet. Small, consistent moments matter more than any single event, and they are what turn a dorm into a home.',
      },
    ],
    reel: reel('dunne-hall-ra', 3),
    closing: {
      title: 'Service',
      body: 'Long before Dunne Hall, I learned what it means to be responsible for other people. As an Eagle Scout I organized and led a $4,000, nine-month project for Matthew 25, a Nashville nonprofit supporting veterans in recovery, coordinating more than 300 volunteer hours. As a counselor at Notre Dame Vision I spent six weeks leading small groups for over 500 high school students, guiding conversations about leadership and faith. Being an RA is the same work in a different setting: it is less about the events on the calendar and more about being the person residents trust at 2 a.m. That trust is earned slowly, through hundreds of ordinary conversations, and it is the part of the job I am proudest of.',
    },
  },
]

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug)
