export interface ServiceEntry {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  order: number;
}

export const services: ServiceEntry[] = [
  {
    slug: 'strategie',
    title: 'Strategie',
    shortDesc: 'ROI & Groei',
    icon: '♟',
    order: 1,
  },
  {
    slug: 'analyse',
    title: 'Analyse',
    shortDesc: 'Audits & Data',
    icon: '📊',
    order: 2,
  },
  {
    slug: 'content',
    title: 'Content',
    shortDesc: 'Copywriting & Structuur',
    icon: '✍',
    order: 3,
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    shortDesc: 'Vitals & Crawlability',
    icon: '⚙',
    order: 4,
  },
  {
    slug: 'offpage-seo',
    title: 'Offpage SEO',
    shortDesc: 'Linkbuilding & PR',
    icon: '🔗',
    order: 5,
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortDesc: 'Maps & Lokale dominantie',
    icon: '📍',
    order: 6,
  },
  {
    slug: 'geo',
    title: 'GEO',
    shortDesc: 'Generative Engine Optimization',
    icon: '🤖',
    order: 7,
  },
];
