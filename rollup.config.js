import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import copy from 'rollup-plugin-copy-glob';
import images from 'rollup-plugin-images';

import svgr from '@svgr/rollup';
import pkg from './package.json';

const isWatching = process.argv.includes('-w') || process.argv.includes('--watch');

export default {
  external: [
    'react',
    'react-proptypes',
    'styled-components',
    'react-autocomplete',
  ],
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],

  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    resolve(),
    images(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs(),
    copy([
      {files: 'src/theme/**/*', dest: 'dist/scss'}
    ], { verbose: true, watch: isWatching })
  ]
}
