/* eslint-disable */
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import html from 'rollup-plugin-bundle-html'
export default [
  {
    input: 'src/mix-index.js',
    plugins: [
      commonjs({
        include: '**'
      }),
      terser(),
      html({
          template: 'src/entry/index.html',
          dest: "builds/mix/rollup/web",
          filename: 'index.html'
      })
    ],
    output: {
      file: __dirname + '/builds/mix/rollup/web/index.js',
      format: 'iife',
      name: 'index'
    }
  },
  {
    input: 'src/mix-lib.js',
    plugins: [
      commonjs({
        include: '**'
      }),
      terser()
    ],
    output: {
      file: __dirname + '/builds/mix/rollup/node/lib.js',
      format: 'umd',
      name: 'lib'
    }
  }
]
