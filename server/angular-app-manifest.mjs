
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://zeph180.github.io/CareTaker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CareTaker"
  },
  {
    "renderMode": 2,
    "route": "/CareTaker/about"
  },
  {
    "renderMode": 2,
    "route": "/CareTaker/amenities"
  },
  {
    "renderMode": 2,
    "route": "/CareTaker/contact-us"
  },
  {
    "renderMode": 2,
    "route": "/CareTaker/services"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1338, hash: '28c75e65db8972a3aa7343d08fda715ddf58921b25acaafe14aa702928505b17', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1554, hash: 'ec638125cd6351c2f2ada3fe477b28c20c22ff4728ff6aa5f35331e0cfd845c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'amenities/index.html': {size: 10743, hash: 'b93f0c94ea819757f8a5c8310043e43244ddc1b9e2176c8d26e91fb31eddb719', text: () => import('./assets-chunks/amenities_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22944, hash: 'acd732f7d5e7e56e668e9f79971e0f07dd287f50e8a3d86707f40b9ee9801617', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 34282, hash: '61f53aead469148a120ef00293af3cb993c7d784cf884efcba40caad02ef785d', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16821, hash: 'f16c7ea85b9905418aafe0efb160fec31bb72c066f908875e8821dc81d6732d9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 24191, hash: '47aa5ec77226e26ac434e0b8ae08877d45dd305859410e241cc6122323982243', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'styles-UHXDSU4D.css': {size: 9853, hash: 'Ktiq7AHIiBU', text: () => import('./assets-chunks/styles-UHXDSU4D_css.mjs').then(m => m.default)}
  },
};
