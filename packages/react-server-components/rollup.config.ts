import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

export default {
  external: [
    'react/jsx-runtime',
  ],
  input: './src/index.ts',
  output: {
    dir: './dist/',
    experimentalMinChunkSize: true,
    format: 'cjs',
    minifyInternalExports: true,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    postcss({
      autoModules: true,
      extract: true,
      inject: false,
      minimize: true,
      modules: true,
      namedExports: false,
      plugins: [
        autoprefixer(),
      ],
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
  ],
  treeshake: true,
};
