
export default {
  basePath: 'https://maksymkhomich.github.io/unforgettable',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
