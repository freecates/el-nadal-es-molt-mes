const fetch = require('isomorphic-unfetch');

// next.config.js
module.exports = {
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/activitats': { page: '/activitats' },
      '/sorteig': { page: '/sorteig' },
      '/bases': { page: '/bases' },
    };
    const res = await fetch(
      `https://nadalesmoltmesdata.now.sh/activitats-nadal.json`
    );
    const data = await res.json();

    const as = data;

    as.forEach(a => {
      paths[`/a/${a.id}`] = {
        page: `/activitat`,
        query: { id: a.id },
      };
    });
    return paths;
  },
  exportTrailingSlash: true,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
