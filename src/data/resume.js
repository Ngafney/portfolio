/**
 * Resume content (mirrors Gafney_Nathan_Resume.pdf). Edit here to update the resume page.
 */
export const resume = {
  name: 'Nathan J. Gafney',
  contact: [
    { label: 'ngafney@nd.edu', href: 'mailto:ngafney@nd.edu' },
    { label: 'Notre Dame, IN' },
    { label: '(629) 203-4245', href: 'tel:+16292034245' },
    { label: 'linkedin.com/in/nathangafney', href: 'https://www.linkedin.com/in/nathangafney/' },
  ],

  education: [
    {
      org: 'University of Notre Dame — Mendoza College of Business',
      date: 'May 2027',
      lines: [
        { label: 'Majors', text: 'Finance and Applied & Computational Mathematics and Statistics (ACMS)' },
        { label: 'GPA', text: '3.9  |  ACT: 35' },
      ],
    },
  ],

  experience: [
    {
      org: 'Garda Capital Partners',
      role: 'Trading Analyst Intern — US Rates',
      location: 'New York, NY',
      date: 'Summer 2026',
      bullets: [
        'Built an automated pipeline processing 120,000+ earnings call transcripts and audio files to identify pricing, inflation, labor, tariff, and demand commentary from executives, powering a searchable dashboard and weekly report email used by the trading desk.',
        'Identified and presented an event-driven arbitrage between Fed Funds futures and prediction markets around the July FOMC decision, capturing a 15-percentage-point discrepancy in implied hike probabilities and modeling P&L across policy scenarios.',
      ],
    },
    {
      org: 'Student International Business Council (SIBC)',
      sub: [
        {
          role: 'Garda Capital Partners — Project Leader',
          location: 'New York, NY',
          date: 'Spring 2026',
          bullets: [
            "Led a 10-person SIBC team in analyzing AI's impact on early-career hiring by scraping IrishCompass profiles and building a longitudinal dataset linking internships to subsequent full-time employment across industries.",
            'Analyzed internship-to-full-time conversion rates by cohort and industry, identifying differences in return-offer trends across sectors with varying exposure to AI adoption.',
          ],
        },
        {
          role: 'Deutsche Bank — Analyst',
          location: 'New York, NY',
          date: 'Spring 2025',
          bullets: [
            'Collaborated with the Deutsche Bank Healthcare Team to evaluate a leveraged buyout of Acadia Healthcare (Nasdaq: ACHC), a leading behavioral health provider with strong EBITDA margins, favorable industry tailwinds, and a scalable facility expansion model.',
            'Built a 6-year DCF model using a 4.7% perpetuity growth rate and 9.9% WACC to arrive at a $57.01 implied share price (108% upside); projected a 22% IRR and 2.8x MOIC over a 5-year holding period, supported by scalable facility growth and recession-resistant demand.',
          ],
        },
        {
          role: 'Sixth Street Partners — Analyst',
          location: 'New York, NY',
          date: 'Fall 2024',
          bullets: [
            "Analyzed Sixth Street's 2020 $1bn investment in Airbnb and debated funding via convertible preferred or redeemable preferred equity.",
          ],
        },
      ],
    },
    {
      org: 'Notre Dame Trading Competition',
      role: 'Competition Lead',
      location: 'Notre Dame, IN',
      date: 'Fall 2025',
      bullets: [
        "Founded and led Notre Dame's first algorithmic trading competition; secured sponsorships from Jane Street, SIG, DRW, HRT, Optiver, Belvedere Trading, Jump Trading, Kalshi, and others to provide over $2,000 in cash prizes and awards.",
        'Selected 50 competitors from 100+ applicants to build live trading algorithms in a simulated high-frequency trading environment.',
        'Built the exchange infrastructure (Rust/Python), including a sub-microsecond matching engine, TCP order gateway, real-time market-data feed, and a Python-based P&L/leaderboard system.',
      ],
    },
    {
      org: 'AfterQuery Experts',
      role: 'Finance and Operations',
      location: 'San Francisco, CA',
      date: 'Summer 2025',
      bullets: [
        'Built detailed training datasets from annual reports and developed DCF and LBO models for use in training frontier AI models.',
      ],
    },
    {
      org: 'CrossPaths',
      role: 'Co-Founder',
      location: 'Notre Dame, IN',
      date: 'Spring 2024',
      bullets: [
        'Co-founded and scaled a profitable student dating platform to 5,000+ users, generating $2,000+ in revenue from paid features.',
        'Built the full-stack platform and machine learning recommendation engine, using semantic embeddings and cosine similarity to personalize matches based on personality, interests, and values; recognized as a 2026 McCloskey New Venture Competition semifinalist.',
      ],
    },
  ],

  leadership: [
    {
      org: 'Notre Dame Vision',
      role: 'Camp Counselor',
      location: 'Notre Dame, IN',
      date: 'Summer 2024',
      bullets: [
        'Counselor and small-group leader for over 500 high school students during a 6-week summer camp, guiding discussions on leadership and faith. Organized activities and team-building games while fostering an inclusive environment and encouraging personal growth.',
      ],
    },
    {
      org: 'Eagle Scout',
      role: 'Troop 413, Boy Scouts of America',
      location: 'Nashville, TN',
      date: '2016 – 2022',
      bullets: [
        'Organized, planned, and led an Eagle Scout Project benefiting Matthew 25 in Nashville, TN, a nonprofit that helps provide support and rehabilitation for struggling Veterans. This $4,000 project spanned 9 months and involved over 300 hours of execution.',
      ],
    },
  ],

  skills: [
    { label: 'Programming', text: 'Python, Rust, C++, SQL  |  Software: Excel, PowerPoint, Capital IQ, Git' },
    { label: 'Markets', text: 'Bloomberg Terminal, U.S. Treasuries, Interest Rate Swaps, SOFR/Fed Funds Futures, Treasury Futures, Fixed Income RV' },
    { label: 'Interests', text: 'Notre Dame Running Club | Soccer Refereeing | Weightlifting | Clash of Clans | Cooking | Kalshi Market Making' },
    { label: 'Other Activities', text: "Dublin Summer '25 Study Abroad | Campus Ministry Small Group Leader | ND DELTA | Dunne Hall RA" },
  ],
}
