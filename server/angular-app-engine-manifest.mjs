
export default {
  basePath: 'https://zeph180.github.io/CareTaker',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
