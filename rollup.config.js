import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/storage.js',
  output: {
    name: 'storage',
    file: 'dist/storage.js',
    format: 'umd'
  },
  plugins: [
    resolve(), // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    babel({
      exclude: ['node_modules/**']
    }),
    //uglify()
  ]
};
