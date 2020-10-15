import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import tsconfig from './tsconfig.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'components/index.ts',
  external: ['react', '@emotion/core', '@emotion/styled'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      ...tsconfig.compilerOptions,
    }),
    commonjs(),
    nodeResolve({ browser: true, extensions }),

    // generate d.ts file
    dts(),

    // minifies es bundles
    terser(),

    // logs the filesize in cli when done
    filesize(),

    // Progress while building
    progress({ clearLine: false }),

    // Generates a statistics page
    visualizer({
      filename: './statistics.html',
      title: 'App Bundle size statistic',
    }),
  ],
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.types,
      format: 'es',
    },
  ],
};
