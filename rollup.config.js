import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'components/index.ts',
  external: ['react', '@emotion/core', '@emotion/styled'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({ jsx: 'react' }),
    commonjs({ extensions: ['.js', '.ts'] }),
    nodeResolve({ browser: true }),

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
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  ],
};
