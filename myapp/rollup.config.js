// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'Gulu',
    file: 'dist/lib/gulu.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    vue({
      include: /\.vue$/,
    })
  ],
} 
