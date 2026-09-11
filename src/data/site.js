/**
 * Site-wide settings. Edit text and links here.
 */
export const site = {
  name: 'Nathan Gafney',
  title: "Nathan Gafney's Portfolio",

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Resume', to: '/resume' },
    { label: 'Projects', to: '/projects' },
  ],

  linkedin: 'https://www.linkedin.com/in/nathangafney/',
  email: 'ngafney@nd.edu',

  // Header / mobile-menu icons (left to right).
  social: [
    { type: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathangafney/' },
    { type: 'github', label: 'GitHub', href: 'https://github.com/Ngafney' }, // TODO: add your GitHub username
    { type: 'mail', label: 'Email', href: 'mailto:ngafney@nd.edu' },
  ],

  // Drop the PDF into /public with this exact name.
  resumePdf: '/Gafney_Nathan_Resume.pdf',

  hero: {
    heading: "I'm Nathan Gafney, a Finance & Applied Math major",
    intro:
      "I'm a senior at Notre Dame studying Finance and Applied & Computational Mathematics. I spent this summer on the US Rates desk at Garda Capital Partners, and I like building things.",
    scroll: "Below: an exchange I wrote in Rust, a startup I co-founded, and a few other things I've built.",
  },

  // Home page images (see IMAGES.md).
  images: {
    profile: '/images/home/profile.jpg',
    deco1: '/images/home/deco-1.png',
    deco2: '/images/home/deco-2.png',
    deco3: '/images/home/deco-3.png',
  },

  resumePage: {
    intro:
      "I'm a Finance and ACMS student at Notre Dame's Mendoza College of Business (Class of 2027) interested in rates trading, quantitative research, and building software for markets. Most recently I interned on the US Rates desk at Garda Capital Partners in New York.",
    photos: [
      { src: '/images/resume/photo-1.jpg', ratio: '3/2' },
      { src: '/images/resume/photo-2.jpg', ratio: '4/5' },
      { src: '/images/resume/photo-3.jpg', ratio: '4/5' },
      { src: '/images/resume/photo-4.jpg', ratio: '3/2' },
    ],
  },
}
