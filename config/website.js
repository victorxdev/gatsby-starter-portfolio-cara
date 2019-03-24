const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Victor - Digital Portfolio", // Navigation and Site Title
  siteTitleAlt: "Victor Digital Portfolio", // Alternative Site title for SEO
  siteTitleShort: "Victor Digital Portfolio", // short_name for manifest
  siteHeadline: "Victor - Digital Portfolio", // Headline for schema.org JSONLD
  siteUrl: "https://victortqw.netlify.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Victor Digital Portfolio",
  author: "Victor Digital Portfolio", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@victorxmusic", // Twitter Username
  ogSiteName: "victortqw", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-136591723-1",
  fullstoryID: "K3AVM",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};