export const siteConfig = {
  siteUrl: 'https://magnaye.online',
  owner: {
    fullName: 'James Michael D. Magnaye',
    displayName: 'James Magnaye',
    firstName: 'James',
    username: 'ratatatatcode',
    role: 'Full Stack Developer & UI/UX Engineer',
  },
  introduction: {
    eyebrowSuffix: 'about-me.md',
    headline: 'I build practical digital solutions for growing ideas.',
    lead: 'I build practical websites and digital solutions',
    emphasis: 'for ideas that are ready to move forward.',
    summary:
      'With a focus on clear user experiences, reliable software, and thoughtful AI-assisted workflows.',
  },
  serviceCta: {
    eyebrow: 'NEED A DIGITAL SOLUTION?',
    title: 'Have an idea, but not sure where to start?',
    cleanDescription:
      "You don't need to hire a full IT team to get moving. If you have an idea or simply need guidance on the right prompts, tools, and setup, I can help you plan it and turn it into something useful.",
    description:
      "You don't need to hire a full IT team to get moving. If you have an idea—or simply need guidance on the right prompts, tools, and setup—I can help you plan it and turn it into something useful.",
    actionLabel: "Let's talk",
  },
  about: {
    firstLead: 'a quick learner who enjoys turning ideas into reality,',
    firstSummary:
      'from games and software applications to startup projects. As a freelancer, I find it rewarding to help clients achieve their goals, with many earning perfect scores or successfully presenting projects I helped develop.',
    secondLead: 'I am seeking opportunities as a Software Developer',
    secondSummary:
      'or in a role that aligns with my skills and interests. I am also open to paid training programs if required.',
  },
  contact: {
    phone: '09397458955',
    email: 'jamesdmagnaye@gmail.com',
  },
  socialLinks: {
    facebook: 'https://facebook.com/hashtugs',
    linkedin: 'https://www.linkedin.com/in/magnaye/',
    github: 'https://www.github.com/ratatatatcode',
  },
  documents: {
    cv: '/docs/cv.pdf',
    resume: '/docs/resume.pdf',
    certifications:
      'https://drive.google.com/drive/folders/16-ggmo0RPa-X_PM_Xk0mKxUjOUnrzWtY?usp=sharing',
  },
  github: {
    username: 'ratatatatcode',
    contributionYear: 2026,
  },
  seo: {
    title: 'Magnaye | Software Developer',
    titleTemplate: '%s | James Magnaye',
    applicationName: 'Magnaye Portfolio',
    description:
      'James Michael Magnaye is a full stack developer and UI/UX-focused creator building modern websites, web applications, and AI-powered digital experiences for clients and startups.',
    socialTitle: 'James Magnaye | Full Stack Developer & UI/UX Engineer',
    socialDescription:
      'Full stack developer and UI/UX designer creating modern websites, web apps, and AI-powered experiences.',
    twitterHandle: '@ratatatatcode',
    previewImage: '/logo/profile.png',
    keywords: [
      'James Magnaye',
      'James Michael',
      'Magnaye',
      'Full Stack Developer',
      'Next.js Developer',
      'React Developer',
      'UI/UX Designer',
      'Software Developer Philippines',
      'Freelance Web Developer',
      'Portfolio Website',
      'Web Application Developer',
    ],
  },
} as const;

export const githubStreakUrl = `https://github-readme-streak-stats.herokuapp.com?user=${encodeURIComponent(siteConfig.github.username)}&theme=dark&hide_border=false`;
