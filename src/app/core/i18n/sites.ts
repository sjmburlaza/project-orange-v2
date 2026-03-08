export const SITES = {
  ph: {
    lang: 'en',
    currency: 'PHP',
  },
  fr: {
    lang: 'fr',
    currency: 'EUR',
  },
};

export type SiteCode = keyof typeof SITES;
