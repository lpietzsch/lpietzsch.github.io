const ghPages = require('gh-pages')
const ghToken = process.env.GH_TOKEN

if (ghToken) {
  ghPages.publish('public', {
    repo: `https://${process.env.GH_TOKEN}@github.com/lpietzsch/lpietzsch.github.io.git`,
    branch: 'master',
    silent: true
  }, () => {
    console.info('Finished gh-pages deployment')
  })
} else {
    console.error('GH_TOKEN environment variable was not set but is required for deployment')
}
