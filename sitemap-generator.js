const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://nadalesmoltmes.now.sh',
  ignoredPaths: ['admin'],
  pagesDirectory: 'pages',
  targetDirectory: 'static/'
})
