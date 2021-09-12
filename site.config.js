module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'f4dca81cc76648939bcd80737cab3254',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Solirpa Yang',
  domain: 'x.solirpa.com',
  author: 'Solirpa Yang',

  // open graph metadata (optional)
  description: '',
  socialImageTitle: 'Solirpa Yang',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'solirpa7',
  github: 'solirpa',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'solirpa/s-utterances',

  // Cusdis comments
  // cusdisHost: 'https://cusdis.solirpa.com',
  // cusdisAppId: 'cec7f1fd-bca7-4989-97c6-b35ded7b501b',
  cusdisHost: '',
  cusdisAppId: '',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
