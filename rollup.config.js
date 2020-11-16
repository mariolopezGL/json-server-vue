import pkg from './package.json';

export default {
  input: './src/main.js',
  output: {
    banner: `/*!\n * JsonServerExample v${pkg.version}\n * (c) ${new Date().getFullYear()} \n */`,
    file: './dist/app.min.js',
    format: 'iife',
    globals: {
      axios: 'axios',
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    },
    name: 'JsonServerExample',
    sourcemap: false
  },
  external: ['axios', 'vue', 'vue-router', 'vuex']
};
