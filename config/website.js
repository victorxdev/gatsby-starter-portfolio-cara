const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Victor's Blog, // Navigation and Site Title
  siteTitleAlt: 'Victor', // Alternative Site title for SEO
  siteTitleShort: 'Victor', // short_name for manifest
  siteHeadline: 'Victor', // Headline for schema.org JSONLD
  siteUrl: 'https://victortqw.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Victor's Professional Portfolio,
  author: 'Victor Tan Qin Wei', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@victorxmusic', // Twitter Username
  ogSiteName: 'victortqw', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
