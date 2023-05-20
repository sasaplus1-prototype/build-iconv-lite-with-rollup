import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'index.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
  ]
}
