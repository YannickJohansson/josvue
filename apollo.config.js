// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'playground',
        // URL to the GraphQL API
        url: 'http://localhost:4000/',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }