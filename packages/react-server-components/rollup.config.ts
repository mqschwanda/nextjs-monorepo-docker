import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  external: [
    'react/jsx-runtime',
  ],
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
