
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';
import browsersync from 'rollup-plugin-browsersync';
import proxy from 'http-proxy-middleware';
import history from 'connect-history-api-fallback';


import config from './rollup.config.js';

let apiProxy;
if (process.env.BUILD === 'mock-server') {
  console.log('Mock Server my tata');

  apiProxy = proxy('/posts', {
    target: 'http://localhost:9000',
    changeOrigin: false,
    onProxyReq(proxyReq, req, res) {
      const url = new URL(req.url, 'http://localhost:9000');
    }
  });

} else {
  apiProxy =
    proxy('/posts', {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        const url = new URL(req.url, 'https://jsonplaceholder.typicode.com');
        proxyReq.path = url.pathname + '?' + url.searchParams.toString();
      }
    });
}
const browsersyncOpts = {
  cors: true,
  server: {
    baseDir: 'dist',
    middleware: [apiProxy, history()]
  },
  ui: false,
  logLevel: 'info'
};

config.plugins = [
  resolve({ module: false, extensions: ['.css', '.html', '.js', '.json', '.less', '.node', '.vue'] }),
  commonjs(),
  postcss(),
  vue(),
  copy({ public: 'dist' }),
  browsersync(browsersyncOpts)
];

config.watch = {
  chokidar: true,
  include: ['./src/**', './public/**']
};

export default config;
