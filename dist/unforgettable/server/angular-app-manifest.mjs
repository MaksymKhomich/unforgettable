
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://maksymkhomich.github.io/unforgettable/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/unforgettable"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 542, hash: '2439e48166043b18025b87abed0558dced597c463f15ccc75f0df98259b61af6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '0223c70ddfaf5d0847aa6738e5d83658fbb5bdc009b52d28b2ad4dfaacea3709', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20887, hash: '6cfbabfe4673659eda4726673451ad6e91165df7f9c818581a199e905178915d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
