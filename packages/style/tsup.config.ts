import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  clean: false,
  dts: true,
  entry: [
    'src/**/*.ts',
  ],
  external: [
    'react',
  ],
  format: [
    'esm',
  ],
  minify: false,
  splitting: true,
  treeshake: true,
  ...options,
}));
